import { Badge } from './Badge'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  className,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {badge && (
        <div className={cn('mb-4', align === 'center' && 'flex justify-center')}>
          <Badge>{badge}</Badge>
        </div>
      )}
      <h2 className="font-serif text-3xl font-normal text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary">{subtitle}</p>
      )}
    </div>
  )
}
