import { describe, it, expect } from "vitest";
import { normalizeSearchTerm } from "../../../lib/cieo/normalize";

describe("normalizeSearchTerm", () => {
  it("should remove accents from accented characters", () => {
    expect(normalizeSearchTerm("Café")).toBe("cafe");
  });

  it("should trim whitespace", () => {
    expect(normalizeSearchTerm("  Colón  ")).toBe("colon");
  });

  it("should lowercase uppercase input", () => {
    expect(normalizeSearchTerm("MAMA")).toBe("mama");
  });

  it("should handle ñ character", () => {
    expect(normalizeSearchTerm("Español")).toBe("espanol");
  });

  it("should handle empty string", () => {
    expect(normalizeSearchTerm("")).toBe("");
  });

  it("should handle combined normalization", () => {
    expect(normalizeSearchTerm("  Hígado  ")).toBe("higado");
  });

  it("should handle Spanish vowels with accents", () => {
    expect(normalizeSearchTerm("áéíóú")).toBe("aeiou");
    expect(normalizeSearchTerm("ÁÉÍÓÚ")).toBe("aeiou");
  });

  it("should handle multiple combining characters like ñ", () => {
    expect(normalizeSearchTerm("ñ")).toBe("n");
  });

  it("should handle numeric and special characters", () => {
    expect(normalizeSearchTerm("C18.9")).toBe("c18.9");
    expect(normalizeSearchTerm("8140/3")).toBe("8140/3");
  });
});
