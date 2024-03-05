<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard class="auth-card pa-4 pt-7" max-width="448">
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <div class="d-flex text-primary" v-html="logo" />
          </div>
        </template>

        <VCardTitle class="text-2xl font-weight-bold">
          TurnoBank
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 mb-1">
          Welcome to TurnoBank!
        </h5>
        <p class="mb-0">
          Please sign-in to your account
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="$router.push('/')">
          <VRow>
            <VCol cols="12">
              <VTextField v-model="form.username" autofocus placeholder="johndoe@username.com" label="username" type="username" />
            </VCol>

            <VCol cols="12">
              <VTextField v-model="form.password" label="Password" placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible" />

              <VBtn class="mt-4" block type="submit">
                Login
              </VBtn>
            </VCol>

            <VCol cols="12" class="text-center text-base">
              <span>New on our platform?</span>
              <RouterLink class="text-primary ms-2" to="/register">
                Create an account
              </RouterLink>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<script setup lang="ts">
import { ref } from 'vue';
import logo from '@/assets/logo.svg?raw'

const form = ref({
  username: '',
  password: '',
})
const isPasswordVisible = ref(false)
</script>
