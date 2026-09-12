import type { BaseEntity, ImageData, Sortable, Publishable } from './common'

export interface Project extends BaseEntity, Sortable, Publishable {
  title: string
  slug: string
  description: string
  longDescription?: string
  image: ImageData
  technologies: string[]
  category: string
  links: {
    live?: string
    github?: string
    caseStudy?: string
  }
  featured: boolean
  startDate: string
  endDate?: string
}
