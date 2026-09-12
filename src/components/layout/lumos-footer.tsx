'use client'

import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/config/site'

// Clean SVG social icons
const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const DribbbleIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
  </svg>
)

export function LumosFooter() {
  return (
    <footer id="contact" className="w-full bg-[#F7F7F7] pt-24 pb-16 flex flex-col items-center border-t border-black/[0.06]">
      <div className="w-full max-w-[1080px] mx-auto px-6 sm:px-8 flex flex-col">
        
        {/* Main Footer Row */}
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 pb-16">
          
          {/* Left Side: Avatar + Name + Bio */}
          <div className="flex flex-col sm:flex-row items-start gap-6 max-w-[620px]">
            
            {/* Iconic Rotated Squircle Avatar */}
            <div className="relative w-24 h-24 shrink-0 rounded-[16px] overflow-hidden -rotate-[10deg] shadow-[1px_8px_20px_rgba(0,0,0,0.08)] border border-black/5 bg-white p-1">
              <img
                src="https://framerusercontent.com/images/ZWJPr3tl0ZVysOxSkcrTisFiLH4.png"
                alt="Avatar"
                className="w-full h-full object-cover rounded-[12px]"
              />
            </div>

            {/* Name & Bio */}
            <div className="flex flex-col">
              <h4 className="text-[20px] font-serif text-[#262626] font-normal tracking-tight mb-1">
                I’m {siteConfig.name}
              </h4>
              <p className="text-[13px] font-medium text-[#737373] uppercase tracking-wider mb-4">
                Flutter Developer
              </p>
              <p className="text-[15px] leading-[1.65] text-[#525252] font-normal">
                I’m a Flutter and cross-platform mobile developer bridging clean architecture and native 60fps performance, delivering production apps to App Store and Google Play that reduce churn, increase retention, and accelerate release cycles.
              </p>
            </div>
          </div>

          {/* Right Side: Socials + Email + Contact Action */}
          <div className="flex flex-col items-start lg:items-end justify-between self-stretch shrink-0 gap-6">
            
            {/* Social Icons Row */}
            <div className="flex items-center gap-3">
              {[
                { icon: XIcon, href: siteConfig.social.x, label: 'Twitter' },
                { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: 'LinkedIn' },
                { icon: DribbbleIcon, href: siteConfig.social.dribbble, label: 'Dribbble' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white border border-black/[0.08] text-[#525252] hover:text-[#262626] hover:border-black/20 flex items-center justify-center transition-all shadow-sm hover:scale-105"
                    aria-label={item.label}
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>

            {/* Direct Email Link */}
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="text-[16px] sm:text-[18px] font-serif text-[#262626] hover:text-black transition-colors underline underline-offset-4 decoration-black/20 hover:decoration-black"
            >
              {siteConfig.social.email}
            </a>

            {/* Pill CTA Button */}
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#262626] text-white text-[14px] font-medium hover:bg-black transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-black/[0.08] my-4" />

        {/* Bottom Logo & Copyright Banner */}
        <div className="w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] text-[#737373]">
          
          {/* Brand Wordmark or Lumos signature */}
          <div className="flex items-center gap-2">
            <span className="font-serif text-[18px] tracking-tight text-[#262626]">
              Lumos
            </span>
            <span>•</span>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          {/* Credits */}
          <div className="flex items-center gap-4 text-[13px]">
            <span>Designed with impact</span>
            <span>•</span>
            <a
              href="#"
              className="text-[#262626] hover:underline"
            >
              Back to top ↑
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}
