/*
SUME DOCBLOCK

Nombre: entradas/contenido/companies.ts
Tipo: Entrada

Entradas:
- datos y configuración editorial

Acciones:
- expone datos para las rutas y componentes

Salidas:
- valores editoriales tipados
*/
import { publishedStudents } from "@content/students";
import { hasContactEmail } from "@content/contact-channel";
import type { CompanySector, CompanyStep } from "@domain/company";

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
    title: publishedStudents.length > 0 ? "Conoce al equipo" : "Conoce el proyecto",
    description: publishedStudents.length > 0
      ? "Revisa perfiles, intereses y conocimientos que cada alumno está desarrollando."
      : "Descubre la formación del grupo y el formato previsto para los perfiles de alumnos.",
  },
  {
    step: "02",
    title: hasContactEmail ? "Propón una oportunidad" : "Prepara una propuesta",
    description: hasContactEmail
      ? "Empleo, prácticas, mentoría, visita técnica, formación o colaboración."
      : "Define la oportunidad, la isla y el tipo de perfil que buscas.",
  },
  {
    step: "03",
    title: hasContactEmail ? "Hablemos" : "Canal en preparación",
    description: hasContactEmail
      ? "Conectamos la propuesta con las personas del grupo a las que mejor puede ayudar."
      : "Publicaremos la vía oficial para recibir propuestas cuando el grupo la confirme.",
  },
];
