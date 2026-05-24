"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "../hooks/useAnimations";

const footerLinks = {
  Organization: [
    { label: "About PEN", href: "#about" },
    { label: "Our Mission", href: "#about" },
    { label: "What We Do", href: "#services" },
    { label: "Our Impact", href: "#impact" },
  ],
  Resources: [
    { label: "Mental Health Tips", href: "#" },
    { label: "Workshops & Events", href: "#" },
    { label: "Research & Articles", href: "#" },
    { label: "Self-Help Tools", href: "#" },
  ],
  "Get Involved": [
    { label: "Volunteer", href: "#contact" },
    { label: "Partner With Us", href: "#contact" },
    { label: "Donate", href: "#contact" },
    { label: "Become an Advocate", href: "#contact" },
  ],
};

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [footerRef, footerVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <footer id="contact" className="bg-pen-black pt-20 pb-8">
      <div ref={footerRef} className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div
            className={`md:col-span-2 transition-all duration-700 ${footerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/PEN LOGO - Black&White_20260209_035921_0000(1).png"
                alt="PEN Logo"
                width={45}
                height={45}
                className="object-contain brightness-0 invert"
              />
              <div>
                <span
                  className="text-white font-bold text-xl block"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  PEN
                </span>
                <span className="text-white/40 text-xs tracking-wider uppercase">
                  Psyche Empowerment Network
                </span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-8">
              Empowering minds, breaking stigma, and advocating for accessible
              mental health support across Africa. Your mind matters — and so do
              you.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-pen-blue hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links], colIndex) => (
            <div
              key={title}
              className={`transition-all duration-700 ${footerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: footerVisible
                  ? `${(colIndex + 1) * 0.12}s`
                  : "0s",
              }}
            >
              <h4
                className="text-white font-semibold text-sm tracking-wider uppercase mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/40 text-sm hover:text-pen-blue-light transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Psyche Empowerment Network (PEN).
            All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-white/30 text-sm hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white/30 text-sm hover:text-white/60 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
