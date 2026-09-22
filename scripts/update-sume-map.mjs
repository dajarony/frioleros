import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { basename, extname, join } from "node:path";
import { localImports, root, sourceFiles, toProjectPath } from "./source-graph.mjs";

const typeFor = (file) => {
  if (file.startsWith("src/pages/") || file.startsWith("entradas/")) return "Entrada";
  if (file.startsWith("logica/")) return "Lógica";
  if (file.startsWith("salidas/")) return "Salida";
  return "Contrato";
};

const modules = sourceFiles.map((file) => {
  const path = toProjectPath(file);
  return {
    name: basename(file, extname(file)),
    type: typeFor(path),
    file: path,
    depends_on: [...new Set(localImports(file).flatMap(({ target }) => target ? [toProjectPath(target)] : []))].sort(),
  };
}).sort((a, b) => a.file.localeCompare(b.file));

const routePath = (file) => {
  const path = file.slice("src/pages/".length).replace(/\.(astro|ts)$/, "");
  if (path === "404") return "/404.html";
  if (path === "sitemap.xml") return "/sitemap.xml";
  if (path === "index") return "/";
  return `/${path.replaceAll(/\[([^\]]+)\]/g, ":$1")}/`;
};

const routes = modules.filter(({ file }) => file.startsWith("src/pages/")).map((module) => ({
  path: routePath(module.file),
  method: "GET",
  entrada: module.file,
  logica: module.depends_on.filter((file) => file.startsWith("logica/")),
  contratos: module.depends_on.filter((file) => file.startsWith("contratos/")),
  salidas: module.depends_on.filter((file) => file.startsWith("salidas/")),
}));

const contracts = modules.filter(({ file }) => file.startsWith("contratos/")).map((module) => ({
  name: module.name,
  file: module.file,
  used_by: modules.filter((other) => other.depends_on.includes(module.file)).map((other) => other.file),
}));

const mapFile = join(root, "mapa-global/arquitectura.yaml");
const previous = existsSync(mapFile) ? JSON.parse(readFileSync(mapFile, "utf8")) : null;

const map = {
  system: "frioleros",
  version: "0.1.0",
  last_updated: new Date().toISOString().slice(0, 10),
  sume_version: "1.0",
  routes,
  contracts,
  modules,
};

if (previous?.system && previous.system !== map.system) {
  throw new Error(`El mapa existente pertenece a otro sistema: ${previous.system}`);
}

writeFileSync(mapFile, `${JSON.stringify(map, null, 2)}\n`);
console.log(`Mapa SUME actualizado: ${modules.length} módulos, ${routes.length} rutas, ${contracts.length} contratos.`);
