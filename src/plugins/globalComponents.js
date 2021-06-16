import BaseInput from '@/components/base/BaseInput'

import Notification from '@/components/notification/NotificationContainer'

export default {
  install(Vue, options) {
    Vue.component('BaseInput', BaseInput)
    Vue.component('notification', Notification)
  },
}
