/*
SUME DOCBLOCK

Nombre: contratos/types/company.ts
Tipo: Contrato

Entradas:
- necesidades de datos del dominio

Acciones:
- define la forma de datos sin efectos

Salidas:
- tipos reutilizables de TypeScript
*/
export type CompanySector = {
  title: string;
  description: string;
};

export type CompanyStep = {
  step: string;
  title: string;
  description: string;
};
