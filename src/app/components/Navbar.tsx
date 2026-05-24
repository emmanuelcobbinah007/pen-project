"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#services" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", "about", "services", "impact", "contact"];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Mobile Menu Overlay — rendered outside nav to avoid backdrop-filter containing block */}
      <div
        className={`md:hidden fixed inset-0 bg-white transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 9999 }}
      >
        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-6 z-10 flex flex-col gap-1.5"
          aria-label="Close menu"
        >
          <span className="block w-6 h-0.5 bg-pen-navy rotate-45 translate-y-2 transition-all duration-300" />
          <span className="block w-6 h-0.5 bg-pen-navy opacity-0 transition-all duration-300" />
          <span className="block w-6 h-0.5 bg-pen-navy -rotate-45 -translate-y-2 transition-all duration-300" />
        </button>

        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-pen-navy text-2xl font-serif lowercase tracking-wide hover:text-pen-blue transition-colors"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="bg-pen-blue text-white px-8 py-3 rounded-full text-lg font-semibold mt-4 hover:bg-pen-blue-light transition-all"
          >
            Get Involved
          </Link>
        </div>
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-pen-blue transition-none"
          style={{ width: `${progress}%`, opacity: scrolled ? 1 : 0 }}
        />
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center overflow-hidden">
            <div className="w-[200px] h-[65px] relative -my-2">
              <Image
                src="/PEN LOGO - Black&White_20260209_035921_0000(1).png"
                alt="PEN Logo"
                width={400}
                height={400}
                priority
                className={`object-contain absolute left-1/2 -translate-x-1/2 w-[280px] h-[280px] transition-all duration-300 ${
                  scrolled ? "" : "brightness-0 invert"
                }`}
                style={{ top: "50%", transform: "translate(-50%, -47%)" }}
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-pen-blue ${
                    scrolled
                      ? isActive ? "text-pen-blue" : "text-pen-dark"
                      : isActive ? "text-white" : "text-white/70"
                  }`}
                >
                  {link.label}
                  {/* Active underline dot */}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-pen-blue transition-all duration-300 ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              href="#contact"
              className={`hover:bg-pen-blue-light px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-pen-blue/25 ${scrolled ? "text-white bg-pen-dark " : "text-pen-dark bg-pen-white"}`}
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-pen-navy" : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-pen-navy" : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-pen-navy" : "bg-white"
              }`}
            />
          </button>
        </div>
      </nav>
    </>
  );
}
