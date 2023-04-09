# Документация
Все параметры передаются в обьекте. Пример:
```js
import { LZTApi } from './src/api.js'

const api = new LZTApi({ token: 'b5f0a0cadb79603f07ff8bf53255d3de0a478acf' })
await api.market.search({ categoryName: 'steam', pmin: 250, pmax: 250 })
```

## LZTApi
 * `token: string` - токен апи, получать [тут](https://lolz.guru/account/api)
 * `locale?: string` - ISO 639-1 код языка
 * `fetchParams?: Object` - дополнительные параметры для node-fetch
 * `interval_between_requests?: number` - интервал между запросами в мс, если не указано - 3000 мс

## LZTApi#market
Маркет, в целом повторяет [http api](https://github.com/NztForum/Lolzteam-Public-API/blob/master/docs/market_api.markdown)

### market.search
Поиск аккаунтов по параметрам
 * `categoryName?: string` - название категории, если не указано возвращает последние аккаунты
 * `pmin?: number` - минимальная цена аккаунта (включительно)
 * `pmax?: number` - максмальная цена аккаунта (включительно)
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
 * `pmax?: number` - максмальная сумма операции (включительно)
 * `receiver?: string` - юзернем пользователя, получившего деньги
 * `sender?: string` - юзернем пользователя, отправившего деньги
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
 * `pmax?: number` - максмальная цена аккаунта (включительно)
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
 * `username?: string` - юзернем пользователя
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
 * `closeItem?: number` - если true, обьявление будет закрыто

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
Возвращает все обьявления пользователя
 * `userId?: number` - айди пользователя, если не указано берется айди текущего пользователя
 * `categoryId?: number` - айди категории, смотреть [тут](https://github.com/grisha2217/Lolzteam-Public-API/blob/master/docs/market_api.markdown#category-id-names-list)
 * `pmin?: number` - минимальная цена аккаунта (включительно)
 * `pmax?: number` - максмальная цена аккаунта (включительно)
 * `title?: string` - слово или слова, содержащиеся в названии аккаунта
 * `...categoryParams` - параметры для конкретной категории, смотреть через код элемента (спасибо, ланской)
