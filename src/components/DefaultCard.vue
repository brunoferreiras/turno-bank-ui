<script setup lang="ts">
interface Props {
  title: string
}

const props = defineProps<Props>()
</script>

<template>
  <VCard class="text-center text-sm-start">
    <VRow>
      <VCol
        cols="12"
        sm="8"
        order="2"
        order-sm="1"
      >
        <VCardItem>
          <VCardTitle class="text-md-h5 text-primary">
            {{ props.title }}
          </VCardTitle>
        </VCardItem>
      </VCol>
    </VRow>
  </VCard>
</template>
