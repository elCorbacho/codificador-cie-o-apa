import type { CieoTopographyCode, CieoMorphologyCode } from "@/types/cieo";

/**
 * Normalizes a string for case-insensitive comparison
 */
function normalizeForFilter(value: string): string {
  return value.toLowerCase().trim();
}

/**
 * Filters topography codes by organ system.
 * Matching is case-insensitive and partial.
 */
export function filterByOrganSystem(
  codes: CieoTopographyCode[],
  organSystem: string
): CieoTopographyCode[] {
  if (!organSystem.trim()) {
    return codes;
  }

  const normalizedFilter = normalizeForFilter(organSystem);

  return codes.filter((code) =>
    normalizeForFilter(code.organSystem).includes(normalizedFilter)
  );
}

/**
 * Filters morphology codes by histologic group.
 * Matching is case-insensitive and partial.
 */
export function filterByHistologicGroup(
  codes: CieoMorphologyCode[],
  group: string
): CieoMorphologyCode[] {
  if (!group.trim()) {
    return codes;
  }

  const normalizedFilter = normalizeForFilter(group);

  return codes.filter((code) =>
    normalizeForFilter(code.histologicGroup).includes(normalizedFilter)
  );
}

/**
 * Filters morphology codes by behavior code.
 * The behavior is the suffix after "/" in the morphology code (e.g., "8140/3" has behavior "3").
 */
export function filterByBehaviorCode(
  codes: CieoMorphologyCode[],
  behavior: string
): CieoMorphologyCode[] {
  if (!behavior.trim()) {
    return codes;
  }

  return codes.filter((code) => {
    // Morphology codes like "8140/3" have behavior after "/"
    const parts = code.code.split("/");
    if (parts.length === 2) {
      return parts[1] === behavior;
    }
    return false;
  });
}
