<script setup lang="ts">
import { format } from 'date-fns'
import { computed } from 'vue'

interface Props {
  id: number
  amount: string | number
  account: {
    id: number
    user: {
      name: string
      email: string
    }
  }
  description: string
  variant: 'income' | 'expense' | 'pending'
  createdAt: string
  click?: () => void
}

const props = defineProps<Props>()

const handleClick = () => {
  if (props.click)
    props.click({ ...props })
}

const formattedDate = computed(() => {
  return format(new Date(props.createdAt), 'MM/dd/yyyy, hh:mm a')
})

const colors = {
  income: 'text-success',
  expense: 'text-error',
  pending: 'text-info',
}

const formattedAmount = computed(() => {
  if (props.amount === undefined)
    return '$ 0.00'

  const nf = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return `${props.variant === 'expense' ? '- ' : ''}${nf.format(props.amount)}`
})
</script>

<template>
  <VList :key="props.id">
    <VListItem @click="handleClick">
      <VListItemTitle class="text-subtitle-1 font-weight-bold">
        {{ props.description }}
      </VListItemTitle>
      <VListItemSubtitle>
        {{ formattedDate }}
      </VListItemSubtitle>
      <template #append>
        <span
          class="text-subtitle-1 text-no-wrap mb-3 font-weight-bold"
          :class="colors[props.variant]"
        >{{
          formattedAmount }}</span>
      </template>
    </VListItem>
    <VDivider />
  </VList>
</template>
