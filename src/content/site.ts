import type { NavItem } from "@types/site";

export const site = {
  name: "Frioleros",
  tagline: "El talento que enfría el futuro",
  description:
    "Estudiantes de refrigeración industrial en Canarias conectando formación, talento y oportunidades reales en el sector del frío.",
  location: "Canarias, España",
  contactEmail: "frioleros.proyecto@gmail.com",
};

export const navigation: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Quiénes somos", href: "/quienes-somos/" },
  { label: "Equipo", href: "/equipo/" },
  { label: "Formación y proyectos", href: "/formacion-proyectos/" },
  { label: "Empresas", href: "/empresas-oportunidades/" },
  { label: "Contacto", href: "/contacto/" },
];
