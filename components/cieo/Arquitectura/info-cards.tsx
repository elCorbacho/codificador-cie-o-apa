import type { ReactNode } from "react";

interface InfoCardProps {
  accentColor: string;
  title: string;
  children: ReactNode;
  extra?: ReactNode;
}

function InfoCard({ accentColor, title, children, extra }: InfoCardProps) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-5">
        <div
          data-testid="topography-dot"
          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
          style={{ background: accentColor }}
        />
        <h3 className="font-heading text-[1.1rem] font-semibold leading-[1.2] text-on-surface">
          {title}
        </h3>
      </div>
      {children}
      {extra}
    </div>
  );
}

export function InfoCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      {/* Topography card - Span 7 */}
      <div className="lg:col-span-7">
        <InfoCard accentColor="var(--color-primary)" title="Eje 1 — Topografía">
          <p className="mb-5 text-[14px] leading-relaxed text-on-surface-variant">
            Indica el <strong>sitio de origen</strong> del tumor. Mismo conjunto C00–C80 que la CIE-10,
            pero para todas las neoplasias (no solo malignas).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <table className="mb-0 w-full text-[13px]">
              <tbody>
                <tr>
                  <td className="font-mono text-primary pr-4 pb-2 font-medium">C</td>
                  <td className="pb-2 text-on-surface-variant">Prefijo fijo</td>
                </tr>
                <tr>
                  <td className="font-mono text-primary pr-4 pb-2 font-medium">XX</td>
                  <td className="pb-2 text-on-surface-variant">Localización (órgano)</td>
                </tr>
                <tr>
                  <td className="font-mono text-primary pr-4 pb-2 font-medium">.X</td>
                  <td className="pb-2 text-on-surface-variant">Sublocalización</td>
                </tr>
              </tbody>
            </table>
            <div className="bg-surface-container rounded-xl p-4 text-[13px]">
              <p className="font-semibold mb-2 text-on-surface">Códigos especiales:</p>
              <ul className="space-y-1.5 text-on-surface-variant">
                <li><code className="text-primary font-semibold">C42.1</code> = médula ósea</li>
                <li><code className="text-primary font-semibold">C77._</code> = ganglios linfáticos</li>
              </ul>
            </div>
          </div>
        </InfoCard>
      </div>

      {/* Histology card - Span 5 */}
      <div className="lg:col-span-5">
        <InfoCard accentColor="var(--color-secondary)" title="Tipo histológico">
          <p className="mb-4 text-[13.5px] text-on-surface-variant">
            El tipo celular que se transformó en neoplásico. Rangos M8000–M9989.
          </p>
          <div className="max-h-[200px] overflow-y-auto pr-2">
            <table className="mb-0 w-full text-[12px] border-separate border-spacing-y-1">
              <tbody>
                <tr>
                  <td className="font-mono font-semibold text-secondary pr-3">8000–8004</td>
                  <td className="text-on-surface-variant">Neoplasias SAI</td>
                </tr>
                <tr>
                  <td className="font-mono font-semibold text-secondary pr-3">8010–8084</td>
                  <td className="text-on-surface-variant">Carcinomas epiteliales</td>
                </tr>
                <tr>
                  <td className="font-mono font-semibold text-secondary pr-3">8140–8389</td>
                  <td className="text-on-surface-variant">Adenocarcinomas</td>
                </tr>
                <tr>
                  <td className="font-mono font-semibold text-secondary pr-3">8720–8790</td>
                  <td className="text-on-surface-variant">Melanocíticos</td>
                </tr>
                <tr>
                  <td className="font-mono font-semibold text-secondary pr-3">8800–8990</td>
                  <td className="text-on-surface-variant">Tejidos blandos</td>
                </tr>
                <tr>
                  <td className="font-mono font-semibold text-secondary pr-3">9590–9699</td>
                  <td className="text-on-surface-variant">Linfomas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </InfoCard>
      </div>

      {/* Behavior card - Span 6 */}
      <div className="lg:col-span-6">
        <InfoCard accentColor="var(--color-error)" title="Comportamiento (/X)">
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className="text-left py-3 font-medium text-on-surface-variant uppercase tracking-wider text-[10px]">Dígito</th>
                  <th className="text-left py-3 font-medium text-on-surface-variant uppercase tracking-wider text-[10px]">Significado</th>
                  <th className="text-left py-3 font-medium text-on-surface-variant uppercase tracking-wider text-[10px]">Registro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                <tr>
                  <td className="py-3 font-mono font-bold text-secondary">/0</td>
                  <td className="py-3 text-on-surface-variant">Benigno</td>
                  <td className="py-3 text-on-surface-variant">—</td>
                </tr>
                <tr>
                  <td className="py-3 font-mono font-bold text-ambar">/1</td>
                  <td className="py-3 text-on-surface-variant">Incierto / borderline</td>
                  <td className="py-3 text-on-surface-variant">—</td>
                </tr>
                <tr>
                  <td className="py-3 font-mono font-bold text-primary">/2</td>
                  <td className="py-3 text-on-surface-variant">In situ / no invasor</td>
                  <td className="py-3 text-primary">✓</td>
                </tr>
                <tr>
                  <td className="py-3 font-mono font-bold text-error">/3</td>
                  <td className="py-3 font-medium text-on-surface">Maligno primario</td>
                  <td className="py-3 text-error">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </InfoCard>
      </div>

      {/* Grade card - Span 6 */}
      <div className="lg:col-span-6">
        <InfoCard accentColor="var(--color-ambar)" title="Grado / Linaje">
          <p className="text-[13px] text-on-surface-variant mb-5">
            Tumores sólidos: diferenciación. Hematología: linaje celular.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl p-4 bg-surface-container border border-outline-variant">
              <span className="block text-[11px] font-bold text-ambar uppercase tracking-tight mb-3">Diferenciación</span>
              <div className="space-y-1 font-mono text-[12px] leading-relaxed">
                <span className="text-on-surface">1</span> → bien dif.<br />
                <span className="text-on-surface">2</span> → mod. dif.<br />
                <span className="text-on-surface">3</span> → pobre dif.<br />
                <span className="text-on-surface">4</span> → indiferenciado
              </div>
            </div>
            <div className="rounded-xl p-4 bg-surface-container border border-outline-variant">
              <span className="block text-[11px] font-bold text-primary uppercase tracking-tight mb-3">Linaje Hema</span>
              <div className="space-y-1 font-mono text-[12px] leading-relaxed">
                <span className="text-on-surface">5</span> → célula T<br />
                <span className="text-on-surface">6</span> → célula B<br />
                <span className="text-on-surface">7</span> → célula nula<br />
                <span className="text-on-surface">8</span> → célula NK
              </div>
            </div>
          </div>
        </InfoCard>
      </div>
    </div>
  );
}