import BrochureContent from "./BrochureContent";
import PrintButton from "./PrintButton";
import DownloadButton from "./DownloadButton";

export default function BrochurePage() {
  return (
    <>
      {/* Navigation bar */}
      <nav className="brochure-nav no-print">
        <a href="/" title="Ir al sitio principal de Dinámica">
          <img
            src="/brochure/logo-dinamica.png"
            alt="DINAMICA SERVICIO DE LIMPIEZA SAC"
            className="brochure-nav-logo"
          />
        </a>
        <div className="brochure-nav-actions">
          <PrintButton />
          <a
            href="mailto:info@dinamica.pe?subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20Brochure%20Din%C3%A1mica"
            className="nav-btn nav-btn-primary nav-hide-mobile"
          >
            Solicitar Cotización
          </a>
          <a
            href="https://wa.me/51981561681?text=Hola%2C%20vi%20su%20brochure%20corporativo%20de%20Din%C3%A1mica%20y%20me%20interesa%20cotizar%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn nav-btn-whatsapp"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="brochure-spacer no-print" />

      {/* Brochure pages */}
      <main
        style={{ background: "#eef2f6", paddingTop: 24, paddingBottom: 48 }}
      >
        <BrochureContent />
      </main>

      {/* Footer CTA bar (mobile-optimized) */}
      <div
        className="no-print"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 99,
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderTop: "1px solid #E5E7EB",
          padding: "10px 16px",
          display: "flex",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <a
          href="mailto:info@dinamica.pe?subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20Brochure%20Din%C3%A1mica"
          className="brochure-cta cta-primary"
          style={{
            flex: 1,
            maxWidth: 220,
            padding: "12px 20px",
            fontSize: "0.8125rem",
          }}
        >
          Solicitar Cotización
        </a>
        <DownloadButton />
      </div>
    </>
  );
}
