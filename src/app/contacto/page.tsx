import { Metadata } from "next";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { content } from "@/content/content";

export const metadata: Metadata = {
  title: "Contacto y Cotizaciones | DINÁMICA Servicio de Limpieza SAC",
  description:
    "Solicita tu cotización de servicios de limpieza para oficinas en Lima. Correo: info@dinamica.pe | WhatsApp: +51 981 561 681. Calle Los Antares 320, Of. 602, Surco.",
  alternates: {
    canonical: "https://dinamica.pe/contacto/",
  },
};

export default function ContactoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacto y Cotizaciones - DINAMICA SERVICIO DE LIMPIEZA SAC",
    description:
      "Página de contacto para solicitar cotizaciones de servicios de limpieza de oficinas y saneamiento ambiental.",
    url: "https://dinamica.pe/contacto/",
    mainEntity: {
      "@type": "Organization",
      name: "DINAMICA SERVICIO DE LIMPIEZA SAC",
      taxID: "20612233161",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+51-981-561-681",
          contactType: "customer service",
          email: "info@dinamica.pe",
          availableLanguage: "es",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Calle Los Antares 320, Oficina 602, Torre B, Urbanización La Arbolada",
        addressLocality: "Santiago de Surco",
        addressRegion: "Lima",
        addressCountry: "PE",
      },
    },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 pb-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero Section */}
        <section className="bg-white py-14 text-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Atención Inmediata B2B
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Contacto y <span className="text-primary">Cotizaciones</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Estamos listos para atender los requerimientos de limpieza y
              mantenimiento de tu oficina. Un asesor comercial te responderá en
              menos de 24 horas.
            </p>
          </div>
        </section>

        {/* Info Cards */}
        <section className="bg-gray-50 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* WhatsApp / Teléfono */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 text-lg">
                    Teléfono / WhatsApp
                  </h2>
                  <p className="text-gray-600 mt-1">{content.company.phone}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    RUC: {content.company.ruc}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 text-lg">
                    Correo Electrónico
                  </h2>
                  <p className="text-gray-600 mt-1">{content.company.email}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Cotizaciones y atención corporativa
                  </p>
                </div>
              </div>

              {/* Dirección */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 text-lg">
                    Oficina Principal
                  </h2>
                  <p className="text-gray-600 mt-1 text-sm">
                    Calle Los Antares 320, Oficina 602, Torre B
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    Urbanización La Arbolada, Santiago de Surco, Lima, Perú
                  </p>
                </div>
              </div>

              {/* Horario */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 text-lg">
                    Horario de Atención
                  </h2>
                  <p className="text-gray-600 mt-1 text-sm">
                    Lunes a Viernes: 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    Sábados: 9:00 AM - 1:00 PM (Operaciones 24/7)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario */}
        <Contact />

        {/* Mapa */}
        <section className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2!2d-76.9774!3d-12.1068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA2JzI0LjUiUyA3NsKwNTgnMzguNiJX!5e0!3m2!1ses!2spe!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de DINAMICA SERVICIO DE LIMPIEZA SAC"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
