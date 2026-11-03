"use client";

import { content } from "@/content/content";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-12">
          {/* Brand Column */}
          <div>
            <a href="/" className="inline-flex items-center gap-2">
              <picture>
                <source srcSet="/logo-dinamica.webp" type="image/webp" />
                <img
                  src="/logo-dinamica.png"
                  alt="DINAMICA SERVICIO DE LIMPIEZA SAC"
                  width={200}
                  height={44}
                  className="h-10 w-auto"
                  loading="lazy"
                />
              </picture>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-gray">
              {content.company.slogan}. Especialistas en oficinas corporativas, embajadas, colegios y almacenes en todo el Perú.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="mb-4 text-xs font-extrabold text-brand-black uppercase tracking-wider">
              Navegación y Servicios
            </h3>
            <ul className="space-y-2.5 text-sm text-brand-gray">
              <li>
                <a
                  href="/servicios/limpieza-para-empresas/"
                  className="transition-colors hover:text-primary"
                >
                  Limpieza para Oficinas y Empresas
                </a>
              </li>
              <li>
                <a
                  href="/servicios/saneamiento-ambiental/"
                  className="transition-colors hover:text-primary"
                >
                  Saneamiento Ambiental y Desinfección
                </a>
              </li>
              <li>
                <a
                  href="/servicios/mantenimiento-integral/"
                  className="transition-colors hover:text-primary"
                >
                  Mantenimiento Integral
                </a>
              </li>
              <li>
                <a
                  href="/brochure/"
                  className="transition-colors hover:text-primary"
                >
                  Brochure Corporativo
                </a>
              </li>
              <li>
                <a
                  href="/blog/"
                  className="transition-colors hover:text-primary"
                >
                  Blog y Guías de Limpieza
                </a>
              </li>
            </ul>
          </div>

          {/* Datos de la Empresa */}
          <div>
            <h3 className="mb-4 text-xs font-extrabold text-brand-black uppercase tracking-wider">
              Datos de la Empresa
            </h3>
            <div className="space-y-2.5 text-sm text-brand-gray">
              <p className="font-bold text-brand-black">
                {content.company.legalName}
              </p>
              <p>
                <span className="font-semibold text-brand-black">RUC:</span>{" "}
                {content.company.ruc}
              </p>
              <p>
                <span className="font-semibold text-brand-black">Email:</span>{" "}
                <a
                  href={`mailto:${content.company.email}`}
                  className="font-medium text-primary hover:underline"
                >
                  {content.company.email}
                </a>
              </p>
              <p>
                <span className="font-semibold text-brand-black">
                  Teléfono / WhatsApp:
                </span>{" "}
                <a
                  href={`https://wa.me/${content.company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  {content.company.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Ubicación */}
          <div>
            <h3 className="mb-4 text-xs font-extrabold text-brand-black uppercase tracking-wider">
              Sede Corporativa
            </h3>
            <p className="text-sm leading-relaxed text-brand-gray">
              {content.company.address}.
            </p>
            <div className="mt-4">
              <a
                href="/contacto/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark"
              >
                Ver mapa y contacto →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row">
          <p className="text-xs text-brand-gray">{content.footer.copyright}</p>
          <div className="flex flex-wrap justify-center gap-5">
            {content.footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-brand-gray transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
