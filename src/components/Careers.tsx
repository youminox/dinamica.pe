import { content } from "@/content/content";

export default function Careers() {
  return (
    <section
      id="trabaja"
      className="relative overflow-hidden bg-light-bg py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
              <picture>
                <source srcSet="/trabaja-con-nosotros.webp" type="image/webp" />
                <img
                  src="/trabaja-con-nosotros.jpg"
                  alt="Equipo profesional DINÁMICA SERVICIO DE LIMPIEZA SAC"
                  width={600}
                  height={448}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/30" />
          </div>

          {/* Content */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Únete a DINÁMICA
            </span>
            <h2 className="mb-6 text-3xl font-extrabold text-brand-black sm:text-4xl">
              Trabaja con nosotros
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-brand-gray">
              En <strong>DINAMICA SERVICIO DE LIMPIEZA SAC</strong> valoramos el compromiso, la puntualidad y la vocación de servicio. Ofrecemos ingreso a planilla desde el primer día y un ambiente laboral seguro.
            </p>
            <p className="mb-8 text-base leading-relaxed text-brand-gray">
              Buscamos operarios de limpieza de oficinas, especialistas en saneamiento ambiental y supervisores que deseen crecer profesionalmente con nosotros.
            </p>

            <ul className="mb-10 space-y-3">
              {[
                "Ingreso a planilla con todos los beneficios de ley y SCTR",
                "Capacitación continua en limpieza corporativa y seguridad",
                "Pagos puntuales y excelente clima laboral",
                "Vacantes en Santiago de Surco, San Isidro, Miraflores y toda Lima",
              ].map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm font-medium text-brand-gray"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
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
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${content.company.email}?subject=Postulaci%C3%B3n%20Laboral%20-%20DIN%C3%81MICA`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5"
              >
                Enviar CV por Correo
              </a>
              <a
                href={`https://wa.me/${content.company.whatsapp}?text=${encodeURIComponent(
                  "Hola DINÁMICA, deseo postular a una vacante de personal de limpieza."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-green-600 bg-white px-8 py-4 text-base font-bold text-green-600 transition-all hover:bg-green-600 hover:text-white hover:-translate-y-0.5"
              >
                Postular por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
