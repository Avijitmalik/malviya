"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { FileCheck, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function CorporateBondsPage() {
  return (
    <main className="min-h-screen bg-[#1b111c]">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fadeDown">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Corporate & Government Bonds
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.1}>
            <p className="text-[#9497a1] text-lg leading-relaxed">
              Invest in stable, fixed-income securities offering predictable returns. Our bond portfolio includes carefully selected corporate and government bonds.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Image */}
            <ScrollAnimation animation="fadeLeft">
              <div className="rounded-2xl overflow-hidden h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop"
                  alt="Corporate Bonds"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollAnimation>

            {/* Right - Content */}
            <ScrollAnimation animation="fadeRight">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Corporate &amp; Government Bonds
                </h2>
                <p className="text-[#9497a1] leading-relaxed">
                  Expert Home Loan Advisory to Turn Your Property Dreams into Reality
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                    <p className="text-[#9497a1]">Fixed income, stable returns</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                    <p className="text-[#9497a1]"> Invest in high-quality corporate and government bonds</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                    <p className="text-[#9497a1]">Regular income streams</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                    <p className="text-[#9497a1]">Low-risk investment options</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                    <p className="text-[#9497a1]">Tax benefits</p>
                  </div>
                </div>

                <Button className="bg-[#ff0007] hover:bg-[#cc0006] text-white px-8 py-6 rounded-lg text-lg">
                  Invest in Bonds
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
