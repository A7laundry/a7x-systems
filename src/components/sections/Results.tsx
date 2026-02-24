'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'

const metricVisuals = [
  // ROI - upward growth bars
  (
    <svg viewBox="0 0 80 40" fill="none" className="h-10 w-20">
      <motion.rect x="5" y="28" width="10" height="12" rx="2" fill="#3b82f6" fillOpacity="0.2" initial={{ height: 0, y: 40 }} whileInView={{ height: 12, y: 28 }} viewport={{ once: true }} transition={{ delay: 0.3 }} />
      <motion.rect x="20" y="20" width="10" height="20" rx="2" fill="#3b82f6" fillOpacity="0.3" initial={{ height: 0, y: 40 }} whileInView={{ height: 20, y: 20 }} viewport={{ once: true }} transition={{ delay: 0.4 }} />
      <motion.rect x="35" y="14" width="10" height="26" rx="2" fill="#60a5fa" fillOpacity="0.4" initial={{ height: 0, y: 40 }} whileInView={{ height: 26, y: 14 }} viewport={{ once: true }} transition={{ delay: 0.5 }} />
      <motion.rect x="50" y="6" width="10" height="34" rx="2" fill="#22d3ee" fillOpacity="0.5" initial={{ height: 0, y: 40 }} whileInView={{ height: 34, y: 6 }} viewport={{ once: true }} transition={{ delay: 0.6 }} />
      <motion.rect x="65" y="2" width="10" height="38" rx="2" fill="#22d3ee" fillOpacity="0.6" initial={{ height: 0, y: 40 }} whileInView={{ height: 38, y: 2 }} viewport={{ once: true }} transition={{ delay: 0.7 }} />
    </svg>
  ),
  // Savings - stacked coins
  (
    <svg viewBox="0 0 60 40" fill="none" className="h-10 w-16">
      <motion.ellipse cx="30" cy="34" rx="18" ry="5" fill="#3b82f6" fillOpacity="0.15" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} />
      <motion.ellipse cx="30" cy="27" rx="18" ry="5" fill="#60a5fa" fillOpacity="0.15" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} />
      <motion.ellipse cx="30" cy="20" rx="18" ry="5" fill="#60a5fa" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} />
      <motion.ellipse cx="30" cy="13" rx="18" ry="5" fill="#22d3ee" fillOpacity="0.2" stroke="#22d3ee" strokeWidth="0.5" strokeOpacity="0.4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} />
      <motion.ellipse cx="30" cy="6" rx="18" ry="5" fill="#22d3ee" fillOpacity="0.25" stroke="#22d3ee" strokeWidth="0.5" strokeOpacity="0.5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }} />
    </svg>
  ),
  // Time reduction - clock with shrinking arc
  (
    <svg viewBox="0 0 44 44" fill="none" className="h-10 w-10">
      <circle cx="22" cy="22" r="18" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.2" />
      <motion.circle cx="22" cy="22" r="18" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="113" initial={{ strokeDashoffset: 113 }} whileInView={{ strokeDashoffset: 36 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.4 }} style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }} />
      <circle cx="22" cy="22" r="2" fill="#60a5fa" />
      <line x1="22" y1="22" x2="22" y2="12" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="22" x2="30" y2="22" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  // Retention - connected people
  (
    <svg viewBox="0 0 70 40" fill="none" className="h-10 w-18">
      <motion.circle cx="20" cy="14" r="6" fill="#3b82f6" fillOpacity="0.15" stroke="#60a5fa" strokeWidth="1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} />
      <motion.circle cx="50" cy="14" r="6" fill="#22d3ee" fillOpacity="0.15" stroke="#22d3ee" strokeWidth="1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} />
      <motion.circle cx="35" cy="14" r="7" fill="#60a5fa" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="1.5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} />
      <motion.path d="M10 36 Q20 24 30 30 Q35 33 40 30 Q50 24 60 36" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" fill="#3b82f6" fillOpacity="0.05" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} />
      <motion.line x1="25" y1="17" x2="30" y2="17" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }} />
      <motion.line x1="40" y1="17" x2="45" y2="17" stroke="#22d3ee" strokeWidth="0.5" strokeOpacity="0.4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }} />
    </svg>
  ),
]

export function Results() {
  const t = useTranslations('results')

  const metrics = [
    {
      value: parseFloat(t('metric1Value')),
      suffix: t('metric1Suffix'),
      label: t('metric1Label'),
      description: t('metric1Description'),
    },
    {
      value: parseFloat(t('metric2Value')),
      prefix: t('metric2Prefix'),
      suffix: t('metric2Suffix'),
      label: t('metric2Label'),
      description: t('metric2Description'),
      decimals: 1,
    },
    {
      value: parseFloat(t('metric3Value')),
      suffix: t('metric3Suffix'),
      label: t('metric3Label'),
      description: t('metric3Description'),
    },
    {
      value: parseFloat(t('metric4Value')),
      suffix: t('metric4Suffix'),
      label: t('metric4Label'),
      description: t('metric4Description'),
    },
  ]

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge={t('badge')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </FadeIn>

        <StaggerChildren className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {metrics.map((metric, i) => (
            <StaggerItem key={i}>
              <div className="rounded-2xl border border-border bg-surface-1 p-6 text-center transition-all duration-300 hover:border-accent-500/30 glow-hover">
                {/* Visual */}
                <div className="mb-4 flex justify-center">
                  {metricVisuals[i]}
                </div>
                <div className="font-serif text-4xl text-text-primary sm:text-5xl">
                  <AnimatedCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    decimals={metric.decimals}
                  />
                </div>
                <div className="mt-2 text-sm font-semibold text-accent-400">
                  {metric.label}
                </div>
                <div className="mt-1 text-xs text-text-muted">
                  {metric.description}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
