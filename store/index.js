import axios from 'axios'

export const state = () => ({
  authToken  : null,
  userProfile: null,
  menuAccess : null,
  accessPage : null,
})

export const mutations = {
  SET_TOKEN (state, token) {
    state.authToken = token
  },
  SET_USER_PROFILE (state, userProfile) {
    state.userProfile = userProfile
  },
  SET_MENU_ACCESS (state, menuAccess) {
    state.menuAccess = menuAccess
  },
  SET_ACCESS_PAGE (state, accessPage) {
    state.accessPage = accessPage
  },
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  // eslint-disable-next-line unicorn/prevent-abbreviations
  nuxtServerInit ({ commit }, { req }) {
    const userProfile = req.session[`${process.env.APP_ENV}_user`]
    if (userProfile)
      commit('SET_USER_PROFILE', userProfile)

    // set user privilege
    const menuAccess = req.session[`${process.env.APP_ENV}_menu_access`]
    if (menuAccess) {
      menuAccess['PCK'] = 1
      commit('SET_MENU_ACCESS', menuAccess)
    }

    const token = req.session[`${process.env.APP_ENV}_token`]
    if (token)
      commit('SET_TOKEN', token)
  },
  async login ({ commit }, { username, password }) {
    const app = this
    await axios({
      method: 'post',
      url   : '/api/login',
      data  : {
        username: username,
        password: password,
      },
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        app.$router.go({ path: '/dashboard' })
      else
        throw new Error(response.data.general_response.response_message)
    }).catch(function (error) {
      if (error.response === undefined)
        throw error
      else
        throw new Error('Network Communication Error')
    })
  },
  async logout ({ commit, dispatch }) {
    await axios({
      method: 'post',
      url   : '/api/logout',
    }).then(function (response) {
      if (response.status === 200 && response.data.general_response.response_status === true)
        dispatch('removeToken')
      else if (response.data.general_response.response_code === 4003)
        dispatch('removeToken')
      else
        throw new Error(response.data.general_response.response_message)
    }).catch(function (error) {
      if (error.response === undefined)
        throw error
      else if (error.response.status === 403)
        dispatch('removeToken')
      else
        throw new Error('Network Communication Error')
    })
  },
  removeToken ({ commit }) {
    commit('SET_TOKEN', null)
    this.$router.go({ path: '/login' })
  },
  setAccessPage ({ commit }, { data }) {
    commit('SET_ACCESS_PAGE', data)
  },
}

export const getters = {
  getUserData: (state) => {
    return state.userProfile
  },
  getMenuAccess: (state) => {
    return state.menuAccess
  },
  getAccessPage: (state) => {
    return state.accessPage
  },
}
