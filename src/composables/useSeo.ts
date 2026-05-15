import { useHead } from '@unhead/vue'

const SITE = {
  name: 'Gauss Dev',
  origin: 'https://gaussdev.com',
  defaultDescription:
    'Senior product team building production-grade web, mobile, and AI software. From discovery to launch — no handoffs, no agency theatre.',
  defaultImage: 'https://gaussdev.com/og-image.png',
  twitterCard: 'summary_large_image' as const,
}

export interface RouteSeo {
  /** Page-specific title. Brand suffix is appended automatically unless `rawTitle: true`. */
  title: string
  /** ~150-160 char description for SERPs and social previews. */
  description?: string
  /** Path segment, e.g. `/services`. Becomes the canonical URL. */
  path: string
  /** OG image override. Falls back to the site default if omitted. */
  image?: string
  /** OG type (default `website`, set `article` for blog posts). */
  type?: 'website' | 'article' | 'profile'
  /** Pass `true` to use `title` verbatim (no " — Gauss Dev" suffix). */
  rawTitle?: boolean
  /** Set `true` to ask crawlers not to index this page. */
  noindex?: boolean
}

/**
 * Compose per-route SEO metadata.
 *
 * Sets title, description, canonical, Open Graph, and Twitter Card tags.
 * @unhead handles teardown on route change automatically.
 */
export function useSeo(seo: RouteSeo) {
  const fullTitle = seo.rawTitle ? seo.title : `${seo.title} — ${SITE.name}`
  const description = seo.description ?? SITE.defaultDescription
  const url = `${SITE.origin}${seo.path}`
  const image = seo.image ?? SITE.defaultImage
  const type = seo.type ?? 'website'

  useHead({
    title: fullTitle,
    link: [{ rel: 'canonical', href: url }],
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: seo.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large' },

      // Open Graph
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: SITE.name },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },

      // Twitter
      { name: 'twitter:card', content: SITE.twitterCard },
      { name: 'twitter:url', content: url },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
  })
}
