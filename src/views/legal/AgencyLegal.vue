<template>
  <div class="page">
    <header class="pg-header">
      <div class="pg-header__inner">
        <p class="pg-header__eyebrow" :class="{ visible: mounted }">Legal</p>
        <h1 class="pg-header__title" :class="{ visible: mounted }">
          {{ isTerms ? 'Terms of Service' : 'Privacy Policy' }}
        </h1>
        <p class="pg-header__meta" :class="{ visible: mounted }">
          Effective date: November 15, 2026
        </p>
        <nav class="doc-nav" :class="{ visible: mounted }" aria-label="Legal documents">
          <router-link to="/privacy" :aria-current="isTerms ? undefined : 'page'"
            >Privacy Policy</router-link
          >
          <router-link to="/terms" :aria-current="isTerms ? 'page' : undefined"
            >Terms of Service</router-link
          >
        </nav>
      </div>
    </header>

    <article class="doc">
      <div v-if="!isTerms" class="doc__inner">
        <section class="doc__section">
          <p>
            This Privacy Policy describes how Gauss Dev (“Gauss Dev,” “we,” “us,” or “our”)
            collects, uses, stores, and shares information when you visit
            <a class="link" href="https://gaussdev.com/">https://gaussdev.com/</a>, use our mobile
            apps and tools, or use GaussDev Ads Assistant.
          </p>
          <p>
            Gauss Dev is a software development agency and maker of mobile apps and tools, operated
            by Nick Shilov (Nikita Shilov) and based in Tashkent, Uzbekistan. You can contact us at
            <a class="link" href="mailto:general@gaussdev.com">general@gaussdev.com</a>.
          </p>
          <p>This policy is provided for transparency. It is not legal advice.</p>
        </section>

        <section class="doc__section">
          <h2>1. Information we collect</h2>
          <h3>Information you give us</h3>
          <p>
            You may give us information when you contact us, request work, create an account, or use
            our tools. This can include your name, email address, company name, and the contents of
            your messages.
          </p>
          <h3>Website and app usage</h3>
          <p>
            When you visit our website or use our apps, we may automatically collect technical
            information such as your IP address, browser or device type, operating system, pages or
            screens viewed, and approximate location derived from your IP address. We may use
            cookies or similar technologies for basic site function, to remember preferences, and to
            understand how the site or app is used. You can control cookies through your browser
            settings. Blocking some cookies may affect how the site works.
          </p>
          <p>
            We do not invent or list specific analytics or advertising vendors here. If we use such
            tools, they process data only as needed to operate and improve our website, apps, and
            services.
          </p>
          <h3>Google Ads account data (GaussDev Ads Assistant)</h3>
          <p>
            GaussDev Ads Assistant is an internal tool that helps the account owner manage their own
            Google Ads accounts. When you authorize the app with your Google account, it accesses
            Google Ads account data through the Google Ads API under the scope
            <a class="link" href="https://www.googleapis.com/auth/adwords"
              >https://www.googleapis.com/auth/adwords</a
            >.
          </p>
          <p>This may include:</p>
          <ul>
            <li>
              Google Ads account and manager-account identifiers, names, status, currency, and time
              zone
            </li>
            <li>Campaign, ad group, ad, and keyword structure and settings</li>
            <li>Performance reports, such as impressions, clicks, conversions, and spend</li>
            <li>
              Keyword research data available through Google Ads, such as search volume and bid
              estimates
            </li>
            <li>
              Billing and budget settings visible in the authorized accounts, to the extent the API
              provides them
            </li>
          </ul>
          <p>
            The app requests only the access needed to provide reporting, keyword research, and
            campaign management to the account owner. It does not request access to your Gmail,
            Google Drive, YouTube, or other unrelated Google services.
          </p>
          <h3>Meta advertising data</h3>
          <p>
            If you connect a Meta (Facebook or Instagram) ad account, we may access advertising
            account data through the Meta Marketing API, such as ad account identifiers, campaign
            structure, and performance reports, solely to provide the same kinds of reporting and
            management services to the account owner.
          </p>
        </section>

        <section class="doc__section">
          <h2>2. How we use information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and improve our website, apps, and tools</li>
            <li>Respond to inquiries and deliver professional services</li>
            <li>
              Provide GaussDev Ads Assistant features: reporting, keyword research, and campaign
              management for accounts you authorize
            </li>
            <li>Maintain security, prevent abuse, and comply with the law</li>
          </ul>
          <p>
            Google user data obtained through Google APIs is used only to provide and improve these
            features for the owner of the authorized Google Ads accounts. We do not use Google user
            data to serve advertisements. We do not use it to train generalized AI or
            machine-learning models. We do not sell it.
          </p>
        </section>

        <section class="doc__section">
          <h2>3. Google API Services User Data Policy (Limited Use)</h2>
          <p>
            GaussDev Ads Assistant’s use and transfer of information received from Google APIs will
            adhere to the
            <a class="link" href="https://developers.google.com/terms/api-services-user-data-policy"
              >Google API Services User Data Policy</a
            >, including the Limited Use requirements.
          </p>
        </section>

        <section class="doc__section">
          <h2>4. How we share information</h2>
          <p>
            We do not sell your personal information. We do not sell or share Google user data for
            advertising or for any independent commercial purpose.
          </p>
          <p>We may share information only:</p>
          <ul>
            <li>
              With service providers who help us operate the website, apps, or tools, and who are
              allowed to use the information only to perform work for us
            </li>
            <li>
              When you ask us to, or when it is necessary to provide the service you requested
            </li>
            <li>
              If required by law, legal process, or to protect the rights, safety, or property of
              Gauss Dev, our users, or others
            </li>
            <li>
              In connection with a merger, sale, or transfer of assets, if that ever occurs, subject
              to this policy or equivalent protections
            </li>
          </ul>
          <p>
            Google user data is not transferred to third parties except as needed to provide the
            requested service to the account owner, or as required by law.
          </p>
        </section>

        <section class="doc__section">
          <h2>5. How we store and protect information</h2>
          <p>
            We store information on systems we control or on trusted infrastructure providers.
            Access is limited to people who need it to operate or support the service.
          </p>
          <p>
            We use reasonable technical and organizational measures to protect information,
            including encrypted connections (HTTPS), restricted access to credentials and tokens,
            and storage of authorization tokens in access-controlled locations. No method of storage
            or transmission is completely secure, and we cannot guarantee absolute security.
          </p>
          <p>
            OAuth tokens that allow access to your Google or Meta accounts are stored securely and
            used only to provide the authorized service. We do not share these tokens with
            unauthorized parties.
          </p>
        </section>

        <section class="doc__section">
          <h2>6. Retention and deletion</h2>
          <p>
            We keep information only as long as needed for the purposes described in this policy,
            including to provide the service, meet legal obligations, resolve disputes, and enforce
            our agreements.
          </p>
          <p>
            You can revoke GaussDev Ads Assistant’s access to your Google account at any time at
            <a class="link" href="https://myaccount.google.com/permissions"
              >https://myaccount.google.com/permissions</a
            >. After you revoke access, the app will no longer be able to access your Google Ads
            data.
          </p>
          <p>
            To request deletion of data we hold about you, including Google Ads data obtained
            through the app, email
            <a class="link" href="mailto:general@gaussdev.com">general@gaussdev.com</a>. We will
            delete or anonymize that data within a reasonable time, unless we are required to keep
            it by law. Revoking access in your Google account does not automatically delete copies
            we may already have stored; please email us if you also want those copies deleted.
          </p>
          <p>
            You may likewise disconnect Meta access and request deletion of related data by emailing
            us.
          </p>
        </section>

        <section class="doc__section">
          <h2>7. International transfers</h2>
          <p>
            Gauss Dev is based in Tashkent, Uzbekistan. The information we collect may be processed
            in Uzbekistan or in other countries where we or our infrastructure providers operate.
            Those countries may have different data-protection laws than your own. Where we transfer
            information, we take steps appropriate to the circumstances to protect it.
          </p>
        </section>

        <section class="doc__section">
          <h2>8. Your rights</h2>
          <p>
            Depending on where you live, you may have the right to request access to the personal
            information we hold about you, to correct it, to delete it, to restrict or object to
            certain processing, or to receive a copy of it. To make a request, email
            <a class="link" href="mailto:general@gaussdev.com">general@gaussdev.com</a>. We may need
            to verify your identity before fulfilling the request.
          </p>
          <p>
            You may also have the right to lodge a complaint with a data-protection authority in
            your country.
          </p>
        </section>

        <section class="doc__section">
          <h2>9. Children’s privacy</h2>
          <p>
            Our website, apps, and tools are not directed at children under 13, and we do not
            knowingly collect personal information from children under 13. If you believe a child
            has provided us with personal information, contact us and we will delete it.
          </p>
        </section>

        <section class="doc__section">
          <h2>10. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The effective date at the top will
            change when we do. The updated policy will be posted on this page. If changes are
            material, we will take reasonable steps to let you know, for example by a notice on the
            website or by email if we have your address. Continued use of the website, apps, or
            tools after the updated policy is posted means you accept the changes.
          </p>
        </section>

        <section class="doc__section">
          <h2>11. Contact</h2>
          <p class="doc__address">
            Gauss Dev<br />
            Nick Shilov (Nikita Shilov)<br />
            Tashkent, Uzbekistan<br />
            Email: <a class="link" href="mailto:general@gaussdev.com">general@gaussdev.com</a><br />
            Website: <a class="link" href="https://gaussdev.com/">https://gaussdev.com/</a>
          </p>
        </section>

        <aside class="doc__aside">
          <h2>Mobile app privacy policies</h2>
          <p>
            Each Gauss Dev mobile app has its own privacy policy.
            <router-link class="link" to="/privacy/apps">View app policies</router-link>.
          </p>
        </aside>
      </div>

      <div v-else class="doc__inner">
        <section class="doc__section">
          <p>
            These Terms of Service (“Terms”) govern your use of the website
            <a class="link" href="https://gaussdev.com/">https://gaussdev.com/</a>, our mobile apps
            and tools, and GaussDev Ads Assistant (together, the “Services”).
          </p>
          <p>
            The Services are provided by Gauss Dev (“Gauss Dev,” “we,” “us,” or “our”), a software
            development agency and maker of mobile apps and tools, operated by Nick Shilov (Nikita
            Shilov) and based in Tashkent, Uzbekistan. Contact us at
            <a class="link" href="mailto:general@gaussdev.com">general@gaussdev.com</a>.
          </p>
          <p>
            By using the Services, you agree to these Terms and to our
            <router-link class="link" to="/privacy">Privacy Policy</router-link>. If you do not
            agree, do not use the Services.
          </p>
          <p>These Terms are provided for clarity. They are not legal advice.</p>
        </section>

        <section class="doc__section">
          <h2>1. Who may use the Services</h2>
          <p>
            You must be at least 18 years old, or the age of majority in your country, to use the
            Services. If you use the Services on behalf of a company, you confirm that you have
            authority to bind that company, and “you” includes that company.
          </p>
        </section>

        <section class="doc__section">
          <h2>2. The Services</h2>
          <p>
            The website provides information about Gauss Dev, our work, and our products. We may
            also offer mobile apps, software tools, and professional services.
          </p>
          <p>
            GaussDev Ads Assistant is a tool that lets an authorized user view and manage their own
            Google Ads accounts (reporting, keyword research, and campaign management) and, where
            connected, their own Meta ad accounts. It is intended for the account owner or someone
            the owner has authorized.
          </p>
          <p>
            We may change, suspend, or discontinue any part of the Services at any time. We do not
            promise that the Services will always be available, uninterrupted, or error-free.
          </p>
        </section>

        <section class="doc__section">
          <h2>3. Accounts and access</h2>
          <p>
            Some features may require an account or authorization through a third-party login, such
            as Google or Meta. You are responsible for the activity that occurs under your account
            and for keeping your credentials and authorized access secure. Notify us promptly at
            <a class="link" href="mailto:general@gaussdev.com">general@gaussdev.com</a>
            if you believe your account or a connected authorization has been misused.
          </p>
          <p>
            You may revoke GaussDev Ads Assistant’s access to your Google account at
            <a class="link" href="https://myaccount.google.com/permissions"
              >https://myaccount.google.com/permissions</a
            >. You may also ask us to delete data we hold by emailing
            <a class="link" href="mailto:general@gaussdev.com">general@gaussdev.com</a>, as
            described in our <router-link class="link" to="/privacy">Privacy Policy</router-link>.
          </p>
        </section>

        <section class="doc__section">
          <h2>4. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>
              Use the Services for any unlawful purpose, or in violation of these Terms or
              applicable advertising-platform rules
            </li>
            <li>
              Access or attempt to access another person’s accounts, data, or systems without
              authorization
            </li>
            <li>
              Interfere with or disrupt the Services, or attempt to bypass security or access
              controls
            </li>
            <li>Reverse engineer, scrape, or overload the Services except as allowed by law</li>
            <li>Misrepresent your identity or your authority over an advertising account</li>
            <li>
              Use GaussDev Ads Assistant to manage advertising accounts you do not own or are not
              authorized to manage
            </li>
            <li>
              Upload or transmit malware, or use the Services to send spam or deceptive content
            </li>
          </ul>
          <p>
            We may suspend or terminate access if we reasonably believe you have violated these
            Terms.
          </p>
        </section>

        <section class="doc__section">
          <h2>5. Third-party services</h2>
          <p>
            The Services may connect to or rely on third-party platforms, including Google (such as
            the Google Ads API and Google account sign-in) and Meta (such as the Meta Marketing
            API). Your use of those platforms is governed by their own terms and policies, including
            the
            <a class="link" href="https://developers.google.com/terms"
              >Google APIs Terms of Service</a
            >
            and Meta’s platform terms. We are not responsible for third-party services, their
            availability, or changes they make to their APIs, policies, or access levels.
          </p>
          <p>
            Authorizing GaussDev Ads Assistant does not transfer ownership of your Google or Meta
            accounts to us. You remain responsible for your advertising accounts, campaigns,
            budgets, billing, and compliance with Google, Meta, and applicable law. We do not
            launch, modify, or pause campaigns except as you request or as you have clearly
            authorized.
          </p>
        </section>

        <section class="doc__section">
          <h2>6. Intellectual property</h2>
          <p>
            The Services, including their design, text, graphics, logos, software, and other
            content, are owned by Gauss Dev or our licensors and are protected by
            intellectual-property laws. We grant you a limited, non-exclusive, non-transferable,
            revocable license to use the Services for their intended purpose, in accordance with
            these Terms.
          </p>
          <p>
            You retain ownership of content and advertising-account data you provide or authorize us
            to access. You grant us a limited license to use that content and data solely to operate
            and provide the Services to you.
          </p>
          <p>
            You may not copy, modify, distribute, or create derivative works from the Services, or
            use our name or branding, without our prior written permission, except as allowed by
            law.
          </p>
        </section>

        <section class="doc__section">
          <h2>7. Professional services and no guarantees</h2>
          <p>
            Information on the website is for general informational purposes and is not a binding
            offer. Project work, fees, and deliverables, if any, are agreed separately in writing.
          </p>
          <p>
            We do not guarantee advertising results, search rankings, traffic, conversions, or
            revenue. Keyword research, reports, and recommendations are informational tools only.
            You decide whether and how to run advertising.
          </p>
        </section>

        <section class="doc__section">
          <h2>8. Disclaimers</h2>
          <p class="doc__caps">
            THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND,
            WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT
            THE SERVICES WILL BE ACCURATE, COMPLETE, SECURE, OR FREE OF ERRORS OR INTERRUPTIONS.
          </p>
          <p class="doc__caps">
            TO THE EXTENT A WARRANTY CANNOT BE DISCLAIMED UNDER APPLICABLE LAW, IT IS LIMITED TO THE
            MINIMUM SCOPE AND DURATION THAT LAW ALLOWS.
          </p>
        </section>

        <section class="doc__section">
          <h2>9. Limitation of liability</h2>
          <p class="doc__caps">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, GAUSS DEV AND ITS OPERATOR WILL NOT BE LIABLE
            FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY
            LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING FROM OR RELATED TO YOUR USE OF THE
            SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p class="doc__caps">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM
            OR RELATED TO THE SERVICES IS LIMITED TO THE GREATER OF (A) THE AMOUNT YOU PAID US FOR
            THE SERVICES GIVING RISE TO THE CLAIM IN THE THREE MONTHS BEFORE THE CLAIM, OR (B) ONE
            HUNDRED US DOLLARS (USD $100).
          </p>
          <p class="doc__caps">
            SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS. IN THOSE CASES, THE LIMITATION
            APPLIES TO THE FULLEST EXTENT PERMITTED.
          </p>
        </section>

        <section class="doc__section">
          <h2>10. Indemnity</h2>
          <p>
            You agree to indemnify and hold harmless Gauss Dev and its operator from claims,
            damages, losses, and reasonable expenses (including legal fees) arising from your use of
            the Services, your advertising campaigns, your violation of these Terms, or your
            violation of any law or third-party right, including the terms of Google or Meta.
          </p>
        </section>

        <section class="doc__section">
          <h2>11. Termination</h2>
          <p>
            You may stop using the Services at any time and may revoke third-party access as
            described above. We may suspend or terminate your access if you violate these Terms, if
            required by a third-party platform or by law, or if we discontinue the Services.
          </p>
          <p>
            After termination, the license granted to you ends. Sections that by their nature should
            survive — including intellectual property, disclaimers, limitation of liability,
            indemnity, and governing law — will survive.
          </p>
        </section>

        <section class="doc__section">
          <h2>12. Governing law</h2>
          <p>
            These Terms are governed by the laws of the Republic of Uzbekistan, without regard to
            conflict-of-law rules. Courts located in Tashkent, Uzbekistan, will have exclusive
            jurisdiction over disputes arising from these Terms or the Services, except that we may
            seek injunctive relief in any jurisdiction if needed to protect our rights.
          </p>
          <p>
            If you are a consumer and mandatory laws in your country give you additional rights or
            require a different forum, those laws take precedence to the extent they apply.
          </p>
        </section>

        <section class="doc__section">
          <h2>13. Changes</h2>
          <p>
            We may update these Terms from time to time. The effective date at the top will change
            when we do. The updated Terms will be posted on this page. If changes are material, we
            will take reasonable steps to let you know. Continued use of the Services after the
            updated Terms are posted means you accept the changes. If you do not agree, stop using
            the Services.
          </p>
        </section>

        <section class="doc__section">
          <h2>14. General</h2>
          <p>
            If any part of these Terms is found unenforceable, the rest remains in effect. Our
            failure to enforce a provision is not a waiver. You may not assign these Terms without
            our consent. We may assign them in connection with a reorganization or transfer of the
            business. These Terms, together with the
            <router-link class="link" to="/privacy">Privacy Policy</router-link>
            and any written agreement for specific project work, are the entire agreement between
            you and us regarding the Services.
          </p>
        </section>

        <section class="doc__section">
          <h2>15. Contact</h2>
          <p class="doc__address">
            Gauss Dev<br />
            Nick Shilov (Nikita Shilov)<br />
            Tashkent, Uzbekistan<br />
            Email: <a class="link" href="mailto:general@gaussdev.com">general@gaussdev.com</a><br />
            Website: <a class="link" href="https://gaussdev.com/">https://gaussdev.com/</a>
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

const route = useRoute()
const isTerms = computed(() => route.path === '/terms')
const mounted = ref(false)

onMounted(() =>
  requestAnimationFrame(() => {
    mounted.value = true
  }),
)

const origin = 'https://gaussdev.com'
const image = `${origin}/og-image.png`

useHead(
  computed(() => {
    const terms = isTerms.value
    const title = terms ? 'Terms of Service — Gauss Dev' : 'Privacy Policy — Gauss Dev'
    const description = terms
      ? 'Terms of Service for the Gauss Dev website, mobile apps and tools, and GaussDev Ads Assistant.'
      : 'How Gauss Dev collects, uses, stores, and deletes information, including Google Ads data accessed by GaussDev Ads Assistant.'
    const url = `${origin}${terms ? '/terms' : '/privacy'}`

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
.doc__section,
.doc__aside {
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
.doc h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin: 1.35rem 0 0.55rem;
  letter-spacing: -0.005em;
}
.doc h3:first-of-type {
  margin-top: 0.2rem;
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
.doc__caps {
  font-size: 0.86rem;
  line-height: 1.7;
  letter-spacing: 0.01em;
}
.doc__address {
  line-height: 1.85;
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

.doc__aside h2 {
  font-size: 1rem;
}

@media (max-width: 640px) {
  .pg-header {
    padding-top: 4rem;
  }
  .doc__section,
  .doc__aside {
    padding: 1.6rem 0;
  }
  .doc-nav {
    flex-wrap: wrap;
  }
  .doc-nav a {
    justify-content: center;
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
