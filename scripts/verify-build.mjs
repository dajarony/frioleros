import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";

const dist = resolve("dist");
const origin = "https://dajarony.github.io";
const base = "/frioleros/";
const errors = [];

const listHtml = (folder) =>
  readdirSync(folder, { withFileTypes: true }).flatMap((entry) => {
    const path = join(folder, entry.name);
    return entry.isDirectory() ? listHtml(path) : path.endsWith(".html") ? [path] : [];
  });

const pageUrl = (file) => {
  const path = relative(dist, file).split(sep).join("/");
  return `${origin}${base}${path === "index.html" ? "" : path.replace(/index\.html$/, "")}`;
};

const meta = (html, key, value) => {
  const tag = html.match(new RegExp(`<meta\\s+${key}="${value}"[^>]*>`))?.[0];
  return tag?.match(/\bcontent="([^"]*)"/)?.[1];
};

const localFile = (url) => {
  const pathname = decodeURIComponent(url.pathname);
  if (!pathname.startsWith(base)) return null;
  const path = pathname.slice(base.length);
  return join(dist, path, path.endsWith("/") || !path ? "index.html" : "");
};

const htmlFiles = listHtml(dist);
const indexable = new Set();
let checkedLinks = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const url = pageUrl(file);
  const path = relative(dist, file).split(sep).join("/");
  const robots = meta(html, "name", "robots");
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (robots && !robots.includes("noindex") && canonical !== url) {
    errors.push(`${path}: canonical incorrecta: ${canonical}`);
  }
  if (!meta(html, "name", "description")) errors.push(`${path}: falta la descripción`);
  if (!robots) errors.push(`${path}: falta robots`);
  if ((path === "404.html" || path === "equipo/alumno-ejemplo/index.html") && !robots?.includes("noindex")) {
    errors.push(`${path}: debe llevar noindex`);
  }
  if (robots && !robots.includes("noindex")) indexable.add(url);

  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    let target;
    try {
      target = new URL(match[1].replaceAll("&amp;", "&"), url);
    } catch {
      errors.push(`${path}: URL inválida: ${match[1]}`);
      continue;
    }
    if (target.origin !== origin) continue;
    const destination = localFile(target);
    if (!destination || !existsSync(destination)) {
      errors.push(`${path}: enlace interno sin destino: ${match[1]}`);
    }
    checkedLinks += 1;
  }
}

const sitemap = readFileSync(join(dist, "sitemap.xml"), "utf8");
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]));
for (const url of indexable) {
  if (!sitemapUrls.has(url)) errors.push(`Falta en sitemap: ${url}`);
}
for (const url of sitemapUrls) {
  if (!indexable.has(url)) errors.push(`Sitemap incluye una ruta no indexable: ${url}`);
}

const imageSize = (file) => {
  const image = readFileSync(file);
  if (image.toString("ascii", 0, 4) === "RIFF" && image.toString("ascii", 8, 16) === "WEBPVP8X") {
    return { width: image.readUIntLE(24, 3) + 1, height: image.readUIntLE(27, 3) + 1 };
  }
  if (image.toString("hex", 0, 8) === "89504e470d0a1a0a") {
    return { width: image.readUInt32BE(16), height: image.readUInt32BE(20) };
  }
  return null;
};

const logo = imageSize(join(dist, "brand", "frioleros-bear-a.png"));
if (!logo) {
  errors.push("Formato del símbolo no comprobable: se esperaba PNG");
} else {
  for (const file of htmlFiles) {
    const html = readFileSync(file, "utf8");
    if (meta(html, "property", "og:image:width") !== String(logo.width) || meta(html, "property", "og:image:height") !== String(logo.height)) {
      errors.push(`${relative(dist, file)}: dimensiones OpenGraph incorrectas`);
    }
  }
}

const manifest = JSON.parse(readFileSync(join(dist, "manifest.webmanifest"), "utf8"));
for (const expected of [192, 512]) {
  const fileName = expected === 512 ? "frioleros-bear-a.png" : `frioleros-icon-${expected}.png`;
  const src = `${base}brand/${fileName}`;
  const icon = manifest.icons.find((item) => item.src === src);
  const dimensions = imageSize(join(dist, "brand", fileName));
  if (!dimensions || dimensions.width !== expected || dimensions.height !== expected || icon?.sizes !== `${expected}x${expected}` || icon?.type !== "image/png") {
    errors.push(`Manifest: icono ${expected}x${expected} ausente o incoherente`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Sitio verificado: ${htmlFiles.length} HTML, ${checkedLinks} referencias internas, ${sitemapUrls.size} rutas en sitemap.`);
}
