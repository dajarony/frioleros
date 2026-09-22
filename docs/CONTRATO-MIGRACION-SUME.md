# Contrato de migración SUME + STDG para Frioleros

Estado: **borrador técnico**, 2026-09-22. Este contrato define el trabajo necesario; no declara que la migración esté hecha ni aprueba una nueva arquitectura por cuenta del grupo.

## Objetivo y alcance

Instalar la estructura, trazabilidad y guardia de `dajarony-sume` sin alterar el HTML publicado ni las rutas de GitHub Pages. Al tratarse de un sitio Astro estático, la migración organiza contenido de entrada, reglas puras, componentes de salida y tipos; no crea controladores HTTP, repositorios ni capas de servicio artificiales.

## Mapa de responsabilidades

| Responsabilidad | Destino SUME | Fuente actual |
| --- | --- | --- |
| Contenido editorial y configuración de entrada | `entradas/contenido/` | `src/content/` |
| Reglas puras de rutas y estados derivados | `logica/` | `src/lib/` y lógica derivada en contenido |
| Componentes, layouts y estilos renderizados | `salidas/` | `src/components/`, `src/layouts/`, `src/styles/` |
| Tipos e interfaces | `contratos/` | `src/types/` |
| Registro de cambios append-only | `cambios/registro-cambios.md` | Nuevo |
| Mapa de módulos y rutas | `mapa-global/arquitectura.yaml` | Nuevo |

`src/pages/` permanece como adaptador de rutas exigido por Astro. Cada página debe limitarse a componer salida y declarar su ruta; esta excepción se registra en `.sume` y en el mapa.

## Invariantes

1. Cada archivo trasladado tiene un DOCBLOCK SUME con nombre, tipo, entradas, acciones y salidas. En `.astro` el bloque se sitúa dentro del frontmatter para respetar la sintaxis del framework.
2. `mapa-global/arquitectura.yaml` registra cada módulo fuente seguido por Git exactamente una vez, con dependencias y propietario. El guardia compara el mapa con `git ls-files` y falla por entrada ausente, obsoleta o duplicada.
3. `.sume` declara las raíces y extensiones rastreadas; no se excluyen módulos solo para hacer pasar la verificación.
4. `cambios/registro-cambios.md` es append-only. Cada migración posterior añade motivo, archivos afectados e impacto.
5. Las rutas públicas, textos, metadatos y contenido generado no cambian por el traslado. `npm run check`, `npm run verify:source`, `npm run build` y `npm run verify` pasan.

## Aceptación

El diff de HTML generado antes y después coincide salvo marcas técnicas inevitables de empaquetado; el mapa y guardia pasan también con tres casos negativos (módulo nuevo sin entrada, entrada obsoleta y duplicado). Un PR independiente permite revisar las renombradas y resolver cualquier incompatibilidad de Astro antes de mezclar en `main`.
