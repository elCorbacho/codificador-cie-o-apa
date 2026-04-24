# CIE-O Data Files

Extracted from `codificador_CIE-O.html` embedded data (lines 1274-1501).

## Files

| File | Description | Records |
|------|-------------|---------|
| `cieo-topografia.json` | Topography codes (anatomic sites) | 142 codes |
| `cieo-morfologia.json` | Morphology codes (histologic types) | 121 codes |
| `cieo-comportamiento.json` | Behavior codes | 6 codes |
| `cieo-grado.json` | Grade/lineage codes | 10 codes |

## Schema

All files follow the TypeScript interfaces defined in `types/cieo.ts` and are validated with Zod schemas in `lib/validations/cieo.schema.ts`.

### Topography

```json
{
  "code": "C18.9",
  "preferredTerm": "Colon SAI",
  "synonyms": [],
  "organSystem": "Colon y recto",
  "notes": "(Regla C)"
}
```

### Morphology

```json
{
  "code": "8140",
  "preferredTerm": "Adenocarcinoma SAI",
  "synonyms": [],
  "histologicGroup": "Adenocarcinomas",
  "notes": "(Regla H)"
}
```

### Behavior

```json
{
  "code": "3",
  "preferredTerm": "Maligno primario",
  "isLab": true
}
```

### Grade

```json
{
  "code": "1",
  "preferredTerm": "Grado I — bien diferenciado",
  "gradeType": "differentiation"
}
```

## Notes

- Inline rule hints (Regla C, Regla D, Regla E, Regla H) are preserved in the `notes` field
- `synonyms` defaults to `[]` for every entry
- alerta fields from hematologic systems are added to code `notes`