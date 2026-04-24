# Skill Registry

Auto-generated skill registry for codificador_cie-o.
Created by sdd-init based on detected skills and project conventions.

## User Skills ( ~/.config/opencode/skills/ )

| Skill | Trigger Context |
|-------|-----------------|
| sdd-init | Initialize SDD context in any project |
| sdd-explore | Explore and investigate ideas before committing to a change |
| sdd-propose | Create a change proposal with intent, scope, and approach |
| sdd-spec | Write specifications with requirements and scenarios |
| sdd-design | Create technical design document with architecture decisions |
| sdd-tasks | Break down a change into an implementation task checklist |
| sdd-apply | Implement tasks from the change, writing actual code |
| sdd-verify | Validate that implementation matches specs, design, and tasks |
| sdd-archive | Sync delta specs to main specs and archive a completed change |
| sdd-onboard | Guided end-to-end walkthrough of the SDD workflow |
| skill-registry | Create or update the skill registry for the current project |
| go-testing | Go testing patterns for Gentleman.Dots, including Bubbletea TUI testing |
| branch-pr | PR creation workflow following issue-first enforcement system |
| issue-creation | Issue creation workflow following issue-first enforcement system |
| judgment-day | Parallel adversarial review protocol |
| skill-creator | Creates new AI agent skills following the Agent Skills spec |

## Project Conventions

- **AGENTS.md**: Project documentation at `/home/acorbacho/proyectos/codificador_CIE-O/AGENTS.md`
- **Stack**: Single HTML file → Next.js + React + TypeScript + Tailwind migration planned
- **Naming**: Components use PascalCase, files use kebab-case, internal code uses English identifiers
- **UI Language**: Spanish for user-facing labels, English for internal identifiers
- **Domain**: CIE-O / ICD-O coding for anatomical pathology

## Compact Rules

### CIE-O Data Handling
- All imported data must be validated with Zod schemas
- Search logic must be isolated in `lib/cieo/search.ts` — not inside components
- Never trust imported JSON blindly

### Search Normalization
```typescript
export function normalizeSearchTerm(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}
```

### State Management
- Zustand: for shared client state (filters, selected code, history, favorites)
- TanStack Query: for server/API state
- Local state: for simple UI state

### Quality Gates
Before considering a task complete, run:
```bash
npm run lint && npm test && npm run build
```

### Git Workflow
Branch names: `feature/cieo-search`, `fix/search-normalization`, etc.
Commit format: `feat: add CIE-O topography search`