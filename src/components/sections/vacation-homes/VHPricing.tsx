'use client'

import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { SmartLink } from '@/components/ui/SmartLink'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'

interface PlanConfig {
  key: string
  popular?: boolean
  features: number
}

const plans: PlanConfig[] = [
  { key: 'starter', features: 6 },
  { key: 'growth', popular: true, features: 8 },
  { key: 'premium', features: 9 },
]

export function VHPricing() {
  const t = useTranslations('vhPricing')

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge={t('badge')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </FadeIn>

        <StaggerChildren className="mt-16 grid gap-8 lg:grid-cols-3" staggerDelay={0.15}>
          {plans.map((plan) => (
            <StaggerItem key={plan.key}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'border-accent-500/50 bg-accent-500/5 shadow-lg shadow-accent-500/10'
                    : 'border-border bg-surface-1 hover:border-accent-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge>{t('popular')}</Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {t(`${plan.key}Name`)}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-serif text-4xl text-text-primary">
                      {t(`${plan.key}Price`)}
                    </span>
                    <span className="text-sm text-text-muted">{t('perMonth')}</span>
                  </div>
                  <p className="mt-3 text-sm text-text-muted">
                    {t(`${plan.key}Desc`)}
                  </p>
                </div>

                <div className="mb-8 flex-1 space-y-3">
                  {Array.from({ length: plan.features }, (_, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          plan.popular ? 'text-accent-400' : 'text-accent-400/70'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className="text-sm text-text-secondary">
                        {t(`${plan.key}F${i + 1}`)}
                      </span>
                    </div>
                  ))}
                </div>

                <SmartLink href="#audit">
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    {t('cta')}
                  </Button>
                </SmartLink>

                <p className="mt-3 text-center text-xs text-text-muted">
                  {t(`${plan.key}Best`)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.3}>
          <p className="mt-8 text-center text-sm text-text-muted">
            {t('guarantee')}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
