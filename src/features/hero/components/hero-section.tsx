'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { heroContainer, heroItem, heroImageReveal, fadeInUp, staggerContainer, staggerItem } from '@/lib/design-system/animations'
import { HeroProfileCard } from './hero-profile-card'
import { HeroHeadline } from './hero-headline'
import { HeroRibbon } from './hero-ribbon'
import { HeroStats } from './hero-stats'
import { HeroSidebar } from './hero-sidebar'
import { HeroTopBar } from './hero-top-bar'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-background"
    >
      {/* Main Content */}
      <div className="relative mx-auto flex min-h-[100vh] max-w-[1440px] items-center px-6 pt-10 pb-10 lg:px-12">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="grid w-full grid-cols-1 items-start gap-16 lg:grid-cols-12"
        >
          {/* Left Column — Profile Card */}
          <motion.div
            variants={heroImageReveal}
            className="relative z-10 lg:col-span-4 xl:col-span-3"
          >
            <HeroProfileCard />
          </motion.div>

          {/* Right Column — TopBar + Headline + Ribbon + Stats */}
          <motion.div
            variants={heroItem}
            className="relative z-10 flex h-full min-h-[620px] flex-col justify-between py-2 lg:col-span-8 xl:col-span-9"
          >
            <HeroTopBar />
            
            <div className="flex flex-col gap-12 mt-12">
              <HeroHeadline />
              <div className="relative">
                <HeroRibbon />
              </div>
            </div>

            <div className="mt-auto pt-16">
              <HeroStats />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Sidebar */}
      <HeroSidebar />

      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent/3 blur-[100px]" />
      </div>
    </section>
  )
}
