<template>
  <div v-if="config" class="page">
    <header class="pg-header">
      <div class="pg-header__inner">
        <p class="pg-header__eyebrow" :class="{ visible: mounted }">
          Mobile App · {{ config.appName }}
        </p>
        <h1 class="pg-header__title" :class="{ visible: mounted }">Privacy Policy</h1>
        <p class="pg-header__sub" :class="{ visible: mounted }">
          How the {{ config.appName }} mobile app handles data — written in plain English.
        </p>
        <p class="pg-header__meta" :class="{ visible: mounted }">
          Effective date: {{ config.effectiveDate }} · Last updated: {{ config.effectiveDate }}
        </p>
      </div>
    </header>

    <article class="doc">
      <div class="doc__inner">
        <section class="doc__section">
          <h2>1. Overview</h2>
          <p>
            This Privacy Policy describes how <strong>Gauss Dev</strong> (“we”, “us”, “our”)
            collects, uses, and protects information in connection with the
            <strong>{{ config.appName }}</strong> mobile application (the “App”) for
            {{ config.platforms }}. By installing or using the App, you agree to the practices
            described here.
          </p>
        </section>

        <section class="doc__section">
          <h2>2. Information We Collect</h2>
          <p v-if="!config.collectsPersonalData">
            We designed {{ config.appName }} to collect as little information as possible.
            <strong>We do not collect personally identifiable information</strong> such as your
            name, email address, phone number, or precise location.
          </p>
          <p>The App collects only anonymous, aggregated analytics, including:</p>
          <ul>
            <li v-for="item in config.dataCollected" :key="item">{{ item }}</li>
          </ul>
          <p>
            This data cannot, on its own, be used to identify you and is processed in aggregate to
            improve the App.
          </p>
        </section>

        <section class="doc__section">
          <h2>3. How We Use Information</h2>
          <ul>
            <li v-for="item in config.dataUsage" :key="item">{{ item }}</li>
          </ul>
          <p v-if="!config.hasAds">
            We do <strong>not</strong> sell, rent, or share your data with advertisers, brokers, or
            other third parties for marketing.
          </p>
        </section>

        <section class="doc__section">
          <h2>4. Third-Party Services</h2>
          <p>
            The App relies on the following third-party {{ pluralize('SDK', config.thirdPartyServices.length) }}
            to collect anonymous analytics and crash diagnostics:
          </p>
          <div class="cards">
            <div v-for="svc in config.thirdPartyServices" :key="svc.name" class="card">
              <h3>{{ svc.name }}</h3>
              <p>{{ svc.description }}</p>
              <a class="card__link" :href="svc.privacyUrl" target="_blank" rel="noopener">
                {{ svc.privacyLabel }} ↗
              </a>
            </div>
          </div>
          <p class="doc__note">
            These providers process data on our behalf under their own privacy terms.
            <span v-if="!config.hasAds">We do not embed advertising SDKs in the App.</span>
          </p>
        </section>

        <section class="doc__section">
          <h2>5. Data Retention</h2>
          <p>
            Anonymous analytics events are retained for the default period set by the analytics
            provider (typically up to 14 months) and then automatically deleted or anonymized
            further. Crash diagnostics are retained for up to 90 days.
          </p>
        </section>

        <section class="doc__section">
          <h2>6. Children's Privacy</h2>
          <p>
            The App is not directed to children under 13 (or the equivalent minimum age in your
            jurisdiction). We do not knowingly collect personal information from children. If you
            believe a child has provided us with information, please contact us and we will delete
            it.
          </p>
        </section>

        <section class="doc__section">
          <h2>7. Your Rights</h2>
          <p>
            Depending on where you live (e.g. EEA / UK under GDPR, California under CCPA/CPRA), you
            may have the right to:
          </p>
          <ul>
            <li>Request access to the data associated with your device</li>
            <li>Request deletion of analytics data linked to your device identifier</li>
            <li>Opt out of analytics collection (see section 8)</li>
            <li>Lodge a complaint with your local data protection authority</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at
            <a class="link" :href="`mailto:${config.contactEmail}`">{{ config.contactEmail }}</a
            >.
          </p>
        </section>

        <section class="doc__section">
          <h2>8. Opting Out of Analytics</h2>
          <p>You can disable or reset analytics at any time:</p>
          <ul>
            <li>
              <strong>iOS:</strong> Settings → Privacy &amp; Security → Tracking, and Settings →
              Privacy &amp; Security → Apple Advertising → turn off Personalized Ads.
            </li>
            <li>
              <strong>Android:</strong> Settings → Google → Ads → “Delete advertising ID”, or reset
              it at any time.
            </li>
            <li>Uninstalling the App stops all further data collection from your device.</li>
          </ul>
        </section>

        <section class="doc__section">
          <h2>9. Security</h2>
          <p>
            Data is transmitted over encrypted HTTPS / TLS connections. Our analytics providers
            store data on secure infrastructure with industry-standard safeguards. No method of
            transmission over the internet is 100% secure, but we work to protect your information
            using commercially reasonable measures.
          </p>
        </section>

        <section class="doc__section">
          <h2>10. International Data Transfers</h2>
          <p>
            The analytics providers we use may process data on servers located outside your country
            of residence, including the United States. Where required by law, these transfers are
            covered by appropriate safeguards such as the EU Standard Contractual Clauses.
          </p>
        </section>

        <section class="doc__section">
          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material changes will be reflected
            by updating the “Last updated” date at the top of this page. Continued use of the App
            after changes become effective constitutes acceptance of the revised policy.
          </p>
        </section>

        <section class="doc__section">
          <h2>12. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or our data practices:</p>
          <ul class="doc__contact">
            <li><strong>Company:</strong> Gauss Dev</li>
            <li><strong>App:</strong> {{ config.appName }} ({{ config.platforms }})</li>
            <li>
              <strong>Email:</strong>
              <a class="link" :href="`mailto:${config.contactEmail}`">{{ config.contactEmail }}</a>
            </li>
            <li>
              <strong>Website:</strong>
              <a class="link" href="https://gaussdev.com" target="_blank" rel="noopener"
                >gaussdev.com</a
              >
            </li>
          </ul>
        </section>
      </div>
    </article>
  </div>

  <div v-else class="page page--missing">
    <div class="missing">
      <p class="missing__eyebrow">404</p>
      <h1 class="missing__title">Privacy policy not found</h1>
      <p class="missing__sub">
        We don't have a privacy policy registered for “{{ slug }}”.
      </p>
      <router-link to="/privacy" class="missing__link">View all privacy policies</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { findPrivacyApp } from '@/data/privacyApps'

const route = useRoute()
const slug = computed(() => String(route.params.app ?? ''))
const config = computed(() => findPrivacyApp(slug.value))

const mounted = ref(false)
onMounted(() => requestAnimationFrame(() => { mounted.value = true }))

const pluralize = (word: string, count: number) => (count === 1 ? word : `${word}s`)
</script>

<style scoped>
.page {
  background: #08080c;
  color: #f0f0f0;
  min-height: 100vh;
}

/* ═══════════════════════════════════════════
   PAGE HEADER
   ═══════════════════════════════════════════ */
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
.pg-header__sub,
.pg-header__meta {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s cubic-bezier(0.2, 0.6, 0.2, 1),
    transform 0.6s cubic-bezier(0.2, 0.6, 0.2, 1);
}
.pg-header__title { transition-delay: 0.05s; }
.pg-header__sub { transition-delay: 0.1s; }
.pg-header__meta { transition-delay: 0.15s; }
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
  max-width: 560px;
  font-size: clamp(0.95rem, 1.4vw, 1.05rem);
  line-height: 1.7;
  color: #a1a1aa;
}

.pg-header__meta {
  margin-top: 1.4rem;
  font-size: 0.8rem;
  color: #71717a;
  letter-spacing: 0.02em;
}

/* ═══════════════════════════════════════════
   DOC BODY
   ═══════════════════════════════════════════ */
.doc {
  padding: 1rem clamp(1.5rem, 5vw, 4rem) clamp(5rem, 10vw, 7rem);
}
.doc__inner {
  max-width: 760px;
  margin: 0 auto;
}

.doc__section {
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.doc__section:first-child { border-top: none; padding-top: 1rem; }

.doc h2 {
  font-size: clamp(1.1rem, 1.8vw, 1.3rem);
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.01em;
  margin: 0 0 0.9rem;
}

.doc h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.4rem;
  letter-spacing: -0.005em;
}

.doc p {
  font-size: 0.95rem;
  line-height: 1.75;
  color: #c4c4cc;
  margin: 0 0 1rem;
}
.doc p:last-child { margin-bottom: 0; }

.doc ul {
  margin: 0 0 1rem;
  padding: 0 0 0 1.1rem;
  color: #c4c4cc;
}
.doc li {
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 0.4rem;
}
.doc li::marker { color: #71717a; }

.doc strong { color: #fff; font-weight: 600; }

.link {
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  transition: border-color 0.2s ease, color 0.2s ease;
}
.link:hover {
  color: #faeb92;
  border-bottom-color: #faeb92;
}

.doc__note {
  font-size: 0.85rem;
  color: #71717a;
  font-style: italic;
}

.doc__contact {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.55rem;
}
.doc__contact li { font-size: 0.95rem; }

/* ═══════════════════════════════════════════
   THIRD-PARTY CARDS
   ═══════════════════════════════════════════ */
.cards {
  display: grid;
  gap: 0.9rem;
  margin: 1rem 0 1.2rem;
}
.card {
  padding: 1.1rem 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.7rem;
  background: rgba(255, 255, 255, 0.015);
  transition: border-color 0.2s ease, background 0.2s ease;
}
.card:hover {
  border-color: rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.025);
}
.card p {
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
  color: #a1a1aa;
}
.card__link {
  font-size: 0.85rem;
  color: #faeb92;
  text-decoration: none;
  letter-spacing: 0.01em;
}
.card__link:hover { text-decoration: underline; }

/* ═══════════════════════════════════════════
   404 STATE
   ═══════════════════════════════════════════ */
.page--missing {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(5rem, 12vh, 7rem) 1.5rem;
}
.missing { text-align: center; max-width: 460px; }
.missing__eyebrow {
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #71717a;
  margin: 0 0 0.6rem;
}
.missing__title {
  font-size: clamp(1.6rem, 3.5vw, 2rem);
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.02em;
  margin: 0 0 0.7rem;
}
.missing__sub {
  font-size: 0.95rem;
  color: #a1a1aa;
  line-height: 1.7;
  margin: 0 0 1.6rem;
}
.missing__link {
  display: inline-block;
  padding: 0.7rem 1.4rem;
  border-radius: 0.5rem;
  background: #fff;
  color: #08080c;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  transition: transform 0.2s ease;
}
.missing__link:hover { transform: translateY(-1px); }

/* ═══════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════ */
@media (max-width: 640px) {
  .pg-header { padding-top: 4rem; }
  .doc__section { padding: 1.6rem 0; }
}

@media (prefers-reduced-motion: reduce) {
  .pg-header__eyebrow,
  .pg-header__title,
  .pg-header__sub,
  .pg-header__meta {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
</style>
