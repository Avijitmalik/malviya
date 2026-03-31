"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { FileText, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function FixedDepositsPage() {
  return (
    <main className="min-h-screen bg-[#1b111c]">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fadeDown">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Corporate Fixed Deposits
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.1}>
            <p className="text-[#9497a1] text-lg leading-relaxed">
              Secure your capital with attractive returns through corporate fixed deposits from reputable companies offering higher interest rates than traditional banks.
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
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop" 
                  alt="Fixed Deposits" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollAnimation>

            {/* Right - Content */}
            <ScrollAnimation animation="fadeRight">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Safe & High-Yield Deposits
                </h2>
                <p className="text-[#9497a1] leading-relaxed">
                  Corporate fixed deposits offer an excellent alternative to traditional bank FDs, providing higher returns while maintaining safety through credit-rated companies.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                    <p className="text-[#9497a1]">The service aims to Fund your dream home.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                    <p className="text-[#9497a1]"> Clients can Get up to 90% of said disbursement amount.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                    <p className="text-[#9497a1]">The offering includes Competitive interest rates.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                    <p className="text-[#9497a1]">The loans come with Flexible repayment options.</p>
                  </div>
                </div>

                <Button className="bg-[#ff0007] hover:bg-[#cc0006] text-white px-8 py-6 rounded-lg text-lg">
                  Open FD
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
