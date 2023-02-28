import * as LZTApiGroups from './api/index.js'
import { LZTApiCaller } from './caller.js'

export class LZTApi {
	constructor(options) {
		this.options = {
			endpoint: 'https://api.lzt.market/',
			locale: 'ru',
			...options
		}
		
		this.caller = new LZTApiCaller(this.options)
		
		for(const key in LZTApiGroups) {
			const Group = LZTApiGroups[key]
			const group = new Group(this.caller)
			this[Group.name] = group
		}
	}
}
