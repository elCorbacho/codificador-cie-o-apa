"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { Header, TabNav } from "@/components/layout";
import { ArquitecturaSection } from "@/components/cieo/Arquitectura";
import { ErdDiagram } from "@/components/cieo/erd/erd-diagram";
import { ReglasGrid } from "@/components/cieo/reglas/reglas-grid";
import { CodificadorWizard } from "@/components/cieo/codificador/codificador-wizard";
import { CasosCards } from "@/components/cieo/casos-especiales/casos-cards";

export default function HomePage() {
  return (
    <>
      <Header />
      <TabNav />
      <Tabs.Root defaultValue="arquitectura" className="flex-1">
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
    </>
  );
}
