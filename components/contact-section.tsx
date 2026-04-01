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
    <section className="py-20 px-6 md:px-12 bg-[#1b111c] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Contact Info */}
          <ScrollAnimation animation="fadeLeft">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-[1.2]">
                <span className="text-[#ff0007]">Questions?</span>
                <span className="text-white block mt-2 md:mt-4">Connect with our experts today!</span>
              </h2>
              <p className="text-[#9497a1] text-base md:text-lg mb-10 leading-relaxed max-w-lg">
                Whether you have a specific query or need a comprehensive financial consultation, we're here to help you navigate your journey to wealth.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ff0007]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#ff0007]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white font-semibold block mb-1 text-lg">Email Address</span>
                    <a href="mailto:services@malviyacapital.com" className="text-[#9497a1] hover:text-[#ff0007] transition-colors break-all">services@malviyacapital.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ff0007]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#ff0007]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white font-semibold block mb-1 text-lg">Phone Number</span>
                    <a href="tel:+919836432398" className="text-[#9497a1] hover:text-[#ff0007] transition-colors">+91 9836432398</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ff0007]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#ff0007]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white font-semibold block mb-1 text-lg">Address</span>
                    <p className="text-[#9497a1] leading-relaxed">24A, 1st Floor, Parijat Building, Shakespeare Sarani, Elgin, Kolkata, WB 700017</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Column - Contact Form with Glass Effect */}
          <ScrollAnimation animation="fadeRight">
            <div 
              className="p-6 sm:p-10 rounded-3xl backdrop-blur-xl border border-white/5 shadow-2xl relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#ff0007]/10 rounded-full blur-[80px]" />
              
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-3 block">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl text-white px-5 py-3.5 focus:outline-none focus:border-[#ff0007] focus:bg-white/10 transition-all"
                      placeholder="John Doe"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-3 block">Email Address</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl text-white px-5 py-3.5 focus:outline-none focus:border-[#ff0007] focus:bg-white/10 transition-all"
                      placeholder="john@example.com"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-3 block">Subject</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl text-white px-5 py-3.5 focus:outline-none focus:border-[#ff0007] focus:bg-white/10 transition-all"
                    placeholder="Consultation Inquiry"
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-3 block">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl text-white px-5 py-3.5 focus:outline-none focus:border-[#ff0007] focus:bg-white/10 transition-all resize-none"
                    placeholder="Tell us more about your requirements..."
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#ff0007] hover:bg-[#cc0006] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#ff0007]/20 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
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
