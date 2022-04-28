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
			categoryName ? `/market/${categoryName}` : '/market',
			{
				pmin, pmax, title, showStickyItems,
				...categoryParams
			}
		)
	}
	
	async getUser() {
		const resp = await this.caller.call('GET', '/market/user')
		
		if(!this.#userId && resp?.user?.user_id)
			this.#userId = resp.user.user_id
		
		return resp
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
		
		return await this.caller.call('GET', `/market/user/${userId}/payments`, {
			type, pmin, pmax,
			receiver, sender,
			startDate, endDate,
			wallet, comment,
			is_hold: isHold
		})
	}
	
	async getOrders({
		userId = null,
		categoryName = null,
		pmin, pmax, title,
		showStickyItems,
		...categoryParams
	} = {}) {
		if(!userId)
			userId = await this.#getMyUserId()
		
		return await this.caller.call('GET',
			categoryName
				? `/market/user/${userId}/orders/${categoryName}`
				: `/market/user/${userId}/orders`,
			{
				pmin, pmax, title,
				showStickyItems,
				...categoryParams
			}
		)
	}
	
	async getFave() {
		return await this.caller.call('GET', '/market/fave')
	}
	
	async getViewed() {
		return await this.caller.call('GET', '/market/viewed')
	}
	
	async getItem({ itemId } = {}) {
		return await this.caller.call('GET', `/market/${itemId}`)
	}
	
	async reserve({ itemId, price } = {}) {
		return await this.caller.call('POST', `/market/${itemId}/reserve`, { price })
	}
	
	async cancelReserve({ itemId } = {}) {
		return await this.caller.call('POST', `/market/${itemId}/cancel-reserve`)
	}
	
	async checkAccount({ itemId } = {}) {
		return await this.caller.call('POST', `/market/${itemId}/check-account`)
	}
	
	async confirmBuy({ itemId } = {}) {
		return await this.caller.call('POST', `/market/${itemId}/confirm-buy`)
	}
	
	async transfer({
		userId, username,
		amount, currency,
		secretAnswer,
		transferHold,
		holdLengthValue,
		holdLengthOption
	} = {}) {
		return await this.caller.call('POST', '/market/balance/transfer/', {
			user_id: userId,
			username, amount, currency,
			secret_answer: secret_Answer,
			transfer_hold: transferHold,
			hold_length_value: holdLengthValue,
			hold_length_option: holdLengthOption
		})
	}
	
	async addItem({
		title, titleEn,
		price, currency,
		itemOrigin,
		description, information,
		emailLoginData,
		emailType,
		allowAskDiscount
	} = {}) {
		return await this.caller.call('POST', '/market/item/add/', {
			title,
			title_en: titleEn,
			price, currency,
			item_origin: itemOrigin,
			description, information,
			has_email_login_data: emailLoginData ? 1 : undefined,
			email_login_data: emailLoginData,
			email_type: emailType,
			allow_ask_discount: allowAskDiscount
		})
	}
	
	async checkItem({ itemId, closeItem } = {}) {
		return await this.caller.call('POST', `/market/${itemId}/goods/check`, {
			close_item: closeItem
		})
	}
	
	async getEmailCode({ itemId, email } = {}) {
		return await this.caller.call('GET', `/market/${itemId}/email-code/`, { email })
	}
	
	async getEmailCode({ _cancel } = {}) {
		return await this.caller.call('POST', `/market/${itemId}/change-password/`, { _cancel })
	}
	
	async editItem({
		itemId, title, titleEn,
		price, currency,
		itemOrigin,
		description, information,
		emailLoginData,
		emailType,
		allowAskDiscount
	} = {}) {
		return await this.caller.call('POST', '/market/${itemId}/edit/', {
			title,
			title_en: titleEn,
			price, currency,
			item_origin: itemOrigin,
			description, information,
			has_email_login_data: emailLoginData ? 1 : undefined,
			email_login_data: emailLoginData,
			email_type: emailType,
			allow_ask_discount: allowAskDiscount
		})
	}
	
	async addTag({ itemId, tagId } = {}) {
		return await this.caller.call('POST', `/market/${itemId}/tag/`, { tag_id: tagId })
	}
	
	async deleteTag({ itemId, tagId } = {}) {
		return await this.caller.call('DELETE', `/market/${itemId}/tag/`, { tag_id: tagId })
	}
}
