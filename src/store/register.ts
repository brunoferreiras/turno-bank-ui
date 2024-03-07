import { defineStore } from 'pinia'
import { httpClient } from '@/services'
import router from '@/router'

export interface RegisterState {
  isLoading: boolean
  errors: string[]
}

export interface RegisterData {
  name: string
  username: string
  email: string
  password: string
  passwordConfirmation: string
}

export const useRegisterStore = defineStore('register', {
  state: (): RegisterState => ({
    isLoading: false,
    errors: [],
  }),
  getters: {},
  actions: {
    setErrors(errors: string[]) {
      this.errors = errors
    },
    async register(payload: RegisterData) {
      this.isLoading = true

      const { data, status } = await httpClient.post('/auth/register', payload)

      this.isLoading = false
      if (status === 201) {
        router.push('/login')

        return
      }
      if (status === 422) {
        this.errors = data.errorMessages

        return
      }
      this.errors = ['An error occurred while trying to register.']
    },
  },
})
