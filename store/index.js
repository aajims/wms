import axios from 'axios'
export const state = () => ({ authUser: null })

export const mutations = {
  SET_USER (state, user) {
    state.authUser = user
  },
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }) {//this.$cookies.remove('token')
    const token = this.$cookies.get('token')
    if (token)
      commit('SET_USER', token)
  },
  async login ({ commit }, { username, password }) {
    try {
      /* await axios({
        method: 'post',
        url   : 'https://private-8d7b3b-mospazewms.apiary-mock.com/v1/auth/login',
        data  : {
          username: username,
          password: password,
        },
        headers: { 'content-type': 'application/json' },
      }).then(function (response) {
        if (response.status === 200 && response.data.token !== '') {
          this.$cookies.set('token', response.data.token, {
            path  : '/',
            maxAge: 60 * 60 * 24 * 7,
          })
          commit('SET_USER', response.data.token)
        } else
          throw new Error(response.data.general_response.response_message)
      }) */
      this.$cookies.set('token', 'token', {
        path  : '/',
        maxAge: 60 * 60 * 24 * 7,
      })
    } catch (error) {
      if (error.response && error.response.status === 401)
        throw new Error('Bad credentials')
      throw error
    }
  },

}
