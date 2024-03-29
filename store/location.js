import axios from 'axios'

export const state = () => ({
  addLocation        : null,
  locationDetail     : null,
  editLocation       : null,
  exportLocation     : null,
  importLocation     : null,
  locationByWarehouse: null,
})

export const mutations = {
  SET_LOCATION_DETAIL (state, locationDetail) {
    state.locationDetail = locationDetail
  },
  ADD_LOCATION (state, addLocation) {
    state.addLocation = addLocation
  },
  EDIT_LOCATION (state, editLocation) {
    state.editLocation = editLocation
  },
  EXPORT_LOCATION (state, exportLocation) {
    state.exportLocation = exportLocation
  },
  IMPORT_LOCATION (state, importLocation) {
    state.importLocation = importLocation
  },
  SET_LOCATION_BY_WAREHOUSE (state, locationByWarehouse) {
    state.locationByWarehouse = locationByWarehouse
  },
}

export const actions = {
  async addLocation ({ commit, dispatch }, { data }) {
    await axios({
      method: 'post',
      url   : '/api/location/add',
      data  : data,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('ADD_LOCATION', response.data)
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
  async editLocation ({ commit, dispatch }, { idLocation, data }) {
    const dataPut = { id_location: idLocation, data: data }
    await axios({
      method: 'put',
      url   : '/api/location/edit',
      data  : dataPut,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('EDIT_LOCATION', response.data)
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
  async getLocationDetail ({ commit, dispatch }, { idLocation }) {
    await axios({
      method: 'get',
      url   : '/api/location/detail',
      params: { id_location: idLocation },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_LOCATION_DETAIL', response.data)
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
  async exportLocation ({ commit, dispatch }, { params }) {
    await axios({
      method: 'get',
      url   : '/api/location/export',
      params: params,
    }).then(function (response) {
      commit('EXPORT_LOCATION', response.data)
    }).catch(function (error) {
      if (error.response === undefined)
        throw error
      else if (error.response.status === 403)
        dispatch('removeToken', null, { root: true })
      else
        throw new Error('Network Communication Error')
    })
  },
  async importLocation ({ commit, dispatch }, { data }) {
    const formData = new FormData()
    formData.append('warehouse_id', data.warehouse_id)
    formData.append('file', data.file)
    await axios({
      method : 'post',
      url    : '/api/location/import',
      headers: { 'Content-Type': 'multipart/form-data' },
      data   : formData,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('IMPORT_LOCATION', response.data)
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
  async getLocationByWarehouse ({ commit, dispatch }, { warehouseId, page, perpage }) {
    await axios({
      method: 'get',
      url   : '/api/location-by-warehouse',
      params: {
        warehouse_id: warehouseId,
        page        : page,
        perpage     : perpage,
      },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_LOCATION_BY_WAREHOUSE', response.data)
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
  async setExportLocationNull ({ commit }) {
    commit('EXPORT_LOCATION', null)
  },
}

export const getters = {
  getAddSuccess: (state) => {
    return state.addLocation
  },
  getLocationDetail: (state) => {
    return state.locationDetail
  },
  getEditLocation: (state) => {
    return state.editLocation
  },
  getExportLocation: (state) => {
    return state.exportLocation
  },
  getImportLocation: (state) => {
    return state.importLocation
  },
  getLocationByWarehouse: (state) => {
    return state.locationByWarehouse
  },
}
