'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { SmartLink } from '@/components/ui/SmartLink'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { GradientText } from '@/components/ui/GradientText'
import { GridPattern } from '@/components/ui/GridPattern'
import { GradientOrb } from '@/components/ui/GradientOrb'

function HouseIllustration() {
  return (
    <motion.svg
      viewBox="0 0 400 320"
      fill="none"
      className="h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Sky gradient */}
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="houseGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.04" />
        </linearGradient>
        <radialGradient id="sunGrad">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#f97316" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sun with glow */}
      <motion.circle
        cx="320" cy="80" r="50"
        fill="url(#sunGrad)"
        animate={{ r: [48, 52, 48] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle
        cx="320" cy="80" r="20"
        fill="#fbbf24" fillOpacity="0.4"
        animate={{ fillOpacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Stars */}
      {[
        { cx: 40, cy: 30, r: 1.2 },
        { cx: 100, cy: 15, r: 1 },
        { cx: 180, cy: 40, r: 0.8 },
        { cx: 250, cy: 20, r: 1.1 },
        { cx: 60, cy: 65, r: 0.7 },
      ].map((star, i) => (
        <motion.circle
          key={i}
          cx={star.cx} cy={star.cy} r={star.r}
          fill="#fbbf24" fillOpacity="0.4"
          animate={{ fillOpacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      {/* Palm tree left */}
      <motion.g
        animate={{ rotate: [-1, 1, -1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '60px 250px' }}
      >
        <line x1="60" y1="250" x2="65" y2="140" stroke="#059669" strokeWidth="3" strokeOpacity="0.4" />
        <path d="M65 140 Q45 125 30 135" stroke="#10b981" strokeWidth="2.5" strokeOpacity="0.4" fill="none" />
        <path d="M65 140 Q80 120 95 130" stroke="#10b981" strokeWidth="2.5" strokeOpacity="0.4" fill="none" />
        <path d="M65 140 Q55 118 40 120" stroke="#34d399" strokeWidth="2" strokeOpacity="0.3" fill="none" />
        <path d="M65 140 Q75 125 85 118" stroke="#34d399" strokeWidth="2" strokeOpacity="0.3" fill="none" />
        <path d="M65 140 Q60 115 50 110" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.25" fill="none" />
      </motion.g>

      {/* Palm tree right */}
      <motion.g
        animate={{ rotate: [1, -1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '360px 240px' }}
      >
        <line x1="360" y1="240" x2="355" y2="150" stroke="#059669" strokeWidth="2.5" strokeOpacity="0.35" />
        <path d="M355 150 Q340 135 325 142" stroke="#10b981" strokeWidth="2" strokeOpacity="0.35" fill="none" />
        <path d="M355 150 Q370 132 382 138" stroke="#10b981" strokeWidth="2" strokeOpacity="0.35" fill="none" />
        <path d="M355 150 Q348 130 338 128" stroke="#34d399" strokeWidth="1.5" strokeOpacity="0.25" fill="none" />
      </motion.g>

      {/* House - Main structure */}
      <rect x="120" y="160" width="180" height="100" rx="4" fill="url(#houseGrad)" stroke="#cbd5e1" strokeWidth="1" strokeOpacity="0.15" />

      {/* House - Roof */}
      <path d="M110 165 L210 110 L310 165" stroke="#d97706" strokeWidth="2" strokeOpacity="0.3" fill="#d97706" fillOpacity="0.05" />

      {/* Windows with warm glow */}
      {[
        { x: 140, y: 180, w: 30, h: 25 },
        { x: 185, y: 180, w: 30, h: 25 },
        { x: 250, y: 180, w: 30, h: 25 },
      ].map((win, i) => (
        <g key={i}>
          <rect x={win.x} y={win.y} width={win.w} height={win.h} rx="2" fill="#fbbf24" fillOpacity="0.12" stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.2" />
          <motion.rect
            x={win.x} y={win.y} width={win.w} height={win.h} rx="2"
            fill="#fbbf24"
            animate={{ fillOpacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
          />
        </g>
      ))}

      {/* Door */}
      <rect x="195" y="220" width="26" height="40" rx="3" fill="#1e293b" fillOpacity="0.2" stroke="#d97706" strokeWidth="0.5" strokeOpacity="0.2" />

      {/* Pool */}
      <motion.ellipse
        cx="210" cy="285" rx="70" ry="18"
        fill="url(#waterGrad)" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.2"
        animate={{ ry: [17, 19, 17] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Pool water ripples */}
      {[0, 1, 2].map((i) => (
        <motion.ellipse
          key={i}
          cx={190 + i * 20} cy="285"
          rx="8" ry="2"
          stroke="#22d3ee" strokeWidth="0.5" strokeOpacity="0.2"
          fill="none"
          animate={{ rx: [6, 12, 6], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
        />
      ))}

      {/* Ground / Deck */}
      <rect x="100" y="260" width="220" height="8" rx="2" fill="#92400e" fillOpacity="0.08" />

      {/* Warm ambient glow from house */}
      <motion.ellipse
        cx="210" cy="260"
        rx="100" ry="30"
        fill="#fbbf24" fillOpacity="0.03"
        animate={{ fillOpacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.svg>
  )
}

export function VHHero() {
  const t = useTranslations('vhHero')

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
      <GridPattern />

      {/* Warm gradient orbs */}
      <GradientOrb
        className="left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2"
        color1="rgba(245, 158, 11, 0.1)"
        color2="rgba(249, 115, 22, 0.05)"
        size={600}
        duration={20}
      />
      <GradientOrb
        className="right-1/4 top-1/2 translate-x-1/2 -translate-y-1/2"
        color1="rgba(6, 182, 212, 0.08)"
        color2="rgba(245, 158, 11, 0.04)"
        size={500}
        duration={25}
        delay={3}
      />
      <GradientOrb
        className="left-1/2 bottom-0 -translate-x-1/2"
        color1="rgba(249, 115, 22, 0.06)"
        color2="rgba(59, 130, 246, 0.03)"
        size={400}
        duration={18}
        delay={5}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <Badge>{t('badge')}</Badge>
              <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                {t('location')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 font-serif text-4xl font-normal leading-tight text-text-primary sm:text-5xl lg:text-6xl"
            >
              {t('headline1')}{' '}
              <span className="gradient-text-warm">{t('headline2')}</span>
              <br />
              <GradientText>{t('headline3')}</GradientText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-text-secondary"
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <SmartLink href="#audit">
                <Button size="lg" className="pulse-cta bg-gradient-to-r from-amber-500 to-orange-600 shadow-lg shadow-amber-500/20 hover:from-amber-600 hover:to-orange-700 hover:shadow-amber-500/40">
                  {t('cta1')}
                </Button>
              </SmartLink>
              <SmartLink href="#solution">
                <Button variant="outline" size="lg">
                  {t('cta2')}
                </Button>
              </SmartLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8"
            >
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="font-serif text-2xl text-text-primary sm:text-3xl">
                    <span className="gradient-text-gold">{t(`stat${i}Value`)}</span>
                  </div>
                  <div className="mt-1 text-xs text-text-muted sm:text-sm">
                    {t(`stat${i}Label`)}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex lg:items-center lg:justify-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="float">
                <HouseIllustration />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
