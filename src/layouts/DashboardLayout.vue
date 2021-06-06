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
import SideBar from '@/components/SideBar'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
  components: {
    SideBar,
    NavBar,
    Footer,
  },
}
</script>

<style></style>
