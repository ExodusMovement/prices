const test = require('tape')

if (!global.fetch) global.fetch = require('node-fetch')
const { fetchPrice } = require('../')

test('fetchPrice()', async (t) => {
  const t1 = new Date('2017-01-10 12:25 CST')
  const btcPrice = await fetchPrice('BTC', 'USD', t1)
  t.is(btcPrice, 903.3021875, 'BTC price on Jan 1st, 2017 was ~903.30 USD')

  const ethPrice = await fetchPrice('ETH', 'USD', t1)
  t.is(ethPrice, 10.46857638888889, 'ETH price on Jan 1st, 2017 was ~10.47 USD')

  t.end()
})
