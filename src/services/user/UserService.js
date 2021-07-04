import authClient from '@/services/instance/AuthService'
import apiClient from '@/services/instance/ApiService'

export default {
  async login(user) {
    await this.csrfTokenRequest()

    return authClient.post('login', user)
  },
  csrfTokenRequest() {
    return authClient.get('sanctum/csrf-cookie')
  },
  async getCurrentUser() {
    return await apiClient.get('user')
  },
  logout() {
    return authClient.post('logout')
  },
}
