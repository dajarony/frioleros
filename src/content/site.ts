import type { NavItem } from "@domain/site";

export const site = {
  name: "Frioleros",
  tagline: "El talento que enfría el futuro",
  description:
    "Frioleros es un proyecto de estudiantes de refrigeración industrial en Canarias que busca oportunidades para aprender y crecer en el sector del frío.",
  location: "Canarias, España",
  contactEmail: "",
  repositoryUrl: "https://github.com/dajarony/frioleros",
};

export const contactEmail = site.contactEmail.trim();

if (contactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
  throw new Error("El correo de contacto de Frioleros no tiene un formato válido.");
}

export const hasContactEmail = contactEmail.length > 0;

export const navigation: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Quiénes somos", href: "/quienes-somos/" },
  { label: "Equipo", href: "/equipo/" },
  { label: "Formación y proyectos", href: "/formacion-proyectos/" },
  { label: "Empresas", href: "/empresas-oportunidades/" },
  { label: "Contacto", href: "/contacto/" },
];
