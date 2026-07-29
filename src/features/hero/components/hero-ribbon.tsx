'use client'

import { motion } from 'framer-motion'
import { heroItem } from '@/lib/design-system/animations'

export function HeroRibbon() {
  return (
    <motion.div
      variants={heroItem}
      className="relative flex items-center justify-center w-full"
    >
      {/* 3D Ribbon SVG provided by user */}
      <div 
        className="w-full max-w-[772px]" 
        style={{ '--len': '1442.421875' } as React.CSSProperties}
        aria-hidden="true"
      >
        <svg 
          className="scribble is-drawn w-full h-auto drop-shadow-2xl" 
          viewBox="0 0 772 320" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="paint0_linear_268_462" x1="12" y1="107" x2="752" y2="66" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#00DE51" stopOpacity="0"></stop>
              <stop className="bred" offset="0.466346" stopColor="#00DE51"></stop>
              <stop offset="1" stopColor="#00DE51" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path 
            id="scribblePath" 
            d="M12 104.315C34.6667 116.269 92.8 137.913 144 128.853C208 117.528 317 33.5324 356 27.8698C395 22.2072 502 20 530 79.1463C557.711 137.682 582 217 477 281.743C423.902 314.483 308 281.433 365 188C422 94.5672 544 65.6205 597 81.6645C650 97.7085 732 88.2708 752 64.6767" 
            stroke="url(#paint0_linear_268_462)" 
            strokeWidth="50" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Award Badge — positioned over the ribbon */}
      <motion.div
        className="absolute right-12 top-1/2 -translate-y-1/2 lg:right-24 z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {/* Added dark green bg to match the image badge */}
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-[#051a0f]/80 backdrop-blur-md shadow-2xl lg:h-32 lg:w-32 border border-white/5">
          {/* Circular text */}
          <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full">
            <defs>
              <path
                id="circlePath"
                d="M 60, 60 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
              />
            </defs>
            <text className="fill-white/90 text-[10.5px] tracking-[0.25em]">
              <textPath href="#circlePath">
                - AWARD WINNING AGENCY - SINCE 2022
              </textPath>
            </text>
          </svg>

          {/* Center icon: Overlapping ellipses mimicking the image */}
          <div className="flex flex-col items-center">
            <svg
              viewBox="0 0 24 24"
              className="h-9 w-9 text-white/80"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
            >
              <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(25 12 12)" />
              <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(-25 12 12)" />
              <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(0 12 12)" />
            </svg>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
