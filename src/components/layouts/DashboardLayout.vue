<template>
  <div>
    <SideBar></SideBar>
    <!-- Main Content Wrapper -->
    <div id="main-content">
      <NavBar></NavBar>
      <router-view></router-view>
      <Footer></Footer>
    </div>
    <!-- End Main Content Wrapper -->
  </div>
</template>

<script>
import SideBar from '@/components/layouts/SideBar'
import NavBar from '@/components/layouts/NavBar'
import Footer from '@/components/layouts/Footer'

export default {
  components: {
    SideBar,
    NavBar,
    Footer,
  },
}
</script>

<style></style>
