"use client";

import { Flash, Eye } from "iconsax-reactjs";
import { useScrollReveal } from "../hooks/useAnimations";
import Image from "next/image";

export default function About() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({
    threshold: 0.1,
  });
  const [cardsRef, cardsVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 bg-pen-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div
          className={`flex items-center gap-3 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >
          <div
            className={`h-[2px] bg-pen-blue transition-all duration-1000 delay-200 ${isVisible ? "w-12" : "w-0"}`}
          />
          <span className="text-pen-blue text-sm font-semibold tracking-widest uppercase">
            About Us
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Heading */}
          <div
            className={`transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-pen-navy lowercase leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              making mental health
              <br />
              <span
                className={`text-pen-blue inline-block transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
              >
                a priority,
              </span>
              <br />
              not a privilege
            </h2>
            {/* Image with decorative frame */}
            <div className="mt-12 ml-auto relative w-fit">
              {/* Accent shape behind image */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-pen-blue/20" />
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-pen-blue/[0.07]" />
              <Image
                src="/aboutImage.jpg"
                alt="About PEN"
                width={360}
                height={260}
                className="relative z-10 rounded-2xl object-cover aspect-[4/3]"
              />
            </div>
          </div>

          {/* Right: Description */}
          <div className="space-y-6">
            <p
              className={`text-pen-grey text-lg leading-relaxed transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Psyche Empowerment Network (PEN) is a mental health advocacy
              organization dedicated to promoting mental health awareness,
              reducing stigma, and ensuring that psychological support is
              accessible to everyone.
            </p>
            <p
              className={`text-pen-grey text-lg leading-relaxed transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              We believe that every individual deserves the opportunity to
              understand, nurture, and strengthen their mental well-being.
              Through education, community engagement, and advocacy, we work to
              create a world where seeking help is normalized and celebrated.
            </p>

            {/* Mission & Vision cards */}
            <div ref={cardsRef} className="grid sm:grid-cols-2 gap-6 mt-10">
              <div
                className={`bg-pen-ash rounded-2xl p-6 border border-pen-ash hover:border-pen-blue/20 transition-all duration-700 hover:shadow-lg hover:shadow-pen-blue/5 hover:-translate-y-1 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: cardsVisible ? "0.1s" : "0s" }}
              >
                <div className="w-10 h-10 rounded-full bg-pen-blue/10 flex items-center justify-center mb-4 text-pen-blue">
                  <Flash size="20" variant="Bulk" />
                </div>
                <h3
                  className="text-pen-navy font-bold text-lg mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Our Mission
                </h3>
                <p className="text-pen-grey text-sm leading-relaxed">
                  To advocate for mental health accessibility, educate
                  communities, and empower individuals to prioritize their
                  psychological well-being.
                </p>
              </div>

              <div
                className={`bg-pen-ash rounded-2xl p-6 border border-pen-ash hover:border-pen-blue/20 transition-all duration-700 hover:shadow-lg hover:shadow-pen-blue/5 hover:-translate-y-1 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: cardsVisible ? "0.3s" : "0s" }}
              >
                <div className="w-10 h-10 rounded-full bg-pen-blue/10 flex items-center justify-center mb-4 text-pen-blue">
                  <Eye size="20" variant="Bulk" />
                </div>
                <h3
                  className="text-pen-navy font-bold text-lg mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Our Vision
                </h3>
                <p className="text-pen-grey text-sm leading-relaxed">
                  A world where mental health is understood, respected, and
                  supported — where no one suffers in silence due to stigma or
                  lack of access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
