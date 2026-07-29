'use client'

import { ArrowUp } from 'lucide-react'

export function Footer() {
  return (
    <footer id="footer" className="relative flex flex-col pt-32 pb-16">
      <div className="flex flex-col gap-16">
        {/* Quote */}
        <div className="flex flex-col gap-4">
          <h5 className="text-[28px] sm:text-[36px] font-medium leading-tight text-white/95 max-w-[800px]">
            <span className="text-white/40">“</span>
            Design is not just what it looks like and feels like. Design is how it works.
            <span className="text-white/40">“</span>
          </h5>
          <p className="text-[18px] font-medium text-white/50 text-right max-w-[800px]">
            Steve Jobs
          </p>
        </div>

        <div className="h-px w-full bg-white/10" />

        {/* Footer Bottom */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          {/* Huge Logo (ISAK SVG approximation) */}
          <div className="text-[100px] sm:text-[140px] md:text-[180px] font-bold leading-none tracking-tighter text-white opacity-90 select-none">
            ISAK
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 lg:gap-16">
            <div className="flex gap-6">
              <a href="#" className="text-[14px] font-medium text-white/60 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-[14px] font-medium text-white/60 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-[14px] font-medium text-white/60 hover:text-white transition-colors">Dribbble</a>
            </div>

            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#1c1c1c] text-white transition-colors hover:bg-white hover:text-black"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
