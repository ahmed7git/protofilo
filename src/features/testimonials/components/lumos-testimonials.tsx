'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 'alex',
    name: 'Alex Chen',
    role: 'Head of Product',
    company: 'Stride',
    avatar:
      'https://framerusercontent.com/images/KKQ4nePgzNWbAK4zl2UH9x2olWs.jpg',
    body:
      'His redesign of our onboarding didn’t just look better — it boosted daily active users by 28% in the first week. He moves fast, bases every decision on real user telemetry, and is an absolute joy to collaborate with.',
    metric: '+28% DAU',
  },
  {
    id: 'david',
    name: 'David Okafor',
    role: 'VP of Engineering',
    company: 'Finexa',
    avatar:
      'https://framerusercontent.com/images/SCMHangbGyFMX8F1n1I8WBDk0.png',
    body:
      'Our enterprise clients went from 14 days to 5.5 days to generate their first report — a 60% reduction. That’s entirely because of his design leadership, intuitive component system, and deep understanding of complex data workflows.',
    metric: '60% Faster',
  },
  {
    id: 'lena',
    name: 'Lena Andersson',
    role: 'Product Manager',
    company: 'Wander',
    avatar:
      'https://framerusercontent.com/images/IMB8Ce2AAQPwW9mRqXiNAPlLlA.png',
    body:
      'He transformed our booking flow and drove an extra $60k/month in revenue. His ability to balance clean user experience with hard business conversion metrics is rare and exceptionally valuable for any high-growth startup.',
    metric: '+$60K/mo',
  },
]

export function LumosTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const current = testimonials[currentIndex]

  return (
    <section className="w-full py-20 sm:py-28 flex flex-col items-center">
      <div className="w-full max-w-[1080px] mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[13px] font-mono uppercase tracking-widest text-[#737373] mb-3">
            Social Proof
          </span>
          <h2 className="text-[36px] sm:text-[48px] font-serif text-[#262626] tracking-tight font-normal">
            Client Stories
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#525252] max-w-[520px] mt-3 font-normal leading-relaxed">
            Direct feedback from product leaders, founders, and engineers I’ve partnered with.
          </p>
        </div>

        {/* Testimonial Showcase Card */}
        <div className="relative w-full max-w-[820px] mx-auto lumos-card bg-white border border-black/[0.08] p-8 sm:p-14 overflow-hidden">
          
          {/* Subtle Quote Watermark */}
          <div className="absolute top-6 right-8 text-black/[0.03] pointer-events-none">
            <Quote className="w-24 h-24 stroke-[1]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between min-h-[260px]"
            >
              {/* Quote text */}
              <p className="font-serif text-[22px] sm:text-[28px] leading-[1.4] text-[#262626] font-normal tracking-tight mb-10">
                “{current.body}”
              </p>

              {/* Author Row */}
              <div className="flex items-center justify-between pt-6 border-t border-black/[0.06]">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-12 h-12 rounded-full object-cover border border-black/10 shadow-sm"
                  />
                  <div>
                    <h4 className="text-[16px] font-semibold text-[#262626]">
                      {current.name}
                    </h4>
                    <p className="text-[13px] text-[#737373]">
                      {current.role}, <span className="text-[#262626] font-medium">{current.company}</span>
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex px-3.5 py-1.5 rounded-full bg-[#F5F5F5] border border-black/[0.05] text-[13px] font-mono font-medium text-[#262626]">
                  {current.metric}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-end gap-3 mt-8 pt-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-black/[0.08] bg-[#F7F7F7] hover:bg-[#EAEAEA] text-[#262626] flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="text-[13px] font-mono text-[#737373] px-2">
              0{currentIndex + 1} / 0{testimonials.length}
            </div>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-black/[0.08] bg-[#262626] hover:bg-black text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}
