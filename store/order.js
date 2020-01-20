import axios from 'axios'

export const state = () => ({
  order      : null,
  addOrder   : null,
  orderDetail: null,
  editOrder  : null,
})

export const mutations = {
  SET_ORDER (state, order) {
    state.order = order
  },
  SET_ORDER_DETAIL (state, orderDetail) {
    state.orderDetail = orderDetail
  },
  ADD_ORDER (state, addOrder) {
    state.addOrder = addOrder
  },
  EDIT_ORDER (state, editOrder) {
    state.editOrder = editOrder
  },
}

export const actions = {
  async list ({ commit, dispatch }, { params }) {
    const app   = this
    await axios({
      method : 'get',
      url    : '/api/order/list',
      params: params,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_ORDER', response.data)
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
  async addOrder ({ commit, dispatch }, { data }) {
    const app   = this
    await axios({
      method : 'post',
      url    : '/api/order/add',
      data: data,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true) {
        commit('ADD_ORDER', response.data)
      } else if (response.data.general_response.response_code === 4003)
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
  async editOrder ({ commit, dispatch }, { idOrder, data }) {
    const app   = this
    const dataPut = { id_order: idOrder, data: data }
    await axios({
      method : 'put',
      url    : `/api/order/edit`,
      params: { id_order: idOrder },
      data: dataPut,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('EDIT_ORDER', response.data)
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
  async getOrderDetail ({ commit, dispatch }, { idOrder }) {
    await axios({
      method : 'get',
      url    : '/api/order/detail',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params : { id_order: idOrder},
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_ORDER_DETAIL', response.data)
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
    getOrder: (state) => {
      return state.order
    },
    getAddSuccess: (state) => {
      return state.addOrder
    },
    getOrderDetail: (state) => {
      return state.orderDetail
    },
    getEditOrder: (state) => {
      return state.editOrder
    },
  }