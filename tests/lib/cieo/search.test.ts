import { describe, it, expect } from "vitest";
import type { CieoTopographyCode, CieoMorphologyCode, CieoSearchResult } from "@/types/cieo";
import {
  searchCieoTopography,
  searchCieoMorphology,
} from "../../../lib/cieo/search";

const mockTopographyData: CieoTopographyCode[] = [
  {
    code: "C18.9",
    preferredTerm: "Colon, NOS",
    synonyms: ["Intestine, large"],
    organSystem: "Digestive system",
  },
  {
    code: "C22.1",
    preferredTerm: "Higado",
    synonyms: ["Hígado", "hepatic"],
    organSystem: "Digestive system",
  },
  {
    code: "C34.9",
    preferredTerm: "Pulmon, NOS",
    synonyms: ["Lung"],
    organSystem: "Respiratory system",
  },
];

const mockMorphologyData: CieoMorphologyCode[] = [
  {
    code: "8140",
    preferredTerm: "Adenocarcinoma",
    synonyms: ["Adenoca"],
    histologicGroup: "Adenocarcinomas",
  },
  {
    code: "8141",
    preferredTerm: "Adenocarcinoma, intestinal type",
    synonyms: [],
    histologicGroup: "Adenocarcinomas",
  },
  {
    code: "8720",
    preferredTerm: "Melanoma",
    synonyms: [],
    histologicGroup: "Melanomas",
  },
];

describe("searchCieoTopography", () => {
  it("should return empty array for empty query", () => {
    const results = searchCieoTopography("", mockTopographyData);
    expect(results).toEqual([]);
  });

  it("should find exact code match with score 100", () => {
    const results = searchCieoTopography("C18.9", mockTopographyData);
    expect(results).toHaveLength(1);
    expect(results[0].code).toBe("C18.9");
    expect(results[0].matchedField).toBe("code");
    expect(results[0].score).toBe(100);
  });

  it("should find partial code match with score 80", () => {
    const results = searchCieoTopography("C18", mockTopographyData);
    expect(results.length).toBeGreaterThanOrEqual(1);
    const c18Result = results.find((r) => r.code === "C18.9");
    expect(c18Result).toBeDefined();
    expect(c18Result!.matchedField).toBe("code");
    expect(c18Result!.score).toBe(80);
  });

  it("should find preferred term match with score 60", () => {
    const results = searchCieoTopography("colon", mockTopographyData);
    expect(results.length).toBeGreaterThanOrEqual(1);
    const colonResult = results.find((r) => r.code === "C18.9");
    expect(colonResult).toBeDefined();
    expect(colonResult!.matchedField).toBe("preferredTerm");
    expect(colonResult!.score).toBe(60);
  });

  it("should find synonym match with score 40", () => {
    const results = searchCieoTopography("hepatic", mockTopographyData);
    expect(results.length).toBeGreaterThanOrEqual(1);
    const liverResult = results.find((r) => r.code === "C22.1");
    expect(liverResult).toBeDefined();
    expect(liverResult!.matchedField).toBe("synonyms");
    expect(liverResult!.score).toBe(40);
  });

  it("should be accent-insensitive when matching terms", () => {
    const results = searchCieoTopography("higado", mockTopographyData);
    expect(results.length).toBeGreaterThanOrEqual(1);
    const liverResult = results.find((r) => r.code === "C22.1");
    expect(liverResult).toBeDefined();
  });

  it("should rank exact code match higher than term match", () => {
    const results = searchCieoTopography("C18", mockTopographyData);
    // C18.9 should be at top due to exact code match
    expect(results[0].code).toBe("C18.9");
    expect(results[0].score).toBe(80);
  });

  it("should return results sorted by score descending", () => {
    const results = searchCieoTopography("C", mockTopographyData);
    if (results.length > 1) {
      for (let i = 0; i < results.length - 1; i++) {
        expect(results[i].score!).toBeGreaterThanOrEqual(results[i + 1].score!);
      }
    }
  });
});

describe("searchCieoMorphology", () => {
  it("should return empty array for empty query", () => {
    const results = searchCieoMorphology("", mockMorphologyData);
    expect(results).toEqual([]);
  });

  it("should find exact morphology code match with score 100", () => {
    const results = searchCieoMorphology("8140", mockMorphologyData);
    expect(results).toHaveLength(1);
    expect(results[0].code).toBe("8140");
    expect(results[0].matchedField).toBe("code");
    expect(results[0].score).toBe(100);
  });

  it("should find partial morphology code match with score 80", () => {
    const results = searchCieoMorphology("814", mockMorphologyData);
    expect(results.length).toBeGreaterThanOrEqual(1);
    const code8140 = results.find((r) => r.code === "8140");
    expect(code8140).toBeDefined();
    expect(code8140!.matchedField).toBe("code");
    expect(code8140!.score).toBe(80);
  });

  it("should find preferred term match with score 60", () => {
    const results = searchCieoMorphology("adenocarcinoma", mockMorphologyData);
    expect(results.length).toBeGreaterThanOrEqual(1);
    const adenoResult = results.find((r) => r.code === "8140");
    expect(adenoResult).toBeDefined();
    expect(adenoResult!.matchedField).toBe("preferredTerm");
    expect(adenoResult!.score).toBe(60);
  });

  it("should find synonym match with score 40", () => {
    const results = searchCieoMorphology("adenoca", mockMorphologyData);
    expect(results.length).toBeGreaterThanOrEqual(1);
    const adenoResult = results.find((r) => r.code === "8140");
    expect(adenoResult).toBeDefined();
    expect(adenoResult!.matchedField).toBe("synonyms");
    expect(adenoResult!.score).toBe(40);
  });

  it("should return results sorted by score descending", () => {
    const results = searchCieoMorphology("8", mockMorphologyData);
    if (results.length > 1) {
      for (let i = 0; i < results.length - 1; i++) {
        expect(results[i].score!).toBeGreaterThanOrEqual(results[i + 1].score!);
      }
    }
  });
});
