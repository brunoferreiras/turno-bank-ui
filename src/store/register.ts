import { defineStore } from 'pinia'
import { useNotification } from '../@core/utils'
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

      const notifications = useNotification()

      const { data, status } = await httpClient.post('/auth/register', payload)

      this.isLoading = false
      if (status === 201) {
        notifications.success('You have been registered successfully.')
        router.push('/login')

        return
      }
      if (status === 422) {
        notifications.error('An error occurred while trying to register.')
        this.errors = data.errorMessages

        return
      }
      notifications.error('An error occurred while trying to register.')
      this.errors = ['An error occurred while trying to register.']
    },
  },
})
