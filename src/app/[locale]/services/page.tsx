'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { GradientText } from '@/components/ui/GradientText'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'

const serviceIcons: Record<string, React.ReactNode> = {
  search: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  ),
  zap: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  ),
  file: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  ),
  bot: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
  ),
  chart: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  ),
}

const iconKeys = ['search', 'zap', 'file', 'bot', 'chart']

export default function ServicesPage() {
  const t = useTranslations('servicesPage')

  const services = Array.from({ length: 5 }, (_, i) => {
    const n = i + 1
    return {
      title: t(`service${n}Title` as 'service1Title'),
      description: t(`service${n}Description` as 'service1Description'),
      icon: serviceIcons[iconKeys[i]],
      deliverables: Array.from({ length: 5 }, (_, j) =>
        t(`service${n}D${j + 1}` as 'service1D1')
      ),
    }
  })

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

      {/* Services Detail */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="grid gap-8 rounded-2xl border border-border bg-surface-1 p-8 lg:grid-cols-2 lg:p-12">
                  <div>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400">
                      {service.icon}
                    </div>
                    <h2 className="font-serif text-2xl text-text-primary sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-400">
                      {t('service1Deliverables')}
                    </h3>
                    <ul className="space-y-3">
                      {service.deliverables.map((d, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-text-secondary">
                          <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-600/20 via-background to-cyan-500/10" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl font-normal text-text-primary sm:text-4xl">
              {t('ctaTitle')}
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              {t('ctaDescription')}
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg">{t('ctaButton')}</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
