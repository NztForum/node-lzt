interface LZTApiOptions {
    // Forum API Endpoint URL
    // @default https://api.zelenka.guru
    endpoint?: string

    // Market API Endpoint URL
    // @default https://api.lzt.market
    marketEndpoint?: string

    // Preferred language
    // @default ru
    locale?: 'ru' | 'en'

    // Interval between `intervalCap` requests in milliseconds to avoid 429 error
    // @default 1000 ms
    interval?: number

    // Max requests per `interval` to avoid 429 error
    // @default 3
    intervalCap?: number

    // Your [access token](https://zelenka.guru/account/api/get-token)
    token: string
}

type ApiResponse =
    { errors: [string[]] } |
    { error: string, error_description?: string } |
    { system_info: { visitor_id: number, time: number }, [key: string]: any }