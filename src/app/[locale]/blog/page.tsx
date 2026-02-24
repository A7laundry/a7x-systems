import { getTranslations } from 'next-intl/server'
import { Badge } from '@/components/ui/Badge'
import { FadeIn } from '@/components/motion/FadeIn'
import { BlogCard } from '@/components/blog/BlogCard'
import { getAllPosts } from '@/lib/blog'

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blogPage' })
  const posts = getAllPosts(locale)

  return (
    <>
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <Badge>{t('badge')}</Badge>
              <h1 className="mt-6 font-serif text-4xl font-normal text-text-primary sm:text-5xl lg:text-6xl">
                {t('title')}
              </h1>
              <p className="mt-4 text-lg text-text-secondary">
                {t('subtitle')}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <FadeIn key={post.slug}>
                  <BlogCard post={post} />
                </FadeIn>
              ))}
            </div>
          ) : (
            <FadeIn>
              <div className="py-16 text-center">
                <p className="text-lg text-text-muted">{t('noPosts')}</p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  )
}
