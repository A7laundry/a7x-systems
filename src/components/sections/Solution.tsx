'use client'

import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GradientText } from '@/components/ui/GradientText'
import { FadeIn } from '@/components/motion/FadeIn'
import { NetworkDiagram } from '@/components/ui/NetworkDiagram'

export function Solution() {
  const t = useTranslations('solution')

  const steps = [
    {
      number: t('step1Number'),
      title: t('step1Title'),
      description: t('step1Description'),
      duration: t('step1Duration'),
    },
    {
      number: t('step2Number'),
      title: t('step2Title'),
      description: t('step2Description'),
      duration: t('step2Duration'),
    },
    {
      number: t('step3Number'),
      title: t('step3Title'),
      description: t('step3Description'),
      duration: t('step3Duration'),
    },
  ]

  const beforeItems = [
    t('before1'),
    t('before2'),
    t('before3'),
    t('before4'),
    t('before5'),
  ]

  const afterItems = [
    t('after1'),
    t('after2'),
    t('after3'),
    t('after4'),
    t('after5'),
  ]

  return (
    <section id="solution" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge={t('badge')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </FadeIn>

        {/* Before / After comparison */}
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
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    {item}
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
                {afterItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent-400/70" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* Visual transformation diagram */}
        <FadeIn delay={0.2}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface-1/50 p-4 sm:p-8">
            <NetworkDiagram />
          </div>
        </FadeIn>

        {/* 3-step timeline */}
        <div className="mt-16 space-y-0">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="relative flex gap-8 pb-16 last:pb-0">
                {/* Timeline line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[27px] top-14 h-full w-px bg-gradient-to-b from-accent-500/50 to-transparent" />
                )}

                {/* Number circle */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent-500/30 bg-accent-500/10">
                  <GradientText className="text-sm font-bold">
                    {step.number}
                  </GradientText>
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-border bg-surface-1 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-2xl text-text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-text-secondary">
                        {step.description}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-400">
                      {step.duration}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
