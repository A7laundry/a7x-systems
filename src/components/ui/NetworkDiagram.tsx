'use client'

import { motion } from 'framer-motion'

export function NetworkDiagram() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="h-auto w-full">
      <defs>
        <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
          <stop offset="40%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Chaos side (left) */}
      {/* Scattered disconnected nodes */}
      <circle cx="30" cy="40" r="8" stroke="#ef4444" strokeWidth="1" fill="#ef4444" fillOpacity="0.08" />
      <circle cx="70" cy="80" r="6" stroke="#ef4444" strokeWidth="1" fill="#ef4444" fillOpacity="0.08" />
      <circle cx="25" cy="130" r="7" stroke="#ef4444" strokeWidth="1" fill="#ef4444" fillOpacity="0.08" />
      <circle cx="80" cy="150" r="5" stroke="#ef4444" strokeWidth="1" fill="#ef4444" fillOpacity="0.08" />
      <circle cx="55" cy="30" r="4" stroke="#ef4444" strokeWidth="1" fill="#ef4444" fillOpacity="0.08" />
      <circle cx="90" cy="50" r="6" stroke="#ef4444" strokeWidth="1" fill="#ef4444" fillOpacity="0.08" />
      <circle cx="40" cy="170" r="5" stroke="#ef4444" strokeWidth="1" fill="#ef4444" fillOpacity="0.08" />
      {/* Messy connections */}
      <line x1="30" y1="40" x2="70" y2="80" stroke="#ef4444" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="3 3" />
      <line x1="25" y1="130" x2="80" y2="150" stroke="#ef4444" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="3 3" />
      <line x1="55" y1="30" x2="30" y2="40" stroke="#ef4444" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="3 3" />

      {/* Center: A7X transformation */}
      <rect x="150" y="65" width="100" height="70" rx="12" stroke="#60a5fa" strokeWidth="2" fill="#3b82f6" fillOpacity="0.05" />
      <text x="200" y="95" textAnchor="middle" fill="#60a5fa" fontSize="11" fontWeight="bold" fontFamily="var(--font-sans)">A7X</text>
      <text x="200" y="112" textAnchor="middle" fill="#3b82f6" fontSize="8" fontFamily="var(--font-sans)" opacity="0.6">Process Clarity</text>

      {/* Flow arrows left → center */}
      <motion.path
        d="M100 100 L148 100"
        stroke="url(#flowGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <polygon points="145,96 152,100 145,104" fill="#3b82f6" fillOpacity="0.5" />

      {/* Flow arrows center → right */}
      <motion.path
        d="M252 100 L300 100"
        stroke="url(#flowGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 1 }}
      />
      <polygon points="297,96 304,100 297,104" fill="#22d3ee" fillOpacity="0.5" />

      {/* Clarity side (right) - organized network */}
      <circle cx="330" cy="50" r="8" stroke="#22d3ee" strokeWidth="1.5" fill="#22d3ee" fillOpacity="0.1" />
      <circle cx="370" cy="80" r="7" stroke="#22d3ee" strokeWidth="1.5" fill="#22d3ee" fillOpacity="0.1" />
      <circle cx="330" cy="110" r="9" stroke="#60a5fa" strokeWidth="1.5" fill="#60a5fa" fillOpacity="0.1" />
      <circle cx="370" cy="140" r="7" stroke="#22d3ee" strokeWidth="1.5" fill="#22d3ee" fillOpacity="0.1" />
      <circle cx="330" cy="170" r="6" stroke="#22d3ee" strokeWidth="1.5" fill="#22d3ee" fillOpacity="0.1" />
      {/* Clean connections */}
      <line x1="330" y1="58" x2="330" y2="101" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="338" y1="107" x2="363" y2="82" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="338" y1="113" x2="363" y2="137" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="330" y1="119" x2="330" y2="164" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="370" y1="87" x2="370" y2="133" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.3" />

      {/* Labels */}
      <text x="55" y="195" textAnchor="middle" fill="#ef4444" fontSize="9" fontFamily="var(--font-sans)" opacity="0.5">Chaos</text>
      <text x="350" y="195" textAnchor="middle" fill="#22d3ee" fontSize="9" fontFamily="var(--font-sans)" opacity="0.5">Clarity</text>
    </svg>
  )
}
