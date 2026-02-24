import { getTranslations } from 'next-intl/server'
import { Hero } from '@/components/sections/Hero'
import { PainPoints } from '@/components/sections/PainPoints'
import { Solution } from '@/components/sections/Solution'
import { Services } from '@/components/sections/Services'
import { Results } from '@/components/sections/Results'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import {
  OrganizationJsonLd,
  ServiceJsonLd,
  FAQJsonLd,
  HowToJsonLd,
} from '@/components/seo/JsonLd'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'faq' })

  const faqItems = [
    { question: t('q1'), answer: t('a1') },
    { question: t('q2'), answer: t('a2') },
    { question: t('q3'), answer: t('a3') },
    { question: t('q4'), answer: t('a4') },
    { question: t('q5'), answer: t('a5') },
    { question: t('q6'), answer: t('a6') },
  ]

  return (
    <>
      <OrganizationJsonLd />
      <ServiceJsonLd />
      <FAQJsonLd items={faqItems} />
      <HowToJsonLd />
      <Hero />
      <PainPoints />
      <Solution />
      <Services />
      <Results />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  )
}
