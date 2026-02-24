import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-accent-500/20 bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-400',
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
      {children}
    </span>
  )
}
