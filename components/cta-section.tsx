"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function CTASection() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/placeholder.svg?height=600&width=1400&query=business team meeting office professional dark')`,
        }}
      />
      <div className="absolute inset-0 bg-[#1b111c]/80" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <ScrollAnimation animation="fadeUp">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Grow Your Wealth With Our Expert Team
          </h2>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={0.1}>
          {/* Description */}
          <p className="text-[#9497a1] text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            We provide personalized investment solutions and goals-oriented wealth planning strategies to help
            you manage and grow your capital. Our expert team focuses on risk assessment and management,
            ensuring customized wealth insurance planning and a secure financial future
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={0.2}>
          {/* CTA Button */}
          <Button className="bg-[#ff0007] hover:bg-[#cc0006] text-white px-8 py-3 text-sm font-medium rounded-md">
            <Link href="/about">Know More</Link>
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  )
}
