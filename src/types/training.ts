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
