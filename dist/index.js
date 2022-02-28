
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./vela1-sdk.cjs.production.min.js')
} else {
  module.exports = require('./vela1-sdk.cjs.development.js')
}
