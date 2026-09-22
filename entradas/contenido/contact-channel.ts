/*
SUME DOCBLOCK

Nombre: entradas/contenido/contact-channel.ts
Tipo: Entrada

Entradas:
- datos y configuración editorial

Acciones:
- expone datos para las rutas y componentes

Salidas:
- valores editoriales tipados
*/
// Completar solo con la dirección oficial confirmada para publicación.
export const contactEmail = "".trim();

if (contactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
  throw new Error("El correo de contacto de Frioleros no tiene un formato válido.");
}

export const hasContactEmail = contactEmail.length > 0;
