import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { content } from "@/content/content";

export const metadata: Metadata = {
  title:
    "Servicio de Limpieza para Oficinas y Empresas en Lima | DINÁMICA",
  description:
    "Servicio profesional de limpieza para oficinas corporativas, call centers, embajadas y edificios empresariales en Lima. Personal 100% en planilla con SCTR y seguro. Cotiza ahora.",
  alternates: {
    canonical: "https://dinamica.pe/servicios/limpieza-para-empresas/",
  },
  openGraph: {
    title: "Servicio de Limpieza para Oficinas y Empresas en Lima | DINÁMICA",
    description:
      "Servicio profesional de limpieza para oficinas corporativas, call centers y edificios en Lima. Personal capacitado en planilla con SCTR.",
    type: "website",
    images: [
      {
        url: "https://dinamica.pe/servicio-limpieza.jpg",
        width: 1024,
        height: 1024,
      },
    ],
  },
};

const serviceData = content.services[0];

export default function LimpiezaParaEmpresasPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Servicio de Limpieza para Oficinas y Empresas",
      url: "https://dinamica.pe/servicios/limpieza-para-empresas/",
      provider: {
        "@type": "Organization",
        name: "DINAMICA SERVICIO DE LIMPIEZA SAC",
        url: "https://dinamica.pe",
      },
      description: serviceData.description,
      areaServed: "Lima, Perú",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://dinamica.pe/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Servicios",
          item: "https://dinamica.pe/servicios/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Limpieza para Oficinas y Empresas",
          item: "https://dinamica.pe/servicios/limpieza-para-empresas/",
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24 pb-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider mb-5 border border-primary/20">
                  {serviceData.registrations}
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6">
                  Servicio de Limpieza para Oficinas y Empresas en Lima
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {serviceData.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@dinamica.pe?subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20Limpieza%20de%20Oficinas"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white transition hover:bg-primary-dark shadow-md"
                  >
                    Solicitar Cotización
                  </a>
                  <a
                    href={`https://wa.me/${content.contact.whatsapp}?text=${encodeURIComponent(
                      content.contact.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#1EBE5D] shadow-md"
                  >
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/servicio-limpieza.jpg"
                  alt="Servicio de Limpieza para Oficinas y Empresas - Dinámica"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              ¿Qué incluye nuestro servicio de limpieza corporativa?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceData.details?.map((detail, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-all"
                >
                  <div className="h-2 w-10 rounded-full bg-primary mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {detail.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectores */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Espacios y sectores que atendemos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary/40 transition">
                <h3 className="font-bold text-lg text-primary mb-2">
                  Oficinas Corporativas y Call Centers
                </h3>
                <p className="text-gray-600 text-sm">
                  Sedes ejecutivas, coworkings, call centers de alta rotación,
                  directorios y edificios empresariales.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary/40 transition">
                <h3 className="font-bold text-lg text-primary mb-2">
                  Embajadas, Colegios y Universidades
                </h3>
                <p className="text-gray-600 text-sm">
                  Sedes diplomáticas, organismos internacionales, campus
                  universitarios e instituciones educativas.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary/40 transition">
                <h3 className="font-bold text-lg text-primary mb-2">
                  Locales Comerciales y Bancos
                </h3>
                <p className="text-gray-600 text-sm">
                  Agencias financieras, showrooms, tiendas retail y centros
                  empresariales de alto tránsito.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary/40 transition">
                <h3 className="font-bold text-lg text-primary mb-2">
                  Almacenes, Plantas y Clínicas
                </h3>
                <p className="text-gray-600 text-sm">
                  Centros logísticos, laboratorios, consultorios médicos e
                  instalaciones industriales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué elegir Dinámica */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              ¿Por qué elegir DINÁMICA?
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                Personal 100% en planilla con todos los beneficios de ley, SCTR
                Salud/Pensión y Seguro Vida Ley desde el primer día.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                Filtros rigurosos de selección: verificación de antecedentes
                policiales, penales, judiciales y evaluación psicológica.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                Supervisión presencial y reemplazo garantizado de personal en
                menos de 2 horas ante cualquier contingencia.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                Uso de maquinaria moderna silenciosa e insumos biodegradables
                autorizados por DIGESA.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 font-bold">✓</span>
                Cumplimiento estricto de la Ley N° 29783 de Seguridad y Salud en
                el Trabajo.
              </li>
            </ul>
          </div>
        </section>

        {/* Otros servicios */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Otros servicios complementarios
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link
                href="/servicios/saneamiento-ambiental/"
                className="block rounded-xl border border-gray-200 p-6 bg-white transition hover:shadow-lg hover:border-primary/40 hover:-translate-y-1 text-left"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Saneamiento Ambiental y Desinfección
                </h3>
                <p className="text-gray-600 text-sm">
                  Desinfección ULV, fumigación, desratización y limpieza de
                  reservorios de agua con certificado oficial.
                </p>
              </Link>
              <Link
                href="/servicios/mantenimiento-integral/"
                className="block rounded-xl border border-gray-200 p-6 bg-white transition hover:shadow-lg hover:border-primary/40 hover:-translate-y-1 text-left"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Mantenimiento Integral de Instalaciones
                </h3>
                <p className="text-gray-600 text-sm">
                  Electricidad, gasfitería, pintura corporativa, luminarias LED,
                  cerrajería y drywall para oficinas.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
