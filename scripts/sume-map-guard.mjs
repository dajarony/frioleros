export const compareMap = (trackedFiles, declaredFiles) => {
  const tracked = new Set(trackedFiles);
  const declared = new Set(declaredFiles);
  const errors = [];
  for (const file of tracked) {
    if (!declared.has(file)) errors.push(`Falta en el mapa: ${file}`);
  }
  for (const file of declared) {
    if (!tracked.has(file)) errors.push(`Entrada obsoleta: ${file}`);
  }
  const counts = new Map();
  for (const file of declaredFiles) counts.set(file, (counts.get(file) ?? 0) + 1);
  for (const [file, count] of counts) {
    if (count > 1) errors.push(`Entrada duplicada (${count}): ${file}`);
  }
  return errors;
};
