"use client";

import * as Select from "@radix-ui/react-select";
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useWizardStore } from "@/store/use-wizard-store";

const SISTEMAS: Record<string, { alerta?: string; topos: Array<{ c: string; d: string }> }> = {
  "Cavidad oral y faringe": {
    topos: [
      { c: "C00.9", d: "Labio SAI" }, { c: "C01.9", d: "Base de la lengua" },
      { c: "C02.9", d: "Lengua SAI" }, { c: "C03.9", d: "Encía SAI" },
      { c: "C04.9", d: "Suelo de la boca SAI" }, { c: "C05.9", d: "Paladar SAI" },
      { c: "C06.9", d: "Boca SAI" }, { c: "C07.9", d: "Glándula parótida" },
      { c: "C08.9", d: "Glándula salival mayor SAI" }, { c: "C09.9", d: "Amígdala SAI" },
      { c: "C10.9", d: "Orofaringe SAI" }, { c: "C11.9", d: "Nasofaringe SAI" },
      { c: "C12.9", d: "Seno piriforme" }, { c: "C13.9", d: "Hipofaringe SAI" },
    ],
  },
  "Esófago y estómago": {
    topos: [
      { c: "C15.0", d: "Esófago cervical" }, { c: "C15.1", d: "Esófago torácico" },
      { c: "C15.5", d: "Tercio inferior / unión GE" },
      { c: "C15.8", d: "Esófago — lesión que sobrepasa límites (Regla C)" },
      { c: "C15.9", d: "Esófago SAI" }, { c: "C16.0", d: "Cardias / unión gastroesofágica" },
      { c: "C16.1", d: "Fundus gástrico" }, { c: "C16.2", d: "Cuerpo gástrico" },
      { c: "C16.3", d: "Antro gástrico" }, { c: "C16.4", d: "Píloro" },
      { c: "C16.8", d: "Estómago — lesión que sobrepasa límites (Regla C)" },
      { c: "C16.9", d: "Estómago SAI" },
    ],
  },
  "Colon y recto": {
    topos: [
      { c: "C18.0", d: "Ciego" }, { c: "C18.1", d: "Apéndice" },
      { c: "C18.2", d: "Colon ascendente" }, { c: "C18.3", d: "Ángulo hepático" },
      { c: "C18.4", d: "Colon transverso" }, { c: "C18.5", d: "Ángulo esplénico" },
      { c: "C18.6", d: "Colon descendente" }, { c: "C18.7", d: "Colon sigmoides" },
      { c: "C18.9", d: "Colon SAI" }, { c: "C19.9", d: "Unión rectosigmoidea" },
      { c: "C20.9", d: "Recto SAI" }, { c: "C21.0", d: "Ano SAI" },
      { c: "C21.1", d: "Canal anal" },
    ],
  },
  "Hígado, vía biliar y páncreas": {
    topos: [
      { c: "C22.0", d: "Hígado" }, { c: "C22.1", d: "Vías biliares intrahepáticas" },
      { c: "C23.9", d: "Vesícula biliar" }, { c: "C24.0", d: "Vías biliares extrahepáticas" },
      { c: "C24.1", d: "Ampolla de Vater" }, { c: "C25.0", d: "Cabeza del páncreas" },
      { c: "C25.1", d: "Cuerpo del páncreas" }, { c: "C25.2", d: "Cola del páncreas" },
      { c: "C25.9", d: "Páncreas SAI" },
    ],
  },
  "Aparato respiratorio": {
    topos: [
      { c: "C30.0", d: "Fosa nasal" }, { c: "C31.0", d: "Seno maxilar" },
      { c: "C31.9", d: "Seno accesorio SAI" }, { c: "C32.0", d: "Glotis" },
      { c: "C32.1", d: "Supraglotis" }, { c: "C32.9", d: "Laringe SAI" },
      { c: "C33.9", d: "Tráquea" }, { c: "C34.0", d: "Bronquio principal" },
      { c: "C34.1", d: "Lóbulo superior del pulmón" }, { c: "C34.2", d: "Lóbulo medio del pulmón" },
      { c: "C34.3", d: "Lóbulo inferior del pulmón" }, { c: "C34.9", d: "Pulmón SAI" },
      { c: "C38.4", d: "Pleura" },
    ],
  },
  "Huesos y tejidos blandos": {
    topos: [
      { c: "C40.0", d: "Huesos largos MMSS" }, { c: "C40.2", d: "Huesos largos MMII (fémur/tibia/peroné)" },
      { c: "C41.2", d: "Columna vertebral" }, { c: "C41.4", d: "Pelvis ósea" },
      { c: "C49.0", d: "Tejidos blandos cabeza/cuello" }, { c: "C49.1", d: "Tejidos blandos MMSS" },
      { c: "C49.2", d: "Tejidos blandos MMII" }, { c: "C49.3", d: "Tejidos blandos tórax" },
      { c: "C49.4", d: "Tejidos blandos abdomen" }, { c: "C49.5", d: "Tejidos blandos pelvis" },
      { c: "C49.9", d: "Tejido conjuntivo y blando SAI" },
    ],
  },
  "Piel": {
    topos: [
      { c: "C44.0", d: "Piel del labio" }, { c: "C44.1", d: "Piel del párpado" },
      { c: "C44.2", d: "Piel del oído externo" }, { c: "C44.3", d: "Piel de la cara SAI" },
      { c: "C44.4", d: "Piel del cuero cabelludo y cuello" }, { c: "C44.5", d: "Piel del tronco" },
      { c: "C44.6", d: "Piel extremidad superior" }, { c: "C44.7", d: "Piel extremidad inferior" },
      { c: "C44.9", d: "Piel SAI" },
    ],
  },
  "Mama": {
    topos: [
      { c: "C50.0", d: "Pezón y aréola" }, { c: "C50.1", d: "Cuadrante superoexterno" },
      { c: "C50.2", d: "Cuadrante superointerno" }, { c: "C50.3", d: "Cuadrante inferointerno" },
      { c: "C50.4", d: "Cuadrante inferoexterno" }, { c: "C50.5", d: "Cola axilar" },
      { c: "C50.6", d: "Región central" }, { c: "C50.9", d: "Mama SAI" },
    ],
  },
  "Ginecológico": {
    topos: [
      { c: "C51.9", d: "Vulva SAI" }, { c: "C52.9", d: "Vagina" },
      { c: "C53.0", d: "Endocérvix" }, { c: "C53.1", d: "Exocérvix" },
      { c: "C53.9", d: "Cérvix uteri SAI" }, { c: "C54.1", d: "Endometrio" },
      { c: "C54.2", d: "Miometrio" }, { c: "C54.9", d: "Cuerpo uterino SAI" },
      { c: "C55.9", d: "Útero SAI" }, { c: "C56.9", d: "Ovario" },
      { c: "C57.0", d: "Trompa de Falopio" }, { c: "C58.9", d: "Placenta" },
    ],
  },
  "Genitourinario masculino": {
    topos: [
      { c: "C60.9", d: "Pene SAI" }, { c: "C61.9", d: "Próstata" },
      { c: "C62.9", d: "Testículo SAI" }, { c: "C63.0", d: "Epidídimo" },
      { c: "C64.9", d: "Riñón (parénquima)" }, { c: "C65.9", d: "Pelvis renal" },
      { c: "C66.9", d: "Uréter" }, { c: "C67.9", d: "Vejiga urinaria SAI" },
      { c: "C68.0", d: "Uretra" },
    ],
  },
  "Ojo y SNC": {
    topos: [
      { c: "C69.2", d: "Retina" }, { c: "C69.3", d: "Coroides" },
      { c: "C69.6", d: "Órbita SAI" }, { c: "C70.0", d: "Meninges cerebrales" },
      { c: "C70.1", d: "Meninges espinales" }, { c: "C71.0", d: "Cerebro SAI" },
      { c: "C71.1", d: "Lóbulo frontal" }, { c: "C71.2", d: "Lóbulo temporal" },
      { c: "C71.4", d: "Lóbulo occipital" }, { c: "C71.6", d: "Cerebelo" },
      { c: "C71.7", d: "Tronco encefálico" }, { c: "C71.9", d: "Cerebro SAI" },
      { c: "C72.0", d: "Médula espinal" },
    ],
  },
  "Glándulas endocrinas": {
    topos: [
      { c: "C73.9", d: "Tiroides" }, { c: "C74.0", d: "Corteza suprarrenal" },
      { c: "C74.1", d: "Médula suprarrenal" }, { c: "C75.0", d: "Glándula paratiroides" },
      { c: "C75.1", d: "Hipófisis" }, { c: "C75.3", d: "Glándula pineal" },
    ],
  },
  "Hematopoyético (leucemias) — Regla E": {
    alerta: "Regla E: todas las leucemias y síndromes mieloproliferativos → C42.1 obligatorio.",
    topos: [
      { c: "C42.0", d: "Sangre periférica" }, { c: "C42.1", d: "Médula ósea ★ (leucemias, SMD, SMP — Regla E)" },
      { c: "C42.2", d: "Bazo" }, { c: "C42.4", d: "Sistema hematopoyético SAI" },
    ],
  },
  "Ganglios linfáticos (linfomas) — Regla D": {
    alerta: "Regla D: linfomas ganglionares → C77._. Linfomas extraganglionares → sitio de origen.",
    topos: [
      { c: "C77.0", d: "Ganglio cabeza/cuello" }, { c: "C77.1", d: "Ganglio mediastínico/intratorácico" },
      { c: "C77.2", d: "Ganglio intraabdominal" }, { c: "C77.3", d: "Ganglio axilar / MMSS" },
      { c: "C77.4", d: "Ganglio inguinal / MMII" }, { c: "C77.5", d: "Ganglio pélvico" },
      { c: "C77.8", d: "Ganglios — múltiples regiones (Regla D)" }, { c: "C77.9", d: "Ganglio SAI" },
      { c: "C80.9", d: "Primario desconocido (linfoma sin localización)" },
    ],
  },
};

const sistemaKeys = Object.keys(SISTEMAS);

export function TopographySelector() {
  const { ctx, topo, topoDesc, setTopo, setStep } = useWizardStore();
  const [sistema, setSistema] = useState("");
  const [alerta, setAlerta] = useState("");

  const isDisabled = !ctx;

  const handleSistemaChange = (value: string) => {
    setSistema(value);
    if (value) {
      const data = SISTEMAS[value];
      setAlerta(data.alerta || "");
    } else {
      setAlerta("");
    }
  };

  const handleTopoChange = (value: string) => {
    if (!value) return;
    const [c, d] = value.split("|");
    setTopo(c, d);
    setStep(2);
  };

  const currentTopos = sistema ? SISTEMAS[sistema]?.topos || [] : [];

  return (
    <div>
      {/* Sistema selector */}
      <div className="mb-3">
        <Select.Root value={sistema} onValueChange={handleSistemaChange} disabled={isDisabled}>
          <Select.Trigger
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
            style={{
              border: "1.5px solid var(--color-hairline)",
              background: "var(--color-surface-soft)",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              fontSize: "14px",
              cursor: isDisabled ? "not-allowed" : "pointer",
              opacity: isDisabled ? 0.45 : 1,
              appearance: "none",
              WebkitAppearance: "none",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23888' d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 14px center",
            }}
          >
            <Select.Value placeholder="-- Sistema orgánico --" />
            <Select.Icon>
              <ChevronDown className="w-4 h-4" />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content
              className="bg-canvas border border-hairline rounded-lg shadow-lg overflow-hidden z-50"
              position="popper"
              style={{ width: "var(--radix-select-trigger-width)", maxHeight: "300px" }}
            >
              <Select.Viewport className="p-1">
                {sistemaKeys.map((key) => (
                  <Select.Item
                    key={key}
                    value={key}
                    className="flex items-center px-3 py-2.5 rounded-md text-sm cursor-pointer hover:bg-azul-l data-[highlighted]:bg-azul-l outline-none"
                    style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
                  >
                    <Select.ItemText>{key}</Select.ItemText>
                    <Select.ItemIndicator className="ml-auto">
                      <Check className="w-4 h-4 text-azul" />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>

      {/* Site selector */}
      <div className="mb-3">
        <Select.Root onValueChange={handleTopoChange} disabled={isDisabled || !sistema}>
          <Select.Trigger
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
            style={{
              border: "1.5px solid var(--color-hairline)",
              background: "var(--color-surface-soft)",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
              fontSize: "14px",
              cursor: isDisabled || !sistema ? "not-allowed" : "pointer",
              opacity: isDisabled || !sistema ? 0.45 : 1,
              appearance: "none",
              WebkitAppearance: "none",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23888' d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 14px center",
            }}
          >
            <Select.Value placeholder="-- Sitio anatómico --" />
            <Select.Icon>
              <ChevronDown className="w-4 h-4" />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content
              className="bg-canvas border border-hairline rounded-lg shadow-lg overflow-hidden z-50"
              position="popper"
              style={{ width: "var(--radix-select-trigger-width)", maxHeight: "300px" }}
            >
              <Select.Viewport className="p-1">
                {currentTopos.map((t) => (
                  <Select.Item
                    key={t.c}
                    value={`${t.c}|${t.d}`}
                    className="flex items-center px-3 py-2.5 rounded-md text-sm cursor-pointer hover:bg-azul-l data-[highlighted]:bg-azul-l outline-none"
                    style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
                  >
                    <Select.ItemText>
                      {t.c} — {t.d}
                    </Select.ItemText>
                    <Select.ItemIndicator className="ml-auto">
                      <Check className="w-4 h-4 text-azul" />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>

      {/* Alert box */}
      {alerta && (
        <div
          className="rounded-lg p-3 mb-3 text-sm"
          style={{
            background: "#FFF4DC",
            border: "1px solid #F4C96A",
            color: "#7B4F10",
            display: "block",
          }}
        >
          {alerta}
        </div>
      )}

      <p className="text-xs" style={{ color: "var(--color-muted)", fontSize: "12px", lineHeight: 1.5 }}>
        Regla A: preferir sitio específico sobre SAI. Regla C: usar .8 si el tumor rebasa límites.
      </p>
    </div>
  );
}
