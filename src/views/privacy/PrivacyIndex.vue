<template>
  <div class="page">
    <header class="pg-header">
      <div class="pg-header__inner">
        <p class="pg-header__eyebrow" :class="{ visible: mounted }">Legal</p>
        <h1 class="pg-header__title" :class="{ visible: mounted }">Privacy Policies</h1>
        <p class="pg-header__sub" :class="{ visible: mounted }">
          Privacy policies for every Gauss Dev mobile app.
        </p>
      </div>
    </header>

    <section class="list">
      <div class="list__inner">
        <router-link
          v-for="app in apps"
          :key="app.slug"
          :to="`/privacy/${app.slug}`"
          class="app-card"
        >
          <div class="app-card__main">
            <h2 class="app-card__title">{{ app.appName }}</h2>
            <p class="app-card__meta">{{ app.platforms }} · Updated {{ app.effectiveDate }}</p>
          </div>
          <span class="app-card__arrow" aria-hidden="true">→</span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { privacyApps } from '@/data/privacyApps'
import { useSeo } from '@/composables/useSeo'

useSeo({
  path: '/privacy',
  title: 'Privacy Policies',
  description: 'Privacy policies for every Gauss Dev mobile application.',
})

const apps = privacyApps
const mounted = ref(false)
onMounted(() => requestAnimationFrame(() => { mounted.value = true }))
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
  transition: opacity 0.6s cubic-bezier(0.2, 0.6, 0.2, 1),
    transform 0.6s cubic-bezier(0.2, 0.6, 0.2, 1);
}
.pg-header__title { transition-delay: 0.05s; }
.pg-header__sub { transition-delay: 0.1s; }
.visible { opacity: 1 !important; transform: translateY(0) !important; }

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
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}
.app-card:hover {
  border-color: rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.03);
  transform: translateY(-1px);
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
.app-card__arrow {
  color: #71717a;
  font-size: 1.2rem;
  transition: color 0.2s ease, transform 0.2s ease;
}
.app-card:hover .app-card__arrow {
  color: #faeb92;
  transform: translateX(2px);
}

@media (max-width: 640px) {
  .pg-header { padding-top: 4rem; }
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
