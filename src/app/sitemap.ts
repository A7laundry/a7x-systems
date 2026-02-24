import type { MetadataRoute } from 'next'
import { SITE_URL, LOCALES } from '@/lib/constants'
import { getAllSlugs } from '@/lib/blog'

const staticPages = ['', '/services', '/about', '/contact', '/blog', '/careers', '/tools/roi-calculator']

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Static pages
  for (const page of staticPages) {
    const languages: Record<string, string> = {}
    for (const locale of LOCALES) {
      languages[locale] = `${SITE_URL}/${locale}${page}`
    }

    entries.push({
      url: `${SITE_URL}/en${page}`,
      lastModified: new Date(),
      alternates: {
        languages,
      },
    })
  }

  // Blog posts
  for (const locale of LOCALES) {
    const slugs = getAllSlugs(locale)
    for (const slug of slugs) {
      entries.push({
        url: `${SITE_URL}/${locale}/blog/${slug}`,
        lastModified: new Date(),
      })
    }
  }

  return entries
}
