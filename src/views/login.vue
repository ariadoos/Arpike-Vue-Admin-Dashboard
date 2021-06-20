<template>
  <div class="login-wrapper">
    <div class="card shadow">
      <div class="card-header">
        <h1>Sign In</h1>
      </div>

      <div class="card-body">
        <form @submit.prevent="login">
          <div class="form-group">
            <BaseInput
              type="email"
              placeholder="Email"
              v-model="email"
              className="form-control"
            ></BaseInput>
          </div>
          <div class="form-group">
            <BaseInput
              type="password"
              placeholder="Password"
              v-model="password"
              className="form-control"
            ></BaseInput>
          </div>

          <BaseButton type="submit" buttonClass="btn-outline-primary">
            <i class="far fa-envelope"></i>Log in
          </BaseButton>
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
          console.log(response.data)
          if (response.status == 200) {
            this.$router.push({ name: 'Dashboard' })
            this.$toaster('success', response.data.message)
          }
        })
        .catch((err) => {
          console.log(err.response)
          // this.$toaster('error', err.response.message)
        })
    },
  },
}
</script>
