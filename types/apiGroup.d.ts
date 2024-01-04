import type { LZTApiCaller } from "./caller";
export class LZTApiGroup {
    constructor(caller: LZTApiCaller);
    caller: LZTApiCaller;
}
