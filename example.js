import { LZTApi } from './src/api.js'

const api = new LZTApi({ token: 'b5f0a0cadb79603f07ff8bf53255d3de0a478acf' })

console.log(await api.market.getPayments())
