import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { SITE_URL } from '@/lib/constants'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'servicesPage' })

  return {
    title: `${t('title')} | A7X Systems`,
    description: t('subtitle'),
    alternates: {
      canonical: `${SITE_URL}/${locale}/services`,
      languages: {
        en: `${SITE_URL}/en/services`,
        pt: `${SITE_URL}/pt/services`,
        es: `${SITE_URL}/es/services`,
      },
    },
  }
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
