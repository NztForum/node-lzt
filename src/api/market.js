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

	async fastBuy({ itemId, price, skipValidation} = {}) {
		return await this.caller.call('POST', `/${itemId}/fast-buy`, {
			buy_without_validation: skipValidation ? 1 : undefined,
			price
		})
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
	async getNotPublishedItem({ itemId, resellItemId } = {}) {
		return await this.caller.call('GET', `/${itemId}/goods/add/`, { resell_item_id: resellItemId })
	}
	async checkItem({ itemId, closeItem } = {}) {
		return await this.caller.call('POST', `/${itemId}/goods/check`, {
			close_item: closeItem
		})
	}
	
	async getEmailCode({ itemId, email } = {}) {
		return await this.caller.call('GET', `/${itemId}/email-code/`, { email })
	}

	async refuseGuarantee({ itemId } = {}) {
		return await this.caller.call('POST', `/${itemId}/refuse-guarantee`)
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

	async deleteItem({ itemId, reason } = {}) {
		return await this.caller.call('DELETE', `/${itemId}`, { reason })
	}

	async getMafile({ itemId } = {}) {
		return await this.caller.call('GET', `/${itemId}/mafile/`)
	}

	async getGuardCode({ itemId } = {}) {
		return await this.caller.call('GET', `/${itemId}/guard-code/`)
	}

	async getTelegramCode({ itemId } = {}) {
		return await this.caller.call('GET', `/${itemId}/telegram-login-code/`)
	}

	async resetTelegramAuth({ itemId } = {}) {
		return await this.caller.call('POST', `/${itemId}/telegram-reset-authorizations/`)
	}

	async getTempEmailPassword({ itemId } = {}) {
		return await this.caller.call('GET', `/${itemId}/temp-email-password/`)
	}

	async fave({ itemId } = {}) {
		return await this.caller.call('POST', `/${itemId}/star/`)
	}

	async unFave({ itemId } = {}) {
		return await this.caller.call('DELETE', `/${itemId}/star/`)
	}

	async stickItem({ itemId } = {}) {
		return await this.caller.call('POST', `/${itemId}/stick/`)
	}

	async unstickItem({ itemId } = {}) {
		return await this.caller.call('DELETE', `/${itemId}/stick/`)
	}

	async changeOwner({ itemId, username, secretAnswer } = {}) {
		return await this.caller.call('POST', `/${itemId}/change-owner/`, {
			username,
			secret_answer: secretAnswer
		})
	}

	async steamValue({ link, appId, currency, ignoreCache } = {}) {
		return await this.caller.call('GET', `/steam-value/`, {
			link, app_id: appId, currency, ignore_cache: ignoreCache ? 1 : 0
		})
	}

	async steamPreview({ itemId, type } = {}) {
		return await this.caller.call('GET', `/${itemId}/steam-preview/`, { type })
	}

	async getCategoryParams({ categoryName } = {}) {
		return await this.caller.call('GET', `/${categoryName}/params/`)
	}

	async getGames({ categoryName } = {}) {
		return await this.caller.call('GET', `/${categoryName}/games/`)
	}


	async bumpItem({ itemId } = {}) {
		return await this.caller.call('POST', `/${itemId}/bump/`)
	}

	async getCategories({ topQueries } = {}) {
		return await this.caller.call('GET', `/category/`, { top_queries: topQueries ? 1 : 0 })
	}

	async getMe() {
		return await this.caller.call('GET', `/me/`)
	}

	async editMe({ disableSteamGuard, userAllowAskDiscount, maxDiscountPercent, allowAcceptAccounts, hideFavorites, vkUa } = {}) {
		return await this.caller.call('PUT', `/me/`, {
			disable_steam_guard: disableSteamGuard,
			user_allow_ask_discount: userAllowAskDiscount,
			max_discount_percent: maxDiscountPercent,
			allow_accept_accounts: allowAcceptAccounts,
			hide_favorites: hideFavorites,
			vk_ua: vkUa
		})
	}

	async getProxys() {
		return await this.caller.call('GET', `/proxy/`)
	}

	async addProxy({ proxyIP, proxyPort, proxyLogin, proxyPassword, proxyRow } = {}) {
		return await this.caller.call('POST', `/proxy/`, {
			proxy_ip: proxyIP,
			proxy_port: proxyPort,
			proxy_user: proxyLogin,
			proxy_pass: proxyPassword,
			proxy_row: proxyRow
		})
	}

	async deleteProxy({ proxyId, deleteAll } = {}) {
		return await this.caller.call('DELETE', `/proxy/`, {
			proxy_id: proxyId,
			delete_all: deleteAll ? 1 : 0
		})
	}

	async fastSell({
		title, titleEn,
		price, categoryId,
		currency, itemOrigin,
		extendedGuarantee,
		description, information,
		login, password, loginPassword,
		hasEmailLoginData, EmailLoginData,
		closeItem, emailType, allowAskDiscount,
		proxyId, randomProxy, extraData } = {}) {
		return await this.caller.call('POST', `/item/fast-sell`, {
			title, title_en: titleEn,
			price, category_id: categoryId,
			currency, item_origin: itemOrigin,
			extended_guarantee: extendedGuarantee,
			description, information,
			login, password, login_password: loginPassword,
			has_email_login_data: hasEmailLoginData,
			email_login_data: EmailLoginData,
			close_item: closeItem,
			email_type: emailType,
			allow_ask_discount: allowAskDiscount,
			proxy_id: proxyId,
			random_proxy: randomProxy,
			extra: extraData
		})
	}

    async getAuction({ itemId } = {}){
        return await this.caller.call('GET', `/${itemId}/auction`)
    }

    async addBid({ itemId, currency, amount } = {}){
        return await this.caller.call('POST', `/${itemId}/auction/bid`, {
            currency,
            amount
        })
    }

    async removeBid({ itemId, bidId } = {}) {
        return await this.caller.call('DELETE', `/${itemId}/auction/bid`, {
            bid_id: bidId
        })
    }
}
