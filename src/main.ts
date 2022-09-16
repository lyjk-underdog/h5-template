import { createApp } from 'vue'
import App from './App.vue'

import './styles/index.scss' // 加载全局样式

import router from './router'
import pinia from './store'

const app = createApp(App)

app.use(router)
    .use(pinia)


app.mount('#app')
