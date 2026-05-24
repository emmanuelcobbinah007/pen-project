"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "iconsax-reactjs";
import { useParallax } from "../hooks/useAnimations";

export default function Hero() {
  const parallaxRef = useParallax(0.15);
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pen-navy"
    >
      {/* Background image with parallax */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/penHeroSupport.png"
          alt=""
          fill
          className={`object-cover object-top transition-opacity duration-[2s] ease-out ${bgLoaded ? "opacity-50" : "opacity-0"}`}
          priority
          onLoad={() => setBgLoaded(true)}
        />
      </div>
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(27,54,93,0.92), rgba(27,54,93,0.85), rgba(59,130,246,0.5))",
        }}
      />

      {/* Decorative circles — animated */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-pen-blue/10 blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-pen-blue-light/10 blur-3xl animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 animate-circle-expand" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5 animate-circle-expand"
        style={{ animationDelay: "0.3s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-24 sm:py-0">
        {/* Logo */}
        <div className="hidden md:flex mb-8 justify-center animate-fade-in-down">
          <div className="w-[160px] h-[70px] relative overflow-hidden">
            <Image
              src="/PEN LOGO - Black&White_20260209_035921_0000(1).png"
              alt="Psyche Empowerment Network Logo"
              width={260}
              height={260}
              className="object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] brightness-0 invert"
              priority
            />
          </div>
        </div>

        {/* Main Heading — large, lowercase, serif */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight text-white lowercase tracking-tight animate-blur-in stagger-1"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          empowering minds,
          <br />
          <span className="text-pen-blue-pale animate-text-revealw inline-block">
            breaking stigma
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up stagger-3">
          Psyche Empowerment Network (PEN) advocates for accessible, stigma-free
          mental health support across Africa. Your mind matters.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-4">
          <Link
            href="#about"
            className="group bg-white text-pen-navy px-8 py-4 rounded-full text-base font-semibold tracking-wide hover:bg-pen-blue-pale hover:shadow-xl hover:shadow-white/10 transition-all duration-500 hover:-translate-y-0.5"
          >
            Learn More
          </Link>
          <Link
            href="#contact"
            className="group border border-white/30 text-white px-8 py-4 rounded-full text-base font-semibold tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-500 hover:-translate-y-0.5"
          >
            Get Involved
          </Link>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-10 sm:mt-20 animate-bounce opacity-0 stagger-5 animate-fade-in-up"
          style={{ animationDelay: "1.5s" }}
        >
          <ArrowDown size="24" className="mx-auto text-white/40" />
        </div>
      </div>
    </section>
  );
}
