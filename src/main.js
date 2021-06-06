import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ArpikeDashboard from './plugins/dashboard'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  ArpikeDashboard,
  render: (h) => h(App),
}).$mount('#app')
