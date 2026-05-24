"use client";

import { useScrollReveal, useCountUp } from "../hooks/useAnimations";

function StatNumber({
  number,
  isVisible,
}: {
  number: string;
  isVisible: boolean;
}) {
  const numericValue = parseInt(number.replace(/[^0-9]/g, ""), 10);
  const suffix = number.replace(/[0-9,]/g, "");
  const count = useCountUp(numericValue, 2200, isVisible);
  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

const stats = [
  {
    number: "5,000+",
    label: "Lives Impacted",
    description: "Individuals reached through our programs and campaigns",
  },
  {
    number: "50+",
    label: "Workshops Held",
    description: "Educational sessions delivered across communities",
  },
  {
    number: "20+",
    label: "Partner Organizations",
    description: "Collaborations with institutions and mental health bodies",
  },
  {
    number: "100+",
    label: "Volunteers & Advocates",
    description: "Passionate individuals championing mental health",
  },
];

export default function Impact() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
  });
  const [statsRef, statsVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.15,
  });

  return (
    <section
      id="impact"
      className="py-24 md:py-32 bg-pen-navy relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div
        className={`absolute top-0 right-0 w-96 h-96 rounded-full bg-pen-blue/5 blur-3xl transition-all duration-[2s] ${statsVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
      />
      <div
        className={`absolute bottom-0 left-0 w-72 h-72 rounded-full bg-pen-blue-light/5 blur-3xl transition-all duration-[2s] delay-300 ${statsVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div
            className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${headerVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className={`h-[2px] bg-pen-blue-light transition-all duration-1000 delay-100 ${headerVisible ? "w-12" : "w-0"}`}
            />
            <span className="text-pen-blue-light text-sm font-semibold tracking-widest uppercase">
              Our Impact
            </span>
            <div
              className={`h-[2px] bg-pen-blue-light transition-all duration-1000 delay-100 ${headerVisible ? "w-12" : "w-0"}`}
            />
          </div>
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl text-white lowercase leading-tight transition-all duration-1000 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "var(--font-serif)" }}
          >
            creating real
            <br />
            <span className="text-pen-blue-pale">change together</span>
          </h2>
          <p
            className={`mt-6 text-white/50 text-lg max-w-2xl mx-auto transition-all duration-700 delay-400 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Every number represents a life touched, a mind empowered, or a
            community transformed through mental health awareness.
          </p>
        </div>

        {/* Stats grid */}
        <div
          ref={statsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pen-blue/30 hover:-translate-y-1 transition-all duration-700 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: statsVisible ? `${i * 0.15}s` : "0s" }}
            >
              <div
                className="text-4xl sm:text-5xl font-bold text-pen-blue-light mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <StatNumber number={stat.number} isVisible={statsVisible} />
              </div>
              <div
                className="text-white font-semibold text-lg mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.label}
              </div>
              <p className="text-white/40 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
