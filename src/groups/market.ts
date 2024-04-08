import { ApiGroup } from './base'

class MarketApi extends ApiGroup {
    // Displays a list of latest accounts.
    async getLastAccounts (params: GetLastAccountsRequest = {}): Promise<GetLastAccountsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    // CS2 map list for rank filter:
    // + 1 - Dust II
    // + 2 - Mirage
    // + 3 - Train
    // + 4 - Nuke
    // + 5 - Overpass
    // + 6 - Inferno
    // + 7 - Ancient
    // + 8 - Vertigo
    // + 9 - Anubis
    // + 10 - Office
    async steam (params: SteamRequest = {}): Promise<SteamResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/steam`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async fortnite (params: FortniteRequest = {}): Promise<FortniteResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/fortnite`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async vkontakte (params: VkontakteRequest = {}): Promise<VkontakteResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/vkontakte`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async genshinImpact (params: GenshinImpactRequest = {}): Promise<GenshinImpactResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/genshin-impact`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async valorant (params: ValorantRequest = {}): Promise<ValorantResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/valorant`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async leagueOfLegends (params: LeagueofLegendsRequest = {}): Promise<LeagueofLegendsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/league-of-legends`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async telegram (params: TelegramRequest = {}): Promise<TelegramResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/telegram`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async supercell (params: SupercellRequest = {}): Promise<SupercellResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/supercell`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async origin (params: OriginRequest = {}): Promise<OriginResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/origin`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async worldOfTanks (params: WorldofTanksRequest = {}): Promise<WorldofTanksResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/world-of-tanks`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async wotBlitz (params: WoTBlitzRequest = {}): Promise<WoTBlitzResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/wot-blitz`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async epicGames (params: EpicGamesRequest = {}): Promise<EpicGamesResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/epicgames`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async escapeFromTarkov (params: EscapefromTarkovRequest = {}): Promise<EscapefromTarkovResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/escape-from-tarkov`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async socialClub (params: SocialClubRequest = {}): Promise<SocialClubResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/socialclub`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async uplay (params: UplayRequest = {}): Promise<UplayResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/uplay`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async warThunder (params: WarThunderRequest = {}): Promise<WarThunderResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/war-thunder`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async discord (params: DiscordRequest = {}): Promise<DiscordResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/discord`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async tiktok (params: TikTokRequest = {}): Promise<TikTokResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/tiktok`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async instagram (params: InstagramRequest = {}): Promise<InstagramResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/instagram`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async battlenet (params: BattleNetRequest = {}): Promise<BattleNetResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/battlenet`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async vpn (params: VPNRequest = {}): Promise<VPNResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/vpn`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async cinema (params: CinemaRequest = {}): Promise<CinemaResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/cinema`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async spotify (params: SpotifyRequest = {}): Promise<SpotifyResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/spotify`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async warface (params: WarfaceRequest = {}): Promise<WarfaceResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/warface`,
            params
        )
    }

    // Displays a list of accounts in a specific category according to your parameters.
    async youtube (params: YoutubeRequest = {}): Promise<YoutubeResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/youtube`,
            params
        )
    }

    // Displays a list of owned accounts.
    // Category id-names list:
    // + 1 - steam - **Steam**
    // + 2 - vkontakte - **VK**
    // + 3 - origin - **Origin**
    // + 4 - warface - **Warface**
    // + 5 - uplay - **Uplay**
    // + 7 - socialclub - **Social Club**
    // + 9 - fortnite - **Fortnite**
    // + 10 - instagram - **Instagram**
    // + 11 - battlenet - **Battle.net**
    // + 12 - epicgames - **Epic Games**
    // + 13 - valorant - **Valorant**
    // + 14 - world-of-tanks - **World Of Tanks**
    // + 16 - wot-blitz - **World Of Tanks Blitz**
    // + 15 - supercell - **Supercell**
    // + 17 - genshin-impact - **Genshin Impact**
    // + 18 - escape-from-tarkov - **Escape From Tarkov**
    // + 19 - vpn - **VPN**
    // + 20 - tiktok - **TikTok**
    // + 22 - discord - **Discord**
    // + 23 - cinema - **Online Cinema**
    // + 24 - telegram - **Telegram**
    // + 25 - youtube - **YouTube**
    // + 26 - spotify - **Spotify**
    // + 27 - war-thunder - **War Thunder**
    async getUserAccountsList (params: GetUserAccountsListRequest): Promise<GetUserAccountsListResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/user/${params.userId}/items`,
            params
        )
    }

    // Displays a list of purchased accounts.
    // Category id-names list:
    // + 1 - steam - **Steam**
    // + 2 - vkontakte - **VK**
    // + 3 - origin - **Origin**
    // + 4 - warface - **Warface**
    // + 5 - uplay - **Uplay**
    // + 7 - socialclub - **Social Club**
    // + 9 - fortnite - **Fortnite**
    // + 10 - instagram - **Instagram**
    // + 11 - battlenet - **Battle.net**
    // + 12 - epicgames - **Epic Games**
    // + 13 - valorant - **Valorant**
    // + 14 - world-of-tanks - **World Of Tanks**
    // + 16 - wot-blitz - **World Of Tanks Blitz**
    // + 15 - supercell - **Supercell**
    // + 17 - genshin-impact - **Genshin Impact**
    // + 18 - escape-from-tarkov - **Escape From Tarkov**
    // + 19 - vpn - **VPN**
    // + 20 - tiktok - **TikTok**
    // + 22 - discord - **Discord**
    // + 23 - cinema - **Online Cinema**
    // + 24 - telegram - **Telegram**
    // + 25 - youtube - **YouTube**
    // + 26 - spotify - **Spotify**
    // + 27 - war-thunder - **War Thunder**
    async getAllPurchasedAccounts (params: GetAllPurchasedAccountsRequest): Promise<GetAllPurchasedAccountsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/user/${params.userId}/orders`,
            params
        )
    }

    // Displays a list of favourites accounts.
    async getAllFavouritesAccounts (params: GetAllFavouritesAccountsRequest = {}): Promise<GetAllFavouritesAccountsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/fave`,
            params
        )
    }

    // Displays a list of viewed accounts.
    async getAllViewedAccounts (params: GetAllViewedAccountsRequest = {}): Promise<GetAllViewedAccountsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/viewed`,
            params
        )
    }

    // Displays account information.
    async getInfoAccount (params: GetInfoAccountRequest): Promise<GetInfoAccountResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/${params.itemId}`,
            params
        )
    }

    // Deletes your account from public search. Deletion type is soft. You can restore account after deletion if you want.
    async softDeleteAccount (params: SoftDeleteAccountRequest): Promise<SoftDeleteAccountResponse> {
        return await this.api.call(
            'DELETE',
            this.endpoint + `/${params.itemId}`,
            params
        )
    }

    // Returns Steam account html code.
    async getSteamAccHtml (params: GetSteamAccHtmlRequest): Promise<GetSteamAccHtmlResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/${params.itemId}/steam-preview`,
            params
        )
    }

    // Displays search parameters for a category.
    async getSearchCategory (params: GetSearchCategoryRequest): Promise<GetSearchCategoryResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/${params.categoryName}/params`,
            params
        )
    }

    // Displays a list of games in the category.
    async getGamesCategory (params: GetGamesCategoryRequest): Promise<GetGamesCategoryResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/${params.categoryName}/games`,
            params
        )
    }

    // Display a list of bids in the auction.
    async getAuction (params: GetAuctionRequest): Promise<GetAuctionResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/${params.itemId}/auction`,
            params
        )
    }

    // Create a new auction bid.
    async postAuctionBid (params: PostAuctionBidRequest): Promise<PostAuctionBidResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/${params.itemId}/auction/bid`,
            params
        )
    }

    // Delete your auction bid. You can delete your auction bid within 5 minutes.
    async deleteAuctionBid (params: DeleteAuctionBidRequest): Promise<DeleteAuctionBidResponse> {
        return await this.api.call(
            'DELETE',
            this.endpoint + `/${params.itemId}/auction/bid`,
            params
        )
    }

    // Gets steam value.
    // Application id list:
    // + **730** - CS2
    // + **578080** - PUBG
    // + **753** - Steam
    // + **570** - Dota 2
    // + **440** - Team Fortress 2
    // + **252490** - Rust
    // + **304930** - Unturned
    // + **304930** - Unturned
    // + **232090** - Killing Floor 2
    // + **322330** - Don't Starve Together
    async getSteamValue (params: GetSteamValueRequest): Promise<GetSteamValueResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/steam-value`,
            params
        )
    }

    // Check and buy account.
    async buyAccount (params: BuyAccountRequest): Promise<BuyAccountResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/${params.itemId}/fast-buy`,
            params
        )
    }

    // Reserves account for you. Reserve time - 300 seconds.
    async setReserveAccount (params: SetReserveAccountRequest): Promise<SetReserveAccountResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/${params.itemId}/reserve`,
            params
        )
    }

    // Cancels reserve.
    async cancelReserveAccount (params: CancelReserveAccountRequest): Promise<CancelReserveAccountResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/${params.itemId}/cancel-reserve`,
            params
        )
    }

    // Checking account for validity. If the account is invalid, the purchase will be canceled automatically (you don't need to make request **POST /:itemId/cancel-reserve**).
    async checkAccount (params: CheckAccountRequest): Promise<CheckAccountResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/${params.itemId}/check-account`,
            params
        )
    }

    // Confirm buy.
    async confirmBuy (params: ConfirmBuyRequest): Promise<ConfirmBuyResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/${params.itemId}/confirm-buy`,
            params
        )
    }

    // Send money to any user.
    // The web version additionally has a **redirect** parameter (After payment, there will be a redirect to the specified link).
    async sendMoney (params: SendMoneyRequest): Promise<SendMoneyResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/balance/transfer`,
            params
        )
    }

    // Displays list of your payments.
    async historyPayments (params: HistoryPaymentsRequest): Promise<HistoryPaymentsResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/user/${params.userId}/payments`,
            params
        )
    }

    // Adds and check account on validity. If account is valid, account will be published on the market.
    // Account origin. Where did you get it from.
    // + brute - Account received using Bruteforce
    // + fishing - Account received from fishing page
    // + stealer - Account received from stealer logs
    // + autoreg - Account is automatically registered by a tool
    // + personal - Account is yours. You created it yourself
    // + resale - Account received from another seller
    // + retrive - Account is recovered by email or phone (only for VKontakte category)
    // + dummy - Dummy (empty) account (only for Steam category)
    // Required email login data categories:
    // + 9 - Fortnite
    // + 12 - Epic games
    // + 18 - Escape from Tarkov
    async fastSellAccount (params: FastSellAccountRequest): Promise<FastSellAccountResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/item/fast-sell`,
            params
        )
    }

    // Adds account on the market.
    // Account origin. Where did you get it from.
    // + brute - Account received using Bruteforce
    // + fishing - Account received from fishing page
    // + stealer - Account received from stealer logs
    // + autoreg - Account is automatically registered by a tool
    // + personal - Account is yours. You created it yourself
    // + resale - Account received from another seller
    // + retrive - Account is recovered by email or phone (only for VKontakte category)
    // + dummy - Dummy (empty) account (only for Steam category)
    // Required email login data categories:
    // + 9 - Fortnite
    // + 12 - Epic games
    // + 18 - Escape from Tarkov
    async createAccountItem (params: CreateAccountItemRequest): Promise<CreateAccountItemResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/item/add`,
            params
        )
    }

    // Check and put up to sale not published account OR update account information existing account.
    async checkNotPublishedAcc (params: CheckNotPublishedAccGettempemailforacccountRequest): Promise<CheckNotPublishedAccGettempemailforacccountResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/${params.itemId}/goods/check`,
            params
        )
    }

    // Get info about not published item. For categories, which required temporary email (Steam, Social Club), you will get temporary email in response.
    async getInfoNotPublishedAcc (params: GetInfoNotPublishedAccRequest): Promise<GetInfoNotPublishedAccResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/${params.itemId}/goods/add`,
            params
        )
    }

    // Display category list.
    async getCategories (params: GetCategoriesRequest = {}): Promise<GetCategoriesResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/category`,
            params
        )
    }

    // Returns mafile in JSON. Warning: this action is cancelling active account guarantee.
    async getMafileJson (params: GetMafileJsonRequest): Promise<GetMafileJsonResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/${params.itemId}/mafile`,
            params
        )
    }

    // Gets confirmation code or link.
    async getEmailConfirmationCode (params: GetEmailConfirmationCodeRequest): Promise<GetEmailConfirmationCodeResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/${params.itemId}/email-code`,
            params
        )
    }

    // Gets confirmation code from MaFile (Only for Steam accounts).
    async getMafileConfirmationCode (params: GetMafileConfirmationCodeRequest): Promise<GetMafileConfirmationCodeResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/${params.itemId}/guard-code`,
            params
        )
    }

    // Gets confirmation code from Telegram.
    async getTelegramConfirmationCode (params: GetTelegramConfirmationCodeRequest): Promise<GetTelegramConfirmationCodeResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/${params.itemId}/telegram-login-code`,
            params
        )
    }

    // Resets Telegram authorizations.
    async telegramResetAuth (params: TelegramResetAuthRequest): Promise<TelegramResetAuthResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/${params.itemId}/telegram-reset-authorizations`,
            params
        )
    }

    // Cancel guarantee of account. It can be useful for account reselling.
    async cancelGuaranteeAcc (params: CancelGuaranteeAccRequest): Promise<CancelGuaranteeAccResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/${params.itemId}/refuse-guarantee`,
            params
        )
    }

    // Changes password of account.
    async changePassword (params: ChangePasswordRequest): Promise<ChangePasswordResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/${params.itemId}/change-password`,
            params
        )
    }

    // Gets password from temp email of account. After calling of this method, the warranty will be cancelled and you cannot automatically resell account.
    async getPasswordTempEmail (params: GetPasswordTempEmailRequest): Promise<GetPasswordTempEmailResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/${params.itemId}/temp-email-password`,
            params
        )
    }

    // Edits any details of account.
    // Account origin. Where did you get it from.
    // + brute - Account received using Bruteforce
    // + fishing - Account received from fishing page
    // + stealer - Account received from stealer logs
    // + autoreg - Account is automatically registered by a tool
    // + personal - Account is yours. You created it yourself
    // + resale - Account received from another seller
    // + retrive - Account is recovered by email or phone (only for VKontakte category)
    // + dummy - Dummy (empty) account (only for Steam category)
    async editAccount (params: EditAccountRequest): Promise<EditAccountResponse> {
        return await this.api.call(
            'PUT',
            this.endpoint + `/${params.itemId}/edit`,
            params
        )
    }

    // Adds tag for the account.
    async addTagAccount (params: AddTagAccountRequest): Promise<AddTagAccountResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/${params.itemId}/tag`,
            params
        )
    }

    // Deletes tag for the account.
    async deleteTagAccount (params: DeleteTagAccountRequest): Promise<DeleteTagAccountResponse> {
        return await this.api.call(
            'DELETE',
            this.endpoint + `/${params.itemId}/tag`,
            params
        )
    }

    // Bumps account in the search.
    async bumpsAccount (params: BumpsAccountRequest): Promise<BumpsAccountResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/${params.itemId}/bump`,
            params
        )
    }

    // Adds account to favourites.
    async addFavorite (params: AddFavoriteRequest): Promise<AddFavoriteResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/${params.itemId}/star`,
            params
        )
    }

    // Deletes account from favourites.
    async deleteFavorite (params: DeleteFavoriteRequest): Promise<DeleteFavoriteResponse> {
        return await this.api.call(
            'DELETE',
            this.endpoint + `/${params.itemId}/star`,
            params
        )
    }

    // Stick account in the top of search.
    async stickAccount (params: StickAccountRequest): Promise<StickAccountResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/${params.itemId}/stick`,
            params
        )
    }

    // Unstick account of the top of search.
    async unstickAccount (params: UnstickAccountRequest): Promise<UnstickAccountResponse> {
        return await this.api.call(
            'DELETE',
            this.endpoint + `/${params.itemId}/stick`,
            params
        )
    }

    // Change of account owner.
    async changeAccountOwner (params: ChangeAccountOwnerRequest): Promise<ChangeAccountOwnerResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/${params.itemId}/change-owner`,
            params
        )
    }

    // Displays info about your profile.
    async getProfileMarket (params: GetProfileMarketRequest = {}): Promise<GetProfileMarketResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/me`,
            params
        )
    }

    // Change settings about your profile on the market.
    async editSettingsMarket (params: EditSettingsMarketRequest = {}): Promise<EditSettingsMarketResponse> {
        return await this.api.call(
            'PUT',
            this.endpoint + `/me`,
            params
        )
    }

    // Gets your proxy list.
    async getProxy (params: GetProxyRequest = {}): Promise<GetProxyResponse> {
        return await this.api.call(
            'GET',
            this.endpoint + `/proxy`,
            params
        )
    }

    // Add single proxy or proxy list.
    // To add single proxy use this parameters:
    // + **proxy_ip** (required) - proxy ip or host
    // + **proxy_port** (required) - proxy port
    // + **proxy_user** (optional) - proxy username
    // + **proxy_pass** (optional) - proxy password
    // To add proxy list use this parameters:
    // + **proxy_row** (required) - proxy list in String format ip:port:user:pass. Each proxy must be start with new line (use 
    //  separator)
    async addProxy (params: AddProxyRequest = {}): Promise<AddProxyResponse> {
        return await this.api.call(
            'POST',
            this.endpoint + `/proxy`,
            params
        )
    }

    // Delete single or all proxies.
    async deleteProxy (params: DeleteProxyRequest = {}): Promise<DeleteProxyResponse> {
        return await this.api.call(
            'DELETE',
            this.endpoint + `/proxy`,
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
}

export default MarketApi