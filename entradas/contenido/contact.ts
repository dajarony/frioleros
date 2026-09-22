/*
SUME DOCBLOCK

Nombre: entradas/contenido/contact.ts
Tipo: Entrada

Entradas:
- datos y configuración editorial

Acciones:
- expone datos para las rutas y componentes

Salidas:
- valores editoriales tipados
*/
import type { ContactAudience, ContactBriefItem } from "@domain/contact";

export const contactAudiences: ContactAudience[] = [
  {
    id: "empresa",
    title: "Empresa",
    description:
      "Para compañías que puedan ofrecer empleo, prácticas, experiencia real, formación o una visita técnica.",
    actions: ["Empleo", "Prácticas", "Visita técnica", "Formación"],
  },
  {
    id: "profesional",
    title: "Profesional del sector",
    description:
      "Para técnicos, responsables de mantenimiento y especialistas que quieran compartir experiencia o mentoría.",
    actions: ["Mentoría", "Charla", "Consejo técnico", "Orientación"],
  },
  {
    id: "institucion-medio",
    title: "Institución o medio",
    description:
      "Para entidades públicas, asociaciones y medios que quieran apoyar, conectar o dar visibilidad al proyecto.",
    actions: ["Apoyo", "Difusión", "Conexión", "Colaboración"],
  },
];

export const contactBrief: ContactBriefItem[] = [
  {
    label: "Quién eres",
    description: "Nombre de la empresa, entidad o profesional que contacta.",
  },
  {
    label: "Dónde estás",
    description: "Isla, municipio o ámbito en el que se desarrollaría la oportunidad.",
  },
  {
    label: "Qué propones",
    description: "Empleo, prácticas, visita, mentoría, formación u otra colaboración.",
  },
  {
    label: "Qué necesitas",
    description: "Perfil, disponibilidad o conocimientos que esperas encontrar.",
  },
  {
    label: "Cómo seguimos",
    description: "Persona de contacto y vía preferida para continuar la conversación.",
  },
];
