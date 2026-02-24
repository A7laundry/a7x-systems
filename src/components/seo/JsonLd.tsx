import { SITE_URL } from '@/lib/constants'
import type { BlogPost } from '@/lib/blog'

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'A7X Systems',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description:
      'We bring clarity to your business processes before implementing AI. Discover, implement, and scale intelligent automation with measurable ROI.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      availableLanguage: ['English', 'Portuguese', 'Spanish'],
    },
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function ServiceJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI Process Automation Consulting',
    provider: {
      '@type': 'Organization',
      name: 'A7X Systems',
      url: SITE_URL,
    },
    areaServed: 'Worldwide',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_URL}/contact`,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Automation Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Process Discovery & Mapping' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Workflow Automation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Intelligent Document Processing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom AI Agents & Chatbots' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Integration & Analytics' } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function FAQJsonLd({
  items,
}: {
  items: Array<{ question: string; answer: string }>
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function ArticleJsonLd({ post }: { post: BlogPost }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'A7X Systems',
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/${post.locale}/blog/${post.slug}`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function HowToJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Implement AI Process Automation',
    description:
      'A proven 3-step framework to bring clarity to your business processes and implement AI automation with measurable ROI.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Discover',
        text: 'We map every process, identify bottlenecks, and find the highest-ROI automation opportunities.',
      },
      {
        '@type': 'HowToStep',
        name: 'Implement',
        text: 'We build and deploy custom AI automations using battle-tested tools.',
      },
      {
        '@type': 'HowToStep',
        name: 'Scale',
        text: 'We monitor performance, train your team, and continuously expand automations.',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
