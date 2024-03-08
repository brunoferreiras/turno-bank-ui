<script setup lang="ts">
import { computed, ref } from 'vue'
import logo from '@/assets/logo.svg?raw'
import { useAuthStore } from '@/store/auth'

const form = ref({
  username: '',
  password: '',
})

const authStore = useAuthStore()

const isPasswordVisible = ref(false)
const errors = computed(() => authStore.errors)
const isLoading = computed(() => authStore.isLoading)

const onSubmit = () => {
  const { username, password } = form.value

  authStore.login(username, password)
}
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <div
              class="d-flex text-primary"
              v-html="logo"
            />
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

      <VCardText v-if="errors.length">
        <VAlert
          v-for="(error, key) in errors"
          :key="key"
          color="error"
          icon="$error"
          :text="error"
          closable
        />
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="onSubmit">
          <VRow>
            <VCol cols="12">
              <VTextField
                v-model="form.username"
                autofocus
                placeholder="Username"
                label="Username"
                type="username"
              />
            </VCol>

            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <VBtn
                class="mt-4"
                :loading="isLoading"
                block
                type="submit"
              >
                Login
              </VBtn>
            </VCol>

            <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>New on our platform?</span>
              <RouterLink
                class="text-primary ms-2"
                to="/register"
              >
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
