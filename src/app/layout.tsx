import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { content } from "@/content/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  metadataBase: new URL(content.company.website),
  alternates: {
    canonical: "https://dinamica.pe/",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/favicon-512.png",
  },
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    url: content.company.website,
    siteName: content.company.legalName,
    images: [{ url: content.seo.ogImage, width: 1200, height: 630 }],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.seo.title,
    description: content.seo.description,
    images: [content.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/* Google AdSense verification & script in <head> */}
        <meta name="google-adsense-account" content="ca-pub-1070738569472471" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1070738569472471"
          crossOrigin="anonymous"
        ></script>

        {/* Preload hero image for fast LCP */}
        <link
          rel="preload"
          as="image"
          href="/hero-image.webp"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Preconnect to third-party origins */}
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link
          rel="preconnect"
          href="https://fundingchoicesmessages.google.com"
          crossOrigin="anonymous"
        />

        {/* Schema: LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://dinamica.pe/#organization",
              name: content.company.name,
              legalName: content.company.legalName,
              description: content.seo.description,
              url: content.company.website,
              telephone: "+51981561681",
              email: content.company.email,
              logo: "https://dinamica.pe/logo-dinamica.png",
              image: "https://dinamica.pe/hero-image.png",
              taxID: content.company.ruc,
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Calle Los Antares 320, Oficina 602, Torre B, Urbanización La Arbolada",
                addressLocality: "Santiago de Surco",
                addressRegion: "Lima",
                postalCode: "15038",
                addressCountry: "PE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -12.1068,
                longitude: -76.9774,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
              areaServed: {
                "@type": "Country",
                name: "Perú",
              },
              priceRange: "$$",
            }),
          }}
        />

        {/* Schema: Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "Servicio de Limpieza para Oficinas",
                provider: { "@id": "https://dinamica.pe/#organization" },
                name: "Limpieza Profesional para Oficinas y Empresas",
                description:
                  "Servicio especializado de limpieza para oficinas corporativas, call centers, embajadas, colegios y edificios empresariales en Lima y todo el Perú.",
                areaServed: { "@type": "Country", name: "Perú" },
                url: "https://dinamica.pe/servicios/limpieza-para-empresas/",
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "Saneamiento Ambiental",
                provider: { "@id": "https://dinamica.pe/#organization" },
                name: "Saneamiento Ambiental y Desinfección de Oficinas",
                description:
                  "Desinfección profesional de ambientes, fumigación, desratización y limpieza de reservorios con insumos autorizados por DIGESA.",
                areaServed: { "@type": "Country", name: "Perú" },
                url: "https://dinamica.pe/servicios/saneamiento-ambiental/",
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "Mantenimiento Integral",
                provider: { "@id": "https://dinamica.pe/#organization" },
                name: "Mantenimiento Integral de Oficinas e Instalaciones",
                description:
                  "Mantenimiento preventivo y correctivo en electricidad, instalaciones sanitarias, pintura corporativa, luminarias y cerrajería.",
                areaServed: { "@type": "Country", name: "Perú" },
                url: "https://dinamica.pe/servicios/mantenimiento-integral/",
              },
            ]),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
