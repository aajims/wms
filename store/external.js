import axios from 'axios'

export const state = () => ({
  addExternal   : null,
  externalDetail: null,
  editExternal  : null,
})

export const mutations = {
  SET_EXTERNAL_DETAIL (state, externalDetail) {
    state.externalDetail = externalDetail
  },
  ADD_EXTERNAL (state, addExternal) {
    state.addExternal = addExternal
  },
  EDIT_EXTERNAL (state, editExternal) {
    state.editExternal = editExternal
  },
}

export const actions = {
  async addExternal ({ commit, dispatch }, { data }) {
    await axios({
      method: 'post',
      url   : '/api/external/add',
      data  : data,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('ADD_EXTERNAL', response.data)
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
  async editExternal ({ commit, dispatch }, { idExternal, data }) {
    const dataPut = { id_external: idExternal, data: data }
    await axios({
      method: 'put',
      url   : '/api/external/edit',
      data  : dataPut,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('EDIT_EXTERNAL', response.data)
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
  async getExternalDetail ({ commit, dispatch }, { idExternal }) {
    await axios({
      method: 'get',
      url   : '/api/external/detail',
      params: { id_external: idExternal },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_EXTERNAL_DETAIL', response.data)
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
    return state.addExternal
  },
  getExternalDetail: (state) => {
    return state.externalDetail
  },
  getEditExternal: (state) => {
    return state.editExternal
  },
}
