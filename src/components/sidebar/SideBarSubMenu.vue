<template>
  <!-- Sub Menu Item-->
  <ul class="sub-menu">
    <li
      class="sub-menu-item"
      v-for="menu in subMenus"
      :key="menu.name"
      :class="menu.routeName == $route.name ? 'active' : ''"
    >
      <router-link :to="{ name: menu.routeName }" class="sidebar-menu-link">
        {{ menu.name }}
      </router-link>
    </li>
  </ul>
  <!-- End Sub Menu Item-->
</template>

<script>
export default {
  props: {
    subMenus: {
      type: [Array, Object],
      requrired: true,
    },
  },
}
</script>

<style></style>
