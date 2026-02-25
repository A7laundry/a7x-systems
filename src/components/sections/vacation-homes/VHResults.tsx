'use client'

import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn } from '@/components/motion/FadeIn'

export function VHResults() {
  const t = useTranslations('vhResults')

  const beforeItems = [1, 2, 3, 4, 5]
  const afterItems = [1, 2, 3, 4, 5]

  const caseStudies = [1, 2]

  return (
    <section className="relative bg-surface-1/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge={t('badge')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </FadeIn>

        {/* Before / After */}
        <FadeIn delay={0.1}>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {/* Before */}
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-red-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                {t('beforeTitle')}
              </h3>
              <ul className="space-y-3">
                {beforeItems.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    {t(`before${i}`)}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="rounded-2xl border border-accent-500/20 bg-accent-500/5 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-accent-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {t('afterTitle')}
              </h3>
              <ul className="space-y-3">
                {afterItems.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent-400/70" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {t(`after${i}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* Case Studies */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {caseStudies.map((study) => (
            <FadeIn key={study} delay={study * 0.15}>
              <div className="rounded-2xl border border-border bg-surface-1 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="rounded-full bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-400">
                    {t(`case${study}Location`)}
                  </span>
                  <span className="rounded-full bg-surface-2 px-3 py-1 text-xs text-text-muted">
                    {t(`case${study}Type`)}
                  </span>
                </div>
                <h4 className="mb-2 font-serif text-xl text-text-primary">
                  {t(`case${study}Title`)}
                </h4>
                <p className="mb-4 text-sm text-text-muted">
                  {t(`case${study}Desc`)}
                </p>
                <div className="grid grid-cols-3 gap-4 border-t border-border pt-4">
                  {[1, 2, 3].map((metric) => (
                    <div key={metric} className="text-center">
                      <div className="font-serif text-xl text-accent-400">
                        {t(`case${study}Metric${metric}Value`)}
                      </div>
                      <div className="mt-1 text-xs text-text-muted">
                        {t(`case${study}Metric${metric}Label`)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
