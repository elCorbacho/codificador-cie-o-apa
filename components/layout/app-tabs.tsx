"use client";

import { ArquitecturaSection } from "@/components/cieo/Arquitectura";
import { ErdDiagram } from "@/components/cieo/erd/erd-diagram";
import { ReglasGrid } from "@/components/cieo/reglas/reglas-grid";
import { CodificadorWizard } from "@/components/cieo/codificador/codificador-wizard";
import { CasosCards } from "@/components/cieo/casos-especiales/casos-cards";

interface AppTabsProps {
  activeTab: string;
}

export function AppTabs({ activeTab }: AppTabsProps) {
  const renderContent = () => {
    switch (activeTab) {
      case "arquitectura":
        return <ArquitecturaSection />;
      case "entidad-relacion":
        return <ErdDiagram />;
      case "reglas":
        return <ReglasGrid />;
      case "codificador":
        return <CodificadorWizard />;
      case "casos-especiales":
        return <CasosCards />;
      default:
        return <ArquitecturaSection />;
    }
  };

  return (
    <div role="tablist" aria-label="Secciones de la aplicación">
      <section role="tabpanel" id={`tabpanel-${activeTab}`}>
        {renderContent()}
      </section>
    </div>
  );
}