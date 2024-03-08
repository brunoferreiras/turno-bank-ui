import { defineStore } from 'pinia'
import { useNotification } from '../@core/utils'
import { httpClient } from '@/services'

export interface ICheck {
  id: number
  description: string
  amount: number
  image: string
  type: string
  created_at: string
  updated_at: string
  account: {
    id: number
    user: {
      id: number
      name: string
      email: string
    }
  }
}

export interface ChecksRequest {
  page: number
  perPage: number
  status: string
}

export interface CreateCheckRequest {
  image: File
  amount: number
  description: string
}

export interface PaginationResponse {
  current_page: number
  last_page: number
  total: number
  per_page: number
}

export interface ChecksResponse {
  data: ICheck[]
}

export interface ChecksState {
  checks: ChecksResponse | null
  pagination: PaginationResponse | null
  isLoading: boolean
  openModal: boolean
  currentCheck: ICheck | null
}

export const useChecksStore = defineStore('checks', {
  state: (): ChecksState => ({
    checks: null,
    pagination: null,
    isLoading: false,
    openModal: false,
    currentCheck: null,
  }),
  getters: {},
  actions: {
    setChecks(checks: ChecksResponse) {
      this.checks = checks
    },
    setPagination(pagination: PaginationResponse) {
      this.pagination = pagination
    },
    async getChecks({ page, perPage, status }: ChecksRequest = { page: 1, perPage: 15, status: 'pending' }) {
      this.isLoading = true

      const { data } = await httpClient.get(`/deposits?page=${page}&per_page=${perPage}&status=${status}`)

      this.setChecks(data.data)
      this.setPagination({
        current_page: data.current_page,
        last_page: data.last_page,
        total: data.total,
        per_page: data.per_page,
      })
      this.isLoading = false
    },
    async storeCheck(payload: CreateCheckRequest) {
      this.isLoading = true

      const notifications = useNotification()

      const data = new FormData()

      data.append('image', payload.image)
      data.append('amount', payload.amount.toString())
      data.append('description', payload.description)

      const response = await httpClient.post('/deposits', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      if (response.status === 201)
        notifications.success('Check created successfully.')
      else
        notifications.error('An error occurred while trying to create the check.')

      this.isLoading = false
    },

    async getPendings({ page, perPage }: any = { page: 1, perPage: 15 }) {
      this.isLoading = true

      const { data } = await httpClient.get(`/deposits/pendings?page=${page}&per_page=${perPage}`)

      this.setChecks(data.data)
      this.setPagination({
        current_page: data.current_page,
        last_page: data.last_page,
        total: data.total,
        per_page: data.per_page,
      })
      this.isLoading = false
    },
    openModalCheck(check: ICheck) {
      this.openModal = true
      this.currentCheck = check
    },
    closeModalCheck() {
      this.openModal = false
      this.currentCheck = null
    },

    async approveCheck(id: number, status: string) {
      this.isLoading = true

      const notifications = useNotification()

      const response = await httpClient.patch(`/deposits/${id}/status`, {
        status,
      })

      if (response.status === 200)
        notifications.success('Check updated successfully.')
      else
        notifications.error('An error occurred while trying to update the check.')

      this.isLoading = false
    },
  },
})
