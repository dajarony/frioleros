/*
SUME DOCBLOCK

Nombre: contratos/types/student.ts
Tipo: Contrato

Entradas:
- necesidades de datos del dominio

Acciones:
- define la forma de datos sin efectos

Salidas:
- tipos reutilizables de TypeScript
*/
export type StudentStatus = "demo" | "published";

export type Student = {
  id: string;
  name: string;
  role: string;
  location: string;
  availability: string;
  summary: string;
  skills: string[];
  interests: string[];
  image?: string;
  status: StudentStatus;
};
