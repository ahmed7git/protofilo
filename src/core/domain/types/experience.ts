import type { BaseEntity, Sortable } from './common'

export interface Experience extends BaseEntity, Sortable {
  company: string
  role: string
  description: string
  achievements: string[]
  technologies: string[]
  startDate: string
  endDate?: string
  isCurrent: boolean
  companyUrl?: string
  companyLogo?: string
  location?: string
  type: 'full-time' | 'part-time' | 'freelance' | 'contract' | 'internship'
}
