"use client";

import Link from "next/link";
import { Button } from "@triplone/ui/components/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Tour", href: "/tour" },
  { name: "Package", href: "/package" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  return (
    <nav className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-primary text-2xl font-bold">Triplone</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-primary text-sm font-medium text-gray-700 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Log in & Book Trip */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hover:text-primary text-sm font-medium text-gray-700 transition-colors"
            >
              Log in
            </Link>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 h-10 rounded-full px-6 text-sm font-medium text-white"
            >
              <Link href="/book">Book Trip</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
