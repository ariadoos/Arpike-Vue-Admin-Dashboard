<template>
  <div class="login-wrapper">
    <div class="card shadow">
      <div class="card-header">
        <h1>Sign In</h1>
      </div>

      <div class="card-body">
        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(login)">
            <div class="form-group">
              <ValidationProvider
                name="E-mail"
                rules="required|email"
                v-slot="{ errors }"
                :bails="false"
              >
                <BaseInput
                  type="email"
                  placeholder="Email"
                  v-model="email"
                  :className="['form-control', errors[0] ? 'is-invalid' : '']"
                  ><div class="invalid-feedback">
                    {{ errors[0] }}
                  </div></BaseInput
                >
              </ValidationProvider>
            </div>
            <ValidationProvider
              vid="password"
              name="Password"
              rules="required"
              v-slot="{ errors }"
              :bails="false"
            >
              <div class="form-group">
                <BaseInput
                  type="password"
                  placeholder="Password"
                  v-model="password"
                  :className="['form-control', errors[0] ? 'is-invalid' : '']"
                  ><div class="invalid-feedback">
                    {{ errors[0] }}
                  </div></BaseInput
                >
              </div>
            </ValidationProvider>

            <BaseButton type="submit" buttonClass="btn-outline-primary">
              <i class="far fa-envelope"></i>Log in
            </BaseButton>
          </form>
        </ValidationObserver>
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
          console.log(err)
          // this.$toaster('error', err.response.message)
        })
    },
  },
}
</script>
