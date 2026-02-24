'use client'

import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'

export function Testimonials() {
  const t = useTranslations('testimonials')

  const testimonials = [
    {
      quote: t('testimonial1Quote'),
      author: t('testimonial1Author'),
      role: t('testimonial1Role'),
      company: t('testimonial1Company'),
      initials: 'SC',
    },
    {
      quote: t('testimonial2Quote'),
      author: t('testimonial2Author'),
      role: t('testimonial2Role'),
      company: t('testimonial2Company'),
      initials: 'MR',
    },
    {
      quote: t('testimonial3Quote'),
      author: t('testimonial3Author'),
      role: t('testimonial3Role'),
      company: t('testimonial3Company'),
      initials: 'EV',
    },
  ]

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

        <StaggerChildren className="mt-16 grid gap-6 md:grid-cols-3" staggerDelay={0.15}>
          {testimonials.map((item, i) => (
            <StaggerItem key={i}>
              <Card className="flex h-full flex-col">
                <svg className="mb-4 h-8 w-8 text-accent-500/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/10 text-xs font-bold text-accent-400">
                    {item.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">
                      {item.author}
                    </div>
                    <div className="text-xs text-text-muted">
                      {item.role}, {item.company}
                    </div>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
