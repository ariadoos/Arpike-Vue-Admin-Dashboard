export default {
  install(Vue, options) {
    Vue.prototype.$toaster = function (type, message) {
      this.$store.dispatch(
        'notification/add',
        { type, message },
        { root: true }
      )
    }
  },
}
