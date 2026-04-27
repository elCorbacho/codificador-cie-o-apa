import type { ReactNode } from "react";

interface RuleProps {
  letter: string;
  badgeColor: string;
  title: string;
  description: string;
  example?: string;
}

function RuleItem({ letter, badgeColor, title, description, example }: RuleProps) {
  return (
    <div className="flex gap-4 py-4 border-b border-linea" style={{ borderBottom: "1px solid var(--linea)" }}>
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center font-code font-semibold text-base flex-shrink-0"
        style={{
          width: "34px",
          height: "34px",
          borderRadius: "8px",
          background: badgeColor,
          color: "#fff",
          fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)",
          fontSize: "15px",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {letter}
      </div>
      <div className="flex-1">
        <div className="font-medium text-sm mb-0.5" style={{ fontSize: "14px" }}>
          {title}
        </div>
        <div className="text-sm mb-1.5" style={{ fontSize: "13px", color: "var(--gris-m)", lineHeight: 1.5 }}>
          {description}
        </div>
        {example && (
          <span
            className="font-code inline-block px-2.5 py-1 rounded text-xs"
            style={{
              fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)",
              fontSize: "11.5px",
              background: "var(--gris)",
              borderRadius: "5px",
              color: "var(--azul)",
            }}
          >
            {example}
          </span>
        )}
      </div>
    </div>
  );
}

export function ReglasGrid() {
  const topoRules = [
    {
      letter: "A",
      badgeColor: "var(--azul)",
      title: "Localizaciones mal definidas",
      description:
        "Si el diagnóstico no especifica tejido de origen, usar el tejido específico del índice alfabético — no C76 (SAI).",
      example: "Carcinoma del brazo → C44.6 (piel), no C76.4",
    },
    {
      letter: "B",
      badgeColor: "var(--azul)",
      title: "Prefijos (peri-, para-, pre-...)",
      description:
        "Localización modificada por prefijo no listado → C76 (mal definida), salvo que el tipo tumoral indique tejido específico.",
      example: "Tumor peripancreático → C48.0 (retroperitoneo)",
    },
    {
      letter: "C",
      badgeColor: "var(--azul)",
      title: "Tumor que rebasa límites",
      description:
        "Tumor en dos o más subcategorías contiguas sin punto de origen determinable → subcategoría .8",
      example: "Carcinoma esofágico cervicotorácico → C15.8",
    },
    {
      letter: "D",
      badgeColor: "var(--teal)",
      title: "Linfomas — código topográfico especial",
      description:
        "Ganglionares → C77._. Extraganglionares → sitio de origen. Múltiples regiones → C77.8. Sin localización → C80.9.",
      example: "Linfoma MALT gástrico → C16.9  ·  Linfoma ganglionar → C77.9",
    },
    {
      letter: "E",
      badgeColor: "var(--teal)",
      title: "Leucemias — siempre C42.1",
      description:
        "TODAS las leucemias → C42.1 (médula ósea). Excepción: sarcoma mieloide (9930/3) → localización del depósito.",
      example: "LMA → C42.1  ·  Sarcoma mieloide en ganglio → C77.9",
    },
  ];

  const morfoRules = [
    {
      letter: "F",
      badgeColor: "var(--coral)",
      title: "Sistema matricial de comportamiento",
      description:
        "Usar comportamiento correcto aunque el término exacto no aparezca en CIE-O. La matriz permite cualquier combinación. El patólogo tiene la última palabra.",
      example: "Cordoma benigno → 9370/0 (aunque no esté listado)",
    },
    {
      letter: "G",
      badgeColor: "var(--ambar)",
      title: "Grado: asignar el MAYOR",
      description:
        "Si el diagnóstico indica dos niveles de grado, usar el mayor. Los dígitos de linaje 5–8 prevalecen sobre diferenciación 1–4.",
      example: "Mod. dif. con áreas pobremente dif. → grado 3",
    },
    {
      letter: "H",
      badgeColor: "var(--coral)",
      title: "Morfología asociada a localización",
      description:
        "Usar código topo sugerido entre paréntesis si el diagnóstico no indica localización. Si hay localización indicada, usarla aunque difiera del código sugerido.",
      example: "Basocelular sin loc. → C44._  ·  Con loc. distinta → usar esa",
    },
    {
      letter: "J",
      badgeColor: "var(--coral)",
      title: "Diagnósticos morfológicos compuestos",
      description:
        "Si el término compuesto no aparece, invertir el orden de las raíces de las palabras.",
      example: "Mixofibrosarcoma → buscar Fibromixosarcoma (8811/3)",
    },
    {
      letter: "K",
      badgeColor: "var(--coral)",
      title: "Múltiples términos morfológicos",
      description:
        "Si un tumor tiene dos adjetivos con códigos distintos y no hay código único, usar el numéricamente mayor (generalmente más específico).",
      example: "Carcinoma escamoso de células transicionales → 8120/3",
    },
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <p
          className="font-code uppercase"
          style={{
            fontFamily: "var(--font-code, 'IBM Plex Mono', monospace)",
            fontSize: "10.5px",
            letterSpacing: ".14em",
            color: "var(--gris-m)",
            marginBottom: ".4rem",
          }}
        >
          Directrices oficiales — §4.1 Tabla 14 del PDF
        </p>

        <h2
          className="font-heading mb-3"
          style={{
            fontFamily: "var(--font-heading, 'DM Serif Display', serif)",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            lineHeight: 1.15,
            color: "var(--azul)",
          }}
        >
          Reglas de codificación A–K
        </h2>

        <p
          style={{
            color: "var(--gris-m)",
            fontSize: "14.5px",
            maxWidth: "600px",
            marginBottom: "2rem",
          }}
        >
          El PDF establece 10 reglas oficiales (no existe Regla I, intencionalmente). Cada regla aplica a situaciones específicas de codificación.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Topography rules */}
          <div
            className="rounded-[14px] border p-7 bg-blanco"
            style={{ background: "var(--blanco)", border: "1px solid var(--linea)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--azul)" }} />
              <h3
                className="font-heading"
                style={{
                  fontFamily: "var(--font-heading, 'DM Serif Display', serif)",
                  fontSize: "1.15rem",
                  lineHeight: 1.2,
                }}
              >
                Reglas de topografía
              </h3>
            </div>
            {topoRules.map((rule, i) => (
              <RuleItem key={rule.letter} {...rule} />
            ))}
          </div>

          {/* Morphology rules */}
          <div
            className="rounded-[14px] border p-7 bg-blanco"
            style={{ background: "var(--blanco)", border: "1px solid var(--linea)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--coral)" }} />
              <h3
                className="font-heading"
                style={{
                  fontFamily: "var(--font-heading, 'DM Serif Display', serif)",
                  fontSize: "1.15rem",
                  lineHeight: 1.2,
                }}
              >
                Reglas de morfología
              </h3>
            </div>
            {morfoRules.map((rule, i) => (
              <RuleItem key={rule.letter} {...rule} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
