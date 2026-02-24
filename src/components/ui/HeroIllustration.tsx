'use client'

import { motion } from 'framer-motion'

const nodes = [
  { cx: 200, cy: 80, r: 6, delay: 0 },
  { cx: 320, cy: 50, r: 5, delay: 0.3 },
  { cx: 400, cy: 120, r: 8, delay: 0.5 },
  { cx: 280, cy: 180, r: 7, delay: 0.2 },
  { cx: 150, cy: 200, r: 5, delay: 0.7 },
  { cx: 350, cy: 250, r: 6, delay: 0.4 },
  { cx: 100, cy: 300, r: 5, delay: 0.6 },
  { cx: 250, cy: 320, r: 9, delay: 0.1 },
  { cx: 420, cy: 300, r: 6, delay: 0.8 },
  { cx: 180, cy: 400, r: 7, delay: 0.3 },
  { cx: 340, cy: 380, r: 5, delay: 0.5 },
  { cx: 450, cy: 200, r: 5, delay: 0.9 },
  { cx: 80, cy: 140, r: 4, delay: 1.0 },
  { cx: 470, cy: 370, r: 4, delay: 0.7 },
]

const connections = [
  [0, 1], [0, 3], [0, 4], [1, 2], [1, 3],
  [2, 5], [2, 11], [3, 4], [3, 5], [3, 7],
  [4, 6], [5, 7], [5, 8], [6, 7], [6, 9],
  [7, 8], [7, 9], [7, 10], [8, 10], [8, 13],
  [9, 10], [10, 13], [11, 8], [12, 0], [12, 4],
]

// Larger "hub" nodes that get special treatment
const hubs = [
  { cx: 280, cy: 180, r: 18, label: 'AI' },
  { cx: 250, cy: 320, r: 16, label: '' },
  { cx: 400, cy: 120, r: 14, label: '' },
]

export function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative"
    >
      <svg
        viewBox="0 0 550 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-w-lg"
      >
        <defs>
          <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </radialGradient>
          <radialGradient id="hubGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </radialGradient>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hubGlow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connections */}
        {connections.map(([from, to], i) => (
          <motion.line
            key={`line-${i}`}
            x1={nodes[from].cx}
            y1={nodes[from].cy}
            x2={nodes[to].cx}
            y2={nodes[to].cy}
            stroke="url(#lineGrad)"
            strokeWidth={1}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 + i * 0.05 }}
          />
        ))}

        {/* Data flow particles on some connections */}
        {[0, 3, 5, 7, 11, 15, 18].map((connIdx) => {
          const [from, to] = connections[connIdx]
          const n1 = nodes[from]
          const n2 = nodes[to]
          return (
            <motion.circle
              key={`particle-${connIdx}`}
              r={2}
              fill="#22d3ee"
              filter="url(#glow)"
              animate={{
                cx: [n1.cx, n2.cx],
                cy: [n1.cy, n2.cy],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random(),
                delay: 1 + connIdx * 0.2,
                repeat: Infinity,
                repeatDelay: 1 + Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          )
        })}

        {/* Hub rings */}
        {hubs.map((hub, i) => (
          <motion.circle
            key={`hub-${i}`}
            cx={hub.cx}
            cy={hub.cy}
            r={hub.r}
            fill="url(#hubGrad)"
            stroke="#3b82f6"
            strokeWidth={1}
            strokeOpacity={0.3}
            filter="url(#hubGlow)"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              default: { duration: 0.5, delay: 0.8 + i * 0.2 },
            }}
            style={{ transformOrigin: `${hub.cx}px ${hub.cy}px` }}
          />
        ))}

        {/* Hub labels */}
        {hubs.map(
          (hub, i) =>
            hub.label && (
              <motion.text
                key={`label-${i}`}
                x={hub.cx}
                y={hub.cy + 1}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#60a5fa"
                fontSize="9"
                fontWeight="bold"
                fontFamily="var(--font-sans)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                {hub.label}
              </motion.text>
            )
        )}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="url(#nodeGrad)"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.3 + node.delay,
              type: 'spring',
              stiffness: 200,
            }}
            style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
          />
        ))}

        {/* Outer pulse ring on main hub */}
        <motion.circle
          cx={280}
          cy={180}
          r={28}
          fill="none"
          stroke="#3b82f6"
          strokeWidth={1}
          initial={{ opacity: 0 }}
          animate={{ r: [28, 45], opacity: [0.4, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      </svg>
    </motion.div>
  )
}
