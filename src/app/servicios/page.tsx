import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { content } from "@/content/content";

export const metadata: Metadata = {
  title: "Nuestros Servicios de Limpieza para Oficinas y Empresas | DINÁMICA",
  description:
    "Servicios profesionales de limpieza para oficinas, call centers, saneamiento ambiental y mantenimiento integral en Lima y todo el Perú. Solicita tu cotización.",
  alternates: {
    canonical: "https://dinamica.pe/servicios/",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Soluciones Corporativas B2B
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Servicios Profesionales de{" "}
              <span className="text-primary">Limpieza para Oficinas</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Brindamos soluciones integrales de limpieza corporativa, saneamiento
              ambiental y mantenimiento de instalaciones con personal 100% en
              planilla, SCTR y supervisión permanente.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {content.services.map((service, i) => (
              <Link
                key={i}
                href={`/servicios/${service.slug}/`}
                className="group block h-full"
              >
                <div className="h-full overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 flex flex-col">
                  <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-xs font-semibold text-primary mb-2">
                      {service.registrations}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-primary font-bold text-sm">
                      Ver detalles del servicio
                      <span className="transition-transform group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center bg-gradient-to-br from-primary-dark to-primary rounded-3xl p-10 sm:p-14 text-white shadow-xl">
            <h2 className="text-3xl font-extrabold mb-4">
              ¿Listo para elevar el estándar de limpieza en tu oficina?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Contáctanos hoy mismo para agendar una visita técnica gratuita o
              recibir una propuesta económica a la medida de tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:info@dinamica.pe?subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20Din%C3%A1mica"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-base font-bold text-gray-900 transition-all hover:brightness-105 shadow-lg"
              >
                info@dinamica.pe
              </a>
              <a
                href={`https://wa.me/${content.contact.whatsapp}?text=${encodeURIComponent(
                  content.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#1EBE5D] shadow-lg"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
