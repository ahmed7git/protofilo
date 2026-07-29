export const themeConfig = {
  defaultTheme: 'dark' as const,
  themes: ['light', 'dark', 'system'] as const,
  attribute: 'class' as const,
  storageKey: 'portfolio-theme',
  enableSystem: true,
  disableTransitionOnChange: false,
} as const

export type Theme = (typeof themeConfig.themes)[number]
