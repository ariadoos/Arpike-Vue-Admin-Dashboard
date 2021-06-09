<template>
  <!-- Navigation SideBar -->
  <div id="sidebar">
    <div class="sidebar-content">
      <!-- Navigation Title -->
      <div class="sidebar-brand text-center">
        <a href="#">
          <h1 class="">Arpike</h1>
        </a>
        <a
          href="javascript:void(0)"
          class="closeBtn"
          id="closeBtn"
          onclick="closeNav()"
          >&times;</a
        >
      </div>
      <!-- End Navigation Title -->

      <!-- Navigation Menu -->
      <SideBarMenu :menus="menus" @expand-menu="toggleMenu"></SideBarMenu>
      <!-- End Navigation Menu -->
    </div>
  </div>
  <!--End Navigation SideBar -->
</template>

<script>
import SideBarMenu from '@/components/sidebar/SideBarMenu'
import menus from '@/plugins/menu'

export default {
  data() {
    return {
      menus,
    }
  },
  components: {
    SideBarMenu,
  },
  methods: {
    toggleMenu(event, routeName) {
      if (routeName) {
        this.$router.push({ path: routeName }).catch(() => {})
      } else {
        event.currentTarget.parentNode.classList.toggle('menu-open')
      }
    },
  },
}
</script>

<style></style>
