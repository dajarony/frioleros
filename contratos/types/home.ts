/*
SUME DOCBLOCK

Nombre: contratos/types/home.ts
Tipo: Contrato

Entradas:
- necesidades de datos del dominio

Acciones:
- define la forma de datos sin efectos

Salidas:
- tipos reutilizables de TypeScript
*/
export type HomeRoute = {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  action: string;
};
