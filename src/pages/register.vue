<script setup lang="ts">
import { computed, ref } from 'vue'
import logo from '@/assets/logo.svg?raw'
import { useRegisterStore } from '@/store/register'

const form = ref({
  name: '',
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
})

const isPasswordVisible = ref(false)
const registerStore = useRegisterStore()

const errors = computed(() => registerStore.errors)
const isLoading = computed(() => registerStore.isLoading)

const onSubmit = () => {
  registerStore.register(form.value)
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
        <p class="mb-0">
          Make your new account
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
                v-model="form.name"
                autofocus
                label="Name"
                placeholder="Name"
              />
            </VCol>
            <VCol cols="12">
              <VTextField
                v-model="form.username"
                autofocus
                label="Username"
                placeholder="Username"
              />
            </VCol>
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                label="Email"
                placeholder="Your email"
                type="email"
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
            </VCol>
            <VCol cols="12">
              <VTextField
                v-model="form.passwordConfirmation"
                label="Password Confirmation"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />
            </VCol>

            <VCol cols="12">
              <VBtn
                class="mt-4"
                :loading="isLoading"
                block
                type="submit"
              >
                Sign up
              </VBtn>
            </VCol>

            <!-- login instead -->
            <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>Already have an account?</span>
              <RouterLink
                class="text-primary ms-2"
                to="/login"
              >
                Sign in instead
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
