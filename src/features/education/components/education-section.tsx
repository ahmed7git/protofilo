'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { heroItem } from '@/lib/design-system/animations'

const timeline = [
  {
    period: '2023 - Now',
    role: 'Independent Designer & No-Code Developer',
    description: 'Helping startups and creative teams launch websites, scale their brand identity, and build powerful no-code products with Framer.',
    logo: 'https://via.placeholder.com/40' // Using placeholder until real logos are provided
  },
  {
    period: '2021 - 2023',
    role: 'Web & Brand Designer at Creative Studio',
    description: 'Led projects across branding and digital design, delivering interfaces and websites that balanced usability with striking visual impact.',
    logo: 'https://via.placeholder.com/40'
  },
  {
    period: '2019 - 2021',
    role: 'Junior Designer at Design Academy',
    description: 'Gained hands-on experience in brand systems and interface design while working closely with mentors to sharpen creative direction.',
    logo: 'https://via.placeholder.com/40'
  }
]

export function EducationSection() {
  return (
    <section id="education" className="relative flex flex-col pt-20">
      <motion.div
        variants={heroItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-8"
      >
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-[13px] font-medium text-white/70">
          <GraduationCap className="h-4 w-4" />
          <span>Education & Experience</span>
        </div>

        {/* Timeline */}
        <div className="relative mt-8 pl-4 sm:pl-8">
          {/* Vertical Line */}
          <div className="absolute left-[15px] sm:left-[31px] top-2 bottom-0 w-px bg-white/10" />

          <div className="flex flex-col gap-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 sm:pl-12">
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] sm:left-[0px] top-1.5 h-[10px] w-[10px] rounded-full bg-[#1c1c1c] border-2 border-[#4ade80] shadow-[0_0_8px_rgba(74,222,128,0.3)] z-10" />

                <div className="flex flex-col gap-3">
                  <p className="text-[14px] text-white/50 font-medium tracking-wide">
                    {item.period}
                  </p>
                  <div className="flex items-center gap-4 mt-1">
                    {/* Placeholder Logo */}
                    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white/5">
                      {/* Using an img here if a real logo is available */}
                      <div className="flex h-full w-full items-center justify-center text-white/30 text-xs">Logo</div>
                    </div>
                    <h5 className="text-[20px] font-medium leading-tight text-white/95">
                      {item.role}
                    </h5>
                  </div>
                  <p className="text-[15px] leading-relaxed text-white/60 max-w-[500px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
