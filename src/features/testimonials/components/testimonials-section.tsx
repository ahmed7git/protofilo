'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Quote } from 'lucide-react'
import { heroItem } from '@/lib/design-system/animations'

const testimonials = [
  {
    text: 'Working with Isak was seamless. The website came out fast, modern, and easy to update—exactly what our team needed.',
    name: 'Daniel Ruiz',
    role: 'Head of Product, Tempo App',
    image: 'https://via.placeholder.com/256x320',
  },
  {
    text: 'Isak shaped our vision into a strong brand. The process was clear, fast, and the result gave our startup the professional edge we needed.',
    name: 'Sophia Lee',
    role: 'Co-Founder, Horizon Finance',
    image: 'https://via.placeholder.com/256x320',
  },
  {
    text: 'Despite a tight launch schedule, Isak delivered a clean, flexible site in Framer. It’s modern, easy to manage, and fits our needs perfectly.',
    name: 'Michael Anders',
    role: 'Marketing Director, Flowly',
    image: 'https://via.placeholder.com/256x320',
  }
]

export function TestimonialSection() {
  return (
    <section id="testimonial" className="relative flex flex-col pt-20">
      <motion.div
        variants={heroItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-8"
      >
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-[13px] font-medium text-white/70 mb-4">
          <MessageSquare className="h-4 w-4" />
          <span>Testimonials</span>
        </div>

        {/* Heading & Counters */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 mb-8">
          <h3 className="text-[28px] sm:text-[36px] font-medium leading-[1.2] tracking-tight text-white">
            Here&apos;s what <br className="hidden sm:block" />
            people are saying
          </h3>

          <div className="flex items-center gap-8 xl:gap-16">
            <div className="flex flex-col gap-2">
              <span className="text-[32px] sm:text-[40px] font-medium tracking-tight text-white/95">26+</span>
              <span className="text-[13px] text-white/50">Finalized projects</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[32px] sm:text-[40px] font-medium tracking-tight text-white/95">98%</span>
              <span className="text-[13px] text-white/50">Client satisfaction</span>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Testimonials */}
        <div className="flex overflow-x-auto hidden-scrollbar gap-6 pb-8 snap-x snap-mandatory">
          {testimonials.map((testi, i) => (
            <div 
              key={i} 
              className="flex w-full min-w-[280px] max-w-[400px] flex-col gap-8 shrink-0 snap-center rounded-[32px] bg-[#141414] border border-white/5 p-6 sm:p-8"
            >
              {/* Image & Quote Icon */}
              <div className="flex justify-between items-start">
                <div className="w-[60px] h-[60px] rounded-[16px] overflow-hidden bg-white/5 border border-white/10">
                  <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-white/20">
                  <Quote className="h-8 w-8" />
                </div>
              </div>
              
              <p className="text-[16px] leading-relaxed text-white/80">
                &quot;{testi.text}&quot;
              </p>

              <div className="mt-auto pt-4 border-t border-white/5">
                <h6 className="text-[15px] font-medium text-white">{testi.name}</h6>
                <p className="text-[13px] text-white/50 mt-1">{testi.role}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
