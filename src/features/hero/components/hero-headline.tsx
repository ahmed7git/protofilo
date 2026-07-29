'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site'
import { heroItem, staggerContainer, staggerItem } from '@/lib/design-system/animations'

export function HeroHeadline() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-2"
    >
      <motion.h1
        variants={heroItem}
        className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] font-bold tracking-tight text-text-primary"
      >
        {siteConfig.headline}{' '}
        <span className="relative inline-block">
          <span className="relative z-10">{siteConfig.headlineHighlights[0]}</span>
          <span className="absolute inset-0 -skew-x-2 rounded-lg bg-accent" />
        </span>
        <br />
        <span className="relative inline-block">
          <span className="relative z-10">{siteConfig.headlineHighlights[1]}</span>
          <span className="absolute inset-0 -skew-x-2 rounded-lg bg-accent" />
        </span>{' '}
        {siteConfig.headlineSuffix}
      </motion.h1>
    </motion.div>
  )
}
