import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ArpikeDashboard from './plugins/dashboard'
import Toaster from './plugins/toaster'
import GlobalComponents from './plugins/globalComponents'

Vue.config.productionTip = false

Vue.use(Toaster)
Vue.use(GlobalComponents)
Vue.use(ArpikeDashboard)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
