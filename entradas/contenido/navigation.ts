/*
SUME DOCBLOCK

Nombre: entradas/contenido/navigation.ts
Tipo: Entrada

Entradas:
- datos y configuración editorial

Acciones:
- expone datos para las rutas y componentes

Salidas:
- valores editoriales tipados
*/
import type { NavItem } from "@domain/navigation";

export const navigation: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Quiénes somos", href: "/quienes-somos/" },
  { label: "Equipo", href: "/equipo/" },
  { label: "Formación y proyectos", href: "/formacion-proyectos/" },
  { label: "Empresas", href: "/empresas-oportunidades/" },
  { label: "Contacto", href: "/contacto/" },
];
