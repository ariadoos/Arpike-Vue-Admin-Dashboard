<template>
  <div class="sidebar-menu">
    <ul>
      <!-- Menu Item -->
      <li
        class="menu-item"
        :class="menu.routeName == $route.name ? 'active' : ''"
        v-for="menu in menus"
        :key="menu.name"
      >
        <router-link
          :to="{ name: menu.routeName }"
          event
          @click.native.prevent="toggleMenu($event, menu.routeName)"
          class="sidebar-menu-link"
        >
          <i class="fas fa-tachometer-alt icon-brand"></i>
          {{ menu.name }}
          <i
            class="fas fa-caret-left multi-level-menu"
            v-if="children(menu)"
          ></i>
        </router-link>

        <SideBarSubMenu :subMenus="menu.children" v-if="children(menu)">
        </SideBarSubMenu>
      </li>
      <!-- End Menu Item-->
    </ul>
  </div>
</template>

<script>
import SideBarSubMenu from '@/components/sidebar/SideBarSubMenu'

export default {
  props: {
    menus: {
      type: [Object, Array],
      required: true,
    },
  },
  components: {
    SideBarSubMenu,
  },
  methods: {
    children(menu) {
      if (menu.children && menu.children.length > 0) {
        return true
      }

      return false
    },
    toggleMenu(event, routeName) {
      this.$emit('expand-menu', event, routeName)
    },
  },
}
</script>

<style></style>
