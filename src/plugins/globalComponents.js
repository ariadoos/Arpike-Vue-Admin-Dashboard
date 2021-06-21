import BaseInput from '@/components/base/BaseInput'
import BaseButton from '@/components/base/BaseButton'

import Notification from '@/components/notification/NotificationContainer'

import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import en from 'vee-validate/dist/locale/en.json'

localize({
  en: {
    messages: {
      required: 'The {fieldname} field is required',
    },
  },
})
// install rules and localization
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})
localize('en', en)

export default {
  install(Vue, options) {
    Vue.component('BaseInput', BaseInput)
    Vue.component('BaseButton', BaseButton)
    Vue.component('notification', Notification)
    Vue.component('ValidationObserver', ValidationObserver)
    Vue.component('ValidationProvider', ValidationProvider)
  },
}
