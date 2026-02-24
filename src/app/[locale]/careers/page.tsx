import { getTranslations } from 'next-intl/server'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'careersPage' })

  const values = [
    { title: t('why1Title'), description: t('why1Description') },
    { title: t('why2Title'), description: t('why2Description') },
    { title: t('why3Title'), description: t('why3Description') },
    { title: t('why4Title'), description: t('why4Description') },
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

      {/* Why A7X */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-8 text-center font-serif text-3xl text-text-primary">
              {t('whyTitle')}
            </h2>
          </FadeIn>

          <StaggerChildren className="grid gap-6 md:grid-cols-2" staggerDelay={0.1}>
            {values.map((value, i) => (
              <StaggerItem key={i}>
                <Card hover className="h-full">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
                    <span className="text-lg font-bold">{i + 1}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-text-primary">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {value.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Open Positions */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="mb-8 text-center font-serif text-3xl text-text-primary">
              {t('openingsTitle')}
            </h2>

            <div className="mx-auto max-w-2xl text-center">
              <Card className="p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/10">
                  <svg className="h-8 w-8 text-accent-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </div>
                <p className="text-text-secondary">{t('noOpenings')}</p>
                <p className="mt-2 text-sm text-text-muted">{t('noOpeningsAction')}</p>
                <div className="mt-6">
                  <a href="mailto:careers@a7xsystems.com">
                    <Button>{t('emailCta')}</Button>
                  </a>
                </div>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
