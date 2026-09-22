/*
SUME DOCBLOCK

Nombre: contratos/types/training.ts
Tipo: Contrato

Entradas:
- necesidades de datos del dominio

Acciones:
- define la forma de datos sin efectos

Salidas:
- tipos reutilizables de TypeScript
*/
export type TrainingStatus =
  | "En formación"
  | "Práctica guiada"
  | "En desarrollo";

export type TrainingArea = {
  id: string;
  title: string;
  summary: string;
  topics: string[];
  status: TrainingStatus;
};

export type PracticeEvidence = {
  id: string;
  title: string;
  category: string;
  description: string;
  learning: string[];
  status: TrainingStatus;
  image?: string;
};
