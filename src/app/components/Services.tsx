"use client";

import {
  Microphone2,
  Teacher,
  People,
  DocumentText,
  UserTick,
  Building4,
  ArrowRight,
} from "iconsax-reactjs";
import { useScrollReveal } from "../hooks/useAnimations";

export default function Services() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
  });
  const [gridRef, gridVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.05,
  });

  const vis = (delay: number) => ({
    className: gridVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-12",
    style: { transitionDelay: gridVisible ? `${delay}s` : "0s" },
  });

  return (
    <section id="services" className="py-24 md:py-32 bg-pen-ash">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-16">
          <div
            className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${headerVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className={`h-[2px] bg-pen-blue transition-all duration-1000 delay-100 ${headerVisible ? "w-12" : "w-0"}`}
            />
            <span className="text-pen-blue text-sm font-semibold tracking-widest uppercase">
              What We Do
            </span>
            <div
              className={`h-[2px] bg-pen-blue transition-all duration-1000 delay-100 ${headerVisible ? "w-12" : "w-0"}`}
            />
          </div>
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl text-pen-navy lowercase leading-tight transition-all duration-1000 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "var(--font-serif)" }}
          >
            empowering through
            <br />
            <span className="text-pen-blue">action & awareness</span>
          </h2>
          <p
            className={`mt-6 text-pen-grey text-lg max-w-2xl mx-auto transition-all duration-700 delay-400 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            We take a holistic approach to mental health advocacy, providing
            services that educate, support, and transform communities.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-5 auto-rows-auto"
        >
          {/* ── Education & Workshops (Left Top) ── */}
          <div
            className={`order-2 md:order-1 group col-span-1 md:col-span-3 bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 border border-transparent hover:border-pen-blue/20 hover:shadow-xl hover:shadow-pen-blue/5 transition-all duration-700 cursor-default hover:-translate-y-1 ${vis(0.1).className}`}
            style={vis(0.1).style}
          >
            <div className="flex items-start justify-between mb-3 md:mb-5">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-pen-blue/10 text-pen-blue flex items-center justify-center group-hover:bg-pen-blue group-hover:text-white group-hover:rotate-3 group-hover:scale-110 transition-all duration-500">
                <Teacher size="28" variant="Bulk" className="hidden md:block" />
                <Teacher size="20" variant="Bulk" className="md:hidden" />
              </div>
              <span className="text-pen-grey-light text-[10px] md:text-xs font-semibold tracking-widest uppercase mt-1 md:mt-2">
                02
              </span>
            </div>
            <h3
              className="text-pen-navy font-bold text-sm md:text-xl mb-1 md:mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Education & Workshops
            </h3>
            <p className="text-pen-grey text-xs md:text-sm leading-relaxed hidden md:block">
              We deliver evidence-based workshops, seminars, and training
              programs that equip individuals and organizations with essential
              psychological knowledge.
            </p>
            <p className="text-pen-grey text-xs leading-relaxed md:hidden">
              Evidence-based workshops and training programs for essential
              psychological knowledge.
            </p>
          </div>

          {/* ── Featured Card: Mental Health Advocacy (Center) ── */}
          <div
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
            }}
            className={`order-1 md:order-2 group col-span-2 md:col-span-6 md:row-span-2 relative bg-pen-navy rounded-2xl md:rounded-3xl p-6 md:p-12 overflow-hidden cursor-default transition-all duration-700 ${vis(0).className}`}
            style={vis(0).style}
          >
            {/* Mouse glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(350px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(59,130,246,0.15), transparent 70%)" }}
            />
            {/* Decorative elements */}
            <div className="absolute top-8 right-8 w-20 h-20 rounded-full border border-white/[0.06]" />
            <div className="absolute top-12 right-12 w-12 h-12 rounded-full border border-white/[0.06]" />

            <div className="relative z-10 flex flex-col justify-between h-full min-h-[280px] md:min-h-[340px]">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/[0.08] text-white flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Microphone2 size="32" variant="Bulk" />
                </div>
                <h3
                  className="text-white font-bold text-3xl md:text-4xl mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Mental Health
                  <br />
                  Advocacy
                </h3>
                <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md">
                  We champion policies and initiatives that promote mental
                  health awareness, reduce stigma, and drive systemic change
                  across communities and institutions.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-white/30 group-hover:text-white/60 transition-colors duration-300">
                <span className="text-sm font-medium tracking-wide uppercase">
                  Learn more
                </span>
                <ArrowRight
                  size="16"
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* ── Community Support (Right Top) ── */}
          <div
            className={`order-3 md:order-3 group col-span-1 md:col-span-3 bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 border border-transparent hover:border-pen-blue/20 hover:shadow-xl hover:shadow-pen-blue/5 transition-all duration-700 cursor-default hover:-translate-y-1 ${vis(0.2).className}`}
            style={vis(0.2).style}
          >
            <div className="flex items-start justify-between mb-3 md:mb-5">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-pen-blue/10 text-pen-blue flex items-center justify-center group-hover:bg-pen-blue group-hover:text-white group-hover:rotate-3 group-hover:scale-110 transition-all duration-500">
                <People size="28" variant="Bulk" className="hidden md:block" />
                <People size="20" variant="Bulk" className="md:hidden" />
              </div>
              <span className="text-pen-grey-light text-[10px] md:text-xs font-semibold tracking-widest uppercase mt-1 md:mt-2">
                03
              </span>
            </div>
            <h3
              className="text-pen-navy font-bold text-sm md:text-xl mb-1 md:mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Community Support
            </h3>
            <p className="text-pen-grey text-xs md:text-sm leading-relaxed hidden md:block">
              We build safe, inclusive spaces where individuals can share
              experiences and build meaningful connections.
            </p>
            <p className="text-pen-grey text-xs leading-relaxed md:hidden">
              Safe, inclusive spaces to share experiences and build meaningful
              connections.
            </p>
          </div>

          {/* ── Research & Resources (Left Bottom) ── */}
          <div
            className={`order-4 md:order-4 group col-span-1 md:col-span-3 bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 border border-transparent hover:border-pen-blue/20 hover:shadow-xl hover:shadow-pen-blue/5 transition-all duration-700 cursor-default hover:-translate-y-1 ${vis(0.3).className}`}
            style={vis(0.3).style}
          >
            <div className="flex items-start justify-between mb-3 md:mb-5">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-pen-blue/10 text-pen-blue flex items-center justify-center group-hover:bg-pen-blue group-hover:text-white group-hover:rotate-3 group-hover:scale-110 transition-all duration-500">
                <DocumentText
                  size="28"
                  variant="Bulk"
                  className="hidden md:block"
                />
                <DocumentText size="20" variant="Bulk" className="md:hidden" />
              </div>
              <span className="text-pen-grey-light text-[10px] md:text-xs font-semibold tracking-widest uppercase mt-1 md:mt-2">
                04
              </span>
            </div>
            <h3
              className="text-pen-navy font-bold text-sm md:text-xl mb-1 md:mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Research & Resources
            </h3>
            <p className="text-pen-grey text-xs md:text-sm leading-relaxed hidden md:block">
              We curate research-backed resources and toolkits that empower
              people to understand psychology.
            </p>
            <p className="text-pen-grey text-xs leading-relaxed md:hidden">
              Research-backed resources and toolkits to understand psychology
              better.
            </p>
          </div>

          {/* ── Counselor Network (Right Bottom) ── */}
          <div
            className={`order-5 md:order-5 group col-span-1 md:col-span-3 bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 border border-transparent hover:border-pen-blue/20 hover:shadow-xl hover:shadow-pen-blue/5 transition-all duration-700 cursor-default hover:-translate-y-1 ${vis(0.4).className}`}
            style={vis(0.4).style}
          >
            <div className="flex items-start justify-between mb-3 md:mb-5">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-pen-blue/10 text-pen-blue flex items-center justify-center group-hover:bg-pen-blue group-hover:text-white group-hover:rotate-3 group-hover:scale-110 transition-all duration-500">
                <UserTick
                  size="28"
                  variant="Bulk"
                  className="hidden md:block"
                />
                <UserTick size="20" variant="Bulk" className="md:hidden" />
              </div>
              <span className="text-pen-grey-light text-[10px] md:text-xs font-semibold tracking-widest uppercase mt-1 md:mt-2">
                05
              </span>
            </div>
            <h3
              className="text-pen-navy font-bold text-sm md:text-xl mb-1 md:mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Counselor Network
            </h3>
            <p className="text-pen-grey text-xs md:text-sm leading-relaxed hidden md:block">
              We connect individuals with verified mental health professionals
              suited to their needs.
            </p>
            <p className="text-pen-grey text-xs leading-relaxed md:hidden">
              Connecting you with verified mental health professionals for the
              right support.
            </p>
          </div>

          {/* ── Corporate Wellness (Bottom Full) ── */}
          <div
            className={`order-6 md:order-6 group col-span-2 md:col-span-12 bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 border border-transparent hover:border-pen-blue/20 hover:shadow-xl hover:shadow-pen-blue/5 transition-all duration-700 cursor-default hover:-translate-y-1 ${vis(0.5).className}`}
            style={vis(0.5).style}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3 md:mb-5">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-pen-blue/10 text-pen-blue flex items-center justify-center group-hover:bg-pen-blue group-hover:text-white group-hover:rotate-3 group-hover:scale-110 transition-all duration-500">
                    <Building4
                      size="28"
                      variant="Bulk"
                      className="hidden md:block"
                    />
                    <Building4 size="20" variant="Bulk" className="md:hidden" />
                  </div>
                  <span className="text-pen-grey-light text-[10px] md:text-xs font-semibold tracking-widest uppercase mt-1 md:mt-2">
                    06
                  </span>
                </div>
                <h3
                  className="text-pen-navy font-bold text-sm md:text-xl mb-1 md:mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Corporate Wellness
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-pen-grey text-xs md:text-sm leading-relaxed hidden md:block md:max-w-xl md:ml-auto md:text-right">
                  Our corporate programs help organizations foster mental
                  well-being, improving productivity and creating healthier,
                  more supportive work environments.
                </p>
                <p className="text-pen-grey text-xs leading-relaxed md:hidden">
                  Programs to foster mental well-being and clearer, supportive
                  work environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
