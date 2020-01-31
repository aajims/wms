import axios from 'axios'

export const state = () => ({
  addPacking   : null,
  packingDetail: null,
  editPacking  : null,
  packing      : null,
})

export const mutations = {
  SET_PACKING_DETAIL (state, packingDetail) {
    state.packingDetail = packingDetail
  },
  ADD_PACKING (state, addPacking) {
    state.addPacking = addPacking
  },
  EDIT_PACKING (state, editPacking) {
    state.editPacking = editPacking
  },
  SET_PACKING (state, packing) {
    state.packing = packing
  },
}

export const actions = {
  async addPacking ({ commit, dispatch }, { data }) {
    await axios({
      method: 'post',
      url   : '/api/packing/add',
      data  : data,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('ADD_PACKING', response.data)
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
  async editPacking ({ commit, dispatch }, { idPacking, data }) {
    const dataPut = { id_packing: idPacking, data: data }
    await axios({
      method: 'put',
      url   : '/api/packing/edit',
      data  : dataPut,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('EDIT_PACKING', response.data)
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
  async getPackingDetail ({ commit, dispatch }, { idPacking }) {
    await axios({
      method: 'get',
      url   : '/api/packing/detail',
      params: { id_packing: idPacking },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_PACKING_DETAIL', response.data)
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
  async getPacking ({ commit }) {
    await axios({
      method: 'get',
      url   : '/api/packing/select',
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true) {
        const packing = [{ id: '', text: '' }]
        for (const pack in response.data.result)
          packing.push({ id: response.data.result[pack].id, text: response.data.result[pack].name })
        commit('SET_PACKING', packing)
      }
    }).catch(function () {
      throw new Error('Network Communication Error')
    })
  },
}

export const getters = {
  getAddSuccess: (state) => {
    return state.addPacking
  },
  getPackingDetail: (state) => {
    return state.packingDetail
  },
  getEditPacking: (state) => {
    return state.editPacking
  },
  getPacking: (state) => {
    return state.packing
  },
}
