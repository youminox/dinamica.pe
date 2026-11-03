import { NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const TEAM_EMAILS = ["info@dinamica.pe"];
const FROM_EMAIL = "DINÁMICA <noreply@proflimsa.pe>";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      nombre = "",
      empresa = "",
      ruc = "",
      email = "",
      telefono = "",
      servicio = "",
      mensaje = "",
    } = body;

    if (!nombre || !email) {
      return NextResponse.json(
        { success: false, error: "Nombre y correo son obligatorios." },
        { status: 400 }
      );
    }

    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
    <body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
      <div style="max-width:600px;margin:0 auto;padding:20px;">
        <div style="background:#03428e;border-radius:12px 12px 0 0;padding:24px;text-align:center;">
          <h1 style="color:#e7ed00;margin:0;font-size:20px;">📬 Nuevo Mensaje de Contacto - DINÁMICA</h1>
          <p style="color:#dbeafe;margin:6px 0 0;font-size:13px;">Recibido desde dinamica.pe</p>
        </div>
        <div style="background:white;padding:28px;border-radius:0 0 12px 12px;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 0;color:#6b7280;width:130px;">Nombre:</td><td style="padding:8px 0;font-weight:600;color:#111827;">${nombre}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">Empresa:</td><td style="padding:8px 0;font-weight:600;color:#111827;">${empresa || "-"}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">RUC:</td><td style="padding:8px 0;color:#111827;">${ruc || "-"}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">Email:</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#0767db;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">Teléfono:</td><td style="padding:8px 0;"><a href="tel:${telefono}" style="color:#0767db;">${telefono || "-"}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">Servicio:</td><td style="padding:8px 0;color:#111827;">${servicio || "Consulta general"}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
            <p style="margin:0 0 6px;font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;">Mensaje:</p>
            <p style="margin:0;font-size:14px;color:#1e293b;white-space:pre-wrap;">${mensaje || "Sin mensaje adicional."}</p>
          </div>
        </div>
      </div>
    </body></html>`;

    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: TEAM_EMAILS,
          reply_to: email,
          subject: `📬 Contacto Web Dinámica: ${empresa || nombre} - ${servicio || "Consulta"}`,
          html,
        }),
      });
    } catch (err) {
      console.error("Resend contact email error:", err);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Error al enviar el mensaje." },
      { status: 500 }
    );
  }
}
