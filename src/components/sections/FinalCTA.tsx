'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/motion/FadeIn'

export function FinalCTA() {
  const t = useTranslations('finalCta')

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
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
          <div className="mt-10">
            <Link href="/contact">
              <Button size="lg">{t('cta')}</Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-text-muted">{t('note')}</p>
        </FadeIn>
      </div>
    </section>
  )
}
