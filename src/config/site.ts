export const siteConfig = {
  name: 'Ahmed Essam',
  title: 'Flutter Developer & Mobile Architect',
  description:
    'Every app I ship ties back to a business goal, 60fps performance, and seamless user experience. Flutter developer and mobile engineer helping ambitious startups scale across iOS & Android.',
  headline: 'Flutter Developer',
  headlineHighlights: ['iOS & Android', 'cross-platform'],
  headlineSuffix: 'built with precision',
  subheadline:
    'Every app I ship ties back to a business goal and 60fps performance. Crafted for iOS & Android — scroll down to see the numbers.',
  url: 'https://portfolio.dev',
  ogImage: '/og.png',
  availableForWork: true,
  statusText: 'Available for Q3/Q4',
  stats: [
    { value: '58+', label: 'Happy Clients' },
    { value: '+28%', label: 'Avg. Engagement Lift' },
    { value: '60%', label: 'Faster Time-to-Value' },
    { value: '4.9/5', label: 'Client Rating' },
  ],
  social: {
    x: 'https://x.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    dribbble: 'https://dribbble.com',
    email: 'ahmed.essam@example.com',
  },
} as const

export type SiteConfig = typeof siteConfig
