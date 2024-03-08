import { useAuthStore } from '../store/auth'

export default async function requireAuth(to: any, from: any, next: any) {
  const { isAuthenticated, isAdmin } = useAuthStore()
  if (to.meta?.auth && !isAuthenticated) { next('/login') }
  else {
    if (to.meta?.admin) {
      if (!isAdmin)
        next('/403')
    }
    next()
  }
}
