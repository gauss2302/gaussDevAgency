<template>
  <div class="page">
    <header class="pg-header">
      <div class="pg-header__inner">
        <p class="pg-header__eyebrow" :class="{ visible: mounted }">Legal</p>
        <h1 class="pg-header__title" :class="{ visible: mounted }">Privacy Policies</h1>
        <p class="pg-header__sub" :class="{ visible: mounted }">
          Privacy, terms and support for every Gauss Dev mobile app are published at
          apps.gaussdev.com. The policy for this website and GaussDev Ads Assistant is the
          <router-link to="/privacy">Gauss Dev Privacy Policy</router-link>.
        </p>
      </div>
    </header>

    <section class="list">
      <div class="list__inner">
        <article v-for="app in apps" :key="app.slug" class="app-card">
          <div class="app-card__main">
            <h2 class="app-card__title">{{ app.appName }}</h2>
            <p class="app-card__meta">{{ app.platforms }} · Updated {{ app.effectiveDate }}</p>
          </div>
          <nav class="app-card__docs" :aria-label="`${app.appName} documents`">
            <a :href="docHref(app.customRoute ?? `/privacy/${app.slug}`)">Privacy</a>
            <a v-if="app.hasTerms" :href="docHref(`/terms/${app.slug}`)">Terms</a>
            <a :href="docHref(`/support/${app.slug}`)">Support</a>
          </nav>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { privacyApps } from '@/data/privacyApps'
import { appDocumentHref } from '@/lib/appDocs'
import { useSeo } from '@/composables/useSeo'

useSeo({
  path: '/privacy/apps',
  title: 'App Privacy Policies',
  description: 'Privacy policies for every Gauss Dev mobile application.',
})

const apps = privacyApps
const docHref = appDocumentHref
const mounted = ref(false)
onMounted(() =>
  requestAnimationFrame(() => {
    mounted.value = true
  }),
)
</script>

<style scoped>
.page {
  background: #08080c;
  color: #f0f0f0;
  min-height: 100vh;
}

.pg-header {
  padding: clamp(5rem, 12vh, 7rem) clamp(1.5rem, 5vw, 4rem) clamp(2rem, 4vh, 3rem);
}
.pg-header__inner {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}

.pg-header__eyebrow,
.pg-header__title,
.pg-header__sub {
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 0.6s cubic-bezier(0.2, 0.6, 0.2, 1),
    transform 0.6s cubic-bezier(0.2, 0.6, 0.2, 1);
}
.pg-header__title {
  transition-delay: 0.05s;
}
.pg-header__sub {
  transition-delay: 0.1s;
}
.visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.pg-header__eyebrow {
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #a1a1aa;
  margin: 0 0 0.9rem;
}
.pg-header__title {
  font-size: clamp(2rem, 4.4vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #fff;
  margin: 0;
}
.pg-header__sub {
  margin: 0.9rem auto 0;
  max-width: 520px;
  font-size: clamp(0.95rem, 1.4vw, 1.05rem);
  line-height: 1.7;
  color: #a1a1aa;
}
.pg-header__sub a {
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.28);
}
.pg-header__sub a:hover {
  color: #faeb92;
  border-bottom-color: #faeb92;
}

.list {
  padding: 1rem clamp(1.5rem, 5vw, 4rem) clamp(5rem, 10vw, 7rem);
}
.list__inner {
  max-width: 760px;
  margin: 0 auto;
  display: grid;
  gap: 0.75rem;
}

.app-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.2rem 1.4rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.015);
  color: inherit;
}
.app-card__docs {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.4rem;
}
.app-card__docs a {
  min-height: 36px;
  display: inline-flex;
  align-items: center;
  padding: 0 0.8rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #a1a1aa;
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 600;
}
.app-card__docs a:hover {
  color: #08080c;
  background: #faeb92;
  border-color: #faeb92;
}

.app-card__title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.3rem;
  letter-spacing: -0.01em;
}
.app-card__meta {
  font-size: 0.85rem;
  color: #71717a;
  margin: 0;
}

@media (max-width: 640px) {
  .pg-header {
    padding-top: 4rem;
  }
  .app-card {
    flex-direction: column;
    align-items: flex-start;
  }
  .app-card__docs {
    justify-content: flex-start;
  }
}

@media (prefers-reduced-motion: reduce) {
  .pg-header__eyebrow,
  .pg-header__title,
  .pg-header__sub {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
</style>
