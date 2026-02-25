'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'

interface ThemeConfig {
  key: string
  gradient: string
  accent: string
  icon: React.ReactNode
}

const themes: ThemeConfig[] = [
  {
    key: 'beachfront',
    gradient: 'from-sky-500/20 via-cyan-500/15 to-blue-600/20',
    accent: 'text-cyan-400',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16">
        {/* Sun */}
        <circle cx="48" cy="16" r="8" fill="#fbbf24" fillOpacity="0.6" />
        <circle cx="48" cy="16" r="5" fill="#f59e0b" fillOpacity="0.8" />
        {/* Waves */}
        <path d="M4 40 Q12 34 20 40 Q28 46 36 40 Q44 34 52 40 Q60 46 64 42" stroke="#22d3ee" strokeWidth="2" strokeOpacity="0.6" fill="none" />
        <path d="M4 46 Q12 40 20 46 Q28 52 36 46 Q44 40 52 46 Q60 52 64 48" stroke="#06b6d4" strokeWidth="2" strokeOpacity="0.4" fill="none" />
        {/* Sand */}
        <path d="M0 52 Q16 48 32 50 Q48 52 64 49 L64 64 L0 64 Z" fill="#d97706" fillOpacity="0.15" />
        {/* Palm tree */}
        <line x1="14" y1="50" x2="16" y2="24" stroke="#059669" strokeWidth="2" strokeOpacity="0.5" />
        <path d="M16 24 Q8 20 4 26" stroke="#10b981" strokeWidth="2" strokeOpacity="0.5" fill="none" />
        <path d="M16 24 Q22 18 28 22" stroke="#10b981" strokeWidth="2" strokeOpacity="0.5" fill="none" />
        <path d="M16 24 Q12 16 8 18" stroke="#34d399" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      </svg>
    ),
  },
  {
    key: 'tropical',
    gradient: 'from-emerald-500/20 via-green-500/15 to-amber-500/15',
    accent: 'text-emerald-400',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16">
        {/* Large leaf */}
        <path d="M32 56 Q20 40 16 28 Q12 16 20 10 Q28 4 36 12 Q44 20 40 32 Q36 44 32 56Z" fill="#10b981" fillOpacity="0.25" stroke="#34d399" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="32" y1="56" x2="28" y2="16" stroke="#34d399" strokeWidth="1" strokeOpacity="0.3" />
        {/* Small leaf */}
        <path d="M42 50 Q48 40 52 34 Q56 28 52 24 Q48 20 44 26 Q40 32 38 42 Z" fill="#059669" fillOpacity="0.2" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
        {/* Flower */}
        <circle cx="46" cy="18" r="3" fill="#f59e0b" fillOpacity="0.5" />
        <circle cx="46" cy="18" r="1.5" fill="#fbbf24" fillOpacity="0.7" />
        {/* Dots */}
        <circle cx="22" cy="48" r="1.5" fill="#34d399" fillOpacity="0.3" />
        <circle cx="50" cy="44" r="1" fill="#fbbf24" fillOpacity="0.3" />
        <circle cx="12" cy="36" r="1" fill="#10b981" fillOpacity="0.3" />
      </svg>
    ),
  },
  {
    key: 'modern',
    gradient: 'from-slate-400/15 via-zinc-500/10 to-slate-600/15',
    accent: 'text-slate-300',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16">
        {/* Building */}
        <rect x="14" y="16" width="36" height="40" rx="2" stroke="#94a3b8" strokeWidth="1.5" strokeOpacity="0.4" fill="#334155" fillOpacity="0.15" />
        {/* Windows grid */}
        <rect x="20" y="22" width="6" height="6" rx="1" fill="#60a5fa" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.3" />
        <rect x="29" y="22" width="6" height="6" rx="1" fill="#60a5fa" fillOpacity="0.3" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.3" />
        <rect x="38" y="22" width="6" height="6" rx="1" fill="#60a5fa" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.3" />
        <rect x="20" y="32" width="6" height="6" rx="1" fill="#60a5fa" fillOpacity="0.15" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.3" />
        <rect x="29" y="32" width="6" height="6" rx="1" fill="#fbbf24" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.4" />
        <rect x="38" y="32" width="6" height="6" rx="1" fill="#60a5fa" fillOpacity="0.15" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.3" />
        {/* Door */}
        <rect x="27" y="44" width="10" height="12" rx="1" fill="#1e293b" fillOpacity="0.3" stroke="#94a3b8" strokeWidth="0.5" strokeOpacity="0.3" />
        {/* Pool */}
        <ellipse cx="54" cy="52" rx="8" ry="4" fill="#22d3ee" fillOpacity="0.15" stroke="#22d3ee" strokeWidth="0.5" strokeOpacity="0.3" />
      </svg>
    ),
  },
  {
    key: 'family',
    gradient: 'from-orange-500/20 via-yellow-500/15 to-green-500/15',
    accent: 'text-orange-400',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16">
        {/* House */}
        <path d="M12 32 L32 14 L52 32" stroke="#f97316" strokeWidth="2" strokeOpacity="0.5" fill="none" />
        <rect x="18" y="32" width="28" height="22" rx="2" fill="#f97316" fillOpacity="0.1" stroke="#f97316" strokeWidth="1" strokeOpacity="0.3" />
        {/* Door */}
        <rect x="28" y="40" width="8" height="14" rx="1" fill="#fbbf24" fillOpacity="0.15" stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.3" />
        {/* Window */}
        <rect x="22" y="36" width="5" height="5" rx="1" fill="#60a5fa" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.3" />
        <rect x="37" y="36" width="5" height="5" rx="1" fill="#60a5fa" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.3" />
        {/* Stars */}
        <circle cx="50" cy="10" r="1.5" fill="#fbbf24" fillOpacity="0.5" />
        <circle cx="44" cy="6" r="1" fill="#fbbf24" fillOpacity="0.4" />
        <circle cx="56" cy="14" r="1" fill="#fbbf24" fillOpacity="0.3" />
        {/* Tree */}
        <circle cx="8" cy="40" r="6" fill="#10b981" fillOpacity="0.15" />
        <line x1="8" y1="46" x2="8" y2="54" stroke="#92400e" strokeWidth="1.5" strokeOpacity="0.3" />
      </svg>
    ),
  },
  {
    key: 'romantic',
    gradient: 'from-rose-500/20 via-pink-500/15 to-amber-500/15',
    accent: 'text-rose-400',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16">
        {/* Sunset */}
        <circle cx="32" cy="32" r="14" fill="url(#sunsetGrad)" fillOpacity="0.2" />
        <defs>
          <radialGradient id="sunsetGrad">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ec4899" />
          </radialGradient>
        </defs>
        {/* Horizon line */}
        <line x1="4" y1="40" x2="60" y2="40" stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.3" />
        {/* Water reflection */}
        <path d="M8 44 Q16 42 24 44 Q32 46 40 44 Q48 42 56 44" stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />
        <path d="M12 48 Q20 46 28 48 Q36 50 44 48 Q52 46 56 48" stroke="#ec4899" strokeWidth="0.5" strokeOpacity="0.15" fill="none" />
        {/* Heart shape */}
        <path d="M32 24 Q28 16 22 18 Q16 20 18 26 Q20 32 32 38 Q44 32 46 26 Q48 20 42 18 Q36 16 32 24Z" fill="#ec4899" fillOpacity="0.15" stroke="#f472b6" strokeWidth="1" strokeOpacity="0.3" />
        {/* Stars */}
        <circle cx="12" cy="12" r="1" fill="#fbbf24" fillOpacity="0.5" />
        <circle cx="52" cy="8" r="1.5" fill="#fbbf24" fillOpacity="0.4" />
        <circle cx="8" cy="22" r="0.8" fill="#fbbf24" fillOpacity="0.3" />
      </svg>
    ),
  },
  {
    key: 'designer',
    gradient: 'from-amber-500/20 via-yellow-600/15 to-stone-500/15',
    accent: 'text-amber-400',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16">
        {/* Chandelier top */}
        <line x1="32" y1="4" x2="32" y2="14" stroke="#d97706" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M22 14 L32 14 L42 14" stroke="#d97706" strokeWidth="1" strokeOpacity="0.4" />
        {/* Chandelier drops */}
        <line x1="22" y1="14" x2="22" y2="22" stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.3" />
        <line x1="27" y1="14" x2="27" y2="20" stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.3" />
        <line x1="32" y1="14" x2="32" y2="24" stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.3" />
        <line x1="37" y1="14" x2="37" y2="20" stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.3" />
        <line x1="42" y1="14" x2="42" y2="22" stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.3" />
        {/* Light glow */}
        <circle cx="22" cy="22" r="2" fill="#fbbf24" fillOpacity="0.3" />
        <circle cx="32" cy="24" r="2.5" fill="#fbbf24" fillOpacity="0.4" />
        <circle cx="42" cy="22" r="2" fill="#fbbf24" fillOpacity="0.3" />
        {/* Luxury sofa */}
        <path d="M12 48 Q12 40 18 40 L46 40 Q52 40 52 48 L52 52 L12 52 Z" fill="#92400e" fillOpacity="0.15" stroke="#d97706" strokeWidth="1" strokeOpacity="0.3" />
        {/* Pillows */}
        <ellipse cx="22" cy="42" rx="4" ry="3" fill="#f59e0b" fillOpacity="0.15" stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.2" />
        <ellipse cx="42" cy="42" rx="4" ry="3" fill="#f59e0b" fillOpacity="0.15" stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.2" />
        {/* Frame on wall */}
        <rect x="26" y="30" width="12" height="8" rx="1" stroke="#d97706" strokeWidth="0.5" strokeOpacity="0.25" fill="none" />
        {/* Floor */}
        <line x1="4" y1="56" x2="60" y2="56" stroke="#92400e" strokeWidth="0.5" strokeOpacity="0.2" />
      </svg>
    ),
  },
]

export function VHShowcase() {
  const t = useTranslations('vhShowcase')

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            badge={t('badge')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </FadeIn>

        <StaggerChildren className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {themes.map((theme) => (
            <StaggerItem key={theme.key}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full"
              >
                <div className={`shimmer theme-card-overlay h-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${theme.gradient} p-6 transition-all duration-500 hover:border-amber-500/30 glow-warm`}>
                  {/* Theme illustration */}
                  <div className="mb-6 flex h-32 items-center justify-center rounded-xl bg-black/20 transition-all duration-500 group-hover:bg-black/10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      {theme.icon}
                    </motion.div>
                  </div>

                  {/* Theme info */}
                  <h3 className={`mb-2 text-lg font-semibold ${theme.accent}`}>
                    {t(`${theme.key}Title`)}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-text-muted">
                    {t(`${theme.key}Desc`)}
                  </p>

                  {/* Marketing angle */}
                  <div className="flex items-center gap-2 border-t border-white/5 pt-4">
                    <svg className="h-4 w-4 text-amber-400/60" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                    <span className="text-xs text-text-muted">
                      {t(`${theme.key}Marketing`)}
                    </span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-sm text-text-muted">
              {t('bottomNote')}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
