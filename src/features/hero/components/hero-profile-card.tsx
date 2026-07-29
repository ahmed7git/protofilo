'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'

// Placeholder for social SVGs
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const ThreadsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.8" d="M10.3731 18.7044C8.89687 18.9969 7.52625 17.8419 7.53625 16.3125L7.57875 9.94875C7.58625 8.79687 8.39187 7.81062 9.50375 7.59L15.6481 6.37187C17.1244 6.07937 18.495 7.23437 18.485 8.76375L18.4425 15.1275C18.435 16.2794 17.6294 17.2662 16.5175 17.4862L10.3731 18.7044Z" fill="currentColor"/>
    <path opacity="0.5" d="M7.3625 16.1675C5.88625 16.46 4.51563 15.305 4.52563 13.7756V13.7744L4.56813 7.41062C4.575 6.25999 5.38125 5.27312 6.49313 5.05249L12.6375 3.83499C14.1138 3.54249 15.4844 4.69749 15.4744 6.22687L15.4319 12.5906C15.4244 13.7419 14.6188 14.7287 13.5069 14.9494L7.3625 16.1675Z" fill="currentColor"/>
    <path opacity="0.2" d="M4.35127 13.6281C2.87502 13.9206 1.50502 12.7656 1.51502 11.2356L1.55752 4.87313C1.56502 3.72125 2.37065 2.73375 3.48252 2.51375L9.6269 1.29563C11.1031 1.00313 12.4738 2.15813 12.4638 3.6875L12.4213 10.0513C12.4131 11.2025 11.6075 12.1894 10.4956 12.41L4.35127 13.6281Z" fill="currentColor"/>
  </svg>
)

export function HeroProfileCard() {
  return (
    <div className="w-full max-w-[468px] mx-auto lg:mx-0 sticky top-12 z-20 h-fit rounded-[32px] bg-[#141414] border border-white/5 overflow-hidden flex flex-col items-center">
      
      {/* Image Area */}
      <div className="relative w-full aspect-[468/500] bg-black/20 overflow-hidden">
        {/* Placeholder image for Avatar */}
        <img 
          src="https://via.placeholder.com/468x500" 
          alt="Avatar" 
          className="w-full h-full object-cover"
        />
        
        {/* "Available for Work" badge (left absolute) */}
        <div className="absolute top-8 left-0 hidden sm:flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2 rounded-r-xl border-y border-r border-white/10">
          <span className="w-2 h-2 rounded-full bg-[#00DE51]" />
          <span className="text-white/70 text-[13px] font-medium rotate-180" style={{ writingMode: 'vertical-rl' }}>
            Available for Work
          </span>
        </div>
      </div>

      {/* Social Links & Info Area */}
      <div className="w-full px-8 pt-6 pb-10 flex flex-col relative z-10 -mt-12 bg-[#141414] rounded-t-[32px]">
        
        {/* Social Icons (Floating above the cut) */}
        <div className="flex justify-center gap-4 mb-8 -mt-12">
          <a href="#" className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
            <TwitterIcon />
          </a>
          <a href="#" className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
            <LinkedinIcon />
          </a>
          <a href="#" className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
            <ThreadsIcon />
          </a>
        </div>

        {/* Text Details */}
        <div className="text-center flex flex-col items-center">
          <p className="flex sm:hidden items-center justify-center gap-2 text-[13px] text-white/70 font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00DE51]" />
            Available for Work
          </p>
          
          <h5 className="text-[28px] sm:text-[32px] font-medium text-white mb-4 tracking-tighter">
            Hey, I’m Isak
          </h5>
          
          <p className="text-[15px] text-white/50 leading-relaxed mb-8 max-w-[300px]">
            I help startups grow with smart design and no-code development, based in Cupertino, CA.
          </p>
          
          <div className="w-full h-[1px] bg-white/10 mb-8" />
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a 
              href="#contact" 
              className="flex-1 w-full sm:w-auto h-14 rounded-full bg-[#00DE51] hover:bg-[#00c548] text-black flex items-center justify-center gap-2 font-medium transition-colors"
            >
              <ArrowUpRight className="w-5 h-5" />
              Let’s talk
              <ArrowUpRight className="w-5 h-5" />
            </a>
            
            <a 
              href="#" 
              className="flex-1 w-full sm:w-auto h-14 rounded-full border border-white/20 hover:bg-white/10 text-white flex items-center justify-center gap-2 font-medium transition-colors"
            >
              <Download className="w-5 h-5 text-white/70" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
