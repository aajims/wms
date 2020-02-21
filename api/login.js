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
    if (responseApi.status === 200 && responseApi.data.general_response.response_status === true) {
      const menuAccess                                      = {}
      responseApi.data.result.user_info.privilege.forEach((value) => {
        menuAccess[value.module_code] = value.view
      })
      request.session[`${process.env.APP_ENV}_user`]        = responseApi.data.result.user_info
      request.session[`${process.env.APP_ENV}_menu_access`] = menuAccess
      request.session[`${process.env.APP_ENV}_token`]       = responseApi.data.result.token
    }
    response.send(responseApi.data)
  }).catch(function (error) {
    response.status(error.response.status).send(error.response.data)
  })
})

app.post('/logout', (request, response) => {
  const token = request.session[`${process.env.APP_ENV}_token`]
  axios({
    method : 'post',
    url    : `${process.env.API_URL}/v1/auth/logout`,
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`,
    },
  }).then(function (responseApi) {
    if (responseApi.status === 200 && responseApi.data.general_response.response_status === true)
      request.session.destroy()
    response.send(responseApi.data)
  }).catch(function (error) {
    response.status(error.response.status).send(error.response.data)
  })
})

module.exports = app
