export function Header() {
  return (
    <header className="bg-ink relative overflow-hidden" style={{ padding: "2.5rem 0 2rem" }}>
      {/* Decorative circles */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-60px",
          top: "-60px",
          width: "340px",
          height: "340px",
          borderRadius: "50%",
          border: "60px solid rgba(255,255,255,.05)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          left: "40%",
          bottom: "-80px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          border: "40px solid rgba(255,255,255,.04)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <p
          className="font-code text-muted"
          style={{
            fontSize: "11px",
            letterSpacing: ".14em",
            textTransform: "uppercase",
            marginBottom: ".4rem",
          }}
        >
          OMS · IARC · Min. Sanidad España 2021
        </p>

        <h1
          className="font-heading text-canvas"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            lineHeight: 1.1,
            marginBottom: ".5rem",
          }}
        >
          CIE-<em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>O</em>-3
        </h1>

        <p
          className="text-muted"
          style={{
            fontSize: "14px",
            maxWidth: "540px",
          }}
        >
          Clasificación Internacional de Enfermedades para Oncología — Tercera Edición, Primera Revisión. Sistema de codificación anatomopatológica.
        </p>

        <span
          className="font-code inline-block mt-4 bg-white/10 border border-white/20 text-white/80"
          style={{
            fontSize: "11px",
            padding: "4px 12px",
            borderRadius: "100px",
          }}
        >
          CIE-O-3.1 · Versión normativa
        </span>
      </div>
    </header>
  );
}
