# rafyperez.net — sitio v1

Portafolio multimedia de Rafy Pérez. Sitio 100% estático, sin build step.

## Estructura

- `index.html` — estructura y contenido (ES por defecto)
- `styles.css` — tema cinematográfico oscuro, mobile-first
- `app.js` — i18n ES/EN, hero Three.js, facades de YouTube, scroll-reveal, visor de splats
- `splats/` — capturas Gaussian Splat (ver `splats/README.md`)

## Deploy

El repo `rafype2023/rafyperez.net` está conectado a Render como static site
con auto-deploy: cada push a `main` publica automáticamente.

## Idiomas

Conmutador ES/EN visible en el nav, persistido en `localStorage` (`rp-lang`).
Todo el copy vive en el diccionario `I18N` en `app.js` y se aplica a los
atributos `data-i18n`. Para agregar un texto nuevo: añade la clave en ambos
idiomas y el atributo en el HTML.

## Videos

Embeds de YouTube con `youtube-nocookie.com` y facade click-to-play
(el iframe solo se carga al hacer clic). IDs actuales:

- Reel / IA: `Yqm-xNAqMJc` (Puerto Rico vs. WBC)
- Multicámara: `2HaeK7k_jak`
- Drones / 360°: `qckFEER9sBw`
- IA: `D9rP3RyD-Dw` (Héctor Lavoe)
