import PQueue from 'p-queue'
import { LZTApiError } from './error'
import { type Dispatcher, FormData, request } from 'undici'

import ForumApi from './groups/forum'
import MarketApi from './groups/market'

class LZTApi {
    queue: PQueue
    options: LZTApiOptions

    forum: ForumApi
    market: MarketApi

    constructor (
        options: Partial<LZTApiOptions> & { token: string }
    ) {
        this.options = {
            locale: 'ru',
            interval: 3000,
            rate_limit: [3, 20],
            endpoint: 'https://api.zelenka.guru',
            marketEndpoint: 'https://api.lzt.market',
            ...options
        }

        const rl = this.options.rate_limit
        this.queue = new PQueue({
            concurrency: 1,
            interval: rl[1],
            intervalCap: rl[0] * 2
        })

        this.forum = new ForumApi(this.options.endpoint, this)
        this.market = new MarketApi(this.options.marketEndpoint, this)
    }

    async call (
        method: Dispatcher.HttpMethod,
        url: string,
        params: Record<string, any> = {}
    ): Promise<any> {
        const options: Partial<Dispatcher.DispatchOptions> = {
            method,
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'node-lzt/1.0.0',
                'Authorization': `Bearer ${this.options.token}`
            }
        }

        params.locale ||= this.options.locale

        if (['GET', 'PUT', 'DELETE'].includes(method)) {
            url += '?' + String(new URLSearchParams(params))
        } else {
            options.body = new FormData()
            for (const key in params)
                options.body.set(key, params[key])
        }

        const result = this.queue.add(() => request(url, options))
        this.queue.add(() => new Promise(r => setTimeout(r, this.options.interval)))

        const { statusCode, headers, body } = await result as Dispatcher.ResponseData

        if (statusCode != 200 && !headers['content-type']?.includes('application/json')) {
            throw new LZTApiError(`HTTP Error ${statusCode}`)
        }

        const json = await body.json() as ApiResponse | ApiError

        if ('errors' in json) {
            throw new LZTApiError(json.errors.join('\n'))
        } else if ('error' in json) {
            throw new LZTApiError(json.error_description || json.error)
        }

        return json
    }
}

export { LZTApi }