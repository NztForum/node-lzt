# Документация
Все параметры передаются в объекте. Пример:
```js
import { LZTApi } from './src/api.js'

const api = new LZTApi({ token: 'b5f0a0cadb79603f07ff8bf53255d3de0a478acf' })
await api.market.search({ categoryName: 'steam', pmin: 250, pmax: 250 })
```

## LZTApi
 * `token: string` - токен API, получать [тут](https://lzt.market/account/api) (обязательно с scope "market" - для этого нужно иметь 200 симпатий или приобрести "Доступ к маркету" [тут](https://zelenka.guru/payment/method?service_type=user-upgrade&service_id=8))
 * `locale?: string` - ISO 639-1 код языка
 * `fetchParams?: Object` - дополнительные параметры для node-fetch
 * `interval_between_requests?: number` - интервал между запросами в мс, если не указано - 3000 мс

## LZTApi#market
Маркет, в целом повторяет [Official api](https://docs.api.zelenka.guru/?market)

### market.search
Поиск аккаунтов по параметрам
 * `categoryName?: string` - название категории, если не указано возвращает последние аккаунты
 * `pmin?: number` - минимальная цена аккаунта (включительно)
 * `pmax?: number` - максимальная цена аккаунта (включительно)
 * `title?: string` - слово или слова, содержащиеся в названии аккаунта
 * `showStickyItems?: boolean` - если true, будут возвращаться закрепленные аккаунты
 * `...categoryParams` - параметры для конкретной категории, смотреть через код элемента (спасибо, ланской)

### market.getUser
Возвращает информацию о маркете текущего пользователя

### market.getPayments
Возвращает переводы пользователя
 * `userId?: number` - айди пользователя, если не указано берется айди текущего пользователя
 * `type?: 'income'|'cost'|'refilled_balance'|'withdrawal_balance'|'paid_item'|'sold_item'|'money_transfer'|'receiving_money'|'internal_purchase'|'claim_hold'` - тип операции
 * `pmin?: number` - минимальная сумма операции (включительно)
 * `pmax?: number` - максимальная сумма операции (включительно)
 * `receiver?: string` - юзернейм пользователя, получившего деньги
 * `sender?: string` - юзернейм пользователя, отправившего деньги
 * `startDate?: string` - начало интервала даты операции (в формате RFC 3339)
 * `endDate?: string` - конец интервала даты операции (в формате RFC 3339)
 * `wallet?: string` - кошелек использованный для вывода денег
 * `comment?: string` - комментарий к переводу
 * `isHold?: boolean` - если true, то вернет только платежи в холде

### market.getOrders
Возвращает заказы пользователя
 * `userId?: number` - айди пользователя, если не указано берется айди текущего пользователя
 * `categoryId?: number` - айди категории, смотреть [тут](https://github.com/grisha2217/Lolzteam-Public-API/blob/master/docs/market_api.markdown#category-id-names-list)
 * `pmin?: number` - минимальная цена аккаунта (включительно)
 * `pmax?: number` - максимальная цена аккаунта (включительно)
 * `title?: string` - слово или слова, содержащиеся в названии аккаунта
 * `...categoryParams` - параметры для конкретной категории, смотреть через код элемента (спасибо, ланской)

### market.getFave
Возвращает избранные аккаунты

### market.getViewed
Возвращает просмотренные аккаунты

### market.getItem
Возвращает информацию об аккаунте
 * `itemId: number` - айди аккаунта

### market.reserve
Резервирует аккаунт
Время резервирования - 300 секунд
 * `itemId: number` - айди аккаунта
 * `price: number` - текущая цена аккаунта в вашей валюте

### market.cancelReserve
Отменяет резервирование
 * `itemId: number` - айди аккаунта

### market.checkAccount
Проверяет аккаунт
 * `itemId: number` - айди аккаунта

### market.confirmBuy
Подтверждает покупку
 * `itemId: number` - айди аккаунта

### market.transfer
Переводит деньги другому пользователю
 * `userId?: number` - айди пользователя
 * `username?: string` - юзернейм пользователя
 * `amount: number` - сумма в вашей валюте
 * `currency: string` - валюта для параметра amount
 * `holdLengthValue: number` - значение холда
 * `holdLengthOption: 'hour'|'day'|'week'|'month'|'year'` - тип значения холда

### market.addItem
Добавляет аккаунт
 * `title?: string` - название аккаунта, если не указано, titleEn будет автоматически переведен на русский язык
 * `titleEn?: string` - название аккаунта на английском, если не указано, title будет автоматически переведен на английский язык
 * `price: number` - цена аккаунта в вашей валюте
 * `categoryId?: number` - айди категории, смотреть [тут](https://github.com/grisha2217/Lolzteam-Public-API/blob/master/docs/market_api.markdown#category-id-names-list)
 * `currency: string` - валюта для параметра price
 * `itemOrigin: string` - происхождение аккаунта
 * `description?: string` - публичное описание аккаунта
 * `information?: string` - приватная информация об аккаунте (видно только покупателю)
 * `emailLoginData?: string` - почта от аккаунта (login:pass)
 * `emailType?: 'native'|'autoreg'` - тип почты
 * `allowAskDiscount?: boolean` - разрешать пользователям просить скидку

### market.checkItem
Проверяет добавленный аккаунт
 * `itemId: number` - айди аккаунта
 * `closeItem?: number` - если true, объявление будет закрыто

### market.getEmailCode
Получает код или ссылку с почты
 * `itemId: number` - айди аккаунта
 * `email: string` - почта от аккаунта

### market.changePassword
Меняет пароль от аккаунта
 * `itemId: number` - айди аккаунта
 * `_cancel: boolean` - убрать рекомендацию смены пароля. Будет полезно, если вы хотите не меняя пароль получить денные для входа

### market.editItem
Редактирует аккаунт
 * `itemId: number` - айди аккаунта
 * `title?: string` - название аккаунта, если не указано, titleEn будет автоматически переведен на русский язык
 * `titleEn?: string` - название аккаунта на английском, если не указано, title будет автоматически переведен на английский язык
 * `price?: number` - цена аккаунта в вашей валюте
 * `itemOrigin?: string` - происхождение аккаунта
 * `description?: string` - публичное описание аккаунта
 * `information?: string` - приватная информация об аккаунте (видно только покупателю)
 * `hasEmailLoginData?: string` - true если есть данные от почты
 * `emailLoginData?: string` - почта от аккаунта (login:pass)
 * `emailType?: 'native'|'autoreg'` - тип почты
 * `allowAskDiscount?: boolean` - разрешать пользователям просить скидку
 * `currency?: string` - валюта для параметра price

### market.addTag
Добавляет тег к аккаунту
 * `itemId: number` - айди аккаунта
 * `tagId: number` - айди тега

### market.deleteTag
Удаляет тег из аккаунта
 * `itemId: number` - айди аккаунта
 * `tagId: number` - айди тега

### market.getUserItems
Возвращает все объявления пользователя
 * `userId?: number` - айди пользователя, если не указано берется айди текущего пользователя
 * `categoryId?: number` - айди категории, смотреть [тут](https://github.com/grisha2217/Lolzteam-Public-API/blob/master/docs/market_api.markdown#category-id-names-list)
 * `pmin?: number` - минимальная цена аккаунта (включительно)
 * `pmax?: number` - максимальная цена аккаунта (включительно)
 * `title?: string` - слово или слова, содержащиеся в названии аккаунта
 * `...categoryParams` - параметры для конкретной категории, узнать их можно с помощью метода market.getCategoryParams

### market.getCategoryParams
Возвращает параметры поиска для конкретной категории
 * `categoryName: string` - название категории (например, steam)

### market.getGames
Возвращает список игр
* `categoryName: string` - название категории (например, steam)

### market.getNotPublishedItem 
Возвращает неопубликованное объявления пользователя
 * `itemId?: number` - айди объявление
 * `resellItemId?: number` - айди объявления, которое вы хотите перепродать

### market.deleteItem
Удаляет аккаунт
 * `itemId: number` - айди аккаунта
 * `reason: string` - причина удаления

### market.getMafile
Возвращает MaFile stam аккаунта
 * `itemId: number` - айди аккаунта

### market.getGuardCode
Возвращает код steam guard аккаунта
 * `itemId: number` - айди аккаунта

### market.getTelegramCode
Возвращает код для входа в telegram аккаунт
 * `itemId: number` - айди аккаунта

### market.resetTelegramAuth
Сбрасывает сессии telegram аккаунта
 * `itemId: number` - айди аккаунта

### market.getTempEmailPassword
Возвращает пароль от временной почты аккаунта
 * `itemId: number` - айди аккаунта

### market.fave
Добавляет аккаунт в избранное
 * `itemId: number` - айди аккаунта

### market.unFave
Удаляет аккаунт из избранного
 * `itemId: number` - айди аккаунта

### market.stickItem
Закрепляет аккаунт
 * `itemId: number` - айди аккаунта

### market.unStickItem
Открепляет аккаунт
 * `itemId: number` - айди аккаунта

### market.changeOwner
Меняет владельца аккаунта
 * `itemId: number` - айди аккаунта
 * `username: string` - имя пользователя
 * `secretAnswer: string` - секретное слово

### market.steamValue
Возвращает стоимость инвентаря steam аккаунта
 * `link: number` - ссылка на аккаунт https://lzt.market/{item-id}/, https://steamcommunity.com/id/{steam-name}, https://steamcommunity.com/profiles/{steam-id}, {steam-id}
 * `appId: ID игры` - ID игры по которой будет считаться стоимость инвентаря
 * `currency: string` - валюта
 * `ignoreCache?: boolean` - игнорировать кэш
#### ID игр
 * `730` - CS:GO 
 * `578080` - PUBG 
 * `753` - Steam 
 * `570` - Dota 2
 * `440` - Team Fortress 2
 * `252490` - Rust
 * `304930` - Unturned
 * `232090` - Killing Floor 2
 * `322330` - Don't Starve Together

### market.fastBuy
Быстрая покупка аккаунта
 * `itemId: number` - айди аккаунта
 * `price: number` - цена аккаунта в вашей валюте
 * `skipValidation?: boolean` - пропустить проверку на валид

### market.fastSell
Быстрая продажа аккаунта
* `title?: string` - название аккаунта, если не указано, titleEn будет автоматически переведен на русский язык
* `titleEn?: string` - название аккаунта на английском, если не указано, title будет автоматически переведен на английский язык
* `price: number` - цена аккаунта в вашей валюте
* `categoryId?: number` - айди категории, смотреть [тут](https://github.com/grisha2217/Lolzteam-Public-API/blob/master/docs/market_api.markdown#category-id-names-list)
* `currency: string` - валюта для параметра price
* `itemOrigin: string` - происхождение аккаунта
* `description?: string` - публичное описание аккаунта
* `information?: string` - приватная информация об аккаунте (видно только покупателю)
* `login?: string` - логин от аккаунта
* `password?: string` - пароль от аккаунта
* `loginPassword?: string` - логин и пароль от аккаунта (login:pass)
* `hasEmailLoginData?: string` - true если есть данные от почты
* `emailLoginData?: string` - почта от аккаунта (login:pass)
* `emailType?: 'native'|'autoreg'` - тип почты
* `allowAskDiscount?: boolean` - разрешать пользователям просить скидку
* `closeItem?: boolean` - закрыть объявление после добавления
* `proxyId?: number` - айди прокси
* `randomProxy?: boolean` - использовать случайный прокси
* `extraData?: object` - данные для добавления аккаунта список полей можно найти в [документации](https://docs.api.zelenka.guru/?market) см. метод `POST /fast-sell` 

### market.bumpItem
Поднимает аккаунт в списка
 * `itemId: number` - айди аккаунта

### market.getCategories
Возвращает список категорий
* `topQueries?: boolean` - если true, вернет популярные запросы категорий

### market.getMe
Возвращает информацию о текущем пользователе

### market.editMe
Редактирует информацию о текущем пользователе
* `disableSteamGuard?: boolean` - выключать Steam Guard при покупке
* `userAllowAskDiscount?: boolean` - разрешать пользователям просить скидку
* `maxDiscountPercent?: number` - максимальный процент скидки
* `allowAcceptAccounts?: boolean` - разрешать принимать аккаунты
* `hideFavorites?: boolean` - скрывать избранные аккаунты

### market.getProxys
Возвращает список прокси

### market.addProxy
Добавляет прокси
* `proxyIP: string` - ip прокси
* `proxyPort: number` - порт прокси
* `proxyLogin: string` - логин прокси
* `proxyPassword: string` - пароль прокси
* `proxyRow?: string` - строка прокси например `ip:port:user:pass` новое прокси с новой строки


### market.deleteProxy
Удаляет прокси
* `proxyId: number` - айди прокси
* `deleteAll?: boolean` - удалить все прокси
