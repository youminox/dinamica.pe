"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "@/content/content";

const counters = [
  { target: 500, suffix: "+", label: "Oficinas y proyectos atendidos" },
  { target: 99, suffix: "%", label: "Satisfacción corporativa" },
  { target: 24, suffix: "h", label: "Soporte y atención urgente" },
];

const benefits = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Reduce Costos Operativos",
    description:
      "Optimiza tu presupuesto delegando planilla, beneficios, insumos y supervisión en especialistas.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Respuesta en menos de 24h",
    description:
      "Cotización formal y visita técnica rápida para iniciar operaciones cuando tu oficina lo necesite.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Cobertura Garantizada",
    description:
      "Reemplazo inmediato con personal de retén ante cualquier eventualidad sin afectar tu operación.",
  },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let current = 0;
          const duration = 1800;
          const step = target / (duration / 16);
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            setValue(Math.floor(current));
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {value}
      <span className="text-accent">{suffix}</span>
    </span>
  );
}

export default function CTASection({
  onOpenQuote,
}: {
  onOpenQuote?: () => void;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-[#022c61] to-brand-black py-16 lg:py-24"
    >
      {/* Decorative Glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(7,103,219,0.35),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(231,237,0,0.12),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Animated Counters */}
        <div className="mb-14 grid grid-cols-3 gap-6 border-b border-white/15 pb-14">
          {counters.map((item, i) => (
            <div
              key={i}
              className="text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
              }}
            >
              <p
                style={{ fontFamily: "var(--font-display)" }}
                className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
              >
                <AnimatedCounter target={item.target} suffix={item.suffix} />
              </p>
              <p className="mt-2 text-xs sm:text-sm font-medium text-brand-silver">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Title + Value Proposition */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
            {content.ctaSection.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-brand-silver">
            {content.value.description}
          </p>
        </div>

        {/* Glassmorphism Benefit Cards */}
        <div className="mb-12 grid gap-5 sm:grid-cols-3">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:bg-white/10"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${0.35 + i * 0.15}s, transform 0.6s ease ${0.35 + i * 0.15}s`,
              }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/30 text-accent transition-colors group-hover:bg-accent group-hover:text-brand-black">
                {benefit.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-silver">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {onOpenQuote && (
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-extrabold text-brand-black shadow-lg shadow-accent/20 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              Cotizar con IA en 1 minuto
            </button>
          )}
          <a
            href={`mailto:${content.company.email}?subject=Solicitud%20de%20Cotizaci%C3%B3n%20-%20DIN%C3%81MICA`}
            className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-0.5"
          >
            Escribir a {content.company.email}
          </a>
        </div>
      </div>
    </section>
  );
}
