import type { NextConfig } from "next";
import { BLOG_POSTS } from "./src/content/blog-posts";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [128, 256, 384, 500],
  },
  trailingSlash: true,

  async redirects() {
    // 1-to-1 permanent redirects for the 36 migrated WordPress articles
    const migratedPostRedirects = BLOG_POSTS.filter(
      (p) =>
        p.categorySlug !== "distritos-de-lima" &&
        p.categorySlug !== "ciudades-del-peru"
    ).map((p) => ({
      source: `/${p.categorySlug}/${p.slug}/`,
      destination: `/blog/${p.slug}/`,
      permanent: true,
    }));

    return [
      ...migratedPostRedirects,

      // Legacy WordPress sitemaps -> new dynamic sitemap.xml
      {
        source: "/wp-sitemap.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/post-sitemap.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/page-sitemap.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/category-sitemap.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },

      // ─────────────────────────────────────────────────────────────────────
      // ANTIGUAS CATEGORÍAS DE WORDPRESS (serviciodelimpiezaindustrialenper)
      // Redirecciones 301 permanentes hacia servicios o blog
      // ─────────────────────────────────────────────────────────────────────
      {
        source: "/consejos-de-limpieza-para-oficinas/:path*",
        destination: "/servicios/limpieza-para-empresas/",
        permanent: true,
      },
      {
        source: "/importancia-de-la-desinfeccion-en-oficinas/:path*",
        destination: "/servicios/saneamiento-ambiental/",
        permanent: true,
      },
      {
        source: "/prevencion-de-plagas-en-oficinas/:path*",
        destination: "/servicios/saneamiento-ambiental/",
        permanent: true,
      },
      {
        source: "/mantenimiento-de-espacios-comerciales/:path*",
        destination: "/servicios/mantenimiento-integral/",
        permanent: true,
      },
      {
        source: "/equipos-y-maquinaria-de-limpieza-industrial/:path*",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/guias-de-limpieza-ecologica/:path*",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/productos-de-limpieza-recomendados/:path*",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/tendencias-en-limpieza-profesional/:path*",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/casos-de-exito-y-buenas-practicas-de-limpieza/:path*",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/uncategorized/:path*",
        destination: "/blog/",
        permanent: true,
      },

      // ─────────────────────────────────────────────────────────────────────
      // PÁGINAS DE TAXONOMÍA / ARCHIVO / FEEDS DE WORDPRESS
      // ─────────────────────────────────────────────────────────────────────
      {
        source: "/category/:path*",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/author/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/:path*",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/:year(20\\d{2})/:rest*",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blogs/:path*",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/feed/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*/feed/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
