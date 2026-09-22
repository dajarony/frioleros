/*
SUME DOCBLOCK

Nombre: logica/lib/paths.ts
Tipo: Lógica

Entradas:
- rutas y parámetros de entrada

Acciones:
- aplica reglas puras de navegación

Salidas:
- rutas normalizadas
*/
const normalizeBase = (base: string) => {
  if (!base || base === "/") return "/";
  return `/${base.replace(/^\/+|\/+$/g, "")}/`;
};

export const withBase = (base: string, href: string) => {
  const normalizedBase = normalizeBase(base);

  if (href === "/") {
    return normalizedBase;
  }

  return `${normalizedBase}${href.replace(/^\/+/, "")}`;
};

const normalizePath = (value: string) => {
  const normalized = value.length > 1 ? value.replace(/\/+$/, "") : value;
  return normalized || "/";
};

export const isCurrentPath = (
  currentPath: string,
  base: string,
  href: string,
) => {
  const current = normalizePath(currentPath);
  const target = normalizePath(withBase(base, href));

  if (href === "/") {
    return current === target;
  }

  return current === target || current.startsWith(`${target}/`);
};
