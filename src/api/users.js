import { LZTApiGroup } from '../apiGroup.js'

export class LZTApiUsersGroup extends LZTApiGroup {
	static name = 'users'
	
	async getUsers({ page, limit } = {}) {
		return await this.caller.call('GET', '/users', { page, limit })
	}
	
	async create({
		userEmail, username, password, passwordAlgo,
		userDobDay, userDobMonth, userDobYear,
		fields, clientId, extraData, extraTimestamp
	} = {}) {
		return await this.caller.call('POST', '/users', {
			user_email: userEmail,
			username,
			password,
			password_algo: passwordAlgo,
			user_dob_day: userDobDay,
			user_dob_month: userDobMonth,
			user_dob_year: userDobYear,
			fields,
			client_id: clientId,
			extra_data: extraData,
			extra_timestamp: extraTimestamp
		})
	}
	
	async getFields() {
		return await this.caller.call('GET', '/users/fields')
	}
	
	async getUser({ userId = 'me' } = {}) {
		return await this.caller.call('GET', `/users/${userId}`)
	}
	
	async edit({
		userId = 'me', fields,
		password, passwordOld, passwordAlgo,
		userEmail, username, userTitle,
		primaryGroupId, secondaryGroupIds,
		userDobDay, userDobMonth, userDobYear
	} = {}) {
		return await this.caller.call('PUT', `/users/${userId}`, {
			password,
			password_old: passwordOld,
			password_algo: passwordAlgo,
			user_email: userEmail,
			username, 
			user_title: userTitle,
			primary_group_id: primaryGroupId,
			secondary_group_ids: secondaryGroupIds,
			user_dob_day: userDobDay,
			user_dob_month: userDobMonth,
			user_dob_year: userDobYear,
			fields
		})
	}
	
	async setAvatar({ userId = 'me', avatar } = {}) {
		return await this.caller.call('POST', `/users/${userId}/avatar`, { avatar })
	}
	
	async deleteAvatar({ userId = 'me' } = {}) {
		return await this.caller.call('DELETE', `/users/${userId}/avatar`)
	}
	
	async getFollowers({ userId = 'me', order, page, limit } = {}) {
		return await this.caller.call('GET', `/users/${userId}/followers`, { order, page, limit })
	}
	
	async follow({ userId = 'me' } = {}) {
		return await this.caller.call('POST', `/users/${userId}/followers`)
	}
	
	async unfollow({ userId = 'me' } = {}) {
		return await this.caller.call('DELETE', `/users/${userId}/followers`)
	}
	
	async getFollowings({ userId = 'me', order, page, limit } = {}) {
		return await this.caller.call('GET', `/users/${userId}/followings`, { order, page, limit })
	}
	
	async getIgnored() {
		return await this.caller.call('GET', '/users/ignored')
	}
	
	async ignore({ userId = 'me' } = {}) {
		return await this.caller.call('GET', `/users/${userId}/ignore`)
	}
	
	async uningore({ userId = 'me' } = {}) {
		return await this.caller.call('DELETE', `/users/${userId}/ignore`)
	}
	
	async getGroups() {
		return await this.caller.call('GET', '/users/groups')
	}
	
	async getUserGroups({ userId = 'me' } = {}) {
		return await this.caller.call('GET', `/users/${userId}/groups`)
	}
}
