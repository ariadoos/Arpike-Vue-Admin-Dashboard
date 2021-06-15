<template>
  <div class="login-wrapper">
    <div class="card shadow">
      <div class="card-header">
        <h1>Sign In</h1>
      </div>

      <div class="card-body">
        <form @submit.prevent="login">
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Emaiil"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              v-model="password"
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
import UserService from '@/services/user/UserService'

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      let user = {
        email: this.email,
        password: this.password,
      }
      UserService.login(user)
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
          this.$toaster('error', err.response.message)
        })
    },
  },
}
</script>
