"use client";

import * as Select from "@radix-ui/react-select";
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useWizardStore } from "@/store/use-wizard-store";

const GRUPOS_HIST: Record<string, Array<{ c: string; d: string }>> = {
  "Neoplasias SAI": [
    { c: "8000", d: "Neoplasia SAI" }, { c: "8001", d: "Células tumorales SAI" },
    { c: "8002", d: "Tumor maligno células pequeñas" }, { c: "8003", d: "Tumor maligno células gigantes" },
    { c: "8004", d: "Tumor maligno células fusiformes" }, { c: "8005", d: "Tumor maligno tipo células claras" },
  ],
  "Carcinomas epiteliales": [
    { c: "8010", d: "Carcinoma SAI" }, { c: "8020", d: "Carcinoma indiferenciado SAI" },
    { c: "8021", d: "Carcinoma anaplásico SAI" }, { c: "8041", d: "Carcinoma células pequeñas SAI" },
    { c: "8046", d: "Carcinoma no células pequeñas" }, { c: "8050", d: "Carcinoma papilar SAI" },
    { c: "8070", d: "Carcinoma escamoso SAI" }, { c: "8071", d: "Carcinoma escamoso queratinizante" },
    { c: "8072", d: "Carcinoma escamoso no queratinizante" }, { c: "8076", d: "Carcinoma escamoso microinvasor" },
    { c: "8077", d: "NIC III / CIN III (in situ /2)" }, { c: "8090", d: "Carcinoma basocelular SAI (C44._ — Regla H)" },
    { c: "8120", d: "Carcinoma urotelial SAI (C67._ — Regla H)" },
  ],
  "Adenocarcinomas": [
    { c: "8140", d: "Adenocarcinoma SAI" }, { c: "8142", d: "Linitis plástica (C16._ — Regla H)" },
    { c: "8160", d: "Colangiocarcinoma (C22.1/C24.0 — Regla H)" }, { c: "8170", d: "Hepatocarcinoma SAI (C22.0 — Regla H)" },
    { c: "8200", d: "Carcinoma adenoide quístico" }, { c: "8210", d: "Adenocarcinoma en pólipo" },
    { c: "8230", d: "Adenocarcinoma sólido SAI" }, { c: "8260", d: "Adenocarcinoma papilar SAI" },
    { c: "8310", d: "Adenocarcinoma células claras SAI" }, { c: "8330", d: "Adenocarcinoma folicular (C73.9 — Regla H)" },
    { c: "8340", d: "Carcinoma papilar variante folicular (C73.9)" }, { c: "8380", d: "Adenocarcinoma endometrioide SAI" },
    { c: "8440", d: "Cistadenocarcinoma SAI" }, { c: "8460", d: "Cistoadenocarcinoma seroso bajo grado (C56.9)" },
    { c: "8461", d: "Cistoadenocarcinoma seroso alto grado (C56.9/C57.0)" }, { c: "8480", d: "Adenocarcinoma mucinoso" },
    { c: "8490", d: "Carcinoma células en anillo de sello" }, { c: "8500", d: "Carcinoma ductal infiltrante (C50._ — Regla H)" },
    { c: "8510", d: "Carcinoma medular SAI" }, { c: "8520", d: "Carcinoma lobulillar SAI (C50._ — Regla H)" },
  ],
  "Tumores neuroendocrinos": [
    { c: "8240", d: "Tumor carcinoide G1 / NET G1" }, { c: "8249", d: "Tumor neuroendocrino G2" },
    { c: "8246", d: "Carcinoma neuroendocrino SAI" }, { c: "8013", d: "Carcinoma neuroendocrino células grandes" },
    { c: "8041", d: "Carcinoma células pequeñas (neuroendocrino alto grado)" },
    { c: "8247", d: "Carcinoma células de Merkel (C44._ — Regla H)" },
  ],
  "Tumores melanocíticos": [
    { c: "8720", d: "Melanoma maligno SAI" }, { c: "8721", d: "Melanoma nodular" },
    { c: "8742", d: "Melanoma lentigo maligno" }, { c: "8743", d: "Melanoma extensión superficial" },
    { c: "8744", d: "Melanoma lentiginoso acral" }, { c: "8750", d: "Nevo intradérmico" },
    { c: "8760", d: "Nevo compuesto" },
  ],
  "Tumores tejidos blandos y mesenquimáticos": [
    { c: "8800", d: "Sarcoma SAI" }, { c: "8810", d: "Fibrosarcoma SAI" }, { c: "8815", d: "Tumor fibroso solitario" },
    { c: "8821", d: "Fibromatosis agresiva / tumor desmoide" }, { c: "8830", d: "Histiocitoma fibroso SAI" },
    { c: "8850", d: "Lipoma SAI" }, { c: "8851", d: "Liposarcoma bien diferenciado" },
    { c: "8852", d: "Liposarcoma mixoide" }, { c: "8890", d: "Leiomioma SAI / leiomiosarcoma" },
    { c: "8900", d: "Rabdomiosarcoma SAI" }, { c: "8910", d: "Rabdomiosarcoma embrionario" },
    { c: "8920", d: "Rabdomiosarcoma alveolar" }, { c: "8936", d: "GIST SAI" },
  ],
  "Tumores óseos y cartilaginosos": [
    { c: "9180", d: "Osteosarcoma SAI" }, { c: "9191", d: "Osteoma osteoide" },
    { c: "9220", d: "Condrosarcoma SAI" }, { c: "9230", d: "Condroblastoma SAI" },
    { c: "9250", d: "Tumor células gigantes hueso SAI" }, { c: "9260", d: "Sarcoma de Ewing" },
    { c: "9370", d: "Cordoma SAI" },
  ],
  "Tumores SNC y neurales": [
    { c: "9380", d: "Glioma SAI (C71._ — Regla H)" }, { c: "9391", d: "Ependimoma SAI (C71./C72.)" },
    { c: "9400", d: "Astrocitoma difuso IDH-mutado" }, { c: "9401", d: "Astrocitoma anaplásico IDH-mutado" },
    { c: "9421", d: "Astrocitoma pilocítico (C71._ — Regla H)" }, { c: "9440", d: "Glioblastoma SAI (C71._ — Regla H)" },
    { c: "9450", d: "Oligodendroglioma IDH-mutado 1p/19q" }, { c: "9470", d: "Meduloblastoma SAI (C71.6)" },
    { c: "9508", d: "Tumor teratoide/rabdoide atípico" }, { c: "9530", d: "Meningioma SAI (C70._ — Regla H)" },
    { c: "9539", d: "Meningioma atípico (C70._)" }, { c: "9540", d: "Neurofibroma SAI" },
    { c: "9560", d: "Schwannoma / neurilemoma SAI" }, { c: "9510", d: "Retinoblastoma (C69.2 — Regla H)" },
  ],
  "Tumores células germinales": [
    { c: "9060", d: "Disgerminoma (C56.9)" }, { c: "9061", d: "Seminoma SAI (C62.9 — Regla H)" },
    { c: "9070", d: "Carcinoma embrionario SAI" }, { c: "9071", d: "Tumor saco vitelino SAI" },
    { c: "9080", d: "Teratoma SAI" }, { c: "9100", d: "Coriocarcinoma SAI" },
  ],
  "Linfomas": [
    { c: "9590", d: "Linfoma maligno SAI" }, { c: "9650", d: "Linfoma Hodgkin clásico SAI → C77._ (Regla D)" },
    { c: "9663", d: "LH esclerosis nodular → C77._ (Regla D)" }, { c: "9673", d: "Linfoma células del manto → C77._ (Regla D)" },
    { c: "9680", d: "Linfoma difuso células B grandes → C77._ (Regla D)" }, { c: "9687", d: "Linfoma de Burkitt" },
    { c: "9690", d: "Linfoma folicular SAI" }, { c: "9699", d: "Linfoma MALT (extraganglionar — Regla D)" },
    { c: "9700", d: "Micosis fungoide (C44._ — linfoma cutáneo)" }, { c: "9702", d: "Linfoma T periférico SAI" },
    { c: "9714", d: "Linfoma anaplásico células grandes ALK+" }, { c: "9719", d: "Linfoma NK/T extranodal nasal" },
  ],
  "Leucemias y síndromes mieloproliferativos": [
    { c: "9823", d: "LLC / linfoma células pequeñas B → C42.1 (Regla E)" },
    { c: "9861", d: "LMA SAI → C42.1 (Regla E)" }, { c: "9866", d: "Leucemia promielocítica aguda → C42.1 (Regla E) ★URGENCIA" },
    { c: "9875", d: "LMC BCR-ABL1+ → C42.1 (Regla E)" }, { c: "9930", d: "Sarcoma mieloide ★EXCEPCIÓN Regla E → NO C42.1" },
    { c: "9950", d: "Policitemia vera → C42.1 (Regla E)" }, { c: "9961", d: "Mielofibrosis primaria → C42.1 (Regla E)" },
    { c: "9962", d: "Trombocitemia esencial → C42.1 (Regla E)" }, { c: "9980", d: "SMD con displasia unilinaje → C42.1" },
    { c: "9732", d: "Mieloma múltiple → C42.1 (enfermedad sistémica)" },
  ],
  "Neoplasias de células plasmáticas": [
    { c: "9732", d: "Mieloma múltiple → C42.1" }, { c: "9731", d: "Plasmocitoma óseo solitario (hueso afectado)" },
    { c: "9734", d: "Plasmocitoma extraóseo" }, { c: "9765", d: "MGUS (comportamiento /1)" },
  ],
  "Tumores fibroepiteliales (mama/ovario)": [
    { c: "9010", d: "Fibroadenoma SAI (C50._ — Regla H)" }, { c: "9020", d: "Tumor filoides SAI (C50._ — Regla H)" },
    { c: "9000", d: "Tumor de Brenner SAI (C56.9 — Regla H)" },
  ],
};

const GRUPOS_HEMA = ["Leucemias y síndromes mieloproliferativos", "Linfomas", "Neoplasias de células plasmáticas"];

const grupoKeys = Object.keys(GRUPOS_HIST);

export function HistologySelector() {
  const { topo, setHist, setStep, tipoGrado, setGrado } = useWizardStore();
  const [grupo, setGrupo] = useState("");

  const isDisabled = !topo;

  const handleGrupoChange = (value: string) => {
    setGrupo(value);
    if (value) {
      const isHema = GRUPOS_HEMA.includes(value);
      setGrado("", "", isHema ? "linaje" : "dif");
    }
  };

  const handleHistChange = (value: string) => {
    if (!value) return;
    const [c, d] = value.split("|");
    setHist(c, d);
    setStep(3);
  };

  const currentHistos = grupo ? GRUPOS_HIST[grupo] || [] : [];

  return (
    <div>
      {/* Group selector */}
      <div className="mb-3">
        <Select.Root value={grupo} onValueChange={handleGrupoChange} disabled={isDisabled}>
          <Select.Trigger
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
            style={{
              border: "1.5px solid var(--color-hairline)",
              background: "var(--color-surface-soft)",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              fontSize: "14px",
              cursor: isDisabled ? "not-allowed" : "pointer",
              opacity: isDisabled ? 0.45 : 1,
              appearance: "none",
              WebkitAppearance: "none",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23888' d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 14px center",
            }}
          >
            <Select.Value placeholder="-- Grupo histológico --" />
            <Select.Icon>
              <ChevronDown className="w-4 h-4" />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content
              className="bg-canvas border border-hairline rounded-lg shadow-lg overflow-hidden z-50"
              position="popper"
              style={{ width: "var(--radix-select-trigger-width)", maxHeight: "300px" }}
            >
              <Select.Viewport className="p-1">
                {grupoKeys.map((key) => (
                  <Select.Item
                    key={key}
                    value={key}
                    className="flex items-center px-3 py-2.5 rounded-md text-sm cursor-pointer hover:bg-azul-l data-[highlighted]:bg-azul-l outline-none"
                    style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
                  >
                    <Select.ItemText>{key}</Select.ItemText>
                    <Select.ItemIndicator className="ml-auto">
                      <Check className="w-4 h-4 text-azul" />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>

      {/* Type selector */}
      <div className="mb-3">
        <Select.Root onValueChange={handleHistChange} disabled={isDisabled || !grupo}>
          <Select.Trigger
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
            style={{
              border: "1.5px solid var(--color-hairline)",
              background: "var(--color-surface-soft)",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              fontSize: "14px",
              cursor: isDisabled || !grupo ? "not-allowed" : "pointer",
              opacity: isDisabled || !grupo ? 0.45 : 1,
              appearance: "none",
              WebkitAppearance: "none",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23888' d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 14px center",
            }}
          >
            <Select.Value placeholder="-- Tipo histológico --" />
            <Select.Icon>
              <ChevronDown className="w-4 h-4" />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content
              className="bg-canvas border border-hairline rounded-lg shadow-lg overflow-hidden z-50"
              position="popper"
              style={{ width: "var(--radix-select-trigger-width)", maxHeight: "300px" }}
            >
              <Select.Viewport className="p-1">
                {currentHistos.map((h) => (
                  <Select.Item
                    key={h.c}
                    value={`${h.c}|${h.d}`}
                    className="flex items-center px-3 py-2.5 rounded-md text-sm cursor-pointer hover:bg-azul-l data-[highlighted]:bg-azul-l outline-none"
                    style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
                  >
                    <Select.ItemText>
                      {h.c} — {h.d}
                    </Select.ItemText>
                    <Select.ItemIndicator className="ml-auto">
                      <Check className="w-4 h-4 text-azul" />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>

      <p className="text-xs" style={{ color: "var(--color-muted)", fontSize: "12px", lineHeight: 1.5 }}>
        Regla K: si hay dos adjetivos con códigos distintos, usar el mayor. Regla J: invertir raíces si el término no aparece.
      </p>
    </div>
  );
}
