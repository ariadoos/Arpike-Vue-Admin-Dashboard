import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user/user.js'
import notification from '@/store/modules/notification/notification .js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    notification,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
})
