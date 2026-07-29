import type { BaseEntity, Sortable } from './common'
import type { LucideIcon } from 'lucide-react'

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert'

export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'devops'
  | 'design'
  | 'tools'
  | 'other'

export interface Skill extends BaseEntity, Sortable {
  name: string
  category: SkillCategory
  level: SkillLevel
  icon?: string
  yearsOfExperience?: number
}
