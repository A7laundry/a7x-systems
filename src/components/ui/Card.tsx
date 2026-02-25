import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function Card({ children, className, hover = false, onClick }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-surface-1 p-6',
        hover && 'transition-all duration-300 hover:border-accent-500/30 glow-hover',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
