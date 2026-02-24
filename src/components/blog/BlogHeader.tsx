import { Link } from '@/i18n/navigation'
import type { BlogPost } from '@/lib/blog'

interface BlogHeaderProps {
  post: BlogPost
  backLabel: string
}

export function BlogHeader({ post, backLabel }: BlogHeaderProps) {
  return (
    <header className="mb-10">
      <Link
        href="/blog"
        className="mb-6 inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-accent-400"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        {backLabel}
      </Link>

      <div className="mb-4 flex items-center gap-3 text-sm text-text-muted">
        <span className="rounded-full bg-accent-500/10 px-2.5 py-0.5 font-medium text-accent-400">
          {post.category}
        </span>
        <span>{post.readingTime}</span>
        <span>&middot;</span>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </div>

      <h1 className="font-serif text-3xl font-normal leading-tight text-text-primary sm:text-4xl lg:text-5xl">
        {post.title}
      </h1>

      <p className="mt-4 text-lg text-text-secondary">{post.description}</p>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/10 text-sm font-bold text-accent-400">
          {post.author
            .split(' ')
            .map((w) => w[0])
            .join('')}
        </div>
        <div>
          <p className="text-sm font-medium text-text-primary">{post.author}</p>
        </div>
      </div>
    </header>
  )
}
