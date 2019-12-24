import axios from 'axios'

export const state = () => ({ warehouse: null })

export const mutations = {
  SET_WAREHOUSE (state, warehouse) {
    state.warehouse = warehouse
  },
}

export const actions = {
  async list ({ commit }) {
    const app   = this
    const token = app.$cookies.get(`${process.env.APP_ENV}_token`)
    await axios({
      method : 'get',
      url    : '/api/v1/warehouse?page=1&per_page=1&status=1&sort_by=id&sort=asc&keyword=',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`,
      },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true) {
        commit('SET_WAREHOUSE', response.data)
        console.log(response.data.result)
      } else
        throw new Error(response.data.general_response.response_message)
    }).catch(function (error) {
      if (error.response === undefined)
        throw error
      else
        throw new Error('Network Communication Error')
    })
  },
}

export const getters = {
  getWarehouse: (state) => {
    return state.warehouse.result
  },
}
