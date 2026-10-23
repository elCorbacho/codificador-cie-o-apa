import { expect, test, type Page } from "@playwright/test";

const sections = ["Arquitectura", "Entidad-Relación", "Reglas A-K", "Codificador", "Casos especiales"];

async function choose(page: Page, label: RegExp, option: RegExp) {
  await page.getByRole("combobox", { name: label }).click();
  await page.getByRole("option", { name: option }).click();
}

async function beginCoding(page: Page, group = /^Adenocarcinomas$/) {
  await page.getByRole("tab", { name: "Codificador", exact: true }).click();
  await choose(page, /Seleccionar contexto/, /Laboratorio de Anatomía Patológica/);
  await choose(page, /Seleccionar sistema/, /^Colon y recto$/);
  await choose(page, /Seleccionar sitio/, /^C18.0 — Ciego$/);
  await choose(page, /Seleccionar grupo/, group);
}

for (const width of [1024, 1280, 1440, 1920]) {
  test(`desktop clinical workspace at ${width}px`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    await expect(page.getByRole("tab", { name: "Arquitectura", exact: true })).toHaveAttribute("aria-selected", "true");
    await expect(page.locator("body")).toHaveCSS("background-color", "rgb(20, 20, 21)");
    await expect(page.getByRole("tablist")).toHaveAttribute("aria-orientation", "vertical");
    for (const section of sections) {
      await page.getByRole("tab", { name: section, exact: true }).click();
      await expect(page.getByRole("tabpanel")).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
    await page.getByRole("tab", { name: "Codificador", exact: true }).click();
    const summary = page.getByRole("region", { name: "Resumen de codificación" });
    await expect(summary).toHaveCSS("background-color", "rgb(46, 48, 53)");
    const summaryBox = await summary.boundingBox();
    const controlsBox = await page.locator(".coding-layout > div").first().boundingBox();
    expect(summaryBox!.x).toBeGreaterThanOrEqual(controlsBox!.x + controlsBox!.width);
    await page.screenshot({ path: testInfo.outputPath(`desktop-${width}.png`), fullPage: true });

    await beginCoding(page);
    await choose(page, /Seleccionar tipo histológico/, /^8140 — Adenocarcinoma SAI$/);
    await choose(page, /Seleccionar comportamiento/, /^\/3 — Maligno primario$/);
    await choose(page, /Seleccionar grado/, /^2 — Grado II/);
    await expect(page.locator(".result-panel-code")).toHaveText("C18.0 + 8140/32");
    await expect(summary).toContainText("Adenocarcinoma SAI de Ciego");
    await page.getByRole("button", { name: "Reiniciar codificación" }).click();
    await expect(page.locator(".result-panel-code")).toHaveAttribute("data-complete", "false");
    await expect(page.getByRole("combobox", { name: /Seleccionar sistema/ })).toBeDisabled();
  });
}

test("vertical navigation and selectors retain keyboard support", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("tab", { name: "Arquitectura", exact: true }).focus();
  await page.keyboard.press("ArrowDown");
  await expect(page.getByRole("tab", { name: "Entidad-Relación", exact: true })).toBeFocused();
  await page.keyboard.press("End");
  await expect(page.getByRole("tab", { name: "Casos especiales", exact: true })).toBeFocused();
  await page.getByRole("tab", { name: "Codificador", exact: true }).click();
  const context = page.getByRole("combobox", { name: /Seleccionar contexto/ });
  await context.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("listbox")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(context).toBeFocused();
  await expect(page.getByRole("listbox")).not.toBeVisible();
});

test("lineage and long clinical terms remain available", async ({ page }) => {
  await page.goto("/");
  await beginCoding(page, /^Linfomas$/);
  const longLabel = "9699 — Linfoma MALT (extraganglionar — Regla D)";
  await choose(page, /Seleccionar tipo histológico/, new RegExp(`^${longLabel.replace(/[()]/g, "\\$&")}$`));
  await choose(page, /Seleccionar comportamiento/, /^\/3 — Maligno primario$/);
  await expect(page.getByRole("heading", { name: "Inmunofenotipo / Linaje celular" })).toBeVisible();
  await choose(page, /Seleccionar grado/, /^6 — Célula B/);
  await expect(page.locator(".result-panel-code")).toHaveText("C18.0 + 9699/36");
  await expect(page.getByRole("region", { name: "Resumen de codificación" })).toContainText("Linfoma MALT (extraganglionar — Regla D)");
});

test("ERD header contrast survives shared palette changes", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("tab", { name: "Entidad-Relación", exact: true }).click();
  for (const label of ["GRUPO_HISTOLOGICO", "TOPOGRAFIA", "MORFOLOGIA", "MORFO_COMPORTAMIENTO", "CODIGO_GENERADO"]) {
    const ratio = await page.getByText(label, { exact: true }).evaluate((element) => {
      const style = getComputedStyle(element);
      const luminance = (color: string) => {
        const channels = color.match(/[\d.]+/g)!.slice(0, 3).map((v) => Number(v) / 255);
        const linear = channels.map((v) => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4);
        return linear[0] * .2126 + linear[1] * .7152 + linear[2] * .0722;
      };
      const foreground = luminance(style.color);
      const background = luminance(style.backgroundColor);
      return (Math.max(foreground, background) + .05) / (Math.min(foreground, background) + .05);
    });
    expect(ratio, `${label} normal-text contrast`).toBeGreaterThanOrEqual(4.5);
  }
});
