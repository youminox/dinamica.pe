import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BLOG_POSTS, type BlogPost } from "@/content/blog-posts";
import { content } from "@/content/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

function sanitizeWpContent(raw: string): string {
  return raw
    .replace(/\[aib_post_related[^\]]*\]/g, "")
    .replace(/<div id=['"]video-container['"][\s\S]*?<\/noscript>\s*<\/div>/gi, "")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Artículo no encontrado | DINÁMICA" };
  }

  return {
    title: `${post.title} | DINÁMICA`,
    description: post.excerpt,
    ...(post.keywords ? { keywords: post.keywords } : {}),
    alternates: { canonical: `https://dinamica.pe/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://dinamica.pe/blog/${post.slug}/`,
      images: [{ url: post.imageUrl, width: 1200, height: 630 }],
      type: "article",
      locale: "es_PE",
      siteName: "DINAMICA SERVICIO DE LIMPIEZA SAC",
      publishedTime: post.publishedAt,
      authors: ["DINAMICA SERVICIO DE LIMPIEZA SAC"],
    },
  };
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.id !== post.id && p.categorySlug === post.categorySlug
  ).slice(0, 4);

  const recentPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 5);
  const cleanHtml = sanitizeWpContent(post.content);

  const blogPostingSchema = {
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    ...(post.keywords ? { keywords: post.keywords.join(", ") } : {}),
    image: `https://dinamica.pe${post.imageUrl}`,
    datePublished: post.publishedAt,
    author: [
      {
        "@type": "Person",
        name: "Charlie Lingán",
        jobTitle: "Administrador en DINÁMICA",
        url: "https://charlielingan.com/es",
      },
      {
        "@type": "Organization",
        name: "DINAMICA SERVICIO DE LIMPIEZA SAC",
        url: "https://dinamica.pe",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "DINAMICA SERVICIO DE LIMPIEZA SAC",
      logo: {
        "@type": "ImageObject",
        url: "https://dinamica.pe/logo-dinamica.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://dinamica.pe/blog/${post.slug}/`,
    },
  };

  const jsonLd = post.districtName
    ? {
        "@context": "https://schema.org",
        "@graph": [
          blogPostingSchema,
          {
            "@type": "Service",
            name: post.title,
            description: post.excerpt,
            provider: {
              "@type": "LocalBusiness",
              "@id": "https://dinamica.pe/#organization",
              name: "DINAMICA SERVICIO DE LIMPIEZA SAC",
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name:
                post.categorySlug === "ciudades-del-peru"
                  ? `${post.districtName}, Perú`
                  : `${post.districtName}, Lima, Perú`,
            },
            serviceType: `Servicio de Limpieza de Oficinas y Empresas en ${post.districtName}`,
          },
        ],
      }
    : {
        "@context": "https://schema.org",
        ...blogPostingSchema,
      };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="min-h-screen bg-white pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-12">
            {/* Main article */}
            <article className="min-w-0 flex-1 lg:max-w-3xl">
              <Link
                href="/blog/"
                className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-primary"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Volver a todas las guías
              </Link>

              <div className="mb-6 flex flex-wrap items-center gap-3">
                <Link
                  href={`/blog/?categoria=${post.categorySlug}`}
                  className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary hover:bg-primary hover:text-white transition"
                >
                  {post.categoryName}
                </Link>
                <span className="text-sm text-gray-400">
                  {new Date(post.publishedAt).toLocaleDateString("es-PE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="text-sm text-gray-400">·</span>
                <span className="text-sm text-gray-400">
                  {post.readTime} de lectura
                </span>
              </div>

              <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
                {post.title}
              </h1>

              <div className="mt-8 overflow-hidden rounded-2xl border border-gray-100 shadow-md">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full max-h-[420px] object-cover"
                />
              </div>

              <div
                className="prose prose-lg prose-gray mt-10 max-w-none
                  prose-headings:text-gray-900 prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-primary-dark
                  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-gray-600 prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900
                  prose-ul:my-4 prose-li:text-gray-600"
                dangerouslySetInnerHTML={{ __html: cleanHtml }}
              />

              {/* Ficha de Administración Ejecutiva y Ecosistema Corporativo */}
              <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50/80 p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200/80">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      Administración y Supervisión Corporativa
                    </span>
                    <h3 className="text-base font-extrabold text-gray-900 mt-0.5">
                      <a
                        href="https://charlielingan.com/es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        Charlie Lingán — Administrador en DINÁMICA
                      </a>
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      DINAMICA SERVICIO DE LIMPIEZA S.A.C. (RUC 20612233161) · Especialistas en Oficinas Corporativas, Embajadas y Centros Empresariales
                    </p>
                  </div>
                  <a
                    href="https://charlielingan.com/es/estrategias/administracion-moderna-en-facility-management-caso-dinamica-limpieza-corporativa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white border border-gray-200 px-3.5 py-2 text-xs font-bold text-gray-800 hover:border-primary hover:text-primary transition"
                  >
                    Ver Modelo Operativo ↗
                  </a>
                </div>
                <div className="mt-4 pt-1 flex flex-wrap items-center gap-2.5 text-xs text-gray-600">
                  <span className="font-bold text-gray-800">Grupo &amp; Respaldo Corporativo:</span>
                  <a
                    href="https://proflimsa.pe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-white border border-gray-200 px-3 py-1.5 font-semibold text-gray-700 hover:border-primary hover:text-primary transition"
                  >
                    🏭 PROFLIMSA — Limpieza Industrial y Plantas (+33 años) ↗
                  </a>
                  <a
                    href="https://carloslingan.pe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-white border border-gray-200 px-3 py-1.5 font-semibold text-gray-700 hover:border-primary hover:text-primary transition"
                  >
                    ⚖️ Carlos Lingan &amp; Asociados — Firma de Auditoría (desde 1978) ↗
                  </a>
                  <a
                    href="https://charlielingan.com/es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-white border border-gray-200 px-3 py-1.5 font-semibold text-gray-700 hover:border-primary hover:text-primary transition"
                  >
                    💼 CharlieLingan.com ↗
                  </a>
                </div>
              </div>

              {/* CTA Banner inside article */}
              <div className="mt-10 rounded-2xl bg-gradient-to-br from-primary-dark to-primary p-8 sm:p-10 text-center text-white shadow-lg">
                <h3 className="text-2xl font-extrabold">
                  ¿Necesitas servicio de limpieza profesional para tu oficina?
                </h3>
                <p className="mt-2 text-blue-100 max-w-xl mx-auto">
                  En DINÁMICA brindamos personal 100% en planilla con SCTR,
                  supervisión permanente e insumos certificados por DIGESA.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="mailto:info@dinamica.pe?subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20Blog%20Din%C3%A1mica"
                    className="inline-block rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-gray-900 transition hover:brightness-105"
                  >
                    Solicitar Cotización
                  </a>
                  <a
                    href={`https://wa.me/${content.contact.whatsapp}?text=${encodeURIComponent(
                      content.contact.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#1EBE5D]"
                  >
                    Cotizar por WhatsApp
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="mt-12 lg:mt-0 lg:w-80 lg:flex-shrink-0">
              <div className="sticky top-28 space-y-10">
                {relatedPosts.length > 0 && (
                  <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-6">
                    <h3 className="mb-4 text-base font-bold text-gray-900">
                      Artículos Relacionados
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((p) => (
                        <Link
                          key={p.id}
                          href={`/blog/${p.slug}/`}
                          className="group flex gap-3 rounded-xl p-2 transition hover:bg-white"
                        >
                          <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200">
                            <img
                              src={p.imageUrl}
                              alt={p.title}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="line-clamp-2 text-xs font-bold text-gray-900 transition-colors group-hover:text-primary">
                              {p.title}
                            </h4>
                            <span className="mt-1 block text-[11px] text-gray-400">
                              {p.readTime}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h3 className="mb-4 text-base font-bold text-gray-900">
                    Guías Destacadas
                  </h3>
                  <div className="space-y-3">
                    {recentPosts.map((p) => (
                      <Link
                        key={p.id}
                        href={`/blog/${p.slug}/`}
                        className="block border-b border-gray-100 pb-3 last:border-b-0 last:pb-0 group"
                      >
                        <p className="text-xs font-semibold text-primary mb-0.5">
                          {p.categoryName}
                        </p>
                        <h4 className="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                          {p.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
