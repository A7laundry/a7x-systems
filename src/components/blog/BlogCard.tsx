import { Link } from '@/i18n/navigation'
import { Card } from '@/components/ui/Card'
import type { BlogPostMeta } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPostMeta
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card hover className="group h-full">
        <div className="mb-3 flex items-center gap-3 text-xs text-text-muted">
          <span className="rounded-full bg-accent-500/10 px-2.5 py-0.5 font-medium text-accent-400">
            {post.category}
          </span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-text-primary transition-colors group-hover:text-accent-400">
          {post.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-text-muted line-clamp-3">
          {post.description}
        </p>
        <div className="flex items-center justify-between text-xs text-text-muted">
          <span>{post.author}</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
        </div>
      </Card>
    </Link>
  )
}
