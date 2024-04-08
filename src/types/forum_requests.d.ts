// auto-generated, don't edit manually

interface GetCategoriesRequest {
    // Id of parent category. If exists, filter categories that are direct children of that category.
    parent_category_id?: number
    // Id of parent forum. If exists, filter categories that are direct children of that forum.
    parent_forum_id?: number
    // Ordering of categories.
    order?: 'natural' | 'list'
}

interface GetCategoryRequest {
    // Id of category.
    categoryId: number
}

interface GetForumsRequest {
    // Id of parent category. If exists, filter forums that are direct children of that category.
    parent_category_id?: number
    // Id of parent forum. If exists, filter forums that are direct children of that forum.
    parent_forum_id?: number
    // Ordering of forums.
    order?: 'natural' | 'list'
}

interface GetForumRequest {
    // Id of forum.
    forumId: number
}

interface GetFollowersRequest {
    // Id of forum.
    forumId: number
}

interface FollowForumRequest {
    // Id of forum.
    forumId: number
}

interface UnfollowForumRequest {
    // Id of forum.
    forumId: number
}

interface GetFollowedForumsRequest {
    // If included in the request, only the forum count is returned as **forums_total**.
    total?: true
}

interface GetPagesRequest {
    // Id of parent page. If exists, filter pages that are direct children of that page.
    parent_page_id?: number
    // Ordering of pages.
    order?: 'natural' | 'list'
}

interface GetPageRequest {
    // Id of page.
    pageId: number
}

interface GetNavigationRequest {
    // Id of parent element. If exists, filter elements that are direct children of that element.
    parent?: number
}

interface GetThreadsRequest {
    // Id of the containing forum. Can be skipped if **thread_ids** set.
    forum_id?: number
    // Ids of needed threads (separated by comma). If this parameter is set, all other filtering parameters will be ignored.
    thread_ids?: Array<integer>
    // Filter to get only threads created by the specified user.
    creator_user_id?: number
    // Filter to get only sticky **sticky=1** or non-sticky **sticky=0** threads. By default, all threads will be included and sticky ones will be at the top of the result on the first page. In mixed mode, sticky threads are not counted towards **threads_total** and does not affect pagination.
    sticky?: 1 | 0
    // Filter to get only threads with the specified prefix.
    thread_prefix_id?: number
    // Filter to get only threads with the specified tag.
    thread_tag_id?: number
    // Page number of threads.
    page?: number
    // Number of threads in a page.
    limit?: number
    // Ordering of threads.
    order?: string
}

interface CreateThreadRequest {
    // Id of the target forum.
    forum_id: number
    // Title of the new thread.
    thread_title: string
    // Id of a prefix for the new thread.
    thread_prefix_id?: number
    // Thread tags for the new thread.
    thread_tags?: Array<string>
    // Contest type. Required if **forum_id** is 766 (Contests).
    contest_type?: 'by_finish_date' | 'by_needed_members'
    // Winner count (prize count). Required if **forum_id** is 766 (Contests).
    count_winners?: number
    // Max member count. Required if **contest_type** is **by_needed_members**.
    needed_members?: number
    // Giveaway duration value. The maximum duration is 3 days. Required if **contest_type** is **by_finish_date**.
    length_value?: number
    // Giveaway duration type. The maximum duration is 3 days. Required if **contest_type** is **by_finish_date**.
    length_option?: 'minutes' | 'hours' | 'days'
    // Sympathies for this week. Required if **forum_id** is 766 (Contests).
    require_like_count?: number
    // Symapthies for all time. Required if **forum_id** is 766 (Contests).
    require_total_like_count?: number
    // Prize type. Required if **forum_id** is 766 (Contests).
    prize_type?: 'money' | 'upgrades'
    // How many money will each winner receive. Required if **prize_type** is **money**.
    prize_data_money?: number
    // Which upgrade will each winner receive. Required if **prize_type** is **upgrades**.+ 1 - Supreme - 3 months.+ 6 - Legend - 12 months.+ 12 - AntiPublic.One Plus subscription - 1 month.+ 14 - Uniq - lifetime.+ 17 - 18+ Photo leaks - 6 months.+ 19 - Auto giveaway participation - 1 month.
    prize_data_upgrade?: 1 | 6 | 12 | 14 | 17 | 19
    // Secret answer of your account. Required if **forum_id** is 766 (Contests).
    secret_answer?: string
}

interface GetThreadRequest {
    // Id of thread.
    threadId: number
}

interface DeleteThreadRequest {
    // Id of thread.
    threadId: number
    // Reason of the thread removal.
    reason?: string
}

interface BumpThreadRequest {
    // Id of thread.
    threadId: number
}

interface GetThreadFollowersRequest {
    // Id of thread.
    threadId: number
}

interface FollowThreadRequest {
    // Id of thread.
    threadId: number
    // Whether to receive notification as email.
    email?: 1
}

interface UnfollowThreadRequest {
    // Id of thread.
    threadId: number
}

interface GetFollowedThreadsRequest {
    // If included in the request, only the thread count is returned as **threads_total**.
    total?: true
}

interface GetNavigationElementsRequest {
    // Id of thread.
    threadId: number
}

interface GetPollRequest {
    // Id of thread.
    threadId: number
}

interface VotePollRequest {
    // Id of thread.
    threadId: number
    // The id of the response to vote for. Can be skipped if **response_ids** set.
    response_id?: number
    // An array of ids of responses (if the poll allows multiple choices).
    'response_ids[]'?: Array<integer>
}

interface GetUnreadThreadsRequest {
    // Maximum number of result threads. The limit may get decreased if the value is too large (depending on the system configuration).
    limit?: number
    // Id of the container forum to search for threads. Child forums of the specified forum will be included in the search.
    forum_id?: number
    // Number of thread data to be returned. Default value is 20.
    data_limit?: number
}

interface GetRecentThreadsRequest {
    // Maximum number of days to search for threads.
    days?: number
    // Maximum number of result threads. The limit may get decreased if the value is too large.
    limit?: number
    // Id of the container forum to search for threads. Child forums of the specified forum will be included in the search.
    forum_id?: number
    // Number of thread data to be returned. Default value is 20.
    data_limit?: number
}

interface GetPostsRequest {
    // Id of the containing thread.
    thread_id?: number
    // Id of a post, posts that are in the same page with the specified post will be returned. **thread_id** may be skipped.
    page_of_post_id?: number
    // Ids of needed posts (separated by comma). If this parameter is set, all other filtering parameters will be ignored.
    post_ids?: string
    // Page number of posts.
    page?: number
    // Number of posts in a page. Default value depends on the system configuration.
    limit?: number
    // Ordering of posts.
    order?: 'natural' | 'natural_reverse' | 'post_create_date' | 'post_create_date_reverse' | 'post_likes' | 'post_likes_reverse'
}

interface CreatePostRequest {
    // Id of the target thread.
    thread_id?: number
    // Id of the quote post. It's possible to skip **thread_id** if this parameter is provided. An extra check is performed if both parameters exist and does not match.
    quote_post_id?: number
}

interface GetPostRequest {
    // Id of post.
    postId: number
}

interface EditPostRequest {
    // Id of post.
    postId: number
    // New title of the thread (only used if the post is the first post in the thread and the authenticated user can edit thread).
    thread_title?: string
    // New id of the thread's prefix (only used if the post is the first post in the thread and the authenticated user can edit thread).
    thread_prefix_id?: number
    // New tags of the thread (only used if the post is the first post in the thread and the authenticated user can edit thread tags).
    thread_tags?: Array<string>
    // Move thread to new forum if the post is first post and the authenticated user can move thread.
    thread_node_id?: number
}

interface DeletePostRequest {
    // Id of post.
    postId: number
    // Reason of the post removal.
    reason?: string
}

interface GetPostLikesRequest {
    // Id of post.
    postId: number
    // Page number of users.
    page?: number
    // Number of users in a page. Default value depends on the system configuration.
    limit?: number
}

interface LikePostRequest {
    // Id of post.
    postId: number
}

interface UnlikePostRequest {
    // Id of post.
    postId: number
}

interface ReportPostRequest {
    // Id of post.
    postId: number
    // Reason of the report.
    message: string
}

interface GetPostCommentsRequest {
    // Id of post.
    postId: number
    // The time in milliseconds (e.g. 1652177794083) before last comment date.
    before?: number
    // Comment id to get older comments.
    before_comment?: number
}

interface CreatePostCommentRequest {
    // Id of post.
    postId: number
}

interface GetPopularTagsRequest {
}

interface GetTagsRequest {
    // Page number of tags list.
    page?: number
    // Number of results in a page.
    limit?: number
}

interface GetTaggedContentRequest {
    // Id of tag.
    tagId: number
    // Page number of tagged contents.
    page?: number
    // Number of tagged contents in a page.
    limit?: number
}

interface GetFilteredContentRequest {
    // tag to filter. Tags start with the query will be returned.
    tag: string
}

interface GetUsersRequest {
    // Page number of users.
    page?: number
    // Number of users in a page.
    limit?: number
}

interface GetUserFieldsRequest {
}

interface FindUsersRequest {
    // Username to filter. Usernames start with the query will be returned.
    username?: string
    // Email to filter. Requires **admincp** scope.
    user_email?: string
    // Custom fields to filter. Example: **custom_fields[telegram]=telegramLogin**.
    custom_fields?: unknown
    // User location field.
    'custom_fields[location]'?: string
    // User occupation field.
    'custom_fields[occupation]'?: string
    // User homepage field.
    'custom_fields[homepage]'?: string
    // User interests field.
    'custom_fields[_4]'?: string
    // User thread link for "innovator" trophy.
    'custom_fields[lztInnovationLink]'?: string
    // User thread link for "innovator 2.0" trophy.
    'custom_fields[lztInnovation20Link]'?: string
    // User thread link for "innovator 3.0" trophy.
    'custom_fields[lztInnovation30Link]'?: string
    // User scam url field.
    'custom_fields[scamURL]'?: string
    // User maecenas value field.
    'custom_fields[maecenasValue]'?: number
    // User telegram field.
    'custom_fields[telegram]'?: string
    // User vk field.
    'custom_fields[vk]'?: string
    // User qiwi field.
    'custom_fields[qiwi]'?: string
    // User discord field.
    'custom_fields[discord]'?: string
    // User telegram field.
    'custom_fields[steam]'?: string
    // User jabber field.
    'custom_fields[jabber]'?: string
    // User lztDeposit field.
    'custom_fields[lztDeposit]'?: number
    // User ban_reason field.
    'custom_fields[ban_reason]'?: string
}

interface GetProfileRequest {
}

interface GetUserRequest {
    // Id of user.
    userId: number
}

interface EditUserRequest {
    // User id.
    userId: number
    // Data of the new password.
    password?: string
    // Data of the existing password, it is not required if (1) the current authenticated user has **user** admin permission, (2) the **admincp** scope is granted and (3) the user being edited is not the current authenticated user.
    password_old?: string
    // Algorithm used to encrypt the **password** and **password_old** parameters. See **Encryption** section for more information.
    password_algo?: string
    // New email of the user.
    user_email?: string
    // New username of the user. (Require admincp scope)
    username?: string
    // New custom title of the user.
    user_title?: string
    // Id of new primary group. (Require admincp scope)
    primary_group_id?: number
    // Array of ids of new secondary groups. (Require admincp scope)
    'secondary_group_ids[]'?: Array<integer>
    // Id of group you want to display.
    display_group_id?: number
    // Your date of birth (day).
    user_dob_day?: number
    // Your date of birth (month).
    user_dob_month?: number
    // Your date of birth (year).
    user_dob_year?: number
    // Your location.
    'fields[location]'?: string
    // Your occupation.
    'fields[occupation]'?: string
    // Your homepage. 
    'fields[homepage]'?: string
    // Your interests.
    'fields[_4]'?: string
    // Thread link for "innovator" trophy.
    'fields[lztInnovationLink]'?: string
    // Thread link for "innovator 2.0" trophy.
    'fields[lztInnovation20Link]'?: string
    // Thread link for "innovator 3.0" trophy.
    'fields[lztInnovation30Link]'?: string
    // Your telegram.
    'fields[telegram]'?: string
    // Your vk.
    'fields[vk]'?: string
    // Your qiwi.
    'fields[qiwi]'?: string
    // Your discord.
    'fields[discord]'?: string
    // Your steam.
    'fields[steam]'?: string
    // Your jabber.
    'fields[jabber]'?: string
}

interface LostPasswordRequest {
    // Username.
    username?: string
    // Email.
    email?: string
    // A valid one time token.
    oauth_token: string
}

interface UploadAvatarRequest {
    // User id.
    userId: number
}

interface DeleteAvatarRequest {
    // User id.
    userId: number
}

interface AvatarCropRequest {
    // User id.
    userId: number
    // The starting point of the selection by width. Default value - 0
    x?: number
    // The starting point of the selection by height. Default value - 0
    y?: number
    // Selection size. Minimum value - 16.
    crop: number
}

interface GetUserFollowersRequest {
    // User id.
    userId: number
    // Ordering of followers.
    order?: 'natural' | 'follow_date' | 'follow_date_reverse'
    // Page number of followers.
    page?: number
    // Number of followers in a page.
    limit?: number
}

interface FollowUserRequest {
    // User id.
    userId: number
}

interface UnfollowUserRequest {
    // User id.
    userId: number
}

interface GetFollowedUsersByUserRequest {
    // User id.
    userId: number
    // Ordering of users.
    order?: 'natural' | 'follow_date' | 'follow_date_reverse'
    // Page number of users.
    page?: number
    // Number of users in a page.
    limit?: number
}

interface GetIgnoredUsersRequest {
    // If included in the request, only the user count is returned as **users_total**.
    total?: true
}

interface IgnoreUserRequest {
    // User id.
    userId: number
}

interface UnignoreUserRequest {
    // User id.
    userId: number
}

interface GetAllUserGroupsRequest {
}

interface GetUserGroupsRequest {
    // User id.
    userId: number
}

interface GetContentsRequest {
    // User id.
    userId: number
    // Page number of contents.
    page?: number
    // Number of contents in a page.
    limit?: number
}

interface CreateProfilePostRequest {
    // User id.
    userId: number
    // If posting to authorized user timeline, **status** can be used instead of **post_body** for content of the new profile post.
    status?: string
}

interface GetProfilePostRequest {
    // Id of profile post.
    profilePostId: number
}

interface EditProfilePostRequest {
    // Id of profile post.
    profilePostId: number
}

interface DeleteProfilePostRequest {
    // Id of profile post.
    profilePostId: number
    // Reason of the profile post removal.
    reason?: string
}

interface GetProfilePostLikesRequest {
    // Id of profile post.
    profilePostId: number
}

interface LikeProfilePostRequest {
    // Id of profile post.
    profilePostId: number
}

interface UnlikeProfilePostRequest {
    // Id of profile post.
    profilePostId: number
}

interface GetProfilePostCommentsRequest {
    // Id of profile post.
    profilePostId: number
    // Date to get older comments. Please note that this entry point does not support the page parameter but it still does support **limit**.
    before?: number
    // Number of profile posts in a page.
    limit?: number
}

interface CreateProfilePostCommentRequest {
    // Id of profile post.
    profilePostId: number
}

interface GetProfilePostCommentRequest {
    // Id of profile post.
    profilePostId: number
    // Id of profile post comment.
    commentId: number
}

interface DeleteProfilePostCommentRequest {
    // Id of profile post.
    profilePostId: number
    // Id of profile post comment.
    commentId: number
    // Delete reason.
    reason?: string
}

interface ReportProfilePostRequest {
    // Id of profile post.
    profilePostId: number
    // Reason of the report.
    message: string
}

interface GetConversationsRequest {
    // Page number of conversations.
    page?: number
    // Number of conversations in a page.
    limit?: number
}

interface CreateConversationRequest {
    // Id of recipient. Required if **is_group=false**.
    recipient_id?: number
    // Username of recipient. Required if **is_group=true**.
    recipients?: string
    // Is group. Set **false** if personal conversation, or set **true** if group.
    is_group: string
    // The title of new conversation. Required if **is_group=true**.
    title?: string
    // Open invite. Set **0** if closed invite, or set **1** if open invite.
    open_invite?: 1 | 0
    // Is conversation locked.
    conversation_locked?: 1 | 0
    // Allow edit messages.
    allow_edit_messages?: string
}

interface GetConversationRequest {
    // Id of conversation.
    conversationId: number
}

interface LeaveConversationRequest {
    // Id of conversation.
    conversationId: number
    // Deletion type.
    delete_type: 'delete' | 'delete_ignore'
}

interface GetConversationMessagesRequest {
    // Id of needed conversation.
    conversation_id: number
    // Page number of messages.
    page?: number
    // Number of messages in a page.
    limit?: number
    // Ordering of messages.
    order?: 'natural' | 'natural_reverse'
    // Date to get older messages.
    before?: number
    // Date to get newer messages.
    after?: number
}

interface CreateConversationMessageRequest {
    // Id of needed conversation.
    conversation_id: number
}

interface GetConversationMessageRequest {
    // Id of message.
    messageId: number
}

interface EditConversationMessageRequest {
    // Id of message.
    messageId: number
}

interface DeleteConversationMessageRequest {
    // Id of message.
    messageId: number
}

interface ReportConversationMessageRequest {
    // Id of message.
    messageId: number
}

interface GetNotificationsRequest {
}

interface GetNotificationRequest {
    // Id of notification.
    notificationId: number
}

interface CustomNotificationRequest {
}

interface MarkNotificationReadRequest {
    // If notification_id is omitted, it's mark all existing notifications as read.
    notification_id?: number
}

interface SearchThreadRequest {
    // Search query. Can be skipped if **user_id** is set.
    q?: string
    // Tag to search for tagged contents.
    tag?: string
    // Id of the container forum to search for contents. Child forums of the specified forum will be included in the search.
    forum_id?: number
    // Id of the creator to search for contents.
    user_id?: number
    // Page number of results.
    page?: number
    // Number of results in a page.
    limit?: number
    // Number of thread data to be returned.
    data_limit?: number
}

interface SearchPostRequest {
    // Search query. Can be skipped if **user_id** is set.
    q?: string
    // Tag to search for tagged contents.
    tag?: string
    // Id of the container forum to search for contents. Child forums of the specified forum will be included in the search.
    forum_id?: number
    // Id of the creator to search for contents.
    user_id?: number
    // Page number of results.
    page?: number
    // Number of results in a page.
    limit?: number
    // Number of post data to be returned.
    data_limit?: number
}

interface SearchRequest {
    // Search query. Can be skipped if **user_id** is set.
    q?: string
    // Tag to search for tagged contents.
    tag?: string
    // Id of the container forum to search for contents. Child forums of the specified forum will be included in the search.
    forum_id?: number
    // Id of the creator to search for contents.
    user_id?: number
    // Page number of results.
    page?: number
    // Number of results in a page.
    limit?: number
}

interface SearchTaggedRequest {
    // Tag to search for tagged contents.
    tag?: string
    // Array of tags to search for tagged contents.
    'tags[]'?: Array<string>
    // Page number of results.
    page?: number
    // Number of results in a page.
    limit?: number
}

interface BatchRequest {
}

interface SearchIndexingRequest {
    // The type of content being indexed.
    content_type: string
    // The unique id for the content.
    content_id: number
    // Content title.
    title: string
    // Unix timestamp in second of the content. If missing, current time will be used.
    date?: number
    // Link related to content.
    link: string
}