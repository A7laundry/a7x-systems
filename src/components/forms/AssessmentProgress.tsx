'use client'

import { motion } from 'framer-motion'

interface AssessmentProgressProps {
  current: number
  total: number
}

export function AssessmentProgress({ current, total }: AssessmentProgressProps) {
  const percentage = Math.round((current / total) * 100)

  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-text-muted">
          {current} / {total}
        </span>
        <span className="text-accent-400 font-medium">{percentage}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-surface-2">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-500 to-cyan-500"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
