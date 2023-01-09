import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Tailwindcss
import './index.css'
// Tailwindcss

// icons package
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
// icons package
const app = createApp(App)
app.use(store).use(router)
app.use(mdiVue, {
    icons: mdijs
  })
app.mount('#app')
