'use client'

import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { heroItem } from '@/lib/design-system/animations'

export function ContactSection() {
  return (
    <section id="contact" className="relative flex flex-col pt-20">
      <motion.div
        variants={heroItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-12"
      >
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-[13px] font-medium text-white/70">
          <Send className="h-4 w-4" />
          <span>Contact</span>
        </div>

        {/* Heading */}
        <h3 className="text-[28px] sm:text-[36px] font-medium leading-[1.2] tracking-tight text-white max-w-[600px]">
          If you have a general or project enquiry, please drop me an email or fill the form - available now
        </h3>

        {/* Form */}
        <form className="flex flex-col gap-6 w-full max-w-[700px]">
          <div className="flex flex-col gap-6">
            <input 
              type="text" 
              placeholder="Your Name *" 
              required
              className="w-full border-b border-white/10 bg-transparent py-4 text-[16px] text-white placeholder-white/40 focus:border-[#4ade80] focus:outline-none transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email Address *" 
              required
              className="w-full border-b border-white/10 bg-transparent py-4 text-[16px] text-white placeholder-white/40 focus:border-[#4ade80] focus:outline-none transition-colors"
            />
            <input 
              type="text" 
              placeholder="Project Description" 
              className="w-full border-b border-white/10 bg-transparent py-4 text-[16px] text-white placeholder-white/40 focus:border-[#4ade80] focus:outline-none transition-colors"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
            <button 
              type="submit" 
              className="flex h-[52px] items-center justify-center rounded-full bg-white px-8 text-[15px] font-semibold text-black transition-transform hover:scale-105"
            >
              Send Message
            </button>
            
            <a 
              href="mailto:hello@isak.design" 
              className="text-[18px] font-medium tracking-tight text-white/70 transition-colors hover:text-white"
            >
              hello@isak.design
            </a>
          </div>
        </form>
      </motion.div>
    </section>
  )
}
