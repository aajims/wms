import axios from 'axios'

export const state = () => ({
  outgoing      : null,
  addOutgoing   : null,
  outgoingDetail: null,
  editOutgoing  : null,
})

export const mutations = {
  SET_OUTGOING (state, outgoing) {
    state.outgoing = outgoing
  },
  SET_OUTGOING_DETAIL (state, outgoingDetail) {
    state.outgoingDetail = outgoingDetail
  },
  ADD_OUTGOING (state, addOutgoing) {
    state.addOutgoing = addOutgoing
  },
  EDIT_OUTGOING (state, editOutgoing) {
    state.editOutgoing = editOutgoing
  },
}

export const actions = {
  async addOutgoing ({ commit, dispatch }, { data }) {
    const app   = this
    await axios({
      method: 'post',
      url   : '/api/outgoing/add',
      data  : data,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true) {
        commit('ADD_OUTGOING', response.data)
        setTimeout(() => app.$router.go({ path: '/outgoing' }), 3000)
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
  async editOutgoing ({ commit, dispatch }, { idOutgoing, data }) {
    const dataPut = { id_outgoing: idOutgoing, data: data }
    await axios({
      method: 'put',
      url   : `/api/outgoing/edit`,
      data  : dataPut,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('EDIT_OUTGOING', response.data)
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
  async getOutgoingDetail ({ commit, dispatch }, { idOutgoing }) {
    await axios({
      method : 'get',
      url    : `/api/outgoing/detail`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params : { id_outgoing: idOutgoing },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_OUTGOING_DETAIL', response.data)
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
  getOutgoing: (state) => {
    return state.outgoing
  },
  getAddSuccess: (state) => {
    return state.addOutgoing
  },
  getOutgoingDetail: (state) => {
    return state.outgoingDetail
  },
  getEditOutgoing: (state) => {
    return state.editOutgoing
  },
}
