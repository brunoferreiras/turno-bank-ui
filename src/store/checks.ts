import { defineStore } from 'pinia'
import { httpClient } from '@/services'

export interface ICheck {
  id: number
  description: string
  amount: number
  type: string
  created_at: string
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
}

export const useChecksStore = defineStore('checks', {
  state: (): ChecksState => ({
    checks: null,
    pagination: null,
    isLoading: false,
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

      const data = new FormData()

      data.append('image', payload.image)
      data.append('amount', payload.amount.toString())
      data.append('description', payload.description)

      await httpClient.post('/deposits', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      this.isLoading = false
    },
  },
})
