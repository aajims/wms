import axios from 'axios'

export const state = () => ({
  addProduct   : null,
  productDetail: null,
  editProduct  : null,
})

export const mutations = {
  SET_PRODUCT_DETAIL (state, productDetail) {
    state.productDetail = productDetail
  },
  ADD_PRODUCT (state, addProduct) {
    state.addProduct = addProduct
  },
  EDIT_PRODUCT (state, editProduct) {
    state.editProduct = editProduct
  },
}

export const actions = {
  async addProduct ({ commit, dispatch }, { data }) {
    await axios({
      method: 'post',
      url   : '/api/product/add',
      data  : data,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('ADD_PRODUCT', response.data)
      else if (response.data.general_response.response_code === 4003)
        dispatch('removeToken', null, { root: true })
      else
        throw new Error(response.data.general_response.response_message)
    }).catch(function (error) {
      if (error.response === undefined)
        throw error
      else if (error.response.status === 403)
        dispatch('removeToken', null, { root: true })
      else
        throw new Error('Network Communication Error')
    })
  },
  async editProduct ({ commit, dispatch }, { idProduct, data }) {
    const dataPut = { id_product: idProduct, data: data }
    await axios({
      method: 'put',
      url   : '/api/product/edit',
      data  : dataPut,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('EDIT_PRODUCT', response.data)
      else if (response.data.general_response.response_code === 4003)
        dispatch('removeToken', null, { root: true })
      else
        throw new Error(response.data.general_response.response_message)
    }).catch(function (error) {
      if (error.response === undefined)
        throw error
      else if (error.response.status === 403)
        dispatch('removeToken', null, { root: true })
      else
        throw new Error('Network Communication Error')
    })
  },
  async getProductDetail ({ commit, dispatch }, { idProduct }) {
    await axios({
      method: 'get',
      url   : '/api/product/detail',
      params: { id_product: idProduct },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_PRODUCT_DETAIL', response.data)
      else if (response.data.general_response.response_code === 4003)
        dispatch('removeToken', null, { root: true })
      else
        throw new Error(response.data.general_response.response_message)
    }).catch(function (error) {
      if (error.response === undefined)
        throw error
      else if (error.response.status === 403)
        dispatch('removeToken', null, { root: true })
      else
        throw new Error('Network Communication Error')
    })
  },
}

export const getters = {
  getAddSuccess: (state) => {
    return state.addProduct
  },
  getProductDetail: (state) => {
    return state.productDetail
  },
  getEditProduct: (state) => {
    return state.editProduct
  },
}
