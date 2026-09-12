import { LumosHeader } from '@/components/layout/lumos-header'
import { LumosHero } from '@/features/hero/components/lumos-hero'
import { LumosSocialProof } from '@/features/social-proof/components/lumos-social-proof'
import { LumosCaseStudies } from '@/features/case-studies/components/lumos-case-studies'
import { LumosBusinessImpact } from '@/features/impact/components/lumos-business-impact'
import { LumosProcess } from '@/features/process/components/lumos-process'
import { LumosPricing } from '@/features/pricing/components/lumos-pricing'
import { LumosTestimonials } from '@/features/testimonials/components/lumos-testimonials'
import { LumosFAQ } from '@/features/faq/components/lumos-faq'
import { LumosFooter } from '@/components/layout/lumos-footer'

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full bg-[#F7F7F7] text-[#262626] selection:bg-[#262626] selection:text-white flex flex-col items-center">
      <LumosHeader />
      <main className="w-full flex flex-col items-center">
        <LumosHero />
        <LumosSocialProof />
        <LumosCaseStudies />
        <LumosBusinessImpact />
        <LumosProcess />
        <LumosPricing />
        <LumosTestimonials />
        <LumosFAQ />
      </main>
      <LumosFooter />
    </div>
  )
}
