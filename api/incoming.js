const express      = require('express')
const app          = express()
const cookieParser = require('cookie-parser')
const bodyParser   = require('body-parser')
const axios        = require('axios')
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

const library = require('./library.js')

app.post('/incoming/list', (request, response) => {
  const params = library.generateDatatableParameter(request.body)
  const token  = request.session[`${process.env.APP_ENV}_token`]
  axios({
    method : 'get',
    url    : `${process.env.API_URL}/v1/job-incoming/`,
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`,
    },
    params: params,
  }).then(function (responseApi) {
    // formating data for metronic datatable
    const data = library.generateDatatableResult(responseApi)
    response.send(data)
  }).catch(function (error) {
    response.status(error.response.status).send(error.response.data)
  })
})

app.post('/incoming/add', (request, response) => {
  const token = request.session[`${process.env.APP_ENV}_token`]
  axios({
    method : 'post',
    url    : `${process.env.API_URL}/v1/job-incoming`,
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`,
    },
    data: request.body,
  }).then(function (responseApi) {
    response.send(responseApi.data)
  }).catch(function (error) {
    response.status(error.response.status).send(error.response.data)
  })
})

app.put('/incoming/edit', (request, response) => {
  const token = request.session[`${process.env.APP_ENV}_token`]
  axios({
    method : 'put',
    url    : `${process.env.API_URL}/v1/job-incoming/${request.body.id_incoming}`,
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`,
    },
    data: request.body.data,
  }).then(function (responseApi) {
    response.send(responseApi.data)
  }).catch(function (error) {
    response.status(error.response.status).send(error.response.data)
  })
})

app.get('/incoming/detail', (request, response) => {
  const token = request.session[`${process.env.APP_ENV}_token`]
  axios({
    method : 'get',
    url    : `${process.env.API_URL}/v1/job-incoming/${request.query.id_incoming}`,
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
