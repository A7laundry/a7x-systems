'use client'

const svgClass = "h-full w-full"

export function ProcessDiscoveryIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={svgClass}>
      {/* Magnifying glass with network */}
      <circle cx="52" cy="52" r="30" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.3" />
      <circle cx="52" cy="52" r="30" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.15" strokeDasharray="4 4" />
      <line x1="74" y1="74" x2="95" y2="95" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />
      {/* Inner network */}
      <circle cx="42" cy="42" r="3" fill="#60a5fa" />
      <circle cx="62" cy="38" r="3" fill="#22d3ee" />
      <circle cx="48" cy="60" r="3" fill="#60a5fa" />
      <circle cx="65" cy="58" r="2.5" fill="#22d3ee" />
      <circle cx="38" cy="55" r="2" fill="#3b82f6" />
      <line x1="42" y1="42" x2="62" y2="38" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="42" y1="42" x2="48" y2="60" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="62" y1="38" x2="65" y2="58" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="48" y1="60" x2="65" y2="58" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="38" y1="55" x2="48" y2="60" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.4" />
    </svg>
  )
}

export function WorkflowAutomationIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={svgClass}>
      {/* Flow diagram */}
      <rect x="10" y="20" width="28" height="18" rx="4" stroke="#3b82f6" strokeWidth="1.5" fill="#3b82f6" fillOpacity="0.1" />
      <rect x="10" y="51" width="28" height="18" rx="4" stroke="#22d3ee" strokeWidth="1.5" fill="#22d3ee" fillOpacity="0.1" />
      <rect x="10" y="82" width="28" height="18" rx="4" stroke="#3b82f6" strokeWidth="1.5" fill="#3b82f6" fillOpacity="0.1" />
      {/* Center processor */}
      <rect x="52" y="42" width="26" height="36" rx="6" stroke="#60a5fa" strokeWidth="2" fill="#60a5fa" fillOpacity="0.08" />
      <path d="M58 55 L65 60 L72 55" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M58 63 L65 68 L72 63" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Output */}
      <circle cx="100" cy="60" r="14" stroke="#22d3ee" strokeWidth="1.5" fill="#22d3ee" fillOpacity="0.08" />
      <path d="M95 60 L99 64 L106 56" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Arrows */}
      <path d="M38 29 L52 52" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M38 60 L52 60" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M38 91 L52 68" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M78 60 L86 60" stroke="#60a5fa" strokeWidth="1.5" strokeOpacity="0.6" markerEnd="none" />
      <polygon points="86,57 92,60 86,63" fill="#60a5fa" fillOpacity="0.6" />
    </svg>
  )
}

export function DocumentProcessingIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={svgClass}>
      {/* Document stack */}
      <rect x="22" y="18" width="40" height="52" rx="4" stroke="#3b82f6" strokeWidth="1.5" fill="#3b82f6" fillOpacity="0.05" />
      <rect x="26" y="14" width="40" height="52" rx="4" stroke="#60a5fa" strokeWidth="1.5" fill="#60a5fa" fillOpacity="0.08" />
      <rect x="30" y="10" width="40" height="52" rx="4" stroke="#60a5fa" strokeWidth="2" fill="#3b82f6" fillOpacity="0.1" />
      {/* Lines on doc */}
      <line x1="37" y1="22" x2="63" y2="22" stroke="#60a5fa" strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="37" y1="30" x2="58" y2="30" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.3" />
      <line x1="37" y1="38" x2="60" y2="38" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.3" />
      <line x1="37" y1="46" x2="55" y2="46" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.3" />
      {/* AI processing arrow */}
      <path d="M50 68 L50 78 L75 78" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
      {/* Output data blocks */}
      <rect x="78" y="70" width="18" height="10" rx="2" fill="#22d3ee" fillOpacity="0.15" stroke="#22d3ee" strokeWidth="1" />
      <rect x="78" y="84" width="18" height="10" rx="2" fill="#60a5fa" fillOpacity="0.15" stroke="#60a5fa" strokeWidth="1" />
      <rect x="78" y="98" width="18" height="10" rx="2" fill="#3b82f6" fillOpacity="0.15" stroke="#3b82f6" strokeWidth="1" />
      {/* Sparkle for AI */}
      <circle cx="62" cy="78" r="6" fill="#22d3ee" fillOpacity="0.1" stroke="#22d3ee" strokeWidth="1" />
      <text x="62" y="81" textAnchor="middle" fill="#22d3ee" fontSize="8" fontWeight="bold">AI</text>
    </svg>
  )
}

export function AIAgentsIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={svgClass}>
      {/* Central bot head */}
      <rect x="38" y="25" width="44" height="38" rx="10" stroke="#60a5fa" strokeWidth="2" fill="#60a5fa" fillOpacity="0.08" />
      {/* Eyes */}
      <circle cx="52" cy="40" r="4" fill="#22d3ee" fillOpacity="0.4" />
      <circle cx="52" cy="40" r="2" fill="#22d3ee" />
      <circle cx="68" cy="40" r="4" fill="#22d3ee" fillOpacity="0.4" />
      <circle cx="68" cy="40" r="2" fill="#22d3ee" />
      {/* Mouth - speaking indicator */}
      <rect x="50" y="50" width="20" height="4" rx="2" fill="#3b82f6" fillOpacity="0.3" />
      {/* Antenna */}
      <line x1="60" y1="25" x2="60" y2="16" stroke="#60a5fa" strokeWidth="1.5" />
      <circle cx="60" cy="14" r="3" fill="#22d3ee" fillOpacity="0.6" stroke="#22d3ee" strokeWidth="1" />
      {/* Speech bubbles / signals */}
      <path d="M86 30 Q95 25 92 35 Q95 42 86 40" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.4" fill="none" />
      <path d="M92 28 Q102 22 99 34 Q102 42 92 39" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.25" fill="none" />
      {/* Chat messages below */}
      <rect x="20" y="72" width="36" height="12" rx="6" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="1" />
      <line x1="26" y1="78" x2="50" y2="78" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.4" />
      <rect x="64" y="72" width="36" height="12" rx="6" fill="#22d3ee" fillOpacity="0.1" stroke="#22d3ee" strokeWidth="1" />
      <line x1="70" y1="78" x2="94" y2="78" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.4" />
      <rect x="30" y="90" width="40" height="12" rx="6" fill="#60a5fa" fillOpacity="0.1" stroke="#60a5fa" strokeWidth="1" />
      <line x1="36" y1="96" x2="64" y2="96" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.4" />
      {/* Connection lines */}
      <line x1="38" y1="66" x2="38" y2="72" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="82" y1="66" x2="82" y2="72" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.3" />
    </svg>
  )
}

export function DataIntegrationIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={svgClass}>
      {/* Central hub */}
      <circle cx="60" cy="60" r="16" stroke="#60a5fa" strokeWidth="2" fill="#60a5fa" fillOpacity="0.08" />
      <circle cx="60" cy="60" r="8" fill="#3b82f6" fillOpacity="0.2" />
      {/* Outer data sources */}
      {/* Top */}
      <rect x="48" y="8" width="24" height="16" rx="3" stroke="#22d3ee" strokeWidth="1.5" fill="#22d3ee" fillOpacity="0.1" />
      <line x1="53" y1="14" x2="67" y2="14" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="53" y1="18" x2="62" y2="18" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="60" y1="24" x2="60" y2="44" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.4" />
      {/* Right */}
      <rect x="88" y="48" width="24" height="24" rx="3" stroke="#3b82f6" strokeWidth="1.5" fill="#3b82f6" fillOpacity="0.1" />
      <rect x="93" y="53" width="14" height="3" rx="1" fill="#3b82f6" fillOpacity="0.3" />
      <rect x="93" y="59" width="10" height="3" rx="1" fill="#3b82f6" fillOpacity="0.3" />
      <rect x="93" y="65" width="12" height="3" rx="1" fill="#3b82f6" fillOpacity="0.3" />
      <line x1="88" y1="60" x2="76" y2="60" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.4" />
      {/* Bottom */}
      <rect x="48" y="96" width="24" height="16" rx="3" stroke="#60a5fa" strokeWidth="1.5" fill="#60a5fa" fillOpacity="0.1" />
      <circle cx="55" cy="104" r="2" fill="#60a5fa" fillOpacity="0.4" />
      <circle cx="62" cy="104" r="2" fill="#60a5fa" fillOpacity="0.4" />
      <circle cx="69" cy="104" r="2" fill="#60a5fa" fillOpacity="0.4" />
      <line x1="60" y1="96" x2="60" y2="76" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.4" />
      {/* Left */}
      <rect x="8" y="48" width="24" height="24" rx="3" stroke="#22d3ee" strokeWidth="1.5" fill="#22d3ee" fillOpacity="0.1" />
      {/* Chart bars inside */}
      <rect x="13" y="62" width="4" height="6" rx="1" fill="#22d3ee" fillOpacity="0.4" />
      <rect x="19" y="58" width="4" height="10" rx="1" fill="#22d3ee" fillOpacity="0.5" />
      <rect x="25" y="55" width="4" height="13" rx="1" fill="#22d3ee" fillOpacity="0.6" />
      <line x1="32" y1="60" x2="44" y2="60" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.4" />
      {/* Data flow dots */}
      <circle cx="60" cy="36" r="1.5" fill="#22d3ee" fillOpacity="0.6" />
      <circle cx="80" cy="60" r="1.5" fill="#3b82f6" fillOpacity="0.6" />
      <circle cx="60" cy="84" r="1.5" fill="#60a5fa" fillOpacity="0.6" />
      <circle cx="40" cy="60" r="1.5" fill="#22d3ee" fillOpacity="0.6" />
    </svg>
  )
}
