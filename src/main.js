import { createApp } from 'vue'
import './scss/main.scss'
import App from './App.vue'
import router from './router.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).use(router).mount('#app')
