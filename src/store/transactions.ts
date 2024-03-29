import { defineStore } from 'pinia'
import { httpClient } from '@/services'

export interface ITransaction {
  id: number
  description: string
  amount: number
  type: string
  created_at: string
}

export interface TransactionsRequest {
  page: number
  perPage: number
}

export interface PaginationResponse {
  current_page: number
  last_page: number
  total: number
  per_page: number
}

export interface TransactionsResponse {
  data: ITransaction[]
}

export interface TransactionsState {
  transactions: TransactionsResponse | null
  pagination: PaginationResponse | null
  isLoading: boolean
}

export const useTransactionsStore = defineStore('transactions', {
  state: (): TransactionsState => ({
    transactions: null,
    pagination: null,
    isLoading: false,
  }),
  getters: {},
  actions: {
    setTransactions(transactions: TransactionsResponse) {
      this.transactions = transactions
    },
    setPagination(pagination: PaginationResponse) {
      this.pagination = pagination
    },
    async getTransactions({ page, perPage }: TransactionsRequest = { page: 1, perPage: 15 }) {
      this.isLoading = true

      const { data } = await httpClient.get(`/accounts/transactions?page=${page}&perPage=${perPage}`)

      this.setTransactions(data.data)
      this.setPagination({
        current_page: data.current_page,
        last_page: data.last_page,
        total: data.total,
        per_page: data.per_page,
      })
      this.isLoading = false
    },
  },
})
