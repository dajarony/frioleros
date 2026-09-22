# Frioleros: plan de mejoras y contratos por fase

Fecha inicial: 2026-09-21. Revisión: 2026-09-22. Estado: plan de reparación; cada fase se evalúa contra su contrato.

## Base de la auditoría

La web publicada se revisó en escritorio y a 390 y 320 px. El repositorio fuente es `dajarony/frioleros`, rama `main`, commit inicial de esta revisión `5d91e8a`. El proyecto es Astro estático. Las fuentes de contenido estaban inicialmente en `src/content/`; tras la migración SUME viven en `entradas/contenido/`. El despliegue usa GitHub Pages. No hay `STATUS.md` ni `docs/PLAYBOOK.md`, por lo que estas fases son **fases de reparación por prioridad**, no las nueve fases de construcción de `/dajarony-fase`.

Los contratos siguientes usan criterios de pantalla y de comportamiento de `dajarony-scp` y `dajarony-faser`. No son contratos SCP aprobados. Una aprobación humana formal solo sería necesaria si se decidiera incorporar el método Dajarony completo al proyecto.

## Orden de trabajo

| Fase | Prioridad | Resultado | Dependencia real | Estado |
| --- | --- | --- | --- | --- |
| 1. Contacto operativo | P0 | Una empresa puede iniciar la conversación desde cualquier CTA | Correo oficial confirmado por el grupo | Canal adelantado y CTA condicionados; correo pendiente según el grupo |
| 2. Equipo verificable | P1 | Perfiles reales y consentidos con información útil para empresas | Datos y autorización de cada alumno | Mensajes ajustados; faltan perfiles |
| 3. Prácticas con pruebas | P1 | Evidencia real de trabajo y aprendizaje | Fotos y datos de prácticas confirmados | Fichas sin falsos huecos de foto; faltan evidencias |
| 4. Presentación y móvil | P2 | Imagen de marca nítida, lectura más directa y ausencia de desbordamiento | Original del logotipo para mejorar resolución | Criterios técnicos comprobados con el logo actual; original opcional pendiente |
| 5. SEO y comprobación final | P2 | Metadatos fieles a los archivos y recorridos completos verificados | Fases 1–4 para cierre integral | QA técnica automatizada y rutas comprobadas; cierre integral pendiente de contenido real |
| 6. Sanidad y SUME | P1 | Responsabilidades claras y trazabilidad SUME verificable | Migración técnica independiente para cumplir SUME estricto | Cerrada: guardia y despliegue verificados en PR #4 |
| 7. Identidad visual | P2 | Marca legible desde el favicon hasta el hero | Selección y aprobación del símbolo y wordmark finales | Oso geométrico elegido como dirección; boceto SVG pendiente de aprobación |

## Contrato F1 — Contacto operativo

**Rutas:** `/contacto/`, `/empresas-oportunidades/` y enlaces a contacto desde la portada y el pie.

**Objetivo:** cualquier empresa que quiera proponer una oportunidad puede abrir un canal real de contacto en dos pasos como máximo desde un CTA.

**Entradas:** correo oficial de Frioleros, confirmado para publicación por el grupo; asunto y plantilla de primer mensaje existentes. No se usará una dirección inventada ni una cuenta personal sin autorización.

**Estados:** `sin_canal` si `contactEmail` está vacío; `operativo` si contiene la dirección confirmada. La fuente de verdad es `entradas/contenido/contact-channel.ts`.

**Acciones:** `ir_a_contacto` lleva a `/contacto/`; `escribir` abre `mailto:` con destinatario, asunto y plantilla cuando el estado es `operativo`.

**Reglas y límites:** no mostrar un CTA que prometa enviar una propuesta si el canal sigue vacío; no pedir datos en un formulario que carezca de destino; no publicar correos de alumnos sin su consentimiento. La página debe describir correctamente el estado operativo y no seguir anunciando que el canal se publicará después.

**Errores y recuperación:** correo ausente → mostrar claramente que el canal está pendiente, sin enlace falso; cliente sin aplicación de correo → mostrar la dirección en texto seleccionable para copiarla.

**Aceptación verificable:** (1) existe un `mailto:` válido visible en `/contacto/`; (2) el correo mostrado y el destinatario del enlace coinciden con el valor confirmado; (3) los CTA llegan a esa ruta; (4) `npm run check` y `npm run build` pasan; (5) en móvil el enlace es accesible por teclado.

**Fuera de alcance:** formularios con servidor, CRM, WhatsApp y promesas de respuesta en un plazo no acordado.

## Contrato F2 — Equipo verificable

**Rutas:** `/equipo/` y `/equipo/[id]/`.

**Objetivo:** una empresa puede identificar al menos un alumno real y saber su ubicación, intereses, formación y disponibilidad confirmadas.

**Entradas:** ficha validada por cada alumno y autorización expresa para publicar cada dato y foto. El grupo decide si usa nombre completo, nombre parcial o alias profesional.

**Estados:** `sin_perfiles_publicados`, `con_perfiles_publicados`; cada perfil está en `demo` o `published`. La fuente de verdad es `entradas/contenido/students.ts`.

**Acciones:** abrir ficha y volver a la lista. Un perfil de demostración sigue marcado como tal y con `noindex`.

**Reglas y límites:** no convertir el perfil de ejemplo en una persona ficticia presentada como real; no deducir experiencia, certificaciones ni disponibilidad; no publicar fotos sin consentimiento; si no hay perfiles reales, la portada y la página Empresas no deben afirmar que ya se pueden revisar perfiles reales.

**Errores y recuperación:** falta de autorización → no publicar el perfil; dato incompleto → omitir el campo o mantener la ficha sin publicar, según su importancia.

**Aceptación verificable:** al menos un perfil `published` con datos confirmados; enlaces de la lista a fichas válidas; el ejemplo conserva `noindex`; títulos y CTA describen la disponibilidad real del equipo; `check` y `build` pasan.

**Fuera de alcance:** CV completos, contacto directo de menores o datos personales no aprobados.

## Contrato F3 — Prácticas con pruebas

**Ruta:** `/formacion-proyectos/`.

**Objetivo:** mostrar al menos dos prácticas con evidencia auténtica y explicar qué se hizo y qué se aprendió.

**Entradas:** imágenes del taller cuya publicación esté permitida y descripciones verificadas por quienes realizaron la práctica. La fuente de verdad es `entradas/contenido/training.ts`; imágenes en `public/`.

**Estados:** práctica `sin_foto` o `con_foto`; estado formativo existente (`En formación`, `En desarrollo`, `Práctica guiada`).

**Acciones:** lectura de tarjetas; no hay interacción adicional requerida.

**Reglas y límites:** no usar imágenes generadas o de stock como evidencia real; no afirmar que se ha completado una práctica si solo está planificada; cada imagen informativa debe tener alternativa textual útil o pie de foto equivalente.

**Errores y recuperación:** sin imagen autorizada → mantener una tarjeta textual honesta; imagen ausente en build → corregir ruta antes de publicar.

**Aceptación verificable:** al menos dos fichas con imagen real, contexto de la tarea y aprendizaje; ninguna imagen rota; los estados coinciden con el trabajo realizado; `check` y `build` pasan.

**Fuera de alcance:** notas, porcentajes de destreza y certificaciones sin respaldo.

## Contrato F4 — Presentación y móvil

**Rutas:** portada, Equipo y cabeceras interiores.

**Objetivo:** la marca se lee nítida a su tamaño real y las páginas no fuerzan desplazamiento horizontal en pantallas estrechas.

**Entradas:** logotipo actual de 224 × 224 px; si se aporta un original de mayor resolución, sustituirá al actual. La exploración de una identidad nueva se gestiona en la fase 7.

**Estados:** escritorio y móvil; menú cerrado y abierto. El contenido editorial no cambia de veracidad según el tamaño.

**Acciones:** abrir/cerrar menú, recorrer enlaces, usar botones. Los controles siguen visibles y operables por teclado.

**Reglas y límites:** no ampliar el bitmap por encima de su resolución intrínseca; conservar el mensaje principal y los CTA; el cuerpo no debe tener un ancho mínimo superior al área disponible; reducir la altura de las cabeceras interiores para que el contenido empiece antes.

**Errores y recuperación:** sin logotipo nuevo → limitar el tamaño del actual y conservar una composición equilibrada.

**Aceptación verificable:** a 320, 390 y 1280 px `scrollWidth <= clientWidth` (salvo redondeo de 1 px); menú móvil navegable; no hay texto cortado; logo no se renderiza por encima de 224 px hasta que exista otro archivo; `check` y `build` pasan.

**Fuera de alcance:** rediseño completo o sustitución del oso por fotos no aportadas.

## Contrato F5 — SEO y comprobación final

**Rutas:** todas las páginas públicas y la ficha demo.

**Objetivo:** compartir enlaces con metadatos veraces y comprobar que los recorridos públicos funcionan.

**Entradas:** títulos, descripciones, imagen de marca disponible y contenido real publicado.

**Estados:** páginas indexables; ficha demo y 404 con `noindex`.

**Acciones:** abrir los seis enlaces de navegación y los CTA principales; compartir cada ruta con su título, descripción y URL canónica.

**Reglas y límites:** las dimensiones `og:image` deben corresponder al archivo real; una tarjeta `summary_large_image` requiere una imagen adecuada para ese formato o debe degradarse a `summary`; no afirmar resultados de rendimiento o accesibilidad sin medirlos.

**Errores y recuperación:** imagen social ausente → usar metadatos acordes al logo existente; ruta rota → no cerrar la fase hasta repararla.

**Aceptación verificable:** `npm run check`, `npm run build`; rutas y enlaces internos sin 404; `noindex` en demo y 404; dimensiones de imagen correctas; recorrido móvil y escritorio verificado.

**Fuera de alcance:** auditoría Lighthouse completa, posicionamiento garantizado o analítica sin consentimiento/configuración.

## Datos necesarios para cerrar las fases 1–3

1. Correo oficial aprobado para publicar.
2. Fichas de alumnos con autorización de publicación por campo y por foto.
3. Fotografías reales de prácticas con permiso de uso y una descripción validada.
4. Archivo original del logotipo, si existe, para sustituir la versión de 224 px.

## Contrato F6 — Sanidad y SUME

**Objetivo:** cada archivo fuente tiene un único dueño reconocible, no hay módulos huérfanos ni dependencias circulares y el cumplimiento de SUME + STDG se comprueba automáticamente.

**Entradas:** estructura Astro y contrato `CONTRATO-MIGRACION-SUME.md`. **Estado actual:** fase técnica cerrada; clasificación, DOCBLOCKs, mapa, registro y guardia están implantados. La comparación de ocho páginas pasó localmente y la CI y GitHub Pages terminaron correctamente.

**Estados:** `saneamiento_parcial` mientras falten carpetas, DOCBLOCKs, mapa o registro; `sume_verificado` cuando todos los invariantes del contrato pasen. **Acciones:** clasificar módulos, trasladarlos, documentar sus entradas y salidas, registrar el cambio y ejecutar la guardia.

**Reglas y recuperación:** `src/pages/` queda como adaptador obligatorio de Astro; ningún archivo se excluye para ocultar un fallo. Si una importación o ruta cambia de comportamiento, se revierte ese traslado y se corrige antes de cerrar la fase.

**Aceptación verificable:** la migración instala las seis carpetas SUME, `.sume`, DOCBLOCKs, mapa de arquitectura, registro append-only y guardia mapa↔Git; además pasan `check`, `verify:source`, `build` y `verify`. Las rutas y el HTML público conservan su comportamiento.

**Verificación adicional:** `npm run verify:sume` pasa para 72 módulos, nueve entradas de ruta y ocho contratos. Cuatro pruebas cubren la correspondencia exacta y las tres derivas de mapa exigidas por SUME.

**Cierre del 2026-09-22:** PR #4 fusionado en `main` (`fc078eb`). El [workflow de publicación](https://github.com/dajarony/frioleros/actions/runs/35707279485) pasó `check`, `verify:source`, `verify:sume`, `build`, `verify` y el despliegue. La portada pública volvió a cargar con su aspecto y CTA previstos.

## Contrato F7 — Identidad visual

**Objetivo:** un símbolo y un nombre legibles en tamaños de 32, 48 y 224 px, coherentes en cabecera, favicon y redes.

**Entradas:** dirección A (oso simplificado) elegida por el usuario y boceto en `docs/brand/`. **Estado actual:** concepto pendiente de evaluación; la web sigue usando el logo anterior.

**Estados:** `boceto`, `final_aprobado`, `publicado`. **Acciones:** revisar símbolo y nombre juntos a tamaño de uso, ajustar variantes y sustituir los activos de la web cuando la versión final esté definida.

**Reglas y recuperación:** el icono debe funcionar sin texto a 32 px y el nombre debe ser legible fuera del símbolo. Si falla la lectura o el contraste, se ajusta el vector sin cambiar el logo publicado hasta repetir la revisión.

**Aceptación verificable:** el grupo aprueba un SVG final y su wordmark; se generan variantes apropiadas para fondos claros y oscuros, iconos y metadatos; se revisan visualmente los tres tamaños y pasan las comprobaciones de build y enlaces.

## Avance verificado en esta revisión

- `npm run check`: 56 archivos, cero errores, cero avisos y cero pistas.
- `npm run build`: ocho páginas estáticas generadas.
- Vista local: las seis páginas principales no tienen desbordamiento horizontal a 320 ni 390 px; sus titulares caben en pantalla.
- La fase 1 sigue abierta: no se ha publicado una dirección no confirmada.
- Las fases 2 y 3 siguen abiertas: no se han inventado perfiles ni fotografías.
- Las entradas y permisos necesarios para esas fases se detallan en `docs/ENTRADAS-PARA-PUBLICAR.md`.
- Los CTA y las descripciones SEO reflejan el estado real del contacto y de los perfiles; recuperan el mensaje de publicación cuando exista un correo válido o al menos un alumno publicado.

## Revisión del 2026-09-22

- Fase 4: las seis páginas principales se comprobaron en la web publicada a 320, 390 y 1280 px; en las 18 combinaciones `scrollWidth` coincidió con `clientWidth`. El menú móvil se abrió con Enter y mostró sus seis rutas y el CTA. Se corrigió su nombre accesible para que describa tanto el estado abierto como el cerrado. El logotipo actual sigue limitado a su resolución nativa de 224 px; mejorar su definición requiere un original aprobado.
- Fase 5: se corrigió la URL canónica de la portada para que apunte a `/frioleros/`, se eliminaron las canónicas de páginas `noindex`, se normalizaron los enlaces del logotipo y del 404 a la portada, y el manifiesto declara los 224 × 224 px reales del icono. `npm run verify` revisa cada build antes de subirlo a Pages: 8 HTML, 251 referencias internas y 6 rutas indexables en el sitemap. La revisión técnica pasa; el cierre integral sigue pendiente de las entradas reales de las fases 1–3.
