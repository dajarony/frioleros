# Bitácora de evidencia

## 2026-09-22 · medición local · Verificación de navegación y metadatos

**Qué se hizo:** Se normalizó el enlace a la portada, se corrigieron el nombre accesible del menú y las dimensiones del icono, y se añadió una verificación del sitio generado al despliegue.

**Evidencia:** `npm run check`: 57 archivos, 0 errores, 0 avisos y 0 pistas. `npm run build`: 8 páginas. `npm run verify`: 8 HTML, 251 referencias internas y 6 rutas indexables en el sitemap. En la web publicada antes de estos cambios, las seis páginas principales no desbordaron a 320, 390 ni 1280 px; el menú móvil se abrió con Enter y mostró sus seis enlaces.

**Límites declarados:** La medición responsive corresponde a la versión publicada anterior y no demuestra el resultado del nuevo despliegue. El control de enlaces revisa atributos `href` y `src` del HTML generado; no sustituye una auditoría integral de accesibilidad ni de rendimiento. No hay correo oficial confirmado, perfiles autorizados, fotos de prácticas ni original de mayor resolución del logotipo.

**Errores propios:** La primera ejecución del verificador detectó la URL canónica sin barra final de la portada y enlaces del logotipo y del 404 a esa variante; se corrigieron y el verificador pasó.

**Decisión:** Aceptados los cambios técnicos para revisión y despliegue; el cierre integral de la fase 5 queda pendiente de las entradas reales de las fases 1–3.

**Qué NO se tocó:** No se publicaron datos personales, direcciones de correo, fotografías, credenciales ni contenido de prácticas no verificado.

**Siguiente acción:** Revisar y publicar esta rama; comprobar el resultado de GitHub Pages. El grupo debe confirmar el correo oficial y autorizar los perfiles y fotografías para cerrar las fases 1–3.

## 2026-09-22 · medición local · Sanidad modular y reducción de la portada

**Qué se hizo:** Se separaron identidad, canal y navegación; se retiró una propiedad sin uso y la llamada a colaborar repetida; se añadió una guardia de módulos huérfanos y dependencias circulares. Se preparó un boceto SVG del oso geométrico para revisión, sin usarlo en la web.

**Evidencia:** `npm run check`: 62 archivos, cero errores, avisos y pistas. `npm run verify:source`: 72 módulos alcanzables; un módulo huérfano temporal provocó el fallo esperado y se retiró. `npm run build`: ocho páginas. `npm run verify`: 250 referencias internas y seis rutas en sitemap. En vista local, la portada no desbordó a 320, 390 ni 1280 px, el CTA principal lleva a colaboración y la segunda sección repetida ya no aparece. El SVG pasó análisis XML.

**Límites declarados:** La guardia no prueba uso de cada selector CSS ni cobertura de ramas. No se certifica SUME: faltan estructura, mapa, DOCBLOCKs y registro STDG. El SVG no se ha aprobado ni se ha sustituido el logo publicado.

**Errores propios:** No se detectaron errores propios durante este tramo; esta ausencia no prueba que no existan.

**Decisión:** Aceptar el saneamiento para revisión. Mantener pendientes la migración SUME estricta y la identidad visual final.

**Qué NO se tocó:** No se publicaron datos personales, correo oficial, fotografías de prácticas ni un logo nuevo en la web.

**Siguiente acción:** Revisar el PR y su despliegue; ejecutar la migración SUME en un cambio independiente y presentar el SVG a tamaño de uso para aprobación.

## 2026-09-22 · medición local · Migración SUME + STDG

**Qué se hizo:** Se clasificaron los 72 módulos fuente en entradas, lógica, salidas y contratos; se mantuvieron los adaptadores de ruta en `src/pages/`. Se añadieron DOCBLOCKs, `.sume`, mapa de arquitectura, registro de cambios y guardia contra deriva de Git. La CI ejecutará esa guardia.

**Evidencia:** `npm run check` revisó 67 archivos sin errores, avisos ni pistas. `npm run verify:source` encontró los 72 módulos alcanzables. `npm run verify:sume` pasó con 72 módulos, nueve entradas de ruta y ocho contratos; cuatro pruebas incluyeron los tres fallos exigidos. `npm run build` generó ocho páginas y `npm run verify` comprobó 250 referencias internas y seis rutas del sitemap. Se compararon texto visible y destinos de enlaces de las ocho páginas HTML entre la versión pública previa y la vista local migrada: ocho coincidencias de ocho. La portada se comparó también visualmente en escritorio.

**Límites declarados:** La coincidencia de texto y enlaces no prueba igualdad byte a byte del HTML ni accesibilidad completa. La verificación de CI y del despliegue queda pendiente hasta fusionar el PR. El logo nuevo sigue siendo un boceto sin incorporar a la web.

**Errores propios:** La primera propuesta de parche intentó reemplazar un archivo con dos operaciones en el mismo parche; se corrigió antes de aplicar el cambio. No afectó al sitio.

**Decisión:** Presentar la migración en un PR independiente. El cierre de la fase 6 requiere que `verify:sume` pase en GitHub Actions y que el sitio publicado conserve el comportamiento.

**Qué NO se tocó:** Datos personales, correo oficial, fotografías de prácticas y activos de marca publicados.

**Siguiente acción:** Revisar el PR, fusionar y verificar GitHub Pages. Después continuar con la fase 7 de identidad visual.

## 2026-09-22 · medición publicada · Cierre técnico de SUME

**Qué se hizo:** Se fusionó el PR #4 y se publicó la migración SUME en GitHub Pages.

**Evidencia:** El workflow `35707279485` terminó con éxito: análisis Astro, guardia de módulos, guardia SUME, build, verificación del sitio y despliegue. La portada pública volvió a cargar con el CTA principal de colaboración y el diseño esperado.

**Límites declarados:** Esta evidencia cierra la arquitectura y el despliegue, no certifica que cada rama condicional o selector CSS esté ejercitado. El correo oficial, los perfiles, las fotos reales y el logo final siguen pendientes en sus fases.

**Errores propios:** No se observaron fallos en la CI ni en la comprobación de la portada publicada.

**Decisión:** Cerrar técnicamente la fase 6. Mantener abierta la fase 7 de identidad visual.

**Qué NO se tocó:** Contenido personal o activos de marca publicados.

**Siguiente acción:** Revisar el oso A y el nombre juntos a tamaño real antes de sustituir el logo actual.

## 2026-09-22 · referencia de diseño · Oso simplificado A

**Qué se hizo:** Se generó y guardó en `docs/brand/` una referencia raster transparente del oso A elegido por el usuario para orientar la evolución del SVG y del nombre.

**Evidencia:** El PNG mide 1254 × 1254 px, tiene canal alfa y muestra una sola cabeza de oso en perfil con contorno azul oscuro, rostro blanco y acento azul hielo. El primer SVG editable permanece junto a él; el logo publicado no cambió.

**Límites declarados:** La referencia raster no sustituye una revisión del SVG real a 32, 48 y 224 px. El navegador bloqueó la apertura directa del SVG local por su política de seguridad; no se intentó eludir ese bloqueo. No se ha definido ni aprobado el wordmark final.

**Errores propios:** No se atribuye equivalencia exacta entre el PNG generado y el trazado SVG manual.

**Decisión:** Conservar ambos archivos como material de revisión de la fase 7 sin integrarlos todavía en la web.

**Qué NO se tocó:** Favicons, manifiesto, OpenGraph y logo visible en el sitio.

**Siguiente acción:** Evaluar el SVG y el wordmark juntos en tamaños reales antes de cerrar la identidad visual.

## 2026-09-23 · medición local · Integración de la identidad A

**Qué se hizo:** Se sustituyó el bitmap detallado anterior por el oso A simplificado. Se generaron un PNG maestro de 512 px y un icono de 192 px, se actualizó la cabecera, hero, favicon, manifiesto y OpenGraph, y se retiró el activo antiguo sin consumidores.

**Evidencia:** El símbolo se inspeccionó a 32, 48 y 224 px en fondos oscuro y claro. En navegador se revisó junto al nombre a escritorio y a 390 y 320 px. A 390 px el símbolo se renderiza a 44 px en cabecera y 297 px en hero; a 320 px, a 44 y 243 px. En ambos casos `scrollWidth` coincide con `clientWidth`. `check`, `verify:source`, `verify:sume`, `build` y `verify` pasan; este último comprobó ocho HTML, 250 referencias y seis rutas del sitemap.

**Límites declarados:** El activo oficial de pantalla es PNG. El SVG manual sigue siendo exploratorio porque el navegador bloqueó su apertura local directa; no se declara como maestro vectorial final.

**Errores propios:** La primera verificación esperaba una variante concreta de WebP y rechazó el archivo válido generado. Se simplificó la entrega a PNG y se amplió la comprobación de dimensiones para PNG y los dos iconos.

**Decisión:** Cerrar la fase 7 para la web con el oso A y el wordmark textual. Mantener el SVG como posible mejora futura sin afectar la marca publicada.

**Qué NO se tocó:** Contenido personal, correo, perfiles y fotografías de prácticas.

**Siguiente acción:** Conseguir el correo oficial y las entradas autorizadas para cerrar las fases de contenido 1–3.
