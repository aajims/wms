import axios from 'axios'

export const state = () => ({
  addDamage   : null,
  damageDetail: null,
  editDamage  : null,
})

export const mutations = {
  SET_DAMAGE_DETAIL (state, damageDetail) {
    state.damageDetail = damageDetail
  },
  ADD_DAMAGE (state, addDamage) {
    state.addDamage = addDamage
  },
  EDIT_DAMAGE (state, editDamage) {
    state.editDamage = editDamage
  },
}

export const actions = {
  async addDamage ({ commit, dispatch }, { data }) {
    await axios({
      method: 'post',
      url   : '/api/damage/add',
      data  : data,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('ADD_DAMAGE', response.data)
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
  async editDamage ({ commit, dispatch }, { idDamage, data }) {
    const dataPut = { id_damage: idDamage, data: data }
    await axios({
      method: 'put',
      url   : '/api/damage/edit',
      data  : dataPut,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('EDIT_DAMAGE', response.data)
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
  async getDamageDetail ({ commit, dispatch }, { idDamage }) {
    await axios({
      method: 'get',
      url   : '/api/damage/detail',
      params: { id_damage: idDamage },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_DAMAGE_DETAIL', response.data)
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
    return state.addDamage
  },
  getDamageDetail: (state) => {
    return state.damageDetail
  },
  getEditDamage: (state) => {
    return state.editDamage
  },
}
