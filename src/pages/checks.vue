<script setup lang="ts">
import { computed, ref } from 'vue'
import { format } from 'date-fns'

import { useChecksStore } from '@/store/checks'
import TransactionCard from '@/components/TransactionCard.vue'

const checksStore = useChecksStore()

const activeTab = ref('PENDING')
const tabItems = ['PENDING', 'ACCEPTED', 'REJECTED']
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
  checksStore.getChecks({
    page: data.page,
    perPage: data.itemsPerPage,
    status: activeTab.value.toLowerCase(),
  })
}
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard
        density="compact"
        title="Checks"
      >
        <VTabs
          v-model="activeTab"
          align-tabs="center"
        >
          <VTab
            v-for="item in tabItems"
            :key="item"
            :value="item"
          >
            {{ item }}
          </VTab>
        </VTabs>

        <VDivider />

        <VWindow v-model="activeTab">
          <VWindowItem
            v-for="item in tabItems"
            :key="item"
            :value="item"
          >
            <VDataTable
              v-if="activeTab === item"
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
          </VWindowItem>
        </VWindow>
      </VCard>
    </VCol>
  </VRow>
</template>
