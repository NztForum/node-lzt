interface LZTApiCallerOptions {
    endpoint: string;
    token?: string;
    locale?: string;
    interval_between_requests?: number;
    fetchParams: RequestInit;
}

export class LZTApiCaller {
    constructor(options?: LZTApiCallerOptions);
    options: LZTApiCallerOptions;
    queue: PQueue<
        import("p-queue/dist/priority-queue.js").default,
        import("p-queue").QueueAddOptions
    >;
    call(
        method: "GET" | "POST" | "PUT" | "DELETE",
        path: string,
        params?: Record<string, any>,
    ): Promise<any>;
}
import PQueue from "p-queue";
