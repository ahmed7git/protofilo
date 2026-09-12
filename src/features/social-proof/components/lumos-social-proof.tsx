'use client'

import { Star } from 'lucide-react'

const partners = [
  { name: 'Linear', logo: 'Linear' },
  { name: 'Stripe', logo: 'Stripe' },
  { name: 'Vercel', logo: 'Vercel' },
  { name: 'Raycast', logo: 'Raycast' },
  { name: 'Supabase', logo: 'Supabase' },
  { name: 'Loom', logo: 'Loom' },
  { name: 'Figma', logo: 'Figma' },
  { name: 'Framer', logo: 'Framer' },
]

export function LumosSocialProof() {
  return (
    <section className="w-full py-12 border-y border-black/[0.06] bg-white/50 backdrop-blur-sm overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: 58+ Happy Clients Badge */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Overlapping Avatars */}
          <div className="flex -space-x-3">
            {[
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Client avatar"
                className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
              />
            ))}
          </div>

          {/* Text and Stars */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-[#F59E0B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="text-[14px] font-semibold text-[#262626] mt-0.5">
              58+ happy clients
            </p>
          </div>
        </div>

        {/* Vertical divider on desktop */}
        <div className="hidden md:block w-px h-10 bg-black/[0.08]" />

        {/* Right: Marquee Ticker */}
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="animate-marquee-lumos flex items-center gap-12 text-[#737373] text-[16px] font-medium tracking-tight whitespace-nowrap">
            {partners.concat(partners).map((partner, i) => (
              <div
                key={i}
                className="flex items-center gap-2 hover:text-[#262626] transition-colors cursor-default select-none"
              >
                <span className="font-mono text-[11px] text-[#A3A3A3]">•</span>
                <span className="font-semibold tracking-wide uppercase text-[13px]">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
