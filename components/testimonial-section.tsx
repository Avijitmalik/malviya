"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"

const testimonials = [
  {
    quote: "Managing Director of Jaya Coconut Oil Pvt. Ltd. & N.K.K.M Industries Pvt. Ltd. I had a great experience with Malviya Capital for my mutual fund investments. Their team provided clear guidance and helped me choose the right funds based on my financial goals and risk profile. The entire process was well-managed. I truly appreciate their professionalism and timely support. I would highly recommend Malviya Capital to anyone looking for reliable advice on mutual fund investments.",
    name: "Ankkit Modi",
    avatar: "/placeholder.svg?height=48&width=48&query=professional woman headshot",
  },
  {
    quote: "Working with Malviya Capital has been a seamless experience for my loan and investment planning. Their team provided practical advice and ensured I understood every step of the process. I value their honest approach and timely assistance, which made everything much easier to manage. Highly recommended for anyone seeking dependable financial guidance.- Vikash Kochar Director of Best Buy Air Condition",
    name: "Jitendra Sirohia",
    avatar: "/placeholder.svg?height=48&width=48&query=professional man headshot",
  },
  {
    quote: "Malviya Capital has been a reliable partner in managing my loan requirements and investments. Their expertise and structured approach helped me make well-informed financial decisions. The team is proactive, supportive, and always available to address queries. I am very satisfied with their services and would gladly recommend them.",
    name: "Vikash Kochar",
    avatar: "/placeholder.svg?height=48&width=48&query=business woman headshot",
  },
]

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 48 48" 
      fill="none"
    >
      <defs>
        <linearGradient id="quoteGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff0007" />
          <stop offset="100%" stopColor="#8b0000" />
        </linearGradient>
      </defs>
      <path 
        d="M14 24H8c0-5.52 4.48-10 10-10v4c-3.31 0-6 2.69-6 6h6v12H8V24h6zm20 0h-6c0-5.52 4.48-10 10-10v4c-3.31 0-6 2.69-6 6h6v12h-10V24h6z" 
        fill="url(#quoteGradient)"
      />
    </svg>
  )
}

export function TestimonialSection() {
  return (
    <section className="py-20 px-4 bg-[#1b111c]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <ScrollAnimation animation="fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ff0007] text-center mb-4 text-white">
            Testimonial
          </h2>
          <p className="text-[#9497a1] text-center max-w-3xl mx-auto mb-16">
            Monitor mutual funds, equities, bonds, FDs, PMS & insurance in a secure, unified dashboard. Get statements, goal tracking and review reminders.
          </p>
        </ScrollAnimation>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} animation="fadeUp" delay={index * 0.15}>
              <div 
                className="flex flex-col p-6 rounded-2xl backdrop-blur-md border border-white/10 h-full"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}
              >
              {/* Quote Text */}
              <p className="text-white text-base leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              
              {/* Quote Icon and Avatar Row */}
              <div className="flex items-end justify-between mt-auto">
                {/* Avatar and Name */}
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <span className="text-white font-medium">{testimonial.name}</span>
                </div>
                
                {/* Quote Icon */}
                <QuoteIcon className="w-16 h-16" />
              </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
