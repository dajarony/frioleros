import { localImports, sourceFiles, toProjectPath } from "./source-graph.mjs";

const visited = new Set();
const active = new Set();
const errors = [];

const visit = (file) => {
  if (active.has(file)) {
    errors.push(`Dependencia circular: ${toProjectPath(file)}`);
    return;
  }
  if (visited.has(file)) return;
  active.add(file);
  for (const { specifier, target } of localImports(file)) {
    if (!target) {
      errors.push(`${toProjectPath(file)}: import local sin módulo: ${specifier}`);
      continue;
    }
    visit(target);
  }
  active.delete(file);
  visited.add(file);
};

for (const file of sourceFiles) {
  if (toProjectPath(file).startsWith("src/pages/")) visit(file);
}

for (const file of sourceFiles) {
  if (!visited.has(file)) errors.push(`Módulo sin ruta de uso: ${toProjectPath(file)}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Fuente verificada: ${sourceFiles.length} módulos alcanzables desde las rutas Astro.`);
}
