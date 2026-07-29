'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowUpRight } from 'lucide-react'
import { heroItem } from '@/lib/design-system/animations'

const works = [
  {
    title: 'Drone',
    desc: 'Brand and website for a drone startup, blending futuristic visuals with trust-driven design',
    year: '2024',
    role: 'Lead Product Designer',
    tags: ['Brand', 'Website', 'Webflow'],
    image: 'https://via.placeholder.com/800x500',
    mobileImage: 'https://via.placeholder.com/400x700',
  },
  {
    title: 'Durotan',
    desc: 'Minimal e-commerce identity and website crafted to highlight timeless fashion essentials',
    year: '2024',
    role: 'Lead Product Designer',
    tags: ['Brand', 'Website', 'Webflow'],
    image: 'https://via.placeholder.com/800x500',
    mobileImage: 'https://via.placeholder.com/400x700',
  },
  {
    title: 'Nike Campaign',
    desc: 'Landing experience for Nike’s urban campaign, built to inspire movement and brand loyalty',
    year: '2024',
    role: 'Lead Product Designer',
    tags: ['Brand', 'Website', 'Webflow'],
    image: 'https://via.placeholder.com/800x500',
    mobileImage: 'https://via.placeholder.com/400x700',
  }
]

export function WorkSection() {
  return (
    <section id="work" className="relative flex flex-col pt-20 pb-32">
      <motion.div
        variants={heroItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-8"
      >
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-[13px] font-medium text-white/70">
          <Sparkles className="h-4 w-4" />
          <span>Work Highlights</span>
        </div>

        {/* Sticky Projects List */}
        <div className="mt-8 flex flex-col gap-24">
          {works.map((work, index) => (
            <div 
              key={index}
              className="sticky top-10 flex flex-col xl:flex-row gap-8 rounded-[32px] bg-[#141414] border border-white/5 p-4 sm:p-6 shadow-2xl transition-transform hover:scale-[1.01]"
              style={{
                top: `calc(3rem + ${index * 2}rem)`, // Staggered sticky effect
                zIndex: index + 10,
              }}
            >
              {/* Project Image Area */}
              <div className="relative w-full xl:w-[55%] h-[300px] sm:h-[400px] xl:h-[500px] rounded-[24px] overflow-hidden bg-[#0a0a0a]">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover hidden sm:block opacity-60 transition-opacity hover:opacity-100"
                />
                <img 
                  src={work.mobileImage} 
                  alt={work.title}
                  className="w-full h-full object-cover block sm:hidden opacity-60 transition-opacity hover:opacity-100"
                />
              </div>

              {/* Project Content Area */}
              <div className="flex flex-1 flex-col justify-between py-2 xl:py-6 px-2 xl:px-6">
                <div className="flex flex-col gap-6">
                  {/* Logo Placeholder */}
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-white/40 text-xs">Logo</span>
                  </div>

                  <div>
                    <h4 className="text-[28px] sm:text-[36px] font-medium text-white/90 mb-3 tracking-tight">
                      {work.title}
                    </h4>
                    <p className="text-[15px] leading-relaxed text-white/60">
                      {work.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-8 mt-2">
                    <div className="flex flex-col gap-1">
                      <span className="text-[13px] text-white/50">Year</span>
                      <span className="text-[15px] font-medium text-white/80">{work.year}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[13px] text-white/50">Role</span>
                      <span className="text-[15px] font-medium text-white/80">{work.role}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {work.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 text-[12px] font-medium text-white/70 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
                  <a href="#" className="flex h-12 rounded-full border border-white/20 hover:bg-white/10 text-white items-center justify-center gap-2 px-6 font-medium transition-colors">
                    <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                    Let’s talk
                    <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                  </a>

                  <span className="text-white/40 text-[14px] font-medium tracking-widest">
                    <span className="text-white/80">0{index + 1}</span> / 0{works.length}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
