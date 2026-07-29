'use client'

import { motion } from 'framer-motion'
import {
  Settings,
  Sun,
  Home,
  CircleUserRound,
  Briefcase,
  Sparkles,
  SquareStack,
  Boxes,
  MessageSquareQuote,
  Send,
  ArrowUp,
} from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/design-system/animations'

const navItems = [
  { icon: Home, label: 'Home', active: true },
  { separator: true, label: 's1' },
  { icon: CircleUserRound, label: 'About' },
  { icon: Briefcase, label: 'Experience' },
  { icon: Sparkles, label: 'Skills' },
  { icon: SquareStack, label: 'Projects' },
  { icon: Boxes, label: 'Services' },
  { icon: MessageSquareQuote, label: 'Testimonials' },
  { separator: true, label: 's2' },
  { icon: Send, label: 'Contact' },
]

export function HeroSidebar() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="fixed top-1/2 right-3 z-30 hidden -translate-y-1/2 flex-col items-center gap-1.5 lg:flex"
    >
      {/* Settings */}
      <motion.button
        variants={staggerItem}
        aria-label="Settings"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/5 bg-surface-elevated/40 text-text-muted shadow-sm backdrop-blur-md transition-all hover:bg-surface-elevated hover:text-text-primary"
      >
        <Settings className="h-3.5 w-3.5" />
      </motion.button>

      {/* Theme */}
      <motion.button
        variants={staggerItem}
        aria-label="Theme"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/5 bg-surface-elevated/40 text-text-muted shadow-sm backdrop-blur-md transition-all hover:bg-surface-elevated hover:text-text-primary"
      >
        <Sun className="h-3.5 w-3.5" />
      </motion.button>

      {/* Main Nav Pill */}
      <motion.div
        variants={staggerItem}
        className="flex flex-col items-center gap-1.5 rounded-full border border-white/5 bg-surface-elevated/40 px-1 py-2 shadow-md backdrop-blur-md"
      >
        {navItems.map((item) => {
          if (item.separator) {
            return <div key={item.label} className="my-0.5 h-px w-4 bg-border/50" />
          }

          const Icon = item.icon!
          return (
            <button
              key={item.label}
              aria-label={item.label}
              className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${
                item.active
                  ? 'text-accent'
                  : 'text-text-muted hover:bg-surface-hover hover:text-text-primary'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
            </button>
          )
        })}
      </motion.div>

      {/* Back to top */}
      <motion.button
        variants={staggerItem}
        aria-label="Back to Top"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/5 bg-surface-elevated/40 text-text-muted shadow-sm backdrop-blur-md transition-all hover:bg-surface-elevated hover:text-text-primary"
      >
        <ArrowUp className="h-3.5 w-3.5" />
      </motion.button>
    </motion.div>
  )
}
