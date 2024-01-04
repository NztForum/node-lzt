import { LZTApiGroup } from "../apiGroup";
import { LZTApiError } from "../errors";

export declare class LZTApiMarketGroup extends LZTApiGroup {
    static name: string;

    async search(options?: MarketSearchOptions): Promise<any>;

    async getUser(): Promise<any>;

    async getUserItems(options?: UserItemsOptions): Promise<any>;

    async getPayments(options?: PaymentsOptions): Promise<any>;

    async getOrders(options?: OrdersOptions): Promise<any>;

    async getFave(): Promise<any>;

    async getViewed(): Promise<any>;

    async getItem(options?: GetItemOptions): Promise<any>;

    async reserve(options?: ReserveOptions): Promise<any>;

    async cancelReserve(options?: CancelReserveOptions): Promise<any>;

    async checkAccount(options?: CheckAccountOptions): Promise<any>;

    async confirmBuy(options?: ConfirmBuyOptions): Promise<any>;

    async fastBuy(options?: FastBuyOptions): Promise<any>;

    async transfer(options?: TransferOptions): Promise<any>;

    async addItem(options?: AddItemOptions): Promise<any>;

    async getNotPublishedItem(options?: NotPublishedItemOptions): Promise<any>;

    async checkItem(options?: CheckItemOptions): Promise<any>;

    async getEmailCode(options?: EmailCodeOptions): Promise<any>;

    async refuseGuarantee(options?: RefuseGuaranteeOptions): Promise<any>;

    async changePassword(options?: ChangePasswordOptions): Promise<any>;

    async editItem(options?: EditItemOptions): Promise<any>;

    async addTag(options?: AddTagOptions): Promise<any>;

    async deleteTag(options?: DeleteTagOptions): Promise<any>;

    async deleteItem(options?: DeleteItemOptions): Promise<any>;

    async getMafile(options?: GetMafileOptions): Promise<any>;

    async getGuardCode(options?: GetGuardCodeOptions): Promise<any>;

    async getTelegramCode(options?: GetTelegramCodeOptions): Promise<any>;

    async resetTelegramAuth(options?: ResetTelegramAuthOptions): Promise<any>;

    async getTempEmailPassword(options?: TempEmailPasswordOptions): Promise<any>;

    async fave(options?: FaveOptions): Promise<any>;

    async unFave(options?: UnFaveOptions): Promise<any>;

    async stickItem(options?: StickItemOptions): Promise<any>;

    async unstickItem(options?: UnstickItemOptions): Promise<any>;

    async changeOwner(options?: ChangeOwnerOptions): Promise<any>;

    async steamValue(options?: SteamValueOptions): Promise<any>;

    async steamPreview(options?: SteamPreviewOptions): Promise<any>;

    async getCategoryParams(options?: GetCategoryParamsOptions): Promise<any>;

    async getGames(options?: GetGamesOptions): Promise<any>;

    async bumpItem(options?: BumpItemOptions): Promise<any>;

    async getCategories(options?: GetCategoriesOptions): Promise<any>;

    async getMe(): Promise<any>;

    async editMe(options?: EditMeOptions): Promise<any>;

    async getProxys(): Promise<any>;

    async addProxy(options?: AddProxyOptions): Promise<any>;

    async deleteProxy(options?: DeleteProxyOptions): Promise<any>;

    async fastSell(options?: FastSellOptions): Promise<any>;

    async getAuction(options?: GetAuctionOptions): Promise<any>;

    async addBid(options?: AddBidOptions): Promise<any>;

    async removeBid(options?: RemoveBidOptions): Promise<any>;
}

interface MarketSearchOptions {
    categoryName?: string;
    pmin: number;
    pmax: number;
    title: string;
    showStickyItems?: boolean;
    [key: string]: any;
}

interface UserItemsOptions {
    userId?: string;
    categoryId?: string;
    pmin: number;
    pmax: number;
    title: string;
    [key: string]: any;
}

interface PaymentsOptions {
    userId?: string;
    type: string;
    pmin: number;
    pmax: number;
    receiver: string;
    sender: string;
    startDate: string;
    endDate: string;
    wallet: string;
    comment: string;
    isHold?: boolean;
}

interface OrdersOptions {
    userId?: string;
    categoryId?: string;
    pmin: number;
    pmax: number;
    title: string;
    [key: string]: any;
}

interface GetItemOptions {
    itemId?: string;
}

interface ReserveOptions {
    itemId: string;
    price: number;
}

interface CancelReserveOptions {
    itemId: string;
}

interface CheckAccountOptions {
    itemId: string;
}

interface ConfirmBuyOptions {
    itemId: string;
}

interface FastBuyOptions {
    itemId: string;
    price: number;
    skipValidation?: boolean;
}

interface TransferOptions {
    userId: string;
    username: string;
    amount: number;
    currency: string;
    secretAnswer: string;
    holdLengthValue: number;
    holdLengthOption: string;
}

interface AddItemOptions {
    title: string;
    titleEn: string;
    price: number;
    categoryId: string;
    currency: string;
    itemOrigin: string;
    description: string;
    information: string;
    emailLoginData: string;
    emailType: string;
    allowAskDiscount: boolean;
}

interface NotPublishedItemOptions {
    itemId: string;
    resellItemId: string;
}

interface CheckItemOptions {
    itemId: string;
    closeItem: boolean;
}

interface EmailCodeOptions {
    itemId: string;
    email: string;
}

interface RefuseGuaranteeOptions {
    itemId: string;
}

interface ChangePasswordOptions {
    itemId: string;
    _cancel: boolean;
}

interface EditItemOptions {
    itemId: string;
    currency: string;
    [key: string]: any;
}

interface AddTagOptions {
    itemId: string;
    tagId: string;
}

interface DeleteTagOptions {
    itemId: string;
    tagId: string;
}

interface DeleteItemOptions {
    itemId: string;
    reason: string;
}

interface GetMafileOptions {
    itemId: string;
}

interface GetGuardCodeOptions {
    itemId: string;
}

interface GetTelegramCodeOptions {
    itemId: string;
}

interface ResetTelegramAuthOptions {
    itemId: string;
}

interface TempEmailPasswordOptions {
    itemId: string;
}

interface FaveOptions {
    itemId: string;
}

interface UnFaveOptions {
    itemId: string;
}

interface StickItemOptions {
    itemId: string;
}

interface UnstickItemOptions {
    itemId: string;
}

interface ChangeOwnerOptions {
    itemId: string;
    username: string;
    secretAnswer: string;
}

interface SteamValueOptions {
    link: string;
    appId: string;
    currency: string;
    ignoreCache: boolean;
}

interface SteamPreviewOptions {
    itemId: string;
    type: string;
}

interface GetCategoryParamsOptions {
    categoryName: string;
}

interface GetGamesOptions {
    categoryName: string;
}

interface BumpItemOptions {
    itemId: string;
}

interface GetCategoriesOptions {
    topQueries: boolean;
}

interface EditMeOptions {
    disableSteamGuard: boolean;
    userAllowAskDiscount: boolean;
    maxDiscountPercent: number;
    allowAcceptAccounts: boolean;
    hideFavorites: boolean;
    vkUa: boolean;
}

interface AddProxyOptions {
    proxyIP: string;
    proxyPort: string;
    proxyLogin: string;
    proxyPassword: string;
    proxyRow: string;
}

interface DeleteProxyOptions {
    proxyId: string;
    deleteAll: boolean;
}

interface FastSellOptions {
    title: string;
    titleEn: string;
    price: number;
    categoryId: string;
    currency: string;
    itemOrigin: string;
    extendedGuarantee: boolean;
    description: string;
    information: string;
    login: string;
    password: string;
    loginPassword: string;
    hasEmailLoginData: boolean;
    EmailLoginData: string;
    closeItem: boolean;
    emailType: string;
    allowAskDiscount: boolean;
    proxyId: string;
    randomProxy: boolean;
    extraData: string;
}

interface GetAuctionOptions {
    itemId: string;
}

interface AddBidOptions {
    itemId: string;
    currency: string;
    amount: number;
}

interface RemoveBidOptions {
    itemId: string;
    bidId: string;
}
