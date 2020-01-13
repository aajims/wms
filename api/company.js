const express      = require('express')
const app          = express()
const cookieParser = require('cookie-parser')
const axios        = require('axios')
app.use(cookieParser())

app.get('/company/select', (request, response) => {
  const token = request.cookies[`${process.env.APP_ENV}_token`]
  axios({
    method : 'get',
    url    : `${process.env.API_URL}/v1/company`,
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`,
    },
    params: {
      'page'          : 1,
      'per_page'      : 100,
      'sort_by'       : 'name',
      'sort'          : 'asc',
      'search_by'     : 'name',
      'keyword'       : request.query.term,
      'filter[status]': 1,
    },
  }).then(function (responseApi) {
    response.send(responseApi.data)
  }).catch(function (error) {
    response.status(error.response.status).send(error.response.data)
  })
})

module.exports = app
