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
const product   = require('./product')
const incoming  = require('./incoming')
const external  = require('./external')

// Import API Routes
app.use(login)
app.use(warehouse)
app.use(company)
app.use(location)
app.use(category)
app.use(region)
app.use(packing)
app.use(product)
app.use(incoming)
app.use(external)

// Export the server middleware
module.exports = {
  path   : '/api',
  handler: app,
}
