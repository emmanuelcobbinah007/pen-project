"use client";

import Link from "next/link";
import { ArrowRight } from "iconsax-reactjs";
import { useScrollReveal } from "../hooks/useAnimations";

const bodies = [
  {
    name: "PEN Research Consult",
    description:
      "Feeling weighed down by depression or persistent sadness? Our compassionate therapists support you in restoring emotional balance, hope, and inner strength — one step at a time.",
    accent: "bg-pen-blue/20",
    delay: "0s",
  },
  {
    name: "PEN Outreach Foundation",
    description:
      "Feeling overwhelmed by stress or constant pressure? Our supportive therapists help you regain calm, clarity, and control in your daily life.",
    accent: "bg-white/10",
    delay: "0.15s",
  },
];

export default function FunctionalBodies() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="py-24 md:py-32 bg-pen-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <div
            className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${headerVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div className={`h-[2px] bg-pen-blue transition-all duration-1000 delay-100 ${headerVisible ? "w-12" : "w-0"}`} />
            <span className="text-pen-blue text-sm font-semibold tracking-widest uppercase">Our Structure</span>
            <div className={`h-[2px] bg-pen-blue transition-all duration-1000 delay-100 ${headerVisible ? "w-12" : "w-0"}`} />
          </div>
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl text-pen-navy lowercase leading-tight transition-all duration-1000 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "var(--font-serif)" }}
          >
            our functional
            <br />
            <span className="text-pen-blue">bodies</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-5"
        >
          {bodies.map((body, i) => (
            <div
              key={body.name}
              className={`group relative bg-pen-navy rounded-3xl p-10 md:p-12 overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pen-navy/30 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: cardsVisible ? body.delay : "0s" }}
            >
              {/* Decorative blobs */}
              <div className={`absolute -top-10 -right-10 w-48 h-48 rounded-full ${body.accent} blur-2xl pointer-events-none`} />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/[0.03] blur-xl pointer-events-none" />

              {/* Number tag */}
              <span
                className="text-white/10 text-8xl font-bold absolute top-6 right-8 select-none leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                0{i + 1}
              </span>

              <div className="relative z-10 flex flex-col h-full min-h-[260px] justify-between">
                <div>
                  <h3
                    className="text-white font-bold text-2xl md:text-3xl leading-tight mb-5 group-hover:text-pen-blue-pale transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {body.name}
                  </h3>
                  <p className="text-white/55 text-base leading-relaxed max-w-sm">
                    {body.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-white/30 group-hover:text-pen-blue-light transition-colors duration-300">
                  <span className="text-xs font-semibold tracking-widest uppercase">Learn more</span>
                  <ArrowRight size="14" className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 flex justify-center transition-all duration-700 delay-300 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <Link
            href="#contact"
            className="bg-pen-navy text-white px-10 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-pen-blue hover:shadow-lg hover:shadow-pen-blue/25 hover:-translate-y-0.5 transition-all duration-300"
          >
            Become a Member / Sign Up
          </Link>
        </div>

      </div>
    </section>
  );
}
