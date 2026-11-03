"use client";

import { useState, FormEvent } from "react";
import { content } from "@/content/content";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Error al enviar");

      setSuccess(true);
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError((err as Error).message || "Error al enviar la solicitud");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contacto" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <div className="rounded-3xl border border-gray-200/80 bg-light-bg/50 p-6 sm:p-10 shadow-sm">
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Atención Comercial Inmediata
            </span>
            <h2 className="mb-2 text-3xl font-extrabold text-brand-black sm:text-4xl">
              {content.contact.title}
            </h2>
            <p className="mb-8 text-base text-brand-gray">
              {content.contact.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-semibold text-brand-black"
                  >
                    {content.contact.formFields.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-brand-black placeholder-gray-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    placeholder="Ej: Carlos Mendoza"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="mb-1.5 block text-sm font-semibold text-brand-black"
                  >
                    {content.contact.formFields.company}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-brand-black placeholder-gray-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-semibold text-brand-black"
                  >
                    {content.contact.formFields.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-brand-black placeholder-gray-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    placeholder="correo@empresa.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-semibold text-brand-black"
                  >
                    {content.contact.formFields.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-brand-black placeholder-gray-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    placeholder="+51 999 999 999"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-semibold text-brand-black"
                >
                  {content.contact.formFields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-brand-black placeholder-gray-400 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  placeholder="Indícanos el tipo de oficina o instalación, distrito y horario deseado..."
                />
              </div>

              {error && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              {success ? (
                <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="font-bold text-green-800">
                    ¡Solicitud enviada con éxito!
                  </p>
                  <p className="mt-1 text-sm text-green-700">
                    Un asesor comercial de DINÁMICA se comunicará contigo a la brevedad.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="mt-4 text-sm font-semibold text-primary hover:underline cursor-pointer"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 cursor-pointer"
                >
                  {loading
                    ? "Enviando solicitud..."
                    : content.contact.formFields.submit}
                </button>
              )}
            </form>
          </div>

          {/* Direct Contact Info Cards */}
          <div className="flex flex-col justify-center space-y-5">
            <div className="mb-2">
              <h3 className="text-2xl font-extrabold text-brand-black">
                Canales Directos de Atención
              </h3>
              <p className="mt-2 text-sm text-brand-gray">
                Comunícate directamente con nuestra central comercial en Santiago de Surco, Lima.
              </p>
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${content.company.whatsapp}?text=${encodeURIComponent(
                "Hola DINÁMICA, deseo solicitar una cotización de limpieza para oficinas."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-green-400 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-brand-black">
                  WhatsApp Corporativo y Teléfono
                </p>
                <p className="text-base font-semibold text-brand-gray">
                  {content.company.phone}
                </p>
                <p className="mt-1 text-xs font-bold text-green-600">
                  Iniciar conversación por WhatsApp →
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${content.company.email}?subject=Solicitud%20de%20Cotizaci%C3%B3n%20-%20DIN%C3%81MICA`}
              className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-brand-black">
                  Correo de Cotizaciones e Informes
                </p>
                <p className="text-base font-semibold text-primary">
                  {content.company.email}
                </p>
                <p className="mt-1 text-xs font-semibold text-brand-gray">
                  Respuesta garantizada en menos de 24 horas →
                </p>
              </div>
            </a>

            {/* Dirección y RUC */}
            <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-brand-black">
                  {content.company.legalName} — RUC {content.company.ruc}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-brand-gray">
                  {content.company.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
