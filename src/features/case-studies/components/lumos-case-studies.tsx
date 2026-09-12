'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import {
  ArrowUpRight,
  Target,
  TrendingUp,
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  Smartphone,
} from 'lucide-react'
import { motion, AnimatePresence, PanInfo, useMotionValue, useSpring } from 'framer-motion'

export interface ProjectItem {
  id: string
  title: string
  subtitle: string
  category: string
  tag: string
  duration: string
  role: string
  metric: string
  metricLabel: string
  summary: string
  image: string
  techStack: string[]
  businessGoal: string
  problem: string
  research: string[]
  solution: string[]
  growth: string
  stores?: { appStore?: string; playStore?: string }
}

export const projectsData: ProjectItem[] = [
  {
    id: 'qasim-splash',
    title: 'قاسم',
    subtitle: 'Restaurant Management System',
    category: 'Food & Restaurant Tech',
    tag: 'Flutter App',
    duration: '14 weeks',
    role: 'Lead Flutter Developer',
    metric: '5 Modules',
    metricLabel: 'Integrated Systems',
    summary:
      'A full-stack restaurant management platform with real-time analytics, order tracking, and customer-facing delivery app — all built in Flutter.',
    image: '/projects/qasim-splash.jpg',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'REST API', 'Clean Architecture'],
    businessGoal:
      'Unify the fragmented restaurant operations — orders, catalog, analytics, and customer experience — into a single cohesive mobile platform.',
    problem:
      'The restaurant struggled with manual order management, no real-time sales insights, and a disconnected customer ordering experience.',
    research: [
      'Shadowed restaurant staff through full-day operations to identify workflow friction.',
      'Analyzed competitor POS systems and delivery apps for UX benchmark gaps.',
      'Conducted customer interviews to understand ordering friction points.',
    ],
    solution: [
      'Built a modular Flutter architecture separating Admin, Staff, and Customer app surfaces.',
      'Implemented real-time Firebase sync for live order status across all devices.',
      'Designed an Arabic-first RTL UI with rich animations and branded identity.',
    ],
    growth:
      'Reduced order processing time by 60% and increased repeat customer visits by 38% within 30 days of launch.',
    stores: { appStore: 'https://apps.apple.com', playStore: 'https://play.google.com' },
  },
  {
    id: 'qasim-dashboard',
    title: 'Admin Dashboard',
    subtitle: 'Real-Time Analytics & KPIs',
    category: 'Restaurant Management',
    tag: 'Analytics',
    duration: '14 weeks',
    role: 'Lead Flutter Developer',
    metric: '336.6 ﷼',
    metricLabel: 'Avg Daily Revenue',
    summary:
      'Live business intelligence dashboard with revenue cards, sales trend charts, and multi-period filtering for data-driven restaurant decisions.',
    image: '/projects/qasim-dashboard.jpg',
    techStack: ['Flutter', 'FL Chart', 'Firebase', 'Bloc', 'Hive', 'WebSockets'],
    businessGoal:
      'Give restaurant owners real-time visibility into sales, orders, and inventory with zero delay.',
    problem:
      'Owners had no visibility into daily performance metrics, relying on end-of-day manual summaries that were always outdated.',
    research: [
      'Mapped owner decision-making cycles to identify the most critical KPIs.',
      'Benchmarked chart performance under heavy Firebase write loads.',
      'User-tested 3 dashboard layout variants with restaurant owners.',
    ],
    solution: [
      'Custom FL Chart painters with animated bezier sales trend lines.',
      'Platinum business card UI with live balance and growth percentage indicators.',
      'Period selector (Day / Week / Month / Year) with instant chart re-render.',
    ],
    growth:
      'Owners reported a 45% reduction in the time spent understanding business performance per week.',
    stores: { appStore: 'https://apps.apple.com', playStore: 'https://play.google.com' },
  },
  {
    id: 'qasim-catalog',
    title: 'Catalog Manager',
    subtitle: 'Dynamic Menu & Promotions CMS',
    category: 'Restaurant Management',
    tag: 'CMS',
    duration: '14 weeks',
    role: 'Lead Flutter Developer',
    metric: '+10%',
    metricLabel: 'Cashback Conversion',
    summary:
      'A full in-app content management system letting admins create banners, manage product sliders, and launch promotions — live in real time.',
    image: '/projects/qasim-catalog.jpg',
    techStack: ['Flutter', 'Firebase Storage', 'Riverpod', 'ImagePicker', 'Dio', 'REST API'],
    businessGoal:
      'Empower non-technical restaurant staff to update menus, launch deals, and manage visual content without developer involvement.',
    problem:
      'Menu updates required developer intervention and took 24–48 hours to reflect in the customer-facing app, causing lost promotional windows.',
    research: [
      'Content flow analysis mapping the full lifecycle from promotion creation to customer visibility.',
      'Load-tested image upload pipeline under slow 3G mobile connections.',
      'Validated drag-and-drop reordering with staff of varying tech comfort levels.',
    ],
    solution: [
      'Live banner preview showing exactly how customers will see the promotion before publishing.',
      'Instant Firebase push ensuring catalog changes appear in the customer app within 2 seconds.',
      'Swipe-to-delete with confirmation for safe content management.',
    ],
    growth:
      'Catalog update frequency increased by 4× and promotional campaigns launched 3× faster than before.',
    stores: { appStore: 'https://apps.apple.com', playStore: 'https://play.google.com' },
  },
  {
    id: 'qasim-client1',
    title: 'Customer App',
    subtitle: 'Personalized Food Discovery',
    category: 'Customer Experience',
    tag: 'Consumer',
    duration: '14 weeks',
    role: 'Lead Flutter Developer',
    metric: '4.9 ★',
    metricLabel: 'Customer Rating',
    summary:
      'Arabic-first customer ordering app with AI-powered meal recommendations, category filters, and a seamless one-tap checkout with loyalty rewards.',
    image: '/projects/qasim-client1.jpg',
    techStack: ['Flutter', 'Firebase', 'Google Maps', 'Riverpod', 'Stripe SDK', 'Hive'],
    businessGoal:
      'Create a frictionless, delightful customer ordering experience that increases average basket size and repeat orders.',
    problem:
      'Customers abandoned orders due to confusing navigation, lack of personalization, and a slow multi-step checkout process.',
    research: [
      'Session recordings of 50+ customer ordering flows to identify drop-off screens.',
      'A/B tested category pill filters vs. full-page categories for discoverability.',
      'Surveyed customers on the top reasons for not reordering within 7 days.',
    ],
    solution: [
      'AI-driven meal recommendation engine using order history and time-of-day signals.',
      'One-tap reorder from order history with pre-filled cart and saved address.',
      'RTL Arabic typography with rich food photography for appetite-triggering visuals.',
    ],
    growth:
      'Average basket size increased by 22% and 7-day repeat order rate improved by 38% post-launch.',
    stores: { appStore: 'https://apps.apple.com', playStore: 'https://play.google.com' },
  },
  {
    id: 'qasim-client2',
    title: 'Promotions Engine',
    subtitle: 'Live Offers & Cashback Deals',
    category: 'Customer Experience',
    tag: 'Promotions',
    duration: '14 weeks',
    role: 'Lead Flutter Developer',
    metric: '3× ROI',
    metricLabel: 'Campaign Return',
    summary:
      'Dynamic hero banner system with animated promotional carousels, cashback mechanics, and real-time deal publishing directly from the admin panel.',
    image: '/projects/qasim-client2.jpg',
    techStack: ['Flutter', 'Firebase', 'Lottie', 'Riverpod', 'Custom Painters', 'Push Notifications'],
    businessGoal:
      'Drive impulse purchases and increase average order value through visually compelling, time-sensitive promotions.',
    problem:
      'Static menu boards and paper flyers were failing to communicate promotions effectively, resulting in low deal awareness among existing customers.',
    research: [
      'Analyzed which promotional formats (banner vs. card vs. popup) drove the highest CTR.',
      'Heat-mapped customer attention on the home screen to optimally position offer banners.',
      'Tracked push notification open rates across different deal types and times.',
    ],
    solution: [
      'Full-bleed animated hero banners with gesture-driven swipe carousels.',
      'Real-time cashback counter showing customers the exact savings in their cart.',
      'Targeted push notifications synced with admin-published promotions.',
    ],
    growth:
      'Promotional campaigns now achieve 3× ROI and cashback offers drive a 41% increase in deal participation.',
    stores: { appStore: 'https://apps.apple.com', playStore: 'https://play.google.com' },
  },
]

// Backwards compatibility export
export const caseStudiesData = projectsData

export function LumosCaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [windowWidth, setWindowWidth] = useState<number>(1200)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projectsData.length)
  }, [])

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) return
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide, selectedProject])

  // ── Responsive values ──────────────────────────────────────────────────────
  const isMobile = windowWidth < 640
  const isTablet = windowWidth >= 640 && windowWidth < 1024

  // Card = phone mockup image aspect (approx 1 : 2.08 based on uploaded mockups)
  const CARD_RATIO = 2.08
  const cardWidth  = isMobile ? 148 : isTablet ? 178 : 208
  const phoneH     = Math.round(cardWidth * CARD_RATIO)   // phone image area
  const infoH      = isMobile ? 62 : 72                   // info strip below phone
  const cardHeight = phoneH + infoH

  // Fan layout
  const spreadX   = isMobile ?  82 : isTablet ? 148 : 210
  const spreadY   = isMobile ?  10 : isTablet ?  16 :  22
  const rotateDeg = isMobile ?  5  : isTablet ?  7  :   9

  // ── Smooth spring preset ───────────────────────────────────────────────────
  const springConfig = {
    type: 'spring' as const,
    stiffness: 180,   // softer → smoother glide
    damping:   26,    // enough damping → no wobble
    mass:      1.1,
  }

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -45) nextSlide()
    else if (info.offset.x > 45) prevSlide()
  }

  // ── Shadow strength per distance ──────────────────────────────────────────
  const getShadow = (diff: number, isAct: boolean) => {
    if (isAct) return 'drop-shadow(0 32px 64px rgba(0,0,0,0.48)) drop-shadow(0 6px 18px rgba(0,0,0,0.30))'
    const blur = Math.max(20, 44 - Math.abs(diff) * 8)
    return `drop-shadow(0 ${blur * 0.6}px ${blur}px rgba(0,0,0,0.32))`
  }

  return (
    <section
      id="projects"
      className="w-full py-20 sm:py-28 flex flex-col items-center relative overflow-hidden"
    >
      <span id="case-studies" className="sr-only" />

      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center">

        {/* ── Section Header ─────────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-4">
            <Smartphone className="w-3.5 h-3.5 text-[#00DE51]" />
            <span className="text-[12px] font-mono uppercase tracking-widest text-[#737373]">
              Featured Apps &amp; Projects
            </span>
          </div>
          <h2 className="text-[36px] sm:text-[50px] font-serif text-[#262626] tracking-tight font-normal">
            Mobile Applications
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#525252] max-w-[560px] mt-3 font-normal leading-relaxed">
            Production-ready Flutter apps designed with clean architecture, fluid 60fps animations,
            and engineered for App Store &amp; Google Play scale.
          </p>
        </div>

        {/* ── Fan Deck Stage ─────────────────────────────────────────────── */}
        <div className="w-full relative flex flex-col items-center justify-center" ref={containerRef}>

          <div
            className="relative w-full flex items-center justify-center overflow-visible select-none mt-2 mb-4"
            style={{ height: `${cardHeight + 80}px` }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {projectsData.map((project, index) => {
                const total = projectsData.length
                let diff = index - activeIndex
                if (diff >  total / 2) diff -= total
                if (diff < -total / 2) diff += total

                const isActive  = diff === 0
                const isVisible = Math.abs(diff) <= 2
                const absDiff   = Math.abs(diff)

                const x       = diff * spreadX
                const y       = Math.pow(absDiff, 1.6) * spreadY
                const rotate  = diff * rotateDeg
                const scale   = isActive ? 1 : Math.max(0.82, 1 - absDiff * 0.06)
                const zIndex  = 30 - absDiff * 5
                const opacity = isVisible ? 1 : 0

                return (
                  <motion.div
                    key={project.id}
                    drag={isActive ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.18}
                    dragMomentum={false}
                    onDragEnd={handleDragEnd}
                    initial={false}
                    animate={{ x, y, rotate, scale, zIndex, opacity }}
                    transition={springConfig}
                    onClick={() => {
                      if (isActive) setSelectedProject(project)
                      else setActiveIndex(index)
                    }}
                    style={{
                      width:    `${cardWidth}px`,
                      height:   `${cardHeight}px`,
                      cursor:   isActive ? 'pointer' : 'pointer',
                      position: 'absolute',
                      filter:   getShadow(diff, isActive),
                      // Subtle 3-D Y-rotation for off-center cards
                      transformOrigin: 'center center',
                    }}
                    className="group"
                    whileHover={isActive ? { y: -6, transition: { duration: 0.25, ease: 'easeOut' } } : {}}
                  >
                    {/* ── Card Shell ── */}
                    <div
                      style={{
                        width:         '100%',
                        height:        '100%',
                        display:       'flex',
                        flexDirection: 'column',
                        borderRadius:  isMobile ? '22px' : '26px',
                        overflow:      'hidden',
                        background:    '#F5F5F5',
                        border:        isActive
                          ? '1.5px solid rgba(0,0,0,0.08)'
                          : '1px solid rgba(0,0,0,0.05)',
                      }}
                    >
                      {/* Phone mockup image — fills top portion */}
                      <div
                        style={{
                          flex:             `0 0 ${phoneH}px`,
                          position:         'relative',
                          overflow:         'hidden',
                          backgroundColor:  '#111',
                        }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          draggable={false}
                          style={{
                            width:          '100%',
                            height:         '100%',
                            objectFit:      'cover',
                            objectPosition: 'top center',
                            display:        'block',
                            userSelect:     'none',
                            transition:     'transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          }}
                          className="group-hover:scale-[1.025]"
                        />

                        {/* Soft vignette at bottom of image — blends into info strip */}
                        <div
                          style={{
                            position:   'absolute',
                            bottom:     0,
                            left:       0,
                            right:      0,
                            height:     '40%',
                            background: 'linear-gradient(to top, rgba(245,245,245,0.95) 0%, transparent 100%)',
                            pointerEvents: 'none',
                          }}
                        />

                        {/* Active glow ring */}
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            style={{
                              position:      'absolute',
                              inset:         0,
                              border:        '2px solid rgba(0,222,81,0.35)',
                              pointerEvents: 'none',
                              borderRadius:  isMobile ? '22px 22px 0 0' : '26px 26px 0 0',
                            }}
                          />
                        )}
                      </div>

                      {/* ── Info Strip ── */}
                      <div
                        style={{
                          flex:           `0 0 ${infoH}px`,
                          background:     '#FAFAFA',
                          borderTop:      '1px solid rgba(0,0,0,0.06)',
                          padding:        isMobile ? '8px 10px' : '10px 13px',
                          display:        'flex',
                          alignItems:     'center',
                          justifyContent: 'space-between',
                          gap:            '6px',
                        }}
                      >
                        {/* Left — tag + title */}
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <span
                            style={{
                              display:       'inline-block',
                              marginBottom:  '2px',
                              padding:       '1.5px 6px',
                              borderRadius:  '9999px',
                              background:    '#EFEFEF',
                              color:         '#525252',
                              fontSize:      isMobile ? '8px' : '9px',
                              fontFamily:    'monospace',
                              fontWeight:    500,
                              letterSpacing: '0.04em',
                              textTransform: 'uppercase',
                            }}
                          >
                            {project.tag}
                          </span>
                          <div
                            style={{
                              color:        '#1A1A1A',
                              fontSize:     isMobile ? '12px' : '13.5px',
                              fontWeight:   700,
                              letterSpacing: '-0.02em',
                              lineHeight:   1.2,
                              whiteSpace:   'nowrap',
                              overflow:     'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {project.title}
                          </div>
                          <div
                            style={{
                              color:        '#8C8C8C',
                              fontSize:     isMobile ? '9px' : '10.5px',
                              marginTop:    '1px',
                              whiteSpace:   'nowrap',
                              overflow:     'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {project.metric} {project.metricLabel}
                          </div>
                        </div>

                        {/* Right — CTA */}
                        {isActive ? (
                          <motion.button
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.08, duration: 0.22 }}
                            style={{
                              flexShrink:   0,
                              display:      'flex',
                              alignItems:   'center',
                              gap:          '3px',
                              padding:      isMobile ? '6px 9px' : '7px 11px',
                              borderRadius: '9999px',
                              background:   '#1A1A1A',
                              color:        '#fff',
                              fontWeight:   600,
                              fontSize:     isMobile ? '10px' : '11px',
                              border:       'none',
                              cursor:       'pointer',
                              whiteSpace:   'nowrap',
                            }}
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedProject(project)
                            }}
                          >
                            <span>View</span>
                            <ArrowUpRight style={{ width: isMobile ? '10px' : '11px', height: isMobile ? '10px' : '11px' }} />
                          </motion.button>
                        ) : (
                          <div
                            style={{
                              flexShrink:   0,
                              width:        isMobile ? '28px' : '32px',
                              height:       isMobile ? '28px' : '32px',
                              borderRadius: '9999px',
                              background:   '#EFEFEF',
                              display:      'flex',
                              alignItems:   'center',
                              justifyContent: 'center',
                            }}
                          >
                            <ChevronRight style={{ width: '14px', height: '14px', color: '#A3A3A3' }} />
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* ── Nav Buttons ── */}
            <button
              onClick={prevSlide}
              aria-label="Previous project"
              className="absolute left-2 sm:left-4 md:left-6 z-40 w-11 h-11 rounded-full bg-white text-[#262626] border border-black/10 shadow-[0_4px_16px_rgba(0,0,0,0.12)] flex items-center justify-center hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.16)] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next project"
              className="absolute right-2 sm:right-4 md:right-6 z-40 w-11 h-11 rounded-full bg-white text-[#262626] border border-black/10 shadow-[0_4px_16px_rgba(0,0,0,0.12)] flex items-center justify-center hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.16)] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* ── Pagination ── */}
          <div className="flex items-center justify-center gap-2 mt-2 z-30">
            {projectsData.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Jump to ${project.title}`}
                className="transition-all duration-350 rounded-full cursor-pointer"
                style={{
                  width:      activeIndex === idx ? '28px' : '8px',
                  height:     '8px',
                  background: activeIndex === idx ? '#1A1A1A' : 'rgba(0,0,0,0.15)',
                  transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              />
            ))}
          </div>

          <p className="text-[11.5px] font-mono text-[#A3A3A3] mt-3 text-center">
            Drag to explore &nbsp;·&nbsp; Tap card for case study
          </p>
        </div>

      </div>

      {/* ── Case Study Modal ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[780px] max-h-[90vh] overflow-y-auto bg-white rounded-[28px] sm:rounded-[34px] border border-black/10 shadow-2xl p-6 sm:p-10 z-10"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#F2F2F2] hover:bg-[#E5E5E5] text-[#262626] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2 text-[12px] font-mono text-[#737373] uppercase tracking-wider mb-2">
                  <span>{selectedProject.category}</span>
                  <span>•</span>
                  <span>{selectedProject.duration}</span>
                  <span>•</span>
                  <span className="text-[#00DE51] font-semibold">{selectedProject.role}</span>
                </div>
                <h3 className="text-[30px] sm:text-[38px] font-serif text-[#262626] font-normal tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-[15px] text-[#525252] mt-1 font-normal">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Hero */}
              <div className="relative w-full h-[280px] sm:h-[340px] rounded-[22px] overflow-hidden mb-8 bg-[#111] border border-black/5">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Tech */}
              <div className="mb-8">
                <h4 className="text-[13px] font-mono uppercase tracking-wider text-[#737373] mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" />
                  Technologies &amp; Architecture
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#F2F2F2] text-[#262626] text-[12px] font-mono font-medium border border-black/[0.04]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="w-full p-5 rounded-2xl bg-[#F7F7F7] border border-black/[0.06] mb-8 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-white text-[#262626] border border-black/5 flex flex-col items-center justify-center font-mono font-bold text-[17px] shadow-sm shrink-0 text-center">
                  <span className="leading-tight">{selectedProject.metric}</span>
                  <span className="text-[8px] font-sans font-normal text-[#737373] leading-tight">Metric</span>
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-[#262626]">Key Business Metric</h4>
                  <p className="text-[13px] text-[#525252] mt-0.5">{selectedProject.growth}</p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-[17px] font-serif font-normal text-[#262626] mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#525252]" />
                    The Challenge &amp; Business Goal
                  </h4>
                  <p className="text-[14px] leading-relaxed text-[#525252]">{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="text-[17px] font-serif font-normal text-[#262626] mb-2">
                    Research &amp; Technical Discovery
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.research.map((item, idx) => (
                      <li key={idx} className="text-[14px] text-[#525252] flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#262626] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[17px] font-serif font-normal text-[#262626] mb-2">
                    Flutter Solution &amp; Architecture
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.solution.map((item, idx) => (
                      <li key={idx} className="text-[14px] text-[#525252] flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00DE51] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-black/[0.06]">
                  <h4 className="text-[17px] font-serif font-normal text-[#262626] mb-1 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#00DE51]" />
                    Measurable Business Outcome
                  </h4>
                  <p className="text-[14px] leading-relaxed text-[#525252]">{selectedProject.growth}</p>
                </div>

                {/* Store links */}
                <div className="pt-6 mt-4 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <a
                      href={selectedProject.stores?.appStore || 'https://apps.apple.com'}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A0A0A] text-white hover:bg-[#262626] transition-colors text-[13px] font-medium shadow-sm"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.64 1.35-.58.67-1.09 1.74-.95 2.78 1 .08 2.04-.53 2.66-1.28"/>
                      </svg>
                      <span>App Store</span>
                    </a>
                    <a
                      href={selectedProject.stores?.playStore || 'https://play.google.com'}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F2F2F2] text-[#262626] hover:bg-[#E5E5E5] transition-colors text-[13px] font-medium border border-black/[0.06]"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a2.41 2.41 0 0 1-.61-.926V2.74c.15-.367.362-.687.609-.926zm11.3 11.3l2.25 2.25-10.74 6.2c-.41.24-.86.3-1.26.19l9.75-8.64zm0-2.228L5.16 2.246c.4-.11.85-.05 1.26.19l10.74 6.2-2.25 2.25zm1.12 1.114l3.58 2.07c1.02.59 1.02 1.55 0 2.14l-3.58 2.07-2.39-2.39 2.39-2.39z"/>
                      </svg>
                      <span>Google Play</span>
                    </a>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-[13px] text-[#737373] hover:text-[#262626] font-medium transition-colors cursor-pointer"
                  >
                    Close Deep Dive
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
