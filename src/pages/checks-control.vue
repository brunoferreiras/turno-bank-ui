<script setup lang="ts">
import { computed } from 'vue'
import { useChecksStore } from '@/store/checks'
import TransactionCard from '@/components/TransactionCard.vue'
import ApproveCheckModal from '@/components/ApproveCheckModal.vue'

const checksStore = useChecksStore()

const isLoading = computed(() => checksStore.isLoading)

const checksData = computed(() => isLoading.value
  ? []
  : checksStore.checks?.map(check => ({
    ...check,
    type: 'pending',
  })))

const pagination = computed(() => checksStore.pagination)

const selectCheck = check => {
  checksStore.openModalCheck(check)
}

const loadChecks = data => {
  checksStore.getPendings({
    page: data.page,
    perPage: data.itemsPerPage,
  })
}
</script>

<template>
  <VRow>
    <ApproveCheckModal />
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
              :id="item.id"
              :amount="item.amount"
              :account="item.account"
              :description="item.description"
              :variant="item.type"
              :created-at="item.created_at"
              :click="() => selectCheck(item)"
            />
          </template>
        </VDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
