export interface NavItem {
  label: string
  href: string
  isExternal?: boolean
}

export const navigationConfig = {
  mainNav: [
    { label: 'Projects', href: '#projects' },
    { label: 'Impact', href: '#impact' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ] satisfies NavItem[],

  footerNav: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ] satisfies NavItem[],
} as const
