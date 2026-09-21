# Frioleros

Escaparate profesional para conectar estudiantes de refrigeración industrial en Canarias con empresas y oportunidades reales de desarrollo.

## Principios de arquitectura

- **SRP / una responsabilidad por módulo**
- **Cero código espagueti**
- **Separación estricta entre contenido, presentación y composición**
- **Componentes pequeños, predecibles y reutilizables**
- **Contenido tipado y centralizado**
- **Diseño responsive y accesible**
- **Static-first para rendimiento, seguridad y mantenimiento**
- **Preparado para crecer sin reescribir la base**

## Stack

- Astro
- TypeScript estricto
- GitHub Pages
- GitHub Actions para checks, build y deploy

## Estructura

```text
src/
  components/
    about/
    brand/
    companies/
    contact/
    home/
    layout/
    navigation/
    sections/
    students/
    training/
    ui/
  content/
  layouts/
  lib/
  pages/
  styles/
  types/
public/
  brand/
.github/
  workflows/
```

## Regla de contenido

Los datos editables viven en `src/content/`. Los componentes no deben inventar ni duplicar información.

- Alumnos: `src/content/students.ts`
- Formación y prácticas: `src/content/training.ts`
- Empresas: `src/content/companies.ts`
- Contacto: `src/content/contact.ts`
- Historia del proyecto: `src/content/about.ts`

Los perfiles reales de alumnos se publican solo con autorización. Un perfil con `status: "demo"` se genera para validar el diseño, pero se marca como **noindex** para que los buscadores no lo indexen.

## Mejoras pendientes

El orden de reparación, los contratos de aceptación y el estado de cada fase están en [`docs/PLAN-DE-MEJORAS.md`](docs/PLAN-DE-MEJORAS.md). Los datos y permisos necesarios para activar el contacto, los perfiles reales y las fotografías se detallan en [`docs/ENTRADAS-PARA-PUBLICAR.md`](docs/ENTRADAS-PARA-PUBLICAR.md).

El canal de contacto se configura en `src/content/site.ts` mediante `contactEmail`. Mientras esté vacío, los botones muestran las formas de colaborar sin prometer un envío que aún no está disponible.

## Añadir una foto de práctica

1. Guarda la imagen optimizada dentro de `public/`.
2. Añade su ruta en el campo `image` de la práctica correspondiente en `src/content/training.ts`.
3. No modifiques el componente visual.

## Calidad

Cada push a `main` ejecuta:

```bash
npm install
npm run check
npm run build
```

Si los checks pasan, GitHub Pages publica automáticamente la nueva versión.
