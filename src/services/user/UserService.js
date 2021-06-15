import authClient from '@/services/instance/AuthService'

export default {
  async login(user) {
    await this.csrfTokenRequest()

    return authClient.post('login', user)
  },
  csrfTokenRequest() {
    return authClient.get('sanctum/csrf-cookie')
  },
}
