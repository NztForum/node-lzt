import { ApiGroup } from './base'

class ForumApi extends ApiGroup {
    // List of all categories in the system.
    // Required scopes:
    // + **read**
    async getCategories (params: GetCategoriesRequest = {}): Promise<GetCategoriesResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/categories`,
            params
        )
    }

    // Detail information of a category.
    // Required scopes:
    // + **read**
    async getCategory (params: GetCategoryRequest): Promise<GetCategoryResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/categories/${params.categoryId}`,
            params
        )
    }

    // List of all forums in the system.
    // Required scopes:
    // + **read**
    async getForums (params: GetForumsRequest = {}): Promise<GetForumsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/forums`,
            params
        )
    }

    // Detail information of a forum.
    // Required scopes:
    // + **read**
    async getForum (params: GetForumRequest): Promise<GetForumResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/forums/${params.forumId}`,
            params
        )
    }

    // List of a forum's followers. For privacy reason, only the current user will be included in the list (if the user follows the specified forum).
    // Required scopes:
    // + **read**
    async getFollowers (params: GetFollowersRequest): Promise<GetFollowersResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/forums/${params.forumId}/followers`,
            params
        )
    }

    // Follow a forum.
    // Required scopes:
    // + **post**
    async followForum (params: FollowForumRequest): Promise<FollowForumResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/forums/${params.forumId}/followers`,
            params
        )
    }

    // Unfollow a forum.
    // Required scopes:
    // + **post**
    async unfollowForum (params: UnfollowForumRequest): Promise<UnfollowForumResponse> {
        return await this.api.call(
            'DELETE',
            this.endpoint + `/forums/${params.forumId}/followers`,
            params
        )
    }

    // List of followed forums by current user.
    // Required scopes:
    // + **read**
    async getFollowedForums (params: GetFollowedForumsRequest = {}): Promise<GetFollowedForumsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/forums/followed`,
            params
        )
    }

    // List of all pages in the system.
    // Required scopes:
    // + **read**
    async getPages (params: GetPagesRequest = {}): Promise<GetPagesResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/pages`,
            params
        )
    }

    // Detail information of a page.
    // Required scopes:
    // + **read**
    async getPage (params: GetPageRequest): Promise<GetPageResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/pages/${params.pageId}`,
            params
        )
    }

    // List of navigation elements within the system.
    // Required scopes:
    // + **read**
    async getNavigation (params: GetNavigationRequest = {}): Promise<GetNavigationResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/navigation`,
            params
        )
    }

    // List of threads in a forum (with pagination).
    // Required scopes:
    // + **read**
    async getThreads (params: GetThreadsRequest = {}): Promise<GetThreadsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/threads`,
            params
        )
    }

    // Create a new thread.
    // Required scopes:
    // + **post**
    async createThread (params: CreateThreadRequest): Promise<CreateThreadResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/threads`,
            params
        )
    }

    // Detail information of a thread.
    // Required scopes:
    // + **read**
    async getThread (params: GetThreadRequest): Promise<GetThreadResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/threads/${params.threadId}`,
            params
        )
    }

    // Delete a thread.
    // Required scopes:
    // + **post**
    async deleteThread (params: DeleteThreadRequest): Promise<DeleteThreadResponse> {
        return await this.api.call(
            'DELETE',
            this.endpoint + `/threads/${params.threadId}`,
            params
        )
    }

    // Bump a thread.
    // Required scopes:
    // + **post**
    async bumpThread (params: BumpThreadRequest): Promise<BumpThreadResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/threads/${params.threadId}/bump`,
            params
        )
    }

    // List of a thread's followers. For privacy reason, only the current user will be included in the list.
    // Required scopes:
    // + **read**
    async getThreadFollowers (params: GetThreadFollowersRequest): Promise<GetThreadFollowersResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/threads/${params.threadId}/followers`,
            params
        )
    }

    // Follow a thread.
    // Required scopes:
    // + **post**
    async followThread (params: FollowThreadRequest): Promise<FollowThreadResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/threads/${params.threadId}/followers`,
            params
        )
    }

    // Unfollow a thread.
    // Required scopes:
    // + **post**
    async unfollowThread (params: UnfollowThreadRequest): Promise<UnfollowThreadResponse> {
        return await this.api.call(
            'DELETE',
            this.endpoint + `/threads/${params.threadId}/followers`,
            params
        )
    }

    // List of followed threads by current user.
    // Required scopes:
    // + **read**
    async getFollowedThreads (params: GetFollowedThreadsRequest = {}): Promise<GetFollowedThreadsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/threads/followed`,
            params
        )
    }

    // List of navigation elements to reach the specified thread.
    // Required scopes:
    // + **read**
    async getNavigationElements (params: GetNavigationElementsRequest): Promise<GetNavigationElementsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/threads/${params.threadId}/navigation`,
            params
        )
    }

    // Detail information of a poll.
    // Required scopes:
    // + **read**
    async getPoll (params: GetPollRequest): Promise<GetPollResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/threads/${params.threadId}/poll`,
            params
        )
    }

    // Vote on a thread poll.
    // Required scopes:
    // + **post**
    async votePoll (params: VotePollRequest): Promise<VotePollResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/threads/${params.threadId}/poll/votes`,
            params
        )
    }

    // List of unread threads (must be logged in).
    // Required scopes:
    // + **read**
    async getUnreadThreads (params: GetUnreadThreadsRequest = {}): Promise<GetUnreadThreadsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/threads/new`,
            params
        )
    }

    // List of recent threads.
    // Required scopes:
    // + **read**
    async getRecentThreads (params: GetRecentThreadsRequest = {}): Promise<GetRecentThreadsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/threads/recent`,
            params
        )
    }

    // List of posts in a thread (with pagination).
    // Required scopes:
    // + **read**
    async getPosts (params: GetPostsRequest = {}): Promise<GetPostsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/posts`,
            params
        )
    }

    // Create a new post.
    // Required scopes:
    // + **post**
    async createPost (params: CreatePostRequest = {}): Promise<CreatePostResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/posts`,
            params
        )
    }

    // Detail information of a post.
    // Required scopes:
    // + **read**
    async getPost (params: GetPostRequest): Promise<GetPostResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/posts/${params.postId}`,
            params
        )
    }

    // Edit a post.
    // Required scopes:
    // + **post**
    async editPost (params: EditPostRequest): Promise<EditPostResponse> {
        return await this.api.call(
            'PUT',
            this.endpoint + `/posts/${params.postId}`,
            params
        )
    }

    // Delete a post.
    // Required scopes:
    // + **post**
    async deletePost (params: DeletePostRequest): Promise<DeletePostResponse> {
        return await this.api.call(
            'DELETE',
            this.endpoint + `/posts/${params.postId}`,
            params
        )
    }

    // List of users who liked a post.
    // Required scopes:
    // + **read**
    async getPostLikes (params: GetPostLikesRequest): Promise<GetPostLikesResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/posts/${params.postId}/likes`,
            params
        )
    }

    // Like a post.
    // Required scopes:
    // + **read**
    async likePost (params: LikePostRequest): Promise<LikePostResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/posts/${params.postId}/likes`,
            params
        )
    }

    // Unlike a post.
    // Required scopes:
    // + **read**
    async unlikePost (params: UnlikePostRequest): Promise<UnlikePostResponse> {
        return await this.api.call(
            'DELETE',
            this.endpoint + `/posts/${params.postId}/likes`,
            params
        )
    }

    // Report a post.
    // Required scopes:
    // + **post**
    async reportPost (params: ReportPostRequest): Promise<ReportPostResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/posts/${params.postId}/report`,
            params
        )
    }

    // List of post comments in a thread.
    // Required scopes:
    // + **read**
    async getPostComments (params: GetPostCommentsRequest): Promise<GetPostCommentsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/posts/${params.postId}/comments`,
            params
        )
    }

    // Create a new post comment.
    // Required scopes:
    // + **post**
    async createPostComment (params: CreatePostCommentRequest): Promise<CreatePostCommentResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/posts/${params.postId}/comments`,
            params
        )
    }

    // List of popular tags (no pagination).
    // Required scopes:
    // + **read**
    async getPopularTags (params: GetPopularTagsRequest = {}): Promise<GetPopularTagsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/tags`,
            params
        )
    }

    // List of tags.
    // Required scopes:
    // + **read**
    async getTags (params: GetTagsRequest = {}): Promise<GetTagsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/tags/list`,
            params
        )
    }

    // List of tagged contents.
    // Required scopes:
    // + **read**
    async getTaggedContent (params: GetTaggedContentRequest): Promise<GetTaggedContentResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/tags/${params.tagId}`,
            params
        )
    }

    // Filtered list of tags.
    // Required scopes:
    // + **read**
    async getFilteredContent (params: GetFilteredContentRequest): Promise<GetFilteredContentResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/tags/find`,
            params
        )
    }

    // List of users (with pagination).
    // Required scopes:
    // + **read**
    async getUsers (params: GetUsersRequest = {}): Promise<GetUsersResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/users`,
            params
        )
    }

    // List of user fields.
    // Required scopes:
    // + **read**
    async getUserFields (params: GetUserFieldsRequest = {}): Promise<GetUserFieldsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/users/fields`,
            params
        )
    }

    // List of users filtered by username, email or custom fields.
    // Required scopes:
    // + **read**
    // + **admincp**
    async findUsers (params: FindUsersRequest = {}): Promise<FindUsersResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/users/find`,
            params
        )
    }

    // Displays info about your profile.
    // Required scopes:
    // + **read**
    async getProfile (params: GetProfileRequest = {}): Promise<GetProfileResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/users/me`,
            params
        )
    }

    // Detail information of a user.
    // Required scopes:
    // + **read**
    async getUser (params: GetUserRequest): Promise<GetUserResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/users/${params.userId}`,
            params
        )
    }

    // Edit a user.
    // Required scopes:
    // + **post**
    // + **admincp**
    async editUser (params: EditUserRequest): Promise<EditUserResponse> {
        return await this.api.call(
            'PUT',
            this.endpoint + `/users/${params.userId}`,
            params
        )
    }

    // Request a password reset via email.
    // Either **username** or **email** parameter must be provided. If both are provided, **username** will be used.
    // Required scopes:
    // + **None**
    async lostPassword (params: LostPasswordRequest): Promise<LostPasswordResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/lost-password`,
            params
        )
    }

    // Upload avatar for a user.
    // Required scopes:
    // + **post**
    // + **admincp**
    async uploadAvatar (params: UploadAvatarRequest): Promise<UploadAvatarResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/users/${params.userId}/avatar`,
            params
        )
    }

    // Delete avatar for a user.
    // Required scopes:
    // + **post**
    async deleteAvatar (params: DeleteAvatarRequest): Promise<DeleteAvatarResponse> {
        return await this.api.call(
            'DELETE',
            this.endpoint + `/users/${params.userId}/avatar`,
            params
        )
    }

    // Crop avatar for a user.
    // Required scopes:
    // + **post**
    // + **admincp**
    async avatarCrop (params: AvatarCropRequest): Promise<AvatarCropResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/users/${params.userId}/avatar-crop`,
            params
        )
    }

    // List of a user's followers.
    // Required scopes:
    // + **read**
    async getUserFollowers (params: GetUserFollowersRequest): Promise<GetUserFollowersResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/users/${params.userId}/followers`,
            params
        )
    }

    // Follow a user.
    // Required scopes:
    // + **post**
    async followUser (params: FollowUserRequest): Promise<FollowUserResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/users/${params.userId}/followers`,
            params
        )
    }

    // Unfollow a user.
    // Required scopes:
    // + **post**
    async unfollowUser (params: UnfollowUserRequest): Promise<UnfollowUserResponse> {
        return await this.api.call(
            'DELETE',
            this.endpoint + `/users/${params.userId}/followers`,
            params
        )
    }

    // List of users whom are followed by a user.
    // Required scopes:
    // + **read**
    async getFollowedUsersByUser (params: GetFollowedUsersByUserRequest): Promise<GetFollowedUsersByUserResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/users/${params.userId}/followings`,
            params
        )
    }

    // List of ignored users of current user.
    // Required scopes:
    // + **read**
    async getIgnoredUsers (params: GetIgnoredUsersRequest = {}): Promise<GetIgnoredUsersResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/users/ignored`,
            params
        )
    }

    // Ignore a user.
    // Required scopes:
    // + **post**
    async ignoreUser (params: IgnoreUserRequest): Promise<IgnoreUserResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/users/${params.userId}/ignore`,
            params
        )
    }

    // Stop ignoring a user.
    // Required scopes:
    // + **post**
    async unignoreUser (params: UnignoreUserRequest): Promise<UnignoreUserResponse> {
        return await this.api.call(
            'DELETE',
            this.endpoint + `/users/${params.userId}/ignore`,
            params
        )
    }

    // List of all user groups.
    // Required scopes:
    // + **read**
    // + **admincp**
    async getAllUserGroups (params: GetAllUserGroupsRequest = {}): Promise<GetAllUserGroupsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/users/groups`,
            params
        )
    }

    // List of a user's groups.
    // Required scopes:
    // + **read**
    // + **admincp**
    async getUserGroups (params: GetUserGroupsRequest): Promise<GetUserGroupsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/users/${params.userId}/groups`,
            params
        )
    }

    // List of contents created by user (with pagination).
    // Required scopes:
    // + **read**
    async getContents (params: GetContentsRequest): Promise<GetContentsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/users/${params.userId}/timeline`,
            params
        )
    }

    // Create a new profile post on a user timeline.
    // Required scopes:
    // + **post**
    async createProfilePost (params: CreateProfilePostRequest): Promise<CreateProfilePostResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/users/${params.userId}/timeline`,
            params
        )
    }

    // Detail information of a profile post.
    // Required scopes:
    // + **read**
    async getProfilePost (params: GetProfilePostRequest): Promise<GetProfilePostResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/profile-posts/${params.profilePostId}`,
            params
        )
    }

    // Edit a profile post.
    // Required scopes:
    // + **post**
    async editProfilePost (params: EditProfilePostRequest): Promise<EditProfilePostResponse> {
        return await this.api.call(
            'PUT',
            this.endpoint + `/profile-posts/${params.profilePostId}`,
            params
        )
    }

    // Delete a profile post.
    // Required scopes:
    // + **post**
    async deleteProfilePost (params: DeleteProfilePostRequest): Promise<DeleteProfilePostResponse> {
        return await this.api.call(
            'DELETE',
            this.endpoint + `/profile-posts/${params.profilePostId}`,
            params
        )
    }

    // List of users who liked a profile post.
    // Required scopes:
    // + **read**
    async getProfilePostLikes (params: GetProfilePostLikesRequest): Promise<GetProfilePostLikesResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/profile-posts/${params.profilePostId}/likes`,
            params
        )
    }

    // Like a profile post.
    // Required scopes:
    // + **post**
    async likeProfilePost (params: LikeProfilePostRequest): Promise<LikeProfilePostResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/profile-posts/${params.profilePostId}/likes`,
            params
        )
    }

    // Unlike a profile post.
    // Required scopes:
    // + **post**
    async unlikeProfilePost (params: UnlikeProfilePostRequest): Promise<UnlikeProfilePostResponse> {
        return await this.api.call(
            'DELETE',
            this.endpoint + `/profile-posts/${params.profilePostId}/likes`,
            params
        )
    }

    // List of comments of a profile post.
    // Required scopes:
    // + **read**
    async getProfilePostComments (params: GetProfilePostCommentsRequest): Promise<GetProfilePostCommentsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/profile-posts/${params.profilePostId}/comments`,
            params
        )
    }

    // Create a new profile post comment.
    // Required scopes:
    // + **post**
    async createProfilePostComment (params: CreateProfilePostCommentRequest): Promise<CreateProfilePostCommentResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/profile-posts/${params.profilePostId}/comments`,
            params
        )
    }

    // Detail information of a profile post comment.
    // Required scopes:
    // + **read**
    async getProfilePostComment (params: GetProfilePostCommentRequest): Promise<GetProfilePostCommentResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/profile-posts/${params.profilePostId}/comments/${params.commentId}`,
            params
        )
    }

    // Delete a profile post's comment.
    // Required scopes:
    // + **post**
    async deleteProfilePostComment (params: DeleteProfilePostCommentRequest): Promise<DeleteProfilePostCommentResponse> {
        return await this.api.call(
            'DELETE',
            this.endpoint + `/profile-posts/${params.profilePostId}/comments/${params.commentId}`,
            params
        )
    }

    // Report a profile post.
    // Required scopes:
    // + **post**
    async reportProfilePost (params: ReportProfilePostRequest): Promise<ReportProfilePostResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/profile-posts/${params.profilePostId}/report`,
            params
        )
    }

    // List of conversations (with pagination).
    // Required scopes:
    // + **read**
    // + **conversate**
    async getConversations (params: GetConversationsRequest = {}): Promise<GetConversationsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/conversations`,
            params
        )
    }

    // Create a new conversation.
    // Required scopes:
    // + **post**
    // + **conversate**
    async createConversation (params: CreateConversationRequest): Promise<CreateConversationResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/conversations`,
            params
        )
    }

    // Detail information of a conversation.
    // Required scopes:
    // + **read**
    // + **conversate**
    async getConversation (params: GetConversationRequest): Promise<GetConversationResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/conversations/${params.conversationId}`,
            params
        )
    }

    // Leave the conversation.
    // Required scopes:
    // + **post**
    // + **conversate**
    async leaveConversation (params: LeaveConversationRequest): Promise<LeaveConversationResponse> {
        return await this.api.call(
            'DELETE',
            this.endpoint + `/conversations/${params.conversationId}`,
            params
        )
    }

    // List of messages in a conversation (with pagination).
    // Required scopes:
    // + **read**
    // + **conversate**
    async getConversationMessages (params: GetConversationMessagesRequest): Promise<GetConversationMessagesResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/conversation-messages`,
            params
        )
    }

    // Create a new conversation message.
    // Required scopes:
    // + **post**
    // + **conversate**
    async createConversationMessage (params: CreateConversationMessageRequest): Promise<CreateConversationMessageResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/conversation-messages`,
            params
        )
    }

    // Detail information of a message.
    // Required scopes:
    // + **read**
    // + **conversate**
    async getConversationMessage (params: GetConversationMessageRequest): Promise<GetConversationMessageResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/conversation-messages/${params.messageId}`,
            params
        )
    }

    // Edit a message.
    // Required scopes:
    // + **post**
    // + **conversate**
    async editConversationMessage (params: EditConversationMessageRequest): Promise<EditConversationMessageResponse> {
        return await this.api.call(
            'PUT',
            this.endpoint + `/conversation-messages/${params.messageId}`,
            params
        )
    }

    // Delete a message.
    // Required scopes:
    // + **post**
    // + **conversate**
    async deleteConversationMessage (params: DeleteConversationMessageRequest): Promise<DeleteConversationMessageResponse> {
        return await this.api.call(
            'DELETE',
            this.endpoint + `/conversation-messages/${params.messageId}`,
            params
        )
    }

    // Report a message.
    // Required scopes:
    // + **post**
    // + **conversate**
    async reportConversationMessage (params: ReportConversationMessageRequest): Promise<ReportConversationMessageResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/conversation-messages/${params.messageId}/report`,
            params
        )
    }

    // List of notifications (both read and unread).
    // Required scopes:
    // + **read**
    async getNotifications (params: GetNotificationsRequest = {}): Promise<GetNotificationsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/notifications`,
            params
        )
    }

    // Get associated content of notification. The response depends on the content type.
    // Required scopes:
    // + **read**
    async getNotification (params: GetNotificationRequest): Promise<GetNotificationResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/notifications/${params.notificationId}/content`,
            params
        )
    }

    // Send a custom alert.
    // Required scopes:
    // + **post**
    // + **Also: the current user must have the [bd] API: Send custom alert permission**
    async customNotification (params: CustomNotificationRequest = {}): Promise<CustomNotificationResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/notifications/custom`,
            params
        )
    }

    // Mark single notification or all existing notifications read.
    // Required scopes:
    // + **post**
    async markNotificationRead (params: MarkNotificationReadRequest = {}): Promise<MarkNotificationReadResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/notifications/read`,
            params
        )
    }

    // Search for threads.
    // Required scopes:
    // + **post**
    async searchThread (params: SearchThreadRequest = {}): Promise<SearchThreadResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/search/threads`,
            params
        )
    }

    // Search for posts.
    // Required scopes:
    // + **post**
    async searchPost (params: SearchPostRequest = {}): Promise<SearchPostResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/search/posts`,
            params
        )
    }

    // Search for all supported contents.
    // Required scopes:
    // + **post**
    async search (params: SearchRequest = {}): Promise<SearchResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/search`,
            params
        )
    }

    // Search for tagged contents.
    // Required scopes:
    // + **post**
    async searchTagged (params: SearchTaggedRequest = {}): Promise<SearchTaggedResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/search/tagged`,
            params
        )
    }

    // Execute multiple API requests at once (Separated by comma). Maximum batch jobs is 10.
    // Required scopes:
    // + Same as called API requests.
    async batch (params: BatchRequest = {}): Promise<BatchResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/batch`,
            params
        )
    }

    // Index external content data into search system to be searched later.
    // Required scopes:
    // + **post**
    async searchIndexing (params: SearchIndexingRequest): Promise<SearchIndexingResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/search/indexing`,
            params
        )
    }
}

export default ForumApi