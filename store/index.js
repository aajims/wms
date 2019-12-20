import axios from 'axios'

export const state = () => ({ authToken: null })

export const mutations = {
  SET_TOKEN (state, token) {
    state.authToken = token
  },
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }) {
    const token    = this.$cookies.get(`${process.env.APP_ENV}_token`)
    if (token)
      commit('SET_TOKEN', token)
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
        app.$cookies.set(`${process.env.APP_ENV}_token`, response.data.result.token, {
          path  : '/',
          maxAge: 60 * 60 * 24 * 7,
        })
        const userInfo = btoa(JSON.stringify(response.data.result.user_info))
        app.$cookies.set(`${process.env.APP_ENV}_user`, userInfo, {
          path  : '/',
          maxAge: 60 * 60 * 24 * 7,
        })
        commit('SET_TOKEN', response.data.result.token)
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
    const token = app.$cookies.get(`${process.env.APP_ENV}_token`)
    await axios({
      method : 'post',
      url    : '/api/v1/auth/logout',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': `Bearer + ${token}`,
      },
    }).then(function (response) {
      if (response.status === 200 && response.general_response.response_status === true) {
        app.$cookies.remove(`${process.env.APP_ENV}_token`)
        app.$cookies.remove(`${process.env.APP_ENV}_user`)
        commit('SET_TOKEN', null)
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
