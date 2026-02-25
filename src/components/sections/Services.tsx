'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { DotPattern } from '@/components/ui/DotPattern'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'
import {
  ProcessDiscoveryIllustration,
  WorkflowAutomationIllustration,
  DocumentProcessingIllustration,
  AIAgentsIllustration,
  DataIntegrationIllustration,
  AIMarketingIllustration,
} from '@/components/ui/ServiceIllustrations'
import { AIMarketingModal } from '@/components/ui/AIMarketingModal'

const serviceIllustrations: Record<string, React.ReactNode> = {
  search: <ProcessDiscoveryIllustration />,
  zap: <WorkflowAutomationIllustration />,
  file: <DocumentProcessingIllustration />,
  bot: <AIAgentsIllustration />,
  chart: <DataIntegrationIllustration />,
  megaphone: <AIMarketingIllustration />,
}

export function Services() {
  const t = useTranslations('services')
  const [modalOpen, setModalOpen] = useState(false)

  const services = [
    { title: t('service1Title'), description: t('service1Description'), icon: t('service1Icon') },
    { title: t('service2Title'), description: t('service2Description'), icon: t('service2Icon') },
    { title: t('service3Title'), description: t('service3Description'), icon: t('service3Icon') },
    { title: t('service4Title'), description: t('service4Description'), icon: t('service4Icon') },
    { title: t('service5Title'), description: t('service5Description'), icon: t('service5Icon') },
    { title: t('service6Title'), description: t('service6Description'), icon: t('service6Icon') },
  ]

  return (
    <section className="relative bg-surface-1/30 py-24 sm:py-32">
      <DotPattern />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge={t('badge')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </FadeIn>

        <StaggerChildren className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {services.map((service, i) => (
            <StaggerItem key={i}>
              <Card
                hover
                className={`group h-full${service.icon === 'megaphone' ? ' cursor-pointer' : ''}`}
                onClick={service.icon === 'megaphone' ? () => setModalOpen(true) : undefined}
              >
                {/* Illustration */}
                <div className="mb-4 h-28 w-full overflow-hidden rounded-lg bg-surface-2/50 p-2 transition-all duration-300 group-hover:bg-accent-500/5">
                  {serviceIllustrations[service.icon]}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-primary">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="mt-12 text-center">
          <Link href="/services">
            <Button variant="outline">{t('viewAll')}</Button>
          </Link>
        </FadeIn>
      </div>

      <AIMarketingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
