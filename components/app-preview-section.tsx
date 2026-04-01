"use client";

import Image from "next/image";
import { ScrollAnimation } from "@/components/scroll-animation";

export default function AppPreviewSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-[#1b111c] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Phone Mockups */}
          <ScrollAnimation
            animation="fadeLeft"
            className="relative flex-1 flex justify-center w-full"
          >
            <div className="relative w-full max-w-[280px] h-[400px] sm:max-w-[340px] sm:h-[500px] md:max-w-[440px] md:h-[600px]">
              {/* Left phone */}
              <div className="absolute left-0 top-8 w-[140px] h-[280px] sm:w-[170px] sm:h-[340px] md:w-[220px] md:h-[440px] bg-gradient-to-b from-[#2a1a2e] to-[#1b111c] rounded-[24px] sm:rounded-[32px] border-4 border-[#3a2a3e] shadow-2xl transform -rotate-6 transition-transform hover:rotate-0 duration-500 z-10">
                <Image
                  src="/Rectangle_2.png"
                  alt="App screen 1"
                  fill
                  className="object-cover rounded-[20px] sm:rounded-[28px]"
                />
              </div>
              {/* Right phone */}
              <div className="absolute right-0 top-0 w-[140px] h-[280px] sm:w-[170px] sm:h-[340px] md:w-[220px] md:h-[440px] bg-gradient-to-b from-[#2a1a2e] to-[#1b111c] rounded-[24px] sm:rounded-[32px] border-4 border-[#3a2a3e] shadow-2xl transform rotate-6 transition-transform hover:rotate-0 duration-500">
                <Image
                  src="/Rectangle_3.png"
                  alt="App screen 2"
                  fill
                  className="object-cover rounded-[20px] sm:rounded-[28px]"
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Content */}
          <ScrollAnimation
            animation="fadeRight"
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mb-6">
              Track Everything in <br className="hidden lg:block" />
              One App
            </h2>
            <p className="text-[#9497a1] text-base md:text-lg mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Monitor mutual funds, equities, bonds, FDs, PMS & insurance in a
              secure, unified dashboard. Get statements, goal tracking and
              review reminders.
            </p>

            {/* App Store Badges */}
            <div className="flex flex-row sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 w-full">
              {/* App Store */}
              <a
                href="https://apps.apple.com/in/app/malviya-capital/id1552145280"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto justify-center sm:justify-start"
              >
                <Image
                  src="/app-store.png"
                  alt="App Store"
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wide font-medium text-gray-500">
                    Download on the
                  </span>
                  <span className="text-xs sm:text-sm font-semibold">
                    App Store
                  </span>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.iw.malviyacapital&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto justify-center sm:justify-start"
              >
                <Image
                  src="/google-play.png"
                  alt="Google Play"
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wide font-medium text-gray-500">
                    Get it on
                  </span>
                  <span className="text-xs sm:text-sm font-semibold">
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
