import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/content/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => {
    const isGeoSeo =
      post.categorySlug === "distritos-de-lima" ||
      post.categorySlug === "ciudades-del-peru";
    return {
      url: `https://dinamica.pe/blog/${post.slug}/`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: isGeoSeo ? "weekly" : "monthly",
      priority: isGeoSeo ? 0.85 : 0.7,
    };
  });

  return [
    {
      url: "https://dinamica.pe/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://dinamica.pe/servicios/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://dinamica.pe/servicios/limpieza-para-empresas/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://dinamica.pe/servicios/saneamiento-ambiental/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://dinamica.pe/servicios/mantenimiento-integral/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://dinamica.pe/nosotros/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://dinamica.pe/brochure/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://dinamica.pe/contacto/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://dinamica.pe/blog/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
    {
      url: "https://dinamica.pe/aviso-legal/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://dinamica.pe/privacy-policy/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://dinamica.pe/politica-de-cookies/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
