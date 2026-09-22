/*
SUME DOCBLOCK

Nombre: contratos/types/about.ts
Tipo: Contrato

Entradas:
- necesidades de datos del dominio

Acciones:
- define la forma de datos sin efectos

Salidas:
- tipos reutilizables de TypeScript
*/
export type StoryStep = {
  step: string;
  title: string;
  description: string;
};

export type ProjectPrinciple = {
  title: string;
  description: string;
};
