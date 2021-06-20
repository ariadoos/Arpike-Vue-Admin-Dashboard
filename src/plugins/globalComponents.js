import BaseInput from '@/components/base/BaseInput'
import BaseButton from '@/components/base/BaseButton'

import Notification from '@/components/notification/NotificationContainer'

export default {
  install(Vue, options) {
    Vue.component('BaseInput', BaseInput)
    Vue.component('BaseButton', BaseButton)
    Vue.component('notification', Notification)
  },
}
