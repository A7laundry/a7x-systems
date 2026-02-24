'use client'

import { useTranslations } from 'next-intl'
import { Badge } from '@/components/ui/Badge'
import { FadeIn } from '@/components/motion/FadeIn'
import { ROICalculator } from '@/components/forms/ROICalculator'

export default function ROICalculatorPage() {
  const t = useTranslations('roiCalculator')

  return (
    <>
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <Badge>{t('badge')}</Badge>
              <h1 className="mt-6 font-serif text-4xl font-normal text-text-primary sm:text-5xl lg:text-6xl">
                {t('title')}
              </h1>
              <p className="mt-4 text-lg text-text-secondary">
                {t('subtitle')}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <ROICalculator />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
