"use client";

import { useState } from "react";
import { QuoteDown, ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";
import { useScrollReveal } from "../hooks/useAnimations";

const testimonials = [
  {
    name: "Ama K.",
    location: "Accra, Ghana",
    text: "PEN helped me realize that seeking help isn't weakness — it's strength. The workshops gave me tools I use every single day to manage my anxiety.",
  },
  {
    name: "Michael O.",
    location: "Lagos, Nigeria",
    text: "Through PEN's community support groups, I finally found people who understood what I was going through. I'm no longer fighting this battle alone.",
  },
  {
    name: "Fatima B.",
    location: "Nairobi, Kenya",
    text: "The educational resources from PEN completely changed how I view mental health. I'm now an advocate in my own community, spreading the message.",
  },
  {
    name: "Kwame A.",
    location: "Kumasi, Ghana",
    text: "PEN's workplace wellness program transformed our office culture. Employees feel safer to talk about mental health, and productivity has never been better.",
  },
  {
    name: "Grace N.",
    location: "Kampala, Uganda",
    text: "As a student, I didn't know where to turn when depression hit. PEN's counselor network connected me with someone who truly changed my life.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
  });
  const [cardRef, cardVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.15,
  });

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-pen-ash">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div
            className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${headerVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className={`h-[2px] bg-pen-blue transition-all duration-1000 delay-100 ${headerVisible ? "w-12" : "w-0"}`}
            />
            <span className="text-pen-blue text-sm font-semibold tracking-widest uppercase">
              Testimonials
            </span>
            <div
              className={`h-[2px] bg-pen-blue transition-all duration-1000 delay-100 ${headerVisible ? "w-12" : "w-0"}`}
            />
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

        {/* Testimonial Card */}
        <div ref={cardRef} className="max-w-3xl mx-auto">
          <div
            className={`bg-white rounded-3xl p-10 md:p-14 shadow-sm relative transition-all duration-1000 ${cardVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"}`}
          >
            {/* Quote icon */}
            <QuoteDown
              size="48"
              variant="Bold"
              className="text-pen-blue/20 mb-6"
            />

            <p className="text-pen-dark text-xl md:text-2xl leading-relaxed mb-8">
              &ldquo;{testimonials[active].text}&rdquo;
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p
                  className="text-pen-navy font-bold text-lg"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {testimonials[active].name}
                </p>
                <p className="text-pen-grey text-sm">
                  {testimonials[active].location}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-pen-grey/30 flex items-center justify-center hover:bg-pen-navy hover:text-white hover:border-pen-navy transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft2 size="16" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-pen-grey/30 flex items-center justify-center hover:bg-pen-navy hover:text-white hover:border-pen-navy transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ArrowRight2 size="16" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center mt-8 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-pen-blue w-8"
                    : "bg-pen-grey-light hover:bg-pen-grey"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
