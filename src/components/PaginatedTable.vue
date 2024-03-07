<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  title: string
  data: any[]
}
const props = defineProps<Props>()

const itemsPerPage = ref(5)
const search = ref('')
const totalItems = ref(0)

const hasSlot = (slot: string[], search = '') => {
  return !!slot.filter(item => item === search).length
}

const headers = [
  { title: 'Description', key: 'description' },
  { title: 'Amount', key: 'amount' },
]

const loadItems = () => {
  // Fetch items from the server
  console.log('Fetching items from the server')
}
</script>

<template>
  <VCard :title="props.title">
    <VDataTableServer
      v-model:items-per-page="itemsPerPage"
      :headers="[]"
      :items="props.data"
      :items-length="totalItems"
      :loading="false"
      item-value="name"
      @update:options="loadItems"
    >
      <template
        v-if="hasSlot(Object.keys($slots), 'no-data')"
        #no-data
      >
        <slot name="no-data" />
      </template>
      <template
        v-if="hasSlot(Object.keys($slots), 'item')"
        #item="{ row }"
      >
        <slot
          name="item"
          :props="row"
        />
      </template>
    </VDataTableServer>
  </VCard>
</template>
