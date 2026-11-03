"use client";

import React, { useState } from "react";
import Link from "next/link";
import { content } from "@/content/content";
import ServiceModal from "./ServiceModal";

const icons: Record<string, React.ReactNode> = {
  building: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
  wrench: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
    </svg>
  ),
  shield: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
};

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <>
      <section id="servicios" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Soluciones Corporativas B2B
            </span>
            <h2 className="mb-4 text-3xl font-extrabold text-brand-black sm:text-4xl lg:text-5xl">
              Nuestros Servicios Especializados
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-brand-gray">
              Soluciones integrales de limpieza de oficinas, saneamiento ambiental certificado y mantenimiento de instalaciones en todo el Perú.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {content.services.map((service, i) => (
              <div
                key={i}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-1.5"
              >
                {/* Top Electric Blue + Yellow Accent Bar */}
                <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-primary via-primary-dark to-accent opacity-0 transition-opacity group-hover:opacity-100 z-10" />

                {/* Service Image */}
                {service.image && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                    <picture>
                      <source
                        srcSet={service.image.replace(/\.(jpg|png)$/, ".webp")}
                        type="image/webp"
                      />
                      <img
                        src={service.image}
                        alt={service.title}
                        width={640}
                        height={400}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-4 inline-flex h-13 w-13 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    {icons[service.icon]}
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-brand-black group-hover:text-primary transition-colors">
                    <Link href={`/servicios/${service.slug}/`}>
                      {service.title}
                    </Link>
                  </h3>

                  <p className="mb-4 flex-1 text-sm leading-relaxed text-brand-gray">
                    {service.description}
                  </p>

                  {service.registrations && (
                    <p className="mb-5 rounded-lg bg-light-bg px-3 py-2 text-xs font-semibold text-primary-dark">
                      {service.registrations}
                    </p>
                  )}

                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <button
                      onClick={() => setActiveService(i)}
                      className="inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:text-primary-dark cursor-pointer"
                    >
                      Vista rápida
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>

                    <Link
                      href={`/servicios/${service.slug}/`}
                      className="text-xs font-semibold text-brand-gray hover:text-primary transition-colors"
                    >
                      Ir a la página →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeService !== null && (
        <ServiceModal
          service={content.services[activeService]}
          onClose={() => setActiveService(null)}
        />
      )}
    </>
  );
}
