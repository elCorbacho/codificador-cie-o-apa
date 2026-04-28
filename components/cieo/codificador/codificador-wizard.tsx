"use client";

import { useWizardStore } from "@/store/use-wizard-store";
import { ContextSelector } from "./context-selector";
import { TopographySelector } from "./topography-selector";
import { HistologySelector } from "./histology-selector";
import { BehaviorSelector } from "./behavior-selector";
import { GradeSelector } from "./grade-selector";
import { ResultPanel } from "./result-panel";

interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  isDone: boolean;
}

function WizardStep({ number, title, children, isActive, isDone }: StepProps) {
  return (
    <div
      className={`rounded-[20px] border p-7 mb-5 transition-colors ${
        isDone 
          ? "border-secondary bg-surface-soft" 
        : isActive 
            ? "border-ink" 
            : "border-hairline bg-canvas"
      }`}
    >
      <div className="flex items-center mb-4">
        <span
          className={`w-7 h-7 rounded-full flex items-center justify-center font-code font-semibold text-sm mr-3 ${
            isDone 
              ? "bg-secondary text-canvas" 
            : isActive 
                ? "bg-primary text-canvas" 
                : "bg-surface-soft text-muted"
          }`}
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              fontSize: "13px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: ".6rem",
              flexShrink: 0,
            }}
        >
          {number}
        </span>
        <span className="font-heading font-medium text-[14px]" style={{ letterSpacing: "-0.01em" }}>
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

export function CodificadorWizard() {
  const { step, topo, hist, comp, tipoGrado, setStep } = useWizardStore();

  const isStep0Active = step === 0;
  const isStep1Active = step === 1;
  const isStep2Active = step === 2;
  const isStep3Active = step === 3;
  const isStep4Active = step === 4;

  const isStep0Done = step > 0 && !!topo;
  const isStep1Done = step > 1 && !!hist;
  const isStep2Done = step > 2 && !!comp;
  const isStep3Done = step > 3;

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <p
          className="font-mono uppercase text-muted mb-[0.4rem]"
          style={{
            fontSize: "10.5px",
            letterSpacing: ".14em",
          }}
        >
          Herramienta interactiva
        </p>

        <h2
          className="font-heading mb-3 text-primary"
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            lineHeight: 1.15,
          }}
        >
          Codificador paso a paso
        </h2>

        <p
          className="text-muted mb-8"
          style={{
            fontSize: "14.5px",
            maxWidth: "600px",
          }}
        >
          Selecciona cada campo en orden. El sistema aplica automáticamente las reglas A–K del PDF.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Steps column */}
          <div className="lg:col-span-3">
            <WizardStep number={0} title="Contexto de uso" isActive={isStep0Active} isDone={isStep0Done}>
              <ContextSelector />
            </WizardStep>

            <WizardStep number={1} title="Topografía — ¿Dónde se origina el tumor?" isActive={isStep1Active} isDone={isStep1Done}>
              <TopographySelector />
            </WizardStep>

            <WizardStep number={2} title="Tipo histológico — ¿Qué tipo celular?" isActive={isStep2Active} isDone={isStep2Done}>
              <HistologySelector />
            </WizardStep>

            <WizardStep number={3} title="Comportamiento — ¿Cómo actúa el tumor?" isActive={isStep3Active} isDone={isStep3Done}>
              <BehaviorSelector />
            </WizardStep>

            <WizardStep number={4} title={tipoGrado === "linaje" ? "Inmunofenotipo / Linaje celular" : "Grado / Diferenciación"} isActive={isStep4Active} isDone={step >= 4}>
              <GradeSelector />
            </WizardStep>
          </div>

          {/* Result panel column */}
          <div className="lg:col-span-2 xl:col-span-2">
            <ResultPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
