export const APPS_HOST = 'apps.gaussdev.com'
export const APPS_ORIGIN = `https://${APPS_HOST}`
export const SITE_ORIGIN = 'https://gaussdev.com'

const MAIN_HOSTS = new Set(['gaussdev.com', 'www.gaussdev.com'])

/** Per-app privacy, terms, and support documents. The index at /privacy/apps is not one of them. */
export function isAppDocumentPath(path: string): boolean {
  if (path === '/privacy/apps') return false
  return /^\/(?:privacy|terms|support)\/[^/]+\/?$/.test(path)
}

/**
 * Document links on the agency site point at the apps subdomain.
 * On that subdomain, and in local development, they stay on the current host.
 */
export function appDocumentHref(path: string): string {
  if (typeof window === 'undefined') return `${APPS_ORIGIN}${path}`
  const host = window.location.hostname
  if (host === APPS_HOST || host === 'localhost' || host === '127.0.0.1') return path
  return `${APPS_ORIGIN}${path}`
}

export function redirectAppHost(path: string, host: string): string | null {
  if (MAIN_HOSTS.has(host) && isAppDocumentPath(path)) {
    return `${APPS_ORIGIN}${path}`
  }
  if (host === APPS_HOST) {
    if (path === '/' || path === '/privacy/apps') return `${SITE_ORIGIN}/privacy/apps`
    if (!isAppDocumentPath(path)) return `${SITE_ORIGIN}${path}`
  }
  return null
}
