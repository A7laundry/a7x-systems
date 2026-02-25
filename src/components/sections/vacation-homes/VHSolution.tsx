'use client'

import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { GradientText } from '@/components/ui/GradientText'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'

const solutionIcons: Record<string, React.ReactNode> = {
  website: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  seo: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  ),
  tracking: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  ),
  funnel: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  reports: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  ),
  retargeting: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  ),
}

export function VHSolution() {
  const t = useTranslations('vhSolution')

  const features = [
    { key: 'website', icon: solutionIcons.website },
    { key: 'seo', icon: solutionIcons.seo },
    { key: 'tracking', icon: solutionIcons.tracking },
    { key: 'funnel', icon: solutionIcons.funnel },
    { key: 'reports', icon: solutionIcons.reports },
    { key: 'retargeting', icon: solutionIcons.retargeting },
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

        <FadeIn delay={0.1}>
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-sm text-text-muted">
              {t('subscriptionNote')}
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {features.map((feature) => (
            <StaggerItem key={feature.key}>
              <Card hover className="h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-primary">
                  {t(`${feature.key}Title`)}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {t(`${feature.key}Desc`)}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* How It Works - Simple Timeline */}
        <div className="mt-20">
          <FadeIn>
            <h3 className="text-center font-serif text-2xl text-text-primary sm:text-3xl">
              {t('howTitle')}
            </h3>
          </FadeIn>

          <div className="mt-12 space-y-0">
            {[1, 2, 3, 4].map((step) => (
              <FadeIn key={step} delay={step * 0.15}>
                <div className="relative flex gap-8 pb-12 last:pb-0">
                  {step < 4 && (
                    <div className="absolute left-[27px] top-14 h-full w-px bg-gradient-to-b from-accent-500/50 to-transparent" />
                  )}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent-500/30 bg-accent-500/10">
                    <GradientText className="text-sm font-bold">
                      {t(`step${step}Number`)}
                    </GradientText>
                  </div>
                  <div className="flex-1 rounded-2xl border border-border bg-surface-1 p-6">
                    <h4 className="font-serif text-xl text-text-primary">
                      {t(`step${step}Title`)}
                    </h4>
                    <p className="mt-2 text-sm text-text-secondary">
                      {t(`step${step}Desc`)}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
