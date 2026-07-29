'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site'
import { staggerContainer, staggerItem } from '@/lib/design-system/animations'

export function HeroStats() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap items-end gap-8 pt-4 lg:gap-12"
    >
      {siteConfig.stats.slice(0, 2).map((stat) => (
        <motion.div key={stat.label} variants={staggerItem} className="space-y-1">
          <span className="block text-5xl font-bold tracking-tight text-text-primary lg:text-6xl">
            {stat.value}
          </span>
          <span className="block text-sm text-text-muted">{stat.label}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
