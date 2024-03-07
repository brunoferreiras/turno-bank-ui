<script setup lang="ts">
import { computed, ref } from 'vue'
import { format } from 'date-fns'

import { usePurchasesStore } from '@/store/purchases'
import TransactionCard from '@/components/TransactionCard.vue'
import CreatePurchaseModal from '@/components/CreatePurchaseModal.vue'

const purchasesStore = usePurchasesStore()

const activeTab = ref('PENDING')
const tabItems = ['PENDING', 'ACCEPTED', 'REJECTED']
const isLoading = computed(() => purchasesStore.isLoading)

const purchasesData = computed(() => isLoading.value
  ? []
  : purchasesStore.purchases?.map(purchase => ({
    id: purchase.id,
    amount: purchase.amount,
    description: purchase.description,
    created_at: format(new Date(purchase.created_at), 'MM/dd/yyyy'),
    type: 'income',
    status: purchase.status,
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
