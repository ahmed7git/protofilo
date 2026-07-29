import type { BaseEntity, Sortable } from './common'

export interface Certificate extends BaseEntity, Sortable {
  name: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
  credentialUrl?: string
  image?: string
}
