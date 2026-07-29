export interface NavItem {
  label: string
  href: string
  isExternal?: boolean
  icon?: string
}

export interface NavGroup {
  title: string
  items: NavItem[]
}

export interface BreadcrumbItem {
  label: string
  href: string
  isCurrent?: boolean
}
