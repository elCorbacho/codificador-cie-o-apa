import type { ReactNode } from "react";

interface InfoCardProps {
  dotColor: string;
  title: string;
  children: ReactNode;
  extra?: ReactNode;
}

function InfoCard({ dotColor, title, children, extra }: InfoCardProps) {
  return (
    <div
      className="rounded-[14px] border border-hairline p-7 bg-canvas"
      style={{ background: "var(--color-canvas)", border: "1px solid var(--color-hairline)" }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          data-testid="topography-dot"
          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
          style={{ background: dotColor }}
        />
        <h3
          className="font-heading"
          style={{
            fontFamily: "var(--font-heading, 'DM Serif Display', serif)",
            fontSize: "1.15rem",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h3>
      </div>
      {children}
      {extra}
    </div>
  );
}

export function InfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {/* Topography card */}
      <InfoCard dotColor="var(--color-primary)" title="Eje 1 — Topografía">
        <p className="text-sm mb-3" style={{ fontSize: "13.5px" }}>
          Indica el <strong>sitio de origen</strong> del tumor. Mismo conjunto C00–C80 que la CIE-10,
          pero para todas las neoplasias (no solo malignas).
        </p>
        <table className="w-full text-sm mb-0" style={{ fontSize: "12.5px" }}>
          <tbody>
            <tr>
              <td className="text-muted" style={{ color: "var(--color-muted)" }}>C</td>
              <td>Prefijo fijo</td>
            </tr>
            <tr>
              <td className="text-muted" style={{ color: "var(--color-muted)" }}>XX</td>
              <td>Localización (órgano)</td>
            </tr>
            <tr>
              <td className="text-muted" style={{ color: "var(--color-muted)" }}>.X</td>
              <td>Sublocalización</td>
            </tr>
            <tr>
              <td className="text-muted" style={{ color: "var(--color-muted)" }}>.8</td>
              <td>Lesión que rebasa límites (Regla C)</td>
            </tr>
            <tr>
              <td className="text-muted" style={{ color: "var(--color-muted)" }}>.9</td>
              <td>SAI (sin otra indicación)</td>
            </tr>
          </tbody>
        </table>
        <div
          className="mt-3 p-2 rounded text-sm"
          style={{ background: "var(--color-primary-disabled)", fontSize: "12px", color: "var(--color-primary)" }}
        >
          <strong>Códigos especiales:</strong>
          <br />
          C42.1 = médula ósea (leucemias, Regla E)
          <br />
          C77._ = ganglios linfáticos (linfomas, Regla D)
        </div>
      </InfoCard>

      {/* Histology card */}
      <InfoCard dotColor="var(--color-secondary)" title="Tipo histológico (4 dígitos)">
        <p style={{ fontSize: "13px", color: "var(--color-muted)", marginBottom: "0.75rem" }}>
          El tipo celular que se transformó en neoplásico. Rangos M8000–M9989.
        </p>
        <table className="w-full text-sm mb-0" style={{ fontSize: "12.5px" }}>
          <tbody>
            <tr>
              <td className="text-muted" style={{ color: "var(--color-muted)" }}>8000–8004</td>
              <td>Neoplasias SAI</td>
            </tr>
            <tr>
              <td className="text-muted" style={{ color: "var(--color-muted)" }}>8010–8084</td>
              <td>Carcinomas epiteliales</td>
            </tr>
            <tr>
              <td className="text-muted" style={{ color: "var(--color-muted)" }}>8140–8389</td>
              <td>Adenocarcinomas</td>
            </tr>
            <tr>
              <td className="text-muted" style={{ color: "var(--color-muted)" }}>8720–8790</td>
              <td>Melanocíticos</td>
            </tr>
            <tr>
              <td className="text-muted" style={{ color: "var(--color-muted)" }}>8800–8990</td>
              <td>Tejidos blandos</td>
            </tr>
            <tr>
              <td className="text-muted" style={{ color: "var(--color-muted)" }}>9590–9699</td>
              <td>Linfomas</td>
            </tr>
            <tr>
              <td className="text-muted" style={{ color: "var(--color-muted)" }}>9800–9931</td>
              <td>Leucemias</td>
            </tr>
          </tbody>
        </table>
      </InfoCard>

      {/* Behavior card */}
      <InfoCard dotColor="var(--color-error)" title="Comportamiento (/X)">
        <table className="w-full text-sm" style={{ fontSize: "12.5px" }}>
          <thead>
            <tr>
              <th className="text-left font-medium" style={{ padding: "8px 12px", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--color-muted)", fontSize: "11px" }}>Dígito</th>
              <th className="text-left font-medium" style={{ padding: "8px 12px" }}>Significado</th>
              <th className="text-left font-medium" style={{ padding: "8px 12px" }}>Registro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span
                  className="font-code font-semibold inline-block px-2 py-0.5 rounded"
                  style={{
                    fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)",
                    fontSize: "13px",
                    background: "var(--color-surface-soft)",
                    color: "var(--color-secondary)",
                  }}
                >
                  /0
                </span>
              </td>
              <td style={{ padding: "11px 12px" }}>Benigno</td>
              <td style={{ padding: "11px 12px" }}>—</td>
            </tr>
            <tr>
              <td>
                <span
                  className="font-code font-semibold inline-block px-2 py-0.5 rounded"
                  style={{
                    fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)",
                    fontSize: "13px",
                    background: "var(--color-surface-soft)",
                    color: "var(--color-ambar)",
                  }}
                >
                  /1
                </span>
              </td>
              <td style={{ padding: "11px 12px" }}>Incierto / borderline</td>
              <td style={{ padding: "11px 12px" }}>—</td>
            </tr>
            <tr>
              <td>
                <span
                  className="font-code font-semibold inline-block px-2 py-0.5 rounded"
                  style={{
                    fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)",
                    fontSize: "13px",
                    background: "var(--color-primary-disabled)",
                    color: "var(--color-primary)",
                  }}
                >
                  /2
                </span>
              </td>
              <td style={{ padding: "11px 12px" }}>In situ / no invasor</td>
              <td style={{ padding: "11px 12px" }}>✓</td>
            </tr>
            <tr>
              <td>
                <span
                  className="font-code font-semibold inline-block px-2 py-0.5 rounded"
                  style={{
                    fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)",
                    fontSize: "13px",
                    background: "var(--color-error-hover)",
                    color: "var(--color-error)",
                  }}
                >
                  /3
                </span>
              </td>
              <td style={{ padding: "11px 12px" }}>Maligno primario</td>
              <td style={{ padding: "11px 12px" }}>✓</td>
            </tr>
            <tr>
              <td>
                <span
                  className="font-code font-semibold inline-block px-2 py-0.5 rounded"
                  style={{
                    fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)",
                    fontSize: "13px",
                    background: "var(--color-surface-soft)",
                    color: "var(--color-muted)",
                  }}
                >
                  /6
                </span>
              </td>
              <td style={{ padding: "11px 12px" }}>Maligno, metástasis</td>
              <td style={{ padding: "11px 12px" }}>Solo AP</td>
            </tr>
            <tr>
              <td>
                <span
                  className="font-code font-semibold inline-block px-2 py-0.5 rounded"
                  style={{
                    fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)",
                    fontSize: "13px",
                    background: "var(--color-surface-soft)",
                    color: "var(--color-muted)",
                  }}
                >
                  /9
                </span>
              </td>
              <td style={{ padding: "11px 12px" }}>Primario/metástasis incierto</td>
              <td style={{ padding: "11px 12px" }}>Solo AP</td>
            </tr>
          </tbody>
        </table>
      </InfoCard>

      {/* Grade card */}
      <InfoCard dotColor="var(--color-ambar)" title="Grado / Linaje (6.° dígito)">
        <p style={{ fontSize: "12px", color: "var(--color-muted)", marginBottom: "0.75rem" }}>
          Tumores sólidos: diferenciación. Hematología: linaje celular.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div
            className="rounded-[8px] p-[10px] text-sm"
            style={{ background: "var(--color-surface-soft)", fontSize: "12px" }}
          >
            <strong style={{ color: "var(--color-ambar)" }}>Diferenciación</strong>
            <div
              className="mt-1 font-code"
              style={{
                lineHeight: 1.7,
                fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)",
                fontSize: "11px",
              }}
            >
              1 → bien dif.
              <br />
              2 → mod. dif.
              <br />
              3 → pobre dif.
              <br />
              4 → indiferenciado
              <br />
              9 → no determinado
            </div>
          </div>
          <div
            className="rounded-[8px] p-[10px] text-sm"
            style={{ background: "var(--color-surface-soft)", fontSize: "12px" }}
          >
            <strong style={{ color: "var(--color-lila)" }}>Linaje hematológico</strong>
            <div
              className="mt-1 font-code"
              style={{
                lineHeight: 1.7,
                fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)",
                fontSize: "11px",
              }}
            >
              5 → célula T
              <br />
              6 → célula B
              <br />
              7 → célula nula
              <br />
              8 → célula NK
              <br />
              9 → no det.
            </div>
          </div>
        </div>
        <div
          className="mt-2 p-2 rounded text-sm"
          style={{ background: "var(--color-surface-soft)", fontSize: "11.5px", color: "var(--color-muted)" }}
        >
          <strong>Regla G:</strong> Si el diagnóstico indica dos grados, usar el <strong>mayor</strong>.
          Los dígitos 5–8 prevalecen sobre 1–4.
        </div>
      </InfoCard>
    </div>
  );
}
