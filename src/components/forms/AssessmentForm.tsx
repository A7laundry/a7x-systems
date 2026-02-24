'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'

export function AssessmentForm() {
  const t = useTranslations('contactPage')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-accent-500/30 bg-accent-500/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/10">
          <svg className="h-8 w-8 text-accent-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-text-primary">{t('successTitle')}</h3>
        <p className="mt-2 text-text-secondary">{t('successMessage')}</p>
      </div>
    )
  }

  const inputStyles =
    'w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-text-primary placeholder-text-muted transition-colors focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-text-primary">
          {t('nameLabel')}
        </label>
        <input
          type="text"
          required
          placeholder={t('namePlaceholder')}
          className={inputStyles}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-text-primary">
          {t('emailLabel')}
        </label>
        <input
          type="email"
          required
          placeholder={t('emailPlaceholder')}
          className={inputStyles}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-primary">
            {t('companyLabel')}
          </label>
          <input
            type="text"
            required
            placeholder={t('companyPlaceholder')}
            className={inputStyles}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-primary">
            {t('roleLabel')}
          </label>
          <input
            type="text"
            placeholder={t('rolePlaceholder')}
            className={inputStyles}
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-text-primary">
          {t('sizeLabel')}
        </label>
        <select required className={inputStyles}>
          <option value="">&mdash;</option>
          <option value="1-10">{t('sizeOption1')}</option>
          <option value="11-50">{t('sizeOption2')}</option>
          <option value="51-200">{t('sizeOption3')}</option>
          <option value="201-500">{t('sizeOption4')}</option>
          <option value="500+">{t('sizeOption5')}</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-text-primary">
          {t('challengeLabel')}
        </label>
        <textarea
          required
          rows={4}
          placeholder={t('challengePlaceholder')}
          className={inputStyles}
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? t('submitting') : t('submitButton')}
      </Button>
    </form>
  )
}
