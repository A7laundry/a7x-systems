'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/Button'
import type { AssessmentResult } from '@/lib/assessment'

interface AssessmentResultsProps {
  result: AssessmentResult
}

function AnimatedScore({ target }: { target: number }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const duration = 1500
    const steps = 60
    const increment = target / steps
    let step = 0

    const timer = setInterval(() => {
      step++
      if (step >= steps) {
        setCurrent(target)
        clearInterval(timer)
      } else {
        setCurrent(Math.round(increment * step))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target])

  return <span>{current}</span>
}

function formatCurrency(value: number): string {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`
  if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`
  return `$${value}`
}

export function AssessmentResults({ result }: AssessmentResultsProps) {
  const t = useTranslations('assessment')

  const tierColors = {
    exploring: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10',
    building: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    scaling: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    leading: 'text-green-400 border-green-500/30 bg-green-500/10',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Score */}
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-text-muted">
          {t('scoreLabel')}
        </p>
        <div className="mt-2 font-serif text-7xl text-text-primary">
          <AnimatedScore target={result.score} />
          <span className="text-3xl text-text-muted">/100</span>
        </div>
        <div className={`mt-4 inline-flex rounded-full border px-4 py-1.5 text-sm font-semibold ${tierColors[result.tier]}`}>
          {t(result.tierLabelKey)}
        </div>
      </div>

      {/* Category bars */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
          {t('breakdownTitle')}
        </h4>
        {result.categories.map((cat) => (
          <div key={cat.labelKey}>
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-text-secondary">{t(cat.labelKey)}</span>
              <span className="text-text-primary font-medium">{cat.score}/25</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-surface-2">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent-500 to-cyan-500"
                initial={{ width: 0 }}
                animate={{ width: `${(cat.score / 25) * 100}%` }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Recommendations */}
      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
          {t('recommendationsTitle')}
        </h4>
        <div className="space-y-3">
          {result.recommendations.map((rec, i) => (
            <div
              key={rec}
              className="flex items-start gap-3 rounded-xl border border-border bg-surface-1 p-4"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/10 text-xs font-bold text-accent-400">
                {i + 1}
              </span>
              <p className="text-sm text-text-secondary">{t(rec)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ROI Estimate */}
      <div className="rounded-2xl border border-accent-500/20 bg-accent-500/5 p-6 text-center">
        <p className="text-sm font-medium text-text-muted">{t('roiLabel')}</p>
        <p className="mt-2 font-serif text-3xl text-accent-400">
          {formatCurrency(result.roiRange.min)} – {formatCurrency(result.roiRange.max)}
        </p>
        <p className="mt-1 text-xs text-text-muted">{t('roiDisclaimer')}</p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link href="/contact">
          <Button size="lg">{t('resultsCta')}</Button>
        </Link>
      </div>
    </motion.div>
  )
}
