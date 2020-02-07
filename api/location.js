const express      = require('express')
const app          = express()
const cookieParser = require('cookie-parser')
const bodyParser   = require('body-parser')
const axios        = require('axios')
const fileUpload   = require('express-fileupload')
const FormData     = require('form-data')
const fileStream   = require('fs')
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir : '/tmp/',
}))

const library = require('./library.js')

app.get('/location/select', (request, response) => {
  const token = request.cookies[`${process.env.APP_ENV}_token`]
  axios({
    method : 'get',
    url    : `${process.env.API_URL}/v1/location`,
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`,
    },
    params: {
      'page'                : 1,
      'per_page'            : 100,
      'sort_by'             : 'name',
      'sort'                : 'asc',
      'search_by'           : 'name',
      'keyword'             : request.query.term,
      'filter[status]'      : 1,
      'filter[warehouse_id]': request.query.id_warehouse,
    },
  }).then(function (responseApi) {
    response.send(responseApi.data)
  }).catch(function (error) {
    response.status(error.response.status).send(error.response.data)
  })
})

app.post('/location/list', (request, response) => {
  const params = library.generateDatatableParameter(request.body)
  const token  = request.cookies[`${process.env.APP_ENV}_token`]
  axios({
    method : 'get',
    url    : `${process.env.API_URL}/v1/location/`,
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

app.post('/location/add', (request, response) => {
  const token = request.cookies[`${process.env.APP_ENV}_token`]
  axios({
    method : 'post',
    url    : `${process.env.API_URL}/v1/location`,
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

app.get('/location/detail', (request, response) => {
  const token = request.cookies[`${process.env.APP_ENV}_token`]
  axios({
    method : 'get',
    url    : `${process.env.API_URL}/v1/location/${request.query.id_location}`,
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

app.put('/location/edit', (request, response) => {
  const token = request.cookies[`${process.env.APP_ENV}_token`]
  axios({
    method : 'put',
    url    : `${process.env.API_URL}/v1/location/${request.body.id_location}`,
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

app.get('/location/export', (request, response) => {
  const params = library.generateParameter(request.query)
  const token  = request.cookies[`${process.env.APP_ENV}_token`]
  axios({
    method : 'get',
    url    : `${process.env.API_URL}/v1/location/data/export`,
    headers: {
      'Accept'       : 'application/octet-stream',
      'Content-Type' : 'application/octet-stream',
      'Authorization': `Bearer ${token}`,
    },
    params: params,
  }).then(function (responseApi) {
    response.send(responseApi.data)
  }).catch(function (error) {
    response.status(error.response.status).send(error.response.data)
  })
})

app.post('/location/import', (request, response) => {
  const formData = new FormData()
  const stream   = fileStream.createReadStream(request.files.file.tempFilePath)
  formData.append('warehouse_id', request.body.warehouse_id)
  formData.append('file', stream)
  const token    = request.cookies[`${process.env.APP_ENV}_token`]
  const headers  = Object.assign({}, formData.getHeaders(), { Authorization: `Bearer ${token}` })
  axios({
    method : 'post',
    url    : `${process.env.API_URL}/v1/location/import`,
    headers: headers,
    data   : formData,
  }).then(function (responseApi) {
    response.send(responseApi.data)
  }).catch(function (error) {
    if (error.response !== undefined)
      response.status(error.response.status).send(error.response.data)
    else
      response.status(500).send('Error')
  })
})

app.get('/location/select', (request, response) => {
  const token = request.cookies[`${process.env.APP_ENV}_token`]
  axios({
    method : 'get',
    url    : `${process.env.API_URL}/v1/location`,
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`,
    },
    params: {
      'page'                : 1,
      'per_page'            : 100,
      'sort_by'             : 'name',
      'sort'                : 'asc',
      'search_by'           : 'name',
      'keyword'             : request.query.term,
      'filter[status]'      : 1,
      'filter[warehouse_id]': request.query.id_warehouse,
    },
  }).then(function (responseApi) {
    response.send(responseApi.data)
  }).catch(function (error) {
    response.status(error.response.status).send(error.response.data)
  })
})

app.get('/location/select-by-product', (request, response) => {
  const token = request.cookies[`${process.env.APP_ENV}_token`]
  axios({
    method : 'get',
    url    : `${process.env.API_URL}/v1/location-product/${request.query.product_id}/${request.query.product_packing_id}`,
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`,
    },
    params: {
      'page'                : 1,
      'per_page'            : 100,
      'sort_by'             : 'name',
      'sort'                : 'asc',
      'search_by'           : 'name',
      'keyword'             : request.query.term,
      'filter[status]'      : 1,
      'filter[warehouse_id]': request.query.id_warehouse,
    },
  }).then(function (responseApi) {
    response.send(responseApi.data)
  }).catch(function (error) {
    response.status(error.response.status).send(error.response.data)
  })
})

module.exports = app
