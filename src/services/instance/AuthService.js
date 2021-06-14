import axios from 'axios'
import { axiosInstance, baseURL } from '@/services/instance/instance'

const authClient = axios.create(axiosInstance(baseURL))

export default authClient
