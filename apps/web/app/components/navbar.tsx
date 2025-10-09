"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@triplone/ui/components/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Tour", href: "/tour" },
  { name: "Package", href: "/package" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Triplone</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Log in & Book Trip */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Log in
            </Link>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 h-10 text-sm font-medium"
            >
              <Link href="/book">Book Trip</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
