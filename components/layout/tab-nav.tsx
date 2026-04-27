"use client";

import * as Tabs from "@radix-ui/react-tabs";

const TABS = [
  { value: "arquitectura", label: "Arquitectura" },
  { value: "entidad-relacion", label: "Entidad-Relación" },
  { value: "reglas", label: "Reglas A-K" },
  { value: "codificador", label: "Codificador" },
  { value: "casos-especiales", label: "Casos especiales" },
];

export function TabNav() {
  return (
    <div
      className="bg-azul border-t border-white/10 sticky top-0 z-50"
      style={{ position: "sticky", top: 0, zIndex: 100 }}
    >
      <div className="container mx-auto px-4">
        <Tabs.Root defaultValue="arquitectura">
          <Tabs.List
            className="flex gap-0 list-none m-0 p-0 overflow-x-auto"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
          >
            {TABS.map((tab) => (
              <Tabs.Trigger
                key={tab.value}
                value={tab.value}
                className="
                  bg-transparent border-none text-white/55
                  font-body font-medium text-[13px]
                  px-[22px] py-[14px] cursor-pointer whitespace-nowrap
                  border-b-[3px] border-b-transparent
                  transition-all duration-200
                  hover:text-white/85
                  data-[state=active]:text-white data-[state=active]:border-b-[#7EC8E3]
                "
                style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
              >
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>
      </div>
    </div>
  );
}
