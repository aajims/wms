import axios from 'axios'

export const state = () => ({
  category      : null,
  addCategory   : null,
  categoryDetail: null,
  editCategory  : null,
})

export const mutations = {
  SET_CATEGORY (state, category) {
    state.category = category
  },
  SET_CATEGORY_DETAIL (state, categoryDetail) {
    state.categoryDetail = categoryDetail
  },
  ADD_CATEGORY (state, addCategory) {
    state.addCategory = addCategory
  },
  EDIT_CATEGORY (state, editCategory) {
    state.editCategory = editCategory
  },
}

export const actions = {
  async list ({ commit, dispatch }, { params }) {
    const app   = this
    const token = app.$cookies.get(`${process.env.APP_ENV}_token`)
    await axios({
      method : 'get',
      url    : '/api/v1/product-category',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`,
      },
      params: params,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_CATEGORY', response.data)
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
  async addCategory ({ commit, dispatch }, { data }) {
    const app   = this
    await axios({
      method : 'post',
      url    : '/api/category/add',
      data: data,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true) {
        commit('ADD_CATEGORY', response.data)
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
  async editCategory ({ commit, dispatch }, { idCategory, data }) {
    const app   = this
    const dataPut = { id_category: idCategory, data: data }
    await axios({
      method : 'put',
      url    : `/api/category/edit`,
      params: { id_category: idCategory },
      data: dataPut,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('EDIT_CATEGORY', response.data)
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
  async getCategoryDetail ({ commit, dispatch }, { idCategory }) {
    await axios({
      method : 'get',
      url    : '/api/category/detail',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params : { id_category: idCategory},
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_CATEGORY_DETAIL', response.data)
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
    getCategory: (state) => {
      return state.category
    },
    getAddSuccess: (state) => {
      return state.addCategory
    },
    getCategoryDetail: (state) => {
      return state.categoryDetail
    },
    getEditCategory: (state) => {
      return state.editCategory
    },
  }