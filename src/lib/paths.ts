export const withBase = (base: string, href: string) => {
  if (href === "/") return base;
  return `${base}${href.replace(/^\//, "")}`;
};

const normalizePath = (value: string) =>
  value.length > 1 ? value.replace(/\/+$/, "") : value;

export const isCurrentPath = (
  currentPath: string,
  base: string,
  href: string,
) => normalizePath(currentPath) === normalizePath(withBase(base, href));
