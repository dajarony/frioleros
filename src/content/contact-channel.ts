// Completar solo con la dirección oficial confirmada para publicación.
export const contactEmail = "".trim();

if (contactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
  throw new Error("El correo de contacto de Frioleros no tiene un formato válido.");
}

export const hasContactEmail = contactEmail.length > 0;
