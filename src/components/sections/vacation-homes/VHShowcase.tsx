'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn } from '@/components/motion/FadeIn'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'

interface ThemeConfig {
  key: string
  image: string
  gradient: string
  accent: string
  overlayColor: string
}

const themes: ThemeConfig[] = [
  {
    key: 'beachfront',
    image: '/images/vh-pool.jpg',
    gradient: 'from-sky-500/20 via-cyan-500/15 to-blue-600/20',
    accent: 'text-cyan-400',
    overlayColor: 'from-cyan-900/80 via-cyan-900/50 to-transparent',
  },
  {
    key: 'tropical',
    image: '/images/vh-cozy.jpg',
    gradient: 'from-emerald-500/20 via-green-500/15 to-amber-500/15',
    accent: 'text-emerald-400',
    overlayColor: 'from-emerald-900/80 via-emerald-900/50 to-transparent',
  },
  {
    key: 'modern',
    image: '/images/vh-bedroom-clean.jpg',
    gradient: 'from-slate-400/15 via-zinc-500/10 to-slate-600/15',
    accent: 'text-slate-300',
    overlayColor: 'from-slate-900/80 via-slate-900/50 to-transparent',
  },
  {
    key: 'family',
    image: '/images/vh-arcade.jpg',
    gradient: 'from-orange-500/20 via-yellow-500/15 to-green-500/15',
    accent: 'text-orange-400',
    overlayColor: 'from-orange-900/80 via-orange-900/50 to-transparent',
  },
  {
    key: 'romantic',
    image: '/images/vh-bathroom.jpg',
    gradient: 'from-rose-500/20 via-pink-500/15 to-amber-500/15',
    accent: 'text-rose-400',
    overlayColor: 'from-rose-900/80 via-rose-900/50 to-transparent',
  },
  {
    key: 'designer',
    image: '/images/vh-living-new.jpg',
    gradient: 'from-amber-500/20 via-yellow-600/15 to-stone-500/15',
    accent: 'text-amber-400',
    overlayColor: 'from-amber-900/80 via-amber-900/50 to-transparent',
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
                <div className="h-full overflow-hidden rounded-2xl border border-border transition-all duration-500 hover:border-amber-500/30 glow-warm">
                  {/* Photo */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={theme.image}
                      alt={t(`${theme.key}Title`)}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${theme.overlayColor}`} />

                    {/* Theme badge on image */}
                    <div className="absolute left-3 top-3">
                      <span className={`inline-flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider backdrop-blur-sm ${theme.accent}`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {t(`${theme.key}Title`)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`bg-gradient-to-br ${theme.gradient} p-5`}>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {t(`${theme.key}Desc`)}
                    </p>

                    {/* Marketing angle */}
                    <div className="mt-4 flex items-center gap-2 border-t border-white/5 pt-3">
                      <svg className="h-4 w-4 text-amber-400/60" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                      </svg>
                      <span className="text-xs text-text-muted">
                        {t(`${theme.key}Marketing`)}
                      </span>
                    </div>
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
