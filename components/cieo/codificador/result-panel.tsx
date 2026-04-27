"use client";

import { RotateCcw } from "lucide-react";
import { useWizardStore } from "@/store/use-wizard-store";

export function ResultPanel() {
  const {
    topo, topoDesc, hist, histDesc,
    comp, compDesc, grado, gradoDesc,
    completeDesc, resetAll, tipoGrado,
  } = useWizardStore();

  const compNames: Record<string, string> = {
    "0": "Benigno",
    "1": "Incierto",
    "2": "In situ",
    "3": "Maligno primario",
    "6": "Metástasis",
    "9": "Incierto P/M",
  };

  const gNames: Record<string, string> = {
    "1": "G1",
    "2": "G2",
    "3": "G3",
    "4": "G4",
    "5": "Cél. T",
    "6": "Cél. B",
    "7": "Nula",
    "8": "NK",
    "9": "No det.",
  };

  const hasAll = topo && hist && comp && grado;

  return (
    <div
      className="rounded-[14px] p-7 text-white sticky"
      style={{
        background: "var(--gris-d)",
        fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)",
        top: "72px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)",
          fontSize: "10px",
          letterSpacing: ".14em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,.4)",
          marginBottom: "1.25rem",
        }}
      >
        Código CIE-O-3 generado
      </p>

      {/* Code display */}
      <div
        className="text-[2.2rem] font-semibold tracking-wide min-h-[2.8rem]"
        style={{ letterSpacing: ".04em", transition: "all .3s" }}
      >
        {topo ? (
          <span style={{ color: "#7EC8E3" }}>{topo}</span>
        ) : (
          <span style={{ color: "rgba(255,255,255,.15)" }}>__.__ </span>
        )}
        <span style={{ color: "rgba(255,255,255,.25)", margin: "0 8px" }}> + </span>
        {hist ? (
          <span style={{ color: "#7EDBA8" }}>{hist}</span>
        ) : (
          <span style={{ color: "rgba(255,255,255,.15)" }}>____</span>
        )}
        {comp ? (
          <span style={{ color: "#F4A573" }}>/{comp}</span>
        ) : (
          <span style={{ color: "rgba(255,255,255,.15)" }}>/_</span>
        )}
        {grado ? (
          <span style={{ color: "#F4D173" }}>{grado}</span>
        ) : (
          <span style={{ color: "rgba(255,255,255,.15)" }}>_</span>
        )}
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
          fontSize: "13px",
          color: "rgba(255,255,255,.55)",
          marginTop: ".75rem",
          minHeight: "2.5rem",
          lineHeight: 1.5,
        }}
      >
        {completeDesc || "Complete los campos para generar el código."}
      </p>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid rgba(255,255,255,.08)",
          margin: "1.25rem 0",
        }}
      />

      {/* Parts breakdown */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 text-sm">
          <span className="w-[100px] flex-shrink-0" style={{ color: "rgba(255,255,255,.35)" }}>
            Topografía
          </span>
          <span className="font-semibold" style={{ color: "#7EC8E3" }}>
            {topo || "—"}
          </span>
          {topoDesc && (
            <span
              style={{
                color: "rgba(255,255,255,.5)",
                fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                fontSize: "12px",
              }}
            >
              {topoDesc}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 text-sm">
          <span className="w-[100px] flex-shrink-0" style={{ color: "rgba(255,255,255,.35)" }}>
            Histología
          </span>
          <span className="font-semibold" style={{ color: "#7EDBA8" }}>
            {hist || "—"}
          </span>
          {histDesc && (
            <span
              style={{
                color: "rgba(255,255,255,.5)",
                fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                fontSize: "12px",
              }}
            >
              {histDesc.length > 40 ? `${histDesc.substring(0, 40)}…` : histDesc}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 text-sm">
          <span className="w-[100px] flex-shrink-0" style={{ color: "rgba(255,255,255,.35)" }}>
            Comportamiento
          </span>
          <span className="font-semibold" style={{ color: "#F4A573" }}>
            {comp ? `/${comp}` : "—"}
          </span>
          {comp && (
            <span
              style={{
                color: "rgba(255,255,255,.5)",
                fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                fontSize: "12px",
              }}
            >
              {compNames[comp] || ""}
            </span>
          )}
          <span
            className="ml-auto text-xs px-2 py-0.5 rounded"
            style={{
              fontSize: "10px",
              background: "rgba(255,255,255,.08)",
              color: "rgba(255,255,255,.5)",
            }}
          >
            Regla F
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <span className="w-[100px] flex-shrink-0" style={{ color: "rgba(255,255,255,.35)" }}>
            {tipoGrado === "linaje" ? "Linaje" : "Grado"}
          </span>
          <span className="font-semibold" style={{ color: "#F4D173" }}>
            {grado || "—"}
          </span>
          {grado && (
            <span
              style={{
                color: "rgba(255,255,255,.5)",
                fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                fontSize: "12px",
              }}
            >
              {gNames[grado] || ""}
            </span>
          )}
          <span
            className="ml-auto text-xs px-2 py-0.5 rounded"
            style={{
              fontSize: "10px",
              background: "rgba(255,255,255,.08)",
              color: "rgba(255,255,255,.5)",
            }}
          >
            Regla G
          </span>
        </div>
      </div>

      <button
        onClick={resetAll}
        className="mt-5 w-full rounded-[8px] px-4 py-[9px] text-sm border transition-all hover:bg-white/12 hover:text-white"
        style={{
          background: "rgba(255,255,255,.07)",
          border: "1px solid rgba(255,255,255,.12)",
          color: "rgba(255,255,255,.65)",
          fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
          fontSize: "13px",
          cursor: "pointer",
        }}
      >
        <RotateCcw className="inline w-4 h-4 mr-1 align-middle" />
        Reiniciar codificación
      </button>
    </div>
  );
}
