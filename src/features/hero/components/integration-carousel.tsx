'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── 1. Figma Icon (Official) ─────────────────────────────────────────
const FigmaIcon = () => (
  <svg width="22" height="22" viewBox="0 0 38 57" fill="none" className="shrink-0">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
  </svg>
);

// ─── 2. Supabase Icon (Official) ──────────────────────────────────────
const SupabaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 109 113" fill="none" className="shrink-0">
    <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-grad-1)"/>
    <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-grad-2)" fillOpacity="0.2"/>
    <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.04075L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"/>
    <defs>
      <linearGradient id="supabase-grad-1" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
        <stop stopColor="#249361"/>
        <stop offset="1" stopColor="#3ECF8E"/>
      </linearGradient>
      <linearGradient id="supabase-grad-2" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

// ─── 3. Firebase Icon (Official) ──────────────────────────────────────
const FirebaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="none" className="shrink-0">
    <path d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z" fill="#FFA000"/>
    <path d="M13.445 8.543l2.972 5.995-11.97 11.135z" fill="#F57F17"/>
    <path d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z" fill="#FFCA28"/>
    <path d="M13.445 8.543L4.447 25.673 8.368 5.26c.148-.78.738-.983 1.317-.44z" fill="#FFA000"/>
  </svg>
);

// ─── 4. Flutter Icon (Official) ───────────────────────────────────────
const FlutterIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path d="M14.314 0L2.3 12.014l3.695 3.695L21.704 0h-7.39z" fill="#54C5F8"/>
    <path d="M14.286 10.37L7.967 16.69l3.695 3.695 1.374-1.374 4.944-4.945-3.694-3.696z" fill="#54C5F8"/>
    <path d="M7.967 16.69l3.695 3.695-1.374 1.375L6.593 18.065z" fill="#01579B"/>
    <path d="M11.662 20.385l3.696 3.615h6.79l-7.112-7.089z" fill="#29B6F6"/>
    <path d="M15.358 24l-3.696-3.615 1.374-1.474L19.344 24h-3.986z" fill="#01579B" opacity="0.8"/>
  </svg>
);

// ─── 5. Google Maps Icon (Official Pin) ───────────────────────────────
const GoogleMapsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 48 48" fill="none" className="shrink-0">
    <path fill="#4285F4" d="M24 4C14.06 4 6 12.06 6 22c0 8.04 10.5 21.03 16.5 21.84.82.11 1.66.11 2.48 0C31.5 43.03 42 30.04 42 22c0-9.94-8.06-18-18-18z"/>
    <path fill="#EA4335" d="M24 4C17.7 4 12.18 7.24 9 12.16l8.8 8.84c1.4-1.2 3.22-1.92 5.2-1.92 4.42 0 8 3.58 8 8 0 1.98-.72 3.8-1.92 5.2l8.84 8.8c4.92-3.18 8.16-8.7 8.16-15 0-9.94-8.06-18-18-18z"/>
    <path fill="#FBBC05" d="M9 12.16A17.9 17.9 0 0 0 6 22c0 8.04 10.5 21.03 16.5 21.84.34.05.68.08 1.02.1l-5.72-13.88c-.5.04-1.2.04-1.8.04-4.42 0-8-3.58-8-8 0-.6.04-1.3.04-1.8L9 12.16z"/>
    <path fill="#34A853" d="M23.52 43.94c.34-.02.68-.05 1.02-.1 6-0.81 16.5-13.8 16.5-21.84 0-3.66-1.1-7.07-3-9.92L29.2 20.88c.52 1.02.8 2.18.8 3.42 0 4.42-3.58 8-8 8-1.24 0-2.4-.28-3.42-.8l4.94 12.44z"/>
    <circle cx="24" cy="22" r="6" fill="#FFFFFF"/>
  </svg>
);

// ─── 6. Google Cloud Icon (Official) ──────────────────────────────────
const GoogleCloudIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/>
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.44-4 1.19l3.4 3.4 4.6 1.45h3.35z" fill="#EA4335"/>
    <path d="M8 5.19C6.85 5.94 5.91 7.02 5.35 8.04l3.1 3.1 2.95-2.95-3.4-3z" fill="#FBBC05"/>
    <path d="M5.35 8.04C2.34 8.36 0 10.91 0 14c0 1.95.94 3.68 2.4 4.77l3.6-3.6-.65-7.13z" fill="#34A853"/>
  </svg>
);

// ─── 7. iOS / Apple Icon (Exact from framer.com/m/Apple-Ql6k.js) ───────
const IosAppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-[#171717]">
    <path d="M 18.914 8.181 C 18.774 8.291 16.316 9.675 16.316 12.754 C 16.316 16.316 19.443 17.576 19.536 17.607 C 19.521 17.685 19.038 19.334 17.887 21.014 C 16.861 22.491 15.787 23.969 14.154 23.969 C 12.521 23.969 12.101 23.02 10.219 23.02 C 8.384 23.02 7.73 24 6.237 24 C 4.744 24 3.702 22.631 2.504 20.951 C 1.12 18.976 0 15.911 0 13.003 C 0 8.337 3.033 5.863 6.02 5.863 C 7.606 5.863 8.928 6.906 9.923 6.906 C 10.873 6.906 12.35 5.802 14.154 5.802 C 14.839 5.802 17.296 5.864 18.914 8.182 Z M 13.298 3.826 C 14.044 2.94 14.573 1.711 14.573 0.482 C 14.575 0.32 14.56 0.159 14.528 0 C 13.314 0.047 11.868 0.809 10.997 1.82 C 10.312 2.598 9.675 3.826 9.675 5.07 C 9.675 5.257 9.705 5.444 9.721 5.506 C 9.799 5.522 9.924 5.537 10.048 5.537 C 11.137 5.537 12.506 4.807 13.298 3.827 Z" transform="translate(1.2, 0) scale(0.9)"/>
  </svg>
);

// ─── 8. Android Icon (Official) ───────────────────────────────────────
const AndroidIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#3DDC84" className="shrink-0">
    <g transform="rotate(180 12 12)">
      <path d="M17.523 15.341l1.801 3.12a.5.5 0 1 1-.866.5l-1.836-3.181a9.294 9.294 0 0 1-9.244 0l-1.836 3.181a.5.5 0 1 1-.866-.5l1.801-3.12C3.896 13.568 2.5 10.74 2.5 7.5h19c0 3.24-1.396 6.068-3.977 7.841zM7 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
      <path d="M5.5 5.5L3.7 2.4a.5.5 0 1 1 .866-.5l1.9 3.3a9.42 9.42 0 0 1 11.068 0l1.9-3.3a.5.5 0 1 1 .866.5L18.5 5.5A9.453 9.453 0 0 0 12 3a9.453 9.453 0 0 0-6.5 2.5z"/>
    </g>
  </svg>
);

// ─── 9. Cloud Computing Icon ──────────────────────────────────────────
const CloudIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="url(#cloud-gradient-hero)"/>
    <defs>
      <linearGradient id="cloud-gradient-hero" x1="0" y1="4" x2="24" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7"/>
        <stop offset="1" stopColor="#38BDF8"/>
      </linearGradient>
    </defs>
  </svg>
);

// ─── 10. Stripe Icon (Official) ───────────────────────────────────────
const StripeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
    <rect width="24" height="24" rx="5" fill="#635BFF"/>
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C17.652.876 15.354.5 12.52.5 6.643.5 2.7 3.593 2.7 8.783c0 6.657 8.75 5.922 8.75 9.07 0 1.05-.89 1.472-2.172 1.472-2.583 0-5.46-1.164-7.243-2.146l-.916 5.61C3.12 23.82 5.86 24.5 9.18 24.5c6.16 0 10.32-3.084 10.32-8.406 0-7.075-8.814-6.34-8.814-9.35 0-.84.667-1.328 1.83-1.328 1.77 0 3.75.61 5.06 1.34l.4-5.106z" fill="white" transform="translate(1.8, 0.4) scale(0.84)"/>
  </svg>
);

export interface IntegrationTool {
  id: string
  name: string
  category: string
  color: string
  glowColor: string
  bgGlow: string
  icon: () => React.JSX.Element
}

// ─── The 10 User-Requested Integrations ─────────────────────────────────
export const INTEGRATIONS: IntegrationTool[] = [
  {
    id: 'figma',
    name: 'Figma',
    category: 'Design Systems & UI',
    color: '#F24E1E',
    glowColor: 'rgba(242, 78, 30, 0.45)',
    bgGlow: 'radial-gradient(circle, rgba(242, 78, 30, 0.22) 0%, rgba(162, 89, 255, 0.1) 45%, transparent 70%)',
    icon: FigmaIcon,
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'Realtime Backend & DB',
    color: '#3ECF8E',
    glowColor: 'rgba(62, 207, 142, 0.45)',
    bgGlow: 'radial-gradient(circle, rgba(62, 207, 142, 0.24) 0%, rgba(16, 185, 129, 0.1) 45%, transparent 70%)',
    icon: SupabaseIcon,
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'Cloud Services & Auth',
    color: '#FFA000',
    glowColor: 'rgba(255, 160, 0, 0.45)',
    bgGlow: 'radial-gradient(circle, rgba(255, 160, 0, 0.24) 0%, rgba(245, 124, 0, 0.1) 45%, transparent 70%)',
    icon: FirebaseIcon,
  },
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'Cross-Platform Mobile',
    color: '#02569B',
    glowColor: 'rgba(2, 86, 155, 0.45)',
    bgGlow: 'radial-gradient(circle, rgba(84, 197, 248, 0.25) 0%, rgba(2, 86, 155, 0.12) 45%, transparent 70%)',
    icon: FlutterIcon,
  },
  {
    id: 'google-map',
    name: 'Google Maps',
    category: 'Geo APIs & Navigation',
    color: '#EA4335',
    glowColor: 'rgba(234, 67, 53, 0.45)',
    bgGlow: 'radial-gradient(circle, rgba(234, 67, 53, 0.24) 0%, rgba(52, 168, 83, 0.1) 45%, transparent 70%)',
    icon: GoogleMapsIcon,
  },
  {
    id: 'google-cloud',
    name: 'Google Cloud',
    category: 'Enterprise Infrastructure',
    color: '#4285F4',
    glowColor: 'rgba(66, 133, 244, 0.45)',
    bgGlow: 'radial-gradient(circle, rgba(66, 133, 244, 0.24) 0%, rgba(234, 67, 53, 0.1) 45%, transparent 70%)',
    icon: GoogleCloudIcon,
  },
  {
    id: 'ios',
    name: 'iOS',
    category: 'Apple Ecosystem',
    color: '#171717',
    glowColor: 'rgba(0, 0, 0, 0.35)',
    bgGlow: 'radial-gradient(circle, rgba(50, 50, 50, 0.16) 0%, rgba(120, 120, 120, 0.08) 45%, transparent 70%)',
    icon: IosAppleIcon,
  },
  {
    id: 'android',
    name: 'Android',
    category: 'Mobile Platform & SDK',
    color: '#3DDC84',
    glowColor: 'rgba(61, 220, 132, 0.45)',
    bgGlow: 'radial-gradient(circle, rgba(61, 220, 132, 0.24) 0%, rgba(46, 175, 102, 0.1) 45%, transparent 70%)',
    icon: AndroidIcon,
  },
  {
    id: 'cloud',
    name: 'Cloud Services',
    category: 'Scalable Systems',
    color: '#0284C7',
    glowColor: 'rgba(2, 132, 199, 0.45)',
    bgGlow: 'radial-gradient(circle, rgba(2, 132, 199, 0.24) 0%, rgba(56, 189, 248, 0.1) 45%, transparent 70%)',
    icon: CloudIcon,
  },
  {
    id: 'stripe',
    name: 'Stripe',
    category: 'Payments & Subscriptions',
    color: '#635BFF',
    glowColor: 'rgba(99, 91, 255, 0.45)',
    bgGlow: 'radial-gradient(circle, rgba(99, 91, 255, 0.24) 0%, rgba(124, 58, 237, 0.1) 45%, transparent 70%)',
    icon: StripeIcon,
  },
]

interface IntegrationCarouselProps {
  centerImageSrc?: string
  className?: string
}

export function IntegrationCarousel({
  centerImageSrc = '/hero-person.png',
  className = '',
}: IntegrationCarouselProps) {
  const [step, setStep] = useState(0)
  const [isDocked, setIsDocked] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const numTools = INTEGRATIONS.length
  // Reverse rotation direction (clockwise from top to bottom through the docking field)
  const activeIndex = ((-step % numTools) + numTools) % numTools
  const activeTool = INTEGRATIONS[activeIndex]
  const radius = 225
  const orbitRotation = step * (360 / numTools)

  // Synchronized cycle: Dwell inside circular field with light ON, then rotate with light OFF
  useEffect(() => {
    if (isHovered) return

    const DWELL_MS = 2600       // Light is ON while icon is inside the circular field
    const TRANSITION_MS = 850   // Light is OFF during rotation to next icon

    let timer: NodeJS.Timeout

    if (isDocked) {
      timer = setTimeout(() => {
        setIsDocked(false)
        setStep((prev) => prev + 1)
      }, DWELL_MS)
    } else {
      timer = setTimeout(() => {
        setIsDocked(true)
      }, TRANSITION_MS)
    }

    return () => clearTimeout(timer)
  }, [isDocked, isHovered, step])

  // Select tool on click: rotate directly in reverse to the circular docking field at 0 degrees
  const handleSelectTool = (targetIdx: number) => {
    if (targetIdx === activeIndex && isDocked) return

    let diff = activeIndex - targetIdx
    if (diff > numTools / 2) diff -= numTools
    if (diff < -numTools / 2) diff += numTools

    setIsDocked(false)
    setStep((prev) => prev + diff)
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-[380px] sm:w-[500px] lg:w-[560px] aspect-square flex items-center justify-center select-none mx-auto ${className}`}
    >
      {/* 1. Dynamic AI Brand Light (Ambient radial glow behind silhouette - ON only when icon is docked) */}
      <div
        style={{
          background: activeTool.bgGlow,
          opacity: isDocked ? 0.85 : 0,
          transform: isDocked ? 'scale(1)' : 'scale(0.88)',
        }}
        className="absolute w-[360px] sm:w-[440px] lg:w-[480px] h-[360px] sm:h-[440px] lg:h-[480px] rounded-full filter blur-3xl pointer-events-none transition-all duration-700 ease-out z-0"
      />

      {/* 2. SVG Orbital Guide Rings */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
        viewBox="0 0 560 560"
        fill="none"
      >
        {/* Main Orbit Ring */}
        <circle
          cx="280"
          cy="280"
          r={radius}
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />

        {/* Inner Secondary Ring */}
        <circle
          cx="280"
          cy="280"
          r={radius * 0.75}
          stroke="rgba(0,0,0,0.04)"
          strokeWidth="1"
        />

        {/* Outer Halo */}
        <circle
          cx="280"
          cy="280"
          r={radius * 1.18}
          stroke="rgba(0,0,0,0.025)"
          strokeWidth="1"
          strokeDasharray="2 10"
        />
      </svg>

      {/* 3. Docking Capsule at 3 o'clock (0 degrees) */}
      <div
        style={{
          left: 'calc(50% - 15px)',
          width: `${radius + 45}px`,
          height: '70px',
        }}
        className="absolute top-1/2 -translate-y-1/2 rounded-full border border-black/[0.06] bg-transparent backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] pointer-events-none z-[5] flex items-center justify-end pr-2 transition-all duration-500"
      >
        {/* Connector light beam - lights up ONLY when icon is docked */}
        <div
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${activeTool.glowColor} 60%, ${activeTool.color} 100%)`,
            opacity: isDocked ? 0.75 : 0,
          }}
          className="absolute inset-x-8 h-[2px] top-1/2 -translate-y-1/2 transition-opacity duration-500"
        />

        {/* Circular Target Field (الحقل الدائري) - lights up and pulses ONLY when icon arrives inside */}
        <div
          style={{
            borderColor: isDocked ? activeTool.color : 'rgba(0,0,0,0.12)',
            boxShadow: isDocked
              ? `0 0 22px ${activeTool.glowColor}, inset 0 0 14px ${activeTool.color}25`
              : 'none',
            backgroundColor: isDocked ? `${activeTool.color}0a` : 'transparent',
          }}
          className={`w-[54px] h-[54px] rounded-full border-2 border-dashed transition-all duration-500 flex items-center justify-center ${
            isDocked ? 'opacity-100 animate-[spin_12s_linear_infinite]' : 'opacity-40'
          }`}
        />
      </div>

      {/* 4. Center Focal Hub — Person Silhouette with Circular Bottom Cut & Scaled Frame */}
      <div className="relative z-[15] w-[300px] sm:w-[360px] lg:w-[390px] aspect-square rounded-full flex items-center justify-center pointer-events-none">
        {/* Dynamic Glow Accent Ring - glows in active tool color when docked */}
        <div
          style={{
            borderColor: isDocked ? `${activeTool.color}55` : 'rgba(0,0,0,0.08)',
            boxShadow: isDocked
              ? `0 0 0 1.5px ${activeTool.color}22, 0 0 30px ${activeTool.glowColor}`
              : 'none',
          }}
          className="absolute inset-0 rounded-full border pointer-events-none transition-all duration-500 z-20"
        />

        {/* Circular Mask: perfectly cuts the bottom of the silhouette in a circular arc */}
        <div className="w-full h-full rounded-full overflow-hidden relative flex items-end justify-center z-10">
          <img
            src={centerImageSrc}
            alt="Hero Person Visual"
            className="h-[92%] sm:h-[93%] w-auto object-contain object-bottom filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-transform duration-500 select-none pointer-events-none"
          />
        </div>
      </div>

      {/* 5. Synchronized Orbital Carousel Ring */}
      <motion.div
        animate={{ rotate: orbitRotation }}
        transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0 z-[20] flex items-center justify-center pointer-events-none"
      >
        {INTEGRATIONS.map((tool, idx) => {
          const angleDeg = (idx * 360) / numTools
          const isThisToolDocked = isDocked && activeIndex === idx

          return (
            <div
              key={tool.id}
              style={{
                transform: `rotate(${angleDeg}deg) translateX(${radius}px)`,
              }}
              className="absolute flex items-center justify-center"
            >
              {/* Counter-rotation to keep the icon 100% upright */}
              <motion.div
                animate={{ rotate: -(orbitRotation + angleDeg) }}
                transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex items-center justify-center pointer-events-auto"
              >
                <div
                  onClick={() => handleSelectTool(idx)}
                  onMouseEnter={() => handleSelectTool(idx)}
                  style={{
                    boxShadow: isThisToolDocked
                      ? `0 0 22px ${tool.glowColor}, 0 4px 16px rgba(0,0,0,0.08)`
                      : '0 4px 14px rgba(0,0,0,0.05)',
                    borderColor: isThisToolDocked ? tool.color : 'rgba(0,0,0,0.08)',
                  }}
                  className={`w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md border flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-125 ${
                    isThisToolDocked
                      ? 'scale-125 ring-2 ring-offset-2 ring-black/5'
                      : 'scale-100 opacity-90'
                  }`}
                  title={`${tool.name} - ${tool.category}`}
                >
                  <tool.icon />
                </div>
              </motion.div>
            </div>
          )
        })}
      </motion.div>

      {/* 6. Active Tool Pill Tooltip / Indicator (Shows when icon is docked in the circular field) */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-[25] pointer-events-auto">
        <AnimatePresence mode="wait">
          {isDocked && (
            <motion.div
              key={activeTool.id}
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.06)] whitespace-nowrap"
            >
              <span
                style={{
                  backgroundColor: activeTool.color,
                  boxShadow: `0 0 10px ${activeTool.glowColor}`,
                }}
                className="w-2 h-2 rounded-full shrink-0 animate-pulse"
              />
              <span className="text-[13px] font-semibold text-[#262626]">
                {activeTool.name}
              </span>
              <span className="text-black/20 text-[12px]">•</span>
              <span className="text-[12px] text-[#737373] font-medium hidden sm:inline">
                {activeTool.category}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
