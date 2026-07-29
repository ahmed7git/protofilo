/** Branded ID type for type safety */
export type ID = string & { readonly __brand: 'ID' }

/** ISO 8601 date string */
export type Timestamp = string & { readonly __brand: 'Timestamp' }

/** Supported locales */
export type Locale = 'en' | 'ar'

/** Text direction */
export type Direction = 'ltr' | 'rtl'

/** Image data */
export interface ImageData {
  src: string
  alt: string
  width?: number
  height?: number
  blurDataURL?: string
}

/** Link data */
export interface LinkData {
  label: string
  href: string
  isExternal?: boolean
}

/** SEO metadata for content items */
export interface SeoMeta {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
}

/** Base entity that all domain objects extend */
export interface BaseEntity {
  id: string
  createdAt?: string
  updatedAt?: string
}

/** Sortable entity */
export interface Sortable {
  order: number
}

/** Publishable entity */
export interface Publishable {
  isPublished: boolean
  publishedAt?: string
}
