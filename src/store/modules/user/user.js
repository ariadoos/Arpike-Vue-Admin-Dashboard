import UserService from '@/services/user/UserService.js'

export default {
  namespaced: true,
  state: {
    user: null,
    authenticated: false,
  },
  getters: {
    user(state) {
      return state.user
    },

    authenticated(state) {
      return state.authenticated
    },
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
    },

    SET_AUTHENTICATED(state, value) {
      state.authenticated = value
    },

    CLEAR_USER_DATA(state) {
      state.user = null
      state.authenticated = false
      localStorage.removeItem('authenticated')
      location.reload()
    },
  },
  actions: {
    login({ commit }, credentials) {
      return UserService.login(credentials)
        .then((response) => {
          localStorage.setItem('authenticated', JSON.stringify(true))
          commit('SET_USER_DATA', response.data)
          commit('SET_AUTHENTICATED', true)
          return response
        })
        .catch((err) => {
          throw err
        })
    },

    setUserData({ commit }, user) {
      commit('SET_USER_DATA', user)
    },

    getCurrentUser({ commit }) {
      return UserService.getCurrentUser()
        .then((response) => {
          commit('SET_USER_DATA', response.data)
          commit('SET_AUTHENTICATED', true)
        })
        .catch((err) => {
          commit('CLEAR_USER_DATA')
          throw err
        })
    },

    logout({ commit }) {
      UserService.logout()
        .then((response) => {
          commit('CLEAR_USER_DATA')
        })
        .catch((err) => {
          throw err
        })
    },
  },
}
