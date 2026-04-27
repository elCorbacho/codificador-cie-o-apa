import { describe, it, expect } from "vitest";
import type { CieoTopographyCode, CieoMorphologyCode } from "@/types/cieo";
import {
  filterByOrganSystem,
  filterByHistologicGroup,
  filterByBehaviorCode,
} from "../../../lib/cieo/filters";

const mockTopographyData: CieoTopographyCode[] = [
  {
    code: "C18.9",
    preferredTerm: "Colon, NOS",
    organSystem: "Digestive system",
  },
  {
    code: "C22.1",
    preferredTerm: "Higado",
    organSystem: "Digestive system",
  },
  {
    code: "C34.9",
    preferredTerm: "Pulmon, NOS",
    organSystem: "Respiratory system",
  },
  {
    code: "C50.9",
    preferredTerm: "Breast, NOS",
    organSystem: "Breast",
  },
];

const mockMorphologyData: CieoMorphologyCode[] = [
  {
    code: "8140",
    preferredTerm: "Adenocarcinoma",
    histologicGroup: "Adenocarcinomas",
  },
  {
    code: "8720",
    preferredTerm: "Melanoma",
    histologicGroup: "Melanomas",
  },
  {
    code: "8141",
    preferredTerm: "Adenocarcinoma, intestinal type",
    histologicGroup: "Adenocarcinomas",
  },
];

describe("filterByOrganSystem", () => {
  it("should return empty array for empty filter", () => {
    const results = filterByOrganSystem(mockTopographyData, "");
    expect(results).toEqual(mockTopographyData);
  });

  it("should filter by organ system case-insensitively", () => {
    const results = filterByOrganSystem(mockTopographyData, "digestive");
    expect(results).toHaveLength(2);
    expect(results.every((r) => r.organSystem.toLowerCase().includes("digestive"))).toBe(true);
  });

  it("should filter by partial organ system match", () => {
    const results = filterByOrganSystem(mockTopographyData, "Breast");
    expect(results).toHaveLength(1);
    expect(results[0].code).toBe("C50.9");
  });

  it("should return empty array when no matches", () => {
    const results = filterByOrganSystem(mockTopographyData, "xyz123");
    expect(results).toEqual([]);
  });
});

describe("filterByHistologicGroup", () => {
  it("should return all codes for empty filter", () => {
    const results = filterByHistologicGroup(mockMorphologyData, "");
    expect(results).toEqual(mockMorphologyData);
  });

  it("should filter by histologic group case-insensitively", () => {
    const results = filterByHistologicGroup(mockMorphologyData, "ADENO");
    expect(results).toHaveLength(2);
    expect(results.every((r) => r.histologicGroup.toLowerCase().includes("adeno"))).toBe(true);
  });

  it("should return empty array when no matches", () => {
    const results = filterByHistologicGroup(mockMorphologyData, "xyz123");
    expect(results).toEqual([]);
  });
});

describe("filterByBehaviorCode", () => {
  const mockWithBehavior: CieoMorphologyCode[] = [
    {
      code: "8140/3",
      preferredTerm: "Adenocarcinoma",
      histologicGroup: "Adenocarcinomas",
    },
    {
      code: "8140/6",
      preferredTerm: "Adenocarcinoma",
      histologicGroup: "Adenocarcinomas",
    },
    {
      code: "8140/9",
      preferredTerm: "Adenocarcinoma",
      histologicGroup: "Adenocarcinomas",
    },
  ];

  it("should return all codes for empty filter", () => {
    const results = filterByBehaviorCode(mockWithBehavior, "");
    expect(results).toEqual(mockWithBehavior);
  });

  it("should filter by behavior code exact match", () => {
    const results = filterByBehaviorCode(mockWithBehavior, "3");
    expect(results).toHaveLength(1);
    expect(results[0].code).toBe("8140/3");
  });

  it("should return empty array when no matches", () => {
    const results = filterByBehaviorCode(mockWithBehavior, "1");
    expect(results).toEqual([]);
  });
});
