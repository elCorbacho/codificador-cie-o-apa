"use client";

import * as Select from "@radix-ui/react-select";
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useWizardStore } from "@/store/use-wizard-store";

const COMP_TODOS = [
  { v: "0", d: "Benigno" },
  { v: "1", d: "Incierto / borderline" },
  { v: "2", d: "In situ / no invasor" },
  { v: "3", d: "Maligno primario" },
  { v: "6", d: "Maligno — metástasis (solo AP)" },
  { v: "9", d: "Incierto primario/metástasis (solo AP)" },
];

export function BehaviorSelector() {
  const { ctx, hist, setComp, setStep } = useWizardStore();
  const [alerta, setAlerta] = useState("");

  const isDisabled = !ctx || !hist;
  const soloLab = ctx === "laboratorio_ap";
  const options = COMP_TODOS.filter((c) => soloLab || (c.v !== "6" && c.v !== "9"));

  const handleChange = (value: string) => {
    if (!value) return;
    const [c, d] = value.split("|");
    setComp(c, d);
    setStep(4);

    // Special alerts
    if (c === "0" || c === "1") {
      setAlerta("Regla G + §4.6: para comportamiento /0 y /1, el sexto dígito debe ser 9 (no procede asignar grado).");
    } else if (hist === "8077" && c === "3") {
      setAlerta("⚠ Atención: para NIC III / CIN III el comportamiento correcto según el PDF es /2 (in situ), no /3. Solo cambiar a /3 si hay invasión documentada.");
    } else if (hist === "9930") {
      setAlerta("★ EXCEPCIÓN Regla E: sarcoma mieloide → NO usar C42.1. Codificar según localización del depósito.");
    } else if (hist === "9866") {
      setAlerta("★ Leucemia promielocítica aguda (PML-RARA): URGENCIA oncohematológica. Verificar que la topografía sea C42.1 (Regla E).");
    } else {
      setAlerta("");
    }
  };

  return (
    <div>
      <div className="mb-3">
        <Select.Root onValueChange={handleChange} disabled={isDisabled}>
          <Select.Trigger
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
            style={{
              border: "1.5px solid var(--linea)",
              background: "var(--gris)",
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
            <Select.Value placeholder="-- Comportamiento --" />
            <Select.Icon>
              <ChevronDown className="w-4 h-4" />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content
              className="bg-blanco border border-linea rounded-lg shadow-lg overflow-hidden z-50"
              position="popper"
              style={{ width: "var(--radix-select-trigger-width)", maxHeight: "300px" }}
            >
              <Select.Viewport className="p-1">
                {options.map((c) => (
                  <Select.Item
                    key={c.v}
                    value={`${c.v}|${c.d}`}
                    className="flex items-center px-3 py-2.5 rounded-md text-sm cursor-pointer hover:bg-azul-l data-[highlighted]:bg-azul-l outline-none"
                    style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
                  >
                    <Select.ItemText>/{c.v} — {c.d}</Select.ItemText>
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

      {alerta && (
        <div
          className="rounded-lg p-3 mb-3 text-sm"
          style={{
            background: "#FFF4DC",
            border: "1px solid #F4C96A",
            color: "#7B4F10",
            display: "block",
          }}
        >
          {alerta}
        </div>
      )}

      <p className="text-xs" style={{ color: "var(--gris-m)", fontSize: "12px", lineHeight: 1.5 }}>
        Regla F: el sistema matricial permite cualquier comportamiento. El patólogo tiene la última palabra.
      </p>
    </div>
  );
}
