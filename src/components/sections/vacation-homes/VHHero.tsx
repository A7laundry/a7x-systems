'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { SmartLink } from '@/components/ui/SmartLink'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { GradientText } from '@/components/ui/GradientText'
import { GridPattern } from '@/components/ui/GridPattern'
import { GradientOrb } from '@/components/ui/GradientOrb'

export function VHHero() {
  const t = useTranslations('vhHero')

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
      <GridPattern />

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
        <div className="mx-auto max-w-4xl text-center">
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
            {t('headline1')}{' '}
            <span className="text-red-400">{t('headline2')}</span>
            <br />
            <GradientText>{t('headline3')}</GradientText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary sm:text-xl"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <SmartLink href="#audit">
              <Button size="lg">{t('cta1')}</Button>
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
            className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-2xl text-text-primary sm:text-3xl">
                  <GradientText>{t(`stat${i}Value`)}</GradientText>
                </div>
                <div className="mt-1 text-xs text-text-muted sm:text-sm">
                  {t(`stat${i}Label`)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
