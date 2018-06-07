const cc = require('cryptocompare')
const get = require('lodash.get')
const set = require('lodash.set')
const { convertPriceArrayToMap, getPriceFromOHLC, startOfDay } = require('./util')

// state for price data
// exported so caching can be controlled
const _priceData = {}

async function fetchPrice (fromSym, toSym, date) {
  if (!get(_priceData, [fromSym, toSym])) {
    set(_priceData, [fromSym, toSym], await fetchCryptoComparePrices(fromSym, toSym))
  }

  const pricingData = _priceData[fromSym][toSym].get(startOfDay(date).valueOf())
  return getPriceFromOHLC(pricingData, date)
}

async function fetchCryptoComparePrices (fromSym, toSym) {
  const ccOptions = { limit: 2000, tryConversion: true }
  const priceArray = await cc.histoDay(fromSym, toSym, ccOptions)
  return convertPriceArrayToMap(priceArray)
}

module.exports = {
  fetchPrice,
  _priceData
}
