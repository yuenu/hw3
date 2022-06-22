import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import pinia from './store'

const app = createApp(App)

app.use(router).use(pinia).mount('#app')
