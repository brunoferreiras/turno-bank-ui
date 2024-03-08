export function formatImage(image: string) {
  return `${import.meta.env.VITE_BASE_URL}/storage/${image}`
}
