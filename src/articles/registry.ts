import type { ComponentType } from 'react'

export interface ArticleSeo {
  title: string
  description: string
}

export interface ArticleSeoMeta {
  datePublished: string
  dateModified: string
  keywords: string[]
  articleType: 'Article' | 'TechArticle'
  articleTags: string
  images: string[]
  about: Array<Record<string, string>>
  extra?: Record<string, string>
  citation?: Array<{ '@type': string; name: string; url: string }>
  isBasedOn?: Record<string, unknown>
  mentions?: Array<Record<string, string | string[]>>
  discussionUrl?: string
  relatedLink?: string
  video?: Record<string, unknown>
  subjectOf?: Record<string, unknown>
}

export interface ArticleConfig {
  id: string
  slugs: { es: string; en: string }
  titles: { es: string; en: string }
  seo: { es: ArticleSeo; en: ArticleSeo }
  sectionLabels: { es: Record<string, string>; en: Record<string, string> }
  type: 'collab' | 'case-study' | 'bridge'
  /** Absolute OG image URL for prerender (social cards: LinkedIn, Twitter) */
  ogImage?: string
  /** Hero image path for JSON-LD / GEO (what AI search engines see). Falls back to ogImage if not set. */
  heroImage?: string
  component: () => Promise<{ default: ComponentType<{ lang: 'es' | 'en' }> }>
  /** x-default hreflang slug (defaults to ES slug) */
  xDefaultSlug?: string
  /** Whether this article is ready for RAG indexing (default: false) */
  ragReady?: boolean
  /** Path to i18n content file relative to project root (required when ragReady=true) */
  i18nFile?: string
  /** SEO metadata for prerender JSON-LD + article meta tags */
  seoMeta?: ArticleSeoMeta
}

// Only career-ops article is kept — all Santiago-specific articles removed
export const articleRegistry: ArticleConfig[] = [
  {
    id: 'career-ops',
    slugs: { es: 'career-ops', en: 'career-ops-system' },
    titles: { es: 'Career-Ops', en: 'Career-Ops' },
    seo: {
      es: {
        title: 'Career-Ops: AI Job Search Automation',
        description: 'Case study: AI job search pipeline built on Claude Code. Offer evaluation, CV generation, portal scanning, batch processing.',
      },
      en: {
        title: 'Career-Ops: AI Job Search Automation',
        description: 'Case study: AI job search pipeline built on Claude Code. Offer evaluation, CV generation, portal scanning, batch processing.',
      },
    },
    sectionLabels: {
      es: {
        'the-problem': 'The Problem',
        'architecture': 'Multi-Agent System',
        'scoring': '10D Scoring',
        'pipeline': 'The Pipeline',
        'pdf': 'AI Resume Builder',
        'before-after': 'Before/After',
        'results': 'Results',
        'lessons': 'Lessons',
        'faq': 'FAQ',
        'related': 'Related',
      },
      en: {
        'the-problem': 'The Problem',
        'architecture': 'Multi-Agent System',
        'scoring': '10D Scoring',
        'pipeline': 'The Pipeline',
        'pdf': 'AI Resume Builder',
        'before-after': 'Before/After',
        'results': 'Results',
        'lessons': 'Lessons',
        'faq': 'FAQ',
        'related': 'Related',
      },
    },
    type: 'case-study',
    ragReady: false,
    i18nFile: 'src/career-ops-i18n.ts',
    component: () => import('../CareerOps.tsx'),
  },
]

// Derived maps for GlobalNav and routing
export function getAltPaths(): Record<string, string> {
  const map: Record<string, string> = {
    '/': '/',
    '/about': '/about',
    '/privacy': '/privacy',
  }
  for (const article of articleRegistry) {
    map[`/${article.slugs.es}`] = `/${article.slugs.en}`
    map[`/${article.slugs.en}`] = `/${article.slugs.es}`
  }
  return map
}

export function getPageTitles(): Record<string, string> {
  const map: Record<string, string> = {
    '/': "Timofey's Portfolio",
    '/about': 'About',
  }
  for (const article of articleRegistry) {
    map[`/${article.slugs.es}`] = article.titles.es
    map[`/${article.slugs.en}`] = article.titles.en
  }
  return map
}

export function getSectionLabels(): Record<string, Record<string, string>> {
  const map: Record<string, Record<string, string>> = {}
  for (const article of articleRegistry) {
    map[`/${article.slugs.es}`] = article.sectionLabels.es
    map[`/${article.slugs.en}`] = article.sectionLabels.en
  }
  return map
}

/** All ES slugs (for lang detection: if pathname matches an ES slug → lang is 'es') */
export function getEsSlugs(): Set<string> {
  const slugs = new Set<string>(['/'])
  for (const article of articleRegistry) {
    slugs.add(`/${article.slugs.es}`)
  }
  return slugs
}
