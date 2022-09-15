import { createApp } from 'vue'
import App from './App.vue'

import './styles/index.scss' // 加载全局样式

import router from './router'

const app = createApp(App)

app.use(router) // 注册路由

app.mount('#app')
