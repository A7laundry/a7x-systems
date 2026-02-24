import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="relative flex h-8 w-8 items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
        >
          <rect
            width="32"
            height="32"
            rx="8"
            className="fill-accent-500"
          />
          <path
            d="M9 22L16 10L23 22H19.5L16 16L12.5 22H9Z"
            fill="white"
            fillOpacity="0.95"
          />
          <path
            d="M14.5 22L16 19L17.5 22H14.5Z"
            fill="white"
            fillOpacity="0.6"
          />
        </svg>
      </div>
      <span className="font-serif text-xl text-text-primary">
        A7X<span className="text-text-muted"> Systems</span>
      </span>
    </div>
  )
}
