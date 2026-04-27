import { useQuery } from "@tanstack/react-query";
import type { CieoSearchResult } from "@/types/cieo";
import { searchCieoTopography, searchCieoMorphology } from "@/lib/cieo/search";
import {
  cieoTopographyCodeSchema,
  cieoMorphologyCodeSchema,
} from "@/lib/validations/cieo.schema";
import топографияData from "../data/cieo-topografia.json";
import морфологияData from "../data/cieo-morfologia.json";

// Safe parse at module level — logs error and returns empty array on failure
const топография = (() => {
  const result = cieoTopographyCodeSchema.array().safeParse(топографияData);
  if (!result.success) {
    console.error("[use-cieo-search] topography data validation failed:", result.error);
    return [];
  }
  return result.data;
})();

const морфология = (() => {
  const result = cieoMorphologyCodeSchema.array().safeParse(морфологияData);
  if (!result.success) {
    console.error("[use-cieo-search] morphology data validation failed:", result.error);
    return [];
  }
  return result.data;
})();

export function useCieoSearch(
  query: string,
  type: "topografia" | "morfologia" | "all"
) {
  return useQuery<CieoSearchResult[]>({
    queryKey: ["cieo-search", query, type],
    queryFn: async () => {
      if (!query.trim()) return [];

      const trimmedQuery = query.trim();
      if (trimmedQuery.length < 2) return [];

      try {
        if (type === "topografia") {
          return searchCieoTopography(trimmedQuery, топография);
        }

        if (type === "morfologia") {
          return searchCieoMorphology(trimmedQuery, морфология);
        }

        const topoResults = searchCieoTopography(trimmedQuery, топография);
        const morfoResults = searchCieoMorphology(trimmedQuery, морфология);

        return [...topoResults, ...morfoResults].sort(
          (a, b) => (b.score ?? 0) - (a.score ?? 0) || a.code.localeCompare(b.code)
        );
      } catch (err) {
        console.error("[use-cieo-search] search error:", err);
        return [];
      }
    },
    enabled: query.trim().length >= 2,
    staleTime: 1000 * 60 * 5,
  });
}
