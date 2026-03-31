"use client"

import { Banknote, ShieldCheck, TrendingUp, Star } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const features = [
  {
    icon: Banknote,
    title: "Bank Network",
    description: "We connect you with a vast network of top-tier banks and financial institutions, ensuring your capital is managed through the most reliable and secure banking channels in India.",
    gradientFrom: "#ff0007",
    gradientTo: "#8b0000",
  },
  {
    icon: ShieldCheck,
    title: "Compliance First",
    description: "Trust is built on integrity. We strictly adhere to all regulatory guidelines and internal safety protocols to ensure your investments are always handled with the highest level of transparency.",
    gradientFrom: "#ff0007",
    gradientTo: "#8b0000",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven",
    description: "Our strategies aren't based on guesswork. We use precise market analytics and real-time data to track your goals, manage risks, and make informed decisions for your wealth growth.",
    gradientFrom: "#ff0007",
    gradientTo: "#8b0000",
  },
  {
    icon: Star,
    title: "Client Delight",
    description: "Your financial success is our greatest reward. We go beyond simple advisory services to provide a seamless, personalized experience that puts your goals and peace of mind at the center.",
    gradientFrom: "#ff0007",
    gradientTo: "#8b0000",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-[#1b111c]">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-[#9497a1] text-base max-w-2xl mx-auto">
              Monitor mutual funds, equities, bonds, FDs, PMS & insurance in a secure, unified dashboard. Get
              statements, goal tracking and review reminders.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={feature.title} animation="fadeUp" delay={index * 0.1}>
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: `linear-gradient(to bottom, ${feature.gradientFrom}, ${feature.gradientTo})` }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#9497a1] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
