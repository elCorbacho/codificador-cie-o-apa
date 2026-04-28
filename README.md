# Codificador CIE-O-3

[![License: PolyForm Noncommercial](https://img.shields.io/badge/License-PolyForm%20Noncommercial%201.0.0-orange)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-brightgreen?logo=github)](https://pages.github.com/)

Aplicación web para **codificación anatomopatológica con CIE-O-3.1**, construida con
**Next.js App Router** y export estático para GitHub Pages.

El proyecto reúne:

- explicación de la **arquitectura del código CIE-O-3**,
- diagrama **entidad–relación** del modelo de datos,
- resumen de **reglas A–K**,
- un **codificador paso a paso** para topografía, histología, comportamiento y grado,
- y una sección de **casos especiales** basada en la normativa.

## Estado del proyecto

- :white_check_mark: Home documental con tabs para Arquitectura, ERD, Reglas, Codificador y Casos especiales.
- :white_check_mark: Codificador guiado con estado en **Zustand**.
- :white_check_mark: Datos normalizados desde archivos JSON locales.
- :white_check_mark: Validación tipada con **TypeScript strict** y **Zod**.
- :white_check_mark: Tests unitarios con **Vitest**.
- :white_check_mark: Deploy configurado para **GitHub Pages** con `output: 'export'`.

## Stack técnico

| Tecnología | Propósito |
|------------|-----------|
| Next.js 16 | App Router + static export |
| React 19 | UI framework |
| TypeScript (strict) | Type safety |
| Tailwind CSS 4 | Styling |
| Radix UI | Tabs y selects accesibles |
| Zustand | Estado del wizard |
| Zod | Validación |
| Vitest | Tests unitarios |
| Playwright | Revisión E2E / visual |

## Estructura

```text
app/                          # Entrypoints App Router
components/cieo/             # Secciones funcionales del dominio
components/layout/           # Header, tabs y shell general
components/ui/               # Primitivas UI
data/                        # JSON fuente para topografía, histología, etc.
lib/cieo/                    # Búsqueda, filtros y utilidades del dominio
lib/validations/             # Esquemas Zod
scripts/                     # Extracción/regeneración de datos
store/                       # Estado global del codificador (Zustand)
types/                       # Tipos del dominio
.github/workflows/deploy.yml # Deploy a GitHub Pages
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run lint` | Linting con ESLint |
| `npm run typecheck` | Verificación de tipos |
| `npm test` | Tests unitarios |
| `npm run test:watch` | Tests en modo watch |
| `npm run build` | Build estático para export a `out/` |

## Datos y regeneración

Los catálogos del dominio viven en `data/*.json`.

Para regenerarlos desde la fuente HTML:

```bash
npx tsx scripts/extraer-datos.ts
```

## Despliegue en GitHub Pages

El proyecto publica un export estático en `out/` mediante GitHub Actions.

### Flujo

1. Push a la rama `main`.
2. El workflow `.github/workflows/deploy.yml` ejecuta `npm ci` y `npm run build`.
3. Se sube `./out` como artifact de Pages.
4. GitHub Pages publica el sitio bajo el subpath del repo.

### Configuración clave

- `output: 'export'`
- `basePath: '/codificador-cie-o-apa'`
- `images.unoptimized: true`

## License

Este proyecto está bajo **PolyForm Noncommercial License 1.0.0**.

Ver [LICENSE](LICENSE) para más detalles.
