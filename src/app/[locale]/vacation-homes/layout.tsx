import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'vhMeta' })

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      siteName: 'A7X Systems',
      type: 'website',
    },
  }
}

export default function VacationHomesLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
