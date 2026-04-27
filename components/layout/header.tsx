export function Header() {
  return (
    <header className="bg-azul relative overflow-hidden" style={{ padding: "2.5rem 0 2rem" }}>
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
          className="font-code"
          style={{
            fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)",
            fontSize: "11px",
            letterSpacing: ".14em",
            color: "rgba(255,255,255,.5)",
            textTransform: "uppercase",
            marginBottom: ".4rem",
          }}
        >
          OMS · IARC · Min. Sanidad España 2021
        </p>

        <h1
          className="font-heading"
          style={{
            fontFamily: "var(--font-heading, 'DM Serif Display', serif)",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: ".5rem",
          }}
        >
          CIE-<em style={{ fontStyle: "italic", color: "#7EC8E3" }}>O</em>-3
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,.65)",
            fontSize: "14px",
            maxWidth: "540px",
          }}
        >
          Clasificación Internacional de Enfermedades para Oncología — Tercera Edición, Primera Revisión. Sistema de codificación anatomopatológica.
        </p>

        <span
          className="font-code inline-block mt-4"
          style={{
            fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)",
            fontSize: "11px",
            background: "rgba(255,255,255,.1)",
            border: "1px solid rgba(255,255,255,.2)",
            color: "rgba(255,255,255,.8)",
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
