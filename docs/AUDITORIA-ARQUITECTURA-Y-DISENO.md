# Auditoría de arquitectura y diseño de Frioleros

Fecha: 2026-09-22. Alcance inicial: el código de `main` antes de la migración SUME y los cambios de saneamiento de la portada. El sitio es Astro estático; no tiene API, base de datos ni módulos de servicio en tiempo de ejecución. **Estado posterior:** la fase SUME se implementó en una rama separada; el hallazgo P1 siguiente describe el estado anterior a esa migración.

## Hallazgos por prioridad

### P1 · SUME + STDG no está instalado

No existen `.sume`, `entradas/`, `logica/`, `salidas/`, `contratos/`, `cambios/` ni `mapa-global/arquitectura.yaml`. Tampoco hay DOCBLOCKs SUME ni una guardia que compare los módulos registrados con los archivos seguidos por Git. Por tanto, **no se puede certificar cumplimiento SUME**. La organización actual por `pages`, `components`, `content`, `styles` y `types` es razonable para Astro, pero no equivale al contrato de la skill `dajarony-sume`.

**Corrección requerida:** migrar en un cambio independiente para conservar rutas y hacer revisable el diff. Astro obliga a mantener los puntos de entrada en `src/pages/`; el resto puede clasificarse en las carpetas SUME. El contrato de migración está en `CONTRATO-MIGRACION-SUME.md`.

### P2 · Responsabilidades mezcladas en la configuración

`src/content/site.ts` reunía identidad del sitio, correo operativo y navegación. `src/types/site.ts` reunía tipos de tres dominios. Se separaron en módulos de identidad, canal, navegación, alumno, oportunidad y empresa. Se retiró `repositoryUrl`, una propiedad sin consumidores.

### P2 · Llamada a la acción duplicada

La portada terminaba con dos secciones seguidas que enviaban a la misma ruta de colaboración. Se retiró la segunda sección y su CSS. El CTA principal del hero ahora conduce a las formas de colaboración; la ficha de muestra queda como alternativa.

### P2 · Logo difícil de leer a tamaño pequeño

El archivo oficial actual es un WebP de 224 × 224 px que mezcla oso, herramientas, copo y palabra. En la cabecera se reduce a 54 px en escritorio y 46 px en móvil; los detalles y la palabra dentro del bitmap pierden definición. El boceto elegido por el usuario, un oso geométrico, se conserva en `docs/brand/` para evaluación. **No reemplaza la marca publicada.**

## Sanidad verificada y límites

- `npm run check` y TypeScript con `noUnusedLocals`/`noUnusedParameters` no reportaron errores en la revisión local.
- `npm run verify:source` recorre los imports desde todas las rutas Astro y falla ante módulos huérfanos o dependencias circulares. Tras el saneamiento hay 72 módulos fuente alcanzables.
- La eliminación de la sección repetida incluyó su componente y selectores específicos, sin dejar un archivo huérfano.
- Este guardia no prueba que cada rama condicional se ejecute ni que cada selector CSS esté en uso. Tampoco sustituye pruebas de comportamiento o una revisión formal de accesibilidad.
- Los contratos por fase de `PLAN-DE-MEJORAS.md` son criterios de aceptación de esta reparación; todavía no son contratos SCP/FASER formales aprobados.

## Decisión

Se aceptó el saneamiento local de responsabilidades y la reducción de contenido repetido. En ese corte, SUME quedó pendiente. La migración posterior se comprueba con `npm run verify:sume`; la aceptación final exige también CI y despliegue. El nuevo símbolo necesita revisión visual antes de sustituir el logo existente.
