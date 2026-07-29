export interface NavItem {
  label: string
  href: string
  isExternal?: boolean
}

export const navigationConfig = {
  mainNav: [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavItem[],

  footerNav: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ] satisfies NavItem[],
} as const
