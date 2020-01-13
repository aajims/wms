const express      = require('express')
const app          = express()
const cookieParser = require('cookie-parser')
const axios        = require('axios')
const bodyParser   = require('body-parser')
app.use(cookieParser())
app.use(bodyParser.json({ extended: true }))

app.post('/login', (request, response) => {
  axios({
    method : 'post',
    url    : `${process.env.API_URL}/v1/auth/login`,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data   : request.body,
  }).then(function (responseApi) {
    response.send(responseApi.data)
  }).catch(function (error) {
    response.status(error.response.status).send(error.response.data)
  })
})

app.post('/logout', (request, response) => {
  const token = request.cookies[`${process.env.APP_ENV}_token`]
  axios({
    method : 'post',
    url    : `${process.env.API_URL}/v1/auth/logout`,
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`,
    },
  }).then(function (responseApi) {
    response.send(responseApi.data)
  }).catch(function (error) {
    response.status(error.response.status).send(error.response.data)
  })
})

module.exports = app
