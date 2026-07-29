import type { BaseEntity, Sortable, Publishable } from './common'

export interface Service extends BaseEntity, Sortable, Publishable {
  title: string
  slug: string
  description: string
  longDescription?: string
  icon?: string
  features: string[]
  pricing?: {
    startingAt?: number
    currency?: string
    unit?: string
  }
}
