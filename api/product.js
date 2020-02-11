const express      = require('express')
const app          = express()
const cookieParser = require('cookie-parser')
const bodyParser   = require('body-parser')
const axios        = require('axios')
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

const library = require('./library.js')

app.get('/product/select', (request, response) => {
  const token = request.cookies[`${process.env.APP_ENV}_token`]
  axios({
    method : 'get',
    url    : `${process.env.API_URL}/v1/product`,
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`,
    },
    params: {
      'page'              : 1,
      'per_page'          : 100,
      'sort_by'           : 'name',
      'sort'              : 'asc',
      'search_by'         : 'name',
      'keyword'           : request.query.term,
      'filter[status]'    : 1,
      'filter[company_id]': request.query.id_company,
    },
  }).then(function (responseApi) {
    response.send(responseApi.data)
  }).catch(function (error) {
    response.status(error.response.status).send(error.response.data)
  })
})
app.post('/product/list', (request, response) => {
  const params = library.generateDatatableParameter(request.body)
  const token  = request.cookies[`${process.env.APP_ENV}_token`]
  axios({
    method : 'get',
    url    : `${process.env.API_URL}/v1/product/`,
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

app.post('/product/add', (request, response) => {
  const token    = request.cookies[`${process.env.APP_ENV}_token`]
  axios({
    method : 'post',
    url    : `${process.env.API_URL}/v1/product/`,
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

app.put('/product/edit', (request, response) => {
  const token = request.cookies[`${process.env.APP_ENV}_token`]
  axios({
    method : 'put',
    url    : `${process.env.API_URL}/v1/product/${request.body.id_product}`,
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

app.get('/product/detail', (request, response) => {
  const token = request.cookies[`${process.env.APP_ENV}_token`]
  axios({
    method : 'get',
    url    : `${process.env.API_URL}/v1/product/${request.query.id_product}`,
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

app.get('/product/select', (request, response) => {
  const token = request.cookies[`${process.env.APP_ENV}_token`]
  axios({
    method : 'get',
    url    : `${process.env.API_URL}/v1/product`,
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`,
    },
    params: {
      'page'              : 1,
      'per_page'          : 100,
      'sort_by'           : 'name',
      'sort'              : 'asc',
      'search_by'         : 'name',
      'keyword'           : request.query.term,
      'filter[status]'    : 1,
      'filter[company_id]': request.query.id_company,
    },
  }).then(function (responseApi) {
    response.send(responseApi.data)
  }).catch(function (error) {
    response.status(error.response.status).send(error.response.data)
  })
})

app.get('/product/select-by-inventory', (request, response) => {
  const token = request.cookies[`${process.env.APP_ENV}_token`]
  axios({
    method : 'get',
    url    : `${process.env.API_URL}/v1/product-inventory`,
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`,
    },
    params: {
      'page'                         : 1,
      'per_page'                     : 100,
      'sort_by'                      : 'id',
      'sort'                         : 'asc',
      'search_by'                    : 'unique_code',
      'keyword'                      : request.query.term,
      'filter[status]'               : 1,
      'filter[product_id]'           : request.query.product_id,
      'filter[product_packing_id]'   : request.query.product_packing_id,
      'filter[warehouse_location_id]': request.query.warehouse_location_id,
    },
  }).then(function (responseApi) {
    response.send(responseApi.data)
  }).catch(function (error) {
    response.status(error.response.status).send(error.response.data)
  })
})

app.get('/product/unique-code', (request, response) => {
  const token = request.cookies[`${process.env.APP_ENV}_token`]
  axios({
    method : 'get',
    url    : `${process.env.API_URL}/v1/product-inventory`,
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`,
    },
    params: {
      'page'                         : 1,
      'per_page'                     : 2000,
      'sort_by'                      : 'id',
      'sort'                         : 'asc',
      'search_by'                    : 'unique_code',
      'keyword'                      : request.query.term,
      'filter[status]'               : 1,
      'filter[product_id]'           : request.query.product_id,
      'filter[product_packing_id]'   : request.query.product_packing_id,
      'filter[warehouse_location_id]': request.query.warehouse_location_id,
    },
  }).then(function (responseApi) {
    response.send(responseApi.data)
  }).catch(function (error) {
    response.status(error.response.status).send(error.response.data)
  })
})

module.exports = app
