import type { LZTApi } from '../api'

export class ApiGroup {
    constructor (
        protected endpoint: string,
        protected api: LZTApi
    ) {}
}