import { defineStore } from 'pinia'
import { useNotification } from '../@core/utils'
import { httpClient } from '@/services'

export interface IPurchase {
  id: number
  description: string
  amount: number
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

export interface PurchasesRequest {
  page: number
  perPage: number
}

export interface CreatePurchaseRequest {
  amount: number
  description: string
  date: string
}

export interface PaginationResponse {
  current_page: number
  last_page: number
  total: number
  per_page: number
}

export interface PurchasesResponse {
  data: IPurchase[]
}

export interface PurchasesState {
  purchases: PurchasesResponse | null
  pagination: PaginationResponse | null
  isLoading: boolean
}

export const usePurchasesStore = defineStore('purchases', {
  state: (): PurchasesState => ({
    purchases: null,
    pagination: null,
    isLoading: false,
  }),
  getters: {},
  actions: {
    setPurchases(purchases: PurchasesResponse) {
      this.purchases = purchases
    },
    setPagination(pagination: PaginationResponse) {
      this.pagination = pagination
    },
    async getPurchases({ page, perPage }: PurchasesRequest = { page: 1, perPage: 15 }) {
      this.isLoading = true

      const { data } = await httpClient.get(`/purchases?page=${page}&per_page=${perPage}`)

      this.setPurchases(data.data)
      this.setPagination({
        current_page: data.current_page,
        last_page: data.last_page,
        total: data.total,
        per_page: data.per_page,
      })
      this.isLoading = false
    },
    async storePurchase(payload: CreatePurchaseRequest) {
      this.isLoading = true

      const notifications = useNotification()

      const response = await httpClient.post('/purchases', payload)

      if (response.status === 201)
        notifications.success('Check created successfully.')
      else
        notifications.error('An error occurred while trying to create the check.')

      this.isLoading = false
    },
  },
})
