/*
SUME DOCBLOCK

Nombre: entradas/contenido/about.ts
Tipo: Entrada

Entradas:
- datos y configuración editorial

Acciones:
- expone datos para las rutas y componentes

Salidas:
- valores editoriales tipados
*/
import type { ProjectPrinciple, StoryStep } from "@domain/about";

export const storySteps: StoryStep[] = [
  {
    step: "01",
    title: "Formarnos",
    description:
      "Aprender refrigeración industrial desde la base: comprender el sistema, trabajar con seguridad y ganar práctica técnica.",
  },
  {
    step: "02",
    title: "Hacernos visibles",
    description:
      "Mostrar quiénes somos, qué estamos aprendiendo y cómo evoluciona cada integrante del grupo.",
  },
  {
    step: "03",
    title: "Conectar con la industria",
    description:
      "Acercarnos a empresas, profesionales y entidades que conocen las necesidades reales del sector.",
  },
  {
    step: "04",
    title: "Conseguir una oportunidad",
    description:
      "Transformar la formación en experiencia: empleo, prácticas, mentoría, visitas técnicas o una primera puerta profesional.",
  },
];

export const projectPrinciples: ProjectPrinciple[] = [
  {
    title: "Aprender de verdad",
    description:
      "No queremos aparentar experiencia que todavía no tenemos. Queremos adquirirla trabajando y aprendiendo de buenos profesionales.",
  },
  {
    title: "Demostrar con hechos",
    description:
      "Preferimos enseñar prácticas, proyectos, fotografías y evolución antes que usar porcentajes o títulos grandilocuentes.",
  },
  {
    title: "Crecer juntos",
    description:
      "Frioleros presenta al grupo sin borrar la identidad de cada persona. Cada integrante puede tener sus propios intereses y objetivos.",
  },
  {
    title: "Escuchar a la industria",
    description:
      "Queremos saber qué necesitan las empresas y qué conocimientos debemos reforzar para convertirnos en perfiles útiles para el sector.",
  },
];
