import axios from 'axios'

export const state = () => ({ authUser: null })

export const mutations = {
  SET_USER (state, user) {
    state.authUser = user
  },
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }) {
    const token = this.$cookies.get('token')
    if (token)
      commit('SET_USER', token)
  },
  async login ({ commit }, { username, password }) {
    const app = this
    await axios({
      method : 'post',
      url    : '/api/v1/auth/login',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data   : {
        username: username,
        password: password,
      },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true) {
        app.$cookies.set('token', response.data.result.token, {
          path  : '/',
          maxAge: 60 * 60 * 24 * 7,
        })
        commit('SET_USER', response.data.result.token)
        // redirect to dashboard
        app.$router.go({ path: '/dashboard' })
      } else
        throw new Error(response.data.general_response.response_message)
    }).catch(function (error) {
      if (error.response === undefined)
        throw error
      else
        throw new Error('Network Communication Error')
    })
  },
  async logout ({ commit }) {
    const app   = this
    const token = app.$cookies.get('token')
    await axios({
      method : 'post',
      url    : '/api/v1/auth/logout',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': `Bearer + ${token}`,
      },
    }).then(function (response) {
      if (response.status === 200 && response.general_response.response_status === true) {
        app.$cookies.remove('token')
        commit('SET_USER', null)
        // redirect to login
        app.$router.go({ path: '/login' })
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
