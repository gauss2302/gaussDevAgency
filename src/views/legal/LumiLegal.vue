<template>
  <div class="lm-shell">
    <!-- ── Inline brand nav (Lumi brand + Privacy/Terms tabs) ── -->
    <nav class="lm-nav" aria-label="Lumi legal navigation">
      <router-link to="/privacy/lumi" class="lm-brand">
        <span class="lm-brand-dot" aria-hidden="true"></span>
        Lumi
      </router-link>
      <div class="lm-tabs" role="tablist">
        <router-link
          to="/privacy/lumi"
          class="lm-tab"
          :class="{ 'lm-tab--active': mode === 'privacy' }"
          role="tab"
          :aria-selected="mode === 'privacy'"
        >
          Privacy Policy
        </router-link>
        <router-link
          to="/terms/lumi"
          class="lm-tab"
          :class="{ 'lm-tab--active': mode === 'terms' }"
          role="tab"
          :aria-selected="mode === 'terms'"
        >
          Terms of Service
        </router-link>
      </div>
    </nav>

    <!-- ═══════════════ PRIVACY POLICY ═══════════════ -->
    <article v-if="mode === 'privacy'" class="lm-page" aria-labelledby="lm-privacy-h">
      <header class="lm-hero">
        <div class="lm-hero-tag">Mobile App · A little light for someone you love</div>
        <h1 id="lm-privacy-h">Privacy Policy</h1>
        <div class="lm-hero-meta">
          <span>Effective date: {{ effectiveDate }}</span>
          <span>Last updated: {{ effectiveDate }}</span>
        </div>
      </header>

      <div class="lm-content">
        <section class="lm-section">
          <div class="lm-section-num">01</div>
          <h2>Overview</h2>
          <p>
            This Privacy Policy describes how Gauss Dev (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;) collects, uses, and protects information in connection with the
            Lumi mobile application (the &ldquo;App&rdquo;) for iOS and Android.
          </p>
          <p>
            Lumi is built on a small set of privacy principles that shape every part of the App:
          </p>
          <ul class="lm-list">
            <li>
              <strong>No text, voice, photos, video, stickers, emoji, or links</strong> are ever
              sent. Lumis are ambient signals &mdash; a glow, a haptic pulse, a doodle, a color.
            </li>
            <li>
              <strong>End-to-end encrypted.</strong> Lumis are encrypted on the sender's device
              and decrypted only on the recipient's device. We cannot read them.
            </li>
            <li>
              <strong>Ephemeral by default.</strong> Lumis disappear after they are delivered
              and seen. Only items you explicitly move to the Kept Shelf persist.
            </li>
            <li>
              <strong>Subscription-only.</strong> No ads, no data brokers, no behavioral
              profiling.
            </li>
          </ul>
          <p>
            By installing or using the App, you agree to the practices described here.
          </p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">02</div>
          <h2>Information We Collect</h2>
          <p>
            We collect only what is necessary to deliver Lumis between people in your circle.
          </p>

          <p class="lm-subhead">Account Data</p>
          <ul class="lm-list">
            <li>Email address or phone number used to sign in</li>
            <li>Authentication tokens</li>
            <li>Display name (chosen by you) and avatar color</li>
            <li>Your circle: the user IDs of up to 12 mutually-connected people</li>
          </ul>

          <p class="lm-subhead">Lumi Metadata</p>
          <ul class="lm-list">
            <li>The fact that a Lumi was sent from user A to user B at time T</li>
            <li>Delivery and read receipts (so the sender knows the Lumi arrived)</li>
            <li>The size of the encrypted payload</li>
          </ul>
          <div class="lm-callout">
            We do not see the contents of a Lumi. The glow, doodle, or color is encrypted
            end-to-end and only decrypts on the recipient's device.
          </div>

          <p class="lm-subhead">Device &amp; Diagnostics</p>
          <ul class="lm-list">
            <li>Anonymous device identifiers (resettable via OS settings)</li>
            <li>Device model, OS version, app version</li>
            <li>Push notification token (required to deliver Lumis)</li>
            <li>Crash and performance diagnostics</li>
            <li>Approximate region (country / time zone) inferred from IP, not stored</li>
          </ul>

          <p class="lm-subhead">What We Do Not Collect</p>
          <ul class="lm-list">
            <li>Address book or contacts (circle members invite each other directly)</li>
            <li>Location data</li>
            <li>Microphone, camera, or photo library access</li>
            <li>Web browsing history</li>
            <li>Advertising identifiers</li>
          </ul>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">03</div>
          <h2>How We Use Your Information</h2>
          <ul class="lm-list">
            <li>To deliver Lumis from your device to the devices of people in your circle</li>
            <li>To send push notifications when a Lumi arrives</li>
            <li>To sync your Kept Shelf across your own devices (still end-to-end encrypted)</li>
            <li>To enforce the 12-person circle cap and the mutual-connection requirement</li>
            <li>To diagnose crashes, bugs, and performance issues</li>
            <li>To process subscription billing through the App Store / Play Store</li>
          </ul>
          <p>
            We do not sell, rent, or share your data with advertisers, data brokers, or third
            parties for marketing purposes.
          </p>
          <p>
            We do not use any Lumi content, metadata, or behavior to train AI models. Lumi is
            an explicitly non-AI product.
          </p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">04</div>
          <h2>Third-Party Services</h2>
          <p>
            The App relies on a small number of infrastructure providers. Each handles a
            narrow, well-defined slice of functionality.
          </p>

          <div class="lm-card">
            <strong>Supabase</strong>
            <span>
              Authentication and relay of end-to-end encrypted Lumi payloads and Kept Shelf
              ciphertext. Supabase sees only ciphertext, never decrypted content. Operated by
              Supabase, Inc.
              <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Supabase Privacy Policy ↗</a>
            </span>
          </div>

          <div class="lm-card">
            <strong>Apple Push Notification service (APNs) &amp; Firebase Cloud Messaging (FCM)</strong>
            <span>
              Used to deliver &ldquo;you got a Lumi&rdquo; push notifications on iOS and
              Android respectively. The notification payload contains no Lumi content &mdash;
              only a generic prompt. Operated by Apple Inc. and Google LLC.
              <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer">Apple Privacy ↗</a>
              ·
              <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy ↗</a>
            </span>
          </div>

          <div class="lm-card">
            <strong>Sentry</strong>
            <span>
              Anonymous crash and performance diagnostics. No Lumi content, account
              identifiers, or message metadata are included in reports. Operated by Functional
              Software, Inc. d/b/a Sentry.
              <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">Sentry Privacy Policy ↗</a>
            </span>
          </div>

          <p class="lm-aside">
            We do not embed advertising SDKs, social-login SDKs that build cross-app profiles,
            or analytics SDKs designed for behavioral targeting.
          </p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">05</div>
          <h2>Data Retention</h2>
          <ul class="lm-list">
            <li><strong>Lumi payloads in transit:</strong> deleted from relay servers immediately after delivery is acknowledged, and at most within 7 days if undelivered</li>
            <li><strong>Kept Shelf items:</strong> retained, end-to-end encrypted, as long as your account is active or until you delete them</li>
            <li><strong>Delivery metadata (who-sent-what-when):</strong> retained for up to 30 days for delivery reliability, then deleted</li>
            <li><strong>Crash diagnostics:</strong> retained for up to 90 days</li>
            <li><strong>Account data:</strong> retained as long as your account is active; deleted within 30 days of account deletion</li>
          </ul>
          <p>
            You can delete individual Kept items or your entire account at any time from
            within the App.
          </p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">06</div>
          <h2>Children's Privacy</h2>
          <p>
            The App is intended for ages 13 and up (or the equivalent minimum age in your
            jurisdiction).
          </p>
          <p>
            Lumi is designed to connect children with their grandparents and other close family
            adults, but minors must use the App under the supervision of a parent or legal
            guardian, who is responsible for managing the child's circle.
          </p>
          <p>
            We do not knowingly collect personal information from children under 13 without
            verifiable parental consent. If you believe a child has provided us with
            information, please contact us and we will delete it promptly.
          </p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">07</div>
          <h2>Your Rights</h2>
          <p>
            Depending on where you live (e.g. EEA / UK under GDPR, California under
            CCPA/CPRA), you may have the right to:
          </p>
          <ul class="lm-list">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your account and all associated data</li>
            <li>Object to or restrict certain processing</li>
            <li>Lodge a complaint with your local data protection authority</li>
          </ul>
          <div class="lm-callout">
            Because Lumi content is end-to-end encrypted, we cannot produce decrypted copies of
            Lumis or Kept Shelf items in response to a data request &mdash; only the encrypted
            ciphertext we hold and the metadata listed in section 02. To export readable
            copies, use the in-app export feature on a device where you are signed in.
          </div>
          <p>
            To exercise any of these rights, contact us at
            <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>.
          </p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">08</div>
          <h2>End-to-End Encryption</h2>
          <ul class="lm-list">
            <li>Lumis are encrypted on the sender's device using a per-recipient key derived from a mutual key exchange performed when the two of you joined each other's circles</li>
            <li>We never have access to your private keys</li>
            <li>Kept Shelf items are encrypted with a key derived from your account; this key never leaves your devices in plaintext</li>
            <li>If you lose access to all of your devices and your account recovery method, we cannot recover your Kept Shelf for you</li>
          </ul>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">09</div>
          <h2>Security</h2>
          <p>
            All data is transmitted over encrypted HTTPS / TLS connections. Encrypted payloads
            sit on infrastructure with industry-standard access controls. Our third-party
            providers maintain industry-standard security infrastructure.
          </p>
          <p>
            No method of transmission over the internet is 100% secure, but we apply
            commercially reasonable measures to protect your information.
          </p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">10</div>
          <h2>International Data Transfers</h2>
          <p>
            The services we use may process data on servers located outside your country of
            residence, including the United States and the European Union. Where required by
            law, these transfers are covered by appropriate safeguards such as EU Standard
            Contractual Clauses.
          </p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">11</div>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material changes will be
            reflected by updating the &ldquo;Last updated&rdquo; date at the top of this page.
            Continued use of the App after changes become effective constitutes acceptance of
            the revised policy.
          </p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">12</div>
          <h2>Contact Us</h2>
          <div class="lm-contact">
            <div class="lm-contact-item"><label>Company</label><span>Gauss Dev</span></div>
            <div class="lm-contact-item"><label>App</label><span>Lumi</span></div>
            <div class="lm-contact-item">
              <label>Email</label>
              <span><a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a></span>
            </div>
            <div class="lm-contact-item">
              <label>Website</label>
              <span><a href="https://gaussdev.com">gaussdev.com</a></span>
            </div>
          </div>
        </section>
      </div>
    </article>

    <!-- ═══════════════ TERMS OF SERVICE ═══════════════ -->
    <article v-else class="lm-page" aria-labelledby="lm-terms-h">
      <header class="lm-hero">
        <div class="lm-hero-tag">Mobile App · A little light for someone you love</div>
        <h1 id="lm-terms-h">Terms of Service</h1>
        <div class="lm-hero-meta">
          <span>Effective date: {{ effectiveDate }}</span>
          <span>Last updated: {{ effectiveDate }}</span>
        </div>
      </header>

      <div class="lm-content">
        <section class="lm-section">
          <div class="lm-section-num">01</div>
          <h2>Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using the Lumi mobile application (the
            &ldquo;App&rdquo;), operated by Gauss Dev (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;), you agree to be bound by these Terms of Service
            (&ldquo;Terms&rdquo;). If you do not agree, do not use the App.
          </p>
          <p>
            We may update these Terms at any time. Continued use of the App after updates are
            posted constitutes your acceptance of the revised Terms.
          </p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">02</div>
          <h2>Description of Service</h2>
          <p>
            Lumi is a mobile application that lets you send ambient, text-free signals &mdash;
            a glow, a haptic pulse, a doodle, or a color &mdash; to a small circle of close
            family members and friends.
          </p>
          <p>The App is intentionally minimalist:</p>
          <ul class="lm-list">
            <li>No text, voice, photo, video, sticker, emoji, or link input</li>
            <li>Circles are capped at 12 mutually-connected people</li>
            <li>Lumis are ephemeral by default; only Kept Shelf items persist</li>
            <li>All Lumi content is end-to-end encrypted</li>
          </ul>
          <p>The App is offered under a paid subscription, generally with a limited free trial.</p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">03</div>
          <h2>Eligibility</h2>
          <p>
            You must be at least 13 years old (or the minimum age in your jurisdiction) to use
            the App. By using the App, you represent that you meet this requirement. Minors
            must use the App under the supervision of a parent or legal guardian, who accepts
            these Terms on their behalf.
          </p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">04</div>
          <h2>User Accounts</h2>
          <ul class="lm-list">
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>You are responsible for all activity that occurs under your account</li>
            <li>
              You must notify us immediately at
              <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a> if you suspect
              unauthorized access
            </li>
            <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
          </ul>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">05</div>
          <h2>Your Content</h2>
          <p>
            You retain full ownership of the Lumis, doodles, Kept Shelf items, and any content
            you create in the App (&ldquo;Your Content&rdquo;).
          </p>
          <p>
            By using the App, you grant Gauss Dev a limited, non-exclusive, royalty-free
            license to process Your Content solely as necessary to deliver it to the
            recipient(s) you have chosen and to sync your Kept Shelf across your own devices.
            Because Your Content is end-to-end encrypted, this license is effectively a license
            to move ciphertext on your behalf. This license does not extend to using Your
            Content for training AI models, advertising, analytics, or any other purpose.
          </p>
          <p>
            You are solely responsible for ensuring Your Content does not violate any
            applicable law or third-party rights.
          </p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">06</div>
          <h2>Acceptable Use</h2>
          <p>You agree not to use the App to:</p>
          <ul class="lm-list">
            <li>Send Lumis to people who have not mutually accepted you into their circle</li>
            <li>Harass, intimidate, stalk, or otherwise harm any person in your circle or attempt to abuse the App's notification system</li>
            <li>Attempt to bypass the 12-person circle cap, the mutual-connection requirement, or any other product constraint</li>
            <li>Attempt to reverse-engineer, decompile, or access non-public areas of the App or its infrastructure</li>
            <li>Attempt to break, weaken, or circumvent the App's end-to-end encryption</li>
            <li>Use the App in any way that could damage, disable, or impair our services or servers</li>
            <li>Circumvent any usage limits, rate limits, or subscription restrictions</li>
            <li>Resell or sublicense the App or any access to it without our written consent</li>
          </ul>
          <p>
            We reserve the right to remove a user from a circle, suspend an account, or
            terminate access if we receive credible reports of harassment or abuse, even though
            we cannot read the content of Lumis themselves.
          </p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">07</div>
          <h2>Subscriptions &amp; Payments</h2>
          <p>
            The App is offered on a subscription basis, generally with a limited free trial.
            Subscriptions are billed through the Apple App Store or Google Play Store according
            to their respective billing terms.
          </p>
          <ul class="lm-list">
            <li>Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period</li>
            <li>You can manage or cancel subscriptions in your App Store / Play Store account settings</li>
            <li>Refunds are handled according to Apple's or Google's refund policies</li>
            <li>We reserve the right to change pricing with reasonable advance notice</li>
          </ul>
          <p>
            If your subscription lapses, your account remains intact but your ability to send
            new Lumis may be limited.
          </p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">08</div>
          <h2>No AI, No Generated Content</h2>
          <p>
            Lumi is, by design, not an AI product. The App does not generate, suggest, or
            transform content on your behalf. Any signal you send originates from a direct
            gesture you made on your device.
          </p>
          <div class="lm-callout">
            We do not use your Lumis, doodles, Kept Shelf items, or behavior to train machine
            learning models &mdash; ours or anyone else's.
          </div>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">09</div>
          <h2>Intellectual Property</h2>
          <p>
            The App, its design, code, branding, and all content created by Gauss Dev are
            protected by copyright, trademark, and other intellectual property laws. Nothing in
            these Terms grants you rights to our intellectual property beyond using the App as
            described herein.
          </p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">10</div>
          <h2>Disclaimers</h2>
          <p>
            The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
            warranties of any kind, express or implied, including but not limited to warranties
            of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p>
            We do not warrant that the App will be uninterrupted, error-free, or that defects
            will be corrected. We do not guarantee that any specific Lumi will be delivered
            within any specific time, that push notifications will always be received, or that
            recovery of an end-to-end-encrypted Kept Shelf is possible after loss of all
            devices and recovery methods.
          </p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">11</div>
          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Gauss Dev and its affiliates
            shall not be liable for any indirect, incidental, special, consequential, or
            punitive damages, including loss of profits, data, or goodwill, arising from your
            use of or inability to use the App.
          </p>
          <p>
            Our total liability for any claim arising from these Terms or your use of the App
            shall not exceed the amount you paid us in the twelve months preceding the claim,
            or USD $50, whichever is greater.
          </p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">12</div>
          <h2>Termination</h2>
          <p>
            You may stop using the App and delete your account at any time. We may suspend or
            terminate your access at any time if we believe you have violated these Terms, with
            or without prior notice.
          </p>
          <p>
            Upon termination, your right to use the App ceases immediately. Sections 5, 9, 10,
            11, and 13 survive termination.
          </p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">13</div>
          <h2>Governing Law &amp; Disputes</h2>
          <p>
            These Terms are governed by the laws of the Republic of Uzbekistan, without regard
            to conflict of law principles. Any dispute arising from these Terms shall first be
            addressed through good-faith negotiation. If unresolved, disputes shall be
            submitted to the competent courts of Tashkent, Uzbekistan.
          </p>
          <p>
            Notwithstanding the above, we reserve the right to seek injunctive relief in any
            jurisdiction to protect our intellectual property.
          </p>
        </section>

        <section class="lm-section">
          <div class="lm-section-num">14</div>
          <h2>Contact Us</h2>
          <p>For questions about these Terms:</p>
          <div class="lm-contact">
            <div class="lm-contact-item"><label>Company</label><span>Gauss Dev</span></div>
            <div class="lm-contact-item"><label>App</label><span>Lumi</span></div>
            <div class="lm-contact-item">
              <label>Email</label>
              <span><a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a></span>
            </div>
            <div class="lm-contact-item">
              <label>Website</label>
              <span><a href="https://gaussdev.com">gaussdev.com</a></span>
            </div>
          </div>
        </section>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { useSeo } from '@/composables/useSeo'
import { findPrivacyApp } from '@/data/privacyApps'

const route = useRoute()

// `mode` is driven by the URL — /privacy/lumi shows Privacy, /terms/lumi shows Terms.
// Tab links are real <router-link>s, so each tab is a distinct, indexable URL.
const mode = computed<'privacy' | 'terms'>(() =>
  route.path.startsWith('/terms') ? 'terms' : 'privacy',
)

const lumi = findPrivacyApp('lumi')
const effectiveDate = lumi?.effectiveDate ?? 'June 10, 2026'
const contactEmail = lumi?.contactEmail ?? 'general@gaussdev.com'

// Per-tab SEO via the shared composable, then load Fraunces (used only on this page)
// via useHead so it tears down when the user navigates away.
useSeo({
  path: route.path,
  title:
    mode.value === 'terms'
      ? 'Lumi — Terms of Service'
      : 'Lumi — Privacy Policy',
  description:
    mode.value === 'terms'
      ? 'Terms of Service for Lumi — the no-text, end-to-end encrypted "thinking of you" app for close family circles, by Gauss Dev.'
      : 'Privacy Policy for Lumi — the no-text, end-to-end encrypted "thinking of you" app. No ads, no data harvesting, no AI training.',
  type: 'article',
})
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500&display=swap',
    },
  ],
})
</script>

<style scoped>
/* ── Lumi-scoped tokens (warm amber, override the gaussdev palette for this page only) ── */
.lm-shell {
  --lm-bg: #0e0c08;
  --lm-surface: #16130d;
  --lm-border: #2a2418;
  --lm-accent: #f4b860;
  --lm-accent-soft: rgba(244, 184, 96, 0.12);
  --lm-text: #f0e8d8;
  --lm-muted: #8a8270;
  --lm-heading-font: 'Fraunces', Georgia, serif;
  --lm-body-font: 'Inter', system-ui, sans-serif;

  background: var(--lm-bg);
  color: var(--lm-text);
  font-family: var(--lm-body-font);
  font-size: 15px;
  line-height: 1.75;
  font-weight: 300;
  min-height: 100vh;
}

/* ── Brand nav ── */
.lm-nav {
  position: sticky;
  top: 0;
  z-index: 5;
  background: rgba(14, 12, 8, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--lm-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 56px;
}

.lm-brand {
  font-family: var(--lm-heading-font);
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--lm-text);
  text-decoration: none;
  letter-spacing: 0.01em;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.lm-brand-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--lm-accent);
  box-shadow: 0 0 12px rgba(244, 184, 96, 0.6);
}

.lm-tabs {
  display: flex;
  gap: 0;
  background: var(--lm-surface);
  border: 1px solid var(--lm-border);
  border-radius: 8px;
  overflow: hidden;
}

.lm-tab {
  padding: 6px 18px;
  font-size: 13px;
  font-weight: 500;
  background: transparent;
  color: var(--lm-muted);
  font-family: var(--lm-body-font);
  text-decoration: none;
  border: 0;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  min-height: auto;  /* override global 44px floor — these are nav tabs, not primary CTAs */
  display: inline-flex;
  align-items: center;
}

.lm-tab--active {
  background: var(--lm-accent);
  color: #1a1306;
}

.lm-tab:hover:not(.lm-tab--active) {
  color: var(--lm-text);
  background: var(--lm-accent-soft);
}

/* ── Hero ── */
.lm-hero {
  padding: 72px 2rem 48px;
  max-width: 760px;
  margin: 0 auto;
  border-bottom: 1px solid var(--lm-border);
}

.lm-hero-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--lm-accent);
  background: var(--lm-accent-soft);
  border: 1px solid rgba(244, 184, 96, 0.25);
  border-radius: 4px;
  padding: 3px 10px;
  margin-bottom: 20px;
}

.lm-hero h1 {
  font-family: var(--lm-heading-font);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 500;
  line-height: 1.2;
  margin: 0 0 16px;
  color: #fff;
  letter-spacing: -0.01em;
}

.lm-hero-meta {
  font-size: 13px;
  color: var(--lm-muted);
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.lm-hero-meta span::before {
  content: '·';
  margin-right: 8px;
  opacity: 0.4;
}

.lm-hero-meta span:first-child::before {
  display: none;
}

/* ── Body ── */
.lm-content {
  max-width: 760px;
  margin: 0 auto;
  padding: 48px 2rem 96px;
}

.lm-section {
  margin-bottom: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--lm-border);
}

.lm-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.lm-section-num {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--lm-accent);
  margin-bottom: 10px;
}

.lm-section h2 {
  font-family: var(--lm-heading-font);
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  margin: 0 0 20px;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.lm-section p {
  color: var(--lm-text);
  margin: 0 0 14px;
  opacity: 0.88;
}

.lm-section p:last-child {
  margin-bottom: 0;
}

.lm-subhead {
  color: #fff !important;
  font-weight: 500;
  opacity: 1 !important;
  margin-top: 20px !important;
}

.lm-aside {
  margin-top: 16px !important;
}

/* lists */
.lm-list {
  list-style: none;
  margin: 16px 0;
  padding: 0;
}

.lm-list li {
  padding: 10px 0 10px 20px;
  position: relative;
  border-bottom: 1px solid var(--lm-border);
  color: var(--lm-text);
  opacity: 0.88;
}

.lm-list li:last-child {
  border-bottom: none;
}

.lm-list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--lm-accent);
  font-size: 12px;
  top: 11px;
}

.lm-list strong {
  color: #fff;
  font-weight: 500;
}

/* callout */
.lm-callout {
  background: var(--lm-accent-soft);
  border: 1px solid rgba(244, 184, 96, 0.25);
  border-left: 3px solid var(--lm-accent);
  border-radius: 6px;
  padding: 16px 20px;
  margin: 20px 0;
  font-size: 14px;
  color: var(--lm-text);
  opacity: 0.92;
}

/* third-party card */
.lm-card {
  background: var(--lm-surface);
  border: 1px solid var(--lm-border);
  border-radius: 8px;
  padding: 16px 20px;
  margin: 12px 0;
}

.lm-card strong {
  display: block;
  color: #fff;
  font-weight: 500;
  margin-bottom: 4px;
}

.lm-card span {
  font-size: 13px;
  color: var(--lm-muted);
}

/* links */
.lm-content a {
  color: var(--lm-accent);
  text-decoration: none;
}

.lm-content a:hover {
  text-decoration: underline;
}

/* contact block */
.lm-contact {
  background: var(--lm-surface);
  border: 1px solid var(--lm-border);
  border-radius: 10px;
  padding: 24px 28px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
}

.lm-contact-item label {
  display: block;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--lm-muted);
  margin-bottom: 4px;
}

.lm-contact-item span {
  font-size: 14px;
  color: var(--lm-text);
}

/* ── Responsive ── */
@media (max-width: 600px) {
  .lm-nav {
    padding: 0 1rem;
  }
  .lm-hero,
  .lm-content {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
  .lm-tab {
    padding: 6px 12px;
    font-size: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .lm-tab {
    transition: none;
  }
}
</style>
