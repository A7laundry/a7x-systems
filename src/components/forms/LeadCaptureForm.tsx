'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

interface LeadCaptureFormProps {
  onSubmit: () => void
}

export function LeadCaptureForm({ onSubmit }: LeadCaptureFormProps) {
  const t = useTranslations('assessment')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitting(false)
    onSubmit()
  }

  const inputStyles =
    'w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-text-primary placeholder-text-muted transition-colors focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto max-w-md"
    >
      <div className="mb-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/10">
          <svg className="h-8 w-8 text-accent-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-text-primary">{t('leadTitle')}</h3>
        <p className="mt-2 text-sm text-text-muted">{t('leadSubtitle')}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          required
          placeholder={t('leadName')}
          className={inputStyles}
        />
        <input
          type="email"
          required
          placeholder={t('leadEmail')}
          className={inputStyles}
        />
        <Button type="submit" size="lg" className="w-full" disabled={submitting}>
          {submitting ? t('leadSubmitting') : t('leadSubmit')}
        </Button>
      </form>
    </motion.div>
  )
}
