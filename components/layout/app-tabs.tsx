"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { ArquitecturaSection } from "@/components/cieo/Arquitectura";
import { ErdDiagram } from "@/components/cieo/erd/erd-diagram";
import { ReglasGrid } from "@/components/cieo/reglas/reglas-grid";
import { CodificadorWizard } from "@/components/cieo/codificador/codificador-wizard";
import { CasosCards } from "@/components/cieo/casos-especiales/casos-cards";

const TABS = [
  { value: "arquitectura", label: "Arquitectura" },
  { value: "entidad-relacion", label: "Entidad-Relación" },
  { value: "reglas", label: "Reglas A-K" },
  { value: "codificador", label: "Codificador" },
  { value: "casos-especiales", label: "Casos especiales" },
];

export function AppTabs() {
  return (
    <Tabs.Root defaultValue="arquitectura" className="flex flex-col flex-1">
      {/* Tab Navigation Bar — sticky dentro del Tabs.Root */}
      <Tabs.List
        className="bg-canvas border-b border-hairline sticky top-0 z-50 flex list-none m-0 p-0 overflow-x-auto"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="container mx-auto px-4 flex">
          {TABS.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className="
                bg-transparent border-none text-muted
                font-heading font-medium text-[15px]
                px-[22px] py-[22px] cursor-pointer whitespace-nowrap
                border-b-[2px] border-b-transparent
                transition-[color,border-color] duration-200
                hover:text-ink
                data-[state=active]:text-ink data-[state=active]:border-b-ink
              "
              style={{ letterSpacing: "-0.01em" }}
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </div>
      </Tabs.List>

      {/* Tab Content */}
      <Tabs.Content value="arquitectura" className="flex-1">
        <ArquitecturaSection />
      </Tabs.Content>
      <Tabs.Content value="entidad-relacion" className="flex-1">
        <ErdDiagram />
      </Tabs.Content>
      <Tabs.Content value="reglas" className="flex-1">
        <ReglasGrid />
      </Tabs.Content>
      <Tabs.Content value="codificador" className="flex-1">
        <CodificadorWizard />
      </Tabs.Content>
      <Tabs.Content value="casos-especiales" className="flex-1">
        <CasosCards />
      </Tabs.Content>
    </Tabs.Root>
  );
}
