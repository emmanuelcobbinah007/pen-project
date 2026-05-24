"use client";

import { Star1 } from "iconsax-reactjs";

const row1 = [
  "Advocacy",
  "Empowerment",
  "Awareness",
  "Resilience",
  "Community",
  "Healing",
];

const row2 = [
  "Education",
  "Support",
  "Wellness",
  "Strength",
  "Empowerment",
  "Accessibility",
  "Solutions",
];

const FilledStar = () => (
  <span className="mx-4 sm:mx-6 flex-shrink-0 text-pen-blue">
    <Star1 size="20" variant="Bold" />
  </span>
);

const OutlineStar = () => (
  <span className="mx-4 sm:mx-6 flex-shrink-0">
    <Star1 size="20" variant="Linear" color="rgba(107,114,128,0.4)" />
  </span>
);

export default function Marquee() {
  return (
    <section className="py-10 sm:py-14 bg-pen-ash overflow-hidden">
      {/* Row 1 — scrolls left */}
      <div className="flex overflow-hidden mb-3 sm:mb-4">
        <div className="flex shrink-0 animate-marquee whitespace-nowrap">
          {[...row1, ...row1].map((word, i) => (
            <span key={i} className="flex items-center">
              <FilledStar />
              <span
                className="text-pen-navy text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {word}
              </span>
            </span>
          ))}
        </div>
        <div
          className="flex shrink-0 animate-marquee whitespace-nowrap"
          aria-hidden="true"
        >
          {[...row1, ...row1].map((word, i) => (
            <span key={i} className="flex items-center">
              <FilledStar />
              <span
                className="text-pen-navy text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {word}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee-reverse whitespace-nowrap">
          {[...row2, ...row2].map((word, i) => (
            <span key={i} className="flex items-center">
              <OutlineStar />
              <span
                className="text-transparent text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  WebkitTextStroke: "1.5px rgba(107, 114, 128, 0.35)",
                }}
              >
                {word}
              </span>
            </span>
          ))}
        </div>
        <div
          className="flex shrink-0 animate-marquee-reverse whitespace-nowrap"
          aria-hidden="true"
        >
          {[...row2, ...row2].map((word, i) => (
            <span key={i} className="flex items-center">
              <OutlineStar />
              <span
                className="text-transparent text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  WebkitTextStroke: "1.5px rgba(107, 114, 128, 0.35)",
                }}
              >
                {word}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
