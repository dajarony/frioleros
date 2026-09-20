export const withBase = (base: string, href: string) => {
  if (href === "/") return base;
  return `${base}${href.replace(/^\//, "")}`;
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

  if (href === "/") return current === target;

  return current === target || current.startsWith(`${target}/`);
};
