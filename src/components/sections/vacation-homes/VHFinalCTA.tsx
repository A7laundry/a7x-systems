'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { SmartLink } from '@/components/ui/SmartLink'
import { FadeIn } from '@/components/motion/FadeIn'

export function VHFinalCTA() {
  const t = useTranslations('vhCta')

  const steps = [1, 2, 3, 4]

  return (
    <section id="audit" className="relative overflow-hidden py-24 sm:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-600/20 via-background to-cyan-500/10" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-serif text-3xl font-normal text-text-primary sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {t('subtitle')}
          </p>

          {/* Funnel Steps */}
          <div className="mx-auto mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
            {steps.map((step) => (
              <div key={step} className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-accent-500/30 bg-accent-500/10 text-sm font-bold text-accent-400">
                  {step}
                </div>
                <p className="text-xs text-text-muted">{t(`step${step}`)}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <SmartLink href="#audit-form">
              <Button size="lg">{t('cta')}</Button>
            </SmartLink>
          </div>
          <p className="mt-4 text-sm text-text-muted">{t('note')}</p>
        </FadeIn>
      </div>
    </section>
  )
}
