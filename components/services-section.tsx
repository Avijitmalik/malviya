"use client"

import { FileText, DollarSign, CreditCard, Shield, TrendingUp, Building, HandCoins } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const services = [
  {
    icon: FileText,
    title: "Loans Consultancy",
    description:
      "Expert guidance for home, business, and property loans. We offer competitive rates and flexible terms to help you make informed financial choices.",
  },
  {
    icon: DollarSign,
    title: "Mutual Funds",
    description:
      "Build wealth systematically with expert-curated portfolios. We help you pick the right equity, debt, or tax-saving funds to reach your financial goals.",
  },
  {
    icon: CreditCard,
    title: "Wealth Planning",
    description:
      "Achieve long-term goals with holistic strategies. From retirement to estate management, we help secure your family’s future and grow your capital.",
  },
  {
    icon: Shield,
    title: "Insurance Guidance",
    description:
      "Protect what matters most. We provide expert advice on life and general insurance to ensure your family and assets stay secure against life's risks.",
  },
  {
    icon: TrendingUp,
    title: "Portfolio Management Services",
    description:
      "Professional management to grow your capital. Our experts actively monitor and rebalance your portfolio to ensure long-term, consistent returns.",
  },
  {
    icon: Building,
    title: "Corporate and Govt Bonds",
    description:
      "Secure your capital with fixed-income assets. We provide a handpicked selection of corporate and government bonds for steady, predictable returns.",
  },
  {
    icon: HandCoins,
    title: "Corporate Fixed Deposits",
    description:
      "Maximize your savings with safe, high-yield fixed deposits. We offer flexible options from trusted institutions to ensure steady growth for your money.",
  },
];
export function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-[#1b111c]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollAnimation animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ff0007] mb-4 text-white">
              Services we provide
            </h2>
            <p className="text-[#9497a1] max-w-2xl mx-auto">
              Monitor mutual funds, equities, bonds, FDs, PMS & insurance in a secure, unified dashboard. Get statements, goal tracking and review reminders.
            </p>
          </div>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {services.slice(0, 4).map((service, index) => (
            <ScrollAnimation key={index} animation="fadeUp" delay={index * 0.1}>
              <div 
                className="flex flex-col items-center lg:items-start text-center lg:text-left p-6 rounded-2xl backdrop-blur-md border border-white/10 h-full"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(to bottom, #ff0007, #8b0000)' }}
                >
                  <service.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-[#9497a1] text-sm leading-relaxed">{service.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Bottom Row - Centered 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {services.slice(4, 7).map((service, index) => (
            <ScrollAnimation key={index} animation="fadeUp" delay={(index + 4) * 0.1}>
              <div 
                className="flex flex-col items-center lg:items-start text-center lg:text-left p-6 rounded-2xl backdrop-blur-md border border-white/10 h-full"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(to bottom, #ff0007, #8b0000)' }}
                >
                  <service.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-[#9497a1] text-sm leading-relaxed">{service.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
