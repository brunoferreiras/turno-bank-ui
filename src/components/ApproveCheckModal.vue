<script setup lang="ts">
import { computed } from 'vue'
import { useChecksStore } from '@/store/checks'
import { formatImage } from '@/@core/utils'

const checksStore = useChecksStore()

const currentCheck = computed(() => checksStore.currentCheck)
const openModal = computed(() => checksStore.openModal)

const onSubmit = (status: string) => {
  checksStore.approveCheck(currentCheck.value?.id, status)
    .then(() => {
      checksStore.getPendings()
    })
    .finally(() => {
      checksStore.closeModalCheck()
    })
}

const formattedAmount = computed(() => {
  if (currentCheck.value?.amount === undefined)
    return '$ 0.00'

  const nf = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return `${nf.format(currentCheck.value.amount)}`
})
</script>

<template>
  <VRow>
    <VDialog
      v-model="openModal"
      max-width="600"
      scrollable
    >
      <VCard
        prepend-icon="mdi-card-bulleted"
        title="Check Details"
        density="compact"
      >
        <template #append>
          <VBtn
            icon="mdi-close"
            variant="text"
            @click="checksStore.closeModalCheck"
          />
        </template>
        <VCardText>
          <VList>
            <VListItem>
              <template #prepend>
                <VIcon icon="mdi-account" />
              </template>
              <VListItemSubtitle>
                Customer
              </VListItemSubtitle>
              <VListItemTitle class="text-subtitle-1 font-weight-bold">
                {{ currentCheck?.account?.user?.name }}
              </VListItemTitle>
            </VListItem>
            <VListItem>
              <template #prepend>
                <VIcon icon="mdi-email" />
              </template>
              <VListItemSubtitle>
                Customer Email
              </VListItemSubtitle>
              <VListItemTitle class="text-subtitle-1 font-weight-bold">
                {{ currentCheck?.account?.user?.name }}
              </VListItemTitle>
              <template #append>
                <VIcon icon="mdi-arrow-right" />
              </template>
            </VListItem>
            <VListItem>
              <template #prepend>
                <VIcon icon="mdi-file-document" />
              </template>
              <VListItemSubtitle>
                Account
              </VListItemSubtitle>
              <VListItemTitle class="text-subtitle-1 font-weight-bold">
                {{ currentCheck?.account?.id }}
              </VListItemTitle>
              <template #append>
                <VIcon icon="mdi-arrow-right" />
              </template>
            </VListItem>
            <VListItem>
              <template #prepend>
                <VIcon icon="mdi-cash" />
              </template>
              <VListItemSubtitle>
                Reported Amount
              </VListItemSubtitle>
              <VListItemTitle class="text-subtitle-1 font-weight-bold">
                {{ formattedAmount }}
              </VListItemTitle>
            </VListItem>
            <VListItem>
              <VImg
                :src="formatImage(currentCheck?.image!)"
                max-height="200"
                fit
              />
            </VListItem>
          </VList>
        </VCardText>

        <VDivider />

        <VCardActions class="mt-2">
          <VSpacer />

          <VBtn
            text="Reject"
            variant="outlined"
            @click="() => onSubmit('rejected')"
          />

          <VBtn
            color="primary"
            text="Accept"
            variant="elevated"
            @click="() => onSubmit('accepted')"
          />
        </VCardActions>
      </VCard>
    </VDialog>
  </VRow>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 1.6rem;
}
</style>
