export const siteConfig = {
  name: 'Alexander Isak',
  title: 'UI Designer & No-Code Developer',
  description:
    'I help startups grow with smart design and no-code development, based in Cupertino, CA.',
  headline: "I'm building",
  headlineHighlights: ['websites', '& brands'],
  headlineSuffix: 'that people remember',
  url: 'https://portfolio.dev',
  ogImage: '/og.png',
  greeting: "Hey, I'm Developer",
  ctaPrimary: "Let's talk",
  ctaSecondary: 'Download CV',
  availableForWork: true,
  stats: [
    { value: '10+', label: 'Years Experience' },
    { value: '6x', label: 'Awards Won' },
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
  ],
  social: {
    x: 'https://x.com',
    linkedin: 'https://linkedin.com',
    discord: 'https://discord.com',
    github: 'https://github.com',
    email: 'hello@portfolio.dev',
  },
} as const

export type SiteConfig = typeof siteConfig
