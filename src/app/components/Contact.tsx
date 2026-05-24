"use client";

import { useState } from "react";
import {
  Heart,
  Buildings,
  People,
  MoneyRecive,
  TickCircle,
  Send2,
} from "iconsax-reactjs";
import { useScrollReveal } from "../hooks/useAnimations";

const roles = [
  {
    id: "volunteer",
    label: "Volunteer",
    description: "Give your time and skills",
    icon: <Heart size="22" variant="Bulk" />,
  },
  {
    id: "partner",
    label: "Partner",
    description: "Institutional collaboration",
    icon: <Buildings size="22" variant="Bulk" />,
  },
  {
    id: "community",
    label: "Community",
    description: "Join our support network",
    icon: <People size="22" variant="Bulk" />,
  },
  {
    id: "donate",
    label: "Donate",
    description: "Fund our mission",
    icon: <MoneyRecive size="22" variant="Bulk" />,
  },
];

export default function Contact() {
  const [selectedRole, setSelectedRole] = useState("volunteer");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
  });
  const [contentRef, contentVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `PEN — New ${roles.find((r) => r.id === selectedRole)?.label} enquiry from ${form.name}`,
          name: form.name,
          email: form.email,
          role: roles.find((r) => r.id === selectedRole)?.label,
          organization: form.organization || undefined,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const showOrg = selectedRole === "partner";

  return (
    <section id="contact" className="py-24 md:py-32 bg-pen-white">
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
              Get Involved
            </span>
            <div
              className={`h-[2px] bg-pen-blue transition-all duration-1000 delay-100 ${headerVisible ? "w-12" : "w-0"}`}
            />
          </div>
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl text-pen-navy lowercase leading-tight transition-all duration-1000 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "var(--font-serif)" }}
          >
            join us in
            <br />
            <span className="text-pen-blue">changing the narrative</span>
          </h2>
          <p
            className={`mt-6 text-pen-grey text-lg max-w-2xl mx-auto transition-all duration-700 delay-400 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Whether you want to volunteer, partner, or simply connect — every
            action counts. Reach out and let&apos;s build something meaningful
            together.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-start transition-all duration-1000 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Left — Why get involved */}
          <div className="space-y-8">
            <div className="bg-pen-ash rounded-3xl p-8 md:p-10">
              <h3
                className="text-pen-navy text-2xl font-bold mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Why get involved?
              </h3>
              <p className="text-pen-grey text-sm leading-relaxed mb-8">
                PEN is a growing movement. Your contribution — big or small —
                helps us reach more minds across Africa.
              </p>

              <ul className="space-y-5">
                {[
                  {
                    title: "Shape policy",
                    body: "Your voice helps advocate for mental health legislation and institutional change.",
                  },
                  {
                    title: "Reach communities",
                    body: "Help us deliver workshops, support groups, and resources to underserved areas.",
                  },
                  {
                    title: "Break stigma",
                    body: "Every conversation you spark normalizes mental health care in your circle.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-pen-blue/10 text-pen-blue flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="text-pen-navy font-semibold text-sm"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.title}
                      </p>
                      <p className="text-pen-grey text-sm leading-relaxed mt-0.5">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact detail pills */}
            <div className="flex flex-col gap-3">
              {[
                { label: "Email", value: "hello@psycheempowerment.org" },
                { label: "Social", value: "@PsycheEmpowerNet" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 px-5 py-3.5 rounded-2xl border border-pen-grey/15 bg-pen-white"
                >
                  <span
                    className="text-pen-grey-light text-xs font-semibold tracking-widest uppercase w-12 flex-shrink-0"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.label}
                  </span>
                  <span className="text-pen-navy text-sm font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-pen-ash rounded-3xl p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-5">
                <div className="w-16 h-16 rounded-full bg-pen-blue/10 text-pen-blue flex items-center justify-center">
                  <TickCircle size="36" variant="Bulk" />
                </div>
                <h3
                  className="text-pen-navy text-2xl font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Message received!
                </h3>
                <p className="text-pen-grey text-sm max-w-xs leading-relaxed">
                  Thanks for reaching out. A member of the PEN team will get
                  back to you within 2–3 business days.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setError("");
                    setForm({ name: "", email: "", organization: "", message: "" });
                  }}
                  className="mt-2 text-pen-blue text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Role selector */}
                <div>
                  <label className="block text-pen-navy text-xs font-semibold tracking-widest uppercase mb-3">
                    I want to
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {roles.map((role) => (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => setSelectedRole(role.id)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-300 ${
                          selectedRole === role.id
                            ? "border-pen-blue bg-pen-blue/5 text-pen-blue"
                            : "border-transparent bg-pen-white text-pen-dark hover:border-pen-blue/20"
                        }`}
                      >
                        <span
                          className={`flex-shrink-0 transition-colors duration-300 ${selectedRole === role.id ? "text-pen-blue" : "text-pen-grey-light"}`}
                        >
                          {role.icon}
                        </span>
                        <div>
                          <p
                            className="text-xs font-semibold leading-tight"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {role.label}
                          </p>
                          <p className="text-[10px] text-pen-grey leading-tight mt-0.5">
                            {role.description}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-pen-navy text-xs font-semibold tracking-widest uppercase mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-pen-white border border-pen-grey/20 rounded-xl px-4 py-3 text-pen-dark text-sm placeholder:text-pen-grey-light focus:outline-none focus:border-pen-blue focus:ring-1 focus:ring-pen-blue/20 transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-pen-navy text-xs font-semibold tracking-widest uppercase mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="you@example.com"
                    className="w-full bg-pen-white border border-pen-grey/20 rounded-xl px-4 py-3 text-pen-dark text-sm placeholder:text-pen-grey-light focus:outline-none focus:border-pen-blue focus:ring-1 focus:ring-pen-blue/20 transition-all duration-200"
                  />
                </div>

                {/* Organization — only for Partner */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${showOrg ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <label
                    htmlFor="organization"
                    className="block text-pen-navy text-xs font-semibold tracking-widest uppercase mb-2"
                  >
                    Organization
                  </label>
                  <input
                    id="organization"
                    type="text"
                    value={form.organization}
                    onChange={(e) =>
                      setForm({ ...form, organization: e.target.value })
                    }
                    placeholder="Your organization name"
                    className="w-full bg-pen-white border border-pen-grey/20 rounded-xl px-4 py-3 text-pen-dark text-sm placeholder:text-pen-grey-light focus:outline-none focus:border-pen-blue focus:ring-1 focus:ring-pen-blue/20 transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-pen-navy text-xs font-semibold tracking-widest uppercase mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us a little about yourself and how you'd like to help..."
                    className="w-full bg-pen-white border border-pen-grey/20 rounded-xl px-4 py-3 text-pen-dark text-sm placeholder:text-pen-grey-light focus:outline-none focus:border-pen-blue focus:ring-1 focus:ring-pen-blue/20 transition-all duration-200 resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-shimmer w-full flex items-center justify-center gap-2 bg-pen-navy text-white px-6 py-4 rounded-xl font-semibold text-sm tracking-wide hover:bg-pen-blue hover:shadow-lg hover:shadow-pen-blue/20 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {loading ? (
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                  ) : (
                    <Send2 size="18" variant="Bulk" />
                  )}
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
