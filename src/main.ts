import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Service from './views/Service.vue'
import About from './views/About.vue'
import Conract from './views/Conract.vue'

// Main Route
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/services', component: Service },
    { path: '/about', component: About },
    { path: '/contact', component: Conract },
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
