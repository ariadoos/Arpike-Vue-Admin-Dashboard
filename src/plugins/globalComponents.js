import Notification from '@/components/notification/NotificationContainer'

export default {
  install(Vue, options) {
    Vue.component('notification', Notification)
  },
}
