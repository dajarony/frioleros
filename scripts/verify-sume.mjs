import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { extname, join } from "node:path";
import { compareMap } from "./sume-map-guard.mjs";
import { config, localImports, root, sourceFiles, sourceRoots, toProjectPath } from "./source-graph.mjs";

const extensions = new Set(config.map_guard.source_extensions);
const excluded = new Set(config.map_guard.exclude);
const tracked = execFileSync("git", ["ls-files", "--cached", "--", ...sourceRoots.map((path) => `${path}/`)], {
  cwd: root,
  encoding: "utf8",
}).split(/\r?\n/).filter(Boolean).map((path) => path.replaceAll("\\", "/"))
  .filter((path) => extensions.has(extname(path)) && !excluded.has(path));

const map = JSON.parse(readFileSync(join(root, "mapa-global/arquitectura.yaml"), "utf8"));
const errors = compareMap(tracked, map.modules.map(({ file }) => file));
const moduleSet = new Set(map.modules.map(({ file }) => file));
const actualFiles = new Set(sourceFiles.map(toProjectPath));

if (map.system !== "frioleros" || map.sume_version !== config.version) {
  errors.push("El sistema o la versión SUME del mapa no coincide con .sume.");
}

for (const module of map.modules) {
  if (!actualFiles.has(module.file)) continue;
  const source = readFileSync(join(root, module.file), "utf8");
  if (config.strict_docblock && !source.slice(0, 500).includes("SUME DOCBLOCK")) {
    errors.push(`Falta DOCBLOCK: ${module.file}`);
  }
  const expected = [...new Set(localImports(join(root, module.file)).flatMap(({ target }) => target ? [toProjectPath(target)] : []))].sort();
  const declared = [...new Set(module.depends_on)].sort();
  if (JSON.stringify(expected) !== JSON.stringify(declared)) {
    errors.push(`Dependencias desactualizadas: ${module.file}`);
  }
  for (const dependency of module.depends_on) {
    if (!moduleSet.has(dependency)) errors.push(`Dependencia fuera del mapa: ${module.file} -> ${dependency}`);
  }
}

const pageFiles = tracked.filter((file) => file.startsWith("src/pages/"));
errors.push(...compareMap(pageFiles, map.routes.map(({ entrada }) => entrada)));
const typeFiles = tracked.filter((file) => file.startsWith("contratos/"));
errors.push(...compareMap(typeFiles, map.contracts.map(({ file }) => file)));

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`SUME verificado: ${tracked.length} módulos, ${map.routes.length} rutas, ${map.contracts.length} contratos.`);
}
