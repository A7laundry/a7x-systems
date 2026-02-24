'use client'

import { useState, useMemo } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const INDUSTRY_BENCHMARKS: Record<string, number> = {
  'agency': 0.35,
  'healthcare': 0.30,
  'retail': 0.40,
  'manufacturing': 0.45,
  'professional-services': 0.30,
  'technology': 0.25,
  'other': 0.32,
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(value)
}

function AnimatedNumber({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  return (
    <motion.span
      key={value}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {prefix}{formatNumber(value)}{suffix}
    </motion.span>
  )
}

export function ROICalculator() {
  const t = useTranslations('roiCalculator')

  const [employees, setEmployees] = useState(10)
  const [avgSalary, setAvgSalary] = useState(50000)
  const [manualPercent, setManualPercent] = useState(40)
  const [industry, setIndustry] = useState('other')
  const [showEmailGate, setShowEmailGate] = useState(false)
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const results = useMemo(() => {
    const benchmark = INDUSTRY_BENCHMARKS[industry] || 0.32
    const totalLaborCost = employees * avgSalary
    const manualLaborCost = totalLaborCost * (manualPercent / 100)
    const annualSavings = manualLaborCost * benchmark
    const hoursRecovered = employees * 2080 * (manualPercent / 100) * benchmark
    const roi = ((annualSavings / (annualSavings * 0.3)) * 100)

    return {
      annualSavings: Math.round(annualSavings),
      hoursRecovered: Math.round(hoursRecovered),
      roi: Math.round(roi),
      currentManualCost: Math.round(manualLaborCost),
      afterAutomation: Math.round(manualLaborCost - annualSavings),
    }
  }, [employees, avgSalary, manualPercent, industry])

  const inputStyles =
    'w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-text-primary placeholder-text-muted transition-colors focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500'

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Inputs */}
      <Card className="p-6 sm:p-8">
        <h2 className="mb-6 text-lg font-semibold text-text-primary">{t('inputsTitle')}</h2>

        <div className="space-y-6">
          {/* Employees stepper */}
          <div>
            <label className="mb-2 block text-sm font-medium text-text-primary">
              {t('employeesLabel')}
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setEmployees((e) => Math.max(1, e - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-2 text-text-primary transition-colors hover:border-accent-500/30"
              >
                -
              </button>
              <input
                type="number"
                min={1}
                value={employees}
                onChange={(e) => setEmployees(Math.max(1, parseInt(e.target.value) || 1))}
                className={`${inputStyles} text-center`}
              />
              <button
                type="button"
                onClick={() => setEmployees((e) => e + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-2 text-text-primary transition-colors hover:border-accent-500/30"
              >
                +
              </button>
            </div>
          </div>

          {/* Average Salary */}
          <div>
            <label className="mb-2 block text-sm font-medium text-text-primary">
              {t('salaryLabel')}
            </label>
            <input
              type="number"
              min={10000}
              step={5000}
              value={avgSalary}
              onChange={(e) => setAvgSalary(Math.max(10000, parseInt(e.target.value) || 10000))}
              className={inputStyles}
            />
          </div>

          {/* Manual time slider */}
          <div>
            <label className="mb-2 block text-sm font-medium text-text-primary">
              {t('manualLabel')}
            </label>
            <div className="mb-2 text-center text-2xl font-bold text-accent-400">
              {manualPercent}%
            </div>
            <input
              type="range"
              min={10}
              max={80}
              step={5}
              value={manualPercent}
              onChange={(e) => setManualPercent(parseInt(e.target.value))}
              className="w-full accent-accent-500"
            />
            <div className="mt-1 flex justify-between text-xs text-text-muted">
              <span>10%</span>
              <span>80%</span>
            </div>
          </div>

          {/* Industry */}
          <div>
            <label className="mb-2 block text-sm font-medium text-text-primary">
              {t('industryLabel')}
            </label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className={inputStyles}
            >
              <option value="agency">{t('industryAgency')}</option>
              <option value="healthcare">{t('industryHealthcare')}</option>
              <option value="retail">{t('industryRetail')}</option>
              <option value="manufacturing">{t('industryManufacturing')}</option>
              <option value="professional-services">{t('industryProfessional')}</option>
              <option value="technology">{t('industryTechnology')}</option>
              <option value="other">{t('industryOther')}</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Results */}
      <div className="space-y-6">
        <Card className="p-6 sm:p-8">
          <h2 className="mb-6 text-lg font-semibold text-text-primary">{t('resultsTitle')}</h2>

          <div className="space-y-6">
            {/* Annual Savings */}
            <div className="rounded-xl border border-accent-500/20 bg-accent-500/5 p-4 text-center">
              <p className="text-sm text-text-muted">{t('savingsLabel')}</p>
              <p className="mt-1 font-serif text-4xl text-accent-400">
                <AnimatedNumber value={results.annualSavings} prefix="$" />
              </p>
            </div>

            {/* Hours + ROI */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-surface-1 p-4 text-center">
                <p className="text-xs text-text-muted">{t('hoursLabel')}</p>
                <p className="mt-1 font-serif text-2xl text-text-primary">
                  <AnimatedNumber value={results.hoursRecovered} />
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface-1 p-4 text-center">
                <p className="text-xs text-text-muted">{t('roiLabel')}</p>
                <p className="mt-1 font-serif text-2xl text-text-primary">
                  <AnimatedNumber value={results.roi} suffix="%" />
                </p>
              </div>
            </div>

            {/* Before/After bars */}
            <div>
              <p className="mb-3 text-sm font-medium text-text-muted">{t('comparisonTitle')}</p>

              <div className="space-y-3">
                <div>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-red-400">{t('beforeLabel')}</span>
                    <span className="text-text-muted">{formatCurrency(results.currentManualCost)}</span>
                  </div>
                  <div className="h-4 overflow-hidden rounded-full bg-surface-2">
                    <motion.div
                      className="h-full rounded-full bg-red-500/60"
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-accent-400">{t('afterLabel')}</span>
                    <span className="text-text-muted">{formatCurrency(results.afterAutomation)}</span>
                  </div>
                  <div className="h-4 overflow-hidden rounded-full bg-surface-2">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent-500 to-cyan-500"
                      animate={{
                        width: `${results.currentManualCost > 0 ? (results.afterAutomation / results.currentManualCost) * 100 : 0}%`,
                      }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Email gate for detailed report */}
        <AnimatePresence mode="wait">
          {!showEmailGate && !emailSubmitted && (
            <motion.div exit={{ opacity: 0 }}>
              <Button
                onClick={() => setShowEmailGate(true)}
                variant="outline"
                className="w-full"
              >
                {t('downloadReport')}
              </Button>
            </motion.div>
          )}

          {showEmailGate && !emailSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-6">
                <p className="mb-4 text-sm text-text-secondary">{t('emailGateText')}</p>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault()
                    await new Promise((r) => setTimeout(r, 800))
                    setEmailSubmitted(true)
                    setShowEmailGate(false)
                  }}
                  className="flex gap-3"
                >
                  <input
                    type="email"
                    required
                    placeholder={t('emailPlaceholder')}
                    className={`${inputStyles} flex-1`}
                  />
                  <Button type="submit">{t('emailSubmit')}</Button>
                </form>
              </Card>
            </motion.div>
          )}

          {emailSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/10">
                  <svg className="h-6 w-6 text-accent-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-sm text-text-secondary">{t('emailSuccess')}</p>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
