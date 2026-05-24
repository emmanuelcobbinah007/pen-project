"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading");
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const minTime = new Promise((r) => setTimeout(r, 2600));
    const windowReady = new Promise<void>((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", () => resolve(), { once: true });
      }
    });

    Promise.all([minTime, windowReady]).then(() => {
      setPhase("exit");
      setTimeout(() => {
        setPhase("done");
        document.body.style.overflow = "";
      }, 1000);
    });

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        animation:
          phase === "exit"
            ? "loaderSplit 1s cubic-bezier(0.77, 0, 0.175, 1) forwards"
            : "none",
      }}
    >
      {/* Clean white background */}
      <div className="absolute inset-0 bg-white" />

      {/* Very subtle concentric circles */}
      <div className="absolute w-[400px] h-[400px] rounded-full border border-pen-navy/[0.04]" />
      <div
        className="absolute w-[600px] h-[600px] rounded-full border border-pen-navy/[0.03]"
        style={{
          animation: "loaderCirclePulse 3s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Actual logo */}
        <div
          className="relative w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] -mb-2"
          style={{
            animation: `loaderLogoReveal 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards`,
            opacity: 0,
          }}
        >
          <Image
            src="/PEN LOGO - Black&White_20260209_035921_0000(1).png"
            alt="PEN Logo"
            fill
            className={`object-contain transition-opacity duration-700 ${logoLoaded ? "opacity-100" : "opacity-0"}`}
            priority
            onLoad={() => setLogoLoaded(true)}
          />
        </div>

        {/* Tagline */}
        <span
          className="text-pen-grey text-[10px] sm:text-xs tracking-[0.35em] uppercase mb-8"
          style={{
            animation:
              "loaderLetterReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards",
            opacity: 0,
          }}
        >
          Psyche Empowerment Network
        </span>

        {/* Animated progress line */}
        <div
          className="w-40 h-[1.5px] bg-pen-ash rounded-full overflow-hidden"
          style={{
            animation:
              "loaderLetterReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards",
            opacity: 0,
          }}
        >
          <div
            className="h-full w-full bg-pen-navy/60 rounded-full"
            style={{
              animation:
                "loaderLine 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite",
              animationDelay: "1.1s",
              transform: "scaleX(0)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
