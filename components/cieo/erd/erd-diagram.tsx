export function ErdDiagram() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <p className="eyebrow font-mono uppercase text-on-surface-variant mb-1">
          Modelo de datos
        </p>

        <h2 id="erd-heading" className="section-title mb-3 font-heading text-on-surface">
          Entidad–Relación
        </h2>

        <p className="section-description mb-8 text-on-surface-variant">
          Estructura normalizada del sistema CIE-O-3. Las tablas catálogo son de solo lectura; las tablas pivote implementan la lógica de relaciones.
        </p>

        <div className="erd-scroll overflow-x-auto" role="region" aria-labelledby="erd-heading">
          <div className="erd-wrap grid min-w-[900px] gap-5">
            {/* Column 1: Grupos */}
            <div className="flex flex-col gap-5">
              <div className="erd-card inline-block overflow-hidden rounded-[10px] border border-hairline text-sm">
                <div
                  className="px-4 py-2.5 font-semibold text-white bg-secondary"
                >
                  GRUPO_ORGANICO
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge erd-badge-pk">
                    PK
                  </span>
                  <span className="erd-field flex-1">
                    id_grupo
                  </span>
                  <span className="erd-type">
                    int
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-field flex-1">
                    nombre
                  </span>
                  <span className="erd-type">
                    varchar
                  </span>
                </div>
              </div>

              <div className="erd-rel py-1 text-center">
                1 ──── N ↓
              </div>

              <div className="erd-card inline-block overflow-hidden rounded-[10px] border border-hairline text-sm">
                <div
                  className="px-4 py-2.5 font-semibold text-white bg-lila"
                >
                  GRUPO_HISTOLOGICO
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge erd-badge-pk">
                    PK
                  </span>
                  <span className="erd-field flex-1">
                    id_grupo
                  </span>
                  <span className="erd-type">
                    int
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-field flex-1">
                    nombre
                  </span>
                  <span className="erd-type">
                    varchar
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-field flex-1">
                    tipo_grado
                  </span>
                  <span className="erd-type">
                    enum
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: Catálogos principales */}
            <div className="flex flex-col gap-5">
              <div className="erd-card erd-card-strong inline-block overflow-hidden rounded-[10px] text-sm">
                <div
                  className="px-4 py-2.5 font-semibold text-white"
                  style={{ background: "var(--color-primary)" }}
                >
                  TOPOGRAFIA
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge" style={{ background: "var(--color-pk-bg)", color: "var(--color-pk-text)" }}>
                    PK
                  </span>
                  <span className="erd-field flex-1">
                    cod_topografia
                  </span>
                  <span className="erd-type">
                    char(6)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge" style={{ background: "var(--color-fk-bg)", color: "var(--color-fk-text)" }}>
                    FK
                  </span>
                  <span className="erd-field flex-1">
                    id_grupo_organico
                  </span>
                  <span className="erd-type">
                    int
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-container-high">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    descripcion
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    varchar
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-container-high">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    notas_reglas
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    text
                  </span>
                </div>
              </div>

              <div className="erd-rel py-1 text-center">
                1 ──── N ↓
              </div>

              <div className="erd-card erd-card-strong inline-block overflow-hidden rounded-[10px] text-sm">
                <div
                  className="px-4 py-2.5 font-semibold text-white"
                  style={{ background: "var(--color-lila)" }}
                >
                  MORFOLOGIA
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge" style={{ background: "var(--color-pk-bg)", color: "var(--color-pk-text)" }}>
                    PK
                  </span>
                  <span className="erd-field flex-1">
                    cod_morfologia
                  </span>
                  <span className="erd-type">
                    char(4)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge" style={{ background: "var(--color-fk-bg)", color: "var(--color-fk-text)" }}>
                    FK
                  </span>
                  <span className="erd-field flex-1">
                    id_grupo_histologico
                  </span>
                  <span className="erd-type">
                    int
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-container-high">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    descripcion
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    varchar
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-container-high">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    topo_restriccion_pdf
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    varchar
                  </span>
                </div>
              </div>
            </div>

            {/* Column 3: Dígitos y restricciones */}
            <div className="flex flex-col gap-5">
              <div className="erd-card erd-card-strong inline-block overflow-hidden rounded-[10px] text-sm">
                <div
                  className="px-4 py-2.5 font-semibold text-white"
                  style={{ background: "var(--color-error)" }}
                >
                  COMPORTAMIENTO
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge" style={{ background: "var(--color-pk-bg)", color: "var(--color-pk-text)" }}>
                    PK
                  </span>
                  <span className="erd-field flex-1">
                    cod_comportamiento
                  </span>
                  <span className="erd-type">
                    char(1)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-container-high">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    descripcion
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    varchar
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-container-high">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    uso_registro_cancer
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    bool
                  </span>
                </div>
              </div>

              <div className="erd-rel py-1 text-center">
                M ─── N (pivot)
              </div>

              <div className="erd-card erd-card-strong inline-block overflow-hidden rounded-[10px] text-sm">
                <div
                  className="px-4 py-2.5 font-semibold text-white"
                  style={{ background: "var(--color-ambar)" }}
                >
                  GRADO
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge" style={{ background: "var(--color-pk-bg)", color: "var(--color-pk-text)" }}>
                    PK
                  </span>
                  <span className="erd-field flex-1">
                    cod_grado
                  </span>
                  <span className="erd-type">
                    char(1)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-container-high">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    descripcion
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    varchar
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-container-high">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    tipo
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    enum
                  </span>
                </div>
              </div>

              <div className="erd-rel py-1 text-center">
                M ─── N (pivot)
              </div>

              <div className="erd-card erd-card-strong inline-block overflow-hidden rounded-[10px] text-sm">
                <div
                  className="px-4 py-2.5 font-semibold text-white"
                  style={{ background: "var(--color-error)" }}
                >
                  RESTRICCION_TOPO_MORFO
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge" style={{ background: "var(--color-pk-bg)", color: "var(--color-pk-text)" }}>
                    PK
                  </span>
                  <span className="erd-field flex-1">
                    id_restriccion
                  </span>
                  <span className="erd-type">
                    int
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge" style={{ background: "var(--color-fk-bg)", color: "var(--color-fk-text)" }}>
                    FK
                  </span>
                  <span className="erd-field flex-1">
                    cod_topografia
                  </span>
                  <span className="erd-type">
                    char(6)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge" style={{ background: "var(--color-fk-bg)", color: "var(--color-fk-text)" }}>
                    FK
                  </span>
                  <span className="erd-field flex-1">
                    cod_morfologia
                  </span>
                  <span className="erd-type">
                    char(4)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-container-high">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    tipo_restriccion
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    enum
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-container-high">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    descripcion_regla
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    text
                  </span>
                </div>
              </div>
            </div>

            {/* Column 4: Tablas pivote + operacional */}
            <div className="flex flex-col gap-5">
              <div className="erd-card erd-card-strong inline-block overflow-hidden rounded-[10px] text-sm">
                <div
                  className="px-4 py-2.5 font-semibold text-white"
                  style={{ background: "var(--color-accent)" }}
                >
                  MORFO_COMPORTAMIENTO
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge" style={{ background: "var(--color-fk-bg)", color: "var(--color-fk-text)" }}>
                    FK
                  </span>
                  <span className="erd-field flex-1">
                    cod_morfologia
                  </span>
                  <span className="erd-type">
                    char(4)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge" style={{ background: "var(--color-fk-bg)", color: "var(--color-fk-text)" }}>
                    FK
                  </span>
                  <span className="erd-field flex-1">
                    cod_comportamiento
                  </span>
                  <span className="erd-type">
                    char(1)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-container-high">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    es_habitual_pdf
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    bool
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-container-high">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    es_defecto
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    bool
                  </span>
                </div>
              </div>

              <div className="erd-card erd-card-strong inline-block overflow-hidden rounded-[10px] text-sm">
                <div
                  className="px-4 py-2.5 font-semibold text-white"
                  style={{ background: "var(--color-ambar)" }}
                >
                  MORFO_GRADO
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge" style={{ background: "var(--color-fk-bg)", color: "var(--color-fk-text)" }}>
                    FK
                  </span>
                  <span className="erd-field flex-1">
                    cod_morfologia
                  </span>
                  <span className="erd-type">
                    char(4)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge" style={{ background: "var(--color-fk-bg)", color: "var(--color-fk-text)" }}>
                    FK
                  </span>
                  <span className="erd-field flex-1">
                    cod_grado
                  </span>
                  <span className="erd-type">
                    char(1)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-container-high">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    es_defecto
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    bool
                  </span>
                </div>
              </div>

              <div
                className="inline-block rounded-[10px] overflow-hidden text-sm"
                style={{
                  border: "1.5px solid var(--color-hairline)",
                  boxShadow: "0 2px 8px rgba(0,0,0,.05)",
                  minWidth: "200px",
                }}
              >
                <div
                  className="px-4 py-2.5 font-semibold text-white"
                  style={{ background: "var(--color-body)" }}
                >
                  CODIGO_GENERADO
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge" style={{ background: "var(--color-pk-bg)", color: "var(--color-pk-text)" }}>
                    PK
                  </span>
                  <span className="erd-field flex-1">
                    id_codigo
                  </span>
                  <span className="erd-type">
                    int
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge" style={{ background: "var(--color-fk-bg)", color: "var(--color-fk-text)" }}>
                    FK
                  </span>
                  <span className="erd-field flex-1">
                    cod_topografia
                  </span>
                  <span className="erd-type">
                    char(6)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge" style={{ background: "var(--color-fk-bg)", color: "var(--color-fk-text)" }}>
                    FK
                  </span>
                  <span className="erd-field flex-1">
                    cod_morfologia
                  </span>
                  <span className="erd-type">
                    char(4)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge" style={{ background: "var(--color-fk-bg)", color: "var(--color-fk-text)" }}>
                    FK
                  </span>
                  <span className="erd-field flex-1">
                    cod_comportamiento
                  </span>
                  <span className="erd-type">
                    char(1)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-soft">
                  <span className="erd-badge" style={{ background: "var(--color-fk-bg)", color: "var(--color-fk-text)" }}>
                    FK
                  </span>
                  <span className="erd-field flex-1">
                    cod_grado
                  </span>
                  <span className="erd-type">
                    char(1)
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-container-high">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    codigo_topo_final
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    varchar
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-container-high">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    codigo_morfo_final
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    varchar
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border-t border-hairline bg-canvas hover:bg-surface-container-high">
                  <span className="flex-1" style={{ fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)", fontSize: "11.5px" }}>
                    patologo_anuló
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-muted)", fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)" }}>
                    bool
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="erd-legend mt-4 flex flex-wrap gap-4 pt-4 text-xs">
            <div>
              <strong style={{ color: "var(--color-primary)" }}>Regla D:</strong> Linfomas ganglionares → C77._
            </div>
            <div>
              <strong style={{ color: "var(--color-error)" }}>Regla E:</strong> Leucemias → C42.1 siempre
            </div>
            <div>
              <strong style={{ color: "var(--color-secondary)" }}>Regla F:</strong> Matriz de comportamiento; el patólogo puede anular
            </div>
            <div>
              <strong style={{ color: "var(--color-ambar)" }}>Regla H:</strong> Restricciones topo orientativas (no obligatorias)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
