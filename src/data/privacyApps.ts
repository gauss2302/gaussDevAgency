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
}

export const privacyApps = [
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
] as const satisfies readonly AppPrivacyConfig[]

export function findPrivacyApp(slug: string): AppPrivacyConfig | undefined {
  return privacyApps.find((app) => app.slug === slug)
}
