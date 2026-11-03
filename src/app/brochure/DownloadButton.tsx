"use client";

export default function DownloadButton() {
  return (
    <button
      onClick={() => window.print()}
      className="brochure-cta cta-whatsapp"
      style={{
        flex: 1,
        maxWidth: 180,
        padding: "12px 20px",
        fontSize: "0.8125rem",
        cursor: "pointer",
        border: "none",
      }}
    >
      Descargar Brochure
    </button>
  );
}
