<template>
  <div class="login-wrapper">
    <div class="card shadow">
      <div class="card-header">
        <h1>Sign In</h1>
      </div>

      <div class="card-body">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Username"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div>

          <button type="submit" class="btn btn-outline-primary">
            <i class="far fa-envelope"></i>Log in
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
