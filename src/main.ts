/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import '@/@iconify/icons-bundle'

// Styles
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'
import '@styles/styles.scss'
import 'vue-toast-notification/dist/theme-sugar.css'

// Plugins
import { createApp } from 'vue'
import App from './App.vue'
import { registerPlugins } from '@/plugins'

// Components

// Composables

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
