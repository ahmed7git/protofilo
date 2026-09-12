'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

interface ImpactItem {
  id: string
  company: string
  industry: string
  metricValue: string
  metricPrefix?: string
  metricSuffix?: string
  metricLabel: string
  summary: string
  subStats: { label: string; value: string }[]
}

const impactData: ImpactItem[] = [
  {
    id: 'stride',
    company: 'Stride',
    industry: 'Health & Fitness',
    metricValue: '28',
    metricPrefix: '+',
    metricSuffix: '%',
    metricLabel: 'Daily active users in first week',
    summary:
      'After redesigning the onboarding and simplifying the home screen, new users quickly discovered a clear daily action. This habit‑building nudge cut early churn by half and boosted daily engagement right from week one, directly increasing trial‑to‑paid conversions.',
    subStats: [
      { label: 'Trial Conversion', value: '+19%' },
      { label: 'Day-7 Churn', value: '-50%' },
      { label: 'Session Length', value: '4.2m' },
    ],
  },
  {
    id: 'loom-leaf',
    company: 'Loom & Leaf',
    industry: 'E‑commerce',
    metricValue: '42',
    metricPrefix: '-',
    metricSuffix: '%',
    metricLabel: 'Cart checkout abandonment',
    summary:
      'Mapped drop‑off points via session recordings and 8 customer interviews. Added transparent cost estimates, sustainability trust badges, and a sticky cart — turning hesitant browsers into confident buyers with measurable revenue lift.',
    subStats: [
      { label: 'Checkout Velocity', value: '1.8x' },
      { label: 'Mobile Conversion', value: '+34%' },
      { label: 'Avg Order Value', value: '$148' },
    ],
  },
  {
    id: 'finexa',
    company: 'Finexa',
    industry: 'B2B SaaS',
    metricValue: '60',
    metricPrefix: '',
    metricSuffix: '%',
    metricLabel: 'Reduction in time to first report',
    summary:
      'Redesigned a complex analytics report builder for enterprise clients. Through contextual inquiry and task analysis, I introduced a wizard‑based flow and template library — slashing time‑to‑value for new users while reducing support load.',
    subStats: [
      { label: 'Clicks to Publish', value: '24 → 9' },
      { label: 'Support Tickets', value: '-45%' },
      { label: 'Deal Close Rate', value: '+40%' },
    ],
  },
  {
    id: 'wander',
    company: 'Wander',
    industry: 'Travel Tech',
    metricValue: '60K',
    metricPrefix: '+$',
    metricSuffix: '/mo',
    metricLabel: 'Net incremental booking revenue',
    summary:
      'Streamlined a travel booking experience after a diary study and clickstream analysis. Curated picks, a minimal filter bar, and upfront pricing ended choice paralysis — leading to more bookings and happier travellers.',
    subStats: [
      { label: 'Search Abandonment', value: '-31%' },
      { label: 'Host Inquiries', value: '+52%' },
      { label: 'Booking Speed', value: '3.5m' },
    ],
  },
]

export function LumosBusinessImpact() {
  const [activeId, setActiveId] = useState<string>('stride')
  const activeItem = impactData.find((item) => item.id === activeId) || impactData[0]

  return (
    <section id="impact" className="w-full py-20 sm:py-28 flex flex-col items-center bg-[#F2F2F2]/60 border-y border-black/[0.05]">
      <div className="w-full max-w-[1080px] mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[13px] font-mono uppercase tracking-widest text-[#737373] mb-3">
            Proof of Work
          </span>
          <h2 className="text-[36px] sm:text-[48px] font-serif text-[#262626] tracking-tight font-normal">
            Business Impact
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#525252] max-w-[540px] mt-3 font-normal leading-relaxed">
            Every design decision ties directly to measurable business KPIs and user conversion metrics.
          </p>
        </div>

        {/* Impact Dashboard Card */}
        <div className="w-full bg-white rounded-[28px] border border-black/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.05)] p-6 sm:p-10 flex flex-col">
          
          {/* Top Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-[#F5F5F5] mb-10 border border-black/[0.04]">
            {impactData.map((item) => {
              const isActive = item.id === activeId
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`relative py-3 px-4 rounded-xl text-[14px] font-medium transition-all text-center flex flex-col items-center justify-center ${
                    isActive
                      ? 'bg-white text-[#262626] shadow-sm font-semibold'
                      : 'text-[#737373] hover:text-[#262626]'
                  }`}
                >
                  <span>{item.company}</span>
                  <span className="text-[11px] text-[#737373] font-normal">
                    {item.industry}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Active Impact Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Left Column: Big Headline Number */}
              <div className="lg:col-span-5 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black/[0.08] pb-8 lg:pb-0 lg:pr-8">
                <span className="text-[13px] font-mono text-[#737373] uppercase tracking-wider mb-2">
                  Primary Outcome
                </span>

                <div className="flex items-baseline gap-1 my-2">
                  <span className="font-serif text-[64px] sm:text-[80px] font-normal leading-none text-[#262626] tracking-tight">
                    {activeItem.metricPrefix}
                    {activeItem.metricValue}
                    {activeItem.metricSuffix}
                  </span>
                </div>

                <p className="text-[17px] font-medium text-[#262626] mt-2 mb-4 leading-snug">
                  {activeItem.metricLabel}
                </p>

                <div className="inline-flex items-center gap-1.5 text-[13px] text-[#00a33c] font-medium">
                  <TrendingUp className="w-4 h-4" />
                  <span>Verified post-launch analytics</span>
                </div>
              </div>

              {/* Right Column: Case Story & Secondary KPIs */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div className="mb-8">
                  <span className="text-[13px] font-mono text-[#737373] uppercase tracking-wider mb-3 block">
                    The Context & Strategy
                  </span>
                  <p className="text-[16px] sm:text-[17px] leading-relaxed text-[#525252] font-normal">
                    {activeItem.summary}
                  </p>
                </div>

                {/* Sub-stats 3-column pill row */}
                <div className="grid grid-cols-3 gap-3">
                  {activeItem.subStats.map((sub, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-[#F7F7F7] border border-black/[0.04] text-center"
                    >
                      <div className="font-serif text-[20px] sm:text-[24px] font-normal text-[#262626]">
                        {sub.value}
                      </div>
                      <div className="text-[11px] sm:text-[12px] text-[#737373] mt-0.5">
                        {sub.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  )
}
