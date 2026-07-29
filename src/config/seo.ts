import { siteConfig } from './site'

export const seoConfig = {
  defaultTitle: `${siteConfig.name} — ${siteConfig.title}`,
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultDescription: siteConfig.description,
  siteUrl: siteConfig.url,
  ogImage: {
    url: `${siteConfig.url}/og.png`,
    width: 1200,
    height: 630,
    alt: siteConfig.name,
  },
  twitterCard: 'summary_large_image' as const,
  locale: 'en_US',
  alternateLocales: ['ar_SA'],
} as const
