import axios from 'axios'

export const state = () => ({
  warehouse      : null,
  addWarehouse   : null,
  warehouseDetail: null,
  editWarehouse  : null,
})

export const mutations = {
  SET_WAREHOUSE (state, warehouse) {
    state.warehouse = warehouse
  },
  SET_WAREHOUSE_DETAIL (state, warehouseDetail) {
    state.warehouseDetail = warehouseDetail
  },
  ADD_WAREHOUSE (state, addWarehouse) {
    state.addWarehouse = addWarehouse
  },
  EDIT_WAREHOUSE (state, editWarehouse) {
    state.editWarehouse = editWarehouse
  },
}

export const actions = {
  async addWarehouse ({ commit }, { data }) {
    const app   = this
    const token = app.$cookies.get(`${process.env.APP_ENV}_token`)
    await axios({
      method : 'post',
      url    : '/api/v1/warehouse',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`,
      },
      data: data,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true) {
        commit('ADD_WAREHOUSE', response.data)
        setTimeout(() => app.$router.go({ path: '/warehouse' }), 3000)
      } else
        throw new Error(response.data.general_response.response_message)
    }).catch(function (error) {
      if (error.response === undefined)
        throw error
      else
        throw new Error('Network Communication Error')
    })
  },
  async editWarehouse ({ commit }, { idWarehouse, data }) {
    const app   = this
    const token = app.$cookies.get(`${process.env.APP_ENV}_token`)
    await axios({
      method : 'put',
      url    : `/api/v1/warehouse/${idWarehouse}`,
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`,
      },
      data: data,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('EDIT_WAREHOUSE', response.data)
      else
        throw new Error(response.data.general_response.response_message)
    }).catch(function (error) {
      if (error.response === undefined)
        throw error
      else
        throw new Error('Network Communication Error')
    })
  },
  async getWarehouseDetail ({ commit }, { idWarehouse }) {
    const app   = this
    const token = app.$cookies.get(`${process.env.APP_ENV}_token`)
    await axios({
      method : 'get',
      url    : `${process.env.API_URL}/v1/warehouse/${idWarehouse}`,
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`,
      },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_WAREHOUSE_DETAIL', response.data)
      else
        throw new Error(response.data.general_response.response_message)
    }).catch(function (error) {
      if (error.response === undefined)
        throw error
      else
        throw new Error('Network Communication Error')
    })
  },
}

export const getters = {
  getAddSuccess: (state) => {
    return state.addWarehouse
  },
  getWarehouseDetail: (state) => {
    return state.warehouseDetail
  },
  getEditWarehouse: (state) => {
    return state.editWarehouse
  },
}
