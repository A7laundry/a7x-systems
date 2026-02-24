'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { NAV_LINKS, LOCALES, LOCALE_LABELS, type Locale } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { Logo } from './Logo'

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const t = useTranslations('nav')
  const pathname = usePathname()
  const locale = useLocale() as Locale
  const router = useRouter()

  function switchLocale(newLocale: Locale) {
    router.replace(pathname, { locale: newLocale })
    setOpen(false)
  }

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="relative z-50 flex h-10 w-10 items-center justify-center text-text-secondary"
        aria-label="Toggle menu"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          )}
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background"
          >
            <div className="flex h-full flex-col px-6 pt-24">
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-4 py-3 text-lg font-medium transition-colors ${
                      pathname === link.href
                        ? 'bg-accent-500/10 text-accent-400'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {t(link.key)}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 border-t border-border pt-6">
                <p className="mb-3 px-4 text-xs font-medium uppercase tracking-wider text-text-muted">
                  Language
                </p>
                <div className="flex gap-2 px-4">
                  {LOCALES.map((l) => (
                    <button
                      key={l}
                      onClick={() => switchLocale(l)}
                      className={`rounded-lg px-4 py-2 text-sm transition-colors ${
                        l === locale
                          ? 'bg-accent-500/10 text-accent-400'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {LOCALE_LABELS[l]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 px-4">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  <Button size="lg" className="w-full">
                    {t('cta')}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
