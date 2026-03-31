import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Mail,
} from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contacts", href: "#" },
  { name: "Our team", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
  { name: "FAQ", href: "#" },
];

const serviceLinks = [
  { name: "Pages", href: "#" },
  { name: "Elements", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Site map", href: "#" },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Mail, href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="w-full pt-16 pb-8 px-6 md:px-12 backdrop-blur-md border-t border-white/10"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            {/* Logo */}
            <Link href="/" className="flex items-center mb-6">
              <div className="flex items-center justify-center">
                <Image
                  src="/malaviyalogo.png"
                  alt="Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-[#9497a1] text-sm leading-relaxed mb-6">
             Everything you need to know about navigating your financial journey with Malviya Capital.

            </p>
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 bg-[#5a5a74]/40 rounded-full flex items-center justify-center hover:bg-[#ff0007] transition-colors"
                >
                  <social.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick link</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#9497a1] text-sm hover:text-[#ff0007] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h3 className="text-white font-semibold mb-6">Service</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#9497a1] text-sm hover:text-[#ff0007] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Cantact info</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:ensome@info.co.us"
                  className="text-[#9497a1] text-sm hover:text-[#ff0007] transition-colors"
                >
                  ensome@info.co.us
                </a>
              </li>
              <li>
                <a
                  href="tel:+16012015580"
                  className="text-[#9497a1] text-sm hover:text-[#ff0007] transition-colors"
                >
                  +1 601-201-5580
                </a>
              </li>
              <li className="text-[#9497a1] text-sm">
                1642 Washington Avenue, Jackson,
                <br />
                MS, Mississippi, 39201
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#5a5a74]/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#9497a1] text-sm">
            Ensome© 2022 All Rights Reserved
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="text-[#9497a1] text-sm hover:text-[#ff0007] transition-colors"
            >
              Privacy policy
            </Link>
            <Link
              href="#"
              className="text-[#9497a1] text-sm hover:text-[#ff0007] transition-colors"
            >
              Terms of us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
