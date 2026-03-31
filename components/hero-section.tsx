"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function HeroSection() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 md:px-12 bg-[#1b111c] overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5b0e0f]/30 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#74671d]/20 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge */}
        {/* <ScrollAnimation animation="fadeDown" delay={0}>
          <div className="flex justify-center mb-8">
            <span className="bg-[#5a5a74]/40 text-white text-sm px-4 py-2 rounded-full">
              Kolkata · Since 2019
            </span>
          </div>
        </ScrollAnimation> */}

        {/* Main Headline */}
        <ScrollAnimation animation="fadeUp" delay={0.1}>
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Smarter Loans & Investments
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff0007] leading-tight mt-2">
              for Real-World Goals
            </h2>
          </div>
        </ScrollAnimation>

        {/* Subheadline */}
        <ScrollAnimation animation="fadeUp" delay={0.2}>
          <p className="text-center text-[#9497a1] text-base md:text-lg max-w-2xl mx-auto mb-10">
            We analyse your financial needs and tailor loan, investment, and insurance solutions-so your
            money works as hard as you do.
          </p>
        </ScrollAnimation>

        {/* CTA Buttons */}
        <ScrollAnimation animation="fadeUp" delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-[#ff0007] hover:bg-[#cc0006] text-white text-sm font-medium flex items-center gap-2 py-6 px-12 rounded-md">
              Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-sm font-medium flex items-center gap-2 bg-transparent px-12 py-6 rounded-md"
            >
              <Smartphone className="w-4 h-4" />
              Explore Our App
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
