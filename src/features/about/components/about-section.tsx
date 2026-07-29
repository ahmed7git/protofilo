'use client'

import { motion } from 'framer-motion'
import { UserCircle } from 'lucide-react'
import { heroItem } from '@/lib/design-system/animations'

const awards = [
  { name: 'Website of the Day', org: 'CSSDA', year: '2019' },
  { name: 'Public Awards - UI', org: 'CSSDA', year: '2019' },
  { name: 'Public Awards - INN', org: 'CSSDA', year: '2019' },
  { name: 'Site of the Month', org: 'Awwwards', year: '2018' },
  { name: 'Site of the Day', org: 'Awwwards', year: '2017' },
]

export function AboutSection() {
  return (
    <section id="about" className="relative flex flex-col pt-20">
      <motion.div
        variants={heroItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-8"
      >
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-[13px] font-medium text-white/70">
          <UserCircle className="h-4 w-4" />
          <span>About</span>
        </div>

        {/* Title */}
        <h3 className="text-[36px] font-medium leading-[1.1] tracking-tight text-white sm:text-[44px]">
          Designing brands and <br className="hidden lg:block" />
          websites with clarity, creativity, <br className="hidden lg:block" />
          and no-code speed
        </h3>

        {/* Description */}
        <p className="text-[16px] leading-relaxed text-white/60">
          I combine web design, brand identity, and no-code development to help<br className="hidden lg:block" />
          businesses move faster while staying true to their personality.
          <br /><br />
          Every project is approached with both strategy and style—making sure<br className="hidden lg:block" />
          design isn&apos;t just good-looking, but also purposeful and effective.
        </p>

        {/* Awards List */}
        <ul className="mt-8 flex flex-col group/list relative">
          {awards.map((award, index) => (
            <li 
              key={index}
              className="group flex items-center justify-between border-b border-white/10 py-6 transition-colors hover:border-white/30 relative"
            >
              <div className="flex flex-col gap-1">
                <h6 className="text-[18px] sm:text-[22px] font-medium tracking-tighter text-white transition-colors group-hover:text-[#00DE51]">
                  {award.name}
                </h6>
                <p className="text-[14px] text-white/50">{award.org}</p>
              </div>
              <h6 className="text-[16px] font-medium text-white/70">{award.year}</h6>
              
              {/* Hover Image (Shown on desktop) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[158px] h-[224px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block z-50 overflow-hidden rounded-xl bg-black">
                <img 
                  src="https://via.placeholder.com/158x224" 
                  alt={award.name}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
