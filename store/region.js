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
    await axios({
      method: 'get',
      url   : '/api/country/select',
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true) {
        const countries = [{ id: '', text: '' }]
        for (const country in response.data.result)
          countries.push({ id: response.data.result[country].id, text: response.data.result[country].name })
        commit('SET_COUNTRIES', countries)
      }
    }).catch(function () {
      throw new Error('Network Communication Error')
    })
  },
  async getStatesByCountry ({ commit }, { countryId }) {
    await axios({
      method: 'get',
      url   : `/api/state-by-country/select`,
      params: { country_id: countryId },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true) {
        const states = [{ id: '', text: '' }]
        for (const state in response.data.result)
          states.push({ id: response.data.result[state].id, text: response.data.result[state].name })
        commit('SET_STATES_BY_COUNTRY', states)
      } else
        commit('SET_STATES_BY_COUNTRY', [])
    }).catch(function () {
      throw new Error('Network Communication Error')
    })
  },
  async getCitiesByState ({ commit }, { stateId }) {
    await axios({
      method: 'get',
      url   : '/api/city-by-state/select',
      params: { state_id: stateId },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true) {
        const cities = [{ id: '', text: '' }]
        for (const city in response.data.result)
          cities.push({ id: response.data.result[city].id, text: response.data.result[city].name })
        commit('SET_CITIES_BY_STATE', cities)
      } else
        commit('SET_CITIES_BY_STATE', [])
    }).catch(function () {
      throw new Error('Network Communication Error')
    })
  },
  async getDistrictsByCity ({ commit }, { cityId }) {
    await axios({
      method: 'get',
      url   : '/api/district-by-city/select',
      params: { city_id: cityId },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true) {
        const districts = [{ id: '', text: '' }]
        for (const district in response.data.result)
          districts.push({ id: response.data.result[district].id, text: response.data.result[district].name })
        commit('SET_DISTRICTS_BY_CITY', districts)
      } else
        commit('SET_DISTRICTS_BY_CITY', [])
    }).catch(function () {
      throw new Error('Network Communication Error')
    })
  },
}

export const getters = {
  getCountries: (state) => {
    return state.countries
  },
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
