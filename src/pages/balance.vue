<script setup lang="ts">
import { onMounted } from 'vue'
import chart from '@images/cards/chart-success.png'
import Transactions from '@/components/Transactions.vue'
import CardStatisticsVertical from '@/components/CardStatisticsVertical.vue'

import { useBalanceStore } from '@/store/balance'
import { useTransactionsStore } from '@/store/transactions'

const { balance, total_incomes, total_expenses, getBalance } = useBalanceStore()
const { getTransactions } = useTransactionsStore()

onMounted(async () => {
  Promise.all([
    getBalance(),
    getTransactions(),
  ])
})
</script>

<template>
  <VRow>
    <VCol cols="12">
      <CardStatisticsVertical
        v-bind="{
          title: 'Current Balance',
          image: chart,
          stats: `$${balance}`,
          change: 72.80,
        }"
      />
    </VCol>
    <VCol
      cols="12"
      md="6"
    >
      <CardStatisticsVertical
        v-bind="{
          title: 'Incomes',
          image: chart,
          stats: `$${total_incomes}`,
          change: 72.80,
        }"
      />
    </VCol>
    <VCol
      cols="12"
      md="6"
    >
      <CardStatisticsVertical
        v-bind="{
          title: 'Expenses',
          image: chart,
          stats: `$${total_expenses}`,
          change: 72.80,
        }"
      />
    </VCol>
    <VCol cols="12">
      <Transactions />
    </VCol>
  </VRow>
</template>
