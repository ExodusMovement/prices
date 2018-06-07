Historical Cryptocurrency Prices
=====================

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/@exodus/prices.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@exodus/prices
[travis-image]: https://img.shields.io/travis/ExodusMovement/prices.svg?style=flat-square
[travis-url]: https://travis-ci.org/ExodusMovement/prices
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

You can use this JavaScript module to get historical prices for cryptocurrencies / blockchain assets.


Install
-------

    npm i --save @exodus/prices


Usage
-----

### Methods

### `fetchPrice()`

*parameters:*
- `fromSym`: `<string>`: An asset or fiat string symbol.
- `toSym`: `<string>`: An asset or fiat string symbol.
- `date`: `<Date>`: An instance of `Date` representing some date in the past.

*Example:*

```js
global.fetch = require('node-fetch') // not necessary in the browser
const { fetchPrice } = require('@exodus/prices')

const t1 = new Date('2017-01-10 12:25 CST')
const btcPrice = await fetchPrice('BTC', 'USD', t1)
console.log(btcPrice.toFixed(2)) // => 903.30

const ethPrice = await fetchPrice('ETH', 'USD', t1)
console.log(ethPrice.toFixed(2)) // => 10.47
```


### Notes

1. Requires `global.fetch`

this depends on [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) being defined globally.

- If you are using this in Electron, it should work without any configuration assuming it's running in the renderer process.
- If you are using this in Node.js, you will need to use [`node-fetch`](https://www.npmjs.com/package/node-fetch).

2. This depends upon the [cryptocompare](https://github.com/ExodusMovement/cryptocompare) API.

3. Granularity is only limited to daily. Thus, anytime in the day uses a simple linear interpolation between the open and close prices.

4. Occasionally cryptocompare's historical data changes. See https://github.com/ExodusMovement/audit-pricing/commit/2f9cc8cb61eb2e38983c3fee704943d67c6a9ef5 as an example.


Work With Exodus?
-----------------

If cryptocurrencies are interesting to you and you want to help solve some insanely challenging computer science problems, maybe you'd like to work at Exodus? Reach out and apply here: https://www.exodus.io/careers/


License
-------

[MIT](LICENSE.md)
