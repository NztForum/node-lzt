import { ApiGroup } from './base'

class ForumApi extends ApiGroup {
    async getUser (
        user_id: number | 'me' = 'me'
    ): Promise<{ user: Record<string, any> }> {
        return await this.api.call(
            'GET',
            this.endpoint + `/users/${user_id}`
        )
    }
}

export default ForumApi