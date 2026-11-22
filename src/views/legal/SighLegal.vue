<template>
  <div class="page">
    <header class="pg-header">
      <div class="pg-header__inner">
        <p class="pg-header__eyebrow" :class="{ visible: mounted }">Mobile app · Sigh</p>
        <h1 class="pg-header__title" :class="{ visible: mounted }">
          {{ isSupport ? 'Support' : 'Privacy Policy' }}
        </h1>
        <p class="pg-header__meta" :class="{ visible: mounted }">Last updated: November 22, 2026</p>
        <nav class="doc-nav" :class="{ visible: mounted }" aria-label="Sigh documents">
          <router-link to="/privacy/sigh" :aria-current="isSupport ? undefined : 'page'"
            >Privacy Policy</router-link
          >
          <router-link to="/support/sigh" :aria-current="isSupport ? 'page' : undefined"
            >Support</router-link
          >
        </nav>
      </div>
    </header>

    <article class="doc">
      <div v-if="!isSupport" class="doc__inner">
        <section class="doc__section">
          <p>
            Sigh is a breathing and grounding app published by Gauss Dev. For privacy questions,
            contact
            <a class="link" href="mailto:general@gaussdev.com">general@gaussdev.com</a>.
          </p>
        </section>

        <section class="doc__section">
          <h2>Information stored on your device</h2>
          <p>
            Sigh does not require an account. Breathing and grounding exercises run on your device.
            Sigh does not upload your breathing session history or health information.
          </p>
          <p>
            The app stores your preferences, including language, appearance, haptics, session
            settings and onboarding completion. It also stores a randomly generated purchase
            identifier and cached information about your Pro access. The purchase identifier is
            stored in the iOS Keychain and may remain after reinstalling the app.
          </p>
        </section>

        <section class="doc__section">
          <h2>Purchases and restoration</h2>
          <p>
            Apple processes payments. Sigh uses RevenueCat to validate purchases, restore access to
            Sigh Pro and provide purchase analytics.
          </p>
          <p>
            RevenueCat receives the random app user identifier and purchase information, which may
            include the product, transaction, purchase date, store and entitlement status. Sigh does
            not associate this identifier with a personal account.
          </p>
          <p>
            Sigh does not ask for your name, email address, payment card details or health
            information to use the app.
          </p>
          <p>For information about these providers’ practices, see:</p>
          <ul>
            <li>
              <a
                class="link"
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                >Apple Privacy Policy</a
              >
            </li>
            <li>
              <a
                class="link"
                href="https://www.revenuecat.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                >RevenueCat Privacy Policy</a
              >
            </li>
          </ul>
        </section>

        <section class="doc__section">
          <h2>Advertising and tracking</h2>
          <p>
            Sigh does not include advertising SDKs or use advertising identifiers. It does not track
            you across other companies’ apps or websites for advertising.
          </p>
        </section>

        <section class="doc__section">
          <h2>Support requests</h2>
          <p>
            If you email us, we receive your email address and the information you include. We use
            this information to respond to your request and investigate reported problems. Please do
            not send payment card details or sensitive health information.
          </p>
        </section>

        <section class="doc__section">
          <h2>Retention and deletion</h2>
          <p>
            Local preferences remain until the app’s data is removed. Uninstalling Sigh does not
            automatically delete the Keychain identifier or purchase records held by Apple and
            RevenueCat.
          </p>
          <p>
            Purchase records may be retained for purchase verification, restoration, transaction
            integrity and applicable legal obligations.
          </p>
          <p>
            To ask about your data or request deletion, email
            <a class="link" href="mailto:general@gaussdev.com">general@gaussdev.com</a>. Some
            records may need to be retained to meet legal obligations or maintain purchase records.
          </p>
        </section>

        <section class="doc__section">
          <h2>Changes to this policy</h2>
          <p>
            We may update this policy when the app or its data practices change. The date at the top
            indicates the latest revision.
          </p>
        </section>

        <section class="doc__section">
          <h2>Contact</h2>
          <p>
            Privacy questions and requests:
            <a class="link" href="mailto:general@gaussdev.com">general@gaussdev.com</a>
          </p>
        </section>
      </div>

      <div v-else class="doc__inner">
        <section class="doc__section">
          <p>
            Need help with Sigh? Email
            <a class="link" href="mailto:general@gaussdev.com">general@gaussdev.com</a>.
          </p>
        </section>

        <section class="doc__section">
          <h2>Start a breathing session</h2>
          <p>
            Complete or skip onboarding, then tap the large circle. The free rhythm guides you
            through a 4-second inhale and a 6-second exhale. Follow the circle at a comfortable
            pace. Tap End to stop.
          </p>
        </section>

        <section class="doc__section">
          <h2>Grounding</h2>
          <p>
            Open the grounding exercise from the home screen. Follow the 5–4–3–2–1 prompts to notice
            things you can see, touch, hear, smell and taste. Tap the circle once for each item you
            notice.
          </p>
        </section>

        <section class="doc__section">
          <h2>Settings and appearance</h2>
          <p>Tap the gear icon in the top-right corner of the home screen to open Settings.</p>
          <p>
            Sigh uses dark appearance by default. Choose Dark or Light in Settings. Your choice is
            saved independently of your iPhone’s appearance setting.
          </p>
          <p>You can also change the interface language, haptics and breathing preferences.</p>
        </section>

        <section class="doc__section">
          <h2>Hold to breathe</h2>
          <p>
            Enable Hold to breathe in Settings. Keep your finger on the circle to continue and lift
            it to pause. With VoiceOver, activate the circle to toggle the hold.
          </p>
        </section>

        <section class="doc__section">
          <h2>Sigh Pro</h2>
          <p>
            Sigh Pro is an optional, one-time lifetime purchase. It unlocks two additional breathing
            rhythms: After (4–7–8) and Prevent (box breathing).
          </p>
          <p>
            There is no subscription. Basic breathing, grounding and widgets remain free. The
            purchase screen displays the price for your App Store region.
          </p>
        </section>

        <section class="doc__section">
          <h2>Restore a purchase</h2>
          <p>Use the same Apple Account that purchased Sigh Pro.</p>
          <p>
            Open Settings, tap Unlock Pro or a locked rhythm, then select Restore purchases. An
            internet connection is required.
          </p>
          <p>
            If access is not restored, check your Apple Account, restart the app and try again. If
            the problem continues, contact
            <a class="link" href="mailto:general@gaussdev.com">general@gaussdev.com</a>.
          </p>
        </section>

        <section class="doc__section">
          <h2>Offline use</h2>
          <p>
            Breathing and grounding work offline. Buying or restoring Pro requires an internet
            connection.
          </p>
        </section>

        <section class="doc__section">
          <h2>Widgets and Control Center</h2>
          <p>Add Sigh through the widget gallery on your Home Screen or Lock Screen.</p>
          <p>
            On iOS 18 or later, you can also add Sigh from the Control Center controls gallery. Your
            iPhone may ask you to unlock before opening the app.
          </p>
        </section>

        <section class="doc__section">
          <h2>Report a problem</h2>
          <p>
            Email
            <a class="link" href="mailto:general@gaussdev.com">general@gaussdev.com</a>
            and include:
          </p>
          <ul>
            <li>Your iPhone model and iOS version.</li>
            <li>Your Sigh version.</li>
            <li>What happened and the steps to reproduce it.</li>
            <li>A screenshot, if helpful.</li>
          </ul>
          <p>Do not include passwords, payment card details or sensitive health information.</p>
        </section>

        <section class="doc__section">
          <h2>Wellbeing notice</h2>
          <p>
            Sigh provides breathing and grounding exercises for general wellbeing. It is not medical
            care, diagnosis or treatment. Stop an exercise if it feels uncomfortable.
          </p>
        </section>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { APPS_ORIGIN, SITE_ORIGIN } from '@/lib/appDocs'

const route = useRoute()
const isSupport = computed(() => route.path.startsWith('/support'))
const mounted = ref(false)

onMounted(() =>
  requestAnimationFrame(() => {
    mounted.value = true
  }),
)

const image = `${SITE_ORIGIN}/og-image.png`

useHead(
  computed(() => {
    const support = isSupport.value
    const title = support ? 'Sigh — Support — Gauss Dev' : 'Sigh — Privacy Policy — Gauss Dev'
    const description = support
      ? 'Help for Sigh: breathing sessions, grounding, settings, Sigh Pro, restoring a purchase, widgets, and how to report a problem.'
      : 'Privacy policy for the Sigh breathing and grounding app. Sessions stay on your device. No account, no ads.'
    const url = `${APPS_ORIGIN}${support ? '/support/sigh' : '/privacy/sigh'}`

    return {
      title,
      link: [{ rel: 'canonical', href: url }],
      meta: [
        { name: 'description', content: description },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { property: 'og:type', content: 'article' },
        { property: 'og:site_name', content: 'Gauss Dev' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:url', content: url },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: url },
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
.pg-header__meta,
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
.pg-header__meta {
  transition-delay: 0.1s;
}
.doc-nav {
  transition-delay: 0.15s;
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
.pg-header__meta {
  margin-top: 1.1rem;
  font-size: 0.8rem;
  color: #71717a;
  letter-spacing: 0.02em;
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
  justify-content: center;
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
.doc-nav a:hover {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.28);
}
.doc-nav a[aria-current='page']:hover {
  color: #08080c;
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
  letter-spacing: -0.01em;
  margin: 0 0 0.9rem;
}

.doc p {
  font-size: 0.98rem;
  line-height: 1.75;
  color: #c4c4cc;
  margin: 0 0 1rem;
  max-width: 68ch;
}
.doc p:last-child {
  margin-bottom: 0;
}

.doc ul {
  margin: 0 0 1rem;
  padding: 0 0 0 1.15rem;
  color: #c4c4cc;
  max-width: 68ch;
}
.doc li {
  font-size: 0.98rem;
  line-height: 1.7;
  margin-bottom: 0.45rem;
}
.doc li::marker {
  color: #71717a;
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

@media (max-width: 640px) {
  .pg-header {
    padding-top: 4rem;
  }
  .doc__section {
    padding: 1.6rem 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .pg-header__eyebrow,
  .pg-header__title,
  .pg-header__meta,
  .doc-nav {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
</style>
