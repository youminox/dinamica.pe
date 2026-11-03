"use client";

/* ═══════════════════════════════════════════════
   DINAMICA SERVICIO DE LIMPIEZA SAC — Brochure Corporativo B2B
   Páginas editoriales A4 listas para impresión / descarga PDF
   ═══════════════════════════════════════════════ */

const icons = {
  check: (
    <svg
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  shield: (
    <svg
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  ),
  wrench: (
    <svg
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63"
      />
    </svg>
  ),
  users: (
    <svg
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
  ),
  eye: (
    <svg
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  clipboard: (
    <svg
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"
      />
    </svg>
  ),
  phone: (
    <svg
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  ),
  mail: (
    <svg
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  ),
  globe: (
    <svg
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3"
      />
    </svg>
  ),
  pin: (
    <svg
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
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
  ),
};

export default function BrochureContent() {
  return (
    <div className="brochure-wrapper">
      {/* ═══════════════════════════════════════
          PAGE 1 — PORTADA
          ═══════════════════════════════════════ */}
      <section
        className="brochure-page page-bleed"
        style={{
          position: "relative",
          background:
            "linear-gradient(155deg, #032b5e 0%, #03428e 45%, #0767db 100%)",
        }}
      >
        <img
          src="/servicio-limpieza.jpg"
          alt="Personal profesional de Dinámica"
          className="img-cover-absolute"
          style={{ objectPosition: "center 25%", opacity: 0.45 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(3,42,92,0.35) 0%, rgba(3,42,92,0.65) 55%, rgba(2,24,56,0.95) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "40px clamp(24px, 5vw, 48px)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <img
              src="/brochure/logo-dinamica-white.png"
              alt="DINAMICA SERVICIO DE LIMPIEZA SAC"
              style={{ height: 42, width: "auto", display: "block" }}
            />
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#e7ed00",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              RUC 20612233161
            </span>
          </div>

          <div style={{ maxWidth: 620 }}>
            <p
              className="section-tag section-tag-white"
              style={{
                marginBottom: 16,
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
              }}
            >
              Brochure Corporativo B2B
            </p>
            <h1
              className="brochure-display"
              style={{ color: "#fff", marginBottom: 20, maxWidth: 560 }}
            >
              Gestión integral de limpieza para oficinas, saneamiento y
              mantenimiento corporativo
            </h1>
            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.6,
                maxWidth: 480,
                marginBottom: 24,
              }}
            >
              Limpieza profesional de oficinas · Saneamiento ambiental DIGESA ·
              Mantenimiento integral de instalaciones
            </p>
            <div
              className="accent-line accent-line-white"
              style={{ width: 64, height: 4 }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PAGE 2 — SOBRE DINÁMICA
          ═══════════════════════════════════════ */}
      <section className="brochure-page" style={{ position: "relative" }}>
        <div className="page-inner" style={{ position: "relative", zIndex: 2 }}>
          <div className="section-tag">Sobre Dinámica</div>
          <div className="accent-line" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 32,
              flex: 1,
            }}
          >
            <div className="grid-2" style={{ gap: 40, alignItems: "start" }}>
              <div>
                <h2 className="brochure-h1" style={{ marginBottom: 20 }}>
                  Elevando el estándar de{" "}
                  <span style={{ color: "var(--brochure-primary)" }}>
                    limpieza corporativa
                  </span>{" "}
                  en el Perú.
                </h2>
                <p className="brochure-body" style={{ marginBottom: 16 }}>
                  <strong>DINAMICA SERVICIO DE LIMPIEZA SAC</strong> es una
                  empresa peruana especializada en brindar soluciones integrales
                  de limpieza para oficinas corporativas, call centers,
                  embajadas, instituciones educativas y edificios empresariales.
                </p>
                <p className="brochure-body" style={{ marginBottom: 24 }}>
                  Operamos con personal 100% en planilla desde el primer día,
                  supervisión presencial constante, maquinaria silenciosa de
                  última generación e insumos biodegradables certificados por
                  DIGESA.
                </p>
                <p
                  className="brochure-body"
                  style={{ fontWeight: 700, color: "var(--brochure-black)" }}
                >
                  DINAMICA SERVICIO DE LIMPIEZA SAC · RUC: 20612233161
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                <div style={{ borderRadius: 10, overflow: "hidden" }}>
                  <img
                    src="/proceso-diagnostico.jpg"
                    alt="Supervisión Dinámica"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
                <div
                  style={{
                    borderLeft: "4px solid var(--brochure-primary)",
                    paddingLeft: 20,
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.05rem",
                      fontStyle: "italic",
                      color: "var(--brochure-gray)",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    &ldquo;Transformamos cada oficina en un espacio impecable,
                    saludable y productivo que refleja la excelencia de su
                    organización.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="stats-row">
              <div>
                <div className="stat-number">100%</div>
                <p className="brochure-caption" style={{ marginTop: 4 }}>
                  Personal en Planilla + SCTR
                </p>
              </div>
              <div>
                <div className="stat-number">&lt; 2h</div>
                <p className="brochure-caption" style={{ marginTop: 4 }}>
                  Reemplazo Garantizado
                </p>
              </div>
              <div>
                <div className="stat-number">Nacional</div>
                <p className="brochure-caption" style={{ marginTop: 4 }}>
                  Cobertura Lima y Provincias
                </p>
              </div>
            </div>

            {/* Misión + Visión */}
            <div className="grid-2" style={{ gap: 24, marginTop: "auto" }}>
              <div
                style={{
                  borderLeft: "3px solid var(--brochure-primary)",
                  paddingLeft: 20,
                }}
              >
                <h3
                  className="brochure-h3"
                  style={{ marginBottom: 8, fontSize: "0.9375rem" }}
                >
                  Misión
                </h3>
                <p className="brochure-body-sm">
                  Brindar servicios de limpieza corporativa, saneamiento
                  ambiental y mantenimiento de instalaciones con los más altos
                  estándares de calidad, seguridad y formalidad laboral.
                </p>
              </div>
              <div
                style={{
                  borderLeft: "3px solid var(--brochure-border)",
                  paddingLeft: 20,
                }}
              >
                <h3
                  className="brochure-h3"
                  style={{ marginBottom: 8, fontSize: "0.9375rem" }}
                >
                  Visión
                </h3>
                <p className="brochure-body-sm">
                  Ser reconocidos a nivel nacional como el socio estratégico
                  preferido en soluciones integrales de facility services para
                  oficinas y empresas líderes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PAGE 3 — LIMPIEZA PROFESIONAL PARA OFICINAS
          ═══════════════════════════════════════ */}
      <section
        className="brochure-page page-bleed"
        style={{ position: "relative" }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "40%",
            minHeight: 220,
            overflow: "hidden",
          }}
        >
          <img
            src="/servicio-limpieza.jpg"
            alt="Limpieza Profesional de Oficinas"
            className="img-cover-absolute"
          />
          <div className="overlay-dark" />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              padding: "36px 40px",
              color: "#fff",
            }}
          >
            <div className="section-tag section-tag-white">
              Servicio Principal
            </div>
            <h2 className="brochure-display" style={{ color: "#fff" }}>
              Limpieza Profesional para Oficinas y Empresas
            </h2>
          </div>
        </div>

        <div
          style={{
            padding: "32px 40px",
            flex: 1,
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(135deg, #0767db 0%, #03428e 100%)",
              borderRadius: 10,
              padding: "18px 22px",
              marginBottom: 20,
            }}
          >
            <p className="brochure-body" style={{ margin: 0, color: "#fff" }}>
              Despreocúpese de la gestión operativa. Proveemos una solución
              llave en mano —personal uniformado en planilla, insumos
              biodegradables certificados y supervisión permanente— para que su
              empresa se enfoque al 100% en su core business.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginBottom: 24,
            }}
          >
            {[
              "Oficinas corporativas",
              "Call centers",
              "Edificios empresariales",
              "Embajadas y sedes diplomáticas",
              "Locales comerciales",
              "Almacenes y centros logísticos",
            ].map((space) => (
              <span
                key={space}
                style={{
                  padding: "6px 14px",
                  background: "#eff6ff",
                  color: "var(--brochure-primary-dark)",
                  borderRadius: 16,
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                }}
              >
                {space}
              </span>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 14,
              flex: 1,
            }}
          >
            {[
              {
                label: "Personal 100% en Planilla",
                icon: icons.users,
                desc: "Colaboradores uniformados con polo camisero institucional, SCTR, Vida Ley y beneficios completos.",
              },
              {
                label: "Supervisión Permanente",
                icon: icons.eye,
                desc: "Rondas de inspección con checklists digitales e informes ejecutivos de cumplimiento KPI.",
              },
              {
                label: "Maquinaria Silenciosa",
                icon: icons.wrench,
                desc: "Aspiradoras con filtro HEPA, lustradoras rotativas y fregadoras que no interrumpen sus labores.",
              },
              {
                label: "Insumos Certificados DIGESA",
                icon: icons.shield,
                desc: "Productos biodegradables de grado corporativo con hojas de seguridad MSDS.",
              },
              {
                label: "Reemplazo en Menos de 2 Horas",
                icon: icons.clipboard,
                desc: "Bolsa de retenes capacitados para garantizar continuidad operativa al 100% ante cualquier ausencia.",
                span: true,
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "14px 18px",
                  background: "var(--brochure-white)",
                  border: "1px solid var(--brochure-border)",
                  borderRadius: 8,
                  gridColumn: item.span ? "1 / -1" : "auto",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 6,
                  }}
                >
                  <div style={{ color: "var(--brochure-primary)" }}>
                    {item.icon}
                  </div>
                  <h4
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "var(--brochure-black)",
                      margin: 0,
                    }}
                  >
                    {item.label}
                  </h4>
                </div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--brochure-gray)",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PAGE 4 — SANEAMIENTO AMBIENTAL Y MANTENIMIENTO
          ═══════════════════════════════════════ */}
      <section className="brochure-page">
        <div className="page-inner">
          <div className="section-tag">Soluciones Integrales</div>
          <div className="accent-line" />
          <h2 className="brochure-h2" style={{ marginBottom: 24 }}>
            Saneamiento Ambiental y Mantenimiento de Instalaciones
          </h2>

          <div className="grid-2" style={{ gap: 20, flex: 1 }}>
            {[
              {
                title: "Desinfección ULV y Fumigación",
                image: "/servicio-saneamiento.jpg",
                desc: "Eliminación del 99.9% de virus, bacterias, insectos y vectores con amonio cuaternario de 5ta generación e insumos autorizados por DIGESA.",
              },
              {
                title: "Desratización y Reservorios de Agua",
                image: "/sector-salud.jpg",
                desc: "Control integral de roedores para protección de data centers y cableado, más limpieza certificada de cisternas y tanques elevados.",
              },
              {
                title: "Mantenimiento Eléctrico, LED y Sanitario",
                image: "/servicio-mantenimiento.jpg",
                desc: "Revisión de tableros, pozos a tierra, luminarias LED corporativas, fluxómetros, bombas y redes sanitarias con atención 24/7.",
              },
              {
                title: "Pintura Corporativa, Vidrios y Pisos",
                image: "/sector-comercio.jpg",
                desc: "Pintado de oficinas en horarios flexibles, limpieza de vidrios en altura, lavado de alfombras y cristalizado de pisos.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  position: "relative",
                  borderRadius: 8,
                  overflow: "hidden",
                  minHeight: 210,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-cover-absolute"
                />
                <div className="overlay-dark" />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 22,
                    zIndex: 2,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.88)",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 24,
              borderRadius: 8,
              overflow: "hidden",
              height: 110,
              position: "relative",
            }}
          >
            <img
              src="/sector-oficinas.jpg"
              alt="Oficinas Corporativas Dinámica"
              className="img-cover-absolute"
            />
            <div className="overlay-primary" />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                textAlign: "center",
                padding: "0 24px",
              }}
            >
              <p
                style={{
                  color: "#fff",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  lineHeight: 1.5,
                  maxWidth: 540,
                  margin: 0,
                }}
              >
                Emitimos Certificados Oficiales de Saneamiento Ambiental e
                Informes Técnicos para auditorías e inspecciones municipales y
                sanitarias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PAGE 5 — METODOLOGÍA DE TRABAJO (5 PASOS)
          ═══════════════════════════════════════ */}
      <section className="brochure-page page-bleed metodologia-layout">
        <div className="metodologia-content">
          <div className="section-tag">Metodología Dinámica</div>
          <div className="accent-line" />
          <h2 className="brochure-h2" style={{ marginBottom: 8 }}>
            Nuestro proceso de trabajo
          </h2>
          <p className="brochure-body" style={{ marginBottom: 24 }}>
            Un sistema estructurado en 5 etapas que garantiza calidad medible y
            mejora continua en sus instalaciones.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              flex: 1,
            }}
          >
            {[
              {
                num: "01",
                title: "Diagnóstico Técnico en Sitio",
                desc: "Inspeccionamos sus oficinas sin costo para evaluar metraje, tipos de superficies, flujo de personal y puntos críticos.",
              },
              {
                num: "02",
                title: "Plan de Trabajo a Medida",
                desc: "Diseñamos rutinas diarias, semanales y mensuales con asignación óptima de operarios, turnos, maquinaria e insumos.",
              },
              {
                num: "03",
                title: "Ejecución Profesional",
                desc: "Despliegue de personal uniformado en planilla aplicando protocolos de limpieza sin interrumpir sus actividades.",
              },
              {
                num: "04",
                title: "Supervisión y Control de Calidad",
                desc: "Supervisores zonales verifican el cumplimiento mediante checklists digitales y auditorías presenciales.",
              },
              {
                num: "05",
                title: "Reportes Ejecutivos y KPIs",
                desc: "Entregamos informes periódicos con indicadores de gestión, constancias y certificados de saneamiento.",
              },
            ].map((step) => (
              <div className="process-step" key={step.num}>
                <div className="process-number">{step.num}</div>
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      color: "var(--brochure-black)",
                      marginBottom: 4,
                    }}
                  >
                    {step.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      lineHeight: 1.55,
                      color: "var(--brochure-gray)",
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="metodologia-foto">
          <img
            src="/proceso-supervision.jpg"
            alt="Supervisión en campo Dinámica"
            className="img-cover-absolute"
            style={{ objectPosition: "center top" }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PAGE 6 — RESPALDO LEGAL, CLIENTES Y CONTACTO
          ═══════════════════════════════════════ */}
      <section className="brochure-page">
        <div
          className="page-inner last-page-inner"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="section-tag">Seguridad, Formalidad y Confianza</div>
          <div className="accent-line" />
          <h2 className="brochure-h2" style={{ marginBottom: 16 }}>
            Garantías Corporativas y Contacto Directo
          </h2>

          <div className="grid-2" style={{ gap: 10, marginBottom: 24 }}>
            {[
              {
                title: "Personal 100% en Planilla",
                desc: "CTS, gratificaciones, vacaciones, EsSalud y asignación familiar al día.",
              },
              {
                title: "SCTR y Seguro Vida Ley",
                desc: "Cobertura integral de salud y pensión desde el primer día de labores.",
              },
              {
                title: "Póliza de Responsabilidad Civil",
                desc: "Protección frente a daños a terceros o eventualidades en sus instalaciones.",
              },
              {
                title: "Verificación de Antecedentes",
                desc: "Filtro riguroso policial, penal, judicial y psicológico de todo el personal.",
              },
              {
                title: "Ley N° 29783 — SST",
                desc: "Cumplimiento estricto de la normativa de Seguridad y Salud en el Trabajo.",
              },
              {
                title: "Insumos Autorizados DIGESA",
                desc: "Químicos biodegradables con registro sanitario y hojas MSDS.",
              },
            ].map((g) => (
              <div className="guarantee-item" key={g.title}>
                <div className="guarantee-icon">{icons.check}</div>
                <div>
                  <h4>{g.title}</h4>
                  <p>{g.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA block */}
          <div
            className="last-page-cta"
            style={{
              background:
                "linear-gradient(135deg, #03428e 0%, #0767db 100%)",
              borderRadius: 12,
              padding: "28px 32px",
              textAlign: "center",
              marginBottom: 24,
              color: "#fff",
            }}
          >
            <h3
              style={{
                fontSize: "1.45rem",
                fontWeight: 800,
                color: "#fff",
                marginBottom: 10,
              }}
            >
              Solicite una visita técnica gratuita para su oficina
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.85)",
                marginBottom: 20,
                maxWidth: 460,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Reciba una propuesta técnico-económica personalizada en menos de
              24 horas.
            </p>
            <div
              className="no-print"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <a
                href="mailto:info@dinamica.pe?subject=Solicitud%20de%20cotizaci%C3%B3n%20-%20Brochure%20Din%C3%A1mica"
                className="brochure-cta cta-white"
              >
                {icons.mail}
                info@dinamica.pe
              </a>
              <a
                href="https://wa.me/51981561681?text=Hola%2C%20vi%20su%20brochure%20corporativo%20de%20Din%C3%A1mica%20y%20me%20interesa%20cotizar%20sus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
                className="brochure-cta cta-whatsapp"
              >
                WhatsApp: +51 981 561 681
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div
            className="last-page-contacts"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 18,
              marginBottom: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div style={{ color: "var(--brochure-primary)", marginTop: 2 }}>
                {icons.phone}
              </div>
              <div>
                <p className="brochure-caption" style={{ marginBottom: 2 }}>
                  Teléfono / WhatsApp
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--brochure-black)",
                    margin: 0,
                  }}
                >
                  +51 981 561 681
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div style={{ color: "var(--brochure-primary)", marginTop: 2 }}>
                {icons.mail}
              </div>
              <div>
                <p className="brochure-caption" style={{ marginBottom: 2 }}>
                  Correo Corporativo
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--brochure-black)",
                    margin: 0,
                  }}
                >
                  info@dinamica.pe
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div style={{ color: "var(--brochure-primary)", marginTop: 2 }}>
                {icons.globe}
              </div>
              <div>
                <p className="brochure-caption" style={{ marginBottom: 2 }}>
                  Sitio Web
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--brochure-black)",
                    margin: 0,
                  }}
                >
                  www.dinamica.pe
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div style={{ color: "var(--brochure-primary)", marginTop: 2 }}>
                {icons.pin}
              </div>
              <div>
                <p className="brochure-caption" style={{ marginBottom: 2 }}>
                  Oficina Principal
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "var(--brochure-black)",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  Calle Los Antares 320, Oficina 602, Torre B, Urb. La Arbolada,
                  Santiago de Surco, Lima
                </p>
              </div>
            </div>
          </div>

          {/* Footer line */}
          <div
            style={{
              marginTop: "auto",
              paddingTop: 18,
              borderTop: "1px solid var(--brochure-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <img
              src="/brochure/logo-dinamica.png"
              alt="DINAMICA SERVICIO DE LIMPIEZA SAC"
              style={{ height: 26, width: "auto" }}
            />
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--brochure-gray-light)",
                margin: 0,
              }}
            >
              © {new Date().getFullYear()} DINAMICA SERVICIO DE LIMPIEZA SAC ·
              RUC 20612233161
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
