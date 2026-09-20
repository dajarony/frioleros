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

## Arquitectura prevista

```
src/
  components/
    layout/
    navigation/
    sections/
    ui/
  content/
  layouts/
  pages/
  styles/
  types/
public/
  images/
.github/
  workflows/
```

Stack: **Astro + TypeScript**, salida estática para GitHub Pages.

El objetivo es mantener la web simple: Inicio, Quiénes somos, Equipo, Formación/Proyectos, Empresas/Oportunidades y Contacto.
