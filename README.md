# [Lolzteam](https://lolz.guru/) API for node.js

## Example usage

```js
import { LZTApi } from 'lzt'

const api = new LZTApi({ token: <your api token> })

const me = await api.users.getUser()
const myPayments = await api.market.getPayments()

console.log(me, myPayments)
```
