import UserService from '@/services/user/UserService'

export default {
  namespaced: true,
  state: {
    user: null,
    token: false,
  },
  getters: {},
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
    },
  },
  actions: {
    login({ commit }, credentials) {
      return UserService.login(credentials)
        .then((response) => {
          commit('SET_USER_DATA', response.data)
        })
        .then((err) => {
          throw err
        })
    },
    setUserData({ commit }, user) {
      commit('SET_USER_DATA', user)
    },
  },
}
