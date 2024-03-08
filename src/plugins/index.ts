/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import type { App } from 'vue'
import pinia from '../store'
import router from '../router'
import vuetify from './vuetify'
import toast from './toast-notification'

// Types

export function registerPlugins(app: App) {
  app
    .use(pinia)
    .use(vuetify)
    .use(router)
    .use(toast)
}
