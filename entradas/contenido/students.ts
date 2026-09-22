/*
SUME DOCBLOCK

Nombre: entradas/contenido/students.ts
Tipo: Entrada

Entradas:
- datos y configuración editorial

Acciones:
- expone datos para las rutas y componentes

Salidas:
- valores editoriales tipados
*/
import type { Student } from "@domain/student";

export const students: Student[] = [
  {
    id: "alumno-ejemplo",
    name: "Perfil de alumno",
    role: "Estudiante de refrigeración industrial",
    location: "Gran Canaria",
    availability: "Abierto a oportunidades",
    summary:
      "Perfil de demostración para enseñar cómo verá una empresa la información profesional de cada integrante de Frioleros.",
    skills: [
      "Refrigeración",
      "Electricidad aplicada",
      "Montaje",
      "Trabajo en equipo",
    ],
    interests: [
      "Mantenimiento",
      "Instalaciones",
      "Climatización",
    ],
    status: "demo",
  },
];

export const publishedStudents = students.filter(
  (student) => student.status === "published",
);

// Los perfiles reales se publicarán únicamente con autorización de cada alumno.
// El perfil de demostración permite validar diseño y arquitectura sin inventar datos reales.
