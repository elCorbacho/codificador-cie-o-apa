export function Header() {
  return (
    <header className="bg-ink text-canvas relative overflow-hidden" style={{ padding: "4.5rem 0 3.5rem" }}>
      {/* Subtle rings (no shadows) */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-80px",
          top: "-120px",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          border: "80px solid rgba(244,244,244,.06)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          left: "35%",
          bottom: "-160px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          border: "70px solid rgba(244,244,244,.04)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <p className="font-code text-white/70" style={{ fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: ".6rem" }}>
          OMS · IARC · Min. Sanidad España 2021
        </p>

        <h1
          className="font-heading"
          style={{
            fontSize: "clamp(2.4rem, 5.2vw, 4.2rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            marginBottom: ".8rem",
          }}
        >
          CIE-<em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>O</em>-3
        </h1>

        <p
          className="text-white/75 font-body"
          style={{
            fontSize: "16px",
            lineHeight: 1.56,
            letterSpacing: "0.016em",
            maxWidth: "540px",
          }}
        >
          Clasificación Internacional de Enfermedades para Oncología — Tercera Edición, Primera Revisión. Sistema de codificación anatomopatológica.
        </p>

        <span
          className="font-code inline-block mt-6 bg-white/10 border border-white/20 text-white/80"
          style={{
            fontSize: "11px",
            padding: "6px 14px",
            borderRadius: "9999px",
          }}
        >
          CIE-O-3.1 · Versión normativa
        </span>
      </div>
    </header>
  );
}
