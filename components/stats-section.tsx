"use client"

import { ScrollAnimation } from "@/components/scroll-animation"

const stats = [
  {
    value: "7",
    label: "Years of Experience",
  },
  {
    value: "10,000+",
    label: "Happy Clients",
  },
  {
    value: "₹600Cr+",
    label: "Assets Under Management",
  },
  {
    value: "15+",
    label: "Expert Advisors",
  },
]

export function StatsSection() {
  return (
    <section 
      className="py-16 px-4 backdrop-blur-md border-y border-white/10"
      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} animation="scale" delay={index * 0.1}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff0007] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#ff0007] text-sm md:text-base font-medium text-white">
                  {stat.label}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
