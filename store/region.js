import axios from 'axios'

export const state = () => ({ country: null })

export const mutations = {
  SET_COUNTRY (state, country) {
    state.country = country
  },
}

export const actions = {
  async getCountry ({ commit }) {
    const app   = this
    const token = app.$cookies.get(`${process.env.APP_ENV}_token`)
    await axios({
      method : 'get',
      url    : '/api/v1/master/country?page=1&per_page=100&status=1&sort_by=id&sort=asc&keyword=',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`,
      },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_COUNTRY', response.data.result)
      else
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
  getCountries: (state) => {
    return state.country
  },
}
