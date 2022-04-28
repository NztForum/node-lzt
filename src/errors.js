export class LZTApiError extends Error {
	constructor(error) {
		super(
			typeof error === 'string'
				? error
				: error.join('\n')
		)
	}
}
