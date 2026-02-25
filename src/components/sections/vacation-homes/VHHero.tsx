'use client'

import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { SmartLink } from '@/components/ui/SmartLink'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { GradientOrb } from '@/components/ui/GradientOrb'

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
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">

          {/* ── Left: Text Content ── */}
          <div className="order-last lg:order-first">
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

          {/* ── Right: Neon Themed Room Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="relative order-first lg:order-last"
          >
            {/* Glow backdrop behind image */}
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-violet-600/15 via-purple-500/10 to-cyan-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-violet-500/20 shadow-2xl shadow-violet-500/10">
              {/* The hero image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/vh-neon-room.jpg"
                  alt="Luxury neon-themed vacation rental bedroom with purple LED ambient lighting"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                {/* Animated neon glow border effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-violet-500/0"
                  animate={{
                    borderColor: [
                      'rgba(139, 92, 246, 0)',
                      'rgba(139, 92, 246, 0.3)',
                      'rgba(168, 85, 247, 0.2)',
                      'rgba(139, 92, 246, 0)',
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>

              {/* Room label overlay */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between sm:bottom-4 sm:left-4 sm:right-4">
                <div className="rounded-full bg-black/70 px-3 py-1.5 backdrop-blur-md">
                  <span className="text-[10px] font-medium text-violet-300 sm:text-xs">
                    {t('roomLabel')}
                  </span>
                </div>
                <div className="flex gap-1.5">
                  {['#a78bfa', '#22d3ee', '#f59e0b'].map((color, i) => (
                    <motion.div
                      key={i}
                      className="h-2 w-2 rounded-full"
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
              className="absolute -right-2 -top-2 rotate-6 rounded-xl border border-pink-500/20 bg-pink-500/10 px-3 py-1.5 backdrop-blur-md sm:-right-3 sm:-top-3"
            >
              <span className="text-xs font-medium text-pink-400">{t('instaBadge')}</span>
            </motion.div>

            {/* Photo credit */}
            <div className="mt-2 text-right">
              <span className="text-[9px] text-text-muted/40">
                Photo by Joshua Rawson-Harris / Unsplash
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
