import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import "../node_modules/bootstrap-icons/font/bootstrap-icons.scss";
import "../node_modules/remixicon/fonts/remixicon.css"
import '@/assets/main.scss'

createApp(App).use(store).use(router).mount('#app')
