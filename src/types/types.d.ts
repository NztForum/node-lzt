interface LZTApiOptions {
    // Forum API Endpoint URL
    // @default https://api.zelenka.guru
    endpoint: string

    // Market API Endpoint URL
    // @default https://api.lzt.market
    marketEndpoint: string

    // Preferred language
    // @default ru
    locale: 'ru' | 'en'

    // API limit for requests ([max_requests, seconds])
    // @default [3, 20]
    rate_limit: [number, number]

    // Interval between requests to avoid 429 error
    // @default 3000 ms
    interval: number

    // Your [access token](https://zelenka.guru/account/api/get-token)
    token: string
}

type ApiError =
    { errors: [string[]] } |
    { error: string, error_description?: string }

interface ApiResponse {
    system_info: {
        visitor_id: number
        time: number
    }
}