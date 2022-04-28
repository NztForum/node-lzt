export class LZTApiError extends Error {
	constructor(errors) {
		super(errors.join('\n'))
	}
}
