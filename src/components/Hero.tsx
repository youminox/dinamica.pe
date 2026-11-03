"use client";

import { content } from "@/content/content";

export default function Hero({ onOpenQuote }: { onOpenQuote?: () => void }) {
  const whatsappUrl = `https://wa.me/${content.company.whatsapp}?text=${encodeURIComponent(
    "Hola DINÁMICA, me interesa cotizar el servicio de limpieza para nuestras oficinas."
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-light-bg/60 to-blue-50/80 pt-24 pb-16 lg:pt-32 lg:pb-24 bg-grid-pattern">
      {/* Ambient Brand Glows */}
      <div className="pointer-events-none absolute -top-20 right-0 -z-10 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 -z-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse gap-12 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-white/90 px-4 py-2 text-xs sm:text-sm font-semibold text-primary-dark shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              {content.hero.badge}
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-brand-black sm:text-5xl lg:text-[3.5rem]">
              Servicio de Limpieza Profesional para{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Oficinas y Empresas
              </span>{" "}
              en Perú.
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-brand-gray lg:text-xl">
              {content.hero.subtitle}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:gap-4">
              {/* AI Quote Button */}
              <button
                onClick={onOpenQuote}
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl px-7 py-4 text-base font-bold text-white shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer animate-pulse-glow"
                style={{
                  background:
                    "linear-gradient(135deg, #0767db 0%, #03428e 100%)",
                }}
              >
                {/* Sparkle Icon in Official Yellow Accent */}
                <svg
                  className="relative h-5 w-5 text-accent transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                </svg>
                <span className="relative">Genera cotización con IA</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-700" />
              </button>

              {/* WhatsApp Direct CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-white px-7 py-4 text-base font-bold text-primary shadow-sm transition-all hover:bg-primary hover:text-white hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hablar por WhatsApp
              </a>
            </div>

            {/* Trust Bullets */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
              {content.hero.trustBullets.map((bullet, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm font-medium text-brand-gray"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      className="h-3.5 w-3.5"
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
                  </span>
                  {bullet}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Staff Portrait + Floating Impact Badges */}
          <div className="lg:col-span-5 relative flex items-end justify-center">
            {/* Dual Brand Circle Backdrop */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-tr from-primary-dark/15 via-primary/10 to-accent/25 blur-sm" />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[270px] h-[270px] sm:w-[340px] sm:h-[340px] rounded-full border-2 border-primary/15" />

            <picture>
              <source srcSet="/hero-image.webp" type="image/webp" />
              <img
                src="/hero-image.png"
                alt="Personal profesional de limpieza de oficinas DINÁMICA"
                width={600}
                height={420}
                fetchPriority="high"
                decoding="sync"
                className="relative z-10 h-auto w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[520px] object-contain drop-shadow-2xl"
              />
            </picture>

            {/* Floating Badge 1: Left */}
            <div className="absolute bottom-6 -left-2 sm:left-0 z-20 rounded-2xl border border-white/80 bg-white/95 p-3.5 shadow-xl backdrop-blur-md animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/30">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-extrabold text-brand-black sm:text-sm">
                    Personal 100% en Planilla
                  </p>
                  <p className="text-[11px] font-medium text-brand-gray">
                    SCTR · Vida Ley · Póliza RC
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge 2: Top Right */}
            <div className="absolute top-6 right-0 z-20 hidden sm:flex items-center gap-2.5 rounded-2xl border border-primary/15 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-md animate-float-delayed">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-brand-black font-extrabold text-xs">
                24h
              </span>
              <div>
                <p className="text-xs font-bold text-brand-black">
                  Cotización Rápida
                </p>
                <p className="text-[11px] text-brand-gray">
                  Visita técnica sin costo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
