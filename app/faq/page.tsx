"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ScrollAnimation } from "@/components/scroll-animation"

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What services does Malviya Capital offer?",
        answer: "Malviya Capital offers comprehensive financial services including loans consultancy, mutual funds, wealth planning, insurance guidance, portfolio management services, corporate and government bonds, and corporate fixed deposits. We provide end-to-end solutions tailored to your financial goals.",
      },
      {
        question: "How long has Malviya Capital been in business?",
        answer: "Malviya Capital was founded in 2019 in Kolkata. Since then, we have grown to serve over 10,000 clients and manage assets worth more than ₹600 crores, establishing ourselves as a trusted name in financial services.",
      },
      {
        question: "Is Malviya Capital a registered and certified firm?",
        answer: "Yes, Malviya Capital is a fully registered and certified wealth advisory firm. We operate with all necessary regulatory certifications and licenses, ensuring complete transparency and compliance with financial regulations.",
      },
    ],
  },
  {
    category: "Loans & Financing",
    questions: [
      {
        question: "What types of loans do you offer?",
        answer: "We offer a wide range of loan products including home loans, loans against property, lease rental discounting, working capital loans, and project funding. Each loan product is designed to meet specific financial needs with competitive interest rates and flexible repayment options.",
      },
      {
        question: "What is the loan approval process?",
        answer: "Our loan approval process is streamlined and efficient. After you submit your application with required documents, our team reviews your eligibility, conducts necessary verifications, and provides approval typically within 3-5 business days. We guide you through every step of the process.",
      },
      {
        question: "Do I need collateral for business loans?",
        answer: "It depends on the type and amount of loan. While some loans like working capital loans for eligible businesses may not require collateral, others like loans against property are secured loans. Our advisors will help you understand the requirements based on your specific needs.",
      },
    ],
  },
  {
    category: "Investments",
    questions: [
      {
        question: "How do I start investing with Malviya Capital?",
        answer: "Starting your investment journey is simple. Book a consultation with our advisors, discuss your financial goals and risk appetite, and we'll create a customized investment plan. You can then invest through our platform with complete guidance and support from our team.",
      },
      {
        question: "What is the minimum investment amount?",
        answer: "The minimum investment amount varies depending on the investment product. Mutual funds can start from as low as ₹500 per month through SIPs, while other products like portfolio management services may have higher minimums. Contact us for specific product requirements.",
      },
      {
        question: "How often will I receive updates on my investments?",
        answer: "We provide regular updates on your investments through monthly statements, quarterly reviews, and annual comprehensive reports. Additionally, you can access your portfolio anytime through our mobile app and online platform for real-time updates.",
      },
    ],
  },
  {
    category: "Account & Support",
    questions: [
      {
        question: "How do I schedule a consultation?",
        answer: "You can schedule a consultation by clicking the 'Book Consultation' button on any service page, calling our office, or using the contact form on our website. We offer both in-person and virtual consultations based on your preference.",
      },
      {
        question: "What documents do I need for onboarding?",
        answer: "Typically, you'll need government-issued ID proof (Aadhaar, PAN card), address proof, bank statements, and income proof. Specific requirements may vary based on the service you're availing. Our team will provide a detailed checklist during your consultation.",
      },
      {
        question: "How can I track my applications and investments?",
        answer: "You can track all your applications and investments through our mobile app available on iOS and Android. The app provides real-time updates, document uploads, and direct communication with your dedicated advisor.",
      },
    ],
  },
]

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#1b111c]">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fadeDown">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.1}>
            <p className="text-[#9497a1] text-lg">
              {'Find answers to common questions about our services, processes, and how we can help you achieve your financial goals.'}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((category, categoryIndex) => (
            <ScrollAnimation key={categoryIndex} animation="fadeUp" delay={categoryIndex * 0.1}>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#ff0007] mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const questionId = `${categoryIndex}-${faqIndex}`
                    return (
                      <div 
                        key={faqIndex} 
                        className="border border-white/10 rounded-xl p-6 backdrop-blur-md"
                        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}
                      >
                      <button
                        onClick={() => setOpenQuestion(openQuestion === questionId ? null : questionId)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="text-white font-semibold text-lg pr-4">{faq.question}</span>
                        {openQuestion === questionId ? (
                          <Minus className="w-5 h-5 text-[#ff0007] flex-shrink-0" />
                        ) : (
                          <Plus className="w-5 h-5 text-[#ff0007] flex-shrink-0" />
                        )}
                      </button>
                      {openQuestion === questionId && (
                        <p className="text-[#9497a1] leading-relaxed mt-4">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                    )
                  })}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fadeUp">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still have questions?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.1}>
            <p className="text-[#9497a1] mb-8">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.2}>
            <a 
              href="/contact" 
              className="inline-block bg-[#ff0007] hover:bg-[#cc0006] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  )
}
