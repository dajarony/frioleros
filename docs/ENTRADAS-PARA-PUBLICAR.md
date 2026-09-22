# Datos necesarios para publicar perfiles y prácticas

Este documento es una plantilla de recogida. **No guardes respuestas personales ni autorizaciones firmadas en este repositorio público.** Incorpora a `src/content/` únicamente los campos que cada persona haya autorizado y que el grupo haya verificado.

## Perfil de alumno (fase 2)

Para cada integrante, recopilar en un canal privado:

| Campo | Uso en la web | Regla |
| --- | --- | --- |
| Nombre público o alias profesional | Título de la tarjeta y ficha | Lo elige el integrante |
| Isla o zona | Facilitar oportunidades cercanas | No publicar domicilio ni ubicación precisa |
| Formación actual | Explicar qué está aprendiendo | Nombre y estado comprobados |
| Conocimientos practicados | Lista breve de capacidades en desarrollo | Sin atribuir experiencia no adquirida |
| Áreas de interés | Orientar a empresas | Confirmadas por el integrante |
| Disponibilidad | Ayudar a valorar una propuesta | Fecha o condición confirmada; actualizar si cambia |
| Foto | Humanizar la ficha | Opcional; publicar solo con autorización específica |

Confirmar por escrito qué campos se autorizan para la **web pública**, que el texto final ha sido revisado por su protagonista y a quién pedir cambios o retirada. La ficha de ejemplo conserva `status: "demo"`; un perfil real se añade con `status: "published"` solo tras esas comprobaciones.

## Práctica de taller (fase 3)

Para cada práctica, recopilar:

1. Nombre corto y fecha aproximada o periodo del trabajo.
2. Qué se hizo realmente y con qué equipo o herramienta, sin afirmar autonomía si fue una práctica guiada.
3. Qué concepto o destreza se aprendió.
4. Foto real y permiso de uso. Revisar que no aparezcan compañeros, matrículas, documentos o instalaciones privadas sin permiso.
5. Texto alternativo que describa lo relevante de la imagen si aporta información que no aparece en la ficha.

Actualizar `src/content/training.ts` solo después de verificar los datos; guardar la imagen optimizada en `public/`. Una ficha sin foto sigue siendo válida como descripción de aprendizaje, pero no debe presentarse como evidencia fotográfica.

## Canal oficial (fase 1)

El grupo debe decidir una dirección compartida y confirmar que puede recibir y responder propuestas. Una vez autorizada para publicación, escribirla en `src/content/contact-channel.ts` como `contactEmail`. El build rechaza una dirección no vacía con formato inválido. Comprobar que el botón de Contacto abre un mensaje dirigido a esa misma cuenta.
