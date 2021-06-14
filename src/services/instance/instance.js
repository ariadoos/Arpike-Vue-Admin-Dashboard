function axiosInstance(baseURL) {
  return {
    baseURL,
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
}

const baseURL = 'http://localhost:8000/'

export { axiosInstance, baseURL }
