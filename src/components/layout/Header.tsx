'use client'

import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { NAV_LINKS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { Logo } from './Logo'
import { LanguageSwitcher } from './LanguageSwitcher'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const t = useTranslations('nav')
  const pathname = usePathname()

  return (
    <header className="glass fixed top-0 z-50 w-full">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-accent-400'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link href="/contact">
            <Button size="sm">{t('cta')}</Button>
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  )
}
