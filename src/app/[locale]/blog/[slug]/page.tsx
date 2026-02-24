import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllSlugs } from '@/lib/blog'
import { BlogHeader } from '@/components/blog/BlogHeader'
import { mdxComponents } from '@/components/blog/MDXComponents'
import { LOCALES } from '@/lib/constants'
import { ArticleJsonLd } from '@/components/seo/JsonLd'

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = []
  for (const locale of LOCALES) {
    const slugs = getAllSlugs(locale)
    for (const slug of slugs) {
      params.push({ locale, slug })
    }
  }
  return params
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const post = getPostBySlug(locale, slug)
  const t = await getTranslations({ locale, namespace: 'blogPage' })

  if (!post) notFound()

  return (
    <>
      <ArticleJsonLd post={post} />
      <article className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <BlogHeader post={post} backLabel={t('backToBlog')} />
          <div className="prose-custom">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </div>
      </article>
    </>
  )
}
