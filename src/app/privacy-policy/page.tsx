import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad | DINÁMICA Servicio de Limpieza SAC",
  description:
    "Política de privacidad de DINAMICA SERVICIO DE LIMPIEZA SAC (RUC 20612233161). Conoce cómo protegemos tus datos personales conforme a la Ley N.° 29733.",
  alternates: {
    canonical: "https://dinamica.pe/privacy-policy/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Política de Privacidad"
      lastUpdated="3 de noviembre de 2026"
    >
      <p>
        En <strong>DINAMICA SERVICIO DE LIMPIEZA SAC (DINÁMICA)</strong>,
        respetamos tu privacidad y nos comprometemos a proteger los datos
        personales que nos proporcionas. Esta Política de Privacidad explica de
        forma transparente cómo recopilamos, utilizamos, almacenamos y
        protegemos tu información personal.
      </p>
      <p>
        Este sitio web cumple con la{" "}
        <strong>
          Ley N.° 29733 — Ley de Protección de Datos Personales del Perú
        </strong>{" "}
        y su Reglamento, aprobado mediante Decreto Supremo N.° 003-2013-JUS.
      </p>

      <h2>1. Datos de identificación del responsable</h2>
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
          <strong>Correo de contacto:</strong> info@dinamica.pe
        </li>
        <li>
          <strong>Sitio web:</strong> https://dinamica.pe
        </li>
      </ul>

      <h2>2. Datos que recopilamos</h2>
      <p>
        Recopilamos únicamente los datos personales que nos proporcionas
        voluntariamente a través de nuestros formularios de contacto y
        solicitudes de cotización:
      </p>
      <ul>
        <li>Nombre completo</li>
        <li>Nombre de la empresa y RUC</li>
        <li>Correo electrónico corporativo o personal</li>
        <li>Número de teléfono o WhatsApp</li>
        <li>Descripción de tu consulta o requerimiento operativo</li>
      </ul>

      <h2>3. Finalidad del tratamiento de datos</h2>
      <p>
        Utilizamos tus datos personales exclusivamente para las siguientes
        finalidades:
      </p>
      <ul>
        <li>
          Gestionar tus solicitudes de cotización, visitas técnicas, consultas y
          comunicaciones comerciales.
        </li>
        <li>
          Brindarte información sobre nuestros servicios de limpieza para
          oficinas, saneamiento ambiental y mantenimiento integral.
        </li>
        <li>
          Enviarte propuestas técnico-económicas y comunicaciones relacionadas
          con nuestros servicios, con tu consentimiento previo.
        </li>
        <li>Cumplir con obligaciones legales y normativas aplicables.</li>
      </ul>

      <h2>4. Base legal del tratamiento</h2>
      <p>
        El tratamiento de tus datos se realiza conforme a la Ley N.° 29733 y se
        fundamenta en:
      </p>
      <ul>
        <li>
          <strong>Consentimiento:</strong> Al enviarnos tus datos a través de
          nuestros formularios, otorgas tu consentimiento expreso para su
          tratamiento.
        </li>
        <li>
          <strong>Interés legítimo:</strong> Para atender tus consultas y
          mejorar nuestros servicios corporativos.
        </li>
        <li>
          <strong>Obligación legal:</strong> Cuando la normativa peruana lo
          exija.
        </li>
      </ul>

      <h2>5. Conservación de datos</h2>
      <p>
        Conservamos tus datos personales únicamente durante el tiempo necesario
        para cumplir con las finalidades descritas y por el plazo que establezca
        la legislación vigente. Una vez cumplida la finalidad, tus datos serán
        eliminados o anonimizados de forma segura.
      </p>

      <h2>6. Derechos del titular de datos (Derechos ARCO)</h2>
      <p>De acuerdo con la Ley N.° 29733, tienes derecho a:</p>
      <ul>
        <li>
          <strong>Acceso:</strong> Conocer qué datos personales tenemos sobre
          ti.
        </li>
        <li>
          <strong>Rectificación:</strong> Solicitar la corrección de datos
          inexactos o incompletos.
        </li>
        <li>
          <strong>Cancelación:</strong> Solicitar la eliminación de tus datos
          cuando ya no sean necesarios.
        </li>
        <li>
          <strong>Oposición:</strong> Oponerte al tratamiento de tus datos para
          determinadas finalidades.
        </li>
      </ul>
      <p>
        Para ejercer cualquiera de estos derechos, envía un correo electrónico a{" "}
        <strong>info@dinamica.pe</strong> adjuntando copia de tu documento de
        identidad. Atenderemos tu solicitud dentro de los plazos establecidos
        por ley.
      </p>

      <h2>7. Medidas de seguridad</h2>
      <p>
        Hemos adoptado medidas técnicas y organizativas adecuadas para
        garantizar la seguridad de tus datos personales, incluyendo cifrado
        SSL/TLS y control de acceso restringido.
      </p>

      <h2>8. Contacto</h2>
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
