import type {
  PracticeEvidence,
  TrainingArea,
} from "@domain/training";

export const trainingAreas: TrainingArea[] = [
  {
    id: "ciclo-frigorifico",
    title: "Ciclo frigorífico",
    summary:
      "Comprensión del recorrido del refrigerante y de la relación entre presión, temperatura y estado del fluido.",
    topics: [
      "Compresor",
      "Condensador",
      "Expansión",
      "Evaporador",
      "Alta y baja presión",
      "Sobrecalentamiento",
    ],
    status: "En formación",
  },
  {
    id: "electricidad-aplicada",
    title: "Electricidad aplicada",
    summary:
      "Base eléctrica necesaria para comprender alimentación, protección, maniobra y funcionamiento de equipos frigoríficos.",
    topics: [
      "230 V AC / 50 Hz",
      "Monofásica y trifásica",
      "Magnetotérmico",
      "Diferencial",
      "IGA y sobretensiones",
      "Contactor",
    ],
    status: "En formación",
  },
  {
    id: "control-automatismos",
    title: "Control y automatismos",
    summary:
      "Elementos que permiten gobernar, proteger y automatizar una instalación frigorífica.",
    topics: [
      "Presostatos",
      "KP15 alta/baja",
      "Válvula solenoide",
      "Contactores",
      "Sensores",
      "Conceptos de PLC",
    ],
    status: "En desarrollo",
  },
  {
    id: "tuberia-montaje",
    title: "Tubería y montaje",
    summary:
      "Reconocimiento de tubería de cobre, herramientas y criterios básicos de montaje de una instalación.",
    topics: [
      "1/4 pulgada",
      "3/8 pulgada",
      "1/2 pulgada",
      "5/8 pulgada",
      "Identificación de diámetros",
      "Herramientas de montaje",
    ],
    status: "Práctica guiada",
  },
  {
    id: "medicion-diagnostico",
    title: "Medición y diagnóstico",
    summary:
      "Lectura de variables para entender qué está ocurriendo en la instalación antes de intervenir.",
    topics: [
      "Manómetros",
      "Presión",
      "Temperatura",
      "Alta y baja",
      "Rango de trabajo",
      "Interpretación de síntomas",
    ],
    status: "En formación",
  },
  {
    id: "esquemas-documentacion",
    title: "Esquemas y documentación",
    summary:
      "Representación clara de circuitos eléctricos y de maniobra para comprender y comunicar una instalación.",
    topics: [
      "CADe_SIMU",
      "QElectroTech",
      "Simbología",
      "Circuito de fuerza",
      "Circuito de mando",
      "Flujo eléctrico",
    ],
    status: "En desarrollo",
  },
];

export const practiceEvidence: PracticeEvidence[] = [
  {
    id: "reconocimiento-ciclo",
    title: "Reconocimiento del ciclo frigorífico",
    category: "Refrigeración",
    description:
      "Identificación del sentido del flujo y de la función de los cuatro elementos principales de una instalación.",
    learning: [
      "Distinguir alta y baja",
      "Relacionar presión y temperatura",
      "Entender el cambio de estado",
    ],
    status: "Práctica guiada",
  },
  {
    id: "maniobra-contactor",
    title: "Maniobra eléctrica con contactor",
    category: "Electricidad",
    description:
      "Montaje y comprensión de una maniobra básica con pulsadores, bobina, contactos y receptor.",
    learning: [
      "Circuito de mando",
      "Auto-mantenimiento",
      "Contactos NA/NC",
    ],
    status: "En desarrollo",
  },
  {
    id: "presostato-kp15",
    title: "Presostato de alta y baja",
    category: "Control",
    description:
      "Reconocimiento del KP15 y comprensión de su función de control y protección por presión.",
    learning: [
      "Alta presión",
      "Baja presión",
      "Protección del sistema",
    ],
    status: "En formación",
  },
  {
    id: "valvula-solenoide",
    title: "Válvula solenoide",
    category: "Control",
    description:
      "Comprensión de cómo una señal eléctrica permite abrir o cerrar el paso de refrigerante.",
    learning: [
      "Bobina",
      "Apertura y cierre",
      "Integración eléctrica",
    ],
    status: "En formación",
  },
  {
    id: "tuberia-cobre",
    title: "Identificación de tubería de cobre",
    category: "Montaje",
    description:
      "Reconocimiento visual y dimensional de los diámetros habituales utilizados durante la formación.",
    learning: [
      "1/4, 3/8, 1/2 y 5/8",
      "Conversión pulgada/mm",
      "Selección e identificación",
    ],
    status: "Práctica guiada",
  },
  {
    id: "esquema-electrico",
    title: "Esquema eléctrico de fuerza y mando",
    category: "Documentación",
    description:
      "Representación y análisis de conexiones eléctricas aplicadas a equipos y maniobras.",
    learning: [
      "Simbología",
      "Protecciones",
      "Fuerza y mando",
    ],
    status: "En desarrollo",
  },
];
