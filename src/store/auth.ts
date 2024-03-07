import { defineStore } from 'pinia'
import { httpClient } from '@/services'
import router from '@/router'

const USER_KEY = '@user'
const TOKEN_KEY = '@token'

export interface IUser {
  email: string
  username: string
  name: string
  type: string
}

export interface AuthState {
  isLoading: boolean
  token: string | null
  user: IUser | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    isLoading: false,
    token: null,
    user: null,
  }),
  getters: {
    isAuthenticated() {
      return !!this.getToken
    },
    getToken() {
      return localStorage.getItem(TOKEN_KEY)
    },
    getUser() {
      const user = localStorage.getItem(USER_KEY)

      return user ? JSON.parse(user) : null
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token
      localStorage.setItem(TOKEN_KEY, token)
    },
    setUser(user: IUser) {
      this.user = user
      localStorage.setItem(USER_KEY, JSON.stringify(user))
    },
    async login(username: string, password: string) {
      this.isLoading = true

      const response = await httpClient.post('/auth/login', { username, password })

      this.setToken(response.data.authorization.token)
      this.setUser(response.data.user)
      this.isLoading = false
      router.push('/')
    },
    async logout() {
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(USER_KEY)
      await httpClient.post('/auth/logout')
      router.push('/login')
    },
  },
})
