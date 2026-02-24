import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  readingTime: string
  content: string
  locale: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  readingTime: string
  locale: string
}

function getPostFiles(locale: string): string[] {
  const dir = path.join(CONTENT_DIR, locale)
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))
}

export function getAllPosts(locale: string): BlogPostMeta[] {
  const files = getPostFiles(locale)

  const posts = files.map((filename) => {
    const filePath = path.join(CONTENT_DIR, locale, filename)
    const raw = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(raw)
    const stats = readingTime(content)
    const slug = filename.replace(/\.mdx$/, '')

    return {
      slug,
      title: data.title ?? '',
      description: data.description ?? '',
      date: data.date ?? '',
      author: data.author ?? 'A7X Systems',
      category: data.category ?? '',
      tags: data.tags ?? [],
      readingTime: stats.text,
      locale,
    }
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(locale: string, slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, locale, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title ?? '',
    description: data.description ?? '',
    date: data.date ?? '',
    author: data.author ?? 'A7X Systems',
    category: data.category ?? '',
    tags: data.tags ?? [],
    readingTime: stats.text,
    content,
    locale,
  }
}

export function getAllSlugs(locale: string): string[] {
  return getPostFiles(locale).map((f) => f.replace(/\.mdx$/, ''))
}
