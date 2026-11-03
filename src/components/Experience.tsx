"use client";

import React, { useEffect, useRef, useState } from "react";
import { content } from "@/content/content";

const sectorData: Record<
  string,
  {
    title: string;
    image: string;
    services: string[];
    clients: string[];
    description: string;
  }
> = {
  Oficinas: {
    title: "Oficinas y Corporativos",
    image: "/sector-oficinas.jpg",
    services: [
      "Limpieza diaria de oficinas y directorios",
      "Higienización de call centers y coworkings",
      "Limpieza de vidrios, alfombras y mobiliario",
    ],
    clients: ["Sedes Corporativas", "Embajadas", "Call Centers"],
    description:
      "Especialistas en mantener oficinas ejecutivas y centros empresariales impecables, saludables y listos para la alta productividad.",
  },
  Comercio: {
    title: "Comercio e Instituciones",
    image: "/sector-comercio.jpg",
    services: [
      "Mantenimiento de lobbies y áreas comunes",
      "Tratamiento y pulido de pisos de mármol",
      "Colegios, universidades y bancos",
    ],
    clients: ["USIL", "COES SINAC", "Centros Empresariales"],
    description:
      "Atención integral para edificios institucionales, embajadas, centros educativos y locales comerciales de alto tránsito.",
  },
  Industria: {
    title: "Almacenes e Industria",
    image: "/sector-industria.jpg",
    services: [
      "Barrido y fregado mecanizado de almacenes",
      "Limpieza de plantas y centros logísticos",
      "Desempolvado de estructuras en altura",
    ],
    clients: ["ETNA", "ElectroDunas", "Centros de Distribución"],
    description:
      "Soluciones de limpieza industrial con maquinaria de alto rendimiento para almacenes, centros logísticos y plantas.",
  },
  Salud: {
    title: "Salud y Laboratorios",
    image: "/sector-salud.jpg",
    services: [
      "Desinfección clínica y áreas críticas",
      "Protocolos estrictos de bioseguridad",
      "Saneamiento ambiental certificado DIGESA",
    ],
    clients: ["CIP", "Clínicas Privadas", "Centros Médicos"],
    description:
      "Desinfección de alto nivel y saneamiento ambiental bajo rigurosos estándares sanitarios para clínicas, consultorios y laboratorios.",
  },
};

const sectorKeys = Object.keys(sectorData);

const highlightIcons: Record<string, React.ReactNode> = {
  users: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  sparkles: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  ),
  shield: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  sliders: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
    </svg>
  ),
  leaf: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" />
    </svg>
  ),
  clock: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const activeSector = sectorKeys[activeTab];
  const activeData = sectorData[activeSector];

  return (
    <section id="experiencia" className="bg-light-bg py-20 lg:py-28">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-2">
          <div>
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Sectores Especializados
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-brand-black sm:text-4xl lg:text-5xl">
              Comprometidos con la{" "}
              <span className="text-primary">Limpieza, Seguridad</span> y Productividad.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-brand-gray">
              {content.experience.description}
            </p>
          </div>
        </div>

        {/* Mobile Tabs */}
        <div className="lg:hidden">
          <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
            {sectorKeys.map((sector, i) => (
              <button
                key={sector}
                onClick={() => setActiveTab(i)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === i
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-white text-brand-gray hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {sectorData[sector].title}
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="relative h-56 w-full overflow-hidden">
              <picture>
                <source
                  srcSet={activeData.image.replace(/\.(jpg|png)$/, ".webp")}
                  type="image/webp"
                />
                <img
                  src={activeData.image}
                  alt={activeData.title}
                  width={640}
                  height={360}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
              <h3 className="absolute bottom-4 left-5 text-2xl font-bold text-white">
                {activeData.title}
              </h3>
            </div>
            <div className="p-6">
              <p className="mb-4 text-sm leading-relaxed text-brand-gray">
                {activeData.description}
              </p>
              <ul className="mb-4 space-y-2">
                {activeData.services.map((s, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2.5 text-sm text-brand-gray"
                  >
                    <svg
                      className="h-4 w-4 shrink-0 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop Interactive Hover Cards */}
        <div className="hidden lg:grid gap-6 lg:grid-cols-4">
          {sectorKeys.map((sector, i) => {
            const data = sectorData[sector];
            return (
              <div
                key={sector}
                className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                }}
              >
                <picture>
                  <source
                    srcSet={data.image.replace(/\.(jpg|png)$/, ".webp")}
                    type="image/webp"
                  />
                  <img
                    src={data.image}
                    alt={data.title}
                    width={480}
                    height={360}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </picture>

                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-brand-black/25 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                <div className="absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-500 group-hover:opacity-0">
                  <span className="mb-2 inline-block h-1 w-8 rounded-full bg-accent" />
                  <h3 className="text-xl font-bold text-white">{data.title}</h3>
                  <p className="mt-1 text-xs font-medium text-white/80">
                    Explorar soluciones →
                  </p>
                </div>

                {/* Hover Overlay in Dinámica Royal Blue */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary-dark via-primary-dark/95 to-primary/90 p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {data.title}
                  </h3>
                  <p className="mb-4 text-xs leading-relaxed text-white/85">
                    {data.description}
                  </p>
                  <ul className="mb-4 space-y-1.5">
                    {data.services.map((s, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-xs text-white/95"
                      >
                        <svg
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
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
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-white/15 pt-3">
                    <p className="text-[11px] font-semibold text-accent">
                      {data.clients.join(" · ")}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 6 Pillars from WordPress Homepage */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.highlights.map((item, idx) => (
            <div
              key={idx}
              className="group flex items-start gap-4 rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                {highlightIcons[item.icon]}
              </div>
              <div>
                <h3 className="text-base font-bold text-brand-black">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-gray">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
