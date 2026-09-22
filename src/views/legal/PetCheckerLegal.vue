<template>
  <div class="pc-shell">
    <!-- ── Inline brand nav (Pet Checker brand + Privacy/Terms tabs) ── -->
    <nav class="pc-nav" aria-label="Pet Checker legal navigation">
      <router-link to="/privacy/petchecker" class="pc-brand">
        <span class="pc-brand-dot" aria-hidden="true"></span>
        Pet Checker
      </router-link>
      <div class="pc-tabs" role="tablist">
        <router-link
          to="/privacy/petchecker"
          class="pc-tab"
          :class="{ 'pc-tab--active': mode === 'privacy' }"
          role="tab"
          :aria-selected="mode === 'privacy'"
        >
          Privacy Policy
        </router-link>
        <router-link
          to="/terms/petchecker"
          class="pc-tab"
          :class="{ 'pc-tab--active': mode === 'terms' }"
          role="tab"
          :aria-selected="mode === 'terms'"
        >
          Terms of Use
        </router-link>
      </div>
    </nav>

    <!-- ═══════════════ PRIVACY POLICY ═══════════════ -->
    <article v-if="mode === 'privacy'" class="pc-page" aria-labelledby="pc-privacy-h">
      <header class="pc-hero">
        <div class="pc-hero-tag">Mobile App · Care for your pets, together</div>
        <h1 id="pc-privacy-h">Privacy Policy</h1>
        <div class="pc-hero-meta">
          <span>Effective date: {{ effectiveDate }}</span>
          <span>Last updated: {{ effectiveDate }}</span>
        </div>
      </header>

      <div class="pc-content">
        <section class="pc-section">
          <div class="pc-section-num">01</div>
          <h2>Overview</h2>
          <p>
            This Privacy Policy describes how Gauss Dev (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;) collects, uses, and protects information in connection with the
            Pet Checker mobile application (the &ldquo;App&rdquo;) for iOS and Android.
          </p>
          <p>
            Pet Checker helps you track pets, medications, feeding, reminders, activities, and
            health records, and lets you share a pet's care with the people who look after it
            with you. A few things hold true across the whole App:
          </p>
          <ul class="pc-list">
            <li>
              <strong>No ads and no analytics SDKs.</strong> We do not track you across other
              apps or websites, and there is no advertising identifier in the App.
            </li>
            <li>
              <strong>Your data is scoped to a pet.</strong> Only you and the caretakers you
              invite to a pet can see that pet's care data.
            </li>
            <li>
              <strong>The AI explanation feature is optional.</strong> Nothing is sent for AI
              analysis unless you ask for it on a specific health record.
            </li>
            <li>
              <strong>Deletion is real.</strong> Deleting your account removes your login and
              every pet you own, along with its full care history.
            </li>
          </ul>
          <p>By installing or using the App, you agree to the practices described here.</p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">02</div>
          <h2>Information We Collect</h2>
          <p>We collect what the App needs to keep your pet's care in sync across the people caring for it.</p>

          <p class="pc-subhead">Account Data</p>
          <ul class="pc-list">
            <li>Email address used to sign in, and authentication tokens</li>
            <li>Your display name and, if you set one, a profile photo</li>
            <li>If you use Sign in with Google or Sign in with Apple: the email address and name those services return to us (Apple lets you hide your real address)</li>
          </ul>

          <p class="pc-subhead">Pet &amp; Care Data</p>
          <ul class="pc-list">
            <li>Pets: name, species, breed, sex, birth date, weight, photos, and notes you add</li>
            <li>Medications and the doses you log</li>
            <li>Feeding schedules and feeding logs</li>
            <li>Reminders and their schedules</li>
            <li>Activities and walks</li>
            <li>Health records: vet visits, vaccinations, weight history, notes, provider, and dates</li>
            <li>Files you attach to a health record, such as lab results, scans, and documents</li>
            <li>Co-ownership data: who is a member of a pet, and pending invitations</li>
          </ul>
          <div class="pc-callout">
            Pet care data is about your animal, but it is tied to your account &mdash; so we treat
            it as your personal data and protect it the same way.
          </div>

          <p class="pc-subhead">AI Conversations</p>
          <ul class="pc-list">
            <li>The questions you ask about a health record, and the answers returned</li>
            <li>These conversations are stored with the health record and are visible to every member of that pet</li>
          </ul>

          <p class="pc-subhead">Device Data</p>
          <ul class="pc-list">
            <li>A push notification token, so reminders can reach your device</li>
            <li>Your device's time zone name, so scheduled times mean the same clock on the server as they do on your phone</li>
            <li>A record of which notifications were sent to which device, for delivery reliability</li>
          </ul>

          <p class="pc-subhead">What We Do Not Collect</p>
          <ul class="pc-list">
            <li>Precise or background location</li>
            <li>Your contacts or address book &mdash; caretakers join with an invite code you share yourself</li>
            <li>Advertising identifiers, and no tracking across other apps or websites</li>
            <li>Your card details &mdash; payments are handled entirely by Apple and Google</li>
          </ul>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">03</div>
          <h2>How We Use Your Information</h2>
          <ul class="pc-list">
            <li>To store your pets, medications, feeding, reminders, activities, and health records, and keep them in sync across your devices</li>
            <li>To share a pet's care data with the caretakers you invite, and to keep everyone's view current</li>
            <li>To send reminder notifications at the times you set, in the time zone of the pet</li>
            <li>To answer your questions about a health record when you use the AI explanation feature</li>
            <li>To check whether your account has an active subscription, and to apply free-tier limits</li>
            <li>To keep the service secure, diagnose problems, and prevent abuse</li>
          </ul>
          <p>
            We do not sell, rent, or share your data with advertisers or data brokers. We do not
            use your pet data, health records, attachments, or AI conversations to train machine
            learning models.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">04</div>
          <h2>Sharing a Pet With Caretakers</h2>
          <p>
            Pet Checker is built for shared care. As the owner of a pet, you can invite other
            people with an invite code.
          </p>
          <ul class="pc-list">
            <li>A caretaker you invite can see and edit that pet's care data &mdash; medications, dose logs, feeding, reminders, activities, health records, attachments, and AI conversations</li>
            <li>A caretaker can see your display name and profile photo as the other members of the pet</li>
            <li>A caretaker cannot see your other pets, your account details, or your subscription</li>
            <li>You can remove a caretaker at any time; their access ends immediately</li>
            <li>Entries a caretaker already made remain part of the pet's history</li>
          </ul>
          <div class="pc-callout">
            Share invite codes only with people you trust. Anyone who accepts an invitation gains
            full access to that pet's care data, including any files you have attached to its
            health records.
          </div>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">05</div>
          <h2>AI Health Explanations</h2>
          <p>
            When you ask the App to explain a health record or a lab file, or ask a follow-up
            question, the request is processed on our servers and sent to OpenAI, which acts as
            our processor for that request.
          </p>
          <p class="pc-subhead">What is sent</p>
          <ul class="pc-list">
            <li>The health record's title, type, notes, provider, and date</li>
            <li>The files attached to that record</li>
            <li>Your question and the earlier messages in that conversation</li>
          </ul>
          <p class="pc-subhead">What is not sent</p>
          <ul class="pc-list">
            <li>Your email address, account identifier, or payment information</li>
            <li>Your other pets, or health records you did not ask about</li>
          </ul>
          <ul class="pc-list">
            <li>Nothing is sent unless you start or continue an explanation on a specific record</li>
            <li>The conversation is stored with that health record and is visible to every member of the pet</li>
            <li>You can delete the health record, which removes its conversation and attachments</li>
          </ul>
          <div class="pc-callout">
            AI explanations are general information, not veterinary advice. They can be incomplete
            or wrong. Do not use them to diagnose, treat, or decide on care &mdash; always consult a
            qualified veterinarian. See section 10 of the
            <router-link to="/terms/petchecker">Terms of Use</router-link>.
          </div>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">06</div>
          <h2>Third-Party Services</h2>
          <p>
            The App relies on a small number of providers. Each handles a narrow, well-defined
            slice of functionality.
          </p>

          <div class="pc-card">
            <strong>Supabase</strong>
            <span>
              Authentication, database, file storage for pet photos and health-record
              attachments, and the server functions that dispatch reminders and run AI
              explanations. Access is enforced per pet by database row-level security. Operated
              by Supabase, Inc.
              <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Supabase Privacy Policy ↗</a>
            </span>
          </div>

          <div class="pc-card">
            <strong>OpenAI</strong>
            <span>
              Generates the health-record explanations described in section 05, as our processor.
              Content is sent only when you request an explanation, over encrypted HTTPS, from
              our servers &mdash; never directly from your device. Operated by OpenAI, LLC.
              <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">OpenAI Privacy Policy ↗</a>
            </span>
          </div>

          <div class="pc-card">
            <strong>RevenueCat</strong>
            <span>
              Validates your App Store or Play Store purchase and tells the App whether your
              subscription is active. Receives a subscription identifier and purchase receipt
              data, not your card details. Operated by RevenueCat, Inc.
              <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat Privacy Policy ↗</a>
            </span>
          </div>

          <div class="pc-card">
            <strong>Firebase Cloud Messaging</strong>
            <span>
              Delivers reminder and care notifications to your device. Receives a device push
              token and the notification content. Operated by Google LLC.
              <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy ↗</a>
            </span>
          </div>

          <div class="pc-card">
            <strong>Sign in with Apple &amp; Sign in with Google</strong>
            <span>
              Optional sign-in methods. If you use one, the provider confirms your identity to us
              and returns your email address and name. Operated by Apple Inc. and Google LLC.
              <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer">Apple Privacy ↗</a>
              ·
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy ↗</a>
            </span>
          </div>

          <div class="pc-card">
            <strong>Apple App Store &amp; Google Play</strong>
            <span>
              Process subscription payments and handle refunds. We never receive your payment
              method or full billing details. Operated by Apple Inc. and Google LLC.
              <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer">Apple Privacy ↗</a>
              ·
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy ↗</a>
            </span>
          </div>

          <p class="pc-aside">
            We do not embed advertising SDKs or behavioural analytics SDKs, and the App does not
            track you across other companies' apps or websites.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">07</div>
          <h2>Data Retention &amp; Deletion</h2>
          <ul class="pc-list">
            <li><strong>Pet and care data:</strong> kept while the pet exists. Deleting a pet deletes its medications, dose logs, feeding schedules and logs, reminders, activities, health records, attachments, AI conversations, and memberships</li>
            <li><strong>Account data:</strong> kept while your account is active</li>
            <li><strong>Notification delivery records:</strong> kept briefly for delivery reliability, then removed</li>
            <li><strong>Backups:</strong> deleted data may persist in encrypted backups for a short period before being overwritten</li>
          </ul>
          <p class="pc-subhead">Deleting your account</p>
          <p>
            You can delete your account from Profile &rarr; Delete Account inside the App. This
            removes your login and every pet you own, together with all of its medications,
            feeding, reminders, activities, health history, attachments, and sharing. Caretakers
            you invited lose access immediately. This cannot be undone.
          </p>
          <div class="pc-callout">
            Deleting your account does not cancel your subscription. Cancel it in your App Store
            or Play Store account settings before deleting, or it will keep renewing.
          </div>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">08</div>
          <h2>Your Rights &amp; Legal Bases</h2>
          <p>
            Gauss Dev is the data controller for the personal data described in this policy. You
            can reach us at <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>.
          </p>
          <p>
            If you are in the EEA, the UK, or Switzerland, we process your data on these legal
            bases:
          </p>
          <ul class="pc-list">
            <li><strong>Performance of a contract:</strong> your account, your pets and their care data, sharing with caretakers, reminders, and subscription status</li>
            <li><strong>Consent:</strong> AI explanations of health records, which run only when you ask for them, and push notification permission, which you can withdraw in your device settings</li>
            <li><strong>Legitimate interests:</strong> keeping the service secure, preventing abuse, and fixing problems</li>
            <li><strong>Legal obligation:</strong> where we must retain or disclose data by law</li>
          </ul>
          <p>
            Depending on where you live (for example under the GDPR, the UK GDPR, or California's
            CCPA/CPRA), you may have the right to:
          </p>
          <ul class="pc-list">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your account and its data</li>
            <li>Receive a copy of your data in a portable format</li>
            <li>Object to or restrict certain processing, and withdraw consent at any time</li>
            <li>Lodge a complaint with your local data protection authority</li>
          </ul>
          <p>
            Most of these you can exercise directly in the App: edit or delete any pet, record, or
            attachment, or delete your account entirely. For anything else, write to
            <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a> and we will respond within
            30 days.
          </p>
          <p>
            We do not sell or share personal information as those terms are defined under
            CCPA/CPRA, and we do not use your data for cross-context behavioural advertising.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">09</div>
          <h2>Children's Privacy</h2>
          <p>
            The App is intended for ages 13 and up (or the equivalent minimum age in your
            jurisdiction). We do not knowingly collect personal information from children under
            13 without verifiable parental consent.
          </p>
          <p>
            A parent or guardian may invite a younger family member to help care for a pet, but
            the adult account owner remains responsible for that pet's data. If you believe a
            child has provided us with information, contact us and we will delete it promptly.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">10</div>
          <h2>Security</h2>
          <p>
            Data is transmitted over encrypted HTTPS / TLS connections and stored on
            infrastructure with industry-standard access controls. Access to every pet, record,
            and file is enforced at the database level by row-level security scoped to pet
            membership, so one account cannot read another's data.
          </p>
          <p>
            Keys for our AI provider live in server-side secrets and are never shipped inside the
            App. No method of transmission or storage is 100% secure, but we apply commercially
            reasonable measures to protect your information.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">11</div>
          <h2>International Data Transfers</h2>
          <p>
            The services we use may process data on servers located outside your country of
            residence, including the United States and the European Union. Where required by law,
            these transfers are covered by appropriate safeguards such as EU Standard Contractual
            Clauses.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">12</div>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material changes will be
            reflected by updating the &ldquo;Last updated&rdquo; date at the top of this page.
            Continued use of the App after changes become effective constitutes acceptance of the
            revised policy.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">13</div>
          <h2>Contact Us</h2>
          <div class="pc-contact">
            <div class="pc-contact-item"><label>Company</label><span>Gauss Dev</span></div>
            <div class="pc-contact-item"><label>App</label><span>Pet Checker</span></div>
            <div class="pc-contact-item">
              <label>Email</label>
              <span><a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a></span>
            </div>
            <div class="pc-contact-item">
              <label>Website</label>
              <span><a href="https://gaussdev.com">gaussdev.com</a></span>
            </div>
          </div>
        </section>
      </div>
    </article>

    <!-- ═══════════════ TERMS OF USE ═══════════════ -->
    <article v-else class="pc-page" aria-labelledby="pc-terms-h">
      <header class="pc-hero">
        <div class="pc-hero-tag">Mobile App · Care for your pets, together</div>
        <h1 id="pc-terms-h">Terms of Use</h1>
        <div class="pc-hero-meta">
          <span>Effective date: {{ effectiveDate }}</span>
          <span>Last updated: {{ effectiveDate }}</span>
        </div>
      </header>

      <div class="pc-content">
        <section class="pc-section">
          <div class="pc-section-num">01</div>
          <h2>Acceptance of These Terms</h2>
          <p>
            By downloading, installing, or using the Pet Checker mobile application (the
            &ldquo;App&rdquo;), operated by Gauss Dev (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
            &ldquo;our&rdquo;), you agree to these Terms of Use (&ldquo;Terms&rdquo;). If you do
            not agree, do not use the App.
          </p>
          <p>
            These Terms are between you and Gauss Dev, not with Apple or Google. Apple and Google
            are not responsible for the App or for any claim relating to it, though they may
            enforce these Terms as third-party beneficiaries.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">02</div>
          <h2>What the App Does</h2>
          <p>
            Pet Checker helps you keep track of your pets' care: medications and doses, feeding
            schedules and logs, reminders, activities and walks, health records including vet
            visits, vaccinations and weight, photos, and files you attach to a health record. You
            can invite other people to help care for a pet.
          </p>
          <p>
            The App is a record-keeping and reminder tool. It is not a medical device, and it does
            not provide veterinary care, diagnosis, or treatment.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">03</div>
          <h2>Eligibility</h2>
          <p>
            You must be at least 13 years old (or the minimum age in your jurisdiction) to use the
            App. By using it, you represent that you meet this requirement. Anyone under the age
            of majority must use the App with the involvement of a parent or legal guardian, who
            accepts these Terms on their behalf.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">04</div>
          <h2>Your Licence</h2>
          <p>
            We grant you a personal, limited, non-exclusive, non-transferable, non-sublicensable,
            revocable licence to use the App on devices you own or control, for your own pet-care
            purposes. This licence is exactly what you need to use the App &mdash; nothing more is
            granted, expressly or by implication.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">05</div>
          <h2>Your Account</h2>
          <ul class="pc-list">
            <li>You are responsible for keeping your sign-in credentials confidential</li>
            <li>You are responsible for everything that happens under your account</li>
            <li>The information you give us must be accurate and kept up to date</li>
            <li>
              Tell us at <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a> straight away
              if you suspect someone else has access to your account
            </li>
            <li>We may suspend or terminate accounts that violate these Terms</li>
          </ul>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">06</div>
          <h2>Your Content</h2>
          <p>
            Your pets, records, logs, notes, photos, and attachments are yours
            (&ldquo;Your Content&rdquo;). We do not claim ownership of any of it.
          </p>
          <p>
            You grant us a limited, non-exclusive, royalty-free licence to host, store, back up,
            transmit, and display Your Content only as far as needed to run the App for you: to
            store it, sync it across your devices, show it to the caretakers you invite, send the
            reminders you set, and &mdash; only when you ask for it &mdash; process a health record
            for an AI explanation. This licence exists so the App can work. It does not let us use
            Your Content for advertising, for training AI models, or for any other purpose, and it
            ends when you delete the content or your account.
          </p>
          <p>
            You are responsible for Your Content being lawful and for having the right to upload
            it &mdash; including any veterinary document that names another person.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">07</div>
          <h2>Sharing a Pet</h2>
          <p>
            You can invite other people to a pet with an invite code. Anyone who accepts that
            invitation can see and edit that pet's full care data, including medications, logs,
            health records, attached files, and AI conversations.
          </p>
          <ul class="pc-list">
            <li>You decide who to invite, and you are responsible for that choice</li>
            <li>Share invite codes only with people you trust, and only through a channel you trust</li>
            <li>You can remove a caretaker at any time; their access ends immediately</li>
            <li>Entries a caretaker already made stay in the pet's history</li>
            <li>We are not responsible for what a caretaker you invited does with the data they can see</li>
          </ul>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">08</div>
          <h2>Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul class="pc-list">
            <li>Use the App for anything unlawful, or to upload content you have no right to upload</li>
            <li>Upload another person's medical or personal information without their permission</li>
            <li>Try to access pets, records, or accounts that are not shared with you</li>
            <li>Reverse-engineer, decompile, or probe non-public parts of the App or our infrastructure</li>
            <li>Work around free-tier limits, subscription checks, rate limits, or any other product constraint</li>
            <li>Use the App in a way that could damage, disable, or overload our services</li>
            <li>Use the AI feature to generate content that is harmful, or to attempt to obtain medical advice for humans</li>
            <li>Resell, rent, or sublicense the App or access to it without our written consent</li>
          </ul>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">09</div>
          <h2>Free Tier &amp; Subscriptions</h2>
          <p>
            The App is free to use for one pet and three reminders. Additional pets, additional
            reminders, and other premium features require an active subscription.
          </p>
          <ul class="pc-list">
            <li>Subscriptions are sold and billed by Apple or Google, not by Gauss Dev. Prices and available plans are shown in the App before you purchase</li>
            <li>Subscriptions renew automatically unless you cancel at least 24 hours before the end of the current period</li>
            <li>Manage or cancel your subscription in your App Store or Play Store account settings &mdash; deleting the App or your account does not cancel it</li>
            <li>Refunds are handled by Apple or Google under their policies. We cannot issue refunds for store purchases</li>
            <li>We may change prices or the contents of a plan; changes apply from your next renewal period</li>
          </ul>
          <p>
            If your subscription lapses, your data stays intact, but features beyond the free tier
            become read-only or unavailable until you subscribe again.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">10</div>
          <h2>AI Explanations Are Not Veterinary Advice</h2>
          <p>
            The App can send a health record and its attached files for AI analysis and return a
            plain-language explanation, and answer follow-up questions about it. This feature runs
            only when you ask for it.
          </p>
          <div class="pc-callout">
            AI explanations are general information only. They are not veterinary advice, not a
            diagnosis, and not a treatment plan. They may be incomplete, out of date, or simply
            wrong. Do not rely on them to diagnose your pet, to choose or change a medication or
            dose, or to decide whether your pet needs care. Always consult a qualified
            veterinarian, and in an emergency contact a veterinarian or an emergency clinic
            immediately.
          </div>
          <p>
            You decide what to upload. Anything you send for an explanation is also visible to
            every caretaker of that pet.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">11</div>
          <h2>Reminders Are Not a Safety System</h2>
          <p>
            Reminders are sent from our servers as push notifications. Whether one arrives on time
            depends on things outside our control: network connectivity, your device being on and
            reachable, the notification permissions you granted, battery-saving and focus modes,
            and Apple's and Google's notification services.
          </p>
          <div class="pc-callout">
            Do not use Pet Checker as the only safeguard for a life-critical medication or
            treatment. Reminders can be delayed, duplicated, or missed entirely. Keep a second
            method for anything where a missed dose could harm your pet.
          </div>
          <p>
            The same applies to the records you keep here: keep your own copies of anything you
            cannot afford to lose.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">12</div>
          <h2>Intellectual Property</h2>
          <p>
            The App, its design, code, and branding are owned by Gauss Dev and protected by
            copyright, trademark, and other laws. Nothing in these Terms gives you rights to our
            intellectual property beyond using the App as described here.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">13</div>
          <h2>Disclaimers</h2>
          <p>
            The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without
            warranties of any kind, express or implied, including warranties of merchantability,
            fitness for a particular purpose, and non-infringement.
          </p>
          <p>
            We do not warrant that the App will be uninterrupted or error-free, that reminders
            will always be delivered on time, that AI explanations will be accurate, or that data
            will never be lost. Some jurisdictions do not allow certain warranty exclusions, so
            parts of this section may not apply to you.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">14</div>
          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Gauss Dev and its affiliates are not liable
            for any indirect, incidental, special, consequential, or punitive damages, including
            loss of data, loss of profits, or harm arising from a missed reminder, a delayed
            notification, or reliance on an AI explanation.
          </p>
          <p>
            Our total liability for any claim arising from these Terms or your use of the App will
            not exceed the amount you paid for the App in the twelve months before the claim, or
            USD $50, whichever is greater.
          </p>
          <p>
            Nothing in these Terms limits liability that cannot be limited by law, including
            liability for death or personal injury caused by negligence, or for fraud.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">15</div>
          <h2>Termination &amp; Account Deletion</h2>
          <p>
            You can stop using the App at any time, and delete your account from Profile &rarr;
            Delete Account. Deleting your account removes your login and every pet you own, with
            all of its medications, feeding, reminders, activities, health history, attachments,
            and sharing. Caretakers lose access immediately. This cannot be undone.
          </p>
          <p>
            Cancel your subscription in your App Store or Play Store settings before deleting your
            account &mdash; deletion alone does not stop billing.
          </p>
          <p>
            We may suspend or terminate your access if you breach these Terms, or if we need to
            for legal or security reasons. Sections 06, 12, 13, 14, and 17 survive termination.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">16</div>
          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at
            the top of this page shows when. If a change is material, we will give reasonable
            notice in the App. Continued use after a change takes effect means you accept the
            revised Terms.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">17</div>
          <h2>Governing Law &amp; Disputes</h2>
          <p>
            These Terms are governed by the laws of the Republic of Uzbekistan, without regard to
            conflict of law principles. Any dispute should first be raised with us directly and
            addressed in good faith. If it cannot be resolved that way, it will be submitted to
            the competent courts of Tashkent, Uzbekistan.
          </p>
          <p>
            If you are a consumer in the EEA or the UK, this does not deprive you of the
            protection of the mandatory consumer law of your country of residence, or of the right
            to bring proceedings there.
          </p>
        </section>

        <section class="pc-section">
          <div class="pc-section-num">18</div>
          <h2>Contact Us</h2>
          <p>For questions about these Terms:</p>
          <div class="pc-contact">
            <div class="pc-contact-item"><label>Company</label><span>Gauss Dev</span></div>
            <div class="pc-contact-item"><label>App</label><span>Pet Checker</span></div>
            <div class="pc-contact-item">
              <label>Email</label>
              <span><a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a></span>
            </div>
            <div class="pc-contact-item">
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

// `mode` is driven by the URL — /privacy/petchecker shows Privacy,
// /terms/petchecker shows Terms. Tabs are real <router-link>s, so each
// document is a distinct, indexable URL (App Store + Play Console both
// want a public URL, not an in-app-only page).
const mode = computed<'privacy' | 'terms'>(() =>
  route.path.startsWith('/terms') ? 'terms' : 'privacy',
)

const petChecker = findPrivacyApp('petchecker')
const effectiveDate = petChecker?.effectiveDate ?? 'September 22, 2026'
const contactEmail = petChecker?.contactEmail ?? 'general@gaussdev.com'

useSeo({
  path: route.path,
  title:
    mode.value === 'terms' ? 'Pet Checker — Terms of Use' : 'Pet Checker — Privacy Policy',
  description:
    mode.value === 'terms'
      ? 'Terms of Use for Pet Checker — the shared pet-care tracker by Gauss Dev. Subscriptions, shared access, AI explanations, and reminder limitations.'
      : 'Privacy Policy for Pet Checker — the shared pet-care tracker by Gauss Dev. What we store, who we share it with, and how AI health explanations work.',
  type: 'article',
})
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@500;600;700&family=Inter:wght@300;400;500&display=swap',
    },
  ],
})
</script>

<style scoped>
/* ── Pet Checker-scoped tokens (soft green, override the gaussdev palette here only) ── */
.pc-shell {
  --pc-bg: #080d0a;
  --pc-surface: #0f1713;
  --pc-border: #1c2a22;
  --pc-accent: #5fd39a;
  --pc-accent-soft: rgba(95, 211, 154, 0.12);
  --pc-text: #e4efe8;
  --pc-muted: #7d8f85;
  --pc-heading-font: 'Nunito', system-ui, sans-serif;
  --pc-body-font: 'Inter', system-ui, sans-serif;

  background: var(--pc-bg);
  color: var(--pc-text);
  font-family: var(--pc-body-font);
  font-size: 15px;
  line-height: 1.75;
  font-weight: 300;
  min-height: 100vh;
}

/* ── Brand nav ── */
.pc-nav {
  position: sticky;
  top: 0;
  z-index: 5;
  background: rgba(8, 13, 10, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--pc-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 56px;
}

.pc-brand {
  font-family: var(--pc-heading-font);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--pc-text);
  text-decoration: none;
  letter-spacing: 0.01em;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.pc-brand-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--pc-accent);
  box-shadow: 0 0 12px rgba(95, 211, 154, 0.6);
}

.pc-tabs {
  display: flex;
  gap: 0;
  background: var(--pc-surface);
  border: 1px solid var(--pc-border);
  border-radius: 8px;
  overflow: hidden;
}

.pc-tab {
  padding: 6px 18px;
  font-size: 13px;
  font-weight: 500;
  background: transparent;
  color: var(--pc-muted);
  font-family: var(--pc-body-font);
  text-decoration: none;
  border: 0;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  min-height: auto;  /* override global 44px floor — these are nav tabs, not primary CTAs */
  display: inline-flex;
  align-items: center;
}

.pc-tab--active {
  background: var(--pc-accent);
  color: #06120c;
}

.pc-tab:hover:not(.pc-tab--active) {
  color: var(--pc-text);
  background: var(--pc-accent-soft);
}

/* ── Hero ── */
.pc-hero {
  padding: 72px 2rem 48px;
  max-width: 760px;
  margin: 0 auto;
  border-bottom: 1px solid var(--pc-border);
}

.pc-hero-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--pc-accent);
  background: var(--pc-accent-soft);
  border: 1px solid rgba(95, 211, 154, 0.25);
  border-radius: 4px;
  padding: 3px 10px;
  margin-bottom: 20px;
}

.pc-hero h1 {
  font-family: var(--pc-heading-font);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 16px;
  color: #fff;
  letter-spacing: -0.01em;
}

.pc-hero-meta {
  font-size: 13px;
  color: var(--pc-muted);
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.pc-hero-meta span::before {
  content: '·';
  margin-right: 8px;
  opacity: 0.4;
}

.pc-hero-meta span:first-child::before {
  display: none;
}

/* ── Body ── */
.pc-content {
  max-width: 760px;
  margin: 0 auto;
  padding: 48px 2rem 96px;
}

.pc-section {
  margin-bottom: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--pc-border);
}

.pc-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.pc-section-num {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--pc-accent);
  margin-bottom: 10px;
}

.pc-section h2 {
  font-family: var(--pc-heading-font);
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 20px;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.pc-section p {
  color: var(--pc-text);
  margin: 0 0 14px;
  opacity: 0.88;
}

.pc-section p:last-child {
  margin-bottom: 0;
}

.pc-subhead {
  color: #fff !important;
  font-weight: 500;
  opacity: 1 !important;
  margin-top: 20px !important;
}

.pc-aside {
  margin-top: 16px !important;
}

/* lists */
.pc-list {
  list-style: none;
  margin: 16px 0;
  padding: 0;
}

.pc-list li {
  padding: 10px 0 10px 20px;
  position: relative;
  border-bottom: 1px solid var(--pc-border);
  color: var(--pc-text);
  opacity: 0.88;
}

.pc-list li:last-child {
  border-bottom: none;
}

.pc-list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--pc-accent);
  font-size: 12px;
  top: 11px;
}

.pc-list strong {
  color: #fff;
  font-weight: 500;
}

/* callout */
.pc-callout {
  background: var(--pc-accent-soft);
  border: 1px solid rgba(95, 211, 154, 0.25);
  border-left: 3px solid var(--pc-accent);
  border-radius: 6px;
  padding: 16px 20px;
  margin: 20px 0;
  font-size: 14px;
  color: var(--pc-text);
  opacity: 0.92;
}

/* third-party card */
.pc-card {
  background: var(--pc-surface);
  border: 1px solid var(--pc-border);
  border-radius: 8px;
  padding: 16px 20px;
  margin: 12px 0;
}

.pc-card strong {
  display: block;
  color: #fff;
  font-weight: 500;
  margin-bottom: 4px;
}

.pc-card span {
  font-size: 13px;
  color: var(--pc-muted);
}

/* links */
.pc-content a {
  color: var(--pc-accent);
  text-decoration: none;
}

.pc-content a:hover {
  text-decoration: underline;
}

/* contact block */
.pc-contact {
  background: var(--pc-surface);
  border: 1px solid var(--pc-border);
  border-radius: 10px;
  padding: 24px 28px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
}

.pc-contact-item label {
  display: block;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--pc-muted);
  margin-bottom: 4px;
}

.pc-contact-item span {
  font-size: 14px;
  color: var(--pc-text);
}

/* ── Responsive ── */
@media (max-width: 600px) {
  .pc-nav {
    padding: 0 1rem;
  }
  .pc-hero,
  .pc-content {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
  .pc-tab {
    padding: 6px 12px;
    font-size: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .pc-tab {
    transition: none;
  }
}
</style>
