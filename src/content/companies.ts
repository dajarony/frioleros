export type CompanySector = {
  title: string;
  description: string;
};

export type CompanyStep = {
  step: string;
  title: string;
  description: string;
};

export const companySectors: CompanySector[] = [
  {
    title: "Refrigeración comercial",
    description: "Supermercados, tiendas, cámaras y conservación de producto.",
  },
  {
    title: "Refrigeración industrial",
    description: "Instalaciones de mayor capacidad, procesos y mantenimiento técnico.",
  },
  {
    title: "Climatización",
    description: "Instalación, mantenimiento y servicio técnico de sistemas HVAC.",
  },
  {
    title: "Hoteles y turismo",
    description: "Climatización, cocinas, cámaras, restauración y mantenimiento integral.",
  },
  {
    title: "Alimentación y logística",
    description: "Cadena de frío, almacenamiento, distribución y conservación.",
  },
  {
    title: "Facilities y mantenimiento",
    description: "Equipos técnicos que mantienen edificios e instalaciones operativas.",
  },
  {
    title: "Puerto y sector naval",
    description: "Frío a bordo, climatización, cámaras y mantenimiento especializado.",
  },
  {
    title: "Grandes infraestructuras",
    description: "Instalaciones donde la continuidad del frío y la climatización es crítica.",
  },
];

export const companySteps: CompanyStep[] = [
  {
    step: "01",
    title: "Conoce al equipo",
    description: "Revisa perfiles, intereses y conocimientos que cada alumno está desarrollando.",
  },
  {
    step: "02",
    title: "Propón una oportunidad",
    description: "Empleo, prácticas, mentoría, visita técnica, formación o colaboración.",
  },
  {
    step: "03",
    title: "Hablemos",
    description: "Conectamos la propuesta con las personas del grupo a las que mejor puede ayudar.",
  },
];
