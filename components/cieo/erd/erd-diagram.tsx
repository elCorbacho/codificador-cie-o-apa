export function ErdDiagram() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <p
          className="font-code uppercase"
          style={{
            fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)",
            fontSize: "10.5px",
            letterSpacing: ".14em",
            color: "var(--gris-m)",
            marginBottom: ".4rem",
          }}
        >
          Modelo de datos
        </p>

        <h2
          className="font-heading mb-3"
          style={{
            fontFamily: "var(--font-heading, 'DM Serif Display', serif)",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            lineHeight: 1.15,
            color: "var(--azul)",
          }}
        >
          Entidad–Relación
        </h2>

        <p
          style={{
            color: "var(--gris-m)",
            fontSize: "14.5px",
            maxWidth: "600px",
            marginBottom: "2rem",
          }}
        >
          Estructura normalizada del sistema CIE-O-3. Las tablas catálogo son de solo lectura; las tablas pivote implementan la lógica de relaciones.
        </p>

        <div className="overflow-x-auto">
          <div
            className="grid gap-5 min-w-[900px]"
            style={{
              gridTemplateColumns: "repeat(4, minmax(200px, 1fr))",
              position: "relative",
              padding: "20px",
            }}
          >
            {/* Column 1: Grupos */}
            <div className="flex flex-col gap-5">
              <div
                className="inline-block rounded-[10px] overflow-hidden text-sm"
                style={{
                  border: "1.5px solid var(--linea)",
                  boxShadow: "0 2px 8px rgba(0,0,0,.05)",
                  minWidth: "200px",
                }}
              >
                <div
                  className="px-4 py-2.5 font-semibold text-white"
                  style={{ background: "var(--teal)" }}
                >
                  GRUPO_ORGANICO
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#FFF3CD", color: "#856404", fontSize: "10px" }}
                  >
                    PK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    id_grupo
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    int
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    nombre
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    varchar
                  </span>
                </div>
              </div>

              <div
                className="text-center py-1"
                style={{ fontSize: "10px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}
              >
                1 ──── N ↓
              </div>

              <div
                className="inline-block rounded-[10px] overflow-hidden text-sm"
                style={{
                  border: "1.5px solid var(--linea)",
                  boxShadow: "0 2px 8px rgba(0,0,0,.05)",
                  minWidth: "200px",
                }}
              >
                <div
                  className="px-4 py-2.5 font-semibold text-white"
                  style={{ background: "var(--lila)" }}
                >
                  GRUPO_HISTOLOGICO
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#FFF3CD", color: "#856404", fontSize: "10px" }}
                  >
                    PK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    id_grupo
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    int
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    nombre
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    varchar
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    tipo_grado
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    enum
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: Catálogos principales */}
            <div className="flex flex-col gap-5">
              <div
                className="inline-block rounded-[10px] overflow-hidden text-sm"
                style={{
                  border: "1.5px solid var(--linea)",
                  boxShadow: "0 2px 8px rgba(0,0,0,.05)",
                  minWidth: "200px",
                }}
              >
                <div
                  className="px-4 py-2.5 font-semibold text-white"
                  style={{ background: "var(--azul)" }}
                >
                  TOPOGRAFIA
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#FFF3CD", color: "#856404", fontSize: "10px" }}
                  >
                    PK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    cod_topografia
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    char(6)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#D1ECF1", color: "#0C5460", fontSize: "10px" }}
                  >
                    FK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    id_grupo_organico
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    int
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    descripcion
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    varchar
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    notas_reglas
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    text
                  </span>
                </div>
              </div>

              <div
                className="text-center py-1"
                style={{ fontSize: "10px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}
              >
                1 ──── N ↓
              </div>

              <div
                className="inline-block rounded-[10px] overflow-hidden text-sm"
                style={{
                  border: "1.5px solid var(--linea)",
                  boxShadow: "0 2px 8px rgba(0,0,0,.05)",
                  minWidth: "200px",
                }}
              >
                <div
                  className="px-4 py-2.5 font-semibold text-white"
                  style={{ background: "var(--lila)" }}
                >
                  MORFOLOGIA
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#FFF3CD", color: "#856404", fontSize: "10px" }}
                  >
                    PK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    cod_morfologia
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    char(4)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#D1ECF1", color: "#0C5460", fontSize: "10px" }}
                  >
                    FK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    id_grupo_histologico
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    int
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    descripcion
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    varchar
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    topo_restriccion_pdf
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    varchar
                  </span>
                </div>
              </div>
            </div>

            {/* Column 3: Dígitos y restricciones */}
            <div className="flex flex-col gap-5">
              <div
                className="inline-block rounded-[10px] overflow-hidden text-sm"
                style={{
                  border: "1.5px solid var(--linea)",
                  boxShadow: "0 2px 8px rgba(0,0,0,.05)",
                  minWidth: "200px",
                }}
              >
                <div
                  className="px-4 py-2.5 font-semibold text-white"
                  style={{ background: "var(--coral)" }}
                >
                  COMPORTAMIENTO
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#FFF3CD", color: "#856404", fontSize: "10px" }}
                  >
                    PK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    cod_comportamiento
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    char(1)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    descripcion
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    varchar
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    uso_registro_cancer
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    bool
                  </span>
                </div>
              </div>

              <div
                className="text-center py-1"
                style={{ fontSize: "10px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}
              >
                M ─── N (pivot)
              </div>

              <div
                className="inline-block rounded-[10px] overflow-hidden text-sm"
                style={{
                  border: "1.5px solid var(--linea)",
                  boxShadow: "0 2px 8px rgba(0,0,0,.05)",
                  minWidth: "200px",
                }}
              >
                <div
                  className="px-4 py-2.5 font-semibold text-white"
                  style={{ background: "var(--ambar)" }}
                >
                  GRADO
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#FFF3CD", color: "#856404", fontSize: "10px" }}
                  >
                    PK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    cod_grado
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    char(1)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    descripcion
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    varchar
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    tipo
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    enum
                  </span>
                </div>
              </div>

              <div
                className="text-center py-1"
                style={{ fontSize: "10px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}
              >
                M ─── N (pivot)
              </div>

              <div
                className="inline-block rounded-[10px] overflow-hidden text-sm"
                style={{
                  border: "1.5px solid var(--linea)",
                  boxShadow: "0 2px 8px rgba(0,0,0,.05)",
                  minWidth: "200px",
                }}
              >
                <div
                  className="px-4 py-2.5 font-semibold text-white"
                  style={{ background: "var(--coral)" }}
                >
                  RESTRICCION_TOPO_MORFO
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#FFF3CD", color: "#856404", fontSize: "10px" }}
                  >
                    PK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    id_restriccion
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    int
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#D1ECF1", color: "#0C5460", fontSize: "10px" }}
                  >
                    FK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    cod_topografia
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    char(6)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#D1ECF1", color: "#0C5460", fontSize: "10px" }}
                  >
                    FK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    cod_morfologia
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    char(4)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    tipo_restriccion
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    enum
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    descripcion_regla
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    text
                  </span>
                </div>
              </div>
            </div>

            {/* Column 4: Tablas pivote + operacional */}
            <div className="flex flex-col gap-5">
              <div
                className="inline-block rounded-[10px] overflow-hidden text-sm"
                style={{
                  border: "1.5px solid var(--linea)",
                  boxShadow: "0 2px 8px rgba(0,0,0,.05)",
                  minWidth: "200px",
                }}
              >
                <div
                  className="px-4 py-2.5 font-semibold text-white"
                  style={{ background: "#3C3489" }}
                >
                  MORFO_COMPORTAMIENTO
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#D1ECF1", color: "#0C5460", fontSize: "10px" }}
                  >
                    FK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    cod_morfologia
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    char(4)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#D1ECF1", color: "#0C5460", fontSize: "10px" }}
                  >
                    FK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    cod_comportamiento
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    char(1)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    es_habitual_pdf
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    bool
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    es_defecto
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    bool
                  </span>
                </div>
              </div>

              <div
                className="inline-block rounded-[10px] overflow-hidden text-sm"
                style={{
                  border: "1.5px solid var(--linea)",
                  boxShadow: "0 2px 8px rgba(0,0,0,.05)",
                  minWidth: "200px",
                }}
              >
                <div
                  className="px-4 py-2.5 font-semibold text-white"
                  style={{ background: "#712B13" }}
                >
                  MORFO_GRADO
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#D1ECF1", color: "#0C5460", fontSize: "10px" }}
                  >
                    FK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    cod_morfologia
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    char(4)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#D1ECF1", color: "#0C5460", fontSize: "10px" }}
                  >
                    FK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    cod_grado
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    char(1)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    es_defecto
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    bool
                  </span>
                </div>
              </div>

              <div
                className="inline-block rounded-[10px] overflow-hidden text-sm"
                style={{
                  border: "1.5px solid var(--linea)",
                  boxShadow: "0 2px 8px rgba(0,0,0,.05)",
                  minWidth: "200px",
                }}
              >
                <div
                  className="px-4 py-2.5 font-semibold text-white"
                  style={{ background: "#2E4057" }}
                >
                  CODIGO_GENERADO
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#FFF3CD", color: "#856404", fontSize: "10px" }}
                  >
                    PK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    id_codigo
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    int
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#D1ECF1", color: "#0C5460", fontSize: "10px" }}
                  >
                    FK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    cod_topografia
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    char(6)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#D1ECF1", color: "#0C5460", fontSize: "10px" }}
                  >
                    FK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    cod_morfologia
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    char(4)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#D1ECF1", color: "#0C5460", fontSize: "10px" }}
                  >
                    FK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    cod_comportamiento
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    char(1)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span
                    className="px-1.5 py-0.5 rounded text-xs font-semibold"
                    style={{ background: "#D1ECF1", color: "#0C5460", fontSize: "10px" }}
                  >
                    FK
                  </span>
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    cod_grado
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    char(1)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    codigo_topo_final
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    varchar
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    codigo_morfo_final
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    varchar
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-linea bg-blanco hover:bg-gris">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    patologo_anuló
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--gris-m)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    bool
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div
            className="mt-4 pt-4 flex flex-wrap gap-4 text-xs"
            style={{ borderTop: "1px solid var(--linea)", fontSize: "12px", color: "var(--gris-m)" }}
          >
            <div>
              <strong style={{ color: "var(--azul)" }}>Regla D:</strong> Linfomas ganglionares → C77._
            </div>
            <div>
              <strong style={{ color: "var(--coral)" }}>Regla E:</strong> Leucemias → C42.1 siempre
            </div>
            <div>
              <strong style={{ color: "var(--teal)" }}>Regla F:</strong> Matriz de comportamiento; el patólogo puede anular
            </div>
            <div>
              <strong style={{ color: "var(--ambar)" }}>Regla H:</strong> Restricciones topo orientativas (no obligatorias)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
