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
  master?: boolean
  features: number
}

const plans: PlanConfig[] = [
  { key: 'starter', features: 6 },
  { key: 'growth', popular: true, features: 8 },
  { key: 'premium', features: 9 },
  { key: 'master', master: true, features: 12 },
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

        <StaggerChildren className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-4" staggerDelay={0.15}>
          {plans.map((plan) => (
            <StaggerItem key={plan.key}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 ${
                  plan.master
                    ? 'border-amber-500/50 bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-surface-1 shadow-lg shadow-amber-500/10'
                    : plan.popular
                      ? 'border-accent-500/50 bg-accent-500/5 shadow-lg shadow-accent-500/10'
                      : 'border-border bg-surface-1 hover:border-accent-500/30'
                }`}
              >
                {plan.master && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-400 ring-1 ring-amber-500/30">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {t('masterBadge')}
                    </span>
                  </div>
                )}
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
                    <span className={`font-serif text-4xl ${plan.master ? 'bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent' : 'text-text-primary'}`}>
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
                          plan.master ? 'text-amber-400' : plan.popular ? 'text-accent-400' : 'text-accent-400/70'
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
                    className={`w-full ${plan.master ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 border-0' : ''}`}
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
