import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Cookies | DINÁMICA Servicio de Limpieza SAC",
  description:
    "Política de cookies de DINAMICA SERVICIO DE LIMPIEZA SAC (RUC 20612233161). Información sobre el uso de cookies en dinamica.pe.",
  alternates: {
    canonical: "https://dinamica.pe/politica-de-cookies/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaCookiesPage() {
  return (
    <LegalLayout
      title="Política de Cookies"
      lastUpdated="3 de noviembre de 2026"
    >
      <p>
        En <strong>DINAMICA SERVICIO DE LIMPIEZA SAC (DINÁMICA)</strong>,
        utilizamos cookies y tecnologías similares para mejorar tu experiencia
        de navegación, analizar el uso del sitio web y optimizar nuestros
        servicios corporativos. Esta Política de Cookies explica qué son las
        cookies, qué tipos utilizamos y cómo puedes gestionarlas.
      </p>

      <h2>1. ¿Qué es una cookie?</h2>
      <p>
        Una cookie es un pequeño archivo de texto que se almacena en tu
        dispositivo (ordenador, tableta o teléfono móvil) cuando visitas un
        sitio web. Las cookies permiten que el sitio recuerde tus acciones y
        preferencias durante un período de tiempo.
      </p>

      <h2>2. Marco legal</h2>
      <ul>
        <li>
          <strong>Ley N.° 29733</strong> — Ley de Protección de Datos Personales
          del Perú y su Reglamento.
        </li>
      </ul>

      <h2>3. Tipos de cookies que utilizamos</h2>
      <ul>
        <li>
          <strong>Cookies técnicas (necesarias):</strong> Permiten la navegación
          por el sitio web y el uso de sus funciones básicas, como el
          procesamiento de formularios de contacto y el asistente de cotización.
        </li>
        <li>
          <strong>Cookies analíticas y publicitarias:</strong> Recopilan
          información estadística anónima sobre cómo los usuarios navegan por el
          sitio web para mejorar nuestro contenido y servicios.
        </li>
      </ul>

      <h2>4. Cómo gestionar las cookies</h2>
      <p>
        Puedes configurar tu navegador en cualquier momento para aceptar,
        rechazar o eliminar cookies desde las opciones de privacidad de Google
        Chrome, Mozilla Firefox, Safari o Microsoft Edge.
      </p>

      <h2>5. Contacto</h2>
      <ul>
        <li>
          <strong>Correo electrónico:</strong> info@dinamica.pe
        </li>
        <li>
          <strong>Dirección:</strong> Calle Los Antares 320, Oficina 602, Torre
          B, Urbanización La Arbolada, Santiago de Surco, Lima, Perú
        </li>
      </ul>
    </LegalLayout>
  );
}
