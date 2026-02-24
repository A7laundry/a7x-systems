'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import { SmartLink } from '@/components/ui/SmartLink'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { GradientText } from '@/components/ui/GradientText'
import { GridPattern } from '@/components/ui/GridPattern'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { GradientOrb } from '@/components/ui/GradientOrb'
import { RotatingText } from '@/components/ui/RotatingText'
import { HeroIllustration } from '@/components/ui/HeroIllustration'

export function Hero() {
  const t = useTranslations('hero')

  const rotatingWords = [
    t('rotatingWord1'),
    t('rotatingWord2'),
    t('rotatingWord3'),
    t('rotatingWord4'),
    t('rotatingWord5'),
  ]

  const stats = [
    {
      value: parseFloat(t('stat1Value')),
      suffix: t('stat1Suffix'),
      label: t('stat1Label'),
    },
    {
      value: parseFloat(t('stat2Value')),
      prefix: t('stat2Prefix'),
      suffix: t('stat2Suffix'),
      label: t('stat2Label'),
      decimals: 1,
    },
    {
      value: parseFloat(t('stat3Value')),
      suffix: t('stat3Suffix'),
      label: t('stat3Label'),
    },
  ]

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
      <GridPattern />

      {/* Animated gradient orbs */}
      <GradientOrb
        className="left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2"
        color1="rgba(59, 130, 246, 0.12)"
        color2="rgba(6, 182, 212, 0.06)"
        size={600}
        duration={20}
      />
      <GradientOrb
        className="right-1/4 top-1/2 translate-x-1/2 -translate-y-1/2"
        color1="rgba(6, 182, 212, 0.1)"
        color2="rgba(59, 130, 246, 0.05)"
        size={500}
        duration={25}
        delay={3}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge>{t('badge')}</Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 font-serif text-4xl font-normal leading-tight text-text-primary sm:text-5xl lg:text-6xl"
            >
              {t('headlinePre')}{' '}
              <RotatingText words={rotatingWords} className="text-text-muted" />{' '}
              {t('headlinePost')}
              <br />
              {t('headline3')}{' '}
              <GradientText>{t('headline4')}</GradientText>
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
              <Link href="/contact">
                <Button size="lg">{t('cta1')}</Button>
              </Link>
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
              {stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="font-serif text-2xl text-text-primary sm:text-3xl">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </div>
                  <div className="mt-1 text-xs text-text-muted sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}
