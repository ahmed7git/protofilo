'use client'

import { motion } from 'framer-motion'
import { Compass, Layers, Rocket, Users } from 'lucide-react'

const steps = [
  {
    number: '01',
    phase: 'Discover',
    title: 'Uncover the real problem',
    description:
      'I talk to users, run interviews, dig into analytics, and audit competitors — so I’m solving the right problem, not just the obvious one.',
    icon: Compass,
    tags: ['User Interviews', 'Analytics Audit', 'Competitor Teardown'],
  },
  {
    number: '02',
    phase: 'Design',
    title: 'Build with clarity & speed',
    description:
      'Rapid sketches become hi‑fi interactive prototypes in Figma. I lean on robust design systems to keep things consistent and accelerate velocity.',
    icon: Layers,
    tags: ['Wireframing', 'Figma Prototypes', 'Design Systems'],
  },
  {
    number: '03',
    phase: 'Test',
    title: 'Validate with real users',
    description:
      'I put interactive prototypes in front of actual customers through usability sessions and task analysis to eliminate friction before writing a single line of code.',
    icon: Users,
    tags: ['Usability Testing', 'Task Analysis', 'Feedback Synthesis'],
  },
  {
    number: '04',
    phase: 'Deliver',
    title: 'Ship and measure impact',
    description:
      'I work side‑by‑side with engineers and PMs to ship polished products, then monitor post‑launch metrics to prove concrete business value.',
    icon: Rocket,
    tags: ['Engineer Handoff', 'Framer / Web QA', 'Metric Tracking'],
  },
]

export function LumosProcess() {
  return (
    <section id="process" className="w-full py-20 sm:py-28 flex flex-col items-center">
      <div className="w-full max-w-[1080px] mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[13px] font-mono uppercase tracking-widest text-[#737373] mb-3">
            How I Work
          </span>
          <h2 className="text-[36px] sm:text-[48px] font-serif text-[#262626] tracking-tight font-normal">
            Design Flow
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#525252] max-w-[540px] mt-3 font-normal leading-relaxed">
            A repeatable, battle-tested process that moves from ambiguity to measurable business impact.
          </p>
        </div>

        {/* Process Cards 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="lumos-card p-8 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 bg-white border border-black/[0.08]"
              >
                <div>
                  {/* Top Row: Number & Phase */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[14px] text-[#737373] font-medium tracking-wider">
                      {step.number}. {step.phase}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#F5F5F5] text-[#262626] flex items-center justify-center group-hover:bg-[#262626] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[24px] sm:text-[26px] font-serif text-[#262626] font-normal tracking-tight mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] text-[#525252] leading-relaxed font-normal mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.05]">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#F7F7F7] border border-black/[0.04] text-[12px] font-medium text-[#525252]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
