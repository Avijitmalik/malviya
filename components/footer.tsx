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
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Contacts", href: "/contact" },
  { name: "About Us", href: "/about" },
  { name: "FAQ", href: "/faq" },
];

const serviceLinks = [
  { name: "Loans Consultancy", href: "/services/loans-consultancy" },
  { name: "Mutual Funds", href: "/services/mutual-funds" },
  { name: "Wealth Planning", href: "/services/wealth-planning" },
  { name: "Insurance Guidance", href: "/services/insurance-guidance" },
  { name: "Portfolio Management Services", href: "/services/portfolio-management" },
  { name: "Corporate and Govt Bonds", href: "/services/corporate-bonds" },
  { name: "Corporate Fixed Deposits", href: "/services/fixed-deposits" },
]

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
              Everything you need to know about navigating your financial
              journey with Malviya Capital.
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
                  href="mailto:services@malviyacapital.com"
                  className="text-[#9497a1] text-sm hover:text-[#ff0007] transition-colors"
                >
                  services@malviyacapital.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+16012015580"
                  className="text-[#9497a1] text-sm hover:text-[#ff0007] transition-colors"
                >
                  +91 9836432398
                </a>
              </li>
              <li className="text-[#9497a1] text-sm">
                24A, 1st Floor, Parijat Building, Shakespeare Sarani, Elgin, Kolkata, West Bengal 700017
              </li>
            </ul>
            {/* Map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-white/10">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.910497090307!2d88.3528762!3d22.5450253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277da58fafcb9%3A0xdc962de8215bad47!2sMalviya%20Capital!5e0!3m2!1sen!2sin!4v1774965230321!5m2!1sen!2sin" width="300" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#5a5a74]/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#9497a1] text-sm">
            Malviya Capital.© 2026 All Rights Reserved
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
