<script lang="ts" setup>
import VerticalNavLayout from '@layouts/components/VerticalNavLayout.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'

// Components
import Footer from '@/layouts/components/Footer.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
</script>

<template>
  <VerticalNavLayout>
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <IconBtn
          class="ms-n3 d-lg-none"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon icon="bx-menu" />
        </IconBtn>

        <VSpacer />

        <UserProfile />
      </div>
    </template>

    <template #vertical-nav-content>
      <VerticalNavLink
        :item="{
          title: 'Balance',
          icon: 'mdi-scale-balance',
          to: '/balance',
        }"
      />

      <VerticalNavLink
        :item="{
          title: 'Incomes',
          icon: 'mdi-arrow-up',
          to: '/incomes',
        }"
      />

      <VerticalNavLink
        :item="{
          title: 'Expenses',
          icon: 'mdi-arrow-down',
          to: '/expenses',
        }"
      />

      <VerticalNavLink
        :item="{
          title: 'Checks',
          icon: 'mdi-card-bulleted',
          to: '/checks',
        }"
      />

      <VerticalNavLink
        :item="{
          title: 'Notifications',
          icon: 'mdi-bell',
          to: '/notifications',
        }"
      />

      <VerticalNavLink
        :item="{
          title: 'Profile',
          icon: 'mdi-account',
          to: '/profile',
        }"
      />

      <VerticalNavLink
        :item="{
          title: 'Settings',
          icon: 'mdi-cog',
          to: '/settings',
        }"
      />

      <VerticalNavLink
        :item="{
          title: 'Help',
          icon: 'mdi-help-circle',
          to: '/help',
        }"
      />
    </template>

    <slot />

    <template #footer>
      <Footer />
    </template>
  </VerticalNavLayout>
</template>

<style lang="scss" scoped>
.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
</style>
