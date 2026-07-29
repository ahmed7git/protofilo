'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { fadeIn } from '@/lib/design-system/animations'

export function HeroTopBar() {
  const now = new Date()
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ]

  const dateStr = `${dayNames[now.getDay()]}, ${monthNames[now.getMonth()]} ${now.getDate()}`
  const timeStr = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="flex w-full items-start justify-between"
    >
      {/* Profile Info */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-surface-elevated">
          <Image
            src="/hero-portrait.png"
            alt={siteConfig.name}
            width={40}
            height={40}
            className="h-full w-full object-cover grayscale"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-text-primary">{siteConfig.name}</p>
          <p className="text-xs text-text-muted">{siteConfig.title}</p>
        </div>
      </div>

      {/* Date & Time */}
      <div className="text-right flex flex-col gap-0.5">
        <p className="text-[13px] text-[#888888]">{dateStr}</p>
        <p className="text-[13px] font-medium text-[#888888] tabular-nums">{timeStr}</p>
      </div>
    </motion.div>
  )
}
