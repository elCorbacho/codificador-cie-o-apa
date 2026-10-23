"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { BookOpen, GitBranch, ListChecks, ScanLine, Layers } from "lucide-react";
import { ArquitecturaSection } from "@/components/cieo/Arquitectura";
import { ErdDiagram } from "@/components/cieo/erd/erd-diagram";
import { ReglasGrid } from "@/components/cieo/reglas/reglas-grid";
import { CodificadorWizard } from "@/components/cieo/codificador/codificador-wizard";
import { CasosCards } from "@/components/cieo/casos-especiales/casos-cards";

const TABS = [
  { value: "arquitectura", label: "Arquitectura", icon: BookOpen },
  { value: "entidad-relacion", label: "Entidad-Relación", icon: GitBranch },
  { value: "reglas", label: "Reglas A-K", icon: ListChecks },
  { value: "codificador", label: "Codificador", icon: ScanLine },
  { value: "casos-especiales", label: "Casos especiales", icon: Layers },
];

export function AppTabs() {
  return (
    <Tabs.Root defaultValue="arquitectura" orientation="vertical" className="workspace-shell">
      <Tabs.List
        aria-label="Secciones del codificador"
        className="workspace-rail"
      >
          {TABS.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className="workspace-tab"
            >
              <tab.icon size={22} aria-hidden="true" />
              <span>{tab.label}</span>
            </Tabs.Trigger>
          ))}
      </Tabs.List>

      <main className="workspace-content">
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
      </main>
    </Tabs.Root>
  );
}
