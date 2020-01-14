import axios from 'axios'

export const state = () => ({
  addWarehouse   : null,
  warehouseDetail: null,
  editWarehouse  : null,
})

export const mutations = {
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
  async addWarehouse ({ commit, dispatch }, { data }) {
    await axios({
      method: 'post',
      url   : '/api/warehouse/add',
      data  : data,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('ADD_WAREHOUSE', response.data)
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
  async editWarehouse ({ commit, dispatch }, { idWarehouse, data }) {
    const dataPut = { id_warehouse: idWarehouse, data: data }
    await axios({
      method: 'put',
      url   : '/api/warehouse/edit',
      data  : dataPut,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('EDIT_WAREHOUSE', response.data)
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
  async getWarehouseDetail ({ commit, dispatch }, { idWarehouse }) {
    await axios({
      method: 'get',
      url   : '/api/warehouse/detail',
      params: { id_warehouse: idWarehouse },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_WAREHOUSE_DETAIL', response.data)
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
    return state.addWarehouse
  },
  getWarehouseDetail: (state) => {
    return state.warehouseDetail
  },
  getEditWarehouse: (state) => {
    return state.editWarehouse
  },
}
