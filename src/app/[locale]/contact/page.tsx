'use client'

import { useTranslations } from 'next-intl'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/motion/FadeIn'
import { AssessmentWizard } from '@/components/forms/AssessmentWizard'

export default function ContactPage() {
  const t = useTranslations('contactPage')

  const infoItems = [
    { title: t('info1Title'), description: t('info1Description'), icon: 'clock' },
    { title: t('info2Title'), description: t('info2Description'), icon: 'chart' },
    { title: t('info3Title'), description: t('info3Description'), icon: 'check' },
    { title: t('info4Title'), description: t('info4Description'), icon: 'arrow' },
  ]

  const icons: Record<string, React.ReactNode> = {
    clock: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    chart: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75Z" />
      </svg>
    ),
    check: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    arrow: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    ),
  }

  return (
    <>
      {/* Header */}
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

      {/* Assessment Wizard + Info */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Assessment Wizard */}
            <FadeIn>
              <Card className="p-8">
                <h2 className="text-xl font-semibold text-text-primary">{t('formTitle')}</h2>
                <p className="mt-1 mb-6 text-sm text-text-muted">{t('formDescription')}</p>
                <AssessmentWizard />
              </Card>
            </FadeIn>

            {/* Info */}
            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-xl font-semibold text-text-primary">{t('infoTitle')}</h2>
                <div className="mt-6 space-y-6">
                  {infoItems.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
                        {icons[item.icon]}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-text-primary">{item.title}</h3>
                        <p className="mt-1 text-sm text-text-muted">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Calendly placeholder */}
                <div className="mt-12 rounded-2xl border border-border bg-surface-1 p-8">
                  <h3 className="text-lg font-semibold text-text-primary">{t('calendlyTitle')}</h3>
                  <p className="mt-2 text-sm text-text-muted">{t('calendlyDescription')}</p>
                  <div className="mt-6 flex h-48 items-center justify-center rounded-lg border border-dashed border-border">
                    <p className="text-sm text-text-muted">Calendly Widget</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
