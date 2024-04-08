// auto-generated, don't edit manually

interface GetLastAccountsRequest {
}

interface SteamRequest {
    // List of games.
    'game[]'?: Array<string>
    // List of minimum hours played by game.
    hours_played?: Array<integer>
    // List of maximum hours played by game.
    hours_played_max?: Array<integer>
    // List of VAC bans by game.
    vac?: number
    // Has community ban. Can be [**yes**, **no**, **nomatter**].
    rt?: string
    // Has lifetime trade ban. Can be [**yes**, **no**, **nomatter**].
    trade_ban?: string
    // Has temporary trade limit. Can be [**yes**, **no**, **nomatter**].
    trade_limit?: string
    // Has Prime in CS2. Can be [**yes**, **no**, **nomatter**].
    prime?: string
    // Number of days the account has been offline.
    daybreak?: number
    // Has 5 $ limit. Can be [**yes**, **no**, **nomatter**].
    limit?: string
    // Has .mafile (Steam Guard Authenticator). Can be [**yes**, **no**, **nomatter**].
    mafile?: string
    // How old is the account.
    reg?: number
    // In what notation is time measured. Can be [**day**, **month**, **year**].
    reg_period?: string
    // Minimum level.
    lmin?: number
    // Maximum level.
    lmax?: number
    // Minimum rank in CS2 Matchmaking.
    rmin?: number
    // Maximum rank in CS2 Matchmaking.
    rmax?: number
    // Minimum rank in CS2 Wingman.
    wingman_rmin?: number
    // Maximum rank in CS2 Wingman.
    wingman_rmax?: number
    // Has no VAC ban. Can be [**yes**, **no**, **nomatter**].
    no_vac?: string
    // Has CS2 Matchmaking ban.
    mm_ban?: string
    // Minimum balance.
    balance_min?: number
    // Maximum balance.
    balance_max?: number
    // Game ID to check inventory price
    inv_game?: number
    // Minimum inventory price for game.
    inv_min?: number
    // Maximum inventory price for game.
    inv_max?: number
    // Minimum number of friends.
    friend_min?: number
    // Maximum number of friends.
    friend_max?: number
    // Minimum number of games.
    gmin?: number
    // Maximum number of games.
    gmax?: number
    // Minimum number of wins.
    win_count_min?: number
    // Maximum number of wins
    win_count_max?: number
    // List of medal names.
    'medal[]'?: Array<string>
    // List of medal IDs.
    'medal_id[]'?: Array<integer>
    // Minimum number of medals.
    medal_min?: number
    // Maximum number of medals.
    medal_max?: number
    // List of gifts.
    'gift[]'?: Array<string>
    // Minimum number of gifts.
    gift_min?: number
    // Maximum number of gifts.
    gift_max?: number
    // Minimum number of recently played hours.
    recently_hours_min?: number
    // Maximum number of recently played hours.
    recently_hours_max?: number
    // List of allowed countries.
    'country[]'?: Array<string>
    // List of disallowed countries.
    'not_country[]'?: Array<string>
    // CS2 rank (>=).
    csgo_profile_rank?: number
    // Minimum CS2 rank.
    csgo_profile_rank_min?: number
    // Maximum CS2 rank.
    csgo_profile_rank_max?: number
    // Minimum number of Dota 2 MMR.
    solommr_min?: number
    // Maximum number of Dota 2 MMR.
    solommr_max?: number
    // Minimum number of Dota 2 games.
    d2_game_count_min?: number
    // Maximum number of Dota 2 games.
    d2_game_count_max?: number
    // Minimum number of Dota 2 wins.
    d2_win_count_min?: number
    // Maximum number of Dota 2 wins.
    d2_win_count_max?: number
    // Minimum number of Dota 2 behavior.
    d2_behavior_min?: number
    // Maximum number of Dota 2 behavior.
    d2_behavior_max?: number
    // Minimum FACEIT level.
    faceit_lvl_min?: number
    // Maximum FACEIT level.
    faceit_lvl_max?: number
    // Minimum number of Steam points.
    points_min?: number
    // Maximum number of Steam points.
    points_max?: number
    // Minimum number of relevant games.
    relevant_gmin?: number
    // Maximum number of relevant games.
    relevant_gmax?: number
    // How old is last transaction.
    last_trans_date?: number
    // In what notation is time measured. Can be [**day**, **month**, **year**].
    last_trans_date_period?: string
    // How new is last transaction.
    last_trans_date_later?: number
    // In what notation is time measured. Can be [**day**, **month**, **year**].
    last_trans_date_period_later?: string
    // Has no transactions.
    no_trans?: string
    // Has transactions.
    trans?: string
    // Minimum Premier ELO in CS2.
    elo_min?: number
    // Maximum Premier ELO in CS2.
    elo_max?: number
    // Map for rank in CS2.
    cs2_map_rank?: number
    // Minimum rank in CS2 on a certain map.
    cs2_map_rmin?: number
    // Maximum rank in CS2 on a certain map.
    cs2_map_rmax?: number
    // The number of the page to display results from.
    page?: number
    // Minimal price of account (Inclusive)
    pmin?: number
    // Maximum price of account (Inclusive)
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no_market**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface FortniteRequest {
    // Minimum number of skins.
    smin?: number
    // Maximum number of skins.
    smax?: number
    // Minimum number of V-Bucks.
    vbmin?: number
    // Maximum number of V-Bucks.
    vbmax?: number
    // Skins.
    skin?: Array<string>
    // Pickaxes.
    pickaxe?: Array<string>
    // Dances.
    dance?: Array<string>
    // Gliders.
    glider?: Array<string>
    // Can change email. Can be [**yes**, **no**, **nomatter**].
    change_email?: string
    // Platform. Can be [**Epic**, **EpicAndroid**, **EpicPC**, **IOSAppStore**, **Live**, **Nintendo**, **PSN**, **Samsung**].
    platform?: Array<string>
    // Has Battle Pass. Can be [**yes**, **no**, **nomatter**].
    bp?: string
    // Minimum level.
    lmin?: number
    // Maximum level.
    lmax?: number
    // Minimum level of Battle Pass.
    bp_lmin?: number
    // Maximum level of Battle Pass.
    bp_lmax?: number
    // Has Rocket League purchases.
    rl_purchases?: string
    // How old is last transaction.
    last_trans_date?: string
    // In what notation is time measured.
    last_trans_date_period?: string
    // Has no transactions.
    no_trans?: string
    // Can be linked to Xbox. Can be [**yes**, **no**, **nomatter**].
    xbox_linkable?: string
    // Can be linked to PSN. Can be [**yes**, **no**, **nomatter**].
    psn_linkable?: string
    // Number of days the account has been offline.
    daybreak?: number
    // Access to market temp mail. Can be [**yes**, **no**, **nomatter**].
    temp_email?: string
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface VkontakteRequest {
    // List of allowed countries.
    'vk_country[]'?: Array<string>
    // List of allowed cities.
    'vk_city[]'?: Array<string>
    // Minimum number of friends.
    vk_friend_min?: number
    // Maximum number of friends.
    vk_friend_max?: number
    // Minimum number of followers.
    vk_follower_min?: number
    // Maximum number of followers.
    vk_follower_max?: number
    // Minimum number of votes.
    vk_vote_min?: number
    // Maximum number of votes.
    vk_vote_max?: number
    // Sex of account. Can be [**man**, **woman**].
    sex?: string
    // Has linked mobile. Can be [**yes**, **no**, **nomatter**].
    tel?: string
    // Has linked email. Can be [**yes**, **no**, **nomatter**].
    email?: string
    // Has enabled 2FA. Can be [**yes**, **no**, **nomatter**].
    tfa?: string
    // Relationship.
    'relation[]'?: Array<integer>
    // Login into account by token only. Can be [**yes**, **no**, **nomatter**].
    token_auth_only?: string
    // Minimum number of group followers.
    group_follower_min?: number
    // Maximum number of group followers.
    group_follower_max?: number
    // Minimum number of groups.
    groups_min?: number
    // Maximum number of groups.
    groups_max?: number
    // Admin level. Can be [**1**, **2**, **3**, **4**].
    admin_level?: number
    // Minimum age.
    min_age?: number
    // Maximum age.
    max_age?: number
    // Minimum number of digits in ID.
    dig_min?: number
    // Maximum number of digits in ID.
    dig_max?: number
    // Minimum number of conversations.
    conversations_min?: number
    // Maximum number of conversations.
    conversations_max?: number
    // How old is the account.
    reg?: number
    // In what notation is time measured. Can be [**day**, **month**, **year**].
    reg_period?: string
    // List of allowed countries of phone number.
    'mcountry[]'?: Array<string>
    // List of excluded countries of phone number.
    'not_mcountry[]'?: Array<string>
    // Opened account profile.
    opened_profile?: string
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface GenshinImpactRequest {
    // Has linked email. Can be [**yes**, **no**, **nomatter**].
    email?: string
    // Has linked mobile. Can be [**yes**, **no**, **nomatter**].
    tel?: string
    // List of characters.
    'character[]'?: Array<string>
    // Region. Can be [**os_euro**, **os_asia**, **os_cht**].
    region?: string
    // Has linked external accounts. Can be [**yes**, **no**, **nomatter**].
    ea?: string
    // Minimum number of legendary characters.
    legendary_min?: number
    // Maximum number of legendary characters.
    legendary_max?: number
    // Minimum number of constellations on legendary characters.
    constellation_min?: number
    // Maximum number of constellations on legendary characters.
    constellation_max?: number
    // Minimum number of legendary weapon characters.
    legendary_weapon_min?: number
    // Maximum number of legendary weapon characters.
    legendary_weapon_max?: number
    // Minimum number of characters.
    char_min?: number
    // Maximum number of characters.
    char_max?: number
    // Minimum level.
    level_min?: number
    // Maximum level.
    level_max?: number
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface ValorantRequest {
    // List of weapon skins.
    'weaponSkin[]'?: Array<string>
    // List of buddies.
    'buddy[]'?: Array<string>
    // List of agents.
    'agent[]'?: Array<string>
    // List of allowed countries.
    'country[]'?: Array<string>
    // List of disallowed countries.
    'not_country[]'?: Array<string>
    // Number of days the account has been offline.
    daybreak?: number
    // Minimum level.
    level_min?: number
    // Maximum level.
    level_max?: number
    // Minimum inventory value.
    inv_min?: number
    // Maximum inventory value.
    inv_max?: number
    // Minimum number of Valorant points.
    vp_min?: number
    // Maximum number of Valorant points.
    vp_max?: number
    // Minimum number of skins.
    smin?: number
    // Maximum number of skins.
    smax?: number
    // Minimum rank (from 3 to 27).
    rmin?: number
    // Maximum rank.
    rmax?: number
    // Last Minimum rank (from 3 to 27).
    last_rmin?: number
    // Last Maximum rank.
    last_rmax?: number
    // Rank type. Can be [**ranked**, **ranked_ready**, **unrated**].
    rank_type?: string
    // Minimum amount of agents.
    amin?: number
    // Maximum amount of agents.
    amax?: number
    // Region. Can be [**eu**, **ap**, **kr**, **na**, **br**, **la**].
    'region[]'?: Array<string>
    // Exclude region. Can be [**eu**, **ap**, **kr**, **na**, **br**, **la**].
    'not_region[]'?: Array<string>
    // Has linked email. Can be [**yes**, **no**, **nomatter**].
    email?: string
    // Has linked mobile. Can be [**yes**, **no**, **nomatter**].
    tel?: string
    // Can change email. Can be [**yes**, **no**, **nomatter**].
    changeable_email?: string
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface LeagueofLegendsRequest {
    // Minimum level.
    lvl_min?: number
    // Maximum level.
    lvl_max?: number
    // Minimum winrate.
    winrate_min?: number
    // Maximum winrate.
    winrate_max?: number
    // Minimum wallet blue balance.
    wallet_blue_min?: number
    // Maximum wallet blue balance.
    wallet_blue_max?: number
    // Minimum wallet orange balance.
    wallet_orange_min?: number
    // Maximum wallet orange balance.
    wallet_orange_max?: number
    // Minimum wallet mythic balance.
    wallet_mythic_min?: number
    // Maximum wallet mythic balance.
    wallet_mythic_max?: number
    // Minimum wallet riot balance.
    wallet_riot_min?: number
    // Maximum wallet riot balance.
    wallet_riot_max?: number
    // List of skins.
    'skin[]'?: Array<string>
    // List of champions.
    'champion[]'?: Array<string>
    // List of allowed countries.
    'country[]'?: Array<string>
    // Region. Can be [**la1**, **la2**, **br1**, **euw1**, **tr1**, **na1**, **eun1**, **ru**, **oc1**, **jp1**, **ph2**, **vn2**, **th2**, **sg2**].
    'region[]'?: Array<string>
    // Number of days the account has been offline.
    daybreak?: number
    // Has linked mobile. Can be [**yes**, **no**, **nomatter**].
    tel?: string
    // Has confirmed email. Can be [**yes**, **no**, **nomatter**].
    mail?: string
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface TelegramRequest {
    // Has a spam ban. Can be [**yes**, **no**, **nomatter**].
    spam?: string
    // Has a cloud password. Can be [**yes**, **no**, **nomatter**].
    password?: string
    // Has a premium subscription. Can be [**yes**, **no**, **nomatter**].
    premium?: string
    // List of allowed countries.
    'country[]'?: Array<string>
    // List of disallowed countries.
    'not_country[]'?: Array<string>
    // Number of days the account has been offline.
    daybreak?: number
    // Minimum number of channels.
    min_channels?: number
    // Maximum number of channels.
    max_channels?: number
    // Minimum number of chats.
    min_chats?: number
    // Maximum number of chats.
    max_chats?: number
    // Minimum number of conversations.
    min_conversations?: number
    // Maximum number of conversations.
    max_conversations?: number
    // Minimum number of channels, where account is administrator/owner.
    min_admin?: number
    // Maximum number of channels, where account is administrator/owner.
    max_admin?: number
    // Minimum number of subscribers in channel, where account is administrator/owner.
    min_admin_sub?: number
    // Maximum number of subscribers in channel, where account is administrator/owner.
    max_admin_sub?: number
    // Minimum number of digits in ID.
    dig_min?: number
    // Maximum number of digits in ID.
    dig_max?: number
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface SupercellRequest {
    // Account service. Can be [**laser**, **scroll**, **magic**].
    system?: string
    // Minimum level.
    lmin?: number
    // Maximum level.
    lmax?: number
    // Minimum number of cups.
    cup_min?: number
    // Maximum number of cups.
    cup_max?: number
    // Minimum number of brawlers.
    brawlers_min?: number
    // Maximum number of brawlers.
    brawlers_max?: number
    // List of brawlers.
    brawler?: number
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface OriginRequest {
    // List of games.
    'game[]'?: Array<string>
    // List of allowed countries.
    'country[]'?: Array<string>
    // List of disallowed countries.
    'not_country[]'?: Array<string>
    // List of Apex Legends rank groups.
    'al_rank_group[]'?: Array<integer>
    // Minimum level in Apex Legends.
    al_level_min?: number
    // Maximum level in Apex Legends.
    al_level_max?: number
    // Xbox connected to account. Can be [**yes**, **no**, **nomatter**].
    xbox_connected?: string
    // Steam connected to account. Can be [**yes**, **no**, **nomatter**].
    steam_connected?: string
    // Name of subscription. Can be [**EA Play**, **EA Play Pro**].
    subscription?: string
    // Length of subscription.
    subscription_length?: number
    // In what notation is time measured. Can be [**day**, **month**, **year**].
    subscription_period?: string
    // Number of days the account has been offline.
    daybreak?: number
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface WorldofTanksRequest {
    // Has linked mobile. Can be [**yes**, **no**, **nomatter**].
    tel?: string
    // Number of days the account has been offline.
    daybreak?: number
    // Minimum number of battles.
    battles_min?: number
    // Maximum number of battles.
    battles_max?: number
    // Minimum number of gold.
    gold_min?: number
    // Maximum number of gold.
    gold_max?: number
    // Minimum number of silver.
    silver_min?: number
    // Maximum number of silver.
    silver_max?: number
    // Minimum number of top tanks.
    top_min?: number
    // Maximum number of top tanks.
    top_max?: number
    // Minimum number of premium tanks.
    prem_min?: number
    // Maximum number of premium tanks.
    prem_max?: number
    // Minimum number of top premium tanks.
    top_prem_min?: number
    // Maximum number of top premium tanks.
    top_prem_max?: number
    // Minimum number of wins.
    win_pmin?: number
    // Maximum number of wins.
    win_pmax?: number
    // List of tanks.
    'tank[]'?: Array<string>
    // Region. Can be [**ru**, **eu**, **na**, **asia**].
    'region[]'?: Array<string>
    // Exclude region. Can be [**ru**, **eu**, **na**, **asia**].
    'not_region[]'?: Array<string>
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface WoTBlitzRequest {
    // Has linked mobile. Can be [**yes**, **no**, **nomatter**].
    tel?: string
    // Number of days the account has been offline.
    daybreak?: number
    // Minimum number of battles.
    battles_min?: number
    // Maximum number of battles.
    battles_max?: number
    // Minimum number of gold.
    gold_min?: number
    // Maximum number of gold.
    gold_max?: number
    // Minimum number of silver.
    silver_min?: number
    // Maximum number of silver.
    silver_max?: number
    // Minimum number of top tanks.
    top_min?: number
    // Maximum number of top tanks.
    top_max?: number
    // Minimum number of premium tanks.
    prem_min?: number
    // Maximum number of premium tanks.
    prem_max?: number
    // Minimum number of top premium tanks.
    top_prem_min?: number
    // Maximum number of top premium tanks.
    top_prem_max?: number
    // Minimum number of wins.
    win_pmin?: number
    // Maximum number of wins.
    win_pmax?: number
    // List of tanks.
    'tank[]'?: Array<string>
    // Region. Can be [**ru**, **eu**, **na**, **asia**].
    'region[]'?: Array<string>
    // Exclude region. Can be [**ru**, **eu**, **na**, **asia**].
    'not_region[]'?: Array<string>
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface EpicGamesRequest {
    // List of games.
    'game[]'?: Array<string>
    // You can change email. Can be [**yes**, **no**, **nomatter**].
    change_email?: string
    // Has Rocket League purchases.
    rl_purchases?: string
    // Has login data for Social Club account.
    sc?: string
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface EscapefromTarkovRequest {
    // Region. Can be [**cis**, **eu**, **as**, **us**].
    region?: string
    // List of versions. Can be [**standard**, **left_behind**, **prepare_for_escape**, **edge_of_darkness**].
    'version[]'?: Array<string>
    // List of secured containers. Can be [**544a11ac4bdc2d470e8b456a**, **5857a8b324597729ab0a0e7d**, **59db794186f77448bc595262**, **5857a8bc2459772bad15db29**, **5c093ca986f7740a1867ab12**].
    'sc[]'?: Array<string>
    // Minimum experience.
    exp_min?: number
    // Maximum experience.
    exp_max?: number
    // Minimum level.
    level_min?: number
    // Maximum level.
    level_max?: number
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface SocialClubRequest {
    // Has Red Dead Redemption 2.
    rdr2?: string
    // Has GTA 5.
    gtav?: string
    // Number of days the account has been offline
    daybreak?: string
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface UplayRequest {
    // List of games.
    'game[]'?: Array<string>
    // List of allowed countries.
    'country[]'?: Array<string>
    // List of disallowed countries.
    'not_country[]'?: Array<string>
    // Number of days the account has been offline.
    daybreak?: number
    // Minimum level in Tom Clancy's Rainbow Six Siege.
    r6_level_min?: number
    // Maximum level in Tom Clancy's Rainbow Six Siege.
    r6_level_max?: number
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface WarThunderRequest {
    // Number of days the account has been offline.
    daybreak?: number
    // Minimum number of gold.
    gold_min?: number
    // Maximum number of gold.
    gold_max?: number
    // Minimum number of silver.
    silver_min?: number
    // Maximum number of silver.
    silver_max?: number
    // Minimum rank.
    rank_min?: number
    // Maximum rank.
    rank_max?: number
    // Minimum number of elite units.
    eliteUnits_min?: number
    // Maximum number of elite units.
    eliteUnits_max?: number
    // Minimum number of played games.
    played_min?: number
    // Maximum number of played games.
    played_max?: number
    // Minimum number of wins.
    wins_min?: number
    // Maximum number of wins.
    wins_max?: number
    // Has verified mobile. Can be [**yes**, **no**, **nomatter**].
    phone_verified?: string
    // Has verified email. Can be [**yes**, **no**, **nomatter**].
    email_verified?: string
    // Has premium. Can be [**yes**, **no**, **nomatter**].
    premium?: string
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface DiscordRequest {
    // Has linked mobile. Can be [**yes**, **no**, **nomatter**].
    tel?: string
    // Has Nitro. Can be [**yes**, **no**, **nomatter**].
    nitro?: string
    // Has billing. Can be [**yes**, **no**, **nomatter**].
    billing?: string
    // Has gifts. Can be [**yes**, **no**, **nomatter**].
    gifts?: string
    // Is quarantined. Can be [**yes**, **no**, **nomatter**].
    quarantined?: string
    // List of account conditions. Can be [**empty**, **nospam**, **spam**, **cleaned**].
    'condition[]'?: Array<string>
    // Minimum number of chats.
    chat_min?: number
    // Maximum number of chats.
    chat_max?: number
    // How old is the account.
    reg?: number
    // In what notation is time measured. Can be [**day**, **month**, **year**].
    reg_period?: string
    // List of regions.
    'locale[]'?: Array<string>
    // List of regions that won't be included.
    'not_locale[]'?: Array<string>
    // List of badges.
    'badge[]'?: Array<string>
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface TikTokRequest {
    // Has linked mobile. Can be [**yes**, **no**, **nomatter**].
    tel?: string
    // Minimum number of followers.
    fmin?: number
    // Maximum number of followers.
    fmax?: number
    // Minimum number of posts.
    post_min?: number
    // Maximum number of posts.
    post_max?: number
    // Minimum number of likes.
    like_min?: number
    // Maximum number of likes.
    like_max?: number
    // Minimum number of coins.
    coins_min?: number
    // Maximum number of coins.
    coins_max?: number
    // List of allowed countries.
    'tt_country[]'?: Array<string>
    // List of disallowed countries.
    'tt_not_country[]'?: Array<string>
    // Login by cookies. Can be [**yes**, **no**, **nomatter**].
    cookie_login?: string
    // Has a verified badge. Can be [**yes**, **no**, **nomatter**].
    verified?: string
    // Can start a live stream. Can be [**yes**, **no**, **nomatter**].
    hasLivePermission?: string
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface InstagramRequest {
    // Has linked mobile. Can be [**yes**, **no**, **nomatter**].
    tel?: string
    // List of allowed countries.
    'country[]'?: Array<string>
    // List of disallowed countries.
    'not_country[]'?: Array<string>
    // Login by cookies. Can be [**yes**, **no**, **nomatter**].
    cookies?: string
    // Login without cookies. Can be [**yes**, **no**, **nomatter**].
    login_without_cookies?: string
    // Minimum number of followers.
    fmin?: number
    // Maximum number of followers.
    fmax?: number
    // Minimum number of posts.
    post_min?: number
    // Maximum number of posts.
    post_max?: number
    // How old is the account.
    reg?: number
    // In what notation is time measured. Can be [**day**, **month**, **year**].
    reg_period?: string
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface BattleNetRequest {
    // List of games.
    'game[]'?: Array<string>
    // Number of days the account has been offline.
    daybreak?: number
    // List of allowed countries.
    'country[]'?: Array<string>
    // List of disallowed countries.
    'not_country[]'?: Array<string>
    // Can edit BattleTag. Can be [**yes**, **no**, **nomatter**].
    edit_btag?: string
    // Can edit full name. Can be [**yes**, **no**, **nomatter**].
    changeable_fn?: string
    // Read name. Can be [**yes**, **no**, **nomatter**].
    real_id?: string
    // Has linked mobile. Can be [**yes**, **no**, **nomatter**].
    tel?: string
    // Has enabled parent control. Can be [**yes**, **no**, **nomatter**].
    parent_control?: string
    // Login by cookies. Can be [**yes**, **no**, **nomatter**].
    cookies?: string
    // Minimum level in Overwatch.
    lmin?: number
    // Maximum level in Overwatch.
    lmax?: number
    // Minimum balance.
    balance_min?: number
    // Maximum balance.
    balance_max?: number
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface VPNRequest {
    // List of allowed VPN services. Can be [**windscribeVPN**, **tunnelbearVPN**, **vanishVPN**, **zenmateVPN**, **zenmateVPNUltimate**, **ultraVPN**, **xVPN**, **protonVPN**, **mullvadVPN**, **PIAVPN**, **AdguardVPN**, **pureVPN**].
    'service_id[]'?: Array<string>
    // Length of subscription.
    subscription_length?: number
    // In what notation is time measured. Can be [**day**, **month**, **year**].
    subscription_period?: string
    // Is renewable enabled. Can be [**yes**, **no**, **nomatter**].
    renewable?: string
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface CinemaRequest {
    // List of allowed cinema services. Can be [**moretv**, **ivi**, **start**,  **megogo**, **kinopoisk**].
    'service_id[]'?: Array<string>
    // Length of subscription.
    subscription_length?: number
    // In what notation is time measured. Can be [**day**, **month**, **year**].
    subscription_period?: string
    // Is auto renewal enabled. Can be [**yes**, **no**, **nomatter**].
    autorenewal?: string
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface SpotifyRequest {
    // List of allowed countries.
    'country[]'?: Array<string>
    // List of disallowed countries.
    'not_country[]'?: Array<string>
    // Has family subscription. Can be [**yes**, **no**, **nomatter**].
    family?: string
    // Has family manager permissions. Can be [**yes**, **no**, **nomatter**].
    family_manager?: string
    // Minimum count of members in family.
    family_member_count_min?: number
    // Maximum count of members in family.
    family_member_count_max?: number
    // Length of subscription.
    subscription_length?: number
    // In what notation is time measured. Can be [**day**, **month**, **year**].
    subscription_period?: string
    // Is auto renewal enabled. Can be [**yes**, **no**, **nomatter**].
    recurring?: string
    // Trial subscription. Can be [**yes**, **no**, **nomatter**].
    trial?: string
    // List of allowed plans. Can be [**Premium Student**, **Premium Fallback**, **Premium Duo**, **Premium Family**, **Premium Individual**].
    'plan_name[]'?: Array<string>
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface WarfaceRequest {
    // Minimum rank.
    rank_min?: number
    // Maximum rank.
    rank_max?: number
    // Minimum bonus rank.
    bonus_rank_min?: number
    // Maximum bonus rank.
    bonus_rank_max?: number
    // Has linked mobile. Can be [**yes**, **no**, **nomatter**].
    tel?: string
    // Number of days the account has been offline.
    daybreak?: number
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface YoutubeRequest {
    // Is brand account. Can be [**yes**, **no**, **nomatter**].
    brand?: string
    // Has monetization. Can be [**yes**, **no**, **nomatter**].
    monetization?: string
    // Has status artist. Can be [**yes**, **no**, **nomatter**].
    artist?: string
    // Has verified. Can be [**yes**, **no**, **nomatter**].
    verified?: string
    // Has password. Can be [**yes**, **no**, **nomatter**].
    password?: string
    // Minimum subscribes.
    subscribes_min?: number
    // Maximum subscribes.
    subscribes_max?: number
    // Minimum views count.
    viewcount_min?: number
    // Maximum views count.
    viewcount_max?: number
    // Minimum video count.
    videocount_min?: number
    // Maximum video count.
    videocount_max?: number
    // How old is the account.
    reg?: number
    // In what notation is time measured. Can be [**day**, **month**, **year**].
    reg_period?: string
    // List of regions.
    'locale[]'?: Array<string>
    // List of regions that won't be included
    'not_locale[]'?: Array<string>
    // The number of the page to display results from.
    page?: number
    // Minimal price of accounts.
    pmin?: number
    // Maximum price of accounts.
    pmax?: number
    // Email type. Can be [**market**, **autoreg**, **native**, **no**].
    'email_type[]'?: Array<string>
    // Domain of native/autoreg email.
    item_domain?: string
    // Auction. Can be [**yes**, **no**, **nomatter**].
    auction?: string
    // List of account origins. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'origin[]'?: Array<string>
    // List of account origins that won't be included. Can be [**brute**, **fishing**, **stealer**, **personal**, **resale**, **autoreg**].
    'not_origin[]'?: Array<string>
    // Sold before.
    sb?: string
    // Not sold before.
    nsb?: string
    // Sold by me before.
    sb_by_me?: string
    // Not sold by me before.
    nsb_by_me?: string
    // The word or words contained in the account title
    title?: string
    // Order by. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_down_upload**, **pdate_to_up**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
}

interface GetUserAccountsListRequest {
    // User id
    userId: number
    // Accounts category
    category_id?: number
    // Minimal price of account (Inclusive)
    pmin?: number
    // Maximum price of account (Inclusive)
    pmax?: number
    // The word or words contained in the account title
    title?: string
    // Order type. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_up**, **pdate_to_down_upload**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
    // Account status. Can be [**active**, **paid**, **deleted** or **awaiting**].
    show?: string
    // The number of the page to display results from.
    page?: number
}

interface GetAllPurchasedAccountsRequest {
    // User id
    userId: number
    // Accounts category
    category_id?: number
    // Minimal price of account (Inclusive)
    pmin?: number
    // Maximum price of account (Inclusive)
    pmax?: number
    // The word or words contained in the account title
    title?: string
    // Order type. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_up**, **pdate_to_down_upload**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
    // Account status. Can be [**active**, **paid**, **deleted** or **awaiting**].
    show?: string
    // The number of the page to display results from
    page?: number
}

interface GetAllFavouritesAccountsRequest {
    // The number of the page to display results from
    page?: number
    // Order type. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_up**, **pdate_to_down_upload**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
    // Account status. Can be [**active**, **paid**, **deleted** or **awaiting**].
    show?: string
}

interface GetAllViewedAccountsRequest {
    // The number of the page to display results from
    page?: number
    // Order type. Can be [**price_to_up**, **price_to_down**, **pdate_to_down**, **pdate_to_up**, **pdate_to_down_upload**, **pdate_to_up_upload**, **exp_auctions**].
    order_by?: string
    // Account status. Can be [**active**, **paid**, **deleted** or **awaiting**].
    show?: string
}

interface GetInfoAccountRequest {
    // Item id
    itemId: number
}

interface SoftDeleteAccountRequest {
    // Item id.
    itemId: number
    // Delete reason.
    reason: string
}

interface GetSteamAccHtmlRequest {
    // Item id
    itemId: number
    // Type of page - **profiles** or **games**
    type?: string
}

interface GetSearchCategoryRequest {
    // Category name.
    categoryName: string
}

interface GetGamesCategoryRequest {
    // Category name.
    categoryName: string
}

interface GetAuctionRequest {
    // Item id.
    itemId: number
}

interface PostAuctionBidRequest {
    // Item id.
    itemId: number
    // Using currency. Can be [**rub**, **uah**, **kzt**, **byn**, **usd**, **eur**, **gbp**, **cny**, **try**].
    currency?: string
    // Amount bid.
    amount: string
}

interface DeleteAuctionBidRequest {
    // Item id.
    itemId: number
    // Bid id.
    bid_id: number
}

interface GetSteamValueRequest {
    // Link or id of account. Can be [**https://lzt.market/{item-id}/**, **https://steamcommunity.com/id/{steam-name}**, **https://steamcommunity.com/profiles/{steam-id}**, **{steam-id}**].
    link: string
    // Application id.
    app_id: number
    // Using currency for amount. Can be [**cny**, **usd**, **rub**, **eur**, **uah**, **kzt**, **byn**, **gbp**].
    currency?: string
    // Ignore cache.
    ignore_cache?: string
}

interface BuyAccountRequest {
    // Item id.
    itemId: number
    // Current price of account in your currency
    price: number
    // Put **1** if you want to buy account without account data validation (not safe). Does not work for steam category (category_id=1).
    buy_without_validation?: number
}

interface SetReserveAccountRequest {
    // Item id.
    itemId: number
    // Current price of account in your currency
    price: number
}

interface CancelReserveAccountRequest {
    // Item id.
    itemId: number
}

interface CheckAccountRequest {
    // Item id.
    itemId: number
}

interface ConfirmBuyRequest {
    // Item id.
    itemId: number
    // Put **1** if you want to buy account without account data validation (not safe). Does not work for steam category (category_id=1).
    buy_without_validation?: number
}

interface SendMoneyRequest {
    // User id of receiver. If **user_id** specified, **username** is not required.
    user_id?: number
    // Username of receiver. If **username** specified, **user_id** is not required.
    username?: string
    // Amount to send in your currency.
    amount: number
    // Using currency for amount. Allowed values: **cny**, **usd**, **rub**, **eur**, **uah**, **kzt**, **byn**, **gbp**
    currency: string
    // Secret answer of your account
    secret_answer: string
    // Transfer comment
    comment?: string
    // Hold transfer or not
    transfer_hold?: string
    // Hold length value
    hold_length_value?: number
    // Hold length option. Allowed values: **hour**, **day**, **week**, **month**, **year**
    hold_length_option?: string
}

interface HistoryPaymentsRequest {
    // User id
    userId: number
    // Type of operation. Allowed operation types: **income**, **cost**, **refilled_balance**, **withdrawal_balance**, **paid_item**, **sold_item**, **money_transfer**, **receiving_money**, **internal_purchase**, **claim_hold**
    type?: string
    // Minimal price of operation (Inclusive)
    pmin?: number
    // Maximum price of operation (Inclusive)
    pmax?: number
    // The number of the page to display results from
    page?: number
    // Id of the operation from which the result begins
    operation_id_lt?: number
    // Username of user, which receive money from you
    receiver?: string
    // Username of user, which sent money to you
    sender?: string
    // Start date of operation (RFC 3339 date format)
    startDate?: string
    // End date of operation (RFC 3339 date format)
    endDate?: string
    // Wallet, which used for money payouts.
    wallet?: string
    // Comment for money transfers
    comment?: string
    // Display hold operations
    is_hold?: number
    // Display payment stats for selected period (outgoing value, incoming value)
    show_payment_stats?: number
}

interface FastSellAccountRequest {
    // Russian title of account. If **title** specified and **title_en** is empty, **title_en** will be automatically translated to English language.
    title?: string
    // English title of account. If **title_en** specified and **title** is empty, **title** will be automatically translated to Russian language.
    title_en?: string
    // Account price in your currency.
    price: number
    // Sales method. Can be [**price**, **auction**].
    type_sell: string
    // Duration auction value. At the end of the auction time, the item will be closed if there were no bids.
    duration_auction_value?: number
    // Duration auction option. Can be [**minutes**, **hours**, **days**].
    duration_auction_option?: string
    // The price for which you can instantly redeem your account.
    instant_price?: number
    // If you set **cancel**, at the end of the auction with 0 bids, the account can be purchased at the price you specified as the minimum bid. Can be [**close**, **cancel**].
    not_bids_action?: string
    // Accounts category.
    category_id: number
    // Using currency. Allowed values: **cny**, **usd**, **rub**, **eur**, **uah**, **kzt**, **byn** or **gbp**.
    currency: string
    // Account origin. Where did you get it from.
    item_origin: string
    // Guarantee type. Allowed values: **-1** - 12 hours, **0** - 24 hours, **1** - 3 days.
    extended_guarantee: number
    // Account public description.
    description?: string
    // Account private information (visible for buyer only if purchased).
    information?: string
    // Account login (or email)
    login?: string
    // Account password
    password?: string
    // Account login data format login:password
    login_password?: string
    // Required if a **category** is one of list of Required email login data categories.
    has_email_login_data?: string
    // Required if a **category** is one of list of Required email login data categories. Email login data (login:pass format).
    email_login_data?: string
    // Email type. Allowed values: **native**, **autoreg**.
    email_type?: string
    // If set, the item will be closed **item_state = closed**
    close_item?: string
    // Region. Required if you want to upload WoT, Valorant, Escape From Tarkov account. Optional if you want to upload Genshin Impact account.
    'extra[region]'?: string
    // Service id. Required if you want to upload VPN, Cinema account.
    'extra[service_id]'?: string
    // System. Required if you want to upload Supercell account.
    'extra[system]'?: string
    // Discord token. Required if you want to upload Discord account.
    'extra[ds_token]'?: string
    // VK token. Required if you want to upload VK account.
    'extra[vk_token]'?: string
    // VK User-agent. Optional. Used only if you want to upload VK account.
    'extra[vk_ua]'?: string
    // Login into account by token only. Used only if you want to upload VK account.
    'extra[vk_token_auth_only]'?: string
    // Cookies. Required if you want to upload Youtube, Fortnite, Epic Games, Origin (EA), Social Club, Instagram, TikTok or Warface account.
    'extra[cookies]'?: string
    // Required if you want to upload Epic Games account.
    'extra[sc]'?: string
    // Required if you want to upload Origin (EA) account.
    'extra[ItTakesTwo]'?: string
    // Login without cookies. Required if you want to upload Instagram account.
    'extra[login_without_cookies]'?: string
    // Mfa file. Optional. Used only if you want to upload Steam account.
    'extra[mfa_file]'?: string
    // Dota 2 MMR. Optional. Used only if you want to upload Steam account.
    'extra[dota2_mmr]'?: string
    // EA Games. Optional. Used only if you want to upload Steam account.
    'extra[ea_games]'?: string
    // Uplay Games. Optional. Used only if you want to upload Steam account.
    'extra[uplay_games]'?: string
    // The quarry. Optional. Used only if you want to upload Steam account.
    'extra[the_quarry]'?: string
    // Warframe. Optional. Used only if you want to upload Steam account.
    'extra[warframe]'?: string
    // Ark. Optional. Used only if you want to upload Steam account.
    'extra[ark]'?: string
    // Social club games. Optional. Used only if you want to upload Steam account.
    'extra[socialclub_games]'?: string
    // Game version. Required if you want to upload Escape From Tarkov account.
    'extra[game_version]'?: string
    // Cookie login. Optional. Used only if you want to upload TikTok account.
    'extra[cookie_login]'?: string
    // Check channels. Used only if you want to upload Telegram account.
    'extra[checkChannels]'?: string
    // Telegram client. Used only if you want to upload Telegram account.
    'extra[telegramClient]'?: string
    // Check spam. Used only if you want to upload Telegram account.
    'extra[checkSpam]'?: string
    // Allow users to ask discount for this account.
    allow_ask_discount?: string
    // Using proxy id for account checking.
    proxy_id?: number
    // Pass 1, if you get captcha in previous response.
    random_proxy?: number
}

interface CreateAccountItemRequest {
    // Russian title of account. If **title** specified and **title_en** is empty, **title_en** will be automatically translated to English language.
    title?: string
    // English title of account. If **title_en** specified and **title** is empty, **title** will be automatically translated to Russian language.
    title_en?: string
    // Account price in your currency.
    price: number
    // Sales method. Can be [**price**, **auction**].
    type_sell: string
    // Duration auction value. At the end of the auction time, the item will be closed if there were no bids.
    duration_auction_value?: number
    // Duration auction option. Can be [**minutes**, **hours**, **days**].
    duration_auction_option?: string
    // The price for which you can instantly redeem your account.
    instant_price?: number
    // If you set **cancel**, at the end of the auction with 0 bids, the account can be purchased at the price you specified as the minimum bid. Can be [**close**, **cancel**].
    not_bids_action?: string
    // Accounts category.
    category_id: number
    // Using currency. Allowed values: **cny**, **usd**, **rub**, **eur**, **uah**, **kzt**, **byn** or **gbp**.
    currency: string
    // Account origin. Where did you get it from.
    item_origin: string
    // Guarantee type. Allowed values: **-1** - 12 hours, **0** - 24 hours, **1** - 3 days.
    extended_guarantee: number
    // Account public description.
    description?: string
    // Account private information (visible for buyer only if purchased).
    information?: string
    // Required if a **category** is one of list of Required email login data categories.
    has_email_login_data?: string
    // Required if a **category** is one of list of Required email login data categories. Email login data (login:pass format).
    email_login_data?: string
    // Email type. Allowed values: **native**, **autoreg**.
    email_type?: string
    // Allow users to ask discount for this account.
    allow_ask_discount?: string
    // Using proxy id for account checking.
    proxy_id?: number
    // Pass 1, if you get captcha in previous response.
    random_proxy?: number
}

interface CheckNotPublishedAccGettempemailforacccountRequest {
    // Item id
    itemId: number
    // Account login (or email)
    login?: string
    // Account password
    password?: string
    // Account login data format login:password
    login_password?: string
    // If set, the item will be closed **item_state = closed**
    close_item?: number
    // Region. Required if you want to upload WoT, Valorant, Escape From Tarkov account. Optional if you want to upload Genshin Impact account.
    'extra[region]'?: string
    // Service id. Required if you want to upload VPN, Cinema account.
    'extra[service_id]'?: string
    // System. Required if you want to upload Supercell account.
    'extra[system]'?: string
    // Discord token. Required if you want to upload Discord account.
    'extra[ds_token]'?: string
    // VK token. Required if you want to upload VK account.
    'extra[vk_token]'?: string
    // VK User-agent. Used only if you want to upload VK account.
    'extra[vk_ua]'?: string
    // Login into account by token only. Used only if you want to upload VK account.
    'extra[vk_token_auth_only]'?: string
    // Cookies. Required if you want to upload Youtube, Fortnite, Epic Games, Origin (EA), Social Club, Instagram, TikTok or Warface account.
    'extra[cookies]'?: string
    // Required if you want to upload Epic Games account.
    'extra[sc]'?: string
    // Required if you want to upload Origin (EA) account.
    'extra[ItTakesTwo]'?: string
    // Login without cookies. Required if you want to upload Instagram account.
    'extra[login_without_cookies]'?: string
    // Mfa file. Optional. Used only if you want to upload Steam account.
    'extra[mfa_file]'?: string
    // Dota 2 MMR. Optional. Used only if you want to upload Steam account.
    'extra[dota2_mmr]'?: string
    // EA Games. Optional. Used only if you want to upload Steam account.
    'extra[ea_games]'?: string
    // Uplay Games. Optional. Used only if you want to upload Steam account.
    'extra[uplay_games]'?: string
    // The quarry. Optional. Used only if you want to upload Steam account.
    'extra[the_quarry]'?: string
    // Warframe. Optional. Used only if you want to upload Steam account.
    'extra[warframe]'?: string
    // Ark. Optional. Used only if you want to upload Steam account.
    'extra[ark]'?: string
    // Social club games. Optional. Used only if you want to upload Steam account.
    'extra[socialclub_games]'?: string
    // Game version. Required if you want to upload Escape From Tarkov account.
    'extra[game_version]'?: string
    // Cookie login. Optional. Used only if you want to upload TikTok account.
    'extra[cookie_login]'?: string
    // Check channels. Used only if you want to upload Telegram account.
    'extra[checkChannels]'?: string
    // Telegram client. Used only if you want to upload Telegram account.
    'extra[telegramClient]'?: string
    // Check spam. Used only if you want to upload Telegram account.
    'extra[checkSpam]'?: string
    // Put if you are trying to resell an account.
    resell_item_id?: number
    // Pass 1, if you get **captcha** in previous response
    random_proxy?: number
}

interface GetInfoNotPublishedAccRequest {
    // Item id.
    itemId: number
    // Put item id, if you are trying to resell item. This is useful to pass temporary email from reselling item to new item. You will get same temporary email from reselling account.
    resell_item_id?: number
}

interface GetCategoriesRequest {
    // Display top queries for per category.
    top_queries?: string
}

interface GetMafileJsonRequest {
    // Item id.
    itemId: number
}

interface GetEmailConfirmationCodeRequest {
    // Item id
    itemId: number
    // Account email
    email: string
}

interface GetMafileConfirmationCodeRequest {
    // Item id.
    itemId: number
}

interface GetTelegramConfirmationCodeRequest {
    // Item id.
    itemId: number
}

interface TelegramResetAuthRequest {
    // Item id.
    itemId: number
}

interface CancelGuaranteeAccRequest {
    // Item id.
    itemId: number
}

interface ChangePasswordRequest {
    // Item id.
    itemId: number
    // Cancel change password recommendation. It will be helpful, if you don't want to change password and get login data
    _cancel?: number
}

interface GetPasswordTempEmailRequest {
    // Item id.
    itemId: number
}

interface EditAccountRequest {
    // Item id.
    itemId: number
    // Russian title of account. If **title** specified and **title_en** is empty, **title_en** will be automatically translated to English language.
    title?: string
    // English title of account. If **title_en** specified and **title** is empty, **title** will be automatically translated to Russian language.
    title_en?: string
    // Account price in your currency.
    price?: number
    // Using currency for amount. Required if you are trying to change price field. Allowed values: **cny**, **usd**, **rub**, **eur**, **uah**, **kzt**, **byn**, **gbp**
    currency?: string
    // Account origin. Where did you get it from.
    item_origin?: string
    // Account public description.
    description?: string
    // Account private information (visible for buyer only if purchased).
    information?: string
    // Email login data (login:pass format).
    email_login_data?: string
    // Email type. Allowed values: **native**, **autoreg**.
    email_type?: string
    // Allow users to ask discount for this account.
    allow_ask_discount?: number
    // Using proxy id for account checking. See GET or POST /proxy to get or edit proxy list.
    proxy_id?: number
}

interface AddTagAccountRequest {
    // Item id.
    itemId: number
    // Tag id (Tag list is available via **GET /me**).
    tag_id: number
}

interface DeleteTagAccountRequest {
    // Item id.
    itemId: number
    // Tag id (Tag list is available via **GET /me**).
    tag_id: number
}

interface BumpsAccountRequest {
    // Item id.
    itemId: number
}

interface AddFavoriteRequest {
    // Item id.
    itemId: number
}

interface DeleteFavoriteRequest {
    // Item id.
    itemId: number
}

interface StickAccountRequest {
    // Item id.
    itemId: number
}

interface UnstickAccountRequest {
    // Item id.
    itemId: number
}

interface ChangeAccountOwnerRequest {
    // Item id
    itemId: number
    // The username of the new account owner
    username: string
    // Secret answer of your account
    secret_answer: string
}

interface GetProfileMarketRequest {
}

interface EditSettingsMarketRequest {
    // Disable Steam Guard on account purchase moment
    disable_steam_guard?: string
    // Allow users ask discount for your accounts
    user_allow_ask_discount?: string
    // Maximum discount percents for your accounts
    max_discount_percent?: number
    // Usernames who can transfer market accounts to you. Separate values with a comma.
    allow_accept_accounts?: string
    // Hide your profile info when you add an account to favorites
    hide_favourites?: string
    // Vkontakte user agent.
    vk_ua?: string
}

interface GetProxyRequest {
}

interface AddProxyRequest {
    // Proxy ip or host. Required if **proxy_row** is not specified.
    proxy_ip?: string
    // Proxy port. Required if **proxy_row** is not specified.
    proxy_port?: number
    // Proxy username. Required if **proxy_row** is not specified.
    proxy_user?: string
    // Proxy password. Required if **proxy_row** is not specified.
    proxy_pass?: string
    // Proxy list in String format ip:port:user:pass. Each proxy must be start with new line (use \n separator)
    proxy_row?: string
}

interface DeleteProxyRequest {
    // Id of an existing proxy
    proxy_id?: number
    // True. If you want to delete all proxy
    delete_all?: string
}

interface BatchRequest {
}