export const analyticsConfig = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID ?? '',
  vercelAnalytics: true,
  speedInsights: true,
  /** Event name constants to avoid typos */
  events: {
    PAGE_VIEW: 'page_view',
    CTA_CLICK: 'cta_click',
    FORM_SUBMIT: 'form_submit',
    PROJECT_VIEW: 'project_view',
    CV_DOWNLOAD: 'cv_download',
    SOCIAL_CLICK: 'social_click',
    THEME_TOGGLE: 'theme_toggle',
  },
} as const
