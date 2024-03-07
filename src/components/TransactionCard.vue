<script setup lang="ts">
import { format } from 'date-fns'
import { computed } from 'vue'

interface Props {
  amount: number
  description: string
  type: 'income' | 'expense'
  createdAt: string
}

const props = defineProps<Props>()

const isIncome = computed(() => {
  return props.type === 'income'
})

const formattedDate = computed(() => {
  return format(new Date(props.createdAt), 'MM/dd/yyyy, hh:mm a')
})
</script>

<template>
  <VCard>
    <VRow
      class="justify-space-between"
      no-gutters
    >
      <VCol cols="6">
        <VCardText>
          <p class="text-subtitle-1 text-wrap mb-3 font-weight-bold">
            {{ props.description }}
          </p>
          <p>{{ formattedDate }}</p>
        </VCardText>
      </VCol>
      <VCol cols="6">
        <VCardText class="text-right">
          <p class="text-h6 text-no-wrap mb-3 red">
            {{ !isIncome ? '-' : '' }}$ {{ props?.amount || 0 }}
          </p>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
