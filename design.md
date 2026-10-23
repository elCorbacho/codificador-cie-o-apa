# Clinical desktop workspace

The CIE-O codifier uses a compact, dark application shell inspired by the supplied
[1win visual reference](https://getdesign.md/1win/design-md), adapted to clinical
coding rather than gaming. This is the project's visual source of truth.

## Scope and invariants

- Desktop first: verify 1024, 1280, 1440 and 1920px windows.
- Preserve all five sections, the original Arquitectura default and the existing
  cascading selectors. A new search feature is outside this visual adaptation.
- Keep clinical datasets, coding rules, store actions and generated codes intact.
- No casino branding, game artwork, promotions or decorative marketing heroes.
- Existing Spanish clinical labels remain Spanish. Technical documentation is English.

## Color roles

| Role | Token | Value |
| --- | --- | --- |
| Canvas, header, rail | `--color-canvas` | `#141415` |
| Panels and menus | `--color-surface-soft` | `#2e3035` |
| Recessed controls | `--color-surface-strong` | `#25272b` |
| Text | `--color-ink` | `#f0f2f5` |
| Secondary text | `--color-muted` | `#9aa1b1` |
| Dividers | `--color-hairline-soft` | `#2d2f33` |
| Panel edges | `--color-hairline` | `#3d4048` |
| Control outlines | `--color-border-strong` | `#757b88` |
| Primary action | `--color-primary` | `#00b24b` |
| Secondary action | `--color-secondary` | `#0075ff` |
| Accessible links/focus | `--color-accent` | `#80b8ff` |

Green and blue are the only structural accents. Clinical error and warning
messages retain explicit semantic colors and text; they must not become general
decoration. Domain codes use blue, green and neutral foregrounds with explicit
text labels, never color as the only identifier.

### Accessibility adaptations

The source's white-on-green pairing has only 2.81:1 contrast. Use black text on
green actions instead (7.47:1). Black on the blue fill is approximately 4.99:1;
links and small selected text use the lighter blue foreground token. Muted text
on the panel surface is approximately 5.10:1. Hairlines are decorative; interactive
control boundaries and focus indicators use the stronger tokens.

Disabled content may be dimmed, but enabled clinical descriptions must remain
readable. Do not truncate the selected histology description in the result panel.

## Typography, spacing and shape

- Inter 600 for functional text; Inter 800 for headings. Body: 14px / 1.4.
- Page titles: 33px / 1.1; panel headings: 20px / 1.2; step titles: 16px / 1.3.
- Metadata: 12–13px. Clinical code strings may keep IBM Plex Mono.
- Base spacing: 8px; controls: 8px × 12px; panels: 20–24px.
- Cards/panels: 16px radius; inputs: 8px; action buttons: 10px; badges: pills.
- Depth comes from surface and border changes, not heavy shadows or glowing text.

## Desktop layout

The compact header retains CIE-O identification and official-source provenance.
A sticky vertical icon rail exposes all five labeled sections. The main column
is fluid and bounded for comfortable reading on wide monitors.

The coding section keeps selectors on the left and a sticky summary on the right.
At 1024px, both columns must fit without clipping dropdowns or clinical labels.
At wider widths, increase breathing room rather than enlarging every control.
Tables and the entity diagram may scroll inside their own containers; the page
itself must not overflow horizontally. Below the desktop range, the existing
content remains usable with a stacked coding summary; no separate mobile
navigation or mobile-specific experience is introduced.

## Interaction and verification

- Preserve Radix tabs/selects, accessible names, focus and keyboard behavior.
- Vertical tabs use Up/Down arrows; controls remain reachable by Tab.
- Dropdown portals must render above the header and rail and fit their viewport.
- Keep visible selected, pressed, focus and disabled states; respect reduced motion.
- Check all sections, long clinical terms, the coding cascade, lineage and reset.
- Run `npm run lint`, `npm run typecheck`, `npm test` and `npm run build`.
- Record screenshots at 1024/1280/1440/1920; automated unit tests alone do not
  establish visual fidelity. The baseline `next lint` script failure is tracked
  separately and must not be presented as a passing gate.
