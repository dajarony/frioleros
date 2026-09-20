import type { Student } from "@domain/site";

export const students: Student[] = [
  {
    id: "alumno-ejemplo",
    name: "Perfil de alumno",
    role: "Estudiante de refrigeración industrial",
    location: "Gran Canaria",
    availability: "Formación / oportunidades",
    skills: ["Refrigeración", "Electricidad", "Montaje", "Trabajo en equipo"],
    interests: ["Mantenimiento", "Instalaciones", "Climatización"],
  },
];

// Los perfiles reales se añadirán únicamente con autorización de cada alumno.
