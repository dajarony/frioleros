import type { HomeRoute } from "@domain/home";

export const homeRoutes: HomeRoute[] = [
  {
    index: "01",
    eyebrow: "El proyecto",
    title: "Quiénes somos",
    description:
      "Conoce por qué nace Frioleros y cómo queremos convertir formación en experiencia profesional real.",
    href: "/quienes-somos/",
    action: "Descubrir Frioleros",
  },
  {
    index: "02",
    eyebrow: "Lo que hacemos",
    title: "Formación y prácticas",
    description:
      "Refrigeración, electricidad, control, montaje y trabajo práctico explicado sin adornos ni porcentajes inventados.",
    href: "/formacion-proyectos/",
    action: "Ver formación",
  },
  {
    index: "03",
    eyebrow: "Las personas",
    title: "Nuestro equipo",
    description:
      "Perfiles sencillos para que una empresa entienda quién es cada integrante, qué aprende y hacia dónde quiere crecer.",
    href: "/equipo/",
    action: "Conocer al equipo",
  },
];
