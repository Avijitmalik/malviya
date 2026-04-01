import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AppPreviewSection from "@/components/app-preview-section";
import WhyChooseUsSection from "@/components/why-choose-us-section";
import CTASection from "@/components/cta-section";
import { ServicesSection } from "@/components/services-section";
import { StatsSection } from "@/components/stats-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { VideoTestimonialSection } from "@/components/video-testimonial-section";
import { BlogSection } from "@/components/blog-section";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import Footer from "@/components/footer";
import TestimonialCarousel from "@/components/testinomial";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1b111c]">
      <Header />
      <HeroSection />
      <AppPreviewSection />
      <WhyChooseUsSection />
      <CTASection />
      <ServicesSection />
      <StatsSection />
      <TestimonialSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
