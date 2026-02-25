'use client'

import { useState, useEffect, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const STORAGE_KEY = 'vh-popup-dismissed'
const POPUP_DELAY_MS = 60_000 // 60 seconds
const COUPON = 'FEB10BOOST'

function useCountdown(targetDate: Date) {
  const calculate = useCallback(() => {
    const now = new Date().getTime()
    const distance = targetDate.getTime() - now
    if (distance <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    }
  }, [targetDate])

  const [time, setTime] = useState(calculate)

  useEffect(() => {
    const interval = setInterval(() => setTime(calculate()), 1000)
    return () => clearInterval(interval)
  }, [calculate])

  return time
}

export function VHPopup() {
  const t = useTranslations('vhPopup')
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  // End of February 2026
  const deadline = new Date('2026-02-28T23:59:59')
  const countdown = useCountdown(deadline)

  useEffect(() => {
    // Check if already dismissed
    try {
      if (localStorage.getItem(STORAGE_KEY)) return
    } catch {
      // SSR or localStorage unavailable
    }

    const timer = setTimeout(() => {
      setVisible(true)
    }, POPUP_DELAY_MS)

    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    setVisible(false)
    try {
      localStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // Ignore
    }
  }

  const copyCoupon = async () => {
    try {
      await navigator.clipboard.writeText(COUPON)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const timeUnits = [
    { label: t('days'), value: countdown.days },
    { label: t('hours'), value: countdown.hours },
    { label: t('mins'), value: countdown.minutes },
    { label: t('secs'), value: countdown.seconds },
  ]

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed inset-x-4 top-1/2 z-50 mx-auto max-w-lg -translate-y-1/2 sm:inset-x-auto"
          >
            <div className="relative overflow-hidden rounded-2xl border border-violet-500/20 bg-surface-1/95 p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-xl sm:p-8">

              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-text-muted transition-colors hover:bg-white/10 hover:text-text-primary"
                aria-label="Close"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Decorative glow */}
              <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-violet-600/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-amber-500/15 blur-3xl" />

              {/* Badge */}
              <div className="relative mb-4 inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                {t('badge')}
              </div>

              {/* Title */}
              <h3 className="relative font-serif text-2xl text-text-primary sm:text-3xl">
                {t('title')}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-text-secondary">
                {t('subtitle')}
              </p>

              {/* Countdown */}
              <div className="relative mt-6 grid grid-cols-4 gap-3">
                {timeUnits.map((unit) => (
                  <div key={unit.label} className="rounded-xl border border-border bg-black/30 p-3 text-center">
                    <div className="font-serif text-2xl text-text-primary sm:text-3xl">
                      {String(unit.value).padStart(2, '0')}
                    </div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-wider text-text-muted">
                      {unit.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* What you get */}
              <div className="relative mt-6 space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-text-secondary">{t(`item${i}`)}</span>
                  </div>
                ))}
              </div>

              {/* Coupon code */}
              <div className="relative mt-6 flex items-center gap-3 rounded-xl border border-dashed border-violet-500/30 bg-violet-500/5 p-4">
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-wider text-text-muted">{t('couponLabel')}</div>
                  <div className="mt-0.5 font-mono text-lg font-bold tracking-widest text-violet-400">
                    {COUPON}
                  </div>
                </div>
                <button
                  onClick={copyCoupon}
                  className="shrink-0 rounded-lg bg-violet-500/10 px-3 py-2 text-xs font-medium text-violet-400 transition-colors hover:bg-violet-500/20"
                >
                  {copied ? t('copied') : t('copy')}
                </button>
              </div>

              {/* CTA */}
              <div className="relative mt-6">
                <a href="#audit" onClick={dismiss}>
                  <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/20 hover:from-violet-700 hover:to-purple-700">
                    {t('cta')}
                  </Button>
                </a>
                <p className="mt-2 text-center text-[10px] text-text-muted">
                  {t('ctaNote')}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
