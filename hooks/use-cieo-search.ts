import { useQuery } from "@tanstack/react-query";
import type { CieoSearchResult } from "@/types/cieo";

// Stub implementation - will be replaced with actual search
export function useCieoSearch(query: string, type: "topografia" | "morfologia" | "all") {
  return useQuery<CieoSearchResult[]>({
    queryKey: ["cieo-search", query, type],
    queryFn: async () => {
      // TODO: Implement actual search logic
      if (!query.trim()) return [];
      return [];
    },
    enabled: query.trim().length > 0,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
