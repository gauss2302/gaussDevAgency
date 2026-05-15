<template>
  <div class="hv-shell">
    <!-- ── Inline brand nav (Havamind brand + Privacy/Terms tabs) ── -->
    <nav class="hv-nav" aria-label="Havamind legal navigation">
      <router-link to="/privacy/havamind" class="hv-brand">Havamind</router-link>
      <div class="hv-tabs" role="tablist">
        <router-link
          to="/privacy/havamind"
          class="hv-tab"
          :class="{ 'hv-tab--active': mode === 'privacy' }"
          role="tab"
          :aria-selected="mode === 'privacy'"
        >
          Privacy Policy
        </router-link>
        <router-link
          to="/terms/havamind"
          class="hv-tab"
          :class="{ 'hv-tab--active': mode === 'terms' }"
          role="tab"
          :aria-selected="mode === 'terms'"
        >
          Terms of Service
        </router-link>
      </div>
    </nav>

    <!-- ═══════════════ PRIVACY POLICY ═══════════════ -->
    <article v-if="mode === 'privacy'" class="hv-page" aria-labelledby="hv-privacy-h">
      <header class="hv-hero">
        <div class="hv-hero-tag">Mobile App · AI Notes</div>
        <h1 id="hv-privacy-h">Privacy Policy</h1>
        <div class="hv-hero-meta">
          <span>Effective date: {{ effectiveDate }}</span>
          <span>Last updated: {{ effectiveDate }}</span>
        </div>
      </header>

      <div class="hv-content">
        <section class="hv-section">
          <div class="hv-section-num">01</div>
          <h2>Overview</h2>
          <p>
            This Privacy Policy describes how Gauss Dev (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;) collects, uses, and protects information in connection with
            the Havamind AI Notes mobile application (the &ldquo;App&rdquo;) for iOS and
            Android.
          </p>
          <p>
            By installing or using the App, you agree to the practices described here. We are
            committed to handling your voice data, notes, and personal information with care.
          </p>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">02</div>
          <h2>Information We Collect</h2>
          <p>We collect only what is necessary to provide the App's core functionality.</p>

          <p class="hv-subhead">Voice &amp; Audio Data</p>
          <ul class="hv-list">
            <li>Audio recordings you create within the App to generate notes</li>
            <li>Transcriptions produced from your recordings</li>
            <li>AI-processed text derived from your voice input (e.g. refined plans, structured notes)</li>
          </ul>
          <div class="hv-callout">
            Audio recordings are processed to produce transcriptions and then deleted from our
            servers within 24 hours. We do not store raw audio long-term.
          </div>

          <p class="hv-subhead">Account Data</p>
          <ul class="hv-list">
            <li>Email address (if you register or sign in)</li>
            <li>Authentication tokens</li>
          </ul>

          <p class="hv-subhead">Usage &amp; Diagnostics</p>
          <ul class="hv-list">
            <li>Anonymous device identifiers (resettable via OS settings)</li>
            <li>Device model, OS version, app version</li>
            <li>Feature usage events and session length</li>
            <li>Crash and performance diagnostics</li>
            <li>Approximate region (country / time zone) inferred from IP, not stored</li>
          </ul>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">03</div>
          <h2>How We Use Your Information</h2>
          <ul class="hv-list">
            <li>To transcribe your voice recordings into text notes</li>
            <li>To apply AI refinement and structuring to your notes (upon your request)</li>
            <li>To sync your notes across your devices</li>
            <li>To diagnose crashes, bugs, and performance issues</li>
            <li>To understand aggregate feature usage and improve the App</li>
          </ul>
          <p>
            We do not sell, rent, or share your notes, recordings, or personal data with
            advertisers, data brokers, or third parties for marketing purposes.
          </p>
          <p>
            We do not use your notes or voice data to train AI models without your explicit,
            opt-in consent.
          </p>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">04</div>
          <h2>Third-Party Services</h2>
          <p>The App relies on the following third-party services:</p>

          <div class="hv-card">
            <strong>OpenAI Whisper / Speech-to-Text API</strong>
            <span>
              Used to transcribe your voice recordings. Audio is transmitted over encrypted
              HTTPS. Operated by OpenAI, LLC.
              <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">OpenAI Privacy Policy ↗</a>
            </span>
          </div>

          <div class="hv-card">
            <strong>OpenAI GPT / LLM API</strong>
            <span>
              Used to refine and structure your transcribed notes. Text is transmitted over
              encrypted HTTPS. Operated by OpenAI, LLC.
            </span>
          </div>

          <div class="hv-card">
            <strong>Supabase</strong>
            <span>
              Used for database storage, authentication, and cloud sync of your notes.
              Operated by Supabase, Inc.
              <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Supabase Privacy Policy ↗</a>
            </span>
          </div>

          <div class="hv-card">
            <strong>Google Firebase Analytics &amp; Crashlytics</strong>
            <span>
              Used for anonymous usage analytics and crash reporting. Operated by Google LLC.
              <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy ↗</a>
            </span>
          </div>

          <p class="hv-aside">
            These providers process data on our behalf under their own privacy terms. We do
            not embed advertising SDKs in the App.
          </p>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">05</div>
          <h2>Data Retention</h2>
          <ul class="hv-list">
            <li><strong>Audio recordings:</strong> deleted from our servers within 24 hours of transcription</li>
            <li><strong>Transcriptions &amp; notes:</strong> retained as long as your account is active, or until you delete them</li>
            <li><strong>Analytics events:</strong> retained for up to 14 months (provider default), then deleted</li>
            <li><strong>Crash diagnostics:</strong> retained for up to 90 days</li>
          </ul>
          <p>You can delete individual notes or your entire account at any time from within the App.</p>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">06</div>
          <h2>Children's Privacy</h2>
          <p>
            The App is not directed to children under 13 (or the equivalent minimum age in
            your jurisdiction). We do not knowingly collect personal information from
            children. If you believe a child has provided us with information, please contact
            us and we will delete it promptly.
          </p>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">07</div>
          <h2>Your Rights</h2>
          <p>
            Depending on where you live (e.g. EEA / UK under GDPR, California under
            CCPA/CPRA), you may have the right to:
          </p>
          <ul class="hv-list">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your account and all associated data</li>
            <li>Opt out of analytics collection (see section 8)</li>
            <li>Object to or restrict certain processing</li>
            <li>Lodge a complaint with your local data protection authority</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at
            <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>.
          </p>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">08</div>
          <h2>Opting Out of Analytics</h2>
          <p>You can disable or reset analytics at any time:</p>
          <ul class="hv-list">
            <li><strong>iOS:</strong> Settings → Privacy &amp; Security → Tracking, and Settings → Privacy &amp; Security → Apple Advertising → turn off Personalized Ads</li>
            <li><strong>Android:</strong> Settings → Google → Ads → &ldquo;Delete advertising ID&rdquo;, or reset it at any time</li>
          </ul>
          <p>Uninstalling the App stops all further data collection from your device.</p>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">09</div>
          <h2>Security</h2>
          <p>
            All data is transmitted over encrypted HTTPS / TLS connections. Notes are stored
            in encrypted Supabase databases with access controls. Our third-party providers
            maintain industry-standard security infrastructure.
          </p>
          <p>
            No method of transmission over the internet is 100% secure, but we apply
            commercially reasonable measures to protect your information.
          </p>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">10</div>
          <h2>International Data Transfers</h2>
          <p>
            The services we use may process data on servers located outside your country of
            residence, including the United States. Where required by law, these transfers
            are covered by appropriate safeguards such as EU Standard Contractual Clauses.
          </p>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">11</div>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material changes will be
            reflected by updating the &ldquo;Last updated&rdquo; date at the top of this page.
            Continued use of the App after changes become effective constitutes acceptance of
            the revised policy.
          </p>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">12</div>
          <h2>Contact Us</h2>
          <div class="hv-contact">
            <div class="hv-contact-item"><label>Company</label><span>Gauss Dev</span></div>
            <div class="hv-contact-item"><label>App</label><span>Havamind AI Notes</span></div>
            <div class="hv-contact-item">
              <label>Email</label>
              <span><a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a></span>
            </div>
            <div class="hv-contact-item">
              <label>Website</label>
              <span><a href="https://gaussdev.com">gaussdev.com</a></span>
            </div>
          </div>
        </section>
      </div>
    </article>

    <!-- ═══════════════ TERMS OF SERVICE ═══════════════ -->
    <article v-else class="hv-page" aria-labelledby="hv-terms-h">
      <header class="hv-hero">
        <div class="hv-hero-tag">Mobile App · AI Notes</div>
        <h1 id="hv-terms-h">Terms of Service</h1>
        <div class="hv-hero-meta">
          <span>Effective date: {{ effectiveDate }}</span>
          <span>Last updated: {{ effectiveDate }}</span>
        </div>
      </header>

      <div class="hv-content">
        <section class="hv-section">
          <div class="hv-section-num">01</div>
          <h2>Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using the Havamind AI Notes mobile application
            (the &ldquo;App&rdquo;), operated by Gauss Dev (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;), you agree to be bound by these Terms of Service
            (&ldquo;Terms&rdquo;). If you do not agree, do not use the App.
          </p>
          <p>
            We may update these Terms at any time. Continued use of the App after updates are
            posted constitutes your acceptance of the revised Terms.
          </p>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">02</div>
          <h2>Description of Service</h2>
          <p>
            Havamind AI Notes is a mobile application that allows you to capture ideas and
            notes through voice input, which are then transcribed and optionally refined
            using artificial intelligence. The App may include free and paid subscription
            tiers.
          </p>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">03</div>
          <h2>Eligibility</h2>
          <p>
            You must be at least 13 years old (or the minimum age in your jurisdiction) to
            use the App. By using the App, you represent that you meet this requirement. If
            you are using the App on behalf of an organization, you represent that you have
            authority to bind that organization to these Terms.
          </p>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">04</div>
          <h2>User Accounts</h2>
          <ul class="hv-list">
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

        <section class="hv-section">
          <div class="hv-section-num">05</div>
          <h2>Your Content</h2>
          <p>
            You retain full ownership of the notes, recordings, and content you create in the
            App (&ldquo;Your Content&rdquo;).
          </p>
          <p>
            By using the App, you grant Gauss Dev a limited, non-exclusive, royalty-free
            license to process Your Content solely as necessary to provide the App's
            functionality (transcription, AI refinement, sync, backup). This license does not
            extend to using Your Content for training AI models, advertising, or any other
            purpose.
          </p>
          <p>
            You are solely responsible for ensuring Your Content does not violate any
            applicable law or third-party rights.
          </p>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">06</div>
          <h2>Acceptable Use</h2>
          <p>You agree not to use the App to:</p>
          <ul class="hv-list">
            <li>Record or process content that infringes third-party intellectual property rights</li>
            <li>Generate, store, or distribute content that is unlawful, harmful, harassing, or fraudulent</li>
            <li>Attempt to reverse-engineer, decompile, or access non-public areas of the App or its infrastructure</li>
            <li>Use the App in any way that could damage, disable, or impair our services or servers</li>
            <li>Circumvent any usage limits, rate limits, or subscription restrictions</li>
            <li>Resell or sublicense the App or its AI outputs without our written consent</li>
          </ul>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">07</div>
          <h2>Subscriptions &amp; Payments</h2>
          <p>
            The App may offer free and paid subscription tiers. Paid features are billed
            through the Apple App Store or Google Play Store according to their respective
            billing terms.
          </p>
          <ul class="hv-list">
            <li>Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period</li>
            <li>You can manage or cancel subscriptions in your App Store / Play Store account settings</li>
            <li>Refunds are handled according to Apple's or Google's refund policies</li>
            <li>We reserve the right to change pricing with reasonable advance notice</li>
          </ul>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">08</div>
          <h2>AI-Generated Content</h2>
          <p>
            The App uses third-party AI services (including OpenAI) to process and refine
            your notes. AI-generated outputs are provided for convenience and may not always
            be accurate, complete, or appropriate for all purposes.
          </p>
          <div class="hv-callout">
            AI outputs are not a substitute for professional advice (legal, medical,
            financial, etc.). You are responsible for reviewing and verifying any
            AI-generated content before relying on it.
          </div>
          <p>
            We do not guarantee the accuracy, reliability, or fitness for a particular
            purpose of any AI-generated output.
          </p>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">09</div>
          <h2>Intellectual Property</h2>
          <p>
            The App, its design, code, branding, and all content created by Gauss Dev are
            protected by copyright, trademark, and other intellectual property laws. Nothing
            in these Terms grants you rights to our intellectual property beyond using the
            App as described herein.
          </p>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">10</div>
          <h2>Disclaimers</h2>
          <p>
            The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
            warranties of any kind, express or implied, including but not limited to
            warranties of merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>
          <p>
            We do not warrant that the App will be uninterrupted, error-free, or that defects
            will be corrected. We are not responsible for the accuracy of transcriptions or
            AI-generated content.
          </p>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">11</div>
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

        <section class="hv-section">
          <div class="hv-section-num">12</div>
          <h2>Termination</h2>
          <p>
            You may stop using the App and delete your account at any time. We may suspend or
            terminate your access at any time if we believe you have violated these Terms,
            with or without prior notice.
          </p>
          <p>
            Upon termination, your right to use the App ceases immediately. Sections 5, 9,
            10, 11, and 13 survive termination.
          </p>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">13</div>
          <h2>Governing Law &amp; Disputes</h2>
          <p>
            These Terms are governed by the laws of the Republic of Uzbekistan, without
            regard to conflict of law principles. Any dispute arising from these Terms shall
            first be addressed through good-faith negotiation. If unresolved, disputes shall
            be submitted to the competent courts of Tashkent, Uzbekistan.
          </p>
          <p>
            Notwithstanding the above, we reserve the right to seek injunctive relief in any
            jurisdiction to protect our intellectual property.
          </p>
        </section>

        <section class="hv-section">
          <div class="hv-section-num">14</div>
          <h2>Contact Us</h2>
          <p>For questions about these Terms:</p>
          <div class="hv-contact">
            <div class="hv-contact-item"><label>Company</label><span>Gauss Dev</span></div>
            <div class="hv-contact-item"><label>App</label><span>Havamind AI Notes</span></div>
            <div class="hv-contact-item">
              <label>Email</label>
              <span><a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a></span>
            </div>
            <div class="hv-contact-item">
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

// `mode` is driven by the URL — /privacy/havamind shows Privacy, /terms/havamind shows Terms.
// Tab links are real <router-link>s, so each tab is a distinct, indexable URL.
const mode = computed<'privacy' | 'terms'>(() =>
  route.path.startsWith('/terms') ? 'terms' : 'privacy',
)

const havamind = findPrivacyApp('havamind')
const effectiveDate = havamind?.effectiveDate ?? 'May 15, 2026'
const contactEmail = havamind?.contactEmail ?? 'general@gaussdev.com'

// Per-tab SEO via the shared composable, then load Playfair Display (used only on this page)
// via useHead so it tears down when the user navigates away.
useSeo({
  path: route.path,
  title:
    mode.value === 'terms'
      ? 'Havamind AI Notes — Terms of Service'
      : 'Havamind AI Notes — Privacy Policy',
  description:
    mode.value === 'terms'
      ? 'Terms of Service for Havamind AI Notes — the voice-first AI notes app by Gauss Dev. Plain-English, no dark patterns.'
      : 'Privacy Policy for Havamind AI Notes — the voice-first AI notes app by Gauss Dev. Audio deleted within 24h, no training on your data.',
  type: 'article',
})
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap',
    },
  ],
})
</script>

<style scoped>
/* ── Havamind-scoped tokens (override the gaussdev palette for this page only) ── */
.hv-shell {
  --hv-bg: #0d0d10;
  --hv-surface: #14141a;
  --hv-border: #1e1e28;
  --hv-accent: #7c6af7;
  --hv-accent-soft: rgba(124, 106, 247, 0.12);
  --hv-text: #e8e6f0;
  --hv-muted: #7a7890;
  --hv-heading-font: 'Playfair Display', Georgia, serif;
  --hv-body-font: 'DM Sans', 'Inter', system-ui, sans-serif;

  background: var(--hv-bg);
  color: var(--hv-text);
  font-family: var(--hv-body-font);
  font-size: 15px;
  line-height: 1.75;
  font-weight: 300;
  min-height: 100vh;
}

/* ── Brand nav ── */
.hv-nav {
  position: sticky;
  top: 0;
  z-index: 5;
  background: rgba(13, 13, 16, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--hv-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 56px;
}

.hv-brand {
  font-family: var(--hv-heading-font);
  font-size: 1.1rem;
  color: var(--hv-text);
  text-decoration: none;
  letter-spacing: 0.02em;
}

.hv-tabs {
  display: flex;
  gap: 0;
  background: var(--hv-surface);
  border: 1px solid var(--hv-border);
  border-radius: 8px;
  overflow: hidden;
}

.hv-tab {
  padding: 6px 18px;
  font-size: 13px;
  font-weight: 500;
  background: transparent;
  color: var(--hv-muted);
  font-family: var(--hv-body-font);
  text-decoration: none;
  border: 0;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  min-height: auto;  /* override global 44px floor — these are nav tabs, not primary CTAs */
  display: inline-flex;
  align-items: center;
}

.hv-tab--active {
  background: var(--hv-accent);
  color: #fff;
}

.hv-tab:hover:not(.hv-tab--active) {
  color: var(--hv-text);
  background: var(--hv-accent-soft);
}

/* ── Hero ── */
.hv-hero {
  padding: 72px 2rem 48px;
  max-width: 760px;
  margin: 0 auto;
  border-bottom: 1px solid var(--hv-border);
}

.hv-hero-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--hv-accent);
  background: var(--hv-accent-soft);
  border: 1px solid rgba(124, 106, 247, 0.25);
  border-radius: 4px;
  padding: 3px 10px;
  margin-bottom: 20px;
}

.hv-hero h1 {
  font-family: var(--hv-heading-font);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 600;
  line-height: 1.2;
  margin: 0 0 16px;
  color: #fff;
  letter-spacing: -0.005em;
}

.hv-hero-meta {
  font-size: 13px;
  color: var(--hv-muted);
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.hv-hero-meta span::before {
  content: '·';
  margin-right: 8px;
  opacity: 0.4;
}

.hv-hero-meta span:first-child::before {
  display: none;
}

/* ── Body ── */
.hv-content {
  max-width: 760px;
  margin: 0 auto;
  padding: 48px 2rem 96px;
}

.hv-section {
  margin-bottom: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--hv-border);
}

.hv-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.hv-section-num {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--hv-accent);
  margin-bottom: 10px;
}

.hv-section h2 {
  font-family: var(--hv-heading-font);
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 20px;
  line-height: 1.3;
  letter-spacing: -0.005em;
}

.hv-section p {
  color: var(--hv-text);
  margin: 0 0 14px;
  opacity: 0.88;
}

.hv-section p:last-child {
  margin-bottom: 0;
}

.hv-subhead {
  color: #fff !important;
  font-weight: 500;
  opacity: 1 !important;
  margin-top: 20px !important;
}

.hv-aside {
  margin-top: 16px !important;
}

/* lists */
.hv-list {
  list-style: none;
  margin: 16px 0;
  padding: 0;
}

.hv-list li {
  padding: 10px 0 10px 20px;
  position: relative;
  border-bottom: 1px solid var(--hv-border);
  color: var(--hv-text);
  opacity: 0.88;
}

.hv-list li:last-child {
  border-bottom: none;
}

.hv-list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--hv-accent);
  font-size: 12px;
  top: 11px;
}

.hv-list strong {
  color: #fff;
  font-weight: 500;
}

/* callout */
.hv-callout {
  background: var(--hv-accent-soft);
  border: 1px solid rgba(124, 106, 247, 0.25);
  border-left: 3px solid var(--hv-accent);
  border-radius: 6px;
  padding: 16px 20px;
  margin: 20px 0;
  font-size: 14px;
  color: var(--hv-text);
  opacity: 0.92;
}

/* third-party card */
.hv-card {
  background: var(--hv-surface);
  border: 1px solid var(--hv-border);
  border-radius: 8px;
  padding: 16px 20px;
  margin: 12px 0;
}

.hv-card strong {
  display: block;
  color: #fff;
  font-weight: 500;
  margin-bottom: 4px;
}

.hv-card span {
  font-size: 13px;
  color: var(--hv-muted);
}

/* links */
.hv-content a {
  color: var(--hv-accent);
  text-decoration: none;
}

.hv-content a:hover {
  text-decoration: underline;
}

/* contact block */
.hv-contact {
  background: var(--hv-surface);
  border: 1px solid var(--hv-border);
  border-radius: 10px;
  padding: 24px 28px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
}

.hv-contact-item label {
  display: block;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--hv-muted);
  margin-bottom: 4px;
}

.hv-contact-item span {
  font-size: 14px;
  color: var(--hv-text);
}

/* ── Responsive ── */
@media (max-width: 600px) {
  .hv-nav {
    padding: 0 1rem;
  }
  .hv-hero,
  .hv-content {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
  .hv-tab {
    padding: 6px 12px;
    font-size: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hv-tab {
    transition: none;
  }
}
</style>
