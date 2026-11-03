"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "@/content/content";

function parseStatValue(value: string): {
  numeric: number;
  suffix: string;
  display: (n: number) => string;
} {
  const hasPlus = value.includes("+");
  const hasPercent = value.includes("%");
  const hasHours = value.includes("h");
  const hasK = value.includes("K");

  const rawNum = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  let suffix = "";
  if (hasK) suffix += "K";
  if (hasPlus) suffix += "+";
  if (hasPercent) suffix += "%";
  if (hasHours) suffix += "h";

  return {
    numeric: rawNum,
    suffix,
    display: (n: number) => n.toLocaleString("es-PE"),
  };
}

function AnimatedNumber({ value }: { value: string }) {
  const [display, setDisplay] = useState("0");
  const [suffix, setSuffix] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const parsed = parseStatValue(value);
    setSuffix(parsed.suffix);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * parsed.numeric);
            setDisplay(parsed.display(current));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      style={{ fontFamily: "var(--font-display)" }}
      className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl tracking-tight"
    >
      {display}
      <span className="text-primary-dark">{suffix}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative border-y border-gray-100 bg-white py-14 lg:py-20 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:divide-x lg:divide-gray-100">
          {content.stats.map((stat, i) => (
            <div key={i} className="text-center px-2">
              <AnimatedNumber value={stat.value} />
              <p className="mt-2.5 text-xs sm:text-sm font-semibold tracking-wider text-brand-gray uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
