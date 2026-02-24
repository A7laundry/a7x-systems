'use client'

import { Link, usePathname } from '@/i18n/navigation'

interface SmartLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function SmartLink({ href, children, className }: SmartLinkProps) {
  const pathname = usePathname()

  // If the link is a hash-only link (e.g. #solution)
  // and we're NOT on the home page, resolve it to /#solution
  if (href.startsWith('#')) {
    const isHome = pathname === '/'
    const resolvedHref = isHome ? href : `/${href}`
    return (
      <Link href={resolvedHref} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
