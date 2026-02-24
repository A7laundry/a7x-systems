'use client'

import { useTranslations } from 'next-intl'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { GradientText } from '@/components/ui/GradientText'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'

export default function AboutPage() {
  const t = useTranslations('aboutPage')

  const values = [
    { title: t('value1Title'), description: t('value1Description'), icon: '01' },
    { title: t('value2Title'), description: t('value2Description'), icon: '02' },
    { title: t('value3Title'), description: t('value3Description'), icon: '03' },
    { title: t('value4Title'), description: t('value4Description'), icon: '04' },
  ]

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

      {/* Story */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl text-text-primary">{t('storyTitle')}</h2>
            <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
              <p>{t('storyP1')}</p>
              <p>{t('storyP2')}</p>
              <p>{t('storyP3')}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface-1/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <Card className="h-full">
                <GradientText className="text-sm font-bold uppercase tracking-wider">
                  {t('missionTitle')}
                </GradientText>
                <p className="mt-4 font-serif text-xl text-text-primary leading-relaxed">
                  {t('missionDescription')}
                </p>
              </Card>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Card className="h-full">
                <GradientText className="text-sm font-bold uppercase tracking-wider">
                  {t('visionTitle')}
                </GradientText>
                <p className="mt-4 font-serif text-xl text-text-primary leading-relaxed">
                  {t('visionDescription')}
                </p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-center font-serif text-3xl text-text-primary sm:text-4xl">
              {t('valuesTitle')}
            </h2>
          </FadeIn>

          <StaggerChildren className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <Card hover className="h-full text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/10">
                    <GradientText className="text-sm font-bold">{v.icon}</GradientText>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-text-primary">{v.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{v.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface-1/30 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl text-text-primary sm:text-4xl">
              {t('teamTitle')}
            </h2>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              {t('teamDescription')}
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
