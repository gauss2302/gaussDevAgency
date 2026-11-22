<template>
  <div v-if="config" class="page">
    <header class="pg-header">
      <div class="pg-header__inner">
        <p class="pg-header__eyebrow" :class="{ visible: mounted }">
          Mobile app · {{ config.appName }}
        </p>
        <h1 class="pg-header__title" :class="{ visible: mounted }">Support</h1>
        <nav
          class="doc-nav"
          :class="{ visible: mounted }"
          :aria-label="`${config.appName} documents`"
        >
          <a :href="docHref(`/privacy/${config.slug}`)">Privacy Policy</a>
          <a v-if="config.hasTerms" :href="docHref(`/terms/${config.slug}`)">Terms</a>
          <a :href="docHref(`/support/${config.slug}`)" aria-current="page">Support</a>
        </nav>
      </div>
    </header>

    <article class="doc">
      <div class="doc__inner">
        <section class="doc__section">
          <p>
            Need help with {{ config.appName }}? Email
            <a class="link" :href="`mailto:${config.contactEmail}`">{{ config.contactEmail }}</a
            >.
          </p>
        </section>

        <section class="doc__section">
          <h2>What to include</h2>
          <ul>
            <li>Your device model and operating system version.</li>
            <li>Your {{ config.appName }} version.</li>
            <li>What happened and the steps to reproduce it.</li>
            <li>A screenshot, if helpful.</li>
          </ul>
          <p>Do not include passwords, payment card details or sensitive health information.</p>
        </section>

        <section class="doc__section">
          <h2>Privacy</h2>
          <p>
            How {{ config.appName }} handles information is described in the
            <a class="link" :href="docHref(`/privacy/${config.slug}`)">Privacy Policy</a>.
          </p>
        </section>
      </div>
    </article>
  </div>

  <div v-else class="page page--missing">
    <div class="missing">
      <p class="missing__eyebrow">404</p>
      <h1 class="missing__title">Support page not found</h1>
      <p class="missing__sub">We don't have a support page registered for “{{ slug }}”.</p>
      <a class="missing__link" href="https://gaussdev.com/privacy/apps">View app documents</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { findPrivacyApp } from '@/data/privacyApps'
import { APPS_ORIGIN, SITE_ORIGIN, appDocumentHref } from '@/lib/appDocs'

const route = useRoute()
const slug = computed(() => String(route.params.app ?? ''))
const config = computed(() => findPrivacyApp(slug.value))
const docHref = appDocumentHref
const mounted = ref(false)

onMounted(() =>
  requestAnimationFrame(() => {
    mounted.value = true
  }),
)

const image = `${SITE_ORIGIN}/og-image.png`

useHead(
  computed(() => {
    const name = config.value?.appName ?? 'App'
    const title = `${name} — Support — Gauss Dev`
    const description = `Help for the ${name} app by Gauss Dev. Contact ${config.value?.contactEmail ?? 'general@gaussdev.com'}.`
    const url = `${APPS_ORIGIN}/support/${slug.value}`
    return {
      title,
      link: [{ rel: 'canonical', href: url }],
      meta: [
        { name: 'description', content: description },
        {
          name: 'robots',
          content: config.value ? 'index, follow, max-image-preview:large' : 'noindex',
        },
        { property: 'og:type', content: 'article' },
        { property: 'og:site_name', content: 'Gauss Dev' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:url', content: url },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
      ],
    }
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
.doc-nav {
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 0.6s cubic-bezier(0.2, 0.6, 0.2, 1),
    transform 0.6s cubic-bezier(0.2, 0.6, 0.2, 1);
}
.pg-header__title {
  transition-delay: 0.05s;
}
.doc-nav {
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
.doc-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1.4rem;
}
.doc-nav a {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  padding: 0 0.95rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #a1a1aa;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
}
.doc-nav a[aria-current='page'] {
  color: #08080c;
  background: #faeb92;
  border-color: #faeb92;
}
.doc {
  padding: 0 clamp(1.5rem, 5vw, 4rem) clamp(5rem, 10vw, 7rem);
}
.doc__inner {
  max-width: 760px;
  margin: 0 auto;
}
.doc__section {
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.doc__section:first-child {
  border-top: none;
  padding-top: 0.4rem;
}
.doc h2 {
  font-size: clamp(1.1rem, 1.8vw, 1.3rem);
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.9rem;
}
.doc p,
.doc li {
  font-size: 0.98rem;
  line-height: 1.75;
  color: #c4c4cc;
}
.doc p {
  margin: 0 0 1rem;
  max-width: 68ch;
}
.doc p:last-child {
  margin-bottom: 0;
}
.doc ul {
  margin: 0 0 1rem;
  padding: 0 0 0 1.15rem;
  max-width: 68ch;
}
.link {
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.28);
}
.link:hover {
  color: #faeb92;
  border-bottom-color: #faeb92;
}
.page--missing {
  display: grid;
  place-items: center;
  text-align: center;
  padding: 4rem 1.5rem;
}
.missing__eyebrow {
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #a1a1aa;
  margin: 0 0 0.8rem;
}
.missing__title {
  color: #fff;
  margin: 0 0 0.6rem;
}
.missing__sub {
  color: #a1a1aa;
  margin: 0 0 1.2rem;
}
.missing__link {
  color: #faeb92;
}
@media (max-width: 640px) {
  .pg-header {
    padding-top: 4rem;
  }
}
@media (prefers-reduced-motion: reduce) {
  .pg-header__eyebrow,
  .pg-header__title,
  .doc-nav {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
</style>
