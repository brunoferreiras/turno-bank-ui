<template>
  <div class="misc-wrapper">
    <div class="text-center mb-4">
      <h1 class="text-h1 font-weight-medium">
        403
      </h1>
      <h5 class="text-h5 font-weight-medium mb-3">
        Forbidden ⚠️
      </h5>
      <p>
        You don't have permission to access this resource.
      </p>
    </div>
    <div class="misc-avatar w-100 text-center">
      <VImg :src="misc404" alt="Coming Soon" :max-width="800" class="mx-auto" />
      <VBtn to="/" class="mt-10">
        Back to Home
      </VBtn>
    </div>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/misc.scss";
</style>

<script setup lang="ts">
import misc404 from '@/assets/images/404.png'
</script>
