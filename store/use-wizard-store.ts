import { create } from "zustand";

export type GradeType = "dif" | "linaje";

interface WizardState {
  // Current step (0-4)
  step: number;
  // Context: laboratorio_ap or registro_cancer
  ctx: "laboratorio_ap" | "registro_cancer" | "";
  // Topography
  topo: string;
  topoDesc: string;
  // Histology
  hist: string;
  histDesc: string;
  // Behavior
  comp: string;
  compDesc: string;
  // Grade
  grado: string;
  gradoDesc: string;
  tipoGrado: GradeType;
  // Complete code assembled
  completeCode: string;
  // Description
  completeDesc: string;
  // Actions
  setStep: (step: number) => void;
  setCtx: (ctx: "laboratorio_ap" | "registro_cancer" | "") => void;
  setTopo: (topo: string, topoDesc: string) => void;
  setHist: (hist: string, histDesc: string) => void;
  setComp: (comp: string, compDesc: string) => void;
  setGrado: (grado: string, gradoDesc: string, tipoGrado: GradeType) => void;
  resetAll: () => void;
}

const initialState = {
  step: 0,
  ctx: "" as "laboratorio_ap" | "registro_cancer" | "",
  topo: "",
  topoDesc: "",
  hist: "",
  histDesc: "",
  comp: "",
  compDesc: "",
  grado: "",
  gradoDesc: "",
  tipoGrado: "dif" as GradeType,
  completeCode: "",
  completeDesc: "",
};

function buildCode(state: WizardState): string {
  const topo = state.topo || "__.__ ";
  const hist = state.hist || "____";
  const comp = state.comp ? `/${state.comp}` : "/_ ";
  const grado = state.grado || "_";
  return `${topo} + ${hist}${comp}${grado}`;
}

export const useWizardStore = create<WizardState>((set) => ({
  ...initialState,

  setStep: (step) => set({ step: Math.min(4, Math.max(0, Math.floor(step))) }),

  setCtx: (ctx) => set({ ctx }),

  setTopo: (topo, topoDesc) =>
    set((state) => ({
      ...state,
      topo,
      topoDesc,
      completeCode: buildCode({ ...state, topo, topoDesc }),
      completeDesc: topo && state.hist ? `${state.histDesc} de ${topoDesc}` : "",
    })),

  setHist: (hist, histDesc) =>
    set((state) => ({
      ...state,
      hist,
      histDesc,
      completeCode: buildCode({ ...state, hist, histDesc }),
      completeDesc: state.topo && hist
        ? `${histDesc} de ${state.topoDesc}`
        : "",
    })),

  setComp: (comp, compDesc) =>
    set((state) => {
      const compNames: Record<string, string> = {
        "0": "benigno",
        "1": "incierto",
        "2": "in situ",
        "3": "maligno primario",
        "6": "metástasis",
        "9": "incierto",
      };
      return {
        ...state,
        comp,
        compDesc,
        completeCode: buildCode({ ...state, comp, compDesc }),
        completeDesc:
          state.topo && state.hist && comp
            ? `${state.histDesc} de ${state.topoDesc} — ${compNames[comp] || ""}`
            : state.topo && state.hist
              ? `${state.histDesc} de ${state.topoDesc}`
              : "",
      };
    }),

  setGrado: (grado, gradoDesc, tipoGrado) =>
    set((state) => {
      const compNames: Record<string, string> = {
        "0": "benigno",
        "1": "incierto",
        "2": "in situ",
        "3": "maligno primario",
        "6": "metástasis",
        "9": "incierto",
      };
      return {
        ...state,
        grado,
        gradoDesc,
        tipoGrado,
        completeCode: buildCode({ ...state, grado, gradoDesc, tipoGrado }),
        completeDesc:
          state.topo && state.hist && state.comp
            ? `${state.histDesc} de ${state.topoDesc} — ${compNames[state.comp] || ""}`
            : state.topo && state.hist
              ? `${state.histDesc} de ${state.topoDesc}`
              : "",
      };
    }),

  resetAll: () => set(initialState),
}));
