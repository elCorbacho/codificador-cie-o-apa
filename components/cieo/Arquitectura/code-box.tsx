export function CodeBox() {
  return (
    <div
      className="rounded-[14px] p-8 text-white"
      style={{
        background: "var(--color-ink)",
        fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)",
          fontSize: "11px",
          letterSpacing: ".12em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,.4)",
          marginBottom: "1.5rem",
        }}
      >
        Estructura del código completo
      </p>

      <div className="flex flex-wrap gap-1 items-stretch">
        {/* Topography: C prefix */}
        <div
          className="flex-1 min-w-[90px] rounded-[10px] p-4 text-center"
          style={{ background: "var(--color-primary)", border: "1px solid var(--color-primary-active)" }}
        >
          <span className="text-[2rem] font-semibold leading-tight block">C</span>
          <span
            style={{ fontSize: "10px", letterSpacing: ".06em", opacity: 0.75, display: "block", lineHeight: 1.3 }}
          >
            Prefijo
            <br />
            topografía
          </span>
        </div>

        {/* Topography: 2 digits */}
        <div
          className="flex-1 min-w-[90px] rounded-[10px] p-4 text-center"
          style={{ background: "var(--color-primary)", border: "1px solid var(--color-primary-active)" }}
        >
          <span className="text-[2rem] font-semibold leading-tight block">XX</span>
          <span
            style={{ fontSize: "10px", letterSpacing: ".06em", opacity: 0.75, display: "block", lineHeight: 1.3 }}
          >
            Localización
            <br />
            (2 dígitos)
          </span>
        </div>

        {/* Separator */}
        <span className="flex items-center text-white/30 text-[1.5rem] px-1 self-center">.</span>

        {/* Topography: sublocation */}
        <div
          className="flex-1 min-w-[90px] rounded-[10px] p-4 text-center"
          style={{ background: "var(--color-primary)", border: "1px solid var(--color-primary-active)" }}
        >
          <span className="text-[2rem] font-semibold leading-tight block">X</span>
          <span
            style={{ fontSize: "10px", letterSpacing: ".06em", opacity: 0.75, display: "block", lineHeight: 1.3 }}
          >
            Sublocalización
            <br />
            (decimal)
          </span>
        </div>

        {/* Plus separator */}
        <span
          className="flex items-center text-white/20 text-[1.2rem] px-2 self-center"
          style={{ margin: "0 10px" }}
        >
          +
        </span>

        {/* Histology: 4 digits */}
        <div
          className="flex-1 min-w-[90px] rounded-[10px] p-4 text-center"
          style={{ background: "var(--color-secondary)", border: "1px solid var(--color-secondary)" }}
        >
          <span className="text-[2rem] font-semibold leading-tight block">XXXX</span>
          <span
            style={{ fontSize: "10px", letterSpacing: ".06em", opacity: 0.75, display: "block", lineHeight: 1.3 }}
          >
            Tipo histológico
            <br />
            (4 dígitos)
          </span>
        </div>

        {/* Slash separator */}
        <span className="flex items-center text-white/30 text-[1.5rem] px-1 self-center">/</span>

        {/* Behavior */}
        <div
          className="flex-1 min-w-[90px] rounded-[10px] p-4 text-center"
          style={{ background: "var(--color-error)", border: "1px solid var(--color-error-hover)" }}
        >
          <span className="text-[2rem] font-semibold leading-tight block">X</span>
          <span
            style={{ fontSize: "10px", letterSpacing: ".06em", opacity: 0.75, display: "block", lineHeight: 1.3 }}
          >
            Comporta-
            <br />
            miento
          </span>
        </div>

        {/* Grade */}
        <div
          className="flex-1 min-w-[90px] rounded-[10px] p-4 text-center"
          style={{ background: "var(--color-ink)", border: "1px solid var(--color-ink)" }}
        >
          <span className="text-[2rem] font-semibold leading-tight block">X</span>
          <span
            style={{ fontSize: "10px", letterSpacing: ".06em", opacity: 0.75, display: "block", lineHeight: 1.3 }}
          >
            Grado /
            <br />
            Linaje
          </span>
        </div>
      </div>

      {/* Example */}
      <div
        className="mt-6 pt-6"
        style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)",
            fontSize: "11px",
            color: "rgba(255,255,255,.4)",
            letterSpacing: ".1em",
            textTransform: "uppercase",
            marginBottom: ".75rem",
          }}
        >
          Ejemplo — Carcinoma escamoso pobremente diferenciado, lóbulo superior del pulmón
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <div className="text-[1.6rem] font-semibold" style={{ color: "var(--color-primary)" }}>
              C34.1
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,.5)",
                fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              }}
            >
              Lóbulo superior del pulmón
            </div>
          </div>
          <span style={{ color: "rgba(255,255,255,.2)", fontSize: "1.5rem" }}>+</span>
          <div>
            <div className="text-[1.6rem] font-semibold" style={{ color: "var(--color-secondary)" }}>
              8070/<span style={{ color: "var(--color-error)" }}>3</span>
              <span style={{ color: "var(--color-primary-disabled)" }}>3</span>
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,.5)",
                fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              }}
            >
              Carcinoide escamoso / maligno / pobre dif.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
