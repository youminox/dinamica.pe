import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title:
    "Blog y Guías de Limpieza para Oficinas y Empresas | DINÁMICA",
  description:
    "Artículos especializados sobre limpieza de oficinas corporativas, desinfección de ambientes, prevención de plagas, limpieza ecológica y mantenimiento empresarial en Perú.",
  alternates: { canonical: "https://dinamica.pe/blog/" },
  openGraph: {
    title: "Blog y Guías de Limpieza para Oficinas y Empresas | DINÁMICA",
    description:
      "Conocimiento especializado en limpieza de oficinas, saneamiento ambiental y mantenimiento corporativo en Perú.",
    url: "https://dinamica.pe/blog/",
    type: "website",
    locale: "es_PE",
    siteName: "DINAMICA SERVICIO DE LIMPIEZA SAC",
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              Centro de Conocimiento Dinámica
            </span>
            <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Guías y Artículos de{" "}
              <span className="text-primary">Limpieza Corporativa</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Buenas prácticas, protocolos de desinfección, prevención de plagas
              y tendencias en limpieza profesional para oficinas y empresas en
              el Perú.
            </p>
          </div>

          <BlogListClient />
        </div>
      </main>
      <Footer />
    </>
  );
}
