import axios from 'axios'

export const state = () => ({ warehouse: null, addWarehouse: null })

export const mutations = {
  SET_WAREHOUSE (state, warehouse) {
    state.warehouse = warehouse
  },
  ADD_WAREHOUSE (state, addWarehouse) {
    state.addWarehouse = addWarehouse
  },
}

export const actions = {
  async addWarehouse ({ commit }, { data }) {
    const app   = this
    const token = app.$cookies.get(`${process.env.APP_ENV}_token`)
    await axios({
      method : 'post',
      url    : '/api/v1/warehouse',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`,
      },
      data: data,
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true) {
        commit('ADD_WAREHOUSE', response.data)
        setTimeout(() => app.$router.go({ path: '/warehouse' }), 3000)
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
  getAddSuccess: (state) => {
    return state.addWarehouse
  },
}
