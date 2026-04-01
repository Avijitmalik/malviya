"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, Award, Users, Target, TrendingUp } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import Link from "next/link";
import Image from "next/image";
import TeamCarousel from "@/components/team-section-carsual";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#1b111c]">
      <Header />

      {/* Hero Section */}
      <section className="py-12  sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fadeDown">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              About <span className="text-[#ff0007]">Malviya Capital</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.1}>
            <p className="text-[#9497a1] text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Since 2019, we've been dedicated to helping individuals and
              businesses achieve their financial goals through innovative
              solutions and expert guidance.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fadeLeft">
              <div className="rounded-2xl overflow-hidden -mt-10 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center px-4">
                <Image
                  src="/malaviyalogo.png"
                  alt="Logo"
                  width={1200}
                  height={600}
                  sizes="(max-width: 640px) 100vw,
             (max-width: 1024px) 80vw,
             1200px"
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeRight">
              <div className="space-y-6 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  Our <span className="text-[#ff0007]">Story</span>
                </h2>
                <p className="text-[#9497a1] text-base sm:text-lg leading-relaxed">
                  Founded in 2019 in Kolkata, Malviya Capital began with a
                  simple yet powerful vision: to make quality financial services
                  accessible to everyone. Over the years, we've grown from a
                  small advisory firm to a trusted financial partner serving
                  thousands of clients across India.
                </p>
                <p className="text-[#9497a1] text-lg leading-relaxed">
                  Our journey has been marked by continuous innovation,
                  unwavering commitment to client success, and a deep
                  understanding of the financial landscape. Today, we manage
                  over ₹600 crores in assets and have helped more than 10,000
                  clients achieve their financial goals.
                </p>
                <div className="flex justify-center lg:justify-start pt-4">
                  <Link href={"/contact"}>
                    <button className="bg-[#ff0007] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#cc0006] transition-colors flex items-center gap-2">
                      Book Consultation
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      <section className="py-20 px-4 bg-gradient-to-b from-[#1b111c] to-[#2d1f35]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation animation="fadeUp" delay={0}>
              <div
                className="p-8 rounded-2xl backdrop-blur-md border border-white/10 h-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-[#9497a1] leading-relaxed">
                  To empower individuals and businesses with smart financial
                  solutions that help them build wealth, manage risks, and
                  achieve their long-term financial objectives with confidence
                  and clarity.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeUp" delay={0.15}>
              <div
                className="p-8 rounded-2xl backdrop-blur-md border border-white/10 h-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-[#9497a1] leading-relaxed">
                  To be the most trusted financial partner in India, recognized
                  for delivering exceptional value, innovative solutions, and
                  personalized service to every client we serve.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#1b111c]">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fadeUp">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Meet the <span className="text-[#ff0007]">Founders</span>
              </h2>
              <p className="text-[#9497a1] text-base sm:text-lg max-w-2xl mx-auto">
                Our founders bring decades of combined experience in finance,
                investments, and wealth management to help you achieve your
                financial goals.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <ScrollAnimation animation="fadeLeft" className="order-2 lg:order-1">
              <div className="space-y-4 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  Mr. Amit Malviya
                </h3>
                <p className="text-[#ff0007] text-lg font-semibold">Co-Founder</p>
                <p className="text-[#9497a1] leading-relaxed text-base sm:text-lg">
                  With over 10 years of industry experience in Financial
                  Services, Mr. Malviya is the driving force behind our
                  strategic vision. He is passionate about catering to clients
                  with the best of his capabilities, focusing heavily on
                  investor education. His goal is not just to advise but to
                  impart the right knowledge, empowering you to invest your
                  money the right way.
                </p>
                <p className="text-[#9497a1] leading-relaxed text-base sm:text-lg italic mt-4 border-l-2 border-[#ff0007] pl-4 inline-block text-left">
                  "For us, our investors' interest is primarily above anything,
                  which makes us a reliable and trustworthy Wealth Advisory Firm
                  with all the regulated certifications." — Mr. Amit Malviya
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeRight" className="order-1 lg:order-2">
              <div className="flex justify-center lg:justify-end">
                <div className="rounded-2xl overflow-hidden w-full max-w-md h-[300px] sm:h-[450px]">
                  <img
                    src="/amit-malviya.png"
                    alt="Amit Malviya"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fadeRight" className="order-2 lg:order-2">
              <div className="space-y-4 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  Mrs. Dimpy Malviya
                </h3>
                <p className="text-[#ff0007] text-lg font-semibold">Co-Founder</p>
                <p className="text-[#9497a1] leading-relaxed text-base sm:text-lg">
                  A financial trainer with more than 11 years of experience,
                  Mrs. Malviya brings a unique educational approach to wealth
                  management. She specializes in resolving complex doubts and
                  queries, helping clients understand the nuances of their
                  portfolios. Her expertise ensures that our clients are never
                  left in the dark about where their money is going.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeLeft" className="order-1 lg:order-1">
              <div className="flex justify-center lg:justify-start">
                <div className="rounded-2xl overflow-hidden w-full max-w-md h-[300px] sm:h-[450px]">
                  <img
                    src="/mal-co.png"
                    alt="Dimpy Malviya"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <TeamCarousel />
      <section className="py-20 px-4 bg-[#1b111c]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <ScrollAnimation animation="fadeLeft">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-[#ff0007]">Left questions?</span>
                  <span className="text-white block mt-2">
                    Contact us now for a free consultation!
                  </span>
                </h2>
                <p className="text-[#9497a1] mb-8 leading-relaxed text-base sm:text-lg">
                  If there are any other things we still miss, you have even
                  more questions or queries, we are glad to talk. Fill out the
                  short form and we will be in touch shortly.
                </p>

                <div className="space-y-4 text-start">
                  <div>
                    <span className="text-white font-medium">
                      Email Address
                    </span>
                    <p className="text-[#9497a1]">
                      services@malviyacapital.com
                    </p>
                  </div>
                  <div>
                    <span className="text-white font-medium">Phone number</span>
                    <p className="text-[#9497a1]">+91 9836432398</p>
                  </div>
                  <div>
                    <span className="text-white font-medium">Address</span>
                    <p className="text-[#9497a1]">
                      24A, 1st Floor, Parijat Building, Shakespeare Sarani,
                      Elgin, Kolkata, West Bengal 700017
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeRight">
              <div
                className="p-8 rounded-2xl backdrop-blur-md border border-white/10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                }}
              >
                <h3 className="text-2xl font-bold text-[#ff0007] mb-6">
                  Contact Us
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-white text-sm mb-2 block">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-white/20 text-white py-2 focus:outline-none focus:border-[#ff0007] transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="text-white text-sm mb-2 block">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full bg-transparent border-b border-white/20 text-white py-2 focus:outline-none focus:border-[#ff0007] transition-colors"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-white text-sm mb-2 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-white/20 text-white py-2 focus:outline-none focus:border-[#ff0007] transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm mb-2 block">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-transparent border-b border-white/20 text-white py-2 focus:outline-none focus:border-[#ff0007] transition-colors resize-none"
                      placeholder="Your message here..."
                    />
                  </div>
                  <div className="flex justify-end pt-4">
                    <Link href={"/contact"} className="w-full sm:w-auto">
                      <button
                        type="submit"
                        className="w-full sm:w-auto bg-[#ff0007] hover:bg-[#cc0006] text-white font-semibold px-10 py-4 rounded-lg transition-all active:scale-95"
                      >
                        Send a Message
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section> 

      <Footer />
    </main>
  );
}
