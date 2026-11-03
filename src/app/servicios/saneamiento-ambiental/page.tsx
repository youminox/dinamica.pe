import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { content } from "@/content/content";

export const metadata: Metadata = {
  title:
    "Saneamiento Ambiental y Desinfección de Oficinas en Lima | DINÁMICA",
  description:
    "Servicio de saneamiento ambiental con insumos autorizados por DIGESA: desinfección ULV, fumigación, desratización y limpieza de reservorios para oficinas y empresas en Lima.",
  alternates: {
    canonical: "https://dinamica.pe/servicios/saneamiento-ambiental/",
  },
  openGraph: {
    title:
      "Saneamiento Ambiental y Desinfección de Oficinas en Lima | DINÁMICA",
    description:
      "Desinfección, desratización, desinsectación y limpieza de reservorios con insumos autorizados por DIGESA.",
    type: "website",
    images: [
      {
        url: "https://dinamica.pe/servicio-saneamiento.jpg",
        width: 1024,
        height: 1024,
      },
    ],
  },
};

const serviceData = content.services[1];

export default function SaneamientoAmbientalPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Saneamiento Ambiental y Desinfección",
      url: "https://dinamica.pe/servicios/saneamiento-ambiental/",
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
          name: "Saneamiento Ambiental",
          item: "https://dinamica.pe/servicios/saneamiento-ambiental/",
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
                  Saneamiento Ambiental y Desinfección en Lima
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {serviceData.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@dinamica.pe?subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20Saneamiento%20Ambiental"
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
                  src="/servicio-saneamiento.jpg"
                  alt="Saneamiento Ambiental y Desinfección de Oficinas - Dinámica"
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
              Nuestros servicios de Saneamiento Ambiental
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

        {/* Otros servicios */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Otros servicios que ofrecemos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link
                href="/servicios/limpieza-para-empresas/"
                className="block rounded-xl border border-gray-200 p-6 bg-white transition hover:shadow-lg hover:border-primary/40 hover:-translate-y-1 text-left"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Limpieza para Oficinas y Empresas
                </h3>
                <p className="text-gray-600 text-sm">
                  Limpieza integral de oficinas corporativas, call centers,
                  embajadas y locales comerciales con personal en planilla.
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
                  Electricidad, gasfitería, pintura corporativa, luminarias LED y
                  cerrajería para oficinas.
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
