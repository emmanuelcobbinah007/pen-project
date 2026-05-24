"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks/useAnimations";

const conditions = [
  {
    label: "Depressed",
    body: "Feeling weighed down by depression or persistent sadness? Our compassionate therapists support you in restoring emotional balance, hope, and inner strength over time.",
    accent: "bg-pen-blue/20",
  },
  {
    label: "Stress",
    body: "Feeling overwhelmed by stress or constant pressure? Our supportive therapists help you regain calm, clarity, and control in your daily life.",
    accent: "bg-white/10",
  },
  {
    label: "Disoriented",
    body: "Feeling disoriented, mentally scattered, or emotionally ungrounded? Our supportive therapists help you regain clarity, stability, and inner direction over time.",
    accent: "bg-white/10",
  },
  {
    label: "Grief / Sorrow",
    body: "Struggling with grief, loss, or painful life transitions? Our compassionate therapists support you through healing, emotional recovery, and rediscovering meaning again.",
    accent: "bg-pen-blue/20",
  },
];

export default function ResilientTool() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  const vis = (i: number) => ({
    className: gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
    style: { transitionDelay: gridVisible ? `${i * 0.12}s` : "0s" },
  });

  return (
    <section className="py-24 md:py-32 bg-pen-ash/50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-14 max-w-3xl mx-auto">
          <div
            className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${headerVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div className={`h-[2px] bg-pen-blue transition-all duration-1000 delay-100 ${headerVisible ? "w-12" : "w-0"}`} />
            <span className="text-pen-blue text-sm font-semibold tracking-widest uppercase">RESILIENTool</span>
            <div className={`h-[2px] bg-pen-blue transition-all duration-1000 delay-100 ${headerVisible ? "w-12" : "w-0"}`} />
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl text-pen-navy lowercase leading-tight transition-all duration-1000 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "var(--font-serif)" }}
          >
            simply and conveniently build
            <br />
            <span className="text-pen-blue">a resilient mind</span>
          </h2>
          <p
            className={`mt-4 text-pen-grey text-base leading-relaxed transition-all duration-700 delay-400 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Talk to a Mental Health Professional, Therapist, or Counsellor —
            wherever you are on your journey.
          </p>
        </div>

        {/* 2×2 grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto"
        >
          {conditions.map((c, i) => (
            <div
              key={c.label}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
              }}
              className={`group relative bg-pen-navy rounded-3xl p-8 overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pen-navy/30 ${vis(i).className}`}
              style={vis(i).style}
            >
              {/* Mouse-following glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(280px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(37,99,235,0.18), transparent 70%)" }}
              />
              <div className={`absolute -top-8 -right-8 w-40 h-40 rounded-full ${c.accent} blur-2xl pointer-events-none`} />

              <div className="relative z-10">
                <h3
                  className="text-white font-bold text-xl uppercase tracking-wide mb-3 group-hover:text-pen-blue-pale transition-colors duration-300"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {c.label}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 flex justify-center transition-all duration-700 delay-500 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <Link
            href="#contact"
            className="bg-pen-navy text-white px-10 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-pen-blue hover:shadow-lg hover:shadow-pen-blue/25 hover:-translate-y-0.5 transition-all duration-300"
          >
            RESILIENTool / Therapy
          </Link>
        </div>

      </div>
    </section>
  );
}
