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
      <div class="sidebar-menu">
        <ul>
          <!-- Menu Item -->
          <li class="menu-item menu-open active">
            <a href="#" class="sidebar-menu-link">
              <i class="fas fa-tachometer-alt icon-brand"></i>
              Dashboard
              <i class="fas fa-caret-left multi-level-menu"></i>
            </a>

            <!-- Sub Menu Item-->
            <ul class="sub-menu">
              <li class="sub-menu-item active">
                <a class="sidebar-menu-link"> DashboardV1 </a>
              </li>

              <li class="sub-menu-item">
                <a class="sidebar-menu-link"> DashboardV2 </a>
              </li>
            </ul>
            <!-- End Sub Menu Item-->
          </li>
          <!-- End Menu Item-->

          <li class="menu-item">
            <a href="#" class="sidebar-menu-link">
              <i class="fas fa-tachometer-alt icon-brand"></i>
              Tables
            </a>
          </li>

          <li class="menu-item">
            <a href="login.html" class="sidebar-menu-link">
              <i class="fas fa-tachometer-alt icon-brand"></i>
              Login
            </a>
          </li>
        </ul>
      </div>
      <!-- End Navigation Menu -->
    </div>
  </div>
  <!--End Navigation SideBar -->
</template>

<script>
export default {}
</script>

<style></style>
