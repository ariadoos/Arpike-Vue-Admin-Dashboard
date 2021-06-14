import authClient from '@/services/instance/AuthService'

export default {
  login(user) {
    return authClient.post('login', user)
  },
  csrfTokenRequest() {
    return authClient.get('sanctum/csrf-cookie')
  },
}
