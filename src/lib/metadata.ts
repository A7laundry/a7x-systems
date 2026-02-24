import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { SITE_URL, SITE_NAME } from './constants'

export async function generatePageMetadata({
  locale,
  namespace,
  path = '',
}: {
  locale: string
  namespace: string
  path?: string
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace })

  const url = `${SITE_URL}/${locale}${path}`

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en${path}`,
        pt: `${SITE_URL}/pt${path}`,
        es: `${SITE_URL}/es${path}`,
      },
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: locale === 'pt' ? 'pt_BR' : locale === 'es' ? 'es_ES' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
    },
  }
}
