export function CasosCards() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <p className="eyebrow font-code uppercase text-muted mb-[0.4rem]">
          Excepciones normativas
        </p>

        <h2 className="section-title font-heading mb-3 text-primary">
          Casos especiales
        </h2>

        <p
          className="text-muted"
          style={{
            fontSize: "14.5px",
            maxWidth: "600px",
            marginBottom: "2rem",
          }}
        >
          El PDF establece reglas específicas para situaciones que no siguen el patrón general.
        </p>

        <div className="grid grid-cols-1 gap-5">
          {/* SNC Tumors Table */}
          <div
            className="rounded-[14px] border border-hairline p-7 bg-canvas"
          >
            <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-lila" />

              <h3
                className="font-heading"
                style={{
                  fontSize: "1.15rem",
                  lineHeight: 1.2,
                }}
              >
                Tumores del SNC — Grados OMS vs CIE-O (§4.6, Tabla 27)
              </h3>
            </div>
            <p className="text-sm mb-4 text-muted" style={{ fontSize: "13.5px" }}>
              Los grados OMS I–IV para tumores del SNC <strong>no son equivalentes</strong> al sexto dígito de CIE-O.
              El grado OMS estima pronóstico; el sexto dígito de CIE-O describe diferenciación.
              Si no hay descripción verbal del grado → usar 9.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ fontSize: "13px", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th className="text-left py-2 px-3 font-medium uppercase tracking-[.08em] text-muted text-[11px] border-b-2 border-hairline bg-surface-soft">
                      Tipo tumoral
                    </th>
                    <th className="text-left py-2 px-3 font-medium uppercase tracking-[.08em] text-muted text-[11px] border-b-2 border-hairline bg-surface-soft">
                      Grado OMS
                    </th>
                    <th className="text-left py-2 px-3 font-medium uppercase tracking-[.08em] text-muted text-[11px] border-b-2 border-hairline bg-surface-soft">
                      Código CIE-O
                    </th>
                    <th className="text-left py-2 px-3 font-medium uppercase tracking-[.08em] text-muted text-[11px] border-b-2 border-hairline bg-surface-soft">
                      Comportamiento
                    </th>
                    <th className="text-left py-2 px-3 font-medium uppercase tracking-[.08em] text-muted text-[11px] border-b-2 border-hairline bg-surface-soft">
                      Nota
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tumor: "Astrocitoma pilocítico", grado: "I", code: "9421", comp: "/1", nota: "Comportamiento benigno/incierto pese a ser infiltrante", gradeColor: "var(--color-secondary)" },
                    { tumor: "Astrocitoma difuso IDH-mutado", grado: "II", code: "9400", comp: "/3", nota: "Maligno pese a grado bajo", gradeColor: "var(--color-ambar)" },
                    { tumor: "Astrocitoma anaplásico IDH-mutado", grado: "III", code: "9401", comp: "/3", nota: "", gradeColor: "var(--color-error)" },
                    { tumor: "Glioblastoma IDH wild-type", grado: "IV", code: "9440", comp: "/3", nota: "IDH wild-type implica grado IV automáticamente (WHO 2021)", gradeColor: "var(--color-error)" },
                    { tumor: "Meduloblastoma", grado: "IV", code: "9470", comp: "/3", nota: "Siempre /3 aunque histológicamente sea \"diferenciado\"", gradeColor: "var(--color-error)" },
                    { tumor: "Meningioma SAI", grado: "I", code: "9530", comp: "/0", nota: "Comportamiento benigno /0 (OMS grado I)", gradeColor: "var(--color-secondary)" },
                    { tumor: "Meningioma atípico", grado: "II", code: "9539", comp: "/1", nota: "Comportamiento incierto /1 (OMS grado II)", gradeColor: "var(--color-ambar)" },
                    { tumor: "Schwannoma", grado: "I", code: "9560", comp: "/0", nota: "", gradeColor: "var(--color-secondary)" },
                    { tumor: "Ependimoma mixopapilar", grado: "I", code: "9394", comp: "/1", nota: "", gradeColor: "var(--color-secondary)" },
                    { tumor: "Craneofaringioma", grado: "I", code: "9350", comp: "/1", nota: "Benigno histológicamente pero comportamiento incierto por localización", gradeColor: "var(--color-secondary)" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-2.5 px-3 border-b border-hairline">{row.tumor}</td>
                      <td className="py-2.5 px-3 border-b border-hairline">
                        <span style={{ color: row.gradeColor, fontWeight: 600 }}>{row.grado}</span>
                      </td>
                      <td className="py-2.5 px-3 border-b border-hairline font-code" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                        {row.code}
                      </td>
                      <td className="py-2.5 px-3 border-b border-hairline">{row.comp}</td>
                      <td className="py-2.5 px-3 border-b border-hairline text-sm" style={{ fontSize: "12px", color: "var(--color-muted)" }}>
                        {row.nota}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Lab vs Registry + CIN III row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Lab AP vs Registry */}
            <div
              className="rounded-[14px] border p-7 bg-canvas h-full"
              style={{ background: "var(--color-canvas)", border: "1px solid var(--color-hairline)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--color-primary)" }} />
                <h3
                  className="font-heading"
                  style={{
                    fontSize: "1.15rem",
                    lineHeight: 1.2,
                  }}
                >
                  Laboratorio AP vs Registro de cáncer (§4.3.2)
                </h3>
              </div>
              <p className="text-sm mb-3" style={{ fontSize: "13px", color: "var(--color-muted)" }}>
                El PDF distingue dos contextos de uso con reglas diferentes para el comportamiento:
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div
                  className="rounded-[8px] p-3"
                  style={{ background: "var(--color-primary-disabled)", fontSize: "12.5px" }}
                >
                  <strong style={{ color: "var(--color-primary)" }}>Laboratorio AP</strong>
                  <p className="mt-1.5 text-sm" style={{ fontSize: "12px", color: "var(--color-muted)" }}>
                    Rastreo de muestras. Permite /6 (metástasis) y /9 (incierto). Ej: biopsia de ganglio con adenocarcinoma metastásico → C77.0, 8490/6
                  </p>
                </div>
                <div
                  className="rounded-[8px] p-3"
                  style={{ background: "var(--color-surface-soft)", fontSize: "12.5px" }}
                >
                  <strong style={{ color: "var(--color-secondary)" }}>Registro de cáncer</strong>
                  <p className="mt-1.5 text-sm" style={{ fontSize: "12px", color: "var(--color-muted)" }}>
                    Solo registra el tumor primario. Usa únicamente /2 (in situ) y /3 (maligno). El /6 se deduce de la base del diagnóstico.
                  </p>
                </div>
              </div>
              <div
                className="mt-3 p-2 rounded text-sm"
                style={{ background: "var(--color-surface-soft)", fontSize: "12px" }}
              >
                <strong>Ejemplo (Tabla 19 del PDF):</strong>
                <br />
                a. Biopsia ganglio: <code style={{ fontFamily: "var(--font-code, monospace)" }}>C77.0  8490/6</code>
                <br />
                b. ★ Primario gástrico: <code style={{ fontFamily: "var(--font-code, monospace)" }}>C16.1  8490/3</code> ← solo este va al registro
                <br />
                c. Metástasis bronquial: <code style={{ fontFamily: "var(--font-code, monospace)" }}>C34.1  8490/6</code>
              </div>
            </div>

            {/* CIN III / NIC III */}
            <div
              className="rounded-[14px] border p-7 bg-canvas h-full"
              style={{ background: "var(--color-canvas)", border: "1px solid var(--color-hairline)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--color-error)" }} />
                <h3
                  className="font-heading"
                  style={{
                    fontSize: "1.15rem",
                    lineHeight: 1.2,
                  }}
                >
                  NIC III / CIN III y displasias (§4.3.2)
                </h3>
              </div>
              <p className="text-sm mb-3" style={{ fontSize: "13px", color: "var(--color-muted)" }}>
                Uno de los errores más frecuentes en codificación anatomopatológica:
              </p>
              <div
                className="rounded-[8px] p-4 mb-3 text-sm"
                style={{ background: "var(--color-error-hover)", fontSize: "13px" }}
              >
                <strong style={{ color: "var(--color-error)" }}>NIC III / CIN III → comportamiento /2 (in situ)</strong>
                <p className="mt-1.5 text-sm" style={{ fontSize: "12px", marginTop: "6px", color: "color-mix(in oklab, var(--color-error), black 30%)" }}>
                  Se considera equivalente al carcinoma in situ. El PDF indica que el comportamiento correcto es /2, <strong>no /3</strong>.
                </p>
              </div>
              <table className="w-full text-sm" style={{ fontSize: "12.5px" }}>
                <tbody>
                  <tr>
                    <td className="py-1 px-2 font-code" style={{ fontFamily: "var(--font-code, monospace)" }}>8077/2</td>
                    <td>NIC III / CIN III cervical (C53._)</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-2 font-code" style={{ fontFamily: "var(--font-code, monospace)" }}>8077/2</td>
                    <td>NIVA III / VAIN III vaginal (C52._)</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-2 font-code" style={{ fontFamily: "var(--font-code, monospace)" }}>8077/2</td>
                    <td>NIV III / VIN III vulvar (C51._)</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-2 font-code" style={{ fontFamily: "var(--font-code, monospace)" }}>8077/2</td>
                    <td>NIA III / AIN III anal (C21.1)</td>
                  </tr>
                </tbody>
              </table>
              <div
                className="mt-2 p-2 rounded text-sm"
                style={{ background: "var(--color-surface-soft)", fontSize: "12px" }}
              >
                Si el anatomopatólogo considera que la NIC III no es equivalente a carcinoma in situ, puede cambiar a /1 (Regla F).
              </div>
            </div>
          </div>

          {/* Multiple neoplasms */}
          <div
            className="rounded-[14px] border p-7 bg-canvas"
            style={{ background: "var(--color-canvas)", border: "1px solid var(--color-hairline)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--color-ambar)" }} />
              <h3
                className="font-heading"
                style={{
                  fontSize: "1.15rem",
                  lineHeight: 1.2,
                }}
              >
                Neoplasias primarias múltiples (§4.4) — Reglas IARC/IACR 2004
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div
                className="rounded-[8px] p-3 h-full"
                style={{ background: "var(--color-surface-soft)", fontSize: "12.5px" }}
              >
                <strong>Regla 1</strong>
                <p className="mt-1 text-sm" style={{ fontSize: "12px", color: "var(--color-muted)" }}>
                  El reconocimiento de dos o más cánceres primarios no depende del tiempo transcurrido entre diagnósticos.
                </p>
              </div>
              <div
                className="rounded-[8px] p-3 h-full"
                style={{ background: "var(--color-surface-soft)", fontSize: "12.5px" }}
              >
                <strong>Regla 2</strong>
                <p className="mt-1 text-sm" style={{ fontSize: "12px", color: "var(--color-muted)" }}>
                  Un cáncer primario es el que se origina en una localización o tejido primario y no es extensión, recidiva ni metástasis.
                </p>
              </div>
              <div
                className="rounded-[8px] p-3 h-full"
                style={{ background: "var(--color-surface-soft)", fontSize: "12.5px" }}
              >
                <strong style={{ color: "var(--color-ambar)" }}>Excepciones sistémicas</strong>
                <p className="mt-1 text-sm" style={{ fontSize: "12px" }}>
                  Sarcoma de Kaposi (9140) y tumores hematopoyéticos se cuentan <strong>una sola vez</strong> por persona, independientemente de cuántos órganos afecten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
