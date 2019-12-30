import axios from 'axios'

export const state = () => ({
  countries            : null,
  regionStatesByCountry: null,
  regionCitiesByState  : null,
  regionDistrictsByCity: null,
})

export const mutations = {
  SET_COUNTRIES (state, countries) {
    state.countries = countries
  },
  SET_STATES_BY_COUNTRY (state, regionStatesByCountry) {
    state.regionStatesByCountry = regionStatesByCountry
  },
  SET_CITIES_BY_STATE (state, regionCitiesByState) {
    state.regionCitiesByState = regionCitiesByState
  },
  SET_DISTRICTS_BY_CITY (state, regionDistrictsByCity) {
    state.regionDistrictsByCity = regionDistrictsByCity
  },
}

export const actions = {
  async getCountries ({ commit }) {
    const app   = this
    const token = app.$cookies.get(`${process.env.APP_ENV}_token`)
    await axios({
      method : 'get',
      url    : `${process.env.API_URL}/v1/master/country`,
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`,
      },
      params: {
        page    : 1,
        per_page: 300,
        status  : 1,
        sort_by : 'name',
        sort    : 'asc',
        keyword : '',
      },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_COUNTRIES', response.data.result)
    }).catch(function () {
      throw new Error('Network Communication Error')
    })
  },
  async getStatesByCountry ({ commit }, { countryId }) {
    const app   = this
    const token = app.$cookies.get(`${process.env.APP_ENV}_token`)
    await axios({
      method : 'get',
      url    : `/api/v1/master/state-by-country`,
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`,
      },
      params: {
        country_id: countryId,
        status    : 1,
        sort_by   : 'name',
        sort      : 'asc',
        keyword   : '',
      },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_STATES_BY_COUNTRY', response.data.result)
      else
        commit('SET_STATES_BY_COUNTRY', [])
    }).catch(function () {
      throw new Error('Network Communication Error')
    })
  },
  async getCitiesByState ({ commit }, { stateId }) {
    const app   = this
    const token = app.$cookies.get(`${process.env.APP_ENV}_token`)
    await axios({
      method : 'get',
      url    : `/api/v1/master/city-by-state`,
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`,
      },
      params: {
        state_id: stateId,
        status  : 1,
        sort_by : 'name',
        sort    : 'asc',
        keyword : '',
      },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_CITIES_BY_STATE', response.data.result)
      else
        commit('SET_CITIES_BY_STATE', [])
    }).catch(function () {
      throw new Error('Network Communication Error')
    })
  },
  async getDistrictsByCity ({ commit }, { cityId }) {
    const app   = this
    const token = app.$cookies.get(`${process.env.APP_ENV}_token`)
    await axios({
      method : 'get',
      url    : `/api/v1/master/district-by-city`,
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`,
      },
      params: {
        city_id: cityId,
        status : 1,
        sort_by: 'name',
        sort   : 'asc',
        keyword: '',
      },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        commit('SET_DISTRICTS_BY_CITY', response.data.result)
      else
        commit('SET_DISTRICTS_BY_CITY', [])
    }).catch(function () {
      throw new Error('Network Communication Error')
    })
  },
}

export const getters = {
  getStatesByCountry: (state) => {
    return state.regionStatesByCountry
  },
  getCitiesByState: (state) => {
    return state.regionCitiesByState
  },
  getDistrictsByCity: (state) => {
    return state.regionDistrictsByCity
  },
}
