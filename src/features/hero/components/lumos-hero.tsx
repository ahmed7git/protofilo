'use client'

import { motion } from 'framer-motion'
import { IntegrationCarousel } from './integration-carousel'

// Apple App Store SVG icon from official Framer component (https://framer.com/m/Apple-Ql6k.js)
const AppStoreIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-[#171717]">
    <path d="M 18.914 8.181 C 18.774 8.291 16.316 9.675 16.316 12.754 C 16.316 16.316 19.443 17.576 19.536 17.607 C 19.521 17.685 19.038 19.334 17.887 21.014 C 16.861 22.491 15.787 23.969 14.154 23.969 C 12.521 23.969 12.101 23.02 10.219 23.02 C 8.384 23.02 7.73 24 6.237 24 C 4.744 24 3.702 22.631 2.504 20.951 C 1.12 18.976 0 15.911 0 13.003 C 0 8.337 3.033 5.863 6.02 5.863 C 7.606 5.863 8.928 6.906 9.923 6.906 C 10.873 6.906 12.35 5.802 14.154 5.802 C 14.839 5.802 17.296 5.864 18.914 8.182 Z M 13.298 3.826 C 14.044 2.94 14.573 1.711 14.573 0.482 C 14.575 0.32 14.56 0.159 14.528 0 C 13.314 0.047 11.868 0.809 10.997 1.82 C 10.312 2.598 9.675 3.826 9.675 5.07 C 9.675 5.257 9.705 5.444 9.721 5.506 C 9.799 5.522 9.924 5.537 10.048 5.537 C 11.137 5.537 12.506 4.807 13.298 3.827 Z" transform="translate(1.2, 0) scale(0.9)"/>
  </svg>
)

// Google Play Store SVG icon (Official 4-color)
const GooglePlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.21 2.21 0 0 1-.61-1.57V3.383c0-.6.225-1.168.609-1.569z" fill="#00D3FF"/>
    <path d="M17.18 8.613L13.792 12l3.388 3.387 3.825-2.185a1.44 1.44 0 0 0 0-2.404l-3.825-2.185z" fill="#FFCE00"/>
    <path d="M3.609 1.814L13.792 12 17.18 8.613 6.012 2.231A2.766 2.766 0 0 0 3.61 1.814z" fill="#00F076"/>
    <path d="M13.792 12L3.61 22.186c.72.08 1.487-.07 2.402-.593l11.168-6.38L13.792 12z" fill="#FF3A44"/>
  </svg>
)

export function LumosHero() {
  return (
    <section className="relative w-full min-h-[640px] lg:min-h-[760px] flex items-center justify-center overflow-hidden bg-[#F7F7F7] pt-24 lg:pt-12 pb-16 lg:pb-12">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-gradient-to-br from-black/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-6">
        
        {/* Left Column: Editorial Headline & Bio */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col items-start w-full"
        >
          {/* Dual Store Overlapping Cards (App Store & Google Play) */}
          <div className="flex items-center mb-8 pl-1">
            {/* Card 1: Apple App Store */}
            <div
              className="relative z-10 w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-[14px] sm:rounded-[16px] bg-white border border-black/[0.06] shadow-[0_8px_22px_rgba(0,0,0,0.07)] flex items-center justify-center -rotate-[8deg] hover:-rotate-[4deg] hover:scale-105 transition-all duration-300"
              title="Apple App Store"
            >
              <AppStoreIcon />
            </div>

            {/* Card 2: Google Play Store */}
            <div
              className="relative z-20 -ml-2.5 w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-[14px] sm:rounded-[16px] bg-white border border-black/[0.06] shadow-[0_8px_22px_rgba(0,0,0,0.07)] flex items-center justify-center rotate-[7deg] hover:rotate-[3deg] hover:scale-105 transition-all duration-300"
              title="Google Play Store"
            >
              <GooglePlayIcon />
            </div>
          </div>

          {/* Editorial Headline */}
          <h1
            style={{ fontSize: 'clamp(44px, 5.5vw, 76px)', lineHeight: 1.04 }}
            className="tracking-[-0.035em] font-serif text-[#262626] font-normal mb-6"
          >
            Flutter <span className="font-serif-italic">Developer</span>
          </h1>

          {/* Subtitle - exactly 2 lines matching the screenshot */}
          <p className="text-[17px] sm:text-[19px] leading-[1.6] text-[#525252] font-normal mb-8">
            Every app I ship ties back to a business goal
            <br />
            and a user need. Scroll down to see the numbers.
          </p>

          {/* Ecosystem integration note */}
          <div className="flex items-center gap-3 text-[13px] text-[#737373]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Interactive Flutter & mobile ecosystem orbit</span>
          </div>
        </motion.div>

        {/* Right Column: Interactive Orbital Integration Carousel around the Large Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="lg:col-span-6 relative w-full flex items-center justify-center overflow-visible"
        >
          <IntegrationCarousel
            centerImageSrc="/hero-person.png"
          />
        </motion.div>

      </div>

      {/* Subtle bottom blur overlay to smoothly transition to next section */}
      <div className="absolute left-0 right-0 -bottom-10 h-32 bg-gradient-to-t from-[#F7F7F7] via-[#F7F7F7]/80 to-transparent pointer-events-none z-10" />
    </section>
  )
}

