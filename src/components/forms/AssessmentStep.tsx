'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import type { Question } from '@/lib/assessment'

interface AssessmentStepProps {
  question: Question
  value: string | string[]
  onChange: (value: string | string[]) => void
}

export function AssessmentStep({ question, value, onChange }: AssessmentStepProps) {
  const t = useTranslations('assessment')

  const handleSingleSelect = (val: string) => onChange(val)
  const handleMultiSelect = (val: string) => {
    const current = Array.isArray(value) ? value : []
    if (current.includes(val)) {
      onChange(current.filter((v) => v !== val))
    } else {
      onChange([...current, val])
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold text-text-primary sm:text-2xl">
        {t(question.titleKey)}
      </h3>
      {question.subtitleKey && (
        <p className="mt-2 text-sm text-text-muted">{t(question.subtitleKey)}</p>
      )}

      <div className="mt-6">
        {/* Single select / Radio */}
        {(question.type === 'single-select' || question.type === 'radio') &&
          question.options && (
            <div className="grid gap-3 sm:grid-cols-2">
              {question.options.map((opt) => {
                const selected = value === opt.value
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleSingleSelect(opt.value)}
                    className={`rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                      selected
                        ? 'border-accent-500 bg-accent-500/10 text-text-primary'
                        : 'border-border bg-surface-2 text-text-secondary hover:border-accent-500/30'
                    }`}
                  >
                    {t(opt.labelKey)}
                  </button>
                )
              })}
            </div>
          )}

        {/* Multi select */}
        {question.type === 'multi-select' && question.options && (
          <div className="grid gap-3 sm:grid-cols-2">
            {question.options.map((opt) => {
              const arr = Array.isArray(value) ? value : []
              const selected = arr.includes(opt.value)
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleMultiSelect(opt.value)}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                    selected
                      ? 'border-accent-500 bg-accent-500/10 text-text-primary'
                      : 'border-border bg-surface-2 text-text-secondary hover:border-accent-500/30'
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs ${
                      selected
                        ? 'border-accent-500 bg-accent-500 text-white'
                        : 'border-border'
                    }`}
                  >
                    {selected && '✓'}
                  </span>
                  {t(opt.labelKey)}
                </button>
              )
            })}
          </div>
        )}

        {/* Range slider */}
        {question.type === 'range' && (
          <div>
            <div className="mb-2 text-center text-3xl font-bold text-accent-400">
              {value || question.rangeMin}{question.rangeSuffix}
            </div>
            <input
              type="range"
              min={question.rangeMin}
              max={question.rangeMax}
              step={5}
              value={(value as string) || String(question.rangeMin)}
              onChange={(e) => onChange(e.target.value)}
              className="w-full accent-accent-500"
            />
            <div className="mt-1 flex justify-between text-xs text-text-muted">
              <span>{question.rangeMin}{question.rangeSuffix}</span>
              <span>{question.rangeMax}{question.rangeSuffix}+</span>
            </div>
          </div>
        )}

        {/* Text input */}
        {question.type === 'text' && (
          <textarea
            rows={3}
            value={(value as string) || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={t('textPlaceholder')}
            className="w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-text-primary placeholder-text-muted transition-colors focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500"
          />
        )}
      </div>
    </motion.div>
  )
}
