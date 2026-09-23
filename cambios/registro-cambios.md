# Registro de cambios — Frioleros

Este registro es append-only. Cada nueva modificación se añade al final con motivo, archivos e impacto.

---

## 2026-09-22 — Instalación de SUME + STDG

**Archivos afectados:** `entradas/`, `logica/`, `salidas/`, `contratos/`, `src/pages/`, `mapa-global/arquitectura.yaml`, `.sume`, `SUME-README.md`, `tsconfig.json`, `scripts/source-graph.mjs`, `scripts/update-sume-map.mjs`, `scripts/verify-source.mjs`, `scripts/sume-map-guard.mjs`, `scripts/sume-map-guard.test.mjs`, `scripts/verify-sume.mjs`, `package.json`, `.github/workflows/deploy.yml`, documentación de arquitectura y de fases.

**Motivo:** la auditoría detectó que la separación de responsabilidades y la detección de módulos huérfanos no bastaban para certificar SUME. Faltaban clasificación física, DOCBLOCKs, mapa vivo y verificación contra Git.

**Impacto:** los 72 módulos fuente se clasifican por función; `src/pages/` conserva las rutas Astro. El sitio y su contenido público no cambian por el traslado. La CI rechaza deriva del mapa y DOCBLOCKs ausentes. Los imports usan los mismos alias con nuevos destinos.

**Autor:** Codex, por encargo del usuario.

## 2026-09-22 — Cierre documental de la fase SUME

**Archivos afectados:** `docs/PLAN-DE-MEJORAS.md`, `docs/CONTRATO-MIGRACION-SUME.md`, `docs/AUDITORIA-ARQUITECTURA-Y-DISENO.md`, `docs/BITACORA.md`, `cambios/registro-cambios.md`.

**Motivo:** registrar el resultado de CI y GitHub Pages tras fusionar el PR #4, ausente cuando se redactó el contrato inicial.

**Impacto:** la fase 6 queda cerrada con evidencia reproducible; no cambia código ejecutable ni contenido de la web.

**Autor:** Codex, por encargo del usuario.

## 2026-09-22 — Referencia visual del oso A

**Archivos afectados:** `docs/brand/oso-simplificado-a-referencia.png`, `docs/brand/README.md`, `docs/PLAN-DE-MEJORAS.md`, `docs/BITACORA.md`, `cambios/registro-cambios.md`.

**Motivo:** convertir la dirección A elegida por el usuario en una referencia visual duradera para revisar el primer trazado SVG y el nombre de la marca.

**Impacto:** solo documentación y material de diseño. No cambia el logo ni los activos de la web publicada.

**Autor:** Codex, por encargo del usuario.

## 2026-09-23 — Publicación de la identidad A para web

**Archivos afectados:** `public/brand/`, `public/manifest.webmanifest`, `salidas/components/brand/BrandLogo.astro`, `salidas/styles/brand.css`, `salidas/layouts/BaseLayout.astro`, `scripts/verify-build.mjs`, `docs/brand/`, plan, auditoría y bitácora.

**Motivo:** sustituir el logo anterior, ilegible a tamaño pequeño, por la dirección de oso simplificado elegida por el usuario.

**Impacto:** cabecera, hero, favicon, manifiesto y tarjetas sociales usan una identidad coherente. El build valida dimensiones y el activo anterior se elimina.

**Autor:** Codex, por encargo del usuario.
