import { defineStore } from 'pinia'
import { httpClient } from '@/services'

export interface ITransaction {
  id: number
  description: string
  amount: number
  type: string
  date: string
}

export interface TransactionsState {
  transactions: ITransaction[]
  isLoading: boolean
}

export const useTransactionsStore = defineStore('transactions', {
  state: (): TransactionsState => ({
    transactions: [],
    isLoading: false,
  }),
  getters: {},
  actions: {
    setTransactions(transactions: ITransaction[]) {
      this.transactions = transactions
    },
    async getTransactions() {
      this.isLoading = true

      const { data } = await httpClient.get('/accounts/transactions')

      this.setTransactions(data)
      this.isLoading = false
    },
  },
})
