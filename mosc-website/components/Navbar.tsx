"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md border-b border-[#e5e2db] shadow-sm" : "bg-white/80 backdrop-blur-md border-b border-[#e5e2db]"
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6" aria-label="Main navigation">
        <Link href="/" className="text-xl font-extrabold tracking-[-0.06em] text-[#202124]" aria-label="MOSC Home">
          MOSC
        </Link>

        <div className="hidden md:flex md:items-center md:gap-8">
          <Link href="/about" className="text-sm font-medium text-[#55544f] transition-colors hover:text-[#a14f32]">About</Link>
          <Link href="/blog" className="text-sm font-medium text-[#55544f] transition-colors hover:text-[#a14f32]">Blog</Link>
          <Link href="/contact" className="text-sm font-medium text-[#55544f] transition-colors hover:text-[#a14f32]">Contact</Link>
        </div>

        <button
          className="md:hidden p-2 text-[#55544f]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-[#e5e2db] bg-white px-6 py-4 animate-slide-down">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            <Link href="/about" className="text-base font-medium text-[#55544f] transition-colors hover:text-[#a14f32] py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="/blog" className="text-base font-medium text-[#55544f] transition-colors hover:text-[#a14f32] py-2" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
            <Link href="/contact" className="text-base font-medium text-[#55544f] transition-colors hover:text-[#a14f32] py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}