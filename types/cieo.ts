/**
 * CIE-O Domain Types
 * Extracted from codificador_CIE-O.html embedded data (lines 1274-1501)
 */

export type CieoCodeType = "topografia" | "morfologia";

export interface CieoTopographyCode {
  code: string;
  preferredTerm: string;
  synonyms?: string[];
  organSystem: string;
  notes?: string;
}

export interface CieoMorphologyCode {
  code: string;
  preferredTerm: string;
  synonyms?: string[];
  histologicGroup: string;
  notes?: string;
}

export interface CieoBehaviorCode {
  code: string;
  preferredTerm: string;
  isLab: boolean;
  notes?: string;
}

export interface CieoGradeCode {
  code: string;
  preferredTerm: string;
  gradeType: "differentiation" | "lineage";
  notes?: string;
}

export interface CieoSearchResult {
  code: string;
  type: CieoCodeType;
  preferredTerm: string;
  matchedField?: string;
  score?: number;
}