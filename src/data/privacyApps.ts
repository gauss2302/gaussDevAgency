export interface ThirdPartyService {
  name: string
  description: string
  privacyUrl: string
  privacyLabel: string
}

export interface AppPrivacyConfig {
  slug: string
  appName: string
  platforms: string
  contactEmail: string
  effectiveDate: string
  collectsPersonalData: boolean
  hasAds: boolean
  dataCollected: readonly string[]
  dataUsage: readonly string[]
  thirdPartyServices: readonly ThirdPartyService[]
  /**
   * Optional override for the privacy-policy detail URL. When set, the
   * privacy index uses this as the link target (instead of the generic
   * /privacy/<slug>) and PrivacyView redirects to it. Used for apps
   * with their own branded legal page — e.g. Havamind.
   */
  customRoute?: string
  /** Whether this app also has a Terms of Service page. */
  hasTerms?: boolean
}

export const privacyApps: readonly AppPrivacyConfig[] = [
  {
    slug: 'prayer',
    appName: 'Prayer',
    platforms: 'iOS / Android',
    contactEmail: 'general@gaussdev.com',
    effectiveDate: 'May 15, 2026',
    collectsPersonalData: false,
    hasAds: false,
    dataCollected: [
      'Anonymous device identifiers (reset by you at any time via OS settings)',
      'Device model, operating system version, and app version',
      'App usage events (screens opened, features used, session length)',
      'Approximate region (country / time zone) inferred from IP, not stored',
      'Crash and performance diagnostics',
    ],
    dataUsage: [
      'To understand how features are used so we can improve the App',
      'To detect, diagnose, and fix crashes, bugs, and performance issues',
      'To measure aggregate adoption and stability of new releases',
    ],
    thirdPartyServices: [
      {
        name: 'Google Firebase Analytics & Crashlytics',
        description:
          'Provides anonymous usage analytics and crash reporting. Operated by Google LLC.',
        privacyUrl: 'https://firebase.google.com/support/privacy',
        privacyLabel: 'Firebase Privacy & Security',
      },
    ],
  },
  {
    slug: 'havamind',
    appName: 'Havamind AI Notes',
    platforms: 'iOS / Android',
    contactEmail: 'general@gaussdev.com',
    effectiveDate: 'May 15, 2026',
    collectsPersonalData: true,
    hasAds: false,
    customRoute: '/privacy/havamind',
    hasTerms: true,
    dataCollected: [
      'Audio recordings created within the App to generate notes',
      'Transcriptions produced from your recordings',
      'AI-processed text derived from your voice input',
      'Email address and authentication tokens (if you sign in)',
      'Anonymous device identifiers, device model, OS and app version',
      'Feature usage events, session length, crash diagnostics',
    ],
    dataUsage: [
      'To transcribe your voice recordings into text notes',
      'To apply AI refinement and structuring (upon your request)',
      'To sync your notes across your devices',
      'To diagnose crashes and improve performance',
    ],
    thirdPartyServices: [
      {
        name: 'OpenAI (Whisper + GPT)',
        description:
          'Transcribes audio and refines notes. Operated by OpenAI, LLC. Audio is transmitted over encrypted HTTPS and deleted server-side within 24 hours.',
        privacyUrl: 'https://openai.com/policies/privacy-policy',
        privacyLabel: 'OpenAI Privacy Policy',
      },
      {
        name: 'Supabase',
        description:
          'Database storage, authentication, and cloud sync of your notes. Operated by Supabase, Inc.',
        privacyUrl: 'https://supabase.com/privacy',
        privacyLabel: 'Supabase Privacy Policy',
      },
      {
        name: 'Google Firebase Analytics & Crashlytics',
        description:
          'Anonymous usage analytics and crash reporting. Operated by Google LLC.',
        privacyUrl: 'https://firebase.google.com/support/privacy',
        privacyLabel: 'Firebase Privacy',
      },
    ],
  },
  {
    slug: 'lumi',
    appName: 'Lumi',
    platforms: 'iOS / Android',
    contactEmail: 'general@gaussdev.com',
    effectiveDate: 'June 10, 2026',
    collectsPersonalData: true,
    hasAds: false,
    customRoute: '/privacy/lumi',
    hasTerms: true,
    dataCollected: [
      'Email or phone number used to sign in, plus authentication tokens',
      'Display name and avatar color (chosen by you)',
      'Your circle: user IDs of up to 12 mutually-connected people',
      'Lumi delivery metadata (sender, recipient, timestamp, encrypted payload size)',
      'Push notification token (required to deliver Lumis)',
      'Anonymous device identifiers, device model, OS and app version',
      'Crash and performance diagnostics',
    ],
    dataUsage: [
      'To deliver Lumis from your device to people in your circle',
      'To send push notifications when a Lumi arrives',
      'To sync your Kept Shelf across your own devices (end-to-end encrypted)',
      'To enforce the 12-person circle cap and mutual-connection requirement',
      'To diagnose crashes and improve performance',
      'To process subscription billing through the App Store / Play Store',
    ],
    thirdPartyServices: [
      {
        name: 'Supabase',
        description:
          'Authentication and relay of end-to-end encrypted Lumi payloads and Kept Shelf ciphertext. Supabase sees only ciphertext, never decrypted content. Operated by Supabase, Inc.',
        privacyUrl: 'https://supabase.com/privacy',
        privacyLabel: 'Supabase Privacy Policy',
      },
      {
        name: 'Apple Push Notification service (APNs) & Firebase Cloud Messaging (FCM)',
        description:
          'Delivery of "you got a Lumi" push notifications on iOS and Android. Payloads contain no Lumi content. Operated by Apple Inc. and Google LLC.',
        privacyUrl: 'https://firebase.google.com/support/privacy',
        privacyLabel: 'FCM Privacy',
      },
      {
        name: 'Sentry',
        description:
          'Anonymous crash and performance diagnostics. No Lumi content, account identifiers, or message metadata are included in reports. Operated by Functional Software, Inc.',
        privacyUrl: 'https://sentry.io/privacy/',
        privacyLabel: 'Sentry Privacy Policy',
      },
    ],
  },
]

export function findPrivacyApp(slug: string): AppPrivacyConfig | undefined {
  return privacyApps.find((app) => app.slug === slug)
}
