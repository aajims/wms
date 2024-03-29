const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const login     = require('./login')
const warehouse = require('./warehouse')
const company   = require('./company')
const location  = require('./location')
const category  = require('./category')
const region    = require('./region')
const packing   = require('./packing')
const outgoing  = require('./outgoing')
const product   = require('./product')
const order     = require('./order')
const incoming  = require('./incoming')
const external  = require('./external')
const user      = require('./user')
const damage      = require('./damage')
const balance      = require('./balance')
const internal  = require('./internal')

// Import API Routes
app.use(login)
app.use(warehouse)
app.use(company)
app.use(location)
app.use(category)
app.use(region)
app.use(packing)
app.use(order)
app.use(outgoing)
app.use(product)
app.use(incoming)
app.use(external)
app.use(user)
app.use(damage)
app.use(balance)
app.use(internal)

// Export the server middleware
module.exports = {
  path   : '/api',
  handler: app,
}
