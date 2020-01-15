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
//   async editWarehouse ({ commit, dispatch }, { idWarehouse, data }) {
//     const app   = this
//     const token = app.$cookies.get(`${process.env.APP_ENV}_token`)
//     await axios({
//       method : 'put',
//       url    : `/api/v1/warehouse/${idWarehouse}`,
//       headers: {
//         'Content-Type' : 'application/x-www-form-urlencoded',
//         'Authorization': `Bearer ${token}`,
//       },
//       data: data,
//     }).then(function (response) {
//       if (response.status === 200 && response.data.general_response.response_status === true)
//         commit('EDIT_WAREHOUSE', response.data)
//       else if (response.data.general_response.response_code === 4003)
//         dispatch('removeToken', null, { root: true })
//       else
//         throw new Error(response.data.general_response.response_message)
//     }).catch(function (error) {
//       if (error.response === undefined)
//         throw error
//       else if (error.response.status === 403)
//         dispatch('removeToken', null, { root: true })
//       else
//         throw new Error('Network Communication Error')
//     })
//   },
  async getCompanyDetail ({ commit, dispatch }, { idCompany}) {
    const app   = this
    await axios({
      method : 'get',
      url    : `/api/company/detail`,
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
