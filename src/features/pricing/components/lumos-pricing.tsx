'use client'

import { useState } from 'react'
import { Check, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface PricingTier {
  name: string
  subtitle: string
  price: string
  period: string
  popular?: boolean
  features: string[]
  ctaText: string
}

interface ServiceCategory {
  id: string
  label: string
  tiers: [PricingTier, PricingTier]
}

const pricingData: ServiceCategory[] = [
  {
    id: 'ui-ux',
    label: 'UX/UI Design',
    tiers: [
      {
        name: 'Starter Sprint',
        subtitle: 'Early-stage startups or single feature sprints.',
        price: '$3,000',
        period: '/ sprint',
        features: [
          '5 core screens designed',
          'Clickable Figma prototype',
          'Basic design system (colors, typography)',
          '1 round of revisions',
          'Detailed developer handoff specs',
        ],
        ctaText: 'Book a sprint',
      },
      {
        name: 'Growth Partner',
        subtitle: 'Growing teams needing ongoing dedicated design support.',
        price: '$8,000',
        period: '/ month',
        popular: true,
        features: [
          'Unlimited screens & user flows',
          'Weekly iterative prototypes',
          'Full component library (auto-layout)',
          'User research & usability testing',
          'Developer handoff & QA support',
          '2 rounds of revisions per milestone',
        ],
        ctaText: 'Get started',
      },
    ],
  },
  {
    id: 'framer',
    label: 'Framer Dev',
    tiers: [
      {
        name: 'Landing Page',
        subtitle: 'Solo entrepreneurs needing a single, high‑converting page.',
        price: '$1,500',
        period: '/ page',
        features: [
          '1 responsive landing page',
          'Custom Framer / React components',
          'Smooth animations & hover states',
          'Technical SEO & meta setup',
          '1 round of revisions',
        ],
        ctaText: 'Build landing page',
      },
      {
        name: 'Full Website',
        subtitle: 'Founders launching an end‑to‑end brand web experience.',
        price: '$5,000',
        period: '/ project',
        popular: true,
        features: [
          'Up to 5 custom pages + CMS collections',
          'Custom component & animation system',
          'Advanced scroll interactions & micro-effects',
          'Fully responsive (Mobile, Tablet, Desktop)',
          'Analytics & form integration',
          '2 rounds of revisions',
        ],
        ctaText: 'Build full website',
      },
    ],
  },
  {
    id: 'app-design',
    label: 'App Design',
    tiers: [
      {
        name: 'MVP Sprint',
        subtitle: 'Founders who need a fast app prototype to raise or validate.',
        price: '$4,500',
        period: '/ sprint',
        features: [
          'Up to 8 key screens (iOS or Android)',
          'Interactive prototype with gestures',
          'App icon & splash design',
          'Core component set',
          '1 round of revisions',
        ],
        ctaText: 'Start MVP sprint',
      },
      {
        name: 'Full Product Design',
        subtitle: 'Teams building a complete flagship mobile or web app.',
        price: '$10,000',
        period: '/ month',
        popular: true,
        features: [
          'End-to-end product architecture & screens',
          'Native iOS & Android adaptations',
          'Comprehensive design system in Figma',
          'User research & usability benchmarking',
          'Micro-interactions & animation assets',
          'Developer handoff with design tokens',
        ],
        ctaText: 'Hire Flutter developer',
      },
    ],
  },
]

export function LumosPricing() {
  const [activeCategory, setActiveCategory] = useState<string>('ui-ux')
  const currentCategory = pricingData.find((c) => c.id === activeCategory) || pricingData[0]

  return (
    <section id="pricing" className="w-full py-20 sm:py-28 flex flex-col items-center bg-[#F2F2F2]/60 border-y border-black/[0.05]">
      <div className="w-full max-w-[1080px] mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[13px] font-mono uppercase tracking-widest text-[#737373] mb-3">
            Investment
          </span>
          <h2 className="text-[36px] sm:text-[48px] font-serif text-[#262626] tracking-tight font-normal">
            Core Services
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#525252] max-w-[520px] mt-3 font-normal leading-relaxed">
            Transparent, goal-oriented pricing built around real business outcomes, not arbitrary hours.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-white border border-black/[0.08] shadow-sm">
            {pricingData.map((category) => {
              const isActive = category.id === activeCategory
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative px-5 py-2 rounded-full text-[14px] font-medium transition-colors ${
                    isActive ? 'text-[#262626]' : 'text-[#737373] hover:text-[#262626]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="pricingTabIndicator"
                      className="absolute inset-0 bg-[#F2F2F2] rounded-full border border-black/[0.05]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
          >
            {currentCategory.tiers.map((tier) => (
              <div
                key={tier.name}
                className={`lumos-card relative p-8 sm:p-10 flex flex-col justify-between bg-white border ${
                  tier.popular ? 'border-[#262626] shadow-xl' : 'border-black/[0.08]'
                }`}
              >
                {/* Popular Pill */}
                {tier.popular && (
                  <div className="absolute -top-3.5 right-8 bg-[#262626] text-white text-[11px] font-mono uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Plan Name & Subtitle */}
                  <h3 className="text-[26px] font-serif text-[#262626] font-normal tracking-tight mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-[14px] text-[#737373] leading-relaxed mb-6">
                    {tier.subtitle}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 pb-6 border-b border-black/[0.06] mb-6">
                    <span className="text-[44px] sm:text-[52px] font-serif text-[#262626] font-normal leading-none tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-[14px] text-[#737373] font-mono">
                      {tier.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-[#525252]">
                        <span className="w-5 h-5 rounded-full bg-[#00DE51]/15 text-[#00a33c] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`w-full py-3.5 rounded-full flex items-center justify-center gap-2 text-[14px] font-medium transition-all duration-200 ${
                    tier.popular
                      ? 'bg-[#262626] text-white hover:bg-black shadow-md hover:scale-[1.01]'
                      : 'bg-[#F2F2F2] text-[#262626] hover:bg-[#E5E5E5]'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
