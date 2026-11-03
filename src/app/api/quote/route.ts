import { NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const TEAM_EMAILS = ["info@dinamica.pe"];
const FROM_EMAIL = "DINÁMICA <noreply@proflimsa.pe>";

interface PersonalItem {
  cargo: string;
  cantidad: number;
  sueldo_base: number;
  asig_familiar: number;
  supervisor_zonal: number;
}

interface DesgloseItem {
  concepto: string;
  base: string;
  cantidad: string;
  subtotal: number;
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

function generateStructuredQuote(formData: Record<string, unknown>) {
  const serviceType = String(
    formData.service_type || "Limpieza permanente / integral"
  );
  const facilityType = String(formData.facility_type || "Oficina corporativa");
  const areaM2 = Math.max(50, Number(formData.area_m2) || 350);
  const numLocations = Math.max(1, parseInt(String(formData.num_locations || "1"), 10) || 1);
  const shiftsPerDay = Math.max(1, parseInt(String(formData.shifts_per_day || "1"), 10) || 1);
  const hoursPerShift = parseInt(String(formData.hours_per_shift || "8"), 10) || 8;
  const frequency = String(formData.frequency || "6 días/semana (L–S)");

  const incluyeInsumos =
    String(formData.includes_cleaning_supplies || "Sí").toLowerCase() !== "no";
  const incluyeConsumibles =
    String(formData.includes_bathroom_consumables || "No").toLowerCase() === "sí" ||
    String(formData.includes_bathroom_consumables || "No").toLowerCase() === "si";
  const needsMachinery =
    String(formData.needs_machinery || "Sí").toLowerCase() !== "no";

  // Determine number of operators
  let numOperarios = parseInt(String(formData.num_personnel || "0"), 10);
  if (!numOperarios || numOperarios <= 0 || formData.needs_help_calculating) {
    const m2PerOperator =
      facilityType.toLowerCase().includes("almacén") ||
      facilityType.toLowerCase().includes("planta")
        ? 500
        : 350;
    numOperarios = Math.max(1, Math.ceil(areaM2 / m2PerOperator));
    if (shiftsPerDay > 1) {
      numOperarios = numOperarios * shiftsPerDay;
    }
  }

  const isPartTime = hoursPerShift <= 4;
  const sueldoBaseOperario = isPartTime ? 565 : 1130;
  const asigFamiliar = 113;
  const supZonal = isPartTime ? 25 : 40;

  const personal: PersonalItem[] = [
    {
      cargo: isPartTime
        ? "Operario de limpieza corporativa (Part-Time 4h)"
        : "Operario de limpieza corporativa (8h)",
      cantidad: numOperarios,
      sueldo_base: sueldoBaseOperario,
      asig_familiar: asigFamiliar,
      supervisor_zonal: supZonal,
    },
  ];

  if (numOperarios >= 4 || formData.needs_supervisor === "Fijo") {
    personal.push({
      cargo: "Supervisor / Coordinador de Sede",
      cantidad: 1,
      sueldo_base: 1550,
      asig_familiar: 113,
      supervisor_zonal: 0,
    });
  }

  let totalManoDeObra = 0;
  let totalPersonnel = 0;
  for (const p of personal) {
    totalManoDeObra +=
      p.cantidad * (p.sueldo_base + p.asig_familiar + p.supervisor_zonal);
    totalPersonnel += p.cantidad;
  }

  const beneficios = round2(totalManoDeObra * 0.4892);
  const costoUnitOperativo =
    30 + // Uniformes corporativos Dinámica
    40 + // EPPs certificados
    50 + // Movilidad
    25 + // Implementos y microfibras
    (incluyeInsumos ? 150 : 0) +
    (incluyeConsumibles ? 85 : 0) +
    (needsMachinery ? 45 : 0);

  const gastosOperativos = round2(totalPersonnel * costoUnitOperativo);
  const costoDirecto = round2(totalManoDeObra + beneficios + gastosOperativos);

  let ggPct = 0.1;
  let utilPct = 0.1;
  if (totalPersonnel === 1) {
    ggPct = 0.12;
    utilPct = 0.1;
  } else if (totalPersonnel <= 5) {
    ggPct = 0.1;
    utilPct = 0.1;
  } else {
    ggPct = 0.1;
    utilPct = 0.08;
  }

  const gastosGenerales = round2(costoDirecto * ggPct);
  const utilidad = round2(costoDirecto * utilPct);
  const garantias = round2(costoDirecto * 0.03);
  const subtotal = round2(
    costoDirecto + gastosGenerales + utilidad + garantias
  );
  const igv = round2(subtotal * 0.18);
  const totalMensual = round2(subtotal + igv);

  const desglose: DesgloseItem[] = [
    {
      concepto: "I. Mano de Obra",
      base: `S/ ${sueldoBaseOperario} + Asig. Fam. + Sup.`,
      cantidad: `${totalPersonnel} op.`,
      subtotal: round2(totalManoDeObra),
    },
    {
      concepto: "II. Leyes y Beneficios Sociales (48.92%)",
      base: "48.92% s/ M.O.",
      cantidad: "100% Planilla",
      subtotal: beneficios,
    },
    {
      concepto: "III. Gastos Operativos e Insumos",
      base: `S/ ${costoUnitOperativo} / op.`,
      cantidad: `${totalPersonnel} op.`,
      subtotal: gastosOperativos,
    },
    {
      concepto: "IV. Costo Directo",
      base: "I + II + III",
      cantidad: "-",
      subtotal: costoDirecto,
    },
    {
      concepto: `V. Gastos Generales (${Math.round(ggPct * 100)}%)`,
      base: `${Math.round(ggPct * 100)}%`,
      cantidad: "s/ CD",
      subtotal: gastosGenerales,
    },
    {
      concepto: `VI. Utilidad Operativa (${Math.round(utilPct * 100)}%)`,
      base: `${Math.round(utilPct * 100)}%`,
      cantidad: "s/ CD",
      subtotal: utilidad,
    },
    {
      concepto: "VII. Garantías y Pólizas (RC / Deshonestidad)",
      base: "3%",
      cantidad: "s/ CD",
      subtotal: garantias,
    },
    {
      concepto: "SUBTOTAL MENSUAL",
      base: "",
      cantidad: "",
      subtotal: subtotal,
    },
    {
      concepto: "IGV (18%)",
      base: "18%",
      cantidad: "",
      subtotal: igv,
    },
    {
      concepto: "TOTAL MENSUAL",
      base: "",
      cantidad: "",
      subtotal: totalMensual,
    },
  ];

  const incluye: string[] = [
    "Personal 100% en planilla desde el primer día (Régimen General)",
    "Cobertura completa de SCTR Salud y Pensión, Seguro Vida Ley y EsSalud",
    "Póliza de Responsabilidad Civil y Deshonestidad frente a terceros",
    "Uniformes corporativos Dinámica (polo camisero institucional) y EPPs completos",
    "Supervisión zonal permanente con checklist digital e informes KPI",
    "Capacitación continua en Seguridad y Salud en el Trabajo (Ley N° 29783)",
  ];

  if (incluyeInsumos) {
    incluye.push(
      "Insumos químicos biodegradables certificados con registro DIGESA y hojas MSDS"
    );
  }
  if (incluyeConsumibles) {
    incluye.push(
      "Abastecimiento de consumibles higiénicos para baños (papel toalla, papel higiénico, jabón líquido)"
    );
  }
  if (needsMachinery) {
    incluye.push(
      "Maquinaria e implementos profesionales (aspiradoras industriales con filtro HEPA, lustradoras, sistema de microfibras por código de colores)"
    );
  }

  const noIncluye: string[] = [];
  if (!incluyeConsumibles) {
    noIncluye.push(
      "Suministro de consumibles de baño (papel higiénico, jabón líquido, papel toalla)"
    );
  }
  if (!incluyeInsumos) {
    noIncluye.push("Insumos químicos de limpieza (provistos por el cliente)");
  }
  noIncluye.push(
    "Trabajos en altura exterior con andamios colgantes (se cotiza tras inspección específica)",
    "Disposición final de residuos peligrosos o biocontaminados especiales"
  );

  const supuestos: string[] = [
    `Dimensionamiento calculado para ${areaM2} m² en ${facilityType.toLowerCase()} (${numLocations} ${numLocations === 1 ? "sede" : "sedes"}).`,
    `Jornada de ${hoursPerShift} horas por turno con frecuencia ${frequency}.`,
    "Cálculo elaborado bajo la estructura de costos laborales vigentes en el Perú (RMV S/ 1,130.00 + Beneficios Sociales 48.92%).",
    "El cliente facilita punto de agua, energía eléctrica y ambiente seguro de acopio para materiales.",
  ];

  return {
    resumen: {
      servicio: serviceType,
      tipo_instalacion: facilityType,
      area_m2: `${areaM2} m²`,
      frecuencia: frequency,
      turno_horas: `${hoursPerShift} horas (${shiftsPerDay} ${shiftsPerDay === 1 ? "turno" : "turnos"})`,
      sedes: String(numLocations),
      incluye_insumos: incluyeInsumos ? "Sí (Biodegradables certificados)" : "No",
      incluye_consumibles: incluyeConsumibles ? "Sí" : "No",
      incluye_equipos: needsMachinery ? "Sí (Equipos industriales)" : "Básico",
    },
    personal,
    desglose,
    incluye,
    no_incluye: noIncluye,
    supuestos,
    siguiente_paso:
      "Para validar el alcance exacto y emitir su propuesta técnico-económica formal, agendemos una visita técnica gratuita. Contacto: info@dinamica.pe | WhatsApp: +51 981 561 681",
  };
}

async function sendNotificationEmail(
  formData: Record<string, unknown>,
  quote: ReturnType<typeof generateStructuredQuote>
) {
  if (!RESEND_API_KEY) return;

  const totalRow = quote.desglose.find((r) =>
    r.concepto.includes("TOTAL MENSUAL")
  );
  const totalFormatted = totalRow
    ? `S/ ${totalRow.subtotal.toLocaleString("es-PE", {
        minimumFractionDigits: 2,
      })}`
    : "Consultar";

  const contactName = String(formData.contact_name || "Cliente");
  const contactCompany = String(formData.contact_company || "No especificada");
  const contactRuc = String(formData.contact_ruc || "No especificado");
  const contactEmail = String(formData.contact_email || "");
  const contactPhone = String(formData.contact_phone || "");

  const desgloseRows = quote.desglose
    .map(
      (r) => `
      <tr style="${
        r.concepto.includes("TOTAL MENSUAL")
          ? "background:#eff6ff;font-weight:bold;"
          : ""
      }">
        <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-size:13px;">${
          r.concepto
        }</td>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;text-align:right;font-size:13px;">S/ ${r.subtotal.toLocaleString(
          "es-PE",
          { minimumFractionDigits: 2 }
        )}</td>
      </tr>`
    )
    .join("");

  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
  <body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
    <div style="max-width:640px;margin:0 auto;padding:20px;">
      <div style="background:#03428e;border-radius:12px 12px 0 0;padding:24px;text-align:center;">
        <h1 style="color:#e7ed00;margin:0;font-size:20px;">📩 Nueva Cotización Web - DINÁMICA</h1>
        <p style="color:#dbeafe;margin:6px 0 0;font-size:13px;">Generada desde dinamica.pe</p>
      </div>
      <div style="background:white;padding:28px;border-radius:0 0 12px 12px;">
        <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:16px;text-align:center;margin-bottom:20px;">
          <p style="margin:0;color:#6b7280;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Total Mensual Estimado (Inc. IGV)</p>
          <p style="margin:6px 0 0;color:#0767db;font-size:26px;font-weight:bold;">${totalFormatted}</p>
        </div>
        <h3 style="color:#1f2937;font-size:15px;margin:0 0 12px;">👤 Datos del Cliente</h3>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;font-size:13px;">
          <tr><td style="padding:6px 0;color:#6b7280;width:120px;">Contacto:</td><td style="padding:6px 0;font-weight:600;color:#111827;">${contactName}</td></tr>
          <tr><td style="padding:6px 0;color:#6b7280;">Empresa:</td><td style="padding:6px 0;font-weight:600;color:#111827;">${contactCompany}</td></tr>
          <tr><td style="padding:6px 0;color:#6b7280;">RUC:</td><td style="padding:6px 0;color:#111827;">${contactRuc}</td></tr>
          <tr><td style="padding:6px 0;color:#6b7280;">Email:</td><td style="padding:6px 0;"><a href="mailto:${contactEmail}" style="color:#0767db;">${contactEmail}</a></td></tr>
          <tr><td style="padding:6px 0;color:#6b7280;">Teléfono:</td><td style="padding:6px 0;"><a href="tel:${contactPhone}" style="color:#0767db;">${contactPhone}</a></td></tr>
          <tr><td style="padding:6px 0;color:#6b7280;">Instalación:</td><td style="padding:6px 0;color:#111827;">${quote.resumen.tipo_instalacion} (${quote.resumen.area_m2})</td></tr>
          <tr><td style="padding:6px 0;color:#6b7280;">Frecuencia:</td><td style="padding:6px 0;color:#111827;">${quote.resumen.frecuencia} · ${quote.resumen.turno_horas}</td></tr>
        </table>
        <h3 style="color:#1f2937;font-size:15px;margin:0 0 10px;">📊 Estructura de Costos</h3>
        <table style="width:100%;border-collapse:collapse;">
          <tbody>${desgloseRows}</tbody>
        </table>
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
        subject: `📩 Nueva Cotización Dinámica: ${contactCompany} (${totalFormatted})`,
        html,
      }),
    });
  } catch (err) {
    console.error("Resend notification error:", err);
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const quote = generateStructuredQuote(formData);

    // Fire-and-forget email notification
    await sendNotificationEmail(formData, quote);

    return NextResponse.json({
      success: true,
      quote,
    });
  } catch (error) {
    console.error("Quote generation error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "No se pudo procesar la cotización en este momento.",
      },
      { status: 500 }
    );
  }
}
