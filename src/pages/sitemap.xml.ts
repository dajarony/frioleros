/*
SUME DOCBLOCK

Nombre: src/pages/sitemap.xml.ts
Tipo: Entrada

Entradas:
- URL y parámetros de ruta

Acciones:
- compone la salida de la ruta Astro

Salidas:
- página HTML o sitemap XML
*/
import { publishedStudents } from "@content/students";

const origin = "https://dajarony.github.io";
const basePath = "/frioleros";

const staticPaths = [
  "/",
  "/quienes-somos/",
  "/equipo/",
  "/formacion-proyectos/",
  "/empresas-oportunidades/",
  "/contacto/",
];

const toAbsoluteUrl = (path: string) =>
  `${origin}${basePath}${path === "/" ? "/" : path}`;

export const prerender = true;

export function GET() {
  const urls = [
    ...staticPaths.map(toAbsoluteUrl),
    ...publishedStudents.map((student) =>
      toAbsoluteUrl(`/equipo/${student.id}/`),
    ),
  ];

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((url) => `  <url><loc>${url}</loc></url>`),
    "</urlset>",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
