import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { content } from "@/content/content";

export const metadata: Metadata = {
  title:
    "Sobre Nosotros | DINÁMICA Servicio de Limpieza SAC - RUC 20612233161",
  description:
    "Conoce a DINAMICA SERVICIO DE LIMPIEZA SAC (RUC 20612233161), especialistas en limpieza profesional para oficinas corporativas, saneamiento ambiental y mantenimiento integral en Lima y todo el Perú.",
  alternates: {
    canonical: "https://dinamica.pe/nosotros/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    title: "Sobre Nosotros | DINÁMICA Servicio de Limpieza SAC",
    description:
      "Especialistas en limpieza profesional para oficinas corporativas, saneamiento ambiental y mantenimiento integral en el Perú.",
  },
};

export default function NosotrosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["AboutPage", "Organization"],
    name: "DINAMICA SERVICIO DE LIMPIEZA SAC",
    url: "https://dinamica.pe",
    logo: "https://dinamica.pe/logo-dinamica.png",
    description:
      "Empresa peruana especializada en servicios de limpieza profesional para oficinas, saneamiento ambiental y mantenimiento integral.",
    taxID: "20612233161",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+51-981-561-681",
      email: "info@dinamica.pe",
      contactType: "customer service",
      areaServed: "PE",
      availableLanguage: "es",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Calle Los Antares 320, Oficina 602, Torre B, Urbanización La Arbolada",
      addressLocality: "Santiago de Surco",
      addressRegion: "Lima",
      addressCountry: "PE",
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
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4">
              RUC: 20612233161
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Sobre <span className="text-primary">DINÁMICA</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Somos el socio estratégico en limpieza corporativa, saneamiento
              ambiental y mantenimiento integral para oficinas e instituciones
              líderes en el Perú.
            </p>
          </div>
        </section>

        {/* Identidad Corporativa */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Quiénes Somos
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                <strong>DINAMICA SERVICIO DE LIMPIEZA SAC</strong> (RUC:{" "}
                <strong>20612233161</strong>) nació con el propósito de
                transformar y profesionalizar la gestión de limpieza en oficinas
                corporativas, call centers, embajadas y edificios empresariales
                del Perú.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Combinamos personal altamente capacitado 100% en planilla,
                supervisión presencial con control digital de indicadores (KPIs),
                maquinaria moderna de bajo ruido e insumos biodegradables
                certificados para garantizar ambientes laborales impecables,
                saludables y productivos.
              </p>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-white p-10 shadow-md text-center">
                <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-primary" />
                <h2 className="text-3xl font-bold text-primary mb-6">Misión</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Brindar servicios de limpieza corporativa, saneamiento
                  ambiental y mantenimiento de instalaciones con los más altos
                  estándares de calidad, seguridad y formalidad laboral,
                  creando entornos de trabajo saludables que impulsen la
                  productividad y el bienestar de nuestros clientes.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-10 shadow-md text-center">
                <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-accent" />
                <h2 className="text-3xl font-bold text-primary mb-6">Visión</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ser reconocidos a nivel nacional como el referente más
                  confiable e innovador en soluciones integrales de limpieza y
                  facility services para oficinas y empresas, destacando por
                  nuestra excelencia operativa, sostenibilidad y compromiso con
                  nuestro equipo humano.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Respaldo Legal y Certificaciones */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">
              Respaldo Legal y Normativo
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl text-primary mb-2">DIGESA</h3>
                <p className="text-gray-600 text-sm">
                  Insumos autorizados y protocolos certificados de Saneamiento
                  Ambiental.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl text-primary mb-2">MTPE</h3>
                <p className="text-gray-600 text-sm">
                  Personal 100% en planilla bajo normativa de Intermediación
                  Laboral.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl text-primary mb-2">
                  Ley N° 29783
                </h3>
                <p className="text-gray-600 text-sm">
                  Cumplimiento estricto de la Ley de Seguridad y Salud en el
                  Trabajo (SCTR y Vida Ley).
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl text-primary mb-2">
                  Eco-Amigable
                </h3>
                <p className="text-gray-600 text-sm">
                  Productos biodegradables con hojas de seguridad MSDS y gestión
                  sostenible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cifras */}
        <section className="bg-gradient-to-r from-primary-dark to-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 grid-cols-2 lg:grid-cols-3 text-center divide-x divide-white/20">
              <div>
                <p className="text-4xl md:text-5xl font-extrabold text-accent mb-2">
                  100%
                </p>
                <p className="text-white/90 font-medium">
                  Personal en Planilla con SCTR
                </p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-extrabold text-accent mb-2">
                  &lt; 2h
                </p>
                <p className="text-white/90 font-medium">
                  Tiempo de Respuesta y Reemplazo
                </p>
              </div>
              <div className="col-span-2 lg:col-span-1 border-x-0 lg:border-x">
                <p className="text-4xl md:text-5xl font-extrabold text-accent mb-2">
                  Nacional
                </p>
                <p className="text-white/90 font-medium">
                  Atención en Lima y Provincias
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clientes */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Instituciones y Empresas que Confían en Nosotros
            </h2>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12 items-center">
              {content.clients.logos.map((client, i) => (
                <div key={i} className="flex items-center justify-center p-4">
                  <img
                    src={client.src}
                    alt={client.name}
                    className="h-12 w-auto grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
