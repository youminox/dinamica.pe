"use client";

import React, { useEffect, useRef, useState } from "react";
import { content } from "@/content/content";

const icons: Record<string, React.ReactNode> = {
  "shield-check": (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  scale: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
    </svg>
  ),
  "academic-cap": (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
};

const backContent = [
  {
    stats: "100%",
    statsLabel: "Respaldo legal y laboral",
    details: [
      "Póliza de Responsabilidad Civil y Deshonestidad",
      "Personal 100% en planilla con beneficios",
      "SCTR Salud y Pensión vigentes",
      "Seguro Vida Ley desde el primer día",
    ],
  },
  {
    stats: "Ley 29783",
    statsLabel: "Seguridad y Salud en el Trabajo",
    details: [
      "Matriz IPERC y Plan Anual de SST",
      "EPPs certificados y hojas MSDS",
      "Filtros de antecedentes policiales y penales",
      "Auditorías preventivas en sede",
    ],
  },
  {
    stats: "24/7",
    statsLabel: "Supervisión y Respuesta",
    details: [
      "Supervisores zonales con checklist digital",
      "Operarios de retén para cobertura inmediata",
      "Capacitación continua en trato corporativo",
      "Indicadores KPI de satisfacción mensual",
    ],
  },
];

export default function Differentials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            content.differentials.forEach((_, i) => {
              setTimeout(() => {
                setVisible((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, i * 180);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="diferenciales" className="bg-light-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            ¿Por Qué Elegir DINÁMICA?
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-brand-black sm:text-4xl">
            Excelencia en limpieza de oficinas y saneamiento
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-brand-gray">
            Lo que nos diferencia es nuestro compromiso total con la formalidad laboral, la seguridad y el estándar impecable de tu empresa.
          </p>
        </div>

        <div
          ref={sectionRef}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: "1200px" }}
        >
          {content.differentials.map((item, i) => (
            <div
              key={i}
              className="group"
              style={{
                height: "330px",
                opacity: visible[i] ? 1 : 0,
                transform: visible[i] ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.6s ease ${i * 0.18}s, transform 0.6s ease ${i * 0.18}s`,
              }}
            >
              <div
                className="relative h-full w-full transition-transform duration-700 ease-in-out"
                style={{ transformStyle: "preserve-3d" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "rotateY(180deg)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "rotateY(0deg)";
                }}
              >
                {/* Front Face */}
                <div
                  className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div>
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {icons[item.icon]}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-brand-black">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-gray">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                    <span>Pasa el cursor para ver garantías</span>
                    <span>→</span>
                  </div>
                </div>

                {/* Back Face in Official Royal Blue + Yellow Accent */}
                <div
                  className="absolute inset-0 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-2xl"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="mb-4">
                    <span
                      style={{ fontFamily: "var(--font-display)" }}
                      className="text-4xl font-bold text-accent"
                    >
                      {backContent[i].stats}
                    </span>
                    <p className="mt-1 text-sm font-semibold text-white/90">
                      {backContent[i].statsLabel}
                    </p>
                  </div>

                  <ul className="space-y-2.5">
                    {backContent[i].details.map((detail, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm text-white/95"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
