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

        {/* Cobertura por Distritos en Lima y Ciudades del Perú (SEO Internal Linking) */}
        <div className="mt-10 space-y-3 border-t border-gray-100 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5 text-xs text-brand-gray">
            <span className="font-bold text-brand-black uppercase tracking-wider">
              Distritos de Lima:
            </span>
            <a
              href="/blog/servicio-de-limpieza-de-oficinas-en-santiago-de-surco/"
              className="transition-colors hover:text-primary"
            >
              Santiago de Surco
            </a>
            <span>·</span>
            <a
              href="/blog/limpieza-de-oficinas-corporativas-en-san-isidro/"
              className="transition-colors hover:text-primary"
            >
              San Isidro
            </a>
            <span>·</span>
            <a
              href="/blog/empresa-de-limpieza-para-oficinas-y-locales-en-miraflores/"
              className="transition-colors hover:text-primary"
            >
              Miraflores
            </a>
            <span>·</span>
            <a
              href="/blog/limpieza-de-oficinas-y-centros-medicos-en-san-borja/"
              className="transition-colors hover:text-primary"
            >
              San Borja
            </a>
            <span>·</span>
            <a
              href="/blog/servicio-de-limpieza-para-empresas-y-colegios-en-la-molina/"
              className="transition-colors hover:text-primary"
            >
              La Molina
            </a>
            <span>·</span>
            <a
              href="/blog/limpieza-de-edificios-corporativos-y-oficinas-en-magdalena/"
              className="transition-colors hover:text-primary"
            >
              Magdalena del Mar
            </a>
            <span>·</span>
            <a
              href="/blog/limpieza-de-oficinas-y-edificios-comerciales-en-lince/"
              className="transition-colors hover:text-primary"
            >
              Lince
            </a>
            <span>·</span>
            <a
              href="/blog/servicio-de-limpieza-para-instituciones-y-oficinas-en-jesus-maria/"
              className="transition-colors hover:text-primary"
            >
              Jesús María
            </a>
            <span>·</span>
            <a
              href="/blog/limpieza-de-oficinas-centros-comerciales-e-institutos-en-san-miguel/"
              className="transition-colors hover:text-primary"
            >
              San Miguel
            </a>
            <span>·</span>
            <a
              href="/blog/limpieza-de-sedes-corporativas-e-industriales-en-cercado-de-lima/"
              className="transition-colors hover:text-primary"
            >
              Cercado de Lima
            </a>
            <span>·</span>
            <a
              href="/blog/limpieza-industrial-y-de-oficinas-en-chorrillos-y-lurin/"
              className="transition-colors hover:text-primary"
            >
              Chorrillos y Lurín
            </a>
            <span>·</span>
            <a
              href="/blog/limpieza-industrial-y-de-oficinas-administrativas-en-ate/"
              className="transition-colors hover:text-primary"
            >
              Ate
            </a>
            <span>·</span>
            <a
              href="/blog/limpieza-de-oficinas-logisticas-y-almacenes-en-el-callao/"
              className="transition-colors hover:text-primary"
            >
              Callao
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5 text-xs text-brand-gray">
            <span className="font-bold text-brand-black uppercase tracking-wider">
              Ciudades del Perú:
            </span>
            <a
              href="/blog/servicio-de-limpieza-de-oficinas-y-empresas-en-arequipa/"
              className="transition-colors hover:text-primary"
            >
              Arequipa
            </a>
            <span>·</span>
            <a
              href="/blog/empresa-de-limpieza-para-oficinas-e-industrias-en-trujillo/"
              className="transition-colors hover:text-primary"
            >
              Trujillo
            </a>
            <span>·</span>
            <a
              href="/blog/limpieza-de-oficinas-corporativas-y-contratistas-mineros-en-huaraz/"
              className="transition-colors hover:text-primary"
            >
              Huaraz
            </a>
            <span>·</span>
            <a
              href="/blog/servicio-de-limpieza-para-empresas-agroindustriales-y-oficinas-en-ica/"
              className="transition-colors hover:text-primary"
            >
              Ica
            </a>
            <span>·</span>
            <a
              href="/blog/limpieza-de-oficinas-y-empresas-en-piura-saneamiento-y-mantenimiento/"
              className="transition-colors hover:text-primary"
            >
              Piura
            </a>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 sm:flex-row">
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
