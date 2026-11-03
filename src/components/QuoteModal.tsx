"use client";

import React, { useState, useCallback } from "react";
import { content } from "@/content/content";

const SERVICE_TYPES = [
  { value: "limpieza", label: "Limpieza de Oficinas y Empresas" },
  { value: "saneamiento", label: "Saneamiento Ambiental y Desinfección" },
  { value: "mantenimiento", label: "Mantenimiento Integral" },
];

const FACILITY_TYPES = [
  "Oficina Corporativa",
  "Edificio Empresarial",
  "Call Center / Coworking",
  "Embajada / Institución",
  "Colegio / Universidad",
  "Almacén / Centro Logístico",
  "Clínica / Consultorio",
  "Local Comercial",
];

const LOCATIONS = ["Lima Metropolitana", "Callao", "Lima + Provincias"];
const CONTRACT_TYPES = ["Mensual fijo", "Servicio puntual", "Mixto"];
const START_DATES = ["Inmediato", "1–2 semanas", "1 mes", "+1 mes"];
const DURATIONS = ["6 meses", "12 meses", "24+ meses", "Única vez"];
const FREQUENCIES = [
  "Diario (L–V)",
  "Diario (L–S)",
  "Interdiario (3x sem)",
  "2x semana",
  "1x semana",
  "Única vez (Profunda)",
];
const HOURS = ["4", "6", "8", "12"];
const SHIFTS = ["1", "2"];
const AREAS = [
  "Oficinas y escritorios",
  "Directorio y salas de reuniones",
  "Recepción y lobby",
  "Servicios higiénicos (Baños)",
  "Kitchenette / Comedor",
  "Mamparas y vidrios",
  "Almacén / Archivo",
  "Estacionamiento",
];
const BATHROOMS = ["1–2", "3–5", "6–10", "11+"];
const CAPACITIES = ["1–20", "21–50", "51–100", "101–300", "300+"];
const FLOOR_TYPES = [
  "Porcelanato / Cerámico",
  "Alfombra / Tapizón",
  "Vinílico / PVC",
  "Mármol / Granito",
  "Parquet / Madera",
  "Cemento pulido / Epóxico",
  "Mixto",
];
const WINDOW_CLEAN = ["No", "Sí interior", "Interior + exterior"];
const CARPET_WASH = ["No", "Ocasional", "Trimestral", "Mensual"];
const FLOOR_POLISH = ["No", "Mensual", "Trimestral", "Semestral"];
const SUPPLY_OPTIONS = ["Sí (Todo incluido)", "No (Solo personal)", "Parcial"];
const MACHINERY = ["No", "Aspiradora industrial", "Lustradora", "Ambas"];
const SUPERVISOR_OPTIONS = ["Supervisión zonal incluida", "Supervisor fijo en sede"];
const PAYMENT_TERMS = ["Contado", "15 días", "30 días", "45 días"];
const URGENCY_OPTIONS = ["Hoy mismo", "En 24 horas", "Esta semana"];

interface FormData {
  [key: string]: string | string[] | boolean | number | null;
}

function OptionGrid({
  options,
  value,
  onChange,
  multi = false,
}: {
  options: string[];
  value: string | string[];
  onChange: (v: string | string[]) => void;
  multi?: boolean;
}) {
  const selected = multi ? (Array.isArray(value) ? value : []) : value;

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {options.map((opt) => {
        const isSelected = multi
          ? (selected as string[]).includes(opt)
          : selected === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => {
              if (multi) {
                const arr = selected as string[];
                onChange(
                  arr.includes(opt)
                    ? arr.filter((v) => v !== opt)
                    : [...arr, opt]
                );
              } else {
                onChange(opt);
              }
            }}
            className={`rounded-lg border px-3 py-2.5 text-left text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              isSelected
                ? "border-accent bg-primary/30 text-white shadow-sm"
                : "border-white/10 bg-white/5 text-gray-300 hover:border-white/25 hover:bg-white/10"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5">
      <label className="mb-2 block text-sm font-semibold text-white">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {children}
    </div>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
    />
  );
}

const TOTAL_STEPS = 6;

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="mb-6 flex items-center gap-2">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all ${
              i + 1 < current
                ? "bg-primary text-white"
                : i + 1 === current
                  ? "bg-accent text-brand-black ring-2 ring-accent"
                  : "bg-white/10 text-gray-400"
            }`}
          >
            {i + 1 < current ? "✓" : i + 1}
          </div>
          {i < total - 1 && (
            <div
              className={`h-0.5 w-6 sm:w-10 ${
                i + 1 < current ? "bg-primary" : "bg-white/10"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function QuoteModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>({
    service_type: "limpieza",
    facility_type: "Oficina Corporativa",
    location: "Lima Metropolitana",
    num_locations: "1",
    contract_type: "Mensual fijo",
    start_date: "Inmediato",
    duration: "12 meses",
    area_m2: "350",
    frequency: "Diario (L–V)",
    hours_per_shift: "8",
    shifts_per_day: "1",
    areas_included: ["Oficinas y escritorios", "Servicios higiénicos (Baños)"],
    num_bathrooms: "3–5",
    approximate_capacity: "21–50",
    floor_type: "Porcelanato / Cerámico",
    needs_window_cleaning: "Sí interior",
    needs_carpet_washing: "No",
    needs_floor_polishing: "No",
    num_personnel: "",
    needs_help_calculating: true,
    includes_cleaning_supplies: "Sí (Todo incluido)",
    includes_bathroom_consumables: "No (Solo personal)",
    needs_machinery: "Ambas",
    needs_supervisor: "Supervisión zonal incluida",
    payment_terms: "30 días",
    urgency: "En 24 horas",
    contact_name: "",
    contact_company: "",
    contact_email: "",
    contact_phone: "",
    contact_ruc: "",
  });

  const set = useCallback(
    (key: string, val: string | string[] | boolean) => {
      setForm((prev) => ({ ...prev, [key]: val }));
    },
    []
  );

  const canAdvance = () => {
    if (step === 1) return !!form.service_type;
    if (step === 5) return !!form.contact_name;
    return true;
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/quote/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setResult(data.quote);
      } else {
        setError(data.error || "Error al generar la cotización");
      }
    } catch {
      setError("Error de conexión. Intente nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  const next = () => {
    if (step === 5) {
      handleSubmit();
      setStep(6);
    } else {
      setStep((s) => Math.min(s + 1, TOTAL_STEPS));
    }
  };
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const reset = () => {
    setStep(1);
    setResult(null);
    setError(null);
    setLoading(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/15 bg-gradient-to-b from-[#06234b] to-brand-black p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="mb-4">
          <span className="inline-block rounded-full bg-accent/20 px-3 py-0.5 text-xs font-bold text-accent">
            Cotizador Inteligente DINÁMICA
          </span>
          <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
            {step === 6
              ? loading
                ? "Calculando estructura de costos..."
                : result
                  ? "Cotización Referencial DINÁMICA"
                  : "Error"
              : "Cotiza la limpieza de tu oficina al instante"}
          </h2>
          <p className="mt-1 text-sm text-gray-300">
            {step < 6
              ? "Obtén un presupuesto referencial con desglose de planilla y costos reales en Perú"
              : ""}
          </p>
        </div>

        {step < 6 && <StepIndicator current={step} total={5} />}

        {/* Step 1 */}
        {step === 1 && (
          <div>
            <FormField label="¿Qué servicio necesita tu empresa?" required>
              <OptionGrid
                options={SERVICE_TYPES.map((s) => s.label)}
                value={
                  SERVICE_TYPES.find((s) => s.value === form.service_type)
                    ?.label || ""
                }
                onChange={(v) =>
                  set(
                    "service_type",
                    SERVICE_TYPES.find((s) => s.label === v)?.value ||
                      "limpieza"
                  )
                }
              />
            </FormField>
            <FormField label="Tipo de oficina o instalación">
              <OptionGrid
                options={FACILITY_TYPES}
                value={form.facility_type as string}
                onChange={(v) => set("facility_type", v as string)}
              />
            </FormField>
            <FormField label="Ubicación del servicio">
              <OptionGrid
                options={LOCATIONS}
                value={form.location as string}
                onChange={(v) => set("location", v as string)}
              />
            </FormField>
            <FormField label="¿Cuántas sedes u oficinas?">
              <OptionGrid
                options={["1", "2–3", "4–10", "11+"]}
                value={form.num_locations as string}
                onChange={(v) => set("num_locations", v as string)}
              />
            </FormField>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div>
            <FormField label="Área aproximada de la oficina (m²)">
              <TextInput
                value={form.area_m2 as string}
                onChange={(v) => set("area_m2", v)}
                placeholder="Ej: 400"
                type="number"
              />
            </FormField>
            <FormField label="Modalidad de servicio">
              <OptionGrid
                options={CONTRACT_TYPES}
                value={form.contract_type as string}
                onChange={(v) => set("contract_type", v as string)}
              />
            </FormField>
            <FormField label="¿Cuándo desea iniciar?">
              <OptionGrid
                options={START_DATES}
                value={form.start_date as string}
                onChange={(v) => set("start_date", v as string)}
              />
            </FormField>
            <FormField label="Duración estimada">
              <OptionGrid
                options={DURATIONS}
                value={form.duration as string}
                onChange={(v) => set("duration", v as string)}
              />
            </FormField>
            <FormField label="Frecuencia del servicio">
              <OptionGrid
                options={FREQUENCIES}
                value={form.frequency as string}
                onChange={(v) => set("frequency", v as string)}
              />
            </FormField>
            <div className="grid grid-cols-2 gap-4">
              <FormField label="Horas por turno">
                <OptionGrid
                  options={HOURS}
                  value={form.hours_per_shift as string}
                  onChange={(v) => set("hours_per_shift", v as string)}
                />
              </FormField>
              <FormField label="Turnos al día">
                <OptionGrid
                  options={SHIFTS}
                  value={form.shifts_per_day as string}
                  onChange={(v) => set("shifts_per_day", v as string)}
                />
              </FormField>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div>
            <FormField label="¿Qué ambientes de la oficina incluye?">
              <OptionGrid
                options={AREAS}
                value={form.areas_included as string[]}
                onChange={(v) => set("areas_included", v as string[])}
                multi
              />
            </FormField>
            <div className="grid grid-cols-2 gap-4">
              <FormField label="Servicios higiénicos (Baños)">
                <OptionGrid
                  options={BATHROOMS}
                  value={form.num_bathrooms as string}
                  onChange={(v) => set("num_bathrooms", v as string)}
                />
              </FormField>
              <FormField label="Colaboradores en oficina">
                <OptionGrid
                  options={CAPACITIES}
                  value={form.approximate_capacity as string}
                  onChange={(v) => set("approximate_capacity", v as string)}
                />
              </FormField>
            </div>
            <FormField label="Tipo de piso predominante">
              <OptionGrid
                options={FLOOR_TYPES}
                value={form.floor_type as string}
                onChange={(v) => set("floor_type", v as string)}
              />
            </FormField>
            <FormField label="¿Limpieza de mamparas y vidrios?">
              <OptionGrid
                options={WINDOW_CLEAN}
                value={form.needs_window_cleaning as string}
                onChange={(v) => set("needs_window_cleaning", v as string)}
              />
            </FormField>
            <div className="grid grid-cols-2 gap-4">
              <FormField label="¿Lavado de alfombras?">
                <OptionGrid
                  options={CARPET_WASH}
                  value={form.needs_carpet_washing as string}
                  onChange={(v) => set("needs_carpet_washing", v as string)}
                />
              </FormField>
              <FormField label="¿Abrillantado de pisos?">
                <OptionGrid
                  options={FLOOR_POLISH}
                  value={form.needs_floor_polishing as string}
                  onChange={(v) => set("needs_floor_polishing", v as string)}
                />
              </FormField>
            </div>
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div>
            <FormField label="¿Cuántos operarios de limpieza requiere?">
              <div className="flex items-center gap-3">
                <TextInput
                  value={form.num_personnel as string}
                  onChange={(v) => {
                    set("num_personnel", v);
                    set("needs_help_calculating", false);
                  }}
                  placeholder="Cantidad (Ej: 2)"
                  type="number"
                />
                <button
                  type="button"
                  onClick={() => {
                    set("needs_help_calculating", true);
                    set("num_personnel", "");
                  }}
                  className={`whitespace-nowrap rounded-lg border px-4 py-3 text-sm font-semibold transition-all cursor-pointer ${
                    form.needs_help_calculating
                      ? "border-accent bg-primary/30 text-accent"
                      : "border-white/15 bg-white/5 text-gray-300"
                  }`}
                >
                  Calcular según m²
                </button>
              </div>
            </FormField>
            <FormField label="¿Incluye insumos y materiales de limpieza?">
              <OptionGrid
                options={SUPPLY_OPTIONS}
                value={form.includes_cleaning_supplies as string}
                onChange={(v) =>
                  set("includes_cleaning_supplies", v as string)
                }
              />
            </FormField>
            <FormField label="¿Maquinaria requerida en oficina?">
              <OptionGrid
                options={MACHINERY}
                value={form.needs_machinery as string}
                onChange={(v) => set("needs_machinery", v as string)}
              />
            </FormField>
            <FormField label="Modalidad de supervisión">
              <OptionGrid
                options={SUPERVISOR_OPTIONS}
                value={form.needs_supervisor as string}
                onChange={(v) => set("needs_supervisor", v as string)}
              />
            </FormField>
            <FormField label="Condición de pago">
              <OptionGrid
                options={PAYMENT_TERMS}
                value={form.payment_terms as string}
                onChange={(v) => set("payment_terms", v as string)}
              />
            </FormField>
            <FormField label="Urgencia de la cotización">
              <OptionGrid
                options={URGENCY_OPTIONS}
                value={form.urgency as string}
                onChange={(v) => set("urgency", v as string)}
              />
            </FormField>
          </div>
        )}

        {/* Step 5: Contact Info */}
        {step === 5 && (
          <div>
            <p className="mb-5 text-sm text-gray-300">
              Ingresa tus datos corporativos para visualizar tu cotización al instante.
            </p>
            <FormField label="Nombre completo" required>
              <TextInput
                value={form.contact_name as string}
                onChange={(v) => set("contact_name", v)}
                placeholder="Ej: María Fernanda Torres"
              />
            </FormField>
            <FormField label="Empresa / Razón Social">
              <TextInput
                value={form.contact_company as string}
                onChange={(v) => set("contact_company", v)}
                placeholder="Ej: Corporación Peruana S.A.C."
              />
            </FormField>
            <FormField label="RUC">
              <TextInput
                value={form.contact_ruc as string}
                onChange={(v) => set("contact_ruc", v)}
                placeholder="Ej: 20600000001"
              />
            </FormField>
            <div className="grid grid-cols-2 gap-4">
              <FormField label="Correo corporativo">
                <TextInput
                  value={form.contact_email as string}
                  onChange={(v) => set("contact_email", v)}
                  placeholder="nombre@empresa.pe"
                  type="email"
                />
              </FormField>
              <FormField label="Teléfono / WhatsApp">
                <TextInput
                  value={form.contact_phone as string}
                  onChange={(v) => set("contact_phone", v)}
                  placeholder="999 999 999"
                />
              </FormField>
            </div>
            <div className="mt-4 rounded-xl border border-primary/30 bg-primary/10 p-4">
              <p className="text-xs text-gray-300">
                📋 Al hacer clic en <strong>&quot;Generar cotización&quot;</strong>, obtendrás al instante el desglose referencial con costos laborales vigentes en Perú. Para una cotización formal, escríbenos a{" "}
                <a
                  href={`mailto:${content.company.email}`}
                  className="text-accent font-semibold hover:underline"
                >
                  {content.company.email}
                </a>
                .
              </p>
            </div>
          </div>
        )}

        {/* Step 6: Result */}
        {step === 6 && (
          <div>
            {loading && (
              <div className="flex flex-col items-center py-12">
                <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary/30 border-t-accent" />
                <p className="text-sm font-semibold text-white">
                  Calculando estructura de costos laborales e insumos...
                </p>
              </div>
            )}
            {error && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center">
                <p className="text-red-300">{error}</p>
                <button
                  onClick={reset}
                  className="mt-4 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-white cursor-pointer"
                >
                  Intentar de nuevo
                </button>
              </div>
            )}
            {result &&
              ((): React.ReactNode => {
                const data = result as Record<string, unknown>;
                return (
                  <div>
                    <div className="mb-4 rounded-xl border border-accent/30 bg-accent/10 p-3">
                      <p className="text-xs font-semibold text-accent">
                        ⚠️ Presupuesto REFERENCIAL calculado según estructura de costos laborales en Perú. Solicite visita técnica sin costo a {content.company.email}
                      </p>
                    </div>
                    <div className="max-h-[50vh] space-y-4 overflow-y-auto pr-1">
                      {/* Resumen */}
                      {!!data.resumen && (
                        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                          <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-accent">
                            Resumen del Requerimiento
                          </h3>
                          <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                            {Object.entries(
                              data.resumen as Record<string, string>
                            ).map(([k, v]) => (
                              <div key={k}>
                                <span className="text-gray-400">
                                  {k.replace(/_/g, " ")}:
                                </span>{" "}
                                <span className="font-semibold text-white">
                                  {String(v)}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {/* Personal */}
                      {!!(
                        Array.isArray(data.personal) && data.personal.length
                      ) && (
                        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                          <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-accent">
                            Personal Asignado en Planilla
                          </h3>
                          {(
                            data.personal as Array<Record<string, unknown>>
                          ).map((p, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between border-b border-white/5 py-2 text-sm last:border-0"
                            >
                              <span className="text-gray-200 font-medium">
                                {String(p.cantidad)}× {String(p.cargo)}
                              </span>
                              <span className="text-gray-300">
                                Rem. Base: S/{" "}
                                {Number(p.sueldo_base || 0).toLocaleString(
                                  "es-PE"
                                )}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                      {/* Desglose */}
                      {!!(
                        Array.isArray(data.desglose) && data.desglose.length
                      ) && (
                        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                          <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-accent">
                            Desglose de Estructura de Costos (S/)
                          </h3>
                          <table className="w-full text-xs sm:text-sm">
                            <thead>
                              <tr className="border-b border-white/10 text-gray-400">
                                <th className="py-2 text-left font-medium">
                                  Concepto
                                </th>
                                <th className="py-2 text-right font-medium">
                                  Subtotal
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {(
                                data.desglose as Array<Record<string, unknown>>
                              ).map((row, i) => {
                                const isTotal = String(row.concepto).includes(
                                  "TOTAL"
                                );
                                const isSubtotal =
                                  String(row.concepto) === "SUBTOTAL";
                                return (
                                  <tr
                                    key={i}
                                    className={`border-b border-white/5 ${
                                      isTotal
                                        ? "text-accent font-extrabold text-base"
                                        : isSubtotal
                                          ? "text-white font-bold"
                                          : "text-gray-300"
                                    }`}
                                  >
                                    <td className="py-2">
                                      {String(row.concepto)}
                                    </td>
                                    <td className="py-2 text-right">
                                      S/{" "}
                                      {Number(row.subtotal).toLocaleString(
                                        "es-PE",
                                        { minimumFractionDigits: 2 }
                                      )}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      )}
                      {/* Incluye */}
                      {!!(
                        Array.isArray(data.incluye) && data.incluye.length
                      ) && (
                        <div className="rounded-xl border border-primary/30 bg-primary/10 p-4">
                          <h4 className="mb-2 text-xs font-bold uppercase text-accent">
                            ✓ El Servicio Incluye
                          </h4>
                          <ul className="space-y-1 text-xs text-gray-200">
                            {(data.incluye as string[]).map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="mt-5 flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={reset}
                        className="flex-1 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-gray-300 transition-colors hover:bg-white/10 cursor-pointer"
                      >
                        Nueva simulación
                      </button>
                      <a
                        href={`https://wa.me/${content.company.whatsapp}?text=${encodeURIComponent(
                          `Hola DINÁMICA, acabo de generar una cotización referencial para ${form.contact_company || form.facility_type} (${form.area_m2} m²) y deseo agendar una visita técnica.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-xl bg-accent px-5 py-3 text-center text-sm font-extrabold text-brand-black transition-all hover:bg-white"
                      >
                        Validar por WhatsApp
                      </a>
                    </div>
                  </div>
                );
              })()}
          </div>
        )}

        {/* Step Navigation */}
        {step < 6 && (
          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
            {step > 1 ? (
              <button
                onClick={back}
                className="rounded-lg px-4 py-2 text-sm text-gray-300 transition-colors hover:text-white cursor-pointer"
              >
                ← Atrás
              </button>
            ) : (
              <div />
            )}
            <button
              onClick={next}
              disabled={!canAdvance()}
              className={`rounded-xl px-8 py-3 text-sm font-extrabold transition-all cursor-pointer ${
                canAdvance()
                  ? "bg-accent text-brand-black shadow-lg shadow-accent/25 hover:bg-white hover:-translate-y-0.5"
                  : "cursor-not-allowed bg-white/10 text-gray-500"
              }`}
            >
              {step === 5 ? "Generar cotización →" : "Siguiente →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
