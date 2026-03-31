"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  FileText,
  TrendingUp,
  PieChart,
  Shield,
  Briefcase,
  FileCheck,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const services = [
  {
    title: "Loans Consultancy",
    description:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus bibendum dui pretium mi turpis.",
    icon: FileText,
    slug: "loans-consultancy",
  },
  {
    title: "Mutual Funds",
    description:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus bibendum dui pretium mi turpis.",
    icon: TrendingUp,
    slug: "mutual-funds",
  },
  {
    title: "Wealth Planning",
    description:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus bibendum dui pretium mi turpis.",
    icon: PieChart,
    slug: "wealth-planning",
  },
  {
    title: "Insurance Guidance",
    description:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus bibendum dui pretium mi turpis.",
    icon: Shield,
    slug: "insurance-guidance",
  },
  {
    title: "Portfolio Management Services",
    description:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus bibendum dui pretium mi turpis.",
    icon: Briefcase,
    slug: "portfolio-management",
  },
  {
    title: "Corporate and Govt Bonds",
    description:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus bibendum dui pretium mi turpis.",
    icon: FileCheck,
    slug: "corporate-bonds",
  },
  {
    title: "Corporate Fixed Deposits",
    description:
      "Lorem ipsum dolor sit amet consectetur. Rhoncus bibendum dui pretium mi turpis.",
    icon: FileText,
    slug: "fixed-deposits",
  },
];

export default function Header() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full py-4 px-6 md:px-12 bg-[#1b111c] relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <Image
              src="/malaviyalogo.png" // make sure file is inside /public
              alt="Logo"
              width={120}
              height={40}
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Navigation */}
        {/* <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-white text-sm hover:text-[#ff0007] transition-colors"
          >
            About Us
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <button className="text-white text-sm hover:text-[#ff0007] transition-colors cursor-pointer">
              Services
            </button>


            {showServicesDropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[900px] z-50">
                <div className="bg-[#2a1f2e] rounded-2xl shadow-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={`/services/${service.slug}`}
                        className="flex items-start gap-4 p-4 rounded-xl bg-[#1b111c] hover:bg-[#251a28] transition-colors group"
                      >
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            background:
                              "linear-gradient(to bottom, #ff0007, #8b0000)",
                          }}
                        >
                          <service.icon
                            className="w-6 h-6 text-white"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1 group-hover:text-[#ff0007] transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-[#9497a1] text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link
            href="/blog"
            className="text-white text-sm hover:text-[#ff0007] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-white text-sm hover:text-[#ff0007] transition-colors"
          >
            Contact
          </Link>
        </nav>  */}

 <nav className="hidden md:flex items-center gap-8">
  <Link
    href="/about"
    className={`text-sm transition-colors ${
      pathname === "/about"
        ? "text-[#ff0007]"
        : "text-white hover:text-[#ff0007]"
    }`}
  >
    About Us
  </Link>

  <div
    className="relative"
    onMouseEnter={() => setShowServicesDropdown(true)}
    onMouseLeave={() => setShowServicesDropdown(false)}
  >
    <button
      className={`text-sm transition-colors ${
        pathname.startsWith("/services")
          ? "text-[#ff0007]"
          : "text-white hover:text-[#ff0007]"
      }`}
    >
      Services
    </button>

    {showServicesDropdown && (
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[900px] z-50">
        <div className="bg-[#2a1f2e] rounded-2xl shadow-2xl p-8">
          <div className="grid grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className={`flex items-start gap-4 p-4 rounded-xl transition-colors group ${
                  pathname === `/services/${service.slug}`
                    ? "bg-[#251a28]"
                    : "bg-[#1b111c] hover:bg-[#251a28]"
                }`}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, #ff0007, #8b0000)",
                  }}
                >
                  <service.icon
                    className="w-6 h-6 text-white"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold mb-1 transition-colors ${
                      pathname === `/services/${service.slug}`
                        ? "text-[#ff0007]"
                        : "text-white group-hover:text-[#ff0007]"
                    }`}
                  >
                    {service.title}
                  </h4>
                  <p className="text-[#9497a1] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )}
  </div>

  <Link
    href="/blog"
    className={`text-sm transition-colors ${
      pathname.startsWith("/blog")
        ? "text-[#ff0007]"
        : "text-white hover:text-[#ff0007]"
    }`}
  >
    Blog
  </Link>

  <Link
    href="/contact"
    className={`text-sm transition-colors ${
      pathname === "/contact"
        ? "text-[#ff0007]"
        : "text-white hover:text-[#ff0007]"
    }`}
  >
    Contact
  </Link>
</nav>
        {/* Login Button */}
        <Link
          href="https://malviyacapital.investwell.app/app/#/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-[#ff0007] hover:bg-[#cc0006] text-white px-6 text-sm font-medium py-4 rounded-md">
            Login
          </Button>
        </Link>
      </div>
    </header>
  );
}
