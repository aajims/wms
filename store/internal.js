import axios from 'axios'

export const state = () => ({
  addInternal   : null,
  internalDetail: null,
  editInternal  : null,
})

export const mutations = {
  SET_INTERNAL_DETAIL (state, internalDetail) {
    state.internalDetail = internalDetail
  },
  ADD_INTERNAL (state, addInternal) {
    state.addInternal = addInternal
  },
  EDIT_INTERNAL (state, editInternal) {
    state.editInternal = editInternal
  },
}

export const actions = {
  async addInternal ({ commit, dispatch }, { data }) {
    await axios({
      method: 'post',
      url   : '/api/internal/add',
      data  : data,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('ADD_INTERNAL', response.data)
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
  async editInternal ({ commit, dispatch }, { idInternal, data }) {
    const dataPut = { id_internal: idInternal, data: data }
    await axios({
      method: 'put',
      url   : '/api/internal/edit',
      data  : dataPut,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('EDIT_INTERNAL', response.data)
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
  async getInternalDetail ({ commit, dispatch }, { idInternal }) {
    await axios({
      method: 'get',
      url   : '/api/internal/detail',
      params: { id_internal: idInternal },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_INTERNAL_DETAIL', response.data)
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
    return state.addInternal
  },
  getInternalDetail: (state) => {
    return state.internalDetail
  },
  getEditInternal: (state) => {
    return state.editInternal
  },
}
