import axios from 'axios'

export const state = () => ({
  company      : null,
  addCompany   : null,
  companyDetail: null,
  editCompany  : null,
})

export const mutations = {
  SET_COMPANY (state, company) {
    state.company = company
  },
  SET_COMPANY_DETAIL (state, companyDetail) {
    state.companyDetail = companyDetail
  },
  ADD_COMPANY (state, addCompany) {
    state.addCompany = addCompany
  },
  EDIT_COMPANY (state, editCompany) {
    state.editCompany = editCompany
  },
}

export const actions = {
  async list ({ commit, dispatch }, { params }) {
    const app   = this
    await axios({
      method : 'get',
      url    : '/api/company/list',
      params: params,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_COMPANY', response.data)
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
  async addCompany ({ commit, dispatch }, { data }) {
    const app   = this
    await axios({
      method : 'post',
      url    : '/api/company/add',
      data: data,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true) {
        commit('ADD_COMPANY', response.data)
        setTimeout(() => app.$router.go({ path: '/company' }), 3000)
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
  async editCompany ({ commit, dispatch }, { idCompany, data }) {
    const app   = this
    const dataPut = { id_company: idCompany, data: data }
    await axios({
      method : 'put',
      url    : `/api/company/edit`,
      params: { id_company: idCompany },
      data: dataPut,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('EDIT_COMPANY', response.data)
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
  async getCompanyDetail ({ commit, dispatch }, { idCompany}) {
    const app   = this
    await axios({
      method : 'get',
      url    : `/api/company/detail`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params : { id_company: idCompany },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_COMPANY_DETAIL', response.data)
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
  getCompany: (state) => {
    return state.company
  },
  getAddSuccess: (state) => {
    return state.addCompany
  },
  getCompanyDetail: (state) => {
    return state.companyDetail
  },
  getEditCompany: (state) => {
    return state.editCompany
  },
}
