import type { ReactNode } from 'react'
import { getLocale } from 'next-intl/server'
import { inter, dmSerif } from '@/lib/fonts'
import './globals.css'

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale()

  return (
    <html lang={locale} className="dark">
      <body
        className={`${inter.variable} ${dmSerif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
