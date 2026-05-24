"use client";

import { useState } from "react";
import { ArrowDown2 } from "iconsax-reactjs";
import { useScrollReveal } from "../hooks/useAnimations";

const faqs = [
  {
    question: "What is Psyche Empowerment Network (PEN)?",
    answer:
      "PEN is a psychology advocacy organization dedicated to promoting mental health awareness, reducing stigma, and ensuring that psychological support is accessible to everyone across Africa. We work through education, community engagement, advocacy, and connecting people with mental health resources.",
  },
  {
    question: "How can I get involved with PEN?",
    answer:
      "There are many ways to get involved! You can volunteer with our programs, attend or host workshops, become a mental health advocate in your community, partner with us as an organization, or donate to support our initiatives. Reach out through our contact form to find the best fit for you.",
  },
  {
    question: "Are PEN's services free?",
    answer:
      "Many of our services, including community support groups, educational resources, and awareness campaigns, are completely free. Some specialized workshops and corporate wellness programs may have associated costs. We are committed to keeping mental health support accessible to all.",
  },
  {
    question: "How does PEN help reduce mental health stigma?",
    answer:
      "We combat stigma through public awareness campaigns, community education, storytelling initiatives, and partnerships with media and institutions. By normalizing conversations about mental health, we create environments where people feel safe to seek help without judgment.",
  },
  {
    question: "Can PEN connect me with a mental health professional?",
    answer:
      "Yes. Through our Counselor Network, we can help connect you with verified mental health professionals who match your needs, preferences, and budget. Reach out to us and we'll guide you through the process.",
  },
  {
    question: "Does PEN work with schools and organizations?",
    answer:
      "Absolutely. We partner with schools, universities, corporations, and community organizations to deliver tailored mental health programs, workshops, and wellness initiatives. Contact us to discuss a partnership.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
  });
  const [itemsRef, itemsVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section className="py-24 md:py-32 bg-pen-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div
            className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${headerVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className={`h-[2px] bg-pen-blue transition-all duration-1000 delay-100 ${headerVisible ? "w-12" : "w-0"}`}
            />
            <span className="text-pen-blue text-sm font-semibold tracking-widest uppercase">
              FAQs
            </span>
            <div
              className={`h-[2px] bg-pen-blue transition-all duration-1000 delay-100 ${headerVisible ? "w-12" : "w-0"}`}
            />
          </div>
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl text-pen-navy lowercase leading-tight transition-all duration-1000 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "var(--font-serif)" }}
          >
            frequently asked
            <br />
            <span className="text-pen-blue">questions</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div ref={itemsRef} className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-pen-ash rounded-2xl overflow-hidden border border-transparent hover:border-pen-blue/10 transition-all duration-700 ${itemsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: itemsVisible ? `${i * 0.08}s` : "0s" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span
                  className="text-pen-navy font-semibold text-lg pr-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                    openIndex === i
                      ? "bg-pen-blue text-white rotate-180"
                      : "bg-pen-grey-light/30 text-pen-grey"
                  }`}
                >
                  <ArrowDown2 size="16" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-pen-grey leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
