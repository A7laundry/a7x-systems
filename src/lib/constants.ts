export const SITE_URL = 'https://a7xsystems.com'
export const SITE_NAME = 'A7X Systems'

export const NAV_LINKS = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/services' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
] as const

export const LOCALES = ['en', 'pt', 'es'] as const
export type Locale = (typeof LOCALES)[number]

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
}
