import Link from "next/link";
import { Facebook, Twitter, Youtube, Instagram, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { name: "Popular Destinations", href: "/destinations" },
  { name: "Tour Package", href: "/packages" },
  { name: "Travel Agencies", href: "/agencies" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Hotel Booking", href: "/services/hotels" },
  { name: "Flight Reservation", href: "/services/flights" },
  { name: "Tour Guide Services", href: "/services/guides" },
  { name: "Transportation", href: "/services/transportation" },
  { name: "Travel Insurance", href: "/services/insurance" },
];

const footerLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Teams and Services", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="bg-[#0E6B85] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold">Tripl<span className="text-[#4ECDC4]">o</span>ne</h3>
              <p className="text-sm text-white/90 mt-1">Discover Bangladesh</p>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Your trusted partner for exploring the natural beauty and rich culture of Bangladesh. From pristine beaches to lush tea gardens, we make your journey unforgettable.
            </p>
            <div className="flex gap-3 pt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-[#4ECDC4] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-[#4ECDC4] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="hover:text-[#4ECDC4] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-[#4ECDC4] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/90 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-white/90 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-white/90">
                  123 Gulshan Avenue<br />
                  Dhaka 1212, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <Link href="tel:+8801700000000" className="text-white/90 hover:text-white transition-colors">
                  +880 1700-000000
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <Link href="mailto:info@travelbd.com" className="text-white/90 hover:text-white transition-colors">
                  info@travelbd.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Exploravilla. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
