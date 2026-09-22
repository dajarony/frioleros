# Bitácora de evidencia

## 2026-09-22 · medición local · Verificación de navegación y metadatos

**Qué se hizo:** Se normalizó el enlace a la portada, se corrigieron el nombre accesible del menú y las dimensiones del icono, y se añadió una verificación del sitio generado al despliegue.

**Evidencia:** `npm run check`: 57 archivos, 0 errores, 0 avisos y 0 pistas. `npm run build`: 8 páginas. `npm run verify`: 8 HTML, 251 referencias internas y 6 rutas indexables en el sitemap. En la web publicada antes de estos cambios, las seis páginas principales no desbordaron a 320, 390 ni 1280 px; el menú móvil se abrió con Enter y mostró sus seis enlaces.

**Límites declarados:** La medición responsive corresponde a la versión publicada anterior y no demuestra el resultado del nuevo despliegue. El control de enlaces revisa atributos `href` y `src` del HTML generado; no sustituye una auditoría integral de accesibilidad ni de rendimiento. No hay correo oficial confirmado, perfiles autorizados, fotos de prácticas ni original de mayor resolución del logotipo.

**Errores propios:** La primera ejecución del verificador detectó la URL canónica sin barra final de la portada y enlaces del logotipo y del 404 a esa variante; se corrigieron y el verificador pasó.

**Decisión:** Aceptados los cambios técnicos para revisión y despliegue; el cierre integral de la fase 5 queda pendiente de las entradas reales de las fases 1–3.

**Qué NO se tocó:** No se publicaron datos personales, direcciones de correo, fotografías, credenciales ni contenido de prácticas no verificado.

**Siguiente acción:** Revisar y publicar esta rama; comprobar el resultado de GitHub Pages. El grupo debe confirmar el correo oficial y autorizar los perfiles y fotografías para cerrar las fases 1–3.
