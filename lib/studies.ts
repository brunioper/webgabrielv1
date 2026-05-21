// ─── Edit this file to add, remove, or update studies ───────────────────────

export type Study = {
  id: number;
  title: string;
  description: string;
  category: StudyCategory;
  date: string;
  format: string;
  price: string;
  available: boolean;
};

export const studyCategories = [
  "Todos",
  "Consumidor",
  "Marcas",
  "Empresas",
] as const;

export type StudyCategory = (typeof studyCategories)[number];

export const studies: Study[] = [
  {
    id: 1,
    title: "Hábitos y preferencias del consumidor uruguayo",
    description:
      "Análisis cuantitativo sobre comportamiento de compra, canales preferidos, factores de decisión y tendencias de consumo en Uruguay.",
    category: "Consumidor",
    date: "Enero 2025",
    format: "Informe PDF + base de datos",
    price: "Consultar",
    available: true,
  },
  {
    id: 2,
    title: "Percepción de marcas en el mercado uruguayo",
    description:
      "Estudio de reconocimiento, posicionamiento y atributos percibidos de marcas en categorías clave del mercado local.",
    category: "Marcas",
    date: "Marzo 2025",
    format: "Informe PDF + presentación ejecutiva",
    price: "Consultar",
    available: true,
  },
  {
    id: 3,
    title: "Diagnóstico de digitalización en PyMEs",
    description:
      "Estudio sobre el nivel de adopción digital en pequeñas y medianas empresas: herramientas, barreras y oportunidades.",
    category: "Empresas",
    date: "Próximamente",
    format: "Informe PDF + presentación ejecutiva",
    price: "Consultar",
    available: false,
  },
];
