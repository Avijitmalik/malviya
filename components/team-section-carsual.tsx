"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export interface SocialLogo {
  id?: string;
  name: string;
  imageUrl?: string | null;
}

export interface SocialTestimonial {
  id?: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  imageUrl?: string | null;
}



interface SocialProofProps {
  logos?: SocialLogo[];
  testimonials?: SocialTestimonial[];
}

function TestimonialCard({
  testimonial,
  index,
  isInView,
  isActive = false,
  isCarousel = false,
}: {
  testimonial: SocialTestimonial;
  index: number;
  isInView: boolean;
  isActive?: boolean;
  isCarousel?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const quote = testimonial.quote;
  const isLong = quote.length > 150;
  const displayQuote =
    isExpanded || !isLong ? quote : quote.slice(0, 150) + "...";

  const initials = testimonial.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className={`bg-white border border-[#5D152D]/5 shadow-sm rounded-2xl p-8 relative transition-all duration-700 h-full flex flex-col group hover:shadow-xl ${
        isCarousel 
          ? isActive 
            ? "scale-105 md:scale-110 z-10 shadow-xl border-[#5D152D]/20 ring-1 ring-[#5D152D]/5" 
            : "scale-90 opacity-60 grayscale-[0.5]"
          : "hover:-translate-y-1"
      } ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: isCarousel ? "0ms" : `${index * 150 + 300}ms` }}
    >
      <div className="absolute -top-4 left-8 text-6xl text-[#5D152D]/10 font-serif transition-colors group-hover:text-[#5D152D]/20">
        &ldquo;
      </div>
      <div className="text-foreground/80 mb-6 leading-relaxed relative z-10 flex-grow text-sm md:text-base italic">
        <blockquote className="inline">{displayQuote}</blockquote>
        {isLong && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#5D152D] font-semibold text-sm ml-1 hover:underline focus:outline-none block mt-2 not-italic"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[#5D152D]/5">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#5D152D]/10 to-[#5D152D]/20 flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-white shadow-sm">
          {testimonial.imageUrl ? (
            <img
              src={testimonial.imageUrl}
              alt={testimonial.author}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "";
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          ) : (
            <span className="text-lg font-bold text-[#5D152D]">{initials}</span>
          )}
        </div>
        <div>
          <p className="font-bold text-[#5D152D] leading-tight mb-1">
            {testimonial.author}
          </p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
            {testimonial.role} <span className="mx-1 text-[#5D152D]/30">•</span> {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export function SocialProof({ logos, testimonials }: SocialProofProps) {
  const displayLogos = logos || [];
  const displayTestimonials = testimonials || [];

  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api]);

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5D152D] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've partnered with organizations across industries to deliver
            measurable HR outcomes.
          </p>
        </div>

        {/* Logo Carousel */}
        {displayLogos.length > 0 && (
          <div className="relative mb-24">
            <div 
              className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
            >
              <div className="flex animate-scroll-left hover:[animation-play-state:paused]">
                {[...displayLogos, ...displayLogos, ...displayLogos, ...displayLogos].map(
                  (logo, index) => (
                    <div
                      key={`${logo.id || index}-${index}`}
                      className="flex-shrink-0 mx-8 w-32 h-16 flex items-center justify-center  opacity-60 hover:opacity-100 transition-all duration-300"
                    >
                      <Image
                        src={logo.imageUrl || "/placeholder.svg"}
                        alt={logo.name}
                        width={128}
                        height={64}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        )}

        {/* Testimonials */}
        {displayTestimonials.length > 0 && (
          <div className="max-w-7xl mx-auto">
          {/* Mobile View: Grid */}
          <div className="grid grid-cols-1 gap-8 md:hidden">
            {displayTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id || index}
                testimonial={testimonial}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Desktop/Tablet View: Carousel */}
          <div className="hidden md:block">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 py-12">
                {displayTestimonials.map((testimonial, index) => (
                  <CarouselItem key={testimonial.id || index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <TestimonialCard
                      testimonial={testimonial}
                      index={index}
                      isInView={isInView}
                      isActive={current === index}
                      isCarousel={true}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      current === index 
                        ? "bg-[#5D152D] w-8" 
                        : "bg-[#5D152D]/20 hover:bg-[#5D152D]/40"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      )}
    </div>
  </section>
);
}
