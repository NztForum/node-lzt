interface LZTApiParams {
    token: string;
    fetchParams?: RequestInit;
    interval_between_requests?: number;
}
export class LZTApi {
    constructor(options: LZTApiParams);
    options: RequestInit;
    caller: LZTApiCaller;
}

import { LZTApiCaller } from "./caller.js";
