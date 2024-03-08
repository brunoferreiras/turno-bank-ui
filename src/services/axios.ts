import axios from 'axios'
import { useAuthStore } from '../store/auth'

export const httpClient = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

httpClient.interceptors.request.use(config => {
  const authStore = useAuthStore()
  if (authStore.token)
    config.headers.Authorization = `Bearer ${authStore.token}`

  return config
})

httpClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      const { isAuthenticated, logout } = useAuthStore()
      if (isAuthenticated)
        logout()
    }
    let errorMessages = []
    if (error.response.status === 422)
      errorMessages = Object.values(error.response.data.errors).map((error: any) => error.join(', '))

    return {
      ...error.response,
      data: {
        ...error.response.data,
        errorMessages,
      },
    }
  },
)
