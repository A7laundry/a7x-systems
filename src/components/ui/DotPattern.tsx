import { cn } from '@/lib/utils'

interface DotPatternProps {
  className?: string
}

export function DotPattern({ className }: DotPatternProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 dot-pattern opacity-50',
        className
      )}
      aria-hidden="true"
    />
  )
}
