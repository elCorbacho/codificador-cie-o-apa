"use client";

import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";
import { useWizardStore } from "@/store/use-wizard-store";

export function ContextSelector() {
  const { ctx, setCtx, setStep } = useWizardStore();

  const handleChange = (value: string) => {
    const newCtx = value as "laboratorio_ap" | "registro_cancer";
    setCtx(newCtx);
    if (newCtx) {
      setStep(1);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <Select.Root value={ctx} onValueChange={handleChange}>
          <Select.Trigger
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg border bg-gris text-gris-d text-sm outline-none focus:border-azul-m focus:bg-blanco transition-colors"
            style={{
              border: "1.5px solid var(--linea)",
              background: "var(--gris)",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              fontSize: "14px",
              cursor: "pointer",
              appearance: "none",
              WebkitAppearance: "none",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23888' d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 14px center",
            }}
          >
            <Select.Value placeholder="-- Seleccionar contexto --" />
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
                <Select.Item
                  value="laboratorio_ap"
                  className="flex items-center px-3 py-2.5 rounded-md text-sm cursor-pointer hover:bg-azul-l data-[highlighted]:bg-azul-l outline-none"
                  style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
                >
                  <Select.ItemText>Laboratorio de Anatomía Patológica (permite /6 y /9)</Select.ItemText>
                  <Select.ItemIndicator className="ml-auto">
                    <Check className="w-4 h-4 text-azul" />
                  </Select.ItemIndicator>
                </Select.Item>
                <Select.Item
                  value="registro_cancer"
                  className="flex items-center px-3 py-2.5 rounded-md text-sm cursor-pointer hover:bg-azul-l data-[highlighted]:bg-azul-l outline-none"
                  style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
                >
                  <Select.ItemText>Registro de cáncer / DEIS (solo /2 y /3)</Select.ItemText>
                  <Select.ItemIndicator className="ml-auto">
                    <Check className="w-4 h-4 text-azul" />
                  </Select.ItemIndicator>
                </Select.Item>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
      <p className="text-xs mt-2" style={{ color: "var(--gris-m)", fontSize: "12px", lineHeight: 1.5 }}>
        El contexto determina qué comportamientos están disponibles según §4.3.2 del PDF.
      </p>
    </div>
  );
}
