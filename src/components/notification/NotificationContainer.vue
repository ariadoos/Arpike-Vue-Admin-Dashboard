<template>
  <!-- Notification Wrapper -->
  <div class="notification-wrapper">
    <Notification
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    ></Notification>
  </div>
  <!-- End Notification Wrapper -->
</template>

<script>
import Notification from '@/components/notification/Notification'
import { mapState } from 'vuex'

export default {
  components: { Notification },
  computed: {
    ...mapState('notification', ['notifications']),
  },
}
</script>

<style></style>
