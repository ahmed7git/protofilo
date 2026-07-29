'use client'

import { motion } from 'framer-motion'
import { Monitor } from 'lucide-react'
import { heroItem } from '@/lib/design-system/animations'

const techStack = [
  {
    name: 'Figma',
    desc: 'Leading design tool',
    progress: 80,
    logo: 'https://via.placeholder.com/28x28'
  },
  {
    name: 'Framer',
    desc: 'No-code website builder',
    progress: 90,
    logo: 'https://via.placeholder.com/28x28'
  },
  {
    name: 'Adobe Photoshop',
    desc: 'Raster graphics editor',
    progress: 60,
    logo: 'https://via.placeholder.com/28x28'
  }
]

export function TechStackSection() {
  return (
    <section id="tech" className="relative flex flex-col pt-20">
      <motion.div
        variants={heroItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-8"
      >
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-[13px] font-medium text-white/70 mb-4">
          <Monitor className="h-4 w-4" />
          <span>Tech Stack</span>
        </div>

        <h3 className="text-[28px] sm:text-[36px] font-medium leading-[1.2] tracking-tight text-white mb-8">
          See how my expertise with these <br className="hidden sm:block" />
          tools drives better results
        </h3>

        <ul className="flex flex-col gap-10">
          {techStack.map((tech, index) => (
            <li key={index} className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 shrink-0">
                  <img src={tech.logo} alt={tech.name} className="w-7 h-7 opacity-80" />
                </div>
                <div className="flex flex-col">
                  <h5 className="text-[18px] font-medium text-white/90">{tech.name}</h5>
                  <p className="text-[14px] text-white/50">{tech.desc}</p>
                </div>
              </div>
              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="absolute left-0 top-0 h-full bg-[#4ade80]"
                />
              </div>
              <div className="flex justify-end mt-[-8px]">
                <span className="text-[12px] font-medium text-white/40">{tech.progress}%</span>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
