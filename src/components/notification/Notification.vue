<template>
  <div class="notification-bar" :class="getNotificationClass">
    <span class="notification-close" @click.prevent="remove(notification)">
      <i class="fas fa-times"></i>
    </span>
    <h4>{{ notification.type | capitalizeFirsLetter }}</h4>
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      timeOut: null,
    }
  },
  props: {
    notification: {
      type: Object,
      requrired: true,
    },
  },
  mounted() {
    this.timeOut = setTimeout(() => this.remove(this.notification), 5000)
  },
  beforeDestroy() {
    clearTimeout(this.timeOut)
  },
  computed: {
    getNotificationClass() {
      return this.notification.type.toLowerCase()
    },
  },
  filters: {
    capitalizeFirsLetter(value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
  methods: {
    ...mapActions('notification', ['remove']),
  },
}
</script>

<style></style>
