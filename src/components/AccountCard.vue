<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  amount: number
  type: 'income' | 'expense'
  route: string
}

const props = defineProps<Props>()

const isIncome = computed(() => {
  return props.type === 'income'
})
</script>

<template>
  <VCard>
    <VCardText>
      <p class="mb-1">
        {{ isIncome ? 'Income' : 'Expense' }}
      </p>
      <h5 class="text-h5 text-no-wrap mb-3">
        $ {{ props.amount }}
      </h5>
    </VCardText>
    <VCardActions>
      <VBtn
        color="primary"
        :to="props.route"
        link
      >
        <VIcon
          left
          icon="mdi-plus"
        />
        {{ isIncome ? 'DEPOSIT A CHECK' : 'PURCHASE' }}
      </VBtn>
    </VCardActions>
  </VCard>
</template>
