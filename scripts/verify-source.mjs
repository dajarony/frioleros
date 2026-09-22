import { readFileSync, readdirSync } from "node:fs";
import { extname, join, relative, resolve, sep } from "node:path";

const root = resolve("src");
const extensions = new Set([".astro", ".ts", ".css"]);
const aliases = new Map([
  ["@components", "components"],
  ["@content", "content"],
  ["@layouts", "layouts"],
  ["@styles", "styles"],
  ["@domain", "types"],
  ["@lib", "lib"],
]);

const listFiles = (folder) =>
  readdirSync(folder, { withFileTypes: true }).flatMap((entry) => {
    const file = join(folder, entry.name);
    return entry.isDirectory()
      ? listFiles(file)
      : extensions.has(extname(file))
        ? [file]
        : [];
  });

const files = listFiles(root);
const known = new Set(files);
const visited = new Set();
const active = new Set();
const errors = [];

const resolveImport = (from, specifier) => {
  if (specifier.startsWith(".")) return resolve(from, "..", specifier);
  for (const [alias, folder] of aliases) {
    if (specifier.startsWith(`${alias}/`)) {
      return join(root, folder, specifier.slice(alias.length + 1));
    }
  }
  return null;
};

const visit = (file) => {
  if (active.has(file)) {
    errors.push(`Dependencia circular: ${relative(root, file)}`);
    return;
  }
  if (visited.has(file)) return;
  active.add(file);
  const source = readFileSync(file, "utf8");
  const imports = [
    ...source.matchAll(/\bfrom\s+["']([^"']+)["']/g),
    ...source.matchAll(/\bimport\s+["']([^"']+)["']/g),
  ];

  for (const match of imports) {
    const candidate = resolveImport(file, match[1]);
    if (!candidate) continue;
    const target = [candidate, ...[".ts", ".astro", ".css"].map((ext) => `${candidate}${ext}`)]
      .find((path) => known.has(path));
    if (!target) {
      errors.push(`${relative(root, file)}: import local sin módulo: ${match[1]}`);
      continue;
    }
    visit(target);
  }
  active.delete(file);
  visited.add(file);
};

for (const file of files) {
  if (relative(root, file).split(sep)[0] === "pages") visit(file);
}

for (const file of files) {
  if (!visited.has(file)) errors.push(`Módulo sin ruta de uso: ${relative(root, file)}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Fuente verificada: ${files.length} módulos alcanzables desde las rutas Astro.`);
}
