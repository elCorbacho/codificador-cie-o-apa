import { CodeBox } from "./code-box";
import { InfoCards } from "./info-cards";

export function ArquitecturaSection() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <p
          className="font-code uppercase text-muted"
          style={{
            fontSize: "10.5px",
            letterSpacing: ".14em",
            marginBottom: ".4rem",
          }}
        >
          Estructura fundamental
        </p>

        <h2
          className="font-heading mb-3 text-ink"
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            lineHeight: 1.15,
          }}
        >
          Código de 10 caracteres
        </h2>

        <p
          className="text-muted"
          style={{
            fontSize: "14.5px",
            maxWidth: "600px",
            marginBottom: "2rem",
          }}
        >
          Cada diagnóstico oncológico genera exactamente dos códigos simultáneos: un código de
          topografía y un código de morfología. Juntos suman 10 caracteres.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            <CodeBox />
          </div>
          <div className="lg:col-span-1">
            <InfoCards />
          </div>
        </div>
      </div>
    </div>
  );
}
