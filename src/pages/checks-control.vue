<script setup lang="ts">
import { computed } from 'vue'
import { format } from 'date-fns'

import { useChecksStore } from '@/store/checks'
import TransactionCard from '@/components/TransactionCard.vue'

const checksStore = useChecksStore()

const isLoading = computed(() => checksStore.isLoading)

const checksData = computed(() => isLoading.value
  ? []
  : checksStore.checks?.map(check => ({
    id: check.id,
    amount: check.amount,
    description: check.description,
    created_at: format(new Date(check.created_at), 'MM/dd/yyyy'),
    type: 'income',
    status: check.status,
  })))

const pagination = computed(() => checksStore.pagination)

const loadChecks = data => {
  checksStore.getPendings({
    page: data.page,
    perPage: data.itemsPerPage,
  })
}
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard
        density="compact"
        title="Checks Control"
      >
        <VDataTable
          :headers="[]"
          density="compact"
          :items="checksData"
          :items-length="pagination?.total"
          :loading="isLoading"
          :items-per-page="pagination?.per_page || 15"
          :page="pagination?.current_page || 1"
          @update:options="loadChecks"
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
