"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: `I had a great experience with Malviya Capital for my mutual fund investments. Their team provided clear guidance and helped me choose the right funds based on my financial goals and risk profile. The entire process was well-managed. I truly appreciate their professionalism and timely support. I would highly recommend Malviya Capital to anyone looking for reliable advice on mutual fund investments.

-Jitendra Sirohia`,
    author: "Ankkit Modi",
    role: "Managing Director of Jaya Coconut Oil Pvt. Ltd. & N.K.K.M Industries Pvt. Ltd.",
  },
  {
    quote: `Working with Malviya Capital has been a seamless experience for my loan and investment planning. Their team provided practical advice and ensured I understood every step of the process. I value their honest approach and timely assistance, which made everything much easier to manage. Highly recommended for anyone seeking dependable financial guidance.`,
    author: "Vikash Kochar",
    role: "Director of Best Buy Air Condition",
  },
  {
    quote: `Malviya Capital has been a reliable partner in managing my loan requirements and investments. Their expertise and structured approach helped me make well-informed financial decisions. The team is proactive, supportive, and always available to address queries. I am very satisfied with their services and would gladly recommend them.`,
    author: "Sajjan Kumar Shroff",
    role: "Director of Ramson Group",
  },
  {
    quote: `I am extremely satisfied with the support I received from Malviya Capital for my loan requirements. They offered personalized solutions that aligned perfectly with my financial needs. The entire experience has been smooth, transparent, and professionally handled. I truly appreciate their dedication and would recommend their loan services without hesitation.`,
    author: "Sandeep Ghosh",
    role: "Director of DCPL",
  },
  {
    quote: `Malviya Capital provided clear and reliable guidance for my mutual fund investments. Their team made the process simple and easy to follow. I’m very satisfied with their support.`,
    author: "Ankkit Modi",
    role: "Managing Director of Jaya Coconut Oil Pvt. Ltd. & N.K.K.M Industries Pvt. Ltd.",
  },
];

export default function TestimonialCarousel() {
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
    <section className="py-20 px-4 bg-[#1b111c]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          What Our Clients Say
        </h2>

        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index}>
                <div className="bg-[#251a28] border border-white/10 rounded-2xl p-8 md:p-12 text-left">
                  <p className="text-[#d1d5db] text-lg leading-relaxed mb-6 italic">
                    "{item.quote}"
                  </p>

                  <h4 className="text-[#ff0007] font-semibold text-lg">
                    - {item.author}
                  </h4>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2.5 rounded-full transition-all ${
                  current === index ? "w-8 bg-[#ff0007]" : "w-2.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
