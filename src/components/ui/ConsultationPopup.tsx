'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'

const STORAGE_KEY = 'a7x_consultation_shown'

export function ConsultationPopup() {
  const t = useTranslations('consultationPopup')
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem(STORAGE_KEY)) return

    const timer = setTimeout(() => {
      setOpen(true)
      sessionStorage.setItem(STORAGE_KEY, '1')
    }, 60000)

    return () => clearTimeout(timer)
  }, [])

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [open, close])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitting(false)
    setSubmitted(true)
    setTimeout(close, 3000)
  }

  const inputStyles =
    'w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-text-primary placeholder-text-muted transition-colors focus:border-accent-500 focus:outline-none focus:ring-1 focus:ring-accent-500'

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[61] flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md rounded-2xl border border-border bg-surface-1 p-6 shadow-2xl sm:p-8">
              {/* Close button */}
              <button
                onClick={close}
                className="absolute right-4 top-4 text-text-muted transition-colors hover:text-text-primary"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>

              {submitted ? (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/10">
                    <svg className="h-8 w-8 text-accent-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">{t('successTitle')}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{t('successMessage')}</p>
                </div>
              ) : (
                <>
                  {/* Urgency badge */}
                  <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                    {t('urgencyBadge')}
                  </div>

                  <h2 className="font-serif text-2xl text-text-primary">{t('title')}</h2>
                  <p className="mt-2 text-sm text-text-secondary">{t('subtitle')}</p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <input
                      type="text"
                      required
                      placeholder={t('namePlaceholder')}
                      className={inputStyles}
                    />
                    <input
                      type="email"
                      required
                      placeholder={t('emailPlaceholder')}
                      className={inputStyles}
                    />
                    <input
                      type="text"
                      required
                      placeholder={t('companyPlaceholder')}
                      className={inputStyles}
                    />
                    <select required className={inputStyles}>
                      <option value="">{t('revenuePlaceholder')}</option>
                      <option value="<500k">{t('revenue1')}</option>
                      <option value="500k-1m">{t('revenue2')}</option>
                      <option value="1m-5m">{t('revenue3')}</option>
                      <option value="5m-20m">{t('revenue4')}</option>
                      <option value="20m+">{t('revenue5')}</option>
                    </select>
                    <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                      {submitting ? t('submitting') : t('submitButton')}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
