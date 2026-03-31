"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight, Award, Users, Target, TrendingUp } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#1b111c]">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fadeDown">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-[#ff0007]">Malviya Capital</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.1}>
            <p className="text-[#9497a1] text-lg mb-8">
              Since 2019, we've been dedicated to helping individuals and
              businesses achieve their financial goals through innovative
              solutions and expert guidance.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <ScrollAnimation animation="fadeLeft">
              <div className="rounded-2xl overflow-hidden h-[400px] lg:h-[500px]">
                <img
                  src="/malviyallogo.png"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollAnimation>

            {/* Right - Content */}
            <ScrollAnimation animation="fadeRight">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Our <span className="text-[#ff0007] text-white">Story</span>
                </h2>
                <p className="text-[#9497a1] text-lg leading-relaxed">
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
                <Link href={"/contact"}>
                  <button className="bg-[#ff0007] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#cc0006] transition-colors flex items-center gap-2">
                    Book Consultation
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1b111c] to-[#2d1f35]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
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

            {/* Vision */}
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

      {/* Meet the Founders Section */}
      <section className="py-20 px-4 bg-[#1b111c]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollAnimation animation="fadeUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Meet the{" "}
                <span className="text-[#ff0007] text-white">Founders</span>
              </h2>
              <p className="text-[#9497a1] max-w-2xl mx-auto">
                Our founders bring decades of combined experience in finance,
                investments, and wealth management to help you achieve your
                financial goals.
              </p>
            </div>
          </ScrollAnimation>

          {/* Founder 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left - Details */}
            <ScrollAnimation animation="fadeLeft">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Mr. Amit Malviya
                </h3>
                <p className="text-[#ff0007] text-lg font-normal">Co-Founder</p>
                <p className="text-[#9497a1] leading-relaxed text-lg">
                  With over 10 years of industry experience in Financial
                  Services, Mr. Malviya is the driving force behind our
                  strategic vision. He is passionate about catering to clients
                  with the best of his capabilities, focusing heavily on
                  investor education. His goal is not just to advise but to
                  impart the right knowledge, empowering you to invest your
                  money the right way.
                </p>
                <p className="text-[#9497a1] leading-relaxed text-lg italic mt-4">
                  "For us, our investors' interest is primarily above anything,
                  which makes us a reliable and trustworthy Wealth Advisory Firm
                  with all the regulated certifications." — Mr. Amit Malviya
                </p>
              </div>
            </ScrollAnimation>

            {/* Right - Image */}
            <ScrollAnimation animation="fadeRight">
              <div className="flex justify-center lg:justify-end">
                <div className="rounded-2xl overflow-hidden w-full max-w-md h-[450px]">
                  <img
                    src="/amit-malviya.png"
                    alt="Rajesh Malviya"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Founder 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Details (on mobile/tablet), will be on right on desktop */}
            <ScrollAnimation animation="fadeRight" className="lg:order-2">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Mrs. Dimpy Malviya
                </h3>
                <p className="text-[#ff0007] text-lg font-normal">Co-Founder</p>
                <p className="text-[#9497a1] leading-relaxed text-lg">
                  A financial trainer with more than 11 years of experience,
                  Mrs. Malviya brings a unique educational approach to wealth
                  management. She specializes in resolving complex doubts and
                  queries, helping clients understand the nuances of their
                  portfolios. Her expertise ensures that our clients are never
                  left in the dark about where their money is going.
                </p>
              </div>
            </ScrollAnimation>

            {/* Right - Image (on mobile/tablet), will be on left on desktop */}
            <ScrollAnimation animation="fadeLeft" className="lg:order-1">
              <div className="flex justify-center lg:justify-start">
                <div className="rounded-2xl overflow-hidden w-full max-w-md h-[450px]">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop"
                    alt="Priya Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1b111c] to-[#2d1f35]">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollAnimation animation="fadeUp">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 capitalize">
              {/* How We Work */}
              our award recognized
            </h2>
            <p className="text-[#9497a1] max-w-3xl mx-auto mb-16">
              Our team of experienced financial advisors, investment
              specialists, and customer success managers are committed to
              delivering exceptional service.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                role: "Senior Financial Advisor",
                icon: "/images/fluent-star-emphasis-20-regular-20-281-29.png",
              },
              {
                role: "Investment Specialist",
                icon: "/images/fluent-star-emphasis-20-regular-20-283-29.png",
              },
              {
                role: "Wealth Manager",
                icon: "/images/fluent-star-emphasis-20-regular-20-282-29.png",
              },
            ].map((item, i) => (
              <ScrollAnimation key={i} animation="fadeUp" delay={i * 0.1}>
                <div
                  className="p-8 rounded-2xl backdrop-blur-md border border-white/10 h-full"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                  }}
                >
                  <img
                    src="/images/fluent-star-emphasis-20-regular-20-282-29.png"
                    alt={item.role}
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.role}
                  </h3>
                  <p className="text-[#9497a1]">
                    Dedicated to your financial success
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 px-4 bg-[#1b111c]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column - Contact Info */}
            <ScrollAnimation animation="fadeLeft">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-[#ff0007]">Left questions?</span>
                  <span className="text-white block mt-2">
                    Contact us now for a free consultation!
                  </span>
                </h2>
                <p className="text-[#9497a1] mb-8 leading-relaxed">
                  If there are any other things we still miss, you have even
                  more questions or queries, we are glad to talk. Fill out the
                  short form and we will be in touch shortly.
                </p>

                <div className="space-y-4">
                  <div>
                    <span className="text-white font-medium">
                      Email Address
                    </span>
                    <p className="text-[#9497a1]">info@malviyacapital.com</p>
                  </div>
                  <div>
                    <span className="text-white font-medium">Phone number</span>
                    <p className="text-[#9497a1]">+91 123 456 7890</p>
                  </div>
                  <div>
                    <span className="text-white font-medium">Address</span>
                    <p className="text-[#9497a1]">
                      Kolkata, West Bengal, India
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Column - Contact Form with Glass Effect */}
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
                  <div>
                    <label className="text-white text-sm mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-white/30 text-white py-2 focus:outline-none focus:border-[#ff0007] transition-colors"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-white/30 text-white py-2 focus:outline-none focus:border-[#ff0007] transition-colors"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm mb-2 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-white/30 text-white py-2 focus:outline-none focus:border-[#ff0007] transition-colors"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm mb-2 block">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-transparent border-b border-white/30 text-white py-2 focus:outline-none focus:border-[#ff0007] transition-colors resize-none"
                      placeholder=""
                    />
                  </div>
                  <div className="flex justify-end">
                    <Link href={"/contact"}>
                      <button
                        type="submit"
                        className="bg-[#ff0007] hover:bg-[#cc0006] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
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
