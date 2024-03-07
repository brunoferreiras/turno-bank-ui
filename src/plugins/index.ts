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

// Types

export function registerPlugins(app: App) {
  app
    .use(pinia)
    .use(vuetify)
    .use(router)
}
