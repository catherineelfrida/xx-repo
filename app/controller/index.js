const transactions = require('./api/v1/transactions')
const customers = require('./api/v1/customers')
const accounts = require('./api/v1/accounts')
const auth = require('./api/v1/auth')
const media = require('./api/v1/media')

module.exports = { 
  transactions, customers, accounts, auth, media
}