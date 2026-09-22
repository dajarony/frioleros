# SUME + STDG — Frioleros

Frioleros organiza sus módulos por dirección del flujo y mantiene un mapa verificable de rutas, contratos y dependencias. Es un sitio Astro estático: no se crean controladores HTTP ni servicios artificiales.

| Carpeta | Responsabilidad |
| --- | --- |
| `entradas/contenido/` | Contenido y configuración editorial que entra en la web |
| `logica/lib/` | Reglas puras de rutas y transformación |
| `salidas/components/`, `salidas/layouts/`, `salidas/styles/` | HTML y CSS que se entregan al visitante |
| `contratos/types/` | Tipos TypeScript compartidos |
| `cambios/` | Registro cronológico y append-only de modificaciones |
| `mapa-global/` | Mapa de módulos, dependencias, rutas y contratos |

Astro exige los puntos de entrada en `src/pages/`. Esos archivos son adaptadores de entrada, figuran en el mapa y llevan DOCBLOCK. Los archivos fuente de las cuatro áreas SUME también empiezan con un DOCBLOCK que indica nombre, tipo, entradas, acciones y salidas.

## Para cambiar un módulo

1. Lee `.sume` y `mapa-global/arquitectura.yaml` para identificar su dueño y dependencias. El mapa se escribe como JSON con extensión `.yaml`; JSON es un subconjunto válido de YAML 1.2 y así la guardia lo analiza sin dependencias adicionales.
2. Haz el cambio en su área y actualiza su DOCBLOCK si cambió la responsabilidad.
3. Ejecuta `npm run sume:map` para registrar los módulos y dependencias actuales. El generador conserva la identidad del sistema y no acepta un mapa de otro proyecto.
4. Añade una entrada al final de `cambios/registro-cambios.md`; no alteres las anteriores.
5. Ejecuta `npm run check`, `npm run verify:source`, `npm run verify:sume`, `npm run build` y `npm run verify`.

La guardia compara las rutas configuradas en `.sume` con `git ls-files --cached`. Hay que añadir los archivos nuevos al índice de Git antes de verificar. Falla si falta un módulo, sobra una entrada, se duplica, cambia una dependencia sin actualizar el mapa o falta un DOCBLOCK. Sus cuatro pruebas incluyen los tres fallos de deriva exigidos por SUME.
