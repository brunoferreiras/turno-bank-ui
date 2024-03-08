import { useToast } from 'vue-toast-notification'

export function formatImage(image: string) {
  return `${import.meta.env.VITE_BASE_URL}/storage/${image}`
}

export function useNotification() {
  const $toast = useToast()
  const timeout = 5000

  const success = (message: string) => $toast.success(message, {
    duration: timeout,
    type: 'success',
    dismissible: true,
    position: 'top-right',
  })

  const error = (message: string) => $toast.error(message, {
    duration: timeout,
    type: 'error',
    dismissible: true,
    position: 'top-right',
  })

  return { success, error }
}
