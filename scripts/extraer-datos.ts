/**
 * Data Extraction Script
 * Parses embedded JS data from codificador_CIE-O.html and outputs JSON files
 * 
 * Run: npx tsx scripts/extraer-datos.ts
 */

import { readFileSync, writeFileSync } from "fs";
import { z } from "zod";

// Schemas for validation
const cieoTopographyCodeSchema = z.object({
  code: z.string().min(1),
  preferredTerm: z.string().min(1),
  synonyms: z.array(z.string()).default([]),
  organSystem: z.string().min(1),
  notes: z.string().optional(),
});

const cieoMorphologyCodeSchema = z.object({
  code: z.string().min(1),
  preferredTerm: z.string().min(1),
  synonyms: z.array(z.string()).default([]),
  histologicGroup: z.string().min(1),
  notes: z.string().optional(),
});

const cieoBehaviorCodeSchema = z.object({
  code: z.string().min(1),
  preferredTerm: z.string().min(1),
  isLab: z.boolean(),
  notes: z.string().optional(),
});

const cieoGradeCodeSchema = z.object({
  code: z.string().min(1),
  preferredTerm: z.string().min(1),
  gradeType: z.enum(["differentiation", "lineage"]),
  notes: z.string().optional(),
});

type TopographyRaw = { c: string; d: string };
type MorphologyRaw = { c: string; d: string };
type BehaviorRaw = { v: string; d: string; lab: boolean };
type GradeRaw = { v: string; d: string };

function extractTopography(html: string): any[] {
  const result: any[] = [];
  
  // Find SISTEMAS block start
  const sistemasStart = html.indexOf("const SISTEMAS = ");
  if (sistemasStart === -1) {
    console.error("SISTEMAS not found!");
    return result;
  }
  
  // Get just the SISTEMAS part
  const sistemasEnd = html.indexOf("\n\nconst GRUPOS_HIST", sistemasStart);
  const sistemasBlock = html.substring(sistemasStart, sistemasEnd);
  
  // Use a simple global replace approach
  // Pattern to find all {c:"...",d:"..."} objects along with the system name before them
  const lineByLine = sistemasBlock.split('\n');
  let currentOrganSystem = "";
  
  for (const line of lineByLine) {
    // Check if this line defines a new organ system
    const systemMatch = line.match(/^\s*"([^"]+)":\s*\{/);
    if (systemMatch) {
      currentOrganSystem = systemMatch[1];
      continue;
    }
    
    // Check for alerta field
    const alertaMatch = line.match(/alerta:\s*"([^"]+)"/);
    if (alertaMatch && currentOrganSystem) {
      // Store alerta for following codes
      result.forEach((r) => {
        if (r.organSystem === currentOrganSystem && !r.notes) {
          r.notes = alertaMatch[1];
        }
      });
    }
    
    // Extract codes from this line
    const codeMatch = line.match(/\{c:"([^"]+)",d:"([^"]+)"\}/g);
    if (codeMatch && currentOrganSystem) {
      const codeRegex = /\{c:"([^"]+)",d:"([^"]+)"\}/g;
      let m;
      while ((m = codeRegex.exec(line)) !== null) {
        const code = m[1];
        const desc = m[2];
        
        // Check for inline rules
        let notes: string | undefined;
        if (desc.includes("Regla")) {
          const ruleMatch = desc.match(/\(Regla [A-Z]\)/);
          if (ruleMatch) notes = ruleMatch[0];
        }
        
        result.push({
          code,
          preferredTerm: desc,
          synonyms: [],
          organSystem: currentOrganSystem,
          notes: notes || undefined,
        });
      }
    }
  }
  
  console.log(`Extracted ${result.length} topography codes`);
  return result;
}

function extractMorphology(html: string): any[] {
  const result: any[] = [];
  
  // Extract GRUPOS_HIST block
  const gruposMatch = html.match(/const GRUPOS_HIST = \{([\s\S]*?)\n\};/);
  if (!gruposMatch) {
    throw new Error("GRUPOS_HIST block not found");
  }
  
  const groupsBlock = gruposMatch[1];
  // Match pattern: "Group Name": [...]
  const groupRegex = /"([^"]+)":\s*\[([^\]]+)\]/g;
  
  let match;
  while ((match = groupRegex.exec(groupsBlock)) !== null) {
    const histologicGroup = match[1];
    const codesBlock = match[2];
    
    // Extract individual codes: {c:"XXXX",d:"Description"}
    const codeRegex = /\{c:"([^"]+)",d:"([^"]+)"\}/g;
    let codeMatch;
    while ((codeMatch = codeRegex.exec(codesBlock)) !== null) {
      const code = codeMatch[1];
      const desc = codeMatch[2];
      
      // Check for inline rules (Regla D, Regla E, Regla H)
      let notes: string | undefined;
      if (desc.includes("Regla")) {
        const ruleMatch = desc.match(/\(Regla [A-Z]\)/);
        if (ruleMatch) {
          notes = ruleMatch[0];
        }
      }
      
      // Check for URGENCIA markers
      if (desc.includes("★URGENCIA")) {
        notes = notes ? `${notes} ★URGENCIA` : "★URGENCIA";
      }
      if (desc.includes("★EXCEPCIÓN")) {
        notes = notes ? `${notes} ★EXCEPCIÓN` : "★EXCEPCIÓN";
      }
      
      result.push({
        code,
        preferredTerm: desc,
        synonyms: [],
        histologicGroup,
        notes: notes || undefined,
      });
    }
  }
  
  return result;
}

function extractBehavior(html: string): any[] {
  const result: any[] = [];
  
  // Extract COMP_TODOS block
  const compMatch = html.match(/const COMP_TODOS = \[([\s\S]*?)\];/);
  if (!compMatch) {
    throw new Error("COMP_TODOS block not found");
  }
  
  const codesBlock = compMatch[1];
  // Extract: {v:"X",d:"Description",lab:boolean}
  const codeRegex = /\{v:"([^"]+)",d:"([^"]+)",lab:(true|false)\}/g;
  
  let match;
  while ((match = codeRegex.exec(codesBlock)) !== null) {
    result.push({
      code: match[1],
      preferredTerm: match[2],
      isLab: match[3] === "true",
    });
  }
  
  return result;
}

function extractGrade(html: string): any[] {
  const result: any[] = [];
  
  // Extract GRADO_DIFERENCIACION block
  const gradoMatch = html.match(/const GRADO_DIFERENCIACION = \[([\s\S]*?)\];/);
  if (!gradoMatch) {
    throw new Error("GRADO_DIFERENCIACION block not found");
  }
  
  const codesBlock = gradoMatch[1];
  // Extract: {v:"X",d:"Description"}
  const codeRegex = /\{v:"([^"]+)",d:"([^"]+)"\}/g;
  
  let match;
  while ((match = codeRegex.exec(codesBlock)) !== null) {
    result.push({
      code: match[1],
      preferredTerm: match[2],
      gradeType: "differentiation",
    });
  }
  
  // Extract GRADO_LINAJE block
  const linajeMatch = html.match(/const GRADO_LINAJE = \[([\s\S]*?)\];/);
  if (!linajeMatch) {
    throw new Error("GRADO_LINAJE block not found");
  }
  
  const linajeBlock = linajeMatch[1];
  const linajeRegex = /\{v:"([^"]+)",d:"([^"]+)"\}/g;
  
  while ((match = linajeRegex.exec(linajeBlock)) !== null) {
    result.push({
      code: match[1],
      preferredTerm: match[2],
      gradeType: "lineage",
    });
  }
  
  return result;
}

function main() {
  console.log("🔄 Reading codificador_CIE-O.html...");
  const html = readFileSync("codificador_CIE-O.html", "utf-8");
  
  console.log("📦 Extracting topography codes...");
  const topography = extractTopography(html);
  console.log(`   → ${topography.length} topography codes`);
  
  console.log("📦 Extracting morphology codes...");
  const morphology = extractMorphology(html);
  console.log(`   → ${morphology.length} morphology codes`);
  
  console.log("📦 Extracting behavior codes...");
  const behavior = extractBehavior(html);
  console.log(`   → ${behavior.length} behavior codes`);
  
  console.log("📦 Extracting grade codes...");
  const grade = extractGrade(html);
  console.log(`   → ${grade.length} grade codes`);
  
  // Validate each array
  console.log("✅ Validating schemas...");
  try {
    topography.forEach((t) => cieoTopographyCodeSchema.parse(t));
    console.log("   ✓ Topography schema valid");
  } catch (e: any) {
    console.error("   ✗ Topography schema error:", e.message);
    process.exit(1);
  }
  
  try {
    morphology.forEach((m) => cieoMorphologyCodeSchema.parse(m));
    console.log("   ✓ Morphology schema valid");
  } catch (e: any) {
    console.error("   ✗ Morphology schema error:", e.message);
    process.exit(1);
  }
  
  try {
    behavior.forEach((b) => cieoBehaviorCodeSchema.parse(b));
    console.log("   ✓ Behavior schema valid");
  } catch (e: any) {
    console.error("   ✗ Behavior schema error:", e.message);
    process.exit(1);
  }
  
  try {
    grade.forEach((g) => cieoGradeCodeSchema.parse(g));
    console.log("   ✓ Grade schema valid");
  } catch (e: any) {
    console.error("   ✗ Grade schema error:", e.message);
    process.exit(1);
  }
  
  // Write JSON files
  console.log("💾 Writing JSON files...");
  writeFileSync("data/cieo-topografia.json", JSON.stringify(topography, null, 2));
  writeFileSync("data/cieo-morfologia.json", JSON.stringify(morphology, null, 2));
  writeFileSync("data/cieo-comportamiento.json", JSON.stringify(behavior, null, 2));
  writeFileSync("data/cieo-grado.json", JSON.stringify(grade, null, 2));
  
  console.log("✅ Extraction complete!");
  console.log(`   data/cieo-topografia.json: ${topography.length} codes`);
  console.log(`   data/cieo-morfologia.json: ${morphology.length} codes`);
  console.log(`   data/cieo-comportamiento.json: ${behavior.length} codes`);
  console.log(`   data/cieo-grado.json: ${grade.length} codes`);
}

main();