"use client";

import { QuoteDown } from "iconsax-reactjs";
import { useScrollReveal } from "../hooks/useAnimations";

const testimonials = [
  {
    name: "Ama K.",
    location: "Accra, Ghana",
    text: "PEN helped me realize that seeking help isn't weakness — it's strength. The workshops gave me tools I use every single day to manage my anxiety.",
    featured: true,
  },
  {
    name: "Michael O.",
    location: "Lagos, Nigeria",
    text: "Through PEN's community support groups, I finally found people who understood what I was going through. I'm no longer fighting this battle alone.",
    featured: false,
  },
  {
    name: "Fatima B.",
    location: "Nairobi, Kenya",
    text: "The educational resources from PEN completely changed how I view mental health. I'm now an advocate in my own community.",
    featured: false,
  },
  {
    name: "Kwame A.",
    location: "Kumasi, Ghana",
    text: "PEN's workplace wellness program transformed our office culture. Employees feel safer to talk about mental health, and productivity has never been better.",
    featured: false,
  },
  {
    name: "Grace N.",
    location: "Kampala, Uganda",
    text: "As a student, I didn't know where to turn when depression hit. PEN's counselor network connected me with someone who truly changed my life.",
    featured: false,
  },
];

function TestimonialCard({
  t,
  visible,
  delay,
  featured = false,
}: {
  t: (typeof testimonials)[0];
  visible: boolean;
  delay: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`group relative rounded-3xl border transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-pen-blue/8
        ${featured
          ? "bg-pen-navy p-10 md:p-12 border-transparent col-span-2 row-span-1"
          : "bg-white p-7 border-pen-grey/10 hover:border-pen-blue/20"
        }
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: visible ? delay : "0s" }}
    >
      {/* Decorative blob for featured */}
      {featured && (
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-pen-blue/15 blur-2xl pointer-events-none" />
      )}

      <QuoteDown
        size={featured ? "40" : "28"}
        variant="Bold"
        className={`mb-4 ${featured ? "text-pen-blue/40" : "text-pen-blue/20"}`}
      />

      <p
        className={`leading-relaxed mb-6 ${
          featured
            ? "text-white/80 text-lg md:text-xl"
            : "text-pen-dark text-sm"
        }`}
      >
        &ldquo;{t.text}&rdquo;
      </p>

      <div className="flex items-center gap-3 mt-auto">
        {/* Avatar initial */}
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0
            ${featured ? "bg-pen-blue/30 text-pen-blue-pale" : "bg-pen-blue/10 text-pen-blue"}`}
        >
          {t.name[0]}
        </div>
        <div>
          <p
            className={`font-bold text-sm ${featured ? "text-white" : "text-pen-navy"}`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.name}
          </p>
          <p className={`text-xs ${featured ? "text-white/40" : "text-pen-grey"}`}>
            {t.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section className="py-24 md:py-32 bg-pen-ash">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <div className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${headerVisible ? "opacity-100" : "opacity-0"}`}>
            <div className={`h-[2px] bg-pen-blue transition-all duration-1000 delay-100 ${headerVisible ? "w-12" : "w-0"}`} />
            <span className="text-pen-blue text-sm font-semibold tracking-widest uppercase">Testimonials</span>
            <div className={`h-[2px] bg-pen-blue transition-all duration-1000 delay-100 ${headerVisible ? "w-12" : "w-0"}`} />
          </div>
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl text-pen-navy lowercase leading-tight transition-all duration-1000 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "var(--font-serif)" }}
          >
            voices from our
            <br />
            <span className="text-pen-blue">community</span>
          </h2>
        </div>

        {/* Bento grid — 3 cols desktop */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto"
        >
          {/* Featured — spans 2 cols */}
          <TestimonialCard
            t={testimonials[0]}
            visible={gridVisible}
            delay="0s"
            featured
          />

          {/* Card 2 — top right */}
          <TestimonialCard t={testimonials[1]} visible={gridVisible} delay="0.1s" />

          {/* Row 2: three equal cards */}
          <TestimonialCard t={testimonials[2]} visible={gridVisible} delay="0.2s" />
          <TestimonialCard t={testimonials[3]} visible={gridVisible} delay="0.3s" />
          <TestimonialCard t={testimonials[4]} visible={gridVisible} delay="0.4s" />
        </div>

      </div>
    </section>
  );
}
