import { readFileSync, readdirSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";

export const root = resolve(".");
export const config = JSON.parse(readFileSync(join(root, ".sume"), "utf8"));
export const sourceRoots = config.map_guard.tracked_roots;
const extensions = new Set(config.map_guard.source_extensions);
const excluded = new Set(config.map_guard.exclude);
const aliases = new Map([
  ["@components", "salidas/components"],
  ["@content", "entradas/contenido"],
  ["@layouts", "salidas/layouts"],
  ["@styles", "salidas/styles"],
  ["@domain", "contratos/types"],
  ["@lib", "logica/lib"],
]);

export const toProjectPath = (file) => relative(root, file).replaceAll("\\", "/");

const listFiles = (folder) =>
  readdirSync(folder, { withFileTypes: true }).flatMap((entry) => {
    const file = join(folder, entry.name);
    return entry.isDirectory()
      ? listFiles(file)
      : extensions.has(extname(file)) && !excluded.has(toProjectPath(file))
        ? [file]
        : [];
  });

export const sourceFiles = sourceRoots.flatMap((folder) => listFiles(join(root, folder)));
export const knownFiles = new Set(sourceFiles);

const resolveSpecifier = (from, specifier) => {
  if (specifier.startsWith(".")) return resolve(from, "..", specifier);
  for (const [alias, folder] of aliases) {
    if (specifier.startsWith(`${alias}/`)) {
      return join(root, folder, specifier.slice(alias.length + 1));
    }
  }
  return null;
};

export const localImports = (file) => {
  const source = readFileSync(file, "utf8");
  const matches = [
    ...source.matchAll(/\bfrom\s+["']([^"']+)["']/g),
    ...source.matchAll(/\bimport\s+["']([^"']+)["']/g),
  ];
  return matches.flatMap((match) => {
    const candidate = resolveSpecifier(file, match[1]);
    if (!candidate) return [];
    const target = [candidate, ...[...extensions].map((extension) => `${candidate}${extension}`)]
      .find((path) => knownFiles.has(path));
    return [{ specifier: match[1], target }];
  });
};
