import { create } from "zustand";
import type { CieoSearchResult, CieoCodeType } from "@/types/cieo";

interface CieoState {
  searchQuery: string;
  searchType: CieoCodeType | "all";
  results: CieoSearchResult[];
  isSearching: boolean;
  setSearchQuery: (query: string) => void;
  setSearchType: (type: CieoCodeType | "all") => void;
  setResults: (results: CieoSearchResult[]) => void;
  setIsSearching: (isSearching: boolean) => void;
  clearResults: () => void;
}

export const useCieoStore = create<CieoState>((set) => ({
  searchQuery: "",
  searchType: "all",
  results: [],
  isSearching: false,
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSearchType: (type) => set({ searchType: type }),
  setResults: (results) => set({ results }),
  setIsSearching: (isSearching) => set({ isSearching }),
  clearResults: () => set({ results: [] }),
}));
