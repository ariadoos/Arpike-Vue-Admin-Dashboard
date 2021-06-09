<template>
  <!-- Top NavBar -->
  <nav class="navbar">
    <div class="container-fluid">
      <!-- Toggle SideBar Button -->
      <button class="bar" id="toggleMenu">
        <i class="fas fa-bars"></i>
      </button>
      <!-- End Toggle SideBar Button -->

      <div class="nav-menu">
        <!-- Search Box -->
        <div class="search-box menu-item">
          <form>
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input type="text" class="form-control" placeholder="Search" />
              <button type="submit"></button>
            </div>
          </form>
        </div>
        <!-- End Search Box -->

        <!-- User Avatar Wrapper -->
        <div class="dropdown menu-item">
          <span class="avatar-wrapper">
            <span class="avatar-img-wrapper">
              <img src="assets/images/avatar.jpg" />
            </span>

            <span class="dropbtn font-weight-bold">Nikesh</span>
          </span>

          <div class="dropdown-content">
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a href="#">Logout</a>
          </div>
        </div>
        <!-- End User Avatar Wrapper -->
      </div>
    </div>
  </nav>
  <!--End Top NavBar -->
</template>

<script>
export default {}
</script>

<style></style>
