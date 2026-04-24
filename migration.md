# Migration Plan - Codificador CIE-O APA

## Overview

This document tracks the migration from a single self-contained HTML file to a modern Next.js + React + TypeScript application.

**Current state**: Single HTML file (`codificador_CIE-O.html`) with embedded CSS, JS, and data.

---

## Phase 1: Extract Embedded Data 🔲

**Goal**: Convert embedded JS objects to structured JSON files.

### Tasks
- [ ] Extract `SISTEMAS` → `data/cieo-topografia.json`
- [ ] Extract `GRUPOS_HIST` → `data/cieo-morfologia.json`
- [ ] Extract `COMP_TODOS` → `data/cieo-comportamiento.json`
- [ ] Extract `GRADO_DIFERENCIACION` + `GRADO_LINAJE` → `data/cieo-grado.json`
- [ ] Create Zod schemas for validation
- [ ] Commit: `feat: extract embedded data to JSON files`

### Data Format

**Topography** (`data/cieo-topografia.json`):
```json
{
  "code": "C18.9",
  "preferredTerm": "Colon, NOS",
  "synonyms": [],
  "organSystem": "Digestive system",
  "anatomicalGroup": "Colon"
}
```

**Morphology** (`data/cieo-morfologia.json`):
```json
{
  "code": "8140",
  "preferredTerm": "Adenocarcinoma SAI",
  "synonyms": [],
  "behaviorCode": "3",
  "histologicGroup": "Adenocarcinomas"
}
```

**Behavior** (`data/cieo-comportamiento.json`):
```json
{
  "code": "3",
  "preferredTerm": "Maligno primario",
  "isLab": true
}
```

**Grade** (`data/cieo-grado.json`):
```json
{
  "code": "3",
  "preferredTerm": "Grado III / indiferenciado",
  "gradeType": "differentiation"
}
```

---

## Phase 2: Create Next.js Project Structure 🔲

**Goal**: Bootstrap Next.js application with TypeScript, Tailwind, and shadcn/ui.

### Tasks
- [ ] Create Next.js project with App Router
- [ ] Configure TypeScript, Tailwind CSS
- [ ] Set up shadcn/ui components
- [ ] Install and configure Vitest for testing
- [ ] Create `types/cieo.ts` with domain types
- [ ] Create `lib/cieo/normalize.ts` (search normalization)
- [ ] Create `lib/cieo/search.ts` (basic search)
- [ ] Create `lib/cieo/filters.ts` (filter functions)
- [ ] Commit: `feat: bootstrap Next.js project with TypeScript`

---

## Phase 3: Implement Search with TDD 🔲

**Goal**: Implement business logic with test-driven development.

### Tasks
- [ ] Write tests for `lib/cieo/normalize.ts`
  - Accent-insensitive search
  - Case-insensitive search
  - Trim whitespace
- [ ] Write tests for `lib/cieo/search.ts`
  - Exact code matching
  - Partial code matching
  - Preferred term matching
  - Synonym matching
- [ ] Write tests for `lib/cieo/filters.ts`
  - Filter by organ system
  - Filter by histologic group
  - Filter by behavior code
- [ ] Implement functions to pass tests
- [ ] Commit: `test: add TDD tests for search logic`
- [ ] Commit: `feat: implement search, normalize, and filters`

### Quality Gates
```bash
npm run lint && npm test && npm run build
```

---

## Commit History

| # | Commit | Phase |
|---|--------|-------|
| 1 | `feat: extract embedded data to JSON files` | Phase 1 |
| 2 | `feat: bootstrap Next.js project with TypeScript` | Phase 2 |
| 3 | `test: add TDD tests for search logic` | Phase 3 |
| 4 | `feat: implement search, normalize, and filters` | Phase 3 |

---

## Notes

- **Strict TDD Mode**: Will be enabled when Vitest is installed in Phase 2
- **Data source**: Current data is a representative sample (~130 topography, ~150 morphology codes), not the complete CIE-O-3 catalogue
- **Vercel deploy**: Configured after Phase 3 is complete

---

*Last updated: 2026-04-24*