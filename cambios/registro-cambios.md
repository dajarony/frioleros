# Registro de cambios — Frioleros

Este registro es append-only. Cada nueva modificación se añade al final con motivo, archivos e impacto.

---

## 2026-09-22 — Instalación de SUME + STDG

**Archivos afectados:** `entradas/`, `logica/`, `salidas/`, `contratos/`, `src/pages/`, `mapa-global/arquitectura.yaml`, `.sume`, `SUME-README.md`, `tsconfig.json`, `scripts/source-graph.mjs`, `scripts/update-sume-map.mjs`, `scripts/verify-source.mjs`, `scripts/sume-map-guard.mjs`, `scripts/sume-map-guard.test.mjs`, `scripts/verify-sume.mjs`, `package.json`, `.github/workflows/deploy.yml`, documentación de arquitectura y de fases.

**Motivo:** la auditoría detectó que la separación de responsabilidades y la detección de módulos huérfanos no bastaban para certificar SUME. Faltaban clasificación física, DOCBLOCKs, mapa vivo y verificación contra Git.

**Impacto:** los 72 módulos fuente se clasifican por función; `src/pages/` conserva las rutas Astro. El sitio y su contenido público no cambian por el traslado. La CI rechaza deriva del mapa y DOCBLOCKs ausentes. Los imports usan los mismos alias con nuevos destinos.

**Autor:** Codex, por encargo del usuario.
