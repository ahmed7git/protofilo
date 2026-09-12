'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'What’s your typical design process?',
    a: 'I start with user research and business goal alignment, then move through wireframes, high‑fidelity prototypes, and usability testing. I collaborate with developers and PMs throughout, and I always measure outcomes post‑launch.',
  },
  {
    q: 'Do you work with existing design systems?',
    a: 'Yes. I’m experienced in working inside established design systems in Figma and Framer, extending tokens and components without breaking consistency. I can also architect new component libraries from scratch if needed.',
  },
  {
    q: 'What tools do you use daily?',
    a: 'Figma for product design and high-fidelity prototyping, Framer & Next.js for web engineering, and Notion or Linear for transparent sprint tracking. I adapt seamlessly to whatever workflow your team uses.',
  },
  {
    q: 'Can you design and build in Framer / Code?',
    a: 'Absolutely. I offer both UI/UX design and Framer / Next.js development as separate or combined services. I can hand off designs to your engineering team or ship a fully responsive, pixel-perfect production site myself.',
  },
  {
    q: 'How do you measure the success of a design?',
    a: 'I tie every screen to specific business metrics — conversion rates, activation, day-7 retention, time‑to‑value, or incremental revenue. I define clear success benchmarks upfront with stakeholders and track results post-launch.',
  },
  {
    q: 'What does a typical project timeline look like?',
    a: 'A focused sprint (e.g., 5 core screens or a high-converting landing page) takes about 2–3 weeks. Larger end‑to‑end engagements run on monthly sprints with weekly iterations. I match your team’s velocity and release cadence.',
  },
]

export function LumosFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="w-full py-20 sm:py-28 flex flex-col items-center bg-[#F2F2F2]/60 border-t border-black/[0.05]">
      <div className="w-full max-w-[820px] mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[13px] font-mono uppercase tracking-widest text-[#737373] mb-3">
            Common Questions
          </span>
          <h2 className="text-[36px] sm:text-[48px] font-serif text-[#262626] tracking-tight font-normal">
            Still Curious?
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#525252] max-w-[500px] mt-3 font-normal leading-relaxed">
            Quick, straightforward answers about process, deliverables, and collaboration.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="lumos-card bg-white border border-black/[0.08] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between text-left gap-4 transition-colors hover:bg-[#FAF9F6]/50"
                  aria-expanded={isOpen}
                >
                  <span className="text-[17px] sm:text-[19px] font-serif text-[#262626] font-normal tracking-tight">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F5F5F5] text-[#262626] flex items-center justify-center shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 text-[15px] sm:text-[16px] text-[#525252] leading-relaxed font-normal border-t border-black/[0.04]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
