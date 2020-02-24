const express      = require('express')
const app          = express()
const cookieParser = require('cookie-parser')
const bodyParser   = require('body-parser')
const axios        = require('axios')
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

const library = require('./library.js')

app.post('/user/list', (request, response) => {
  const params = library.generateDatatableParameter(request.body)
  const token  = request.session[`${process.env.APP_ENV}_token`]
  axios({
    method : 'get',
    url    : `${process.env.API_URL}/v1/user/`,
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

app.post('/user/add', (request, response) => {
  const token = request.session[`${process.env.APP_ENV}_token`]
  axios({
    method : 'post',
    url    : `${process.env.API_URL}/v1/user`,
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

app.get('/user/detail', (request, response) => {
  const token = request.session[`${process.env.APP_ENV}_token`]
  axios({
    method : 'get',
    url    : `${process.env.API_URL}/v1/user/${request.query.id_user}`,
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

app.put('/user/edit', (request, response) => {
  const token = request.session[`${process.env.APP_ENV}_token`]
  axios({
    method : 'put',
    url    : `${process.env.API_URL}/v1/user/${request.body.id_user}`,
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

app.get('/user/select', (request, response) => {
  const token = request.session[`${process.env.APP_ENV}_token`]
  axios({
    method : 'get',
    url    : `${process.env.API_URL}/v1/user`,
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

app.get('/user/profile', (request, response) => {
  const token = request.session[`${process.env.APP_ENV}_token`]
  axios({
    method : 'get',
    url    : `${process.env.API_URL}/v1/profile`,
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

app.put('/user/edit-profile', (request, response) => {
  const token = request.session[`${process.env.APP_ENV}_token`]
  axios({
    method : 'put',
    url    : `${process.env.API_URL}/v1/profile/`,
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

module.exports = app
