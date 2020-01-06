import axios from 'axios'

export const state = () => ({
  location      : null,
  addLocation   : null,
  locationDetail: null,
  editLocation  : null,
})

export const mutations = {
  SET_LOCATION (state, location) {
    state.location = location
  },
  SET_LOCATION_DETAIL (state, locationDetail) {
    state.locationDetail = locationDetail
  },
  ADD_LOCATION (state, addLocation) {
    state.addLocation = addLocation
  },
  EDIT_LOCATION (state, editLocation) {
    state.editLocation = editLocation
  },
}

export const actions = {
  async list ({ commit, dispatch }, { params }) {
    const app   = this
    const token = app.$cookies.get(`${process.env.APP_ENV}_token`)
    await axios({
      method : 'get',
      url    : '/api/v1/location',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`,
      },
      params: params,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_LOCATION', response.data)
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
  async addWarehouse ({ commit, dispatch }, { data }) {
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
  async editLocation ({ commit, dispatch }, { idLocation, data }) {
    const app   = this
    const token = app.$cookies.get(`${process.env.APP_ENV}_token`)
    await axios({
      method : 'put',
      url    : `/api/v1/location/${idLocation}`,
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`,
      },
      data: data,
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
  async getWarehouseDetail ({ commit, dispatch }, { idWarehouse }) {
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
  getLocation: (state) => {
    return state.location
  },
  getAddSuccess: (state) => {
    return state.addLocation
  },
  getLocationDetail: (state) => {
    return state.locationDetail
  },
  getEditLocation: (state) => {
    return state.editLocation
  },
}
