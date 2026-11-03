"use client";

import { useEffect } from "react";
import { content } from "@/content/content";

interface ServiceDetail {
  title: string;
  description: string;
}

interface ServiceItem {
  title: string;
  slug?: string;
  description: string;
  icon: string;
  image?: string;
  registrations?: string;
  details: ServiceDetail[];
}

export default function ServiceModal({
  service,
  onClose,
}: {
  service: ServiceItem;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const whatsappUrl = `https://wa.me/${content.company.whatsapp}?text=${encodeURIComponent(
    `Hola DINÁMICA, me interesa cotizar: ${service.title}`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={service.title}
    >
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />

      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-0 float-right rounded-lg p-2 text-brand-gray transition-colors hover:bg-gray-100 hover:text-brand-black cursor-pointer"
          aria-label="Cerrar"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="mb-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Servicio Especializado DINÁMICA
          </div>
          <h3 className="text-2xl font-bold text-brand-black sm:text-3xl">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-gray">
            {service.description}
          </p>
        </div>

        <div className="mb-6 border-t border-gray-100" />

        <div className="space-y-4">
          {service.details.map((detail, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 bg-light-bg/60 p-5 transition-colors hover:border-primary/25"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-bold text-brand-black">{detail.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-brand-gray">
                    {detail.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-green-700"
          >
            Consultar por WhatsApp
          </a>
          <a
            href={`mailto:${content.company.email}?subject=${encodeURIComponent(
              `Solicitud de Cotización: ${service.title}`
            )}`}
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
          >
            Cotizar este servicio
          </a>
        </div>
      </div>
    </div>
  );
}
