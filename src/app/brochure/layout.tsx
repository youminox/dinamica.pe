import type { Metadata } from "next";
import "./brochure.css";

export const metadata: Metadata = {
  title: "Brochure Corporativo | DINÁMICA Servicio de Limpieza SAC",
  description:
    "Descubra los servicios de limpieza profesional para oficinas, mantenimiento integral y saneamiento ambiental de DINAMICA SERVICIO DE LIMPIEZA SAC (RUC 20612233161).",
  metadataBase: new URL("https://dinamica.pe"),
  alternates: {
    canonical: "/brochure/",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/favicon-512.png",
  },
  openGraph: {
    title: "Brochure Corporativo | DINÁMICA Servicio de Limpieza SAC",
    description:
      "Servicios de limpieza profesional para oficinas, mantenimiento integral y saneamiento ambiental en Lima y todo el Perú.",
    url: "https://dinamica.pe/brochure/",
    siteName: "DINAMICA SERVICIO DE LIMPIEZA SAC",
    images: [{ url: "/hero-image.png", width: 1200, height: 630 }],
    locale: "es_PE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BrochureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
