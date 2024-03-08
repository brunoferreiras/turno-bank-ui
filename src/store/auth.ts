import { defineStore } from 'pinia'
import { httpClient } from '@/services'
import router from '@/router'
import { adminMenu, customerMenu } from '@/router/menu'

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
  errors: string[]
  allowedMenu: string[]
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    isLoading: false,
    token: null,
    user: null,
    errors: [],
    allowedMenu: [],
  }),
  getters: {
    isAuthenticated: state => !!state.token,
    isAdmin: state => state.user?.type === 'admin' || false,
    getToken(state) {
      if (!state.token)
        return localStorage.getItem(TOKEN_KEY)

      return state.token
    },
    getUser(state) {
      if (!state.user) {
        const user = localStorage.getItem(USER_KEY)

        return user ? JSON.parse(user) : null
      }

      return state.user
    },
    allowedMenuItems() {
      const user: IUser = this.getUser

      if (!user)
        return []

      return user.type === 'admin' ? adminMenu : customerMenu
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

      if (response.status === 401) {
        this.errors = ['Invalid credentials.']
        this.isLoading = false

        return
      }

      this.setToken(response.data.authorization.token)
      this.setUser(response.data.user)
      this.isLoading = false
      if (this.isAdmin)
        router.push('/checks-control')
      else
        router.push('/balance')
    },
    async logout() {
      this.isLoading = true
      await httpClient.post('/auth/logout')
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(USER_KEY)
      this.isLoading = false
      router.push('/login')
    },
  },
})
