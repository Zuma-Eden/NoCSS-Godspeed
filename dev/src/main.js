import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/plugins/godspeed'
// import imager from '@/components/imager/index.vue'

let app = createApp(App).use(store).use(router).mount('#app')

// app.component('imager',imager)