"use client"

import React from "react"
import { useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section className="py-20 px-4 bg-[#1b111c]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column - Contact Info */}
          <ScrollAnimation animation="fadeLeft">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#ff0007]">Left questions?</span>
              <span className="text-white block mt-2">Contacts us now for a free consultation and free trial!</span>
            </h2>
            <p className="text-[#9497a1] mb-8 leading-relaxed">
              If there are any other things we still miss, you have even more questions or queries, we are glad to talk, fill out the short form and we will be in touch shortly.
            </p>
            
            <div className="space-y-4">
              <div>
                <span className="text-white font-medium">Email Address</span>
                <p className="text-[#9497a1]">info@malviyacapital.com</p>
              </div>
              <div>
                <span className="text-white font-medium">Phone number</span>
                <p className="text-[#9497a1]">+91 123 456 7890</p>
              </div>
              <div>
                <span className="text-white font-medium">Address</span>
                <p className="text-[#9497a1]">Kolkata, West Bengal, India</p>
              </div>
            </div>
            </div>
          </ScrollAnimation>

          {/* Right Column - Contact Form with Glass Effect */}
          <ScrollAnimation animation="fadeRight">
            <div 
              className="p-8 rounded-2xl backdrop-blur-md border border-white/10"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}
            >
              <h3 className="text-2xl font-bold text-[#ff0007] mb-6">Contact Us</h3>
              <form className="space-y-6">
                <div>
                  <label className="text-white text-sm mb-2 block">Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/30 text-white py-2 focus:outline-none focus:border-[#ff0007] transition-colors"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="text-white text-sm mb-2 block">Email</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-white/30 text-white py-2 focus:outline-none focus:border-[#ff0007] transition-colors"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="text-white text-sm mb-2 block">Subject</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/30 text-white py-2 focus:outline-none focus:border-[#ff0007] transition-colors"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="text-white text-sm mb-2 block">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-white/30 text-white py-2 focus:outline-none focus:border-[#ff0007] transition-colors resize-none"
                    placeholder=""
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#ff0007] hover:bg-[#cc0006] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                  >
                    Send a Message
                  </button>
                </div>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
