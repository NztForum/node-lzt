# [Lolzteam Market](https://lzt.market/) & [Forum](https://lolz.live/) API for Node.js

## ⚠️ Attention! This project uses ES modules.
### Please make sure you have `"type": "module"` in your package.json

## [Документация](https://github.com/NztForum/node-lzt/blob/master/docs-ru.md)

## Installation
`npm i @lolzteam/sdk`
or, if you prefer yarn
`yarn add @lolzteam/sdk`

## Example usage

```js
import { LZTApi } from '@lolzteam/sdk'

const api = new LZTApi({ token: 'your api token' })

const me = await api.users.getUser()
const myPayments = await api.market.getPayments()

console.log(me, myPayments)
```
