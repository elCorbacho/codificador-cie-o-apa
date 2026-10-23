import { afterEach, expect, test, vi } from "vitest";

afterEach(() => vi.unstubAllEnvs());

async function configAt(prefix: string | undefined) {
  vi.stubEnv("NEXT_PUBLIC_BASE_PATH", prefix);
  vi.resetModules();
  return (await import("../next.config")).default;
}

test("an unset deployment prefix keeps the original local root", async () => {
  const config = await configAt(undefined);
  expect(config.basePath).toBe("");
  expect(config.output).toBe("export");
});

test("local static builds preserve root-path behavior", async () => {
  const config = await configAt("");
  expect(config.basePath ?? "").toBe("");
  expect(config.output).toBe("export");
  expect(config.images?.unoptimized).toBe(true);
});

test("Pages builds prefix application and asset URLs with the repository path", async () => {
  const config = await configAt("/codificador-cie-o-apa");
  expect(config.basePath).toBe("/codificador-cie-o-apa");
  expect(config.output).toBe("export");
  expect(config.images?.unoptimized).toBe(true);
});
