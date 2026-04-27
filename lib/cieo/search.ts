import type { CieoTopographyCode, CieoMorphologyCode, CieoSearchResult } from "@/types/cieo";
import { normalizeSearchTerm } from "./normalize";

/**
 * Search results sorted by score (descending)
 */
function sortByScore(results: CieoSearchResult[]): CieoSearchResult[] {
  return results.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
}

/**
 * Strips common clinical suffixes from terms for better matching.
 * Examples: "Colon, NOS" -> "Colon", "Higado SAI" -> "Higado"
 */
function stripClinicalSuffix(term: string): string {
  return term
    .replace(/,\s*NOS$/i, "")
    .replace(/\s+SAI$/i, "")
    .trim();
}

/**
 * Normalizes a term for comparison, stripping clinical suffixes first
 */
function normalizeTermForComparison(term: string): string {
  return normalizeSearchTerm(stripClinicalSuffix(term));
}

/**
 * Find matches in a single record's synonyms (exact match)
 */
function matchSynonymsExact(
  normalizedQuery: string,
  synonyms: string[] | undefined
): boolean {
  if (!synonyms || synonyms.length === 0) return false;
  return synonyms.some(
    (synonym) => normalizeSearchTerm(synonym) === normalizedQuery
  );
}

/**
 * Search CIE-O topography codes
 *
 * Scoring (per spec):
 * - Exact code match: 100
 * - Code prefix: 80
 * - Preferred term (exact, accent-insensitive): 60
 * - Preferred term (prefix): 40
 * - Synonym (exact, accent-insensitive): 40
 */
export function searchCieoTopography(
  query: string,
  data: CieoTopographyCode[]
): CieoSearchResult[] {
  if (!query.trim()) {
    return [];
  }

  const normalizedQuery = normalizeSearchTerm(query);
  const results: CieoSearchResult[] = [];

  for (const record of data) {
    // 1. Exact code match (highest priority)
    if (record.code === query) {
      results.push({
        code: record.code,
        type: "topografia",
        preferredTerm: record.preferredTerm,
        matchedField: "code",
        score: 100,
      });
      continue;
    }

    // 2. Prefix code match
    if (record.code.startsWith(query)) {
      results.push({
        code: record.code,
        type: "topografia",
        preferredTerm: record.preferredTerm,
        matchedField: "code",
        score: 80,
      });
      continue;
    }

    // 3. Exact preferred term match (accent-insensitive, suffix-stripped)
    if (normalizeTermForComparison(record.preferredTerm) === normalizedQuery) {
      results.push({
        code: record.code,
        type: "topografia",
        preferredTerm: record.preferredTerm,
        matchedField: "preferredTerm",
        score: 60,
      });
      continue;
    }

    // 4. Exact synonym match (accent-insensitive) - same score as term prefix
    if (matchSynonymsExact(normalizedQuery, record.synonyms)) {
      results.push({
        code: record.code,
        type: "topografia",
        preferredTerm: record.preferredTerm,
        matchedField: "synonyms",
        score: 40,
      });
      continue;
    }

    // 5. Term prefix match (accent-insensitive) - same score as synonym
    const normalizedPreferredTerm = normalizeSearchTerm(record.preferredTerm);
    if (normalizedPreferredTerm.startsWith(normalizedQuery)) {
      results.push({
        code: record.code,
        type: "topografia",
        preferredTerm: record.preferredTerm,
        matchedField: "preferredTerm",
        score: 40,
      });
      continue;
    }
  }

  return sortByScore(results);
}

/**
 * Search CIE-O morphology codes
 *
 * Scoring (per spec):
 * - Exact code match: 100
 * - Code prefix: 80
 * - Preferred term (exact, accent-insensitive): 60
 * - Preferred term (prefix): 40
 * - Synonym (exact, accent-insensitive): 40
 */
export function searchCieoMorphology(
  query: string,
  data: CieoMorphologyCode[]
): CieoSearchResult[] {
  if (!query.trim()) {
    return [];
  }

  const normalizedQuery = normalizeSearchTerm(query);
  const results: CieoSearchResult[] = [];

  for (const record of data) {
    // 1. Exact code match (highest priority)
    if (record.code === query) {
      results.push({
        code: record.code,
        type: "morfologia",
        preferredTerm: record.preferredTerm,
        matchedField: "code",
        score: 100,
      });
      continue;
    }

    // 2. Prefix code match
    if (record.code.startsWith(query)) {
      results.push({
        code: record.code,
        type: "morfologia",
        preferredTerm: record.preferredTerm,
        matchedField: "code",
        score: 80,
      });
      continue;
    }

    // 3. Exact preferred term match (accent-insensitive)
    if (normalizeTermForComparison(record.preferredTerm) === normalizedQuery) {
      results.push({
        code: record.code,
        type: "morfologia",
        preferredTerm: record.preferredTerm,
        matchedField: "preferredTerm",
        score: 60,
      });
      continue;
    }

    // 4. Exact synonym match (accent-insensitive) - same score as term prefix
    if (matchSynonymsExact(normalizedQuery, record.synonyms)) {
      results.push({
        code: record.code,
        type: "morfologia",
        preferredTerm: record.preferredTerm,
        matchedField: "synonyms",
        score: 40,
      });
      continue;
    }

    // 5. Term prefix match (accent-insensitive) - same score as synonym
    const normalizedPreferredTerm = normalizeSearchTerm(record.preferredTerm);
    if (normalizedPreferredTerm.startsWith(normalizedQuery)) {
      results.push({
        code: record.code,
        type: "morfologia",
        preferredTerm: record.preferredTerm,
        matchedField: "preferredTerm",
        score: 40,
      });
      continue;
    }
  }

  return sortByScore(results);
}
