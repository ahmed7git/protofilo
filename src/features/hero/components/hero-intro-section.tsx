'use client'

import { motion } from 'framer-motion'
import { heroItem } from '@/lib/design-system/animations'
import { Globe } from 'lucide-react'

// Array of clients for the infinite marquee
const clients = [
  'Google', 'Apple', 'Nike', 'Spotify', 'Stripe', 'Figma', 'Framer', 'Webflow'
]

export function HeroIntroSection() {
  return (
    <section id="home" className="relative flex flex-col justify-center min-h-[85vh] pt-10">
      <motion.div
        variants={heroItem}
        initial="hidden"
        animate="visible"
        className="flex flex-col"
      >
        {/* Author Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-white/5">
            <img 
              src="https://via.placeholder.com/40" 
              alt="Alexander Isak" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[15px] font-medium text-white/95 leading-tight">Alexander Isak</p>
            <p className="text-[13px] text-white/50 leading-tight">UI Designer & No-Code Developer</p>
          </div>
        </div>

        {/* Main Headline */}
        <div className="relative mb-16">
          <h1 className="text-[44px] sm:text-[64px] lg:text-[80px] font-medium leading-[1.1] tracking-tighter text-white">
            I’m building <span className="bg-white/10 text-white px-3 py-1 rounded-[16px]">websites</span> <br className="hidden sm:block" />
            <span className="bg-white/10 text-white px-3 py-1 rounded-[16px]">& brands</span> that people remember
          </h1>

          {/* Scribble & Circular Text */}
          <div className="relative mt-8 sm:mt-[-20px] flex items-center justify-between">
            <div className="w-[180px] sm:w-[280px] md:w-[400px] text-[#00DE51]">
              <svg viewBox="0 0 772 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
                <defs>
                  <linearGradient id="paint0_linear" x1="12" y1="107" x2="752" y2="66" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="currentColor" stopOpacity="0.2"></stop>
                    <stop offset="0.46" stopColor="currentColor"></stop>
                    <stop offset="1" stopColor="currentColor" stopOpacity="0.2"></stop>
                  </linearGradient>
                </defs>
                <path 
                  d="M12 104.315C34.6667 116.269 92.8 137.913 144 128.853C208 117.528 317 33.5324 356 27.8698C395 22.2072 502 20 530 79.1463C557.711 137.682 582 217 477 281.743C423.902 314.483 308 281.433 365 188C422 94.5672 544 65.6205 597 81.6645C650 97.7085 732 88.2708 752 64.6767" 
                  stroke="url(#paint0_linear)" 
                  strokeWidth="30" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>

            {/* Circular Rotating Text (Simplified with CSS) */}
            <div className="hidden sm:flex relative w-[100px] h-[100px] items-center justify-center -translate-y-8">
              <svg viewBox="0 0 100 100" className="animate-spin-slow w-full h-full">
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                <text className="text-[12px] font-medium fill-white/60 uppercase tracking-widest">
                  <textPath href="#circlePath" startOffset="0%">
                    Scroll Down • Scroll Down •
                  </textPath>
                </text>
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#00DE51] rounded-full" />
            </div>
          </div>
        </div>

        {/* Counters */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 mb-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-[48px] sm:text-[64px] font-medium leading-none tracking-tighter text-white">10+</h2>
            <p className="text-[15px] text-white/50">Year of experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[48px] sm:text-[64px] font-medium leading-none tracking-tighter text-white">6x</h2>
            <p className="text-[15px] text-white/50">Industry Awards</p>
          </div>
        </div>

        {/* Clients Marquee */}
        <div className="flex flex-col gap-6 w-full overflow-hidden">
          <p className="flex items-center gap-2 text-[14px] text-white/50 font-medium">
            <Globe className="w-4 h-4" />
            Our clients (2015-25©)
          </p>
          <div className="relative flex overflow-x-hidden border-y border-white/10 py-6 bg-white/5">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
              {/* Duplicate the array twice for smooth infinite scrolling */}
              {[...clients, ...clients, ...clients].map((client, i) => (
                <span key={i} className="text-[24px] font-medium text-white/40 uppercase tracking-widest inline-block">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  )
}
