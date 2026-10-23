import { expect, test } from "vitest";
import fs from "fs";
import path from "path";

const read = (file: string) => fs.readFileSync(path.resolve(__dirname, "..", file), "utf-8");

test("defines the approved clinical dark palette", () => {
  const css = read("app/globals.css");
  for (const [token, value] of Object.entries({
    canvas: "#141415", "surface-soft": "#2e3035", ink: "#f0f2f5",
    primary: "#00b24b", secondary: "#0075ff",
  })) expect(css).toContain(`--color-${token}: ${value}`);
});

test("separates dark code surfaces from foreground ink", () => {
  const css = read("app/globals.css");
  for (const selector of [".result-panel-root", ".code-surface"]) {
    expect(css.match(new RegExp(`${selector.replaceAll(".", "\\.")}\\s*\\{([^}]+)`, "s"))?.[1])
      .toContain("background: var(--color-surface-soft)");
  }
});

test("loads the requested Inter weights and fixes the visual theme", () => {
  const layout = read("app/layout.tsx");
  expect(layout).toContain('weight: ["600", "800"]');
  expect(layout).toContain('forcedTheme="dark"');
});
