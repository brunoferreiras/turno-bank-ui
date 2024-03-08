<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useBalanceStore } from '@/store/balance'
import { useChecksStore } from '@/store/checks'

const balanceStore = useBalanceStore()
const checksStore = useChecksStore()
const accountAmount = computed(() => balanceStore.balance)

const dialog = ref(false)
const amount = ref()
const image = ref()
const description = ref()

const onSubmit = () => {
  checksStore.storeCheck({
    amount: amount.value,
    description: description.value,
    image: image.value,
  }).then(() => {
    checksStore.getChecks()
  }).finally(() => {
    dialog.value = false
  })
}

const onFileChange = event => {
  image.value = event.target.files[0]
}

onMounted(() => {
  balanceStore.getBalance()
})
</script>

<template>
  <VRow>
    <VDialog
      v-model="dialog"
      max-width="600"
    >
      <template #activator="{ props: activatorProps }">
        <VBtn
          position="fixed"
          location="bottom right"
          size="large"
          color="primary"
          elevation="8"
          icon="mdi-plus"
          style="z-index: 10; margin: 5px"
          v-bind="activatorProps"
        />
      </template>
      <VCard
        prepend-icon="mdi-account"
        title="Check Deposit"
        density="compact"
      >
        <template #append>
          <VBtn
            icon="mdi-close"
            variant="text"
            @click="dialog = false"
          />
        </template>
        <VCardText>
          <p class="mb-1">
            Current balance
          </p>
          <h5 class="text-h5 text-no-wrap mb-3">
            $ {{ accountAmount }}
          </h5>
        </VCardText>
        <VDivider />

        <VCardText>
          <VRow>
            <VCol cols="12">
              <VTextField
                v-model="amount"
                label="Amount"
                prepend-icon="mdi-currency-usd"
                suffix="USD"
                variant="underlined"
                number
                required
                autofocus
              />
              <small class="text-caption text-medium-emphasis">*The money will be deposited in your account once the
                check
                is
                accepted</small>
            </VCol>
            <VCol cols="12">
              <VTextField
                v-model="description"
                label="Description"
                prepend-icon="mdi-star"
                variant="underlined"
                required
              />
            </VCol>
            <VCol cols="12">
              <VFileInput
                label="Upload Check Picture"
                accept="image/*"
                prepend-icon="mdi-image"
                variant="underlined"
                required
                @change="onFileChange"
              />
            </VCol>
          </VRow>
        </VCardText>

        <VDivider />

        <VCardActions class="mt-2">
          <VSpacer />

          <VBtn
            text="Close"
            variant="plain"
            @click="dialog = false"
          />

          <VBtn
            color="primary"
            text="Save"
            variant="elevated"
            @click="onSubmit"
          />
        </VCardActions>
      </VCard>
    </VDialog>
  </VRow>
</template>
