"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { TrendingUp, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function MutualFundsPage() {
  return (
    <main className="min-h-screen bg-[#1b111c]">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fadeDown">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Mutual <span className="text-[#ff0007] text-white">Funds</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.1}>
            <p className="text-[#9497a1] text-lg leading-relaxed">
              Build wealth systematically with our carefully curated mutual fund portfolios. We help you invest in the right funds based on your risk appetite and financial goals.
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
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop" 
                  alt="Mutual Funds" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollAnimation>

            {/* Right - Content */}
            <ScrollAnimation animation="fadeRight">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Mutual Funds
                </h2>
              <p className="text-[#9497a1] leading-relaxed">
                Our mutual fund advisory services combine market expertise with personalized portfolio management to maximize your returns while managing risk effectively.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                  <p className="text-[#9497a1]">Long-term wealth creation through market-linked growth</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                  <p className="text-[#9497a1]"> Stable returns with lower risk exposure</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                  <p className="text-[#9497a1]">Balanced approach combining equity and debt</p>
                </div>
                 <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                  <p className="text-[#9497a1]">Save tax under Section 80C while investing for growth</p>
                </div>
              </div>


              <Button className="bg-[#ff0007] hover:bg-[#cc0006] text-white px-8 py-6 rounded-lg text-lg">
                Start Investing
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
