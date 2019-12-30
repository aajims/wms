const atob = require('atob')

export const state = () => ({ userProfile: null })

export const mutations = {
  SET_USER_PROFILE (state, userProfile) {
    state.userProfile = userProfile
  },
}

export const actions = {
  async userProfile ({ commit }) {
    let userProfile = this.$cookies.get(`${process.env.APP_ENV}_user`)
    userProfile     = JSON.parse(atob(userProfile))
    commit('SET_USER_PROFILE', userProfile)
  },
}
