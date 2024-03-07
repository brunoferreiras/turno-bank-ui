import { useAuthStore } from '../store/auth'

export default async function requireAuth(to: any, from: any, next: any) {
  const { isAuthenticated } = useAuthStore()
  if (to.meta?.auth && !isAuthenticated)
    next('/login')
  else
    next()
}
