import axios from 'axios'
import { axiosInstance, baseURL } from '@/services/instance/instance'

const apiClient = axios.create(axiosInstance(baseURL + 'api/'))

export default apiClient
