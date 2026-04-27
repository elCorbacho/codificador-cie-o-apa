"use client";

import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";
import { useWizardStore } from "@/store/use-wizard-store";

const GRADO_DIFERENCIACION = [
  { v: "1", d: "Grado I — bien diferenciado" },
  { v: "2", d: "Grado II — moderadamente diferenciado" },
  { v: "3", d: "Grado III — pobremente diferenciado" },
  { v: "4", d: "Grado IV — indiferenciado / anaplásico" },
  { v: "9", d: "No determinado / no señalado" },
];

const GRADO_LINAJE = [
  { v: "5", d: "Célula T" },
  { v: "6", d: "Célula B / pre-B / precursor B" },
  { v: "7", d: "Célula nula / no T y no B" },
  { v: "8", d: "Célula NK / citolítica natural" },
  { v: "9", d: "No determinado" },
];

export function GradeSelector() {
  const { comp, tipoGrado, setGrado } = useWizardStore();

  const isDisabled = !comp || comp === "0" || comp === "1";
  const esHema = tipoGrado === "linaje";

  const options = isDisabled
    ? [{ v: "9", d: "No procede (comportamiento /0 o /1)" }]
    : esHema
      ? GRADO_LINAJE
      : GRADO_DIFERENCIACION;

  const title = esHema ? "Inmunofenotipo / Linaje celular" : "Grado histológico / Diferenciación";
  const hint = esHema
    ? "§3.13.3 Tabla 22: los dígitos de linaje 5–8 prevalecen sobre diferenciación 1–4 (Regla G)."
    : "Regla G: si el informe indica dos grados, usar el mayor. Si no se especifica grado → 9.";

  const handleChange = (value: string) => {
    if (!value) return;
    const [c, d] = value.split("|");
    setGrado(c, d, tipoGrado);
  };

  return (
    <div>
      <div className="mb-3">
        <Select.Root onValueChange={handleChange} disabled={isDisabled}>
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
            <Select.Value placeholder="-- Grado --" />
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
                {options.map((g) => (
                  <Select.Item
                    key={g.v}
                    value={`${g.v}|${g.d}`}
                    className="flex items-center px-3 py-2.5 rounded-md text-sm cursor-pointer hover:bg-azul-l data-[highlighted]:bg-azul-l outline-none"
                    style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
                  >
                    <Select.ItemText>{g.v} — {g.d}</Select.ItemText>
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
        {hint}
      </p>
    </div>
  );
}
