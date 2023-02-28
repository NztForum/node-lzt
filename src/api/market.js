import { LZTApiGroup } from '../apiGroup.js'
import { LZTApiError } from '../errors.js'

export class LZTApiMarketGroup extends LZTApiGroup {
	static name = 'market'
	
	#userId = null
	
	async #getMyUserId() {
		if(!this.#userId)
			await this.getUser()
		
		if(!this.#userId)
			throw new LZTApiError('Cannot get my userId')
		
		return this.#userId
	}
	
	async search({
		categoryName = null,
		pmin, pmax, title,
		showStickyItems,
		...categoryParams
	} = {}) {
		return await this.caller.call(
			'GET',
			categoryName ? `/${categoryName}` : '/',
			{
				pmin, pmax, title,
				showStickyItems: showStickyItems ? 1 : undefined,
				...categoryParams
			}
		)
	}
	
	async getUser() {
		const resp = await this.caller.call('GET', '/user')
		
		if(!this.#userId && resp?.user?.user_id)
			this.#userId = resp.user.user_id
		
		return resp
	}
	
	async getUserItems({
		userId = null,
		categoryId,
		pmin, pmax,
		title,
		...categoryParams
	}) {
		if(!userId)
			userId = await this.#getMyUserId()
		
		return await this.caller.call('GET', `/user/${userId}/items/`, {
			category_id: categoryId,
			pmin, pmax,
			title,
			...categoryParams
		})
	}
	
	async getPayments({
		userId = null,
		type, pmin, pmax,
		receiver, sender,
		startDate, endDate,
		wallet, comment, isHold
	} = {}) {
		if(!userId)
			userId = await this.#getMyUserId()
		
		return await this.caller.call('GET', `/user/${userId}/payments`, {
			type, pmin, pmax,
			receiver, sender,
			startDate, endDate,
			wallet, comment,
			is_hold: isHold ? 1 : undefined
		})
	}
	
	async getOrders({
		userId = null,
		categoryId,
		pmin, pmax,
		title,
		...categoryParams
	} = {}) {
		if(!userId)
			userId = await this.#getMyUserId()
		
		return await this.caller.call('GET', `/user/${userId}/orders`, {
			category_id: categoryId,
			pmin, pmax,
			title,
			...categoryParams
		})
	}
	
	async getFave() {
		return await this.caller.call('GET', '/fave')
	}
	
	async getViewed() {
		return await this.caller.call('GET', '/viewed')
	}
	
	async getItem({ itemId } = {}) {
		return await this.caller.call('GET', `/${itemId}`)
	}
	
	async reserve({ itemId, price } = {}) {
		return await this.caller.call('POST', `/${itemId}/reserve`, { price })
	}
	
	async cancelReserve({ itemId } = {}) {
		return await this.caller.call('POST', `/${itemId}/cancel-reserve`)
	}
	
	async checkAccount({ itemId } = {}) {
		return await this.caller.call('POST', `/${itemId}/check-account`)
	}
	
	async confirmBuy({ itemId } = {}) {
		return await this.caller.call('POST', `/${itemId}/confirm-buy`)
	}
	
	async transfer({
		userId, username,
		amount, currency,
		secretAnswer,
		holdLengthValue,
		holdLengthOption
	} = {}) {
		return await this.caller.call('POST', '/balance/transfer/', {
			user_id: userId,
			username, amount, currency,
			secret_answer: secretAnswer,
			transfer_hold: holdLengthValue ? 1 : undefined,
			hold_length_value: holdLengthValue,
			hold_length_option: holdLengthOption
		})
	}
	
	async addItem({
		title, titleEn,
		price,
		categoryId,
		currency,
		itemOrigin,
		description, information,
		emailLoginData,
		emailType,
		allowAskDiscount
	} = {}) {
		return await this.caller.call('POST', '/item/add/', {
			title,
			title_en: titleEn,
			price,
			category_id: categoryId,
			currency,
			item_origin: itemOrigin,
			description, information,
			has_email_login_data: emailLoginData ? 1 : undefined,
			email_login_data: emailLoginData,
			email_type: emailType,
			allow_ask_discount: allowAskDiscount
		})
	}
	
	async checkItem({ itemId, closeItem } = {}) {
		return await this.caller.call('POST', `/${itemId}/goods/check`, {
			close_item: closeItem
		})
	}
	
	async getEmailCode({ itemId, email } = {}) {
		return await this.caller.call('GET', `/${itemId}/email-code/`, { email })
	}
	
	async changePassword({ itemId, _cancel } = {}) {
		return await this.caller.call('POST', `/${itemId}/change-password`, {
			_cancel: _cancel ? 1 : undefined
		})
	}
	
	async editItem({
		itemId, currency, ...fields
	} = {}) {
		const params = { currency }
		
		const transformField = field =>
			field.replace(/[A-Z]/g, char => `_${char.toLowerCase()}`)
		
		for(const key of Object.keys(fields))
			params[`key_values[${transformField(key)}]`] = typeof fields[key] === 'boolean'
				? fields[key]
					? 1
					: undefined
				: fields[key]
		
		return await this.caller.call('POST', `/${itemId}/edit/`, params)
	}
	
	async addTag({ itemId, tagId } = {}) {
		return await this.caller.call('POST', `/${itemId}/tag/`, { tag_id: tagId })
	}
	
	async deleteTag({ itemId, tagId } = {}) {
		return await this.caller.call('DELETE', `/${itemId}/tag/`, { tag_id: tagId })
	}
}
