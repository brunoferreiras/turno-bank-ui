/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import '@/@iconify/icons-bundle'
import { loadFonts } from '@/plugins/webfontloader'

// Styles
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'
import '@styles/styles.scss'

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

loadFonts()

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
