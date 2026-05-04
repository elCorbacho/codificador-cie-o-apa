import type { ReactNode } from "react";
import { CodeBox } from "./code-box";
import { InfoCards } from "./info-cards";

interface ArquitecturaSectionProps {
  id?: string;
}

export function ArquitecturaSection({ id }: ArquitecturaSectionProps) {
  return (
    <div className="py-20 lg:py-32" id={id}>
      <div className="container mx-auto px-4">
        <div className="mb-16 lg:mb-24 max-w-[720px]">
          <p className="eyebrow mb-2 text-muted">
            Estructura fundamental
          </p>

          <h2 className="section-title mb-6 font-heading text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] tracking-[-0.03em] text-ink">
            Código de 10 caracteres
          </h2>

          <p className="section-description text-body text-[18px] leading-relaxed text-muted/90">
            Cada diagnóstico oncológico genera exactamente dos códigos simultáneos: un código de
            topografía y un código de morfología. Juntos suman 10 caracteres que definen con precisión clínica el hallazgo.
          </p>
        </div>

        <div className="space-y-20 lg:space-y-32">
          <section aria-labelledby="code-box-heading">
            <h3 id="code-box-heading" className="sr-only">Estructura del código</h3>
            <CodeBox />
          </section>
          
          <section aria-labelledby="ejes-heading">
            <div className="mb-10">
              <h3 id="ejes-heading" className="font-heading text-2xl tracking-tight">Desglose de ejes</h3>
              <p className="text-muted text-sm mt-1">Los componentes que forman la anatomía del código.</p>
            </div>
            <InfoCards />
          </section>
        </div>
      </div>
    </div>
  );
}
