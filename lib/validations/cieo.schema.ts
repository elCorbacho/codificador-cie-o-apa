/**
 * CIE-O Zod Validation Schemas
 * Used to validate extracted data from embedded JS objects
 */

import { z } from "zod";

export const cieoTopographyCodeSchema = z.object({
  code: z.string().min(1),
  preferredTerm: z.string().min(1),
  synonyms: z.array(z.string()).default([]),
  organSystem: z.string().min(1),
  notes: z.string().optional(),
});

export const cieoMorphologyCodeSchema = z.object({
  code: z.string().min(1),
  preferredTerm: z.string().min(1),
  synonyms: z.array(z.string()).default([]),
  histologicGroup: z.string().min(1),
  notes: z.string().optional(),
});

export const cieoBehaviorCodeSchema = z.object({
  code: z.string().min(1),
  preferredTerm: z.string().min(1),
  isLab: z.boolean(),
  notes: z.string().optional(),
});

export const cieoGradeCodeSchema = z.object({
  code: z.string().min(1),
  preferredTerm: z.string().min(1),
  gradeType: z.enum(["differentiation", "lineage"]),
  notes: z.string().optional(),
});

// Array schemas for bulk validation
export const cieoTopografiaArraySchema = z.array(cieoTopographyCodeSchema);
export const cieoMorfologiaArraySchema = z.array(cieoMorphologyCodeSchema);
export const cieoComportamientoArraySchema = z.array(cieoBehaviorCodeSchema);
export const cieoGradoArraySchema = z.array(cieoGradeCodeSchema);

// Type exports
export type CieoTopographyCodeInput = z.infer<typeof cieoTopographyCodeSchema>;
export type CieoMorphologyCodeInput = z.infer<typeof cieoMorphologyCodeSchema>;
export type CieoBehaviorCodeInput = z.infer<typeof cieoBehaviorCodeSchema>;
export type CieoGradeCodeInput = z.infer<typeof cieoGradeCodeSchema>;