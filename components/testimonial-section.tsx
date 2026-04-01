"use client";

import Image from "next/image";
import { useEffect, useState, type SVGProps } from "react";
import { ScrollAnimation } from "@/components/scroll-animation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "I’ve had a very positive experience working with Malviya Capital for my loan and investment needs. Their team is knowledgeable, responsive, and truly focused on understanding client requirements. I appreciate their professionalism and commitment to delivering the right financial solutions. I would highly recommend Malviya Capital to anyone looking for trustworthy support in loans and investments.",
    name: "Ankkit Modi",
    role: "Managing Director of Jaya Coconut Oil Pvt. Ltd. & N.K.K.M Industries Pvt. Ltd.",
    avatar:
      "/placeholder.svg?height=48&width=48&query=professional woman headshot",
  },
  {
    quote:
      "I had a great experience with Malviya Capital for my mutual fund investments. Their team provided clear guidance and helped me choose the right funds based on my financial goals and risk profile. The entire process was well-managed. I truly appreciate their professionalism and timely support. I would highly recommend Malviya Capital to anyone looking for reliable advice on mutual fund investments.",
    name: "Jitendra Sirohia",
    role: "",
    avatar:
      "/placeholder.svg?height=48&width=48&query=professional man headshot",
  },
  {
    quote:
      "Working with Malviya Capital has been a seamless experience for my loan and investment planning. Their team provided practical advice and ensured I understood every step of the process. I value their honest approach and timely assistance, which made everything much easier to manage. Highly recommended for anyone seeking dependable financial guidance.",
    name: "Vikash Kochar",
    role: "Director of Best Buy Air Condition",
    avatar: "/placeholder.svg?height=48&width=48&query=business woman headshot",
  },
  {
    quote:
      "Malviya Capital has been a reliable partner in managing my loan requirements and investments. Their expertise and structured approach helped me make well-informed financial decisions. The team is proactive, supportive, and always available to address queries. I am very satisfied with their services and would gladly recommend them.",
    name: "Sajjan Kumar Shroff",
    role: "Director of Ramson Group",
    avatar: "/placeholder.svg?height=48&width=48&query=business woman headshot",
  },
  {
    quote:
      "I am extremely satisfied with the support I received from Malviya Capital for my loan requirements. They offered personalized solutions that aligned perfectly with my financial needs. The entire experience has been smooth, transparent, and professionally handled. I truly appreciate their dedication and would recommend their loan services without hesitation.",
    name: "Sandeep Ghosh",
    role: "Director of DCPL",
    avatar: "",
  },
  {
    quote:
      "Malviya Capital provided clear and reliable guidance for my mutual fund investments. Their team made the process simple and easy to follow. I’m very satisfied with their support",
    name: "C.A Sumit Kumar Meharia",
    role: "",
    avatar: "",
  },
  {
    quote:
      "I had a smooth experience investing in mutual funds with Malviya Capital. Their advice was practical and well-suited to my needs. Highly recommended for investment support.",
    name: "Soumen Mahapatra",
    role: "",
    avatar: "",
  },
];

function QuoteIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  const gradientId = `quoteGradient-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      {...props}
      className={className}
      viewBox="0 0 48 48"
      fill="none"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff0007" />
          <stop offset="100%" stopColor="#8b0000" />
        </linearGradient>
      </defs>

      <path
        d="M14 24H8c0-5.52 4.48-10 10-10v4c-3.31 0-6 2.69-6 6h6v12H8V24h6zm20 0h-6c0-5.52 4.48-10 10-10v4c-3.31 0-6 2.69-6 6h6v12h-10V24h6z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
}

export function TestimonialSection() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Track slide
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto slide
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 px-4 bg-[#1b111c] overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <ScrollAnimation animation="fadeUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Testimonial
          </h2>
          <p className="text-[#9497a1] text-center max-w-3xl mx-auto mb-12">
            Monitor mutual funds, equities, bonds, FDs, PMS & insurance in a secure dashboard.
          </p>
        </ScrollAnimation>

        {/* Mobile → Grid */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-2xl border border-white/10 bg-white/5"
            >
              <p className="text-white text-sm leading-relaxed mb-6">
                {testimonial.quote}
              </p>

              <div className="flex items-end justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <span className="text-white font-medium text-sm">
                    {testimonial.name}
                  </span>
                </div>

                <QuoteIcon className="w-10 h-10" />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop → Carousel */}
        <div className="hidden md:block">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4 py-10">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className={`flex flex-col p-6 rounded-2xl border border-white/10 h-full transition-all duration-500 bg-white/5 ${
                      current === index
                        ? "scale-105 shadow-xl"
                        : "scale-90 opacity-60"
                    }`}
                  >
                    <p className="text-white text-sm sm:text-base leading-relaxed mb-6">
                      {testimonial.quote}
                    </p>

                    <div className="flex items-end justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                        <span className="text-white font-medium text-sm sm:text-base">
                          {testimonial.name}
                        </span>
                      </div>

                      <QuoteIcon className="w-10 h-10 sm:w-12 sm:h-12" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    current === index
                      ? "bg-[#ff0007] w-6"
                      : "bg-white/30 w-2.5"
                  }`}
                />
              ))}
            </div>
          </Carousel>
        </div>

      </div>
    </section>
  );
}
