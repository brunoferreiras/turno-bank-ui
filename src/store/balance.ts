import { httpClient } from '@/services'
import { defineStore } from 'pinia'

export interface BalanceState {
  balance: number
  total_incomes: number
  total_expenses: number
  isLoading: boolean
}

export const useBalanceStore = defineStore('balance', {
  state: (): BalanceState => ({
    balance: 0,
    total_incomes: 0,
    total_expenses: 0,
    isLoading: false,
  }),
  getters: {},
  actions: {
    setInfo(balance: number, total_incomes: number, total_expenses: number) {
      this.balance = balance
      this.total_incomes = total_incomes
      this.total_expenses = total_expenses
    },
    async getBalance() {
      this.isLoading = true;
      const { data: { balance, total_incomes, total_expenses } } = await httpClient.get('/accounts/balance')
      this.setInfo(balance, total_incomes, total_expenses)
      this.isLoading = false;
    },
  }
})
