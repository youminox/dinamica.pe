"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Evaluamos las áreas, metraje y necesidades específicas de tu oficina con un análisis técnico detallado.",
    image: "/proceso-diagnostico.jpg",
    detail:
      "Nuestro equipo de especialistas realiza una visita técnica sin costo a tus oficinas o instalaciones para evaluar el estado actual, identificar zonas de alto tránsito, tipos de pisos, mobiliario y protocolos sanitarios requeridos. Este diagnóstico nos permite diseñar una propuesta 100% personalizada y eficiente.",
    highlights: [
      "Inspección técnica presencial sin costo",
      "Identificación de áreas críticas y tráfico",
      "Evaluación de superficies y protocolos",
      "Informe técnico con dimensionamiento óptimo",
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Plan a Medida",
    description:
      "Diseñamos un plan operativo con horarios, rutinas diarias/semanales, maquinaria e insumos.",
    image: "/proceso-plan.jpg",
    detail:
      "Con base en el diagnóstico, elaboramos un plan de trabajo detallado que incluye cronogramas por zonas, asignación de operarios en planilla, selección de maquinaria silenciosa e insumos biodegradables. Adaptamos los turnos a los horarios de tu oficina para cero interrupciones.",
    highlights: [
      "Cronograma de actividades por ambientes",
      "Asignación óptima de personal y retenes",
      "Selección de equipos e insumos certificados",
      "Definición de KPIs y métricas de calidad",
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Ejecución",
    description:
      "Personal uniformado, en planilla y con SCTR ejecuta la limpieza con tecnología avanzada.",
    image: "/proceso-ejecucion.jpg",
    detail:
      "Operarios uniformados con la identidad de DINÁMICA, capacitados y acreditados con SCTR y verificación de antecedentes ejecutan las labores según los protocolos establecidos. Utilizamos equipos modernos, código de colores en microfibras y desinfectantes autorizados por DIGESA.",
    highlights: [
      "Personal uniformado en planilla con SCTR",
      "Equipos modernos de bajo nivel sonoro",
      "Insumos biodegradables certificados",
      "Cumplimiento de la Ley 29783 de SST",
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Supervisión",
    description:
      "Supervisores zonales verifican en campo cada detalle y aseguran cobertura inmediata.",
    image: "/proceso-supervision.jpg",
    detail:
      "Contamos con supervisores de campo que realizan inspecciones periódicas mediante checklists digitales y control de asistencia en tiempo real. Ante cualquier eventualidad, activamos personal de retén de inmediato para garantizar continuidad operativa al 100%.",
    highlights: [
      "Supervisión continua en campo",
      "Checklists digitales de calidad",
      "Cobertura inmediata con retenes",
      "Comunicación directa 24/7",
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Reporte y KPIs",
    description:
      "Entregamos informes ejecutivos con evidencia fotográfica, certificados y métricas de cumplimiento.",
    image: "/proceso-reporte.jpg",
    detail:
      "Generamos reportes periódicos de gestión que incluyen evidencia del servicio, control de consumo de materiales, certificados de saneamiento ambiental y métricas de satisfacción para total transparencia y mejora continua con la administración de tu empresa.",
    highlights: [
      "Reportes ejecutivos periódicos",
      "Evidencia fotográfica antes y después",
      "Control de insumos y certificados",
      "Reuniones de mejora continua",
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28 bg-dots-pattern">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            Metodología DINÁMICA
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-brand-black sm:text-4xl">
            Nuestro proceso de trabajo
          </h2>
          <p className="text-lg text-brand-gray">
            Un enfoque sistemático de 5 etapas que garantiza oficinas impecables y cero preocupaciones operativas.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 pt-8 text-left shadow-sm transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1.5"
            >
              <span
                style={{ fontFamily: "var(--font-display)" }}
                className="absolute -right-2 -top-3 text-[5.5rem] font-bold leading-none text-gray-100 transition-colors duration-500 group-hover:text-primary/10 select-none"
              >
                {step.number}
              </span>

              <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                {step.icon}
              </div>

              <h3 className="relative mb-2 text-lg font-bold text-brand-black group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-brand-gray">
                {step.description}
              </p>

              <span className="relative mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                Ver detalle
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Solicitar diagnóstico gratuito para mi oficina
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Step Detail Modal */}
      {activeStep !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm"
          onClick={() => setActiveStep(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveStep(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-lg transition-colors hover:bg-white hover:text-brand-black cursor-pointer"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative h-64 w-full overflow-hidden sm:h-80">
              <picture>
                <source
                  srcSet={steps[activeStep].image.replace(/\.(jpg|png)$/, ".webp")}
                  type="image/webp"
                />
                <img
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  width={640}
                  height={360}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <div className="mb-2 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold">
                    {steps[activeStep].number}
                  </span>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-extrabold text-brand-black">
                    Paso {parseInt(steps[activeStep].number, 10)} de 5
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {steps[activeStep].title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="mb-6 text-base leading-relaxed text-brand-gray">
                {steps[activeStep].detail}
              </p>

              <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-brand-black">
                Entregables y Garantías de esta etapa
              </h4>
              <ul className="mb-8 grid gap-3 sm:grid-cols-2">
                {steps[activeStep].highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl bg-light-bg p-3.5"
                  >
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium text-brand-gray">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <button
                  onClick={() =>
                    setActiveStep(
                      activeStep > 0 ? activeStep - 1 : steps.length - 1
                    )
                  }
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gray transition-colors hover:text-primary cursor-pointer"
                >
                  ← Paso anterior
                </button>
                <button
                  onClick={() =>
                    setActiveStep(
                      activeStep < steps.length - 1 ? activeStep + 1 : 0
                    )
                  }
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark cursor-pointer"
                >
                  Paso siguiente →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
