"use client";

import { RotateCcw } from "lucide-react";
import { useWizardStore } from "@/store/use-wizard-store";

export function ResultPanel() {
  const {
    topo, topoDesc, hist, histDesc,
    comp, grado,
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

  const isComplete = !!topo && !!hist && !!comp && !!grado;

  return (
    <div className="result-panel-root sticky rounded-[16px] p-6 text-ink" role="region" aria-label="Resumen de codificación">
      <p className="eyebrow mb-5 text-muted">
        Código CIE-O-3 generado
      </p>

      {/* Code display */}
      <div 
        className="result-panel-code min-h-[2.8rem] font-semibold"
        aria-live="polite"
        aria-atomic="true"
        data-complete={isComplete}
      >
        {topo ? (
          <span style={{ color: "var(--color-topo-accent)" }}>{topo}</span>
        ) : (
          <span className="text-muted">__.__ </span>
        )}
        <span className="mx-2 text-muted"> + </span>
        {hist ? (
          <span style={{ color: "var(--color-hist-accent)" }}>{hist}</span>
        ) : (
          <span className="text-muted">____</span>
        )}
        {comp ? (
          <span style={{ color: "var(--color-comp-accent)" }}>/{comp}</span>
        ) : (
          <span className="text-muted">/_</span>
        )}
        {grado ? (
          <span style={{ color: "var(--color-grad-accent)" }}>{grado}</span>
        ) : (
          <span className="text-muted">_</span>
        )}
      </div>

      {/* Description */}
      <p className="result-panel-description mt-3">
        {completeDesc || "Complete los campos para generar el código."}
      </p>

      <hr className="result-panel-divider my-5" />

      {/* Parts breakdown */}
      <div className="flex flex-col gap-3">
        <div className="result-panel-row">
          <span className="result-panel-label">
            Topografía
          </span>
          <span className="font-semibold" style={{ color: "var(--color-topo-accent)" }}>
            {topo || "—"}
          </span>
          {topoDesc && (
            <span className="result-panel-detail">
              {topoDesc}
            </span>
          )}
        </div>

        <div className="result-panel-row">
          <span className="result-panel-label">
            Histología
          </span>
          <span className="font-semibold" style={{ color: "var(--color-hist-accent)" }}>
            {hist || "—"}
          </span>
          {histDesc && (
            <span className="result-panel-detail">
              {histDesc}
            </span>
          )}
        </div>

        <div className="result-panel-row">
          <span className="result-panel-label">
            Comportamiento
          </span>
          <span className="font-semibold" style={{ color: "var(--color-comp-accent)" }}>
            {comp ? `/${comp}` : "—"}
          </span>
          {comp && (
            <span className="result-panel-detail">
              {compNames[comp] || ""}
            </span>
          )}
          <span className="result-panel-tag ml-auto rounded px-2 py-0.5 text-xs">
            Regla F
          </span>
        </div>

        <div className="result-panel-row">
          <span className="result-panel-label">
            {tipoGrado === "linaje" ? "Linaje" : "Grado"}
          </span>
          <span className="font-semibold" style={{ color: "var(--color-grad-accent)" }}>
            {grado || "—"}
          </span>
          {grado && (
            <span className="result-panel-detail">
              {gNames[grado] || ""}
            </span>
          )}
          <span className="result-panel-tag ml-auto rounded px-2 py-0.5 text-xs">
            Regla G
          </span>
        </div>
      </div>

      <button
        onClick={resetAll}
        className="result-panel-reset group mt-5 min-h-11 w-full cursor-pointer rounded-[10px] px-3 py-2 text-sm font-semibold transition-colors"
      >
        <RotateCcw className="inline w-4 h-4 mr-2 align-middle transition-transform duration-normal ease-premium group-hover:rotate-[-45deg]" />
        Reiniciar codificación
      </button>
    </div>
  );
}
