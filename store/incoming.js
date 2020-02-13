import axios from 'axios'

export const state = () => ({
  addIncoming   : null,
  incomingDetail: null,
  editIncoming  : null,
})

export const mutations = {
  SET_INCOMING_DETAIL (state, incomingDetail) {
    state.incomingDetail = incomingDetail
  },
  ADD_INCOMING (state, addIncoming) {
    state.addIncoming = addIncoming
  },
  EDIT_INCOMING (state, editIncoming) {
    state.editIncoming = editIncoming
  },
}

export const actions = {
  async addIncoming ({ commit, dispatch }, { data }) {
    await axios({
      method: 'post',
      url   : '/api/incoming/add',
      data  : data,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('ADD_INCOMING', response.data)
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
  async editIncoming ({ commit, dispatch }, { idIncoming, data }) {
    const dataPut = { id_incoming: idIncoming, data: data }
    await axios({
      method: 'put',
      url   : '/api/incoming/edit',
      data  : dataPut,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('EDIT_INCOMING', response.data)
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
  async getIncomingDetail ({ commit, dispatch }, { idIncoming }) {
    await axios({
      method: 'get',
      url   : '/api/incoming/detail',
      params: { id_incoming: idIncoming },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_INCOMING_DETAIL', response.data)
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
    return state.addIncoming
  },
  getIncomingDetail: (state) => {
    return state.incomingDetail
  },
  getEditIncoming: (state) => {
    return state.editIncoming
  },
}
