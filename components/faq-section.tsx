"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Minus } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const faqs = [
  {
    question: "What services does Malviya Capital offer?",
    answer: "Malviya Capital offers comprehensive financial services including loans consultancy, mutual funds, wealth planning, insurance guidance, portfolio management services, corporate and government bonds, and corporate fixed deposits.",
  },
  {
    question: "How long has Malviya Capital been in business?",
    answer: "Malviya Capital was founded in 2019 in Kolkata. Since then, we have grown to serve over 10,000 clients and manage assets worth more than ₹600 crores.",
  },
  {
    question: "What types of loans do you offer?",
    answer: "We offer home loans, loans against property, lease rental discounting, working capital loans, and project funding. Each loan product comes with competitive interest rates and flexible repayment options.",
  },
  {
    question: "How do I start investing with Malviya Capital?",
    answer: "Book a consultation with our advisors, discuss your financial goals and risk appetite, and we'll create a customized investment plan. You can then invest through our platform with complete guidance.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 px-4 bg-[#1b111c]">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <ScrollAnimation animation="fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ff0007] text-center mb-4 text-white">
            Frequently asked questions
          </h2>
          <p className="text-[#9497a1] text-center max-w-2xl mx-auto mb-16">
           Have questions about managing your wealth? We’ve compiled answers to the most frequent inquiries to help you navigate your financial journey with confidence.
          </p>
        </ScrollAnimation>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index} animation="fadeUp" delay={index * 0.1}>
              <div 
                className="border border-white/10 rounded-xl p-6 backdrop-blur-md"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}
              >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-white font-semibold text-lg pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-[#ff0007] flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-[#ff0007] flex-shrink-0" />
                )}
              </button>
                {openIndex === index && (
                  <p className="text-[#9497a1] leading-relaxed mt-4">
                    {faq.answer}
                  </p>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Know More Button */}
        <ScrollAnimation animation="fadeUp" delay={0.4}>
          <div className="flex justify-center">
            <Link href="/faq" className="bg-[#ff0007] hover:bg-[#cc0006] text-white font-semibold px-12 py-3 rounded-lg transition-colors inline-block">
              Know More
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
