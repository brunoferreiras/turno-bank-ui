<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { format } from 'date-fns'
import BalanceCard from '@/components/BalanceCard.vue'
import AccountCard from '@/components/AccountCard.vue'

import { useBalanceStore } from '@/store/balance'
import { useTransactionsStore } from '@/store/transactions'
import TransactionCard from '@/components/TransactionCard.vue'
import { useAuthStore } from '@/store/auth'
import router from '@/router'

const { isAdmin } = useAuthStore()
const balanceStore = useBalanceStore()
const transactionsStore = useTransactionsStore()

const balance = computed(() => balanceStore.balance)
const total_incomes = computed(() => balanceStore.total_incomes)
const total_expenses = computed(() => balanceStore.total_expenses)
const isLoading = computed(() => transactionsStore.isLoading)

const transactionsData = computed(() => transactionsStore.transactions?.map(transaction => ({
  description: transaction.description,
  created_at: format(new Date(transaction.created_at), 'MM/dd/yyyy'),
  type: transaction.type,
  amount: transaction.amount,
})))

const pagination = computed(() => transactionsStore.pagination)

const loadTransactions = data => {
  transactionsStore.getTransactions({
    page: data.page,
    perPage: data.itemsPerPage,
  })
}

onMounted(async () => {
  if (isAdmin)
    router.push('/checks-control')

  Promise.all([
    balanceStore.getBalance(),
  ])
})
</script>

<template>
  <VRow>
    <VCol cols="12">
      <BalanceCard :amount="balance" />
    </VCol>
    <VCol
      cols="12"
      md="6"
    >
      <AccountCard
        type="income"
        :amount="total_incomes"
        route="/incomes"
      />
    </VCol>
    <VCol
      cols="12"
      md="6"
    >
      <AccountCard
        type="expense"
        :amount="total_expenses"
        route="/expenses"
      />
    </VCol>
    <VCol cols="12">
      <VCard
        density="compact"
        title="Transactions"
      >
        <VDataTable
          :headers="[]"
          density="compact"
          :items="transactionsData"
          :items-length="pagination?.total"
          :loading="isLoading"
          :items-per-page="pagination?.per_page || 15"
          :page="pagination?.current_page || 1"
          @update:options="loadTransactions"
        >
          <template #item="{ item }">
            <TransactionCard
              :amount="item.amount"
              :description="item.description"
              :type="item.type"
              :created-at="item.created_at"
            />
          </template>
        </VDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
