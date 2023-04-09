import fetch, { FormData } from 'node-fetch'
import PQueue from 'p-queue'
import { LZTApiError } from './errors.js'

const DEFAULT_MIN_INTERVAL_BETWEEN_REQUESTS_MS = 3000;

export class LZTApiCaller {
	constructor(options = {}) {
		this.options = options
		if(this.options.interval_between_requests === undefined) {
			this.options.interval_between_requests = DEFAULT_MIN_INTERVAL_BETWEEN_REQUESTS_MS;
		} 
		this.queue = new PQueue({ concurrency: 1 })
	}
	
	async call(method, path, params = {}) {
		const url = new URL(path, this.options.endpoint)
		const options = {
			...this.options.fetchParams,
			method,
			headers: {
				Authorization: `Bearer ${this.options.token}`,
				...this.options.fetchParams?.headers
			}
		}
		
		params.locale = params.locale || this.options.locale
		
		if(method === 'GET') {
			for(const key of Object.keys(params))
				if(params[key] !== undefined)
					url.searchParams.set(key, params[key])
		} else {
			options.body = new FormData()
			for(const key of Object.keys(params))
				if(params[key] !== undefined)
					options.body.set(key, params[key])
		}
		
		const promise = this.queue.add(() => fetch(url.href, options))
		this.queue.add(() => new Promise(r => setTimeout(r, this.options.interval_between_requests)))
		const resp = await promise

		if(resp.status !== 200) {
			throw new LZTApiError(resp.statusText);
		}

		const json = await resp.json();
		
		if(json.errors)
			throw new LZTApiError(json.errors)
		if(json.error)
			throw new LZTApiError(json.error_description || json.error)
		
		return json
	}
}
