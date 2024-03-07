<script setup lang="ts">
import { format } from 'date-fns'

interface Props {
  amount: number
}

const props = defineProps<Props>()
</script>

<template>
  <VCard>
    <VCardText>
      <VRow no-gutters>
        <VCol>
          <p class="mb-1">
            Current balance
          </p>
          <h5 class="text-h5 text-no-wrap mb-3">
            $ {{ props.amount }}
          </h5>
        </VCol>
        <VCol align-self="end">
          <p class="text-right">
            {{ format(new Date(), 'MMMM, yyyy') }} <VIcon icon="mdi-chevron-down" />
          </p>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
