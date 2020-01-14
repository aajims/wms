const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const login     = require('./login')
const warehouse = require('./warehouse')
const company   = require('./company')
const location  = require('./location')
const category  = require('./category')

// Import API Routes
app.use(login)
app.use(warehouse)
app.use(company)
app.use(location)
app.use(category)

// Export the server middleware
module.exports = {
  path   : '/api',
  handler: app,
}
