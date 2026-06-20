import axios from 'axios'

// Base URL for all API calls
const api = axios.create({
  baseURL: 'http://localhost:8000',
})

// Before every request, attach the token if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api