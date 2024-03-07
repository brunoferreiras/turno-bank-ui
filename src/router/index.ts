import { createRouter, createWebHistory } from 'vue-router'
import requireAuth from './routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/balance' },
    {
      path: '/',
      meta: {
        auth: true,
      },
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: 'balance',
          component: () => import('../pages/balance.vue'),
        },
        {
          path: 'incomes',
          component: () => import('../pages/incomes.vue'),
        },
        {
          path: 'expenses',
          component: () => import('../pages/expenses.vue'),
        },
        {
          path: 'settings',
          component: () => import('../pages/settings.vue'),
        },
        {
          path: 'checks',
          component: () => import('../pages/checks.vue'),
        },
        {
          path: 'notifications',
          component: () => import('../pages/notifications.vue'),
        },
        {
          path: 'help',
          component: () => import('../pages/help.vue'),
        },
        {
          path: 'profile',
          component: () => import('../pages/profile.vue'),
        }
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        {
          path: 'login',
          component: () => import('../pages/login.vue'),
        },
        {
          path: 'register',
          component: () => import('../pages/register.vue'),
        },
      ],
    },
    {
      path: '/403',
      component: () => import('../pages/403.vue'),
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('../pages/404.vue'),
    }
  ],
})

router.beforeEach(requireAuth)

export default router
