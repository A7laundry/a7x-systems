import { getTranslations } from 'next-intl/server'
import { VHHero } from '@/components/sections/vacation-homes/VHHero'
import { VHPainPoints } from '@/components/sections/vacation-homes/VHPainPoints'
import { VHSolution } from '@/components/sections/vacation-homes/VHSolution'
import { VHDifferentiation } from '@/components/sections/vacation-homes/VHDifferentiation'
import { VHPricing } from '@/components/sections/vacation-homes/VHPricing'
import { VHShowcase } from '@/components/sections/vacation-homes/VHShowcase'
import { VHUpsells } from '@/components/sections/vacation-homes/VHUpsells'
import { VHResults } from '@/components/sections/vacation-homes/VHResults'
import { VHFAQ } from '@/components/sections/vacation-homes/VHFAQ'
import { VHFinalCTA } from '@/components/sections/vacation-homes/VHFinalCTA'
import { FAQJsonLd } from '@/components/seo/JsonLd'

export default async function VacationHomesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'vhFaq' })

  const faqItems = Array.from({ length: 8 }, (_, i) => ({
    question: t(`q${i + 1}`),
    answer: t(`a${i + 1}`),
  }))

  return (
    <>
      <FAQJsonLd items={faqItems} />
      <VHHero />
      <VHPainPoints />
      <VHSolution />
      <VHShowcase />
      <VHDifferentiation />
      <VHPricing />
      <VHUpsells />
      <VHResults />
      <VHFAQ />
      <VHFinalCTA />
    </>
  )
}
