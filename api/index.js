const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const warehouse = require('./warehouse')
const company   = require('./company')
const location  = require('./location')

// Import API Routes
app.use(warehouse)
app.use(company)
app.use(location)

// Export the server middleware
module.exports = {
  path   : '/api',
  handler: app,
}
