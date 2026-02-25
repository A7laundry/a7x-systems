'use client'

import { useTranslations } from 'next-intl'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'

export function VHDifferentiation() {
  const t = useTranslations('vhDiff')

  const rows = [
    'monthlyCost',
    'setupTime',
    'directBookings',
    'seo',
    'guestData',
    'scalability',
    'reporting',
    'aiPowered',
  ]

  const columns = [
    { key: 'agency', label: t('agencyLabel') },
    { key: 'diy', label: t('diyLabel') },
    { key: 'a7x', label: t('a7xLabel'), highlighted: true },
  ]

  return (
    <section className="relative bg-surface-1/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge={t('badge')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </FadeIn>

        {/* Mobile: Stacked Cards */}
        <StaggerChildren className="mt-16 grid gap-6 md:hidden" staggerDelay={0.1}>
          {columns.map((col) => (
            <StaggerItem key={col.key}>
              <div
                className={`rounded-2xl border p-6 ${
                  col.highlighted
                    ? 'border-accent-500/50 bg-accent-500/5'
                    : 'border-border bg-surface-1'
                }`}
              >
                <h3
                  className={`mb-4 text-lg font-semibold ${
                    col.highlighted ? 'text-accent-400' : 'text-text-primary'
                  }`}
                >
                  {col.label}
                </h3>
                <div className="space-y-3">
                  {rows.map((row) => (
                    <div key={row} className="flex items-start justify-between gap-2">
                      <span className="text-xs text-text-muted">{t(`row_${row}`)}</span>
                      <span
                        className={`text-right text-sm font-medium ${
                          col.highlighted ? 'text-accent-400' : 'text-text-secondary'
                        }`}
                      >
                        {t(`${col.key}_${row}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Desktop: Comparison Table */}
        <FadeIn delay={0.1} className="mt-16 hidden md:block">
          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-surface-1">
                  <th className="p-4 text-left text-sm font-medium text-text-muted" />
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      className={`p-4 text-center text-sm font-semibold ${
                        col.highlighted
                          ? 'bg-accent-500/5 text-accent-400'
                          : 'text-text-primary'
                      }`}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row}
                    className={`border-b border-border last:border-0 ${
                      i % 2 === 0 ? 'bg-surface-1/50' : ''
                    }`}
                  >
                    <td className="p-4 text-sm font-medium text-text-secondary">
                      {t(`row_${row}`)}
                    </td>
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className={`p-4 text-center text-sm ${
                          col.highlighted
                            ? 'bg-accent-500/5 font-medium text-accent-400'
                            : 'text-text-muted'
                        }`}
                      >
                        {t(`${col.key}_${row}`)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
