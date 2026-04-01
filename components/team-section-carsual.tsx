"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const teamData = [
  {
    role: "Senior Financial Advisor",
    description: "Dedicated to your financial success",
    image: "/mal-award-1.png",
  },
  {
    role: "Investment Specialist",
    description: "Helping you grow wealth strategically",
     image: "/mal-award-2.png",
  },
  {
    role: "Wealth Manager",
    description: "Focused on long-term financial stability",
     image: "/mal-award-3-3.png",
  },
  {
    role: "Risk Advisor",
    description: "Managing and minimizing financial risks",
       image: "/mal-award-4.png",
  },
  {
    role: "Tax Consultant",
    description: "Optimizing your tax efficiency",
     image: "/mal-award-6.png",
  },
];

export default function TeamCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1b111c] to-[#2d1f35]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 capitalize">
          our award recognized
        </h2>

        <p className="text-[#9497a1] max-w-3xl mx-auto mb-16">
          Our team of experienced financial advisors and specialists are committed to delivering exceptional service.
        </p>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {teamData.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div
                  className={`p-6 rounded-2xl border border-white/10 transition-all duration-500 ${
                    current === index
                      ? "scale-105 bg-[#251a28]"
                      : "opacity-60 scale-90"
                  }`}
                >
                  {/* Image */}
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.role}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.role}
                  </h3>
                  <p className="text-[#9497a1]">{item.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {teamData.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2.5 rounded-full transition-all ${
                  current === index
                    ? "w-8 bg-[#ff0007]"
                    : "w-2.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}