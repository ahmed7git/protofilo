'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Plus, Minus } from 'lucide-react'
import { heroItem } from '@/lib/design-system/animations'

const services = [
  {
    id: 's1',
    title: 'Web Design',
    desc: 'I design modern, responsive websites that balance creativity with usability, making sure your digital presence feels seamless and memorable.',
    tags: ['Visual Design', 'Interaction Design', 'Responsive Layouts'],
    images: ['https://via.placeholder.com/384x206', 'https://via.placeholder.com/384x206']
  },
  {
    id: 's2',
    title: 'No-Code Development',
    desc: 'Build fast, scalable websites using tools like Framer and Webflow—helping you launch quickly with designs that are easy to edit and maintain.',
    tags: ['Framer Builds', 'Webflow Sites', 'Scalable Launches'],
    images: ['https://via.placeholder.com/384x206', 'https://via.placeholder.com/384x206']
  },
  {
    id: 's3',
    title: 'Brand Identity',
    desc: 'I craft cohesive brand systems with logos, colors, and typography that reflect your values—making your business recognizable and trusted.',
    tags: ['Logo Design', 'Visual Systems', 'Brand Guidelines'],
    images: ['https://via.placeholder.com/384x206', 'https://via.placeholder.com/384x206']
  }
]

export function ServicesSection() {
  const [openId, setOpenId] = useState<string>('s1')

  return (
    <section id="service" className="relative flex flex-col pt-20">
      <motion.div
        variants={heroItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-8"
      >
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-[13px] font-medium text-white/70 mb-4">
          <Briefcase className="h-4 w-4" />
          <span>Services</span>
        </div>

        {/* Accordion */}
        <div className="flex flex-col">
          {services.map((service) => {
            const isOpen = openId === service.id

            return (
              <div 
                key={service.id} 
                className="flex flex-col border-b border-white/10"
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : service.id)}
                  className="group flex w-full items-center justify-between py-6 text-left transition-colors hover:text-white"
                >
                  <h4 className={`text-[24px] sm:text-[32px] font-medium tracking-tight transition-colors ${isOpen ? 'text-white' : 'text-white/60'}`}>
                    {service.title}
                  </h4>
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${isOpen ? 'bg-white border-white text-black' : 'border-white/20 text-white group-hover:border-white/40'}`}>
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-8 pb-8 pt-2">
                        {/* Images Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.images.map((img, i) => (
                            <div key={i} className="aspect-[384/206] w-full overflow-hidden rounded-[20px] bg-white/5">
                              <img src={img} alt={`${service.title} example`} className="w-full h-full object-cover opacity-80" />
                            </div>
                          ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 rounded-full bg-[#1c1c1c] text-[13px] font-medium text-white/70">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Description */}
                        <p className="text-[15px] leading-relaxed text-white/60 max-w-[600px]">
                          {service.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
