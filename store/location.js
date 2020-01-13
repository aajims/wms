import axios from 'axios'

export const state = () => ({
  addLocation   : null,
  locationDetail: null,
  editLocation  : null,
  exportLocation: null,
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
      params: { id_location: idLocation },
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
      method : 'get',
      url    : '/api/location/detail',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params : { id_location: idLocation },
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
}
