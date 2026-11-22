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
import AgencyLegal from './views/legal/AgencyLegal.vue'
import HavamindLegal from './views/legal/HavamindLegal.vue'
import LumiLegal from './views/legal/LumiLegal.vue'
import PetCheckerLegal from './views/legal/PetCheckerLegal.vue'
import OnSiteFitLegal from './views/legal/OnSiteFitLegal.vue'
import SighLegal from './views/legal/SighLegal.vue'
import AppSupport from './views/legal/AppSupport.vue'
import { redirectAppHost } from '@/lib/appDocs'

// Main Route
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/services', component: Service },
    { path: '/contact', component: Conract },
    { path: '/privacy', component: AgencyLegal },
    { path: '/terms', component: AgencyLegal },
    { path: '/privacy/apps', component: PrivacyIndex },
    // App legal pages are declared BEFORE the generic /privacy/:app route
    // so they take precedence over PrivacyView matching.
    { path: '/privacy/havamind', component: HavamindLegal, meta: { standalone: true } },
    { path: '/terms/havamind', component: HavamindLegal, meta: { standalone: true } },
    { path: '/privacy/lumi', component: LumiLegal, meta: { standalone: true } },
    { path: '/terms/lumi', component: LumiLegal, meta: { standalone: true } },
    { path: '/privacy/petchecker', component: PetCheckerLegal, meta: { standalone: true } },
    { path: '/terms/petchecker', component: PetCheckerLegal, meta: { standalone: true } },
    { path: '/privacy/onsitefit', component: OnSiteFitLegal },
    { path: '/terms/onsitefit', component: OnSiteFitLegal },
    { path: '/privacy/sigh', component: SighLegal },
    { path: '/support/sigh', component: SighLegal },
    { path: '/support/:app', component: AppSupport },
    { path: '/privacy/:app', component: PrivacyView },
  ],
  // Restore scroll-to-top on route change; preserves saved position on back/forward.
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
})

router.beforeEach((to) => {
  const next = redirectAppHost(to.path, window.location.hostname)
  if (!next) return
  window.location.replace(next)
  return false
})

const app = createApp(App)
app.use(router)
app.use(createHead())
app.mount('#app')
