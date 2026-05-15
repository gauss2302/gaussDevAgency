import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@unhead/vue/client'
import App from './App.vue'
import './style.css'
import Home from './views/Home.vue'
import Service from './views/Service.vue'
import Conract from './views/Conract.vue'
import PrivacyIndex from './views/privacy/PrivacyIndex.vue'
import PrivacyView from './views/privacy/PrivacyView.vue'

// Main Route
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/services', component: Service },
    { path: '/contact', component: Conract },
    { path: '/privacy', component: PrivacyIndex },
    { path: '/privacy/:app', component: PrivacyView },
  ],
  // Restore scroll-to-top on route change; preserves saved position on back/forward.
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
})

const app = createApp(App)
app.use(router)
app.use(createHead())
app.mount('#app')
