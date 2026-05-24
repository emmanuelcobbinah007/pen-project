"use client";

import {
  Flash,
  Eye,
  Microphone2,
  People,
  SecuritySafe,
  HeartSearch,
  Crown,
} from "iconsax-reactjs";
import { useScrollReveal } from "../hooks/useAnimations";
import Image from "next/image";

const values = [
  {
    title: "Empowerment",
    body: "Equipping individuals with the confidence and resources to reach their fullest potential.",
    icon: <Flash size="18" variant="Bulk" />,
    span: "col-span-2",
  },
  {
    title: "Resilience",
    body: "Adapting, recovering, and growing in the face of pressure and adversity.",
    icon: <HeartSearch size="18" variant="Bulk" />,
    span: "col-span-1",
  },
  {
    title: "Excellence",
    body: "Highest standards in programs, mentorship, and advocacy.",
    icon: <Crown size="18" variant="Bulk" />,
    span: "col-span-1",
  },
  {
    title: "Integrity",
    body: "Honesty, transparency, and accountability in all relationships.",
    icon: <SecuritySafe size="18" variant="Bulk" />,
    span: "col-span-1",
  },
  {
    title: "Inclusion",
    body: "Equal opportunities for all in a safe, supportive community.",
    icon: <People size="18" variant="Bulk" />,
    span: "col-span-1",
  },
  {
    title: "Advocacy",
    body: "Raising awareness about the importance of psychology and its role in shaping society.",
    icon: <Microphone2 size="18" variant="Bulk" />,
    span: "col-span-2",
  },
];

export default function About() {
  const [sectionRef, isVisible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });
  const [cardsRef, cardsVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const [valuesRef, valuesVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-32 bg-pen-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <div
          className={`flex items-center gap-3 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
        >
          <div className={`h-[2px] bg-pen-blue transition-all duration-1000 delay-200 ${isVisible ? "w-12" : "w-0"}`} />
          <span className="text-pen-blue text-sm font-semibold tracking-widest uppercase">About Us</span>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Left: heading + image */}
          <div className={`transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-pen-grey-light text-sm font-medium tracking-wide mb-4">
              Making Global Impacts by Empowering Minds
            </p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-pen-navy lowercase leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              making mental health
              <br />
              <span className={`text-pen-blue inline-block transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
                a priority,
              </span>
              <br />
              not a privilege
            </h2>

            <div className="mt-10 relative w-fit">
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

          {/* Right: description + mission/vision + values bento */}
          <div className="flex flex-col gap-5">
            <p className={`text-pen-grey text-base leading-relaxed transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Psyche Empowerment Network (PEN) is an organisation contributing
              to supporting Mental Health &amp; Wellness through Advocacy among
              people, as well as fostering career potential and empowerment of
              young professionals and students — providing career mentorship,
              in-demand corporate skill sets, valuable opportunities, and
              building career and academic projects.
            </p>

            {/* Mission + Vision */}
            <div ref={cardsRef} className="grid grid-cols-2 gap-3">
              <div
                className={`bg-pen-ash rounded-2xl p-5 border border-transparent hover:border-pen-blue/20 transition-all duration-700 hover:shadow-lg hover:shadow-pen-blue/5 hover:-translate-y-1 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: cardsVisible ? "0.1s" : "0s" }}
              >
                <div className="w-9 h-9 rounded-full bg-pen-blue/10 flex items-center justify-center mb-3 text-pen-blue">
                  <Flash size="18" variant="Bulk" />
                </div>
                <h3 className="text-pen-navy font-bold text-sm mb-1.5" style={{ fontFamily: "var(--font-display)" }}>
                  Our Mission
                </h3>
                <p className="text-pen-grey text-xs leading-relaxed">
                  To support Mental Health &amp; Wellness through Advocacy, foster career potential, and empower young professionals with the tools to thrive.
                </p>
              </div>

              <div
                className={`bg-pen-ash rounded-2xl p-5 border border-transparent hover:border-pen-blue/20 transition-all duration-700 hover:shadow-lg hover:shadow-pen-blue/5 hover:-translate-y-1 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: cardsVisible ? "0.25s" : "0s" }}
              >
                <div className="w-9 h-9 rounded-full bg-pen-blue/10 flex items-center justify-center mb-3 text-pen-blue">
                  <Eye size="18" variant="Bulk" />
                </div>
                <h3 className="text-pen-navy font-bold text-sm mb-1.5" style={{ fontFamily: "var(--font-display)" }}>
                  Our Vision
                </h3>
                <p className="text-pen-grey text-xs leading-relaxed">
                  To contribute and support Mental Health among young individuals while advancing individual development, innovation, and global progress.
                </p>
              </div>
            </div>

            {/* Values bento grid */}
            <div ref={valuesRef}>
              <span className="text-pen-blue text-xs font-semibold tracking-widest uppercase mb-3 block">
                Our Values
              </span>
              <div className="grid grid-cols-3 gap-3">
                {values.map((v, i) => (
                  <div
                    key={v.title}
                    className={`group ${v.span} bg-pen-ash rounded-2xl p-4 border border-transparent hover:border-pen-blue/20 hover:shadow-md hover:shadow-pen-blue/5 hover:-translate-y-0.5 transition-all duration-500 ${valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: valuesVisible ? `${i * 0.07}s` : "0s" }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-pen-blue/10 text-pen-blue flex items-center justify-center mb-2 group-hover:bg-pen-blue group-hover:text-white transition-all duration-400">
                      {v.icon}
                    </div>
                    <h4 className="text-pen-navy font-bold text-xs mb-1" style={{ fontFamily: "var(--font-display)" }}>
                      {v.title}
                    </h4>
                    <p className="text-pen-grey text-[11px] leading-relaxed">{v.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
