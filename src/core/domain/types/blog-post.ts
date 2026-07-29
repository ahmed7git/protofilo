import type { BaseEntity, Publishable, SeoMeta, ImageData } from './common'

export interface BlogPost extends BaseEntity, Publishable {
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: ImageData
  author: string
  tags: string[]
  category: string
  readingTime: number
  seo?: SeoMeta
}
