let increment = 1

export default {
  namespaced: true,
  state: {
    notifications: [],
  },
  getters: {},
  mutations: {
    SET_NOTIFICATION(state, notification) {
      state.notifications.push({
        ...notification,
        id: increment++,
      })
    },
    DELETE_NOTIFICATION(state, removeNotification) {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== removeNotification.id
      )
    },
  },
  actions: {
    add({ commit }, notification) {
      commit('SET_NOTIFICATION', notification)
    },
    remove({ commit }, notification) {
      commit('DELETE_NOTIFICATION', notification)
    },
  },
}
