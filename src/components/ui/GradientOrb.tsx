'use client'

import { motion } from 'framer-motion'

interface GradientOrbProps {
  className?: string
  color1?: string
  color2?: string
  size?: number
  duration?: number
  delay?: number
}

export function GradientOrb({
  className,
  color1 = 'rgba(59, 130, 246, 0.15)',
  color2 = 'rgba(6, 182, 212, 0.1)',
  size = 500,
  duration = 20,
  delay = 0,
}: GradientOrbProps) {
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className ?? ''}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color1}, ${color2}, transparent 70%)`,
        mixBlendMode: 'screen',
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -25, 15, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
