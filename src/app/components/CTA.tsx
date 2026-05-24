"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks/useAnimations";

export default function CTA() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-pen-blue via-pen-navy to-pen-navy relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-pen-blue-light/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5" />

      <div
        ref={sectionRef}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white lowercase leading-tight transition-all duration-1000 ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"}`}
          style={{ fontFamily: "var(--font-serif)" }}
        >
          ready to make
          <br />
          <span className="text-pen-blue-pale">a difference?</span>
        </h2>

        <p
          className={`mt-8 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Join the Psyche Empowerment Network and become part of a growing
          movement that&apos;s transforming mental health across Africa. Your
          voice matters.
        </p>

        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Link
            href="#contact"
            className="bg-white text-pen-navy px-10 py-4 rounded-full text-base font-semibold tracking-wide hover:bg-pen-blue-pale hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started Today
          </Link>
          <Link
            href="#about"
            className="border border-white/30 text-white px-10 py-4 rounded-full text-base font-semibold tracking-wide hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
