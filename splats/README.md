# Carpeta `splats/` — capturas Gaussian Splat

El panel "Gaussian Splats & 3D" del sitio busca aquí tus capturas.

## Cómo activar el visor

1. Exporta tus capturas como `.ply` (Gaussian Splat) desde tu app de captura
   (Postshot, Scaniverse, Polycam, etc.).
2. Copia los `.ply` a esta carpeta, por ejemplo:
   - `splats/plaza.ply`
   - `splats/estudio.ply`
3. Crea `splats/manifest.json` con la lista de archivos:
   ```json
   { "files": ["plaza.ply", "estudio.ply"] }
   ```
4. Haz push al repo. El sitio cargará el visor 3D automáticamente
   (usa la librería `@mkkellogg/gaussian-splats-3d` desde CDN, solo cuando
   el manifest existe).

Sin `manifest.json`, el panel muestra un estado placeholder elegante
indicando que aún no hay capturas.

## Notas

- Los `.ply` de splats suelen pesar decenas de MB: se cargan con
  `progressiveLoad` para que el visor arranque antes de terminar la descarga.
- Para mejor rendimiento puedes convertir a `.ksplat` (formato comprimido
  de la misma librería); el visor también los acepta — solo cámbialos en
  el manifest.
