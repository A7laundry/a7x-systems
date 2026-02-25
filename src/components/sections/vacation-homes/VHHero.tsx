'use client'

import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { SmartLink } from '@/components/ui/SmartLink'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { GradientOrb } from '@/components/ui/GradientOrb'

/* ───────────────────────────────────────────────
   Futuristic Themed Room — Orlando Style
   Cinematic LED-lit bedroom, wide angle, immersive
   ─────────────────────────────────────────────── */
function FuturisticRoom() {
  return (
    <motion.svg
      viewBox="0 0 480 360"
      fill="none"
      className="h-full w-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
    >
      <defs>
        {/* Room ambient */}
        <linearGradient id="roomFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1030" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0a0612" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="roomCeiling" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f0a1a" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1a1030" stopOpacity="0.3" />
        </linearGradient>
        {/* Neon glows */}
        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Window sky gradient */}
        <linearGradient id="windowSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c1445" />
          <stop offset="60%" stopColor="#1a1040" />
          <stop offset="100%" stopColor="#2d1b69" />
        </linearGradient>
        {/* Bed gradient */}
        <linearGradient id="bedGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1535" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#120e20" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* ─── Room structure ─── */}
      {/* Back wall */}
      <rect x="40" y="40" width="400" height="200" fill="url(#roomCeiling)" />
      {/* Floor */}
      <path d="M0 240 L40 240 L440 240 L480 360 L0 360Z" fill="url(#roomFloor)" />
      {/* Left wall perspective */}
      <path d="M0 20 L40 40 L40 240 L0 360Z" fill="#0f0a1a" fillOpacity="0.5" />
      {/* Right wall perspective */}
      <path d="M480 20 L440 40 L440 240 L480 360Z" fill="#0f0a1a" fillOpacity="0.5" />

      {/* ─── Window with night sky ─── */}
      <rect x="160" y="55" width="160" height="110" rx="3" fill="url(#windowSky)" />
      <rect x="160" y="55" width="160" height="110" rx="3" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.3" />
      {/* Window frame */}
      <line x1="240" y1="55" x2="240" y2="165" stroke="#4c1d95" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="160" y1="110" x2="320" y2="110" stroke="#4c1d95" strokeWidth="1" strokeOpacity="0.3" />
      {/* Stars through window */}
      {[
        { cx: 180, cy: 72, r: 1.2 }, { cx: 210, cy: 85, r: 0.8 },
        { cx: 260, cy: 68, r: 1 }, { cx: 290, cy: 95, r: 0.7 },
        { cx: 195, cy: 100, r: 0.6 }, { cx: 305, cy: 75, r: 1.1 },
        { cx: 175, cy: 140, r: 0.5 }, { cx: 250, cy: 130, r: 0.9 },
      ].map((s, i) => (
        <motion.circle
          key={`star-${i}`} cx={s.cx} cy={s.cy} r={s.r}
          fill="#e0e7ff"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 1.5 + i * 0.4, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
      {/* Moon */}
      <circle cx="300" cy="80" r="10" fill="#c4b5fd" fillOpacity="0.3" />
      <circle cx="303" cy="78" r="8" fill="#ddd6fe" fillOpacity="0.15" />

      {/* ─── Ceiling LED strip ─── */}
      <motion.line
        x1="45" y1="42" x2="435" y2="42"
        stroke="#a78bfa" strokeWidth="2"
        filter="url(#neonGlow)"
        animate={{ strokeOpacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Ceiling LED glow on wall */}
      <motion.rect
        x="45" y="42" width="390" height="30"
        fill="#a78bfa"
        animate={{ fillOpacity: [0.02, 0.06, 0.02] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ─── Left wall LED strip (vertical) ─── */}
      <motion.line
        x1="55" y1="50" x2="55" y2="235"
        stroke="#06b6d4" strokeWidth="1.5"
        filter="url(#neonGlow)"
        animate={{ strokeOpacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* ─── Right wall LED strip (vertical) ─── */}
      <motion.line
        x1="425" y1="50" x2="425" y2="235"
        stroke="#f59e0b" strokeWidth="1.5"
        filter="url(#neonGlow)"
        animate={{ strokeOpacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* ─── The Bed ─── */}
      {/* Headboard */}
      <rect x="120" y="155" width="240" height="55" rx="4" fill="#1a1030" fillOpacity="0.8" stroke="#7c3aed" strokeWidth="0.5" strokeOpacity="0.2" />
      {/* Headboard accent LED */}
      <motion.rect
        x="125" y="158" width="230" height="2" rx="1"
        fill="#a78bfa" filter="url(#neonGlow)"
        animate={{ fillOpacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Mattress */}
      <rect x="110" y="210" width="260" height="35" rx="3" fill="url(#bedGrad)" stroke="#374151" strokeWidth="0.5" strokeOpacity="0.2" />
      {/* Duvet/Comforter */}
      <rect x="115" y="212" width="250" height="28" rx="4" fill="#1e1535" fillOpacity="0.6" />
      <rect x="115" y="212" width="250" height="28" rx="4" stroke="#6d28d9" strokeWidth="0.3" strokeOpacity="0.15" />
      {/* Pillows */}
      <ellipse cx="170" cy="200" rx="28" ry="12" fill="#2e1065" fillOpacity="0.4" stroke="#7c3aed" strokeWidth="0.3" strokeOpacity="0.15" />
      <ellipse cx="310" cy="200" rx="28" ry="12" fill="#2e1065" fillOpacity="0.4" stroke="#7c3aed" strokeWidth="0.3" strokeOpacity="0.15" />

      {/* ─── Bed underglow LED ─── */}
      <motion.rect
        x="108" y="243" width="264" height="4" rx="2"
        fill="#8b5cf6" filter="url(#softGlow)"
        animate={{ fillOpacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Floor reflection of underglow */}
      <motion.ellipse
        cx="240" cy="260" rx="140" ry="15"
        fill="#8b5cf6"
        animate={{ fillOpacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ─── Nightstands ─── */}
      {/* Left */}
      <rect x="65" y="195" width="35" height="50" rx="2" fill="#1a1030" fillOpacity="0.6" stroke="#374151" strokeWidth="0.3" strokeOpacity="0.2" />
      {/* Left lamp glow */}
      <motion.circle
        cx="82" cy="188" r="12"
        fill="#f59e0b" filter="url(#softGlow)"
        animate={{ fillOpacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <circle cx="82" cy="192" r="3" fill="#fbbf24" fillOpacity="0.2" />
      <rect x="80" y="192" width="4" height="6" fill="#92400e" fillOpacity="0.3" />

      {/* Right */}
      <rect x="380" y="195" width="35" height="50" rx="2" fill="#1a1030" fillOpacity="0.6" stroke="#374151" strokeWidth="0.3" strokeOpacity="0.2" />
      {/* Right lamp glow */}
      <motion.circle
        cx="398" cy="188" r="12"
        fill="#06b6d4" filter="url(#softGlow)"
        animate={{ fillOpacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <circle cx="398" cy="192" r="3" fill="#22d3ee" fillOpacity="0.2" />
      <rect x="396" y="192" width="4" height="6" fill="#164e63" fillOpacity="0.3" />

      {/* ─── Floating particles ─── */}
      {[
        { cx: 80, cy: 100, r: 1 }, { cx: 400, cy: 80, r: 0.8 },
        { cx: 150, cy: 130, r: 0.6 }, { cx: 350, cy: 120, r: 0.7 },
        { cx: 240, cy: 50, r: 0.5 }, { cx: 100, cy: 170, r: 0.4 },
      ].map((p, i) => (
        <motion.circle
          key={`p-${i}`} cx={p.cx} cy={p.cy} r={p.r}
          fill={i % 2 === 0 ? '#a78bfa' : '#22d3ee'}
          animate={{
            y: [0, -15 - i * 3, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
        />
      ))}

      {/* ─── Ambient room glow ─── */}
      <motion.ellipse
        cx="240" cy="180" rx="200" ry="80"
        fill="#7c3aed"
        animate={{ fillOpacity: [0.01, 0.03, 0.01] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.svg>
  )
}

/* ───────────────────────────────────────────────
   Pain Ticker — Rotates through owner pain points
   ─────────────────────────────────────────────── */
function PainTicker() {
  const t = useTranslations('vhHero')
  const pains = [
    t('pain1'),
    t('pain2'),
    t('pain3'),
    t('pain4'),
  ]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % pains.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [pains.length])

  return (
    <div className="flex items-center gap-2 overflow-hidden">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500 animate-pulse" />
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs text-red-400/80 sm:text-sm"
        >
          {pains[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

/* ───────────────────────────────────────────────
   Main Hero Export
   ─────────────────────────────────────────────── */
export function VHHero() {
  const t = useTranslations('vhHero')

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-950/20 via-background to-background" />

      <GradientOrb
        className="left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2"
        color1="rgba(139, 92, 246, 0.12)"
        color2="rgba(168, 85, 247, 0.05)"
        size={600}
        duration={20}
      />
      <GradientOrb
        className="right-1/4 top-1/3 translate-x-1/2 -translate-y-1/2"
        color1="rgba(245, 158, 11, 0.08)"
        color2="rgba(6, 182, 212, 0.04)"
        size={500}
        duration={25}
        delay={3}
      />
      <GradientOrb
        className="left-1/2 bottom-0 -translate-x-1/2"
        color1="rgba(124, 58, 237, 0.06)"
        color2="rgba(59, 130, 246, 0.03)"
        size={450}
        duration={18}
        delay={5}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* ── Left: Text Content ── */}
          <div>
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Badge>{t('badge')}</Badge>
              <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                {t('location')}
              </span>
            </motion.div>

            {/* Pain ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-5 rounded-lg border border-red-500/10 bg-red-500/5 px-4 py-2.5"
            >
              <PainTicker />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 font-serif text-4xl font-normal leading-[1.1] text-text-primary sm:text-5xl lg:text-[3.5rem]"
            >
              {t('headline1')}{' '}
              <span className="gradient-text-warm">{t('headline2')}</span>
              <br className="hidden sm:block" />
              <span className="mt-1 block">
                {t('headline3')}{' '}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  {t('headline4')}
                </span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              {t('subtitle')}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <SmartLink href="#audit">
                <Button
                  size="lg"
                  className="pulse-cta bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/25 hover:from-amber-600 hover:to-orange-700 hover:shadow-amber-500/40"
                >
                  {t('cta1')}
                </Button>
              </SmartLink>
              <SmartLink href="#solution">
                <Button variant="outline" size="lg">
                  {t('cta2')}
                </Button>
              </SmartLink>
            </motion.div>

            {/* Scarcity microcopy */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
              </span>
              <span className="text-xs text-amber-400/80">
                {t('scarcity')}
              </span>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8 sm:gap-6"
            >
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="font-serif text-xl text-text-primary sm:text-2xl lg:text-3xl">
                    <span className="gradient-text-gold">{t(`stat${i}Value`)}</span>
                  </div>
                  <div className="mt-1 text-[10px] leading-tight text-text-muted sm:text-xs">
                    {t(`stat${i}Label`)}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Futuristic Room Illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            {/* Glow backdrop behind illustration */}
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-violet-600/10 via-transparent to-cyan-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-black/20 p-2 backdrop-blur-sm">
              <div className="overflow-hidden rounded-xl">
                <FuturisticRoom />
              </div>
              {/* Room label overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-md">
                  <span className="text-[10px] font-medium text-violet-300">
                    {t('roomLabel')}
                  </span>
                </div>
                <div className="flex gap-1">
                  {['#a78bfa', '#22d3ee', '#f59e0b'].map((color, i) => (
                    <motion.div
                      key={i}
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: color }}
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* "Instagrammable" badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="absolute -right-3 -top-3 rotate-6 rounded-xl border border-pink-500/20 bg-pink-500/10 px-3 py-1.5 backdrop-blur-md"
            >
              <span className="text-xs font-medium text-pink-400">{t('instaBadge')}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
