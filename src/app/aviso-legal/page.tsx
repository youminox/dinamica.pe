import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Aviso Legal | DINÁMICA Servicio de Limpieza SAC",
  description:
    "Aviso legal de DINAMICA SERVICIO DE LIMPIEZA SAC (RUC 20612233161). Términos y condiciones de uso del sitio web dinamica.pe.",
  alternates: {
    canonical: "https://dinamica.pe/aviso-legal/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AvisoLegalPage() {
  return (
    <LegalLayout title="Aviso Legal" lastUpdated="3 de noviembre de 2026">
      <p>
        El presente Aviso Legal regula el uso del sitio web{" "}
        <strong>dinamica.pe</strong>, propiedad de{" "}
        <strong>DINAMICA SERVICIO DE LIMPIEZA SAC (DINÁMICA)</strong>. Al
        acceder y navegar por este sitio web, aceptas las condiciones aquí
        descritas.
      </p>

      <h2>1. Datos de identificación</h2>
      <ul>
        <li>
          <strong>Razón social:</strong> DINAMICA SERVICIO DE LIMPIEZA SAC
        </li>
        <li>
          <strong>Nombre comercial:</strong> DINÁMICA
        </li>
        <li>
          <strong>RUC:</strong> 20612233161
        </li>
        <li>
          <strong>Domicilio:</strong> Calle Los Antares 320, Oficina 602, Torre
          B, Urbanización La Arbolada, Santiago de Surco, Lima, Perú
        </li>
        <li>
          <strong>Actividad:</strong> Servicios profesionales de limpieza para
          oficinas, mantenimiento integral y saneamiento ambiental
        </li>
        <li>
          <strong>Correo de contacto:</strong> info@dinamica.pe
        </li>
      </ul>

      <h2>2. Objeto del sitio web</h2>
      <p>
        Este sitio web tiene como finalidad informar sobre los servicios de
        limpieza corporativa, mantenimiento integral y saneamiento ambiental que
        ofrece DINÁMICA, así como facilitar el contacto y la cotización en línea
        para empresas e instituciones interesadas en contratar dichos servicios.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso a este sitio web es gratuito. Como usuario, asumes las
        siguientes obligaciones:
      </p>
      <ul>
        <li>
          No utilizar este sitio web para fines contrarios a la ley, la moral o
          el orden público.
        </li>
        <li>
          Proporcionar información veraz y actualizada en los formularios de
          contacto y cotización.
        </li>
        <li>
          No realizar actividades que puedan dañar, sobrecargar o deteriorar el
          funcionamiento del sitio web.
        </li>
      </ul>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos de este sitio web, incluyendo textos, imágenes,
        fotografías, logotipos, isotipos, diseño gráfico y código fuente, están
        protegidos por las leyes de propiedad intelectual e industrial vigentes
        en el Perú. Queda prohibida su reproducción o distribución sin la
        autorización expresa de DINAMICA SERVICIO DE LIMPIEZA SAC.
      </p>

      <h2>5. Protección de datos personales y cookies</h2>
      <p>
        DINÁMICA cumple con la{" "}
        <strong>
          Ley N.° 29733 — Ley de Protección de Datos Personales del Perú
        </strong>
        . Para conocer cómo protegemos tus datos y gestionamos las cookies,
        consulta nuestra <a href="/privacy-policy/">Política de Privacidad</a> y
        nuestra <a href="/politica-de-cookies/">Política de Cookies</a>.
      </p>

      <h2>6. Legislación aplicable y jurisdicción</h2>
      <p>
        Este Aviso Legal se rige por la legislación peruana vigente. Cualquier
        controversia se someterá a la jurisdicción de los Juzgados y Tribunales
        de Lima, Perú.
      </p>

      <h2>7. Contacto</h2>
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
