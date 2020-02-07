import axios from 'axios'

export const state = () => ({
  user      : null,
  addUser   : null,
  userDetail: null,
  editUser  : null,
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user
  },
  SET_USER_DETAIL (state, userDetail) {
    state.userDetail = userDetail
  },
  ADD_USER (state, addUser) {
    state.addUser = addUser
  },
  EDIT_USER (state, editUser) {
    state.editUser = editUser
  },
}

export const actions = {
  async list ({ commit, dispatch }, { params }) {
    const app   = this
    await axios({
      method : 'get',
      url    : '/api/user/list',
      params: params,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_USER', response.data)
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
  async addUser ({ commit, dispatch }, { data }) {
    const app   = this
    await axios({
      method : 'post',
      url    : '/api/user/add',
      data: data,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true) {
        commit('ADD_USER', response.data)
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
  async editUser ({ commit, dispatch }, { idUser, data }) {
    const app   = this
    const dataPut = { id_user: idUser, data: data }
    await axios({
      method : 'put',
      url    : `/api/user/edit`,
      params: { id_user: idUser },
      data: dataPut,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('EDIT_USER', response.data)
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
  async getUserDetail ({ commit, dispatch }, { idUser }) {
    const app   = this
    await axios({
      method : 'get',
      url    : `/api/user/detail`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params : { id_user: idUser},
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_USER_DETAIL', response.data)
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
    getUser: (state) => {
      return state.user
    },
    getAddSuccess: (state) => {
      return state.addUser
    },
    getUserDetail: (state) => {
      return state.userDetail
    },
    getEditUser: (state) => {
      return state.editUser
    },
  }