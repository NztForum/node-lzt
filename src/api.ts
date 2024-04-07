import PQueue from 'p-queue'
import { LZTApiError } from './error'
import { type Dispatcher, FormData, request } from 'undici'

class LZTApi {
    queue: PQueue

    constructor (private options: LZTApiOptions) {
        this.options = {
            locale: 'ru',
            interval: 1000,
            intervalCap: 3,
            endpoint: 'https://api.zelenka.guru',
            marketEndpoint: 'https://api.lzt.market',
            ...options
        }

        this.queue = new PQueue({
            concurrency: 1,
            interval: this.options.interval,
            intervalCap: this.options.intervalCap
        })
    }

    async call (
        method: Dispatcher.HttpMethod,
        url: string,
        params: Record<string, any> = {}
    ) {
        const options: Partial<Dispatcher.DispatchOptions> = {
            method,
            headers: {
                Authorization: `Bearer ${this.options.token}`
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

        const result = await this.queue.add(() => request(url, options))
        const { statusCode, headers, body } = result as Dispatcher.ResponseData

        if (statusCode != 200 && !headers['content-type']?.includes('application/json'))
            throw new LZTApiError(`HTTP Error ${statusCode}`)

        const json = await body.json() as ApiResponse

        if ('errors' in json)
            throw new LZTApiError(json.errors.join('\n'))
        if ('error' in json)
            throw new LZTApiError(json.error_description || json.error)

        return json
    }
}

export { LZTApi }