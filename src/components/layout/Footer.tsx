import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Logo } from './Logo'

export function Footer() {
  const t = useTranslations('footer')
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface-1/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              {t('description')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-text-primary">
              {t('services')}
            </h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li><Link href="/services" className="transition-colors hover:text-text-secondary">{t('processDiscovery')}</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-text-secondary">{t('workflowAutomation')}</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-text-secondary">{t('documentProcessing')}</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-text-secondary">{t('aiAgents')}</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-text-secondary">{t('dataIntegration')}</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-text-secondary">{t('aiMarketing')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-text-primary">
              {t('company')}
            </h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li><Link href="/about" className="transition-colors hover:text-text-secondary">{t('about')}</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-text-secondary">{t('contact')}</Link></li>
              <li><Link href="/careers" className="transition-colors hover:text-text-secondary">{t('careers')}</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-text-secondary">{t('blog')}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-text-primary">
              {t('legal')}
            </h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li><span className="cursor-default">{t('privacy')}</span></li>
              <li><span className="cursor-default">{t('terms')}</span></li>
              <li><span className="cursor-default">{t('cookies')}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-text-muted">
          {t('copyright', { year })}
        </div>
      </div>
    </footer>
  )
}
