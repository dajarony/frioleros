/*
SUME DOCBLOCK

Nombre: contratos/types/contact.ts
Tipo: Contrato

Entradas:
- necesidades de datos del dominio

Acciones:
- define la forma de datos sin efectos

Salidas:
- tipos reutilizables de TypeScript
*/
export type ContactAudience = {
  id: string;
  title: string;
  description: string;
  actions: string[];
};

export type ContactBriefItem = {
  label: string;
  description: string;
};
