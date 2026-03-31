"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { FileText, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function LoansConsultancyPage() {
  return (
    <main className="min-h-screen bg-[#1b111c]">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fadeDown">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Loans Consultancy
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.1}>
            <p className="text-[#9497a1] text-lg leading-relaxed">
              Expert guidance to help you find the perfect loan solution for your needs. Whether it's personal, home, or business loans, we provide comprehensive consultancy to ensure you make informed financial decisions.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Service Details */}
      

      {/* Home Loan */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Content */}
            <ScrollAnimation animation="fadeLeft">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Home Loan
                </h2>
              <p className="text-[#9497a1] leading-relaxed">
                Expert Home Loan Advisory to Turn Your Property Dreams into Reality.
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

              <Button className="bg-[#ff0007] hover:bg-[#cc0006] text-white px-8 py-6 rounded-lg text-lg mt-6">
                Book Consultation
              </Button>
              </div>
            </ScrollAnimation>

            {/* Right - Image */}
            <ScrollAnimation animation="fadeRight">
              <div className="rounded-2xl overflow-hidden h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop" 
                  alt="Home Loan" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Loan Against Property */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Image */}
            <ScrollAnimation animation="fadeLeft">
              <div className="rounded-2xl overflow-hidden h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop" 
                  alt="Loan Against Property" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollAnimation>

            {/* Right - Content */}
            <ScrollAnimation animation="fadeRight">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Loan Against Property
                </h2>
              <p className="text-[#9497a1] leading-relaxed">
                Use your residential or commercial property to secure funds for business or personal needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                  <p className="text-[#9497a1]">The purpose of the loan is to Unlock value against your property</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                  <p className="text-[#9497a1]">It allows you to Use your property for potential</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                  <p className="text-[#9497a1]">It offers Competitive interest rates</p>
                </div>
                 <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                  <p className="text-[#9497a1]">It provides Flexible repayment options</p>
                </div>
                
              </div>

              <Button className="bg-[#ff0007] hover:bg-[#cc0006] text-white px-8 py-6 rounded-lg text-lg mt-6">
                Book Consultation
              </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Lease Rental Discounting */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Content */}
            <ScrollAnimation animation="fadeLeft">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Lease Rental Discounting
                </h2>
              <p className="text-[#9497a1] leading-relaxed">
                Discount your long-term rental agreements to access immediate funds.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                  <p className="text-[#9497a1]">Competitive discounting rates</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                  <p className="text-[#9497a1]">Flexible repayment terms</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                  <p className="text-[#9497a1]">Get up to 80% of rental value</p>
                </div>
                
              </div>

              <Button className="bg-[#ff0007] hover:bg-[#cc0006] text-white px-8 py-6 rounded-lg text-lg mt-6">
                Book Consultation
              </Button>
              </div>
            </ScrollAnimation>

            {/* Right - Image */}
            <ScrollAnimation animation="fadeRight">
              <div className="rounded-2xl overflow-hidden h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" 
                  alt="Lease Rental Discounting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Working Capital Loans */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Image */}
            <ScrollAnimation animation="fadeLeft">
              <div className="rounded-2xl overflow-hidden h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" 
                  alt="Working Capital Loans" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollAnimation>

            {/* Right - Content */}
            <ScrollAnimation animation="fadeRight">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Working Capital Loans
                </h2>
              <p className="text-[#9497a1] leading-relaxed">
                Manage cash flow efficiently and meet day-to-day business expenses without stress.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                  <p className="text-[#9497a1]">Flexible repayment options</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                  <p className="text-[#9497a1]">High-value funding</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                  <p className="text-[#9497a1]">Long tenure options</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                  <p className="text-[#9497a1]">Get up to 80% of property value</p>
                </div>
              </div>

              <Button className="bg-[#ff0007] hover:bg-[#cc0006] text-white px-8 py-6 rounded-lg text-lg mt-6">
                Book Consultation
              </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Project Funding */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Content */}
            <ScrollAnimation animation="fadeLeft">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Project Funding
                </h2>
              <p className="text-[#9497a1] leading-relaxed">
                Discount your long-term rental agreements to access immediate funds.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                  <p className="text-[#9497a1]">Competitive discounting rates</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                  <p className="text-[#9497a1]">Flexible repayment terms</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#ff0007] flex-shrink-0 mt-1" />
                  <p className="text-[#9497a1]">Get up to 80% of rental value</p>
                </div>
              </div>

              <Button className="bg-[#ff0007] hover:bg-[#cc0006] text-white px-8 py-6 rounded-lg text-lg mt-6">
                Book Consultation
              </Button>
              </div>
            </ScrollAnimation>

            {/* Right - Image */}
            <ScrollAnimation animation="fadeRight">
              <div className="rounded-2xl overflow-hidden h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop" 
                  alt="Project Funding" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
