<script setup lang="ts">
import { computed } from 'vue'

import { usePurchasesStore } from '@/store/purchases'
import TransactionCard from '@/components/TransactionCard.vue'
import CreatePurchaseModal from '@/components/CreatePurchaseModal.vue'

const purchasesStore = usePurchasesStore()

const isLoading = computed(() => purchasesStore.isLoading)

const purchasesData = computed(() => isLoading.value
  ? []
  : purchasesStore.purchases?.map(purchase => ({
    ...purchase,
    type: 'expense',
  })))

const pagination = computed(() => purchasesStore.pagination)

const loadPurchases = data => {
  purchasesStore.getPurchases({
    page: data.page,
    perPage: data.itemsPerPage,
  })
}
</script>

<template>
  <VRow>
    <CreatePurchaseModal />
    <VCol cols="12">
      <VCard
        density="compact"
        title="Expenses"
      >
        <VDataTable
          :headers="[]"
          density="compact"
          :items="purchasesData"
          :items-length="pagination?.total"
          :loading="isLoading"
          :items-per-page="pagination?.per_page || 15"
          :page="pagination?.current_page || 1"
          @update:options="loadPurchases"
        >
          <template #item="{ item }">
            <TransactionCard
              :id="item.id"
              :amount="item.amount"
              :account="{ id: item.account_id }"
              :description="item.description"
              :variant="item.type"
              :created-at="item.created_at"
            />
          </template>
        </VDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
