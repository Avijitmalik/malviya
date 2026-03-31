"use client";

import Image from "next/image";
import { ScrollAnimation } from "@/components/scroll-animation";

export default function AppPreviewSection() {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-[#1b111c]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Phone Mockups */}
          <ScrollAnimation
            animation="fadeLeft"
            className="relative flex-1 flex justify-center"
          >
            <div className="relative w-[300px] h-[500px] md:w-[400px] md:h-[600px]">
              {/* Left phone */}
              <div className="absolute left-0 top-8 w-[160px] h-[320px] md:w-[200px] md:h-[400px] bg-gradient-to-b from-[#2a1a2e] to-[#1b111c] rounded-[32px] border-4 border-[#3a2a3e] shadow-2xl transform -rotate-6">
                {/* <div className="absolute inset-4 bg-black rounded-[24px]" /> */}
                <Image
                  src="/Rectangle_2.png"
                  alt="App screen 1"
                  fill
                  className="object-cover rounded-[28px]"
                />
              </div>
              {/* Right phone */}
              <div className="absolute right-0 top-0 w-[160px] h-[320px] md:w-[200px] md:h-[400px] bg-gradient-to-b from-[#2a1a2e] to-[#1b111c] rounded-[32px] border-4 border-[#3a2a3e] shadow-2xl transform rotate-6">
                {/* <div className="absolute inset-4 bg-black rounded-[24px]" /> */}
                <Image
                  src="/Rectangle_3.png"
                  alt="App screen 2"
                  fill
                  className="object-cover rounded-[28px]"
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Content */}
          <ScrollAnimation
            animation="fadeRight"
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Track Everything in
              <br />
              One App
            </h2>
            <p className="text-[#9497a1] text-base md:text-lg mb-8 max-w-md mx-auto lg:mx-0">
              Monitor mutual funds, equities, bonds, FDs, PMS & insurance in a
              secure, unified dashboard. Get statements, goal tracking and
              review reminders.
            </p>

            {/* App Store Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="https://apps.apple.com/in/app/malviya-capital/id1552145280"
                target="_blank"
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] leading-tight">
                    Download on the
                  </span>
                  <span className="text-sm font-semibold leading-tight">
                    App Store
                  </span>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.iw.malviyacapital&pcampaignid=web_share"
                target="_blank"
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M3.609 1.814L13.792 12 3.61 22.186a2.27 2.27 0 0 1-.497-.907c-.112-.38-.113-.79-.113-1.192V3.913c0-.402 0-.812.113-1.192a2.27 2.27 0 0 1 .497-.907z"
                  />
                  <path
                    fill="#FBBC04"
                    d="M17.65 8.137L14.87 9.783 13.792 12l1.077 2.217 2.78 1.647 3.465-2.05c.458-.27.888-.678.888-1.814s-.43-1.543-.888-1.814l-3.465-2.05z"
                  />
                  <path
                    fill="#4285F4"
                    d="M3.609 1.814L13.792 12l1.078-2.217-7.403-8.813a2.5 2.5 0 0 0-.717.167 2.1 2.1 0 0 0-.542.262 2.2 2.2 0 0 0-.599.415z"
                  />
                  <path
                    fill="#34A853"
                    d="M13.792 12L3.61 22.186c.161.16.362.3.6.415a2.1 2.1 0 0 0 .541.262c.246.084.49.127.717.167l7.403-8.813L13.792 12z"
                  />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] leading-tight">GET IT ON</span>
                  <span className="text-sm font-semibold leading-tight">
                    Google Play
                  </span>
                </div>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
