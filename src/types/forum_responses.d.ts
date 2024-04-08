// auto-generated, don't edit manually

interface GetCategoriesResponse {
    categories?: Array<undefined>
    categories_total?: number
}

interface GetCategoryResponse {
    category?: string
}

interface GetForumsResponse {
    forums?: Array<undefined>
    forums_total?: number
}

interface GetForumResponse {
    forum?: string
}

interface GetFollowersResponse {
    users?: Array<undefined>
}

interface FollowForumResponse {
    status?: string
    message?: string
}

interface UnfollowForumResponse {
    status?: string
    message?: string
}

interface GetFollowedForumsResponse {
    forums?: Array<undefined>
}

interface GetPagesResponse {
    pages?: Array<undefined>
    pages_total?: number
}

interface GetPageResponse {
    page?: string
}

interface GetNavigationResponse {
    elements?: Array<undefined>
}

interface GetThreadsResponse {
    threads?: Array<undefined>
}

interface CreateThreadResponse {
    thread?: string
}

interface GetThreadResponse {
    thread?: string
}

interface DeleteThreadResponse {
    status?: string
    message?: string
}

interface BumpThreadResponse {
    status?: string
    message?: string
}

interface GetThreadFollowersResponse {
    users?: Array<undefined>
}

interface FollowThreadResponse {
    status?: string
    message?: string
}

interface UnfollowThreadResponse {
    status?: string
    message?: string
}

interface GetFollowedThreadsResponse {
    threads?: Array<undefined>
    threads_total?: number
}

interface GetNavigationElementsResponse {
    elements?: Array<undefined>
    elements_count?: number
}

interface GetPollResponse {
    poll_id?: number
    poll_question?: string
    poll_vote_count?: number
    poll_is_open?: string
    poll_is_voted?: string
    poll_max_votes?: number
    responses?: Array<undefined>
    permissions?: string
    links?: string
}

interface VotePollResponse {
    status?: string
    message?: string
}

interface GetUnreadThreadsResponse {
    threads?: Array<undefined>
    data?: Array<undefined>
}

interface GetRecentThreadsResponse {
    threads?: Array<undefined>
    data?: Array<undefined>
}

interface GetPostsResponse {
    posts?: Array<undefined>
    posts_total?: number
    links?: string
}

interface CreatePostResponse {
    post?: string
}

interface GetPostResponse {
    post?: string
}

interface EditPostResponse {
    post?: string
}

interface DeletePostResponse {
    status?: string
    message?: string
}

interface GetPostLikesResponse {
    users?: Array<undefined>
}

interface LikePostResponse {
    status?: string
    message?: string
}

interface UnlikePostResponse {
    status?: string
    message?: string
}

interface ReportPostResponse {
    status?: string
    message?: string
}

interface GetPostCommentsResponse {
    comments?: string
}

interface CreatePostCommentResponse {
    comment?: string
}

interface GetPopularTagsResponse {
    tag?: string
}

interface GetTagsResponse {
    tags?: string
    tags_total?: number
    links?: string
}

interface GetTaggedContentResponse {
    tag?: string
    tagged?: Array<undefined>
    tagged_total?: number
    links?: string
}

interface GetFilteredContentResponse {
    tags?: Array<string>
    ids?: Array<integer>
}

interface GetUsersResponse {
    users?: Array<undefined>
    users_total?: number
    links?: string
}

interface GetUserFieldsResponse {
    fields?: Array<undefined>
}

interface FindUsersResponse {
    users?: Array<undefined>
}

interface GetProfileResponse {
    user?: string
}

interface GetUserResponse {
    user?: string
}

interface EditUserResponse {
    status?: string
    message?: string
}

interface LostPasswordResponse {
    status?: string
    message?: string
}

interface UploadAvatarResponse {
    status?: string
    message?: string
}

interface DeleteAvatarResponse {
    status?: string
    message?: string
}

interface AvatarCropResponse {
    status?: string
    message?: string
}

interface GetUserFollowersResponse {
    users?: Array<undefined>
    users_total?: number
    links?: string
}

interface FollowUserResponse {
    status?: string
    message?: string
}

interface UnfollowUserResponse {
    status?: string
    message?: string
}

interface GetFollowedUsersByUserResponse {
    users?: Array<undefined>
    users_total?: number
}

interface GetIgnoredUsersResponse {
    users?: Array<undefined>
}

interface IgnoreUserResponse {
    status?: string
    message?: string
}

interface UnignoreUserResponse {
    status?: string
    message?: string
}

interface GetAllUserGroupsResponse {
    user_groups?: Array<undefined>
}

interface GetUserGroupsResponse {
    user_groups?: Array<undefined>
    user_id?: number
}

interface GetContentsResponse {
    data?: Array<undefined>
    data_total?: number
    user?: string
    links?: string
}

interface CreateProfilePostResponse {
    data?: string
}

interface GetProfilePostResponse {
    profile_post?: string
}

interface EditProfilePostResponse {
    profile_post?: string
}

interface DeleteProfilePostResponse {
    status?: string
    message?: string
}

interface GetProfilePostLikesResponse {
    users?: Array<undefined>
}

interface LikeProfilePostResponse {
    profile_post?: string
}

interface UnlikeProfilePostResponse {
    profile_post?: string
}

interface GetProfilePostCommentsResponse {
    comments?: Array<undefined>
    comments_total?: number
    profile_post?: string
    timeline_user?: string
}

interface CreateProfilePostCommentResponse {
    comment?: string
}

interface GetProfilePostCommentResponse {
    comment?: string
}

interface DeleteProfilePostCommentResponse {
    status?: string
    message?: string
}

interface ReportProfilePostResponse {
    status?: string
    message?: string
}

interface GetConversationsResponse {
    conversations?: Array<undefined>
}

interface CreateConversationResponse {
    conversation?: string
}

interface GetConversationResponse {
    conversation?: string
}

interface LeaveConversationResponse {
    status?: string
    message?: string
}

interface GetConversationMessagesResponse {
    messages?: Array<undefined>
    messages_total?: number
    conversation?: string
}

interface CreateConversationMessageResponse {
    message?: string
}

interface GetConversationMessageResponse {
    message?: string
}

interface EditConversationMessageResponse {
    message?: string
}

interface DeleteConversationMessageResponse {
    status?: string
    message?: string
}

interface ReportConversationMessageResponse {
    status?: string
    message?: string
}

interface GetNotificationsResponse {
    notifications?: Array<undefined>
    notifications_total?: number
    links?: string
}

interface GetNotificationResponse {
    notification?: string
}

interface CustomNotificationResponse {
}

interface MarkNotificationReadResponse {
    status?: string
    message?: string
}

interface SearchThreadResponse {
    threads?: Array<undefined>
    data?: Array<undefined>
    links?: string
}

interface SearchPostResponse {
    posts?: Array<undefined>
    data?: Array<undefined>
    links?: string
}

interface SearchResponse {
    data?: Array<undefined>
    data_total?: number
    links?: string
}

interface SearchTaggedResponse {
    data?: Array<undefined>
    data_total?: number
    search_tags?: string
    links?: string
}

interface BatchResponse {
    jobs?: string
}

interface SearchIndexingResponse {
    status?: string
    message?: string
}