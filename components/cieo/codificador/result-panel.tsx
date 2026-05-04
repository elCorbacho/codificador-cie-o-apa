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
    <div className="result-panel-root sticky rounded-[14px] p-7 text-white transition-shadow duration-normal ease-premium">
      <p className="eyebrow mb-5 text-white/40">
        Código CIE-O-3 generado
      </p>

      {/* Code display */}
      <div
        className={`result-panel-code min-h-[2.8rem] text-[2.2rem] font-semibold tracking-wide transition-all duration-normal ease-premium ${
          isComplete ? "scale-[1.02] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" : ""
        }`}
        aria-live="polite"
        aria-atomic="true"
      >
        {topo ? (
          <span style={{ color: "var(--color-topo-accent)" }}>{topo}</span>
        ) : (
          <span className="text-white/15">__.__ </span>
        )}
        <span className="mx-2 text-white/25"> + </span>
        {hist ? (
          <span style={{ color: "var(--color-hist-accent)" }}>{hist}</span>
        ) : (
          <span className="text-white/15">____</span>
        )}
        {comp ? (
          <span style={{ color: "var(--color-comp-accent)" }}>/{comp}</span>
        ) : (
          <span className="text-white/15">/_</span>
        )}
        {grado ? (
          <span style={{ color: "var(--color-grad-accent)" }}>{grado}</span>
        ) : (
          <span className="text-white/15">_</span>
        )}
      </div>

      {/* Description */}
      <p className="result-panel-description mt-3">
        {completeDesc || "Complete los campos para generar el código."}
      </p>

      <hr className="result-panel-divider my-5" />

      {/* Parts breakdown */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 text-sm">
          <span className="result-panel-label w-[100px] shrink-0">
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

        <div className="flex items-center gap-3 text-sm">
          <span className="result-panel-label w-[100px] shrink-0">
            Histología
          </span>
          <span className="font-semibold" style={{ color: "var(--color-hist-accent)" }}>
            {hist || "—"}
          </span>
          {histDesc && (
            <span className="result-panel-detail">
              {histDesc.length > 40 ? `${histDesc.substring(0, 40)}…` : histDesc}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 text-sm">
          <span className="result-panel-label w-[100px] shrink-0">
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

        <div className="flex items-center gap-3 text-sm">
          <span className="result-panel-label w-[100px] shrink-0">
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
        className="result-panel-reset group mt-5 w-full cursor-pointer rounded-[8px] border px-4 py-[9px] text-sm transition-all duration-fast ease-premium hover:bg-white/10 hover:border-white/30 hover:scale-[1.01] active:scale-[0.98]"
      >
        <RotateCcw className="inline w-4 h-4 mr-2 align-middle transition-transform duration-normal ease-premium group-hover:rotate-[-45deg]" />
        Reiniciar codificación
      </button>
    </div>
  );
}
