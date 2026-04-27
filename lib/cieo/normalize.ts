/**
 * Normalizes a search term for accent-insensitive matching.
 * - Trims whitespace
 * - Converts to lowercase
 * - Strips diacritics using NFD normalization
 */
export function normalizeSearchTerm(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}
