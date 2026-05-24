"use client";

import { Send2, Book1, HeartSearch, TrendUp } from "iconsax-reactjs";
import { useScrollReveal } from "../hooks/useAnimations";

const steps = [
  {
    number: "01",
    title: "Reach Out",
    description:
      "Connect with us through our platform, social media, or community events. Everyone is welcome.",
    icon: <Send2 size="28" variant="Bulk" />,
    accent: "bg-pen-blue/10",
    rotation: "-rotate-2",
  },
  {
    number: "02",
    title: "Get Informed",
    description:
      "Access our library of resources, attend workshops, or join our awareness campaigns.",
    icon: <Book1 size="28" variant="Bulk" />,
    accent: "bg-pen-navy/5",
    rotation: "rotate-1",
  },
  {
    number: "03",
    title: "Find Support",
    description:
      "We'll connect you with professional counseling, community support, or self-help tools.",
    icon: <HeartSearch size="28" variant="Bulk" />,
    accent: "bg-pen-blue/10",
    rotation: "-rotate-1",
  },
  {
    number: "04",
    title: "Grow & Advocate",
    description:
      "Share your story, volunteer, or champion mental health in your community.",
    icon: <TrendUp size="28" variant="Bulk" />,
    accent: "bg-pen-navy/5",
    rotation: "rotate-2",
  },
];

/* Vertical offsets for desktop — creates a wave rhythm */
const offsets = [
  "lg:translate-y-0",
  "lg:translate-y-16",
  "lg:-translate-y-6",
  "lg:translate-y-10",
];

/* Flowing SVG path that weaves behind all 4 cards on desktop */
const FlowingPath = ({ visible }: { visible: boolean }) => (
  <svg
    className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1200 420"
    fill="none"
    preserveAspectRatio="none"
  >
    {/* Main flowing path */}
    <path
      d="M80 140 C200 140, 220 280, 360 280 S500 100, 640 120 S780 320, 920 260 C1000 230, 1050 180, 1120 200"
      stroke="#2563EB"
      strokeOpacity="0.12"
      strokeWidth="2.5"
      strokeDasharray="10 8"
      strokeLinecap="round"
      className={`transition-all duration-[2.5s] ease-out ${visible ? "opacity-100" : "opacity-0"}`}
      style={{
        strokeDashoffset: visible ? 0 : 600,
      }}
    />
    {/* Decorative dots along the path */}
    {[
      { cx: 220, cy: 210 },
      { cx: 500, cy: 140 },
      { cx: 780, cy: 270 },
    ].map((dot, i) => (
      <circle
        key={i}
        cx={dot.cx}
        cy={dot.cy}
        r="4"
        fill="#2563EB"
        fillOpacity="0.15"
        className={`transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
        style={{
          transitionDelay: visible ? `${0.8 + i * 0.3}s` : "0s",
          transformOrigin: `${dot.cx}px ${dot.cy}px`,
        }}
      />
    ))}
    {/* Small arrow at end */}
    <path
      d="M1105 192 L1120 200 L1105 208"
      stroke="#2563EB"
      strokeOpacity="0.2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ transitionDelay: visible ? "2s" : "0s" }}
    />
  </svg>
);

export default function HowItWorks() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
  });
  const [stepsRef, stepsVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.08,
  });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-pen-ash/50">
      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1B365D 0.8px, transparent 0.8px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div
            className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${headerVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className={`h-[2px] bg-pen-blue transition-all duration-1000 delay-100 ${headerVisible ? "w-12" : "w-0"}`}
            />
            <span className="text-pen-blue text-sm font-semibold tracking-widest uppercase">
              How It Works
            </span>
            <div
              className={`h-[2px] bg-pen-blue transition-all duration-1000 delay-100 ${headerVisible ? "w-12" : "w-0"}`}
            />
          </div>
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl text-pen-navy lowercase leading-tight transition-all duration-1000 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "var(--font-serif)" }}
          >
            your journey with
            <br />
            <span className="text-pen-blue">pen starts here</span>
          </h2>
        </div>

        {/* Steps — organic staggered flow */}
        <div ref={stepsRef} className="relative">
          {/* Flowing SVG connector behind cards */}
          <FlowingPath visible={stepsVisible} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative transition-all duration-700 ${offsets[i]} ${
                  stepsVisible
                    ? "opacity-100 translate-x-0"
                    : `opacity-0 ${i % 2 === 0 ? "-translate-x-8" : "translate-x-8"}`
                }`}
                style={{
                  transitionDelay: stepsVisible
                    ? `${i * 0.2 + 0.15}s`
                    : "0s",
                }}
              >
                <div
                  className={`group cursor-default ${step.rotation} hover:rotate-0 transition-transform duration-500`}
                >
                  {/* Card */}
                  <div className="relative bg-pen-white rounded-3xl p-7 border border-pen-navy/[0.06] hover:border-pen-blue/20 hover:shadow-xl hover:shadow-pen-blue/[0.06] transition-all duration-500">
                    {/* Decorative ring — top-right */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full border-2 border-pen-blue/[0.08] pointer-events-none" />

                    {/* Number + Icon row */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="text-5xl font-bold text-pen-navy/[0.06] select-none leading-none"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {step.number}
                      </div>
                      <div
                        className={`w-14 h-14 rounded-2xl ${step.accent} text-pen-blue flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}
                      >
                        {step.icon}
                      </div>
                    </div>

                    {/* Accent bar */}
                    <div
                      className={`h-[3px] w-10 rounded-full mb-4 transition-all duration-[1s] ${
                        stepsVisible
                          ? "bg-pen-blue/30 scale-x-100"
                          : "bg-transparent scale-x-0"
                      } origin-left`}
                      style={{
                        transitionDelay: stepsVisible
                          ? `${i * 0.2 + 0.6}s`
                          : "0s",
                      }}
                    />

                    {/* Content */}
                    <h3
                      className="text-pen-navy font-bold text-lg mb-2 group-hover:text-pen-blue transition-colors duration-300"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-pen-grey text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Step indicator dots */}
                    <div className="flex items-center gap-1.5 mt-5">
                      {steps.map((_, j) => (
                        <div
                          key={j}
                          className={`rounded-full transition-all duration-300 ${
                            j === i
                              ? "w-5 h-1.5 bg-pen-blue"
                              : j < i
                                ? "w-1.5 h-1.5 bg-pen-blue/30"
                                : "w-1.5 h-1.5 bg-pen-navy/10"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
