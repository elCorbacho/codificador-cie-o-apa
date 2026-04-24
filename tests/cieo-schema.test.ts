/**
 * CIE-O Schema Validation Tests
 * Validates extracted data against Zod schemas
 */

import { describe, it, expect } from "vitest";
import { z } from "zod";
import топография from "../data/cieo-topografia.json";
import морфология from "../data/cieo-morfologia.json";
import comportamiento from "../data/cieo-comportamiento.json";
import grado from "../data/cieo-grado.json";

// Schemas (duplicated here for test isolation)
const cieoTopographyCodeSchema = z.object({
  code: z.string().min(1),
  preferredTerm: z.string().min(1),
  synonyms: z.array(z.string()).default([]),
  organSystem: z.string().min(1),
  notes: z.string().optional(),
});

const cieoMorphologyCodeSchema = z.object({
  code: z.string().min(1),
  preferredTerm: z.string().min(1),
  synonyms: z.array(z.string()).default([]),
  histologicGroup: z.string().min(1),
  notes: z.string().optional(),
});

const cieoBehaviorCodeSchema = z.object({
  code: z.string().min(1),
  preferredTerm: z.string().min(1),
  isLab: z.boolean(),
  notes: z.string().optional(),
});

const cieoGradeCodeSchema = z.object({
  code: z.string().min(1),
  preferredTerm: z.string().min(1),
  gradeType: z.enum(["differentiation", "lineage"]),
  notes: z.string().optional(),
});

describe("CIE-O Topography Schema", () => {
  it("validates all topography codes", () => {
    топография.forEach((code) => {
      expect(() => cieoTopographyCodeSchema.parse(code)).not.toThrow();
    });
  });

  it("has expected number of codes", () => {
    expect(топография.length).toBeGreaterThanOrEqual(130);
  });

  it("has required fields on every record", () => {
    топография.forEach((code) => {
      expect(code.code).toBeDefined();
      expect(code.preferredTerm).toBeDefined();
      expect(code.organSystem).toBeDefined();
      expect(code.synonyms).toBeDefined();
    });
  });

  it("has valid code format (starts with C)", () => {
    топография.forEach((code) => {
      expect(code.code.startsWith("C")).toBe(true);
    });
  });
});

describe("CIE-O Morphology Schema", () => {
  it("validates all morphology codes", () => {
    морфология.forEach((code) => {
      expect(() => cieoMorphologyCodeSchema.parse(code)).not.toThrow();
    });
  });

  it("has expected number of codes", () => {
    expect(морфология.length).toBeGreaterThanOrEqual(120);
  });

  it("has required fields on every record", () => {
    морфология.forEach((code) => {
      expect(code.code).toBeDefined();
      expect(code.preferredTerm).toBeDefined();
      expect(code.histologicGroup).toBeDefined();
      expect(code.synonyms).toBeDefined();
    });
  });

  it("has valid code format (4-digit number)", () => {
    морфология.forEach((code) => {
      expect(/^\d{4}$/.test(code.code)).toBe(true);
    });
  });
});

describe("CIE-O Behavior Schema", () => {
  it("validates all behavior codes", () => {
    comportamiento.forEach((code) => {
      expect(() => cieoBehaviorCodeSchema.parse(code)).not.toThrow();
    });
  });

  it("has 6 behavior codes", () => {
    expect(comportamiento.length).toBe(6);
  });

  it("has required fields on every record", () => {
    comportamiento.forEach((code) => {
      expect(code.code).toBeDefined();
      expect(code.preferredTerm).toBeDefined();
      expect(code.isLab).toBeDefined();
    });
  });

  it("has valid isLab values", () => {
    comportamiento.forEach((code) => {
      expect(typeof code.isLab).toBe("boolean");
    });
  });
});

describe("CIE-O Grade Schema", () => {
  it("validates all grade codes", () => {
    grado.forEach((code) => {
      expect(() => cieoGradeCodeSchema.parse(code)).not.toThrow();
    });
  });

  it("has 10 grade codes", () => {
    expect(grado.length).toBe(10);
  });

  it("has required fields on every record", () => {
    grado.forEach((code) => {
      expect(code.code).toBeDefined();
      expect(code.preferredTerm).toBeDefined();
      expect(code.gradeType).toBeDefined();
    });
  });

  it("has valid gradeType values", () => {
    grado.forEach((code) => {
      expect(["differentiation", "lineage"]).toContain(code.gradeType);
    });
  });
});