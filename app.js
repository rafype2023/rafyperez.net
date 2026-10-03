/* ============================================================
   Rafy Pérez — portfolio app
   - Bilingual ES/EN (localStorage persisted)
   - Three.js hero with graceful degradation
   - Click-to-play YouTube facades (privacy-enhanced)
   - Scroll-reveal animations
   - Gaussian Splat viewer scaffold
   ============================================================ */
'use strict';

/* ---------------- i18n ---------------- */
const I18N = {
  es: {
    'meta.desc': 'Rafy Pérez — portafolio multimedia: multicámara, drones, video 360°, IA y 3D. Un one-man shop que pone las cámaras, graba y edita.',
    'nav.reel': 'Reel',
    'nav.caps': 'Capacidades',
    'nav.projects': 'Proyectos',
    'nav.evo': 'Evolución',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'hero.eyebrow': 'Portafolio multimedia',
    'hero.tagline': 'Multicámara · Drones · 360° · IA · 3D. Pongo las cámaras, grabo y edito.',
    'hero.cta': 'Ver el reel',
    'reel.eyebrow': 'Reel',
    'reel.title': 'Lo más reciente',
    'reel.desc': 'Pieza documental creada con un pipeline asistido por IA: imágenes generadas con Gemini, Veo 3 y Seedance, música con SUNO y edición en DaVinci Resolve.',
    'caps.eyebrow': 'Capacidades',
    'caps.title': 'Cinco formas de contar historias',
    'caps.subtitle': 'Cada tarjeta trae una pieza real.',
    'cap1.title': 'Multicámara',
    'cap1.desc': 'Grabación y edición con múltiples cámaras sincronizadas: eventos, música y acción desde todos los ángulos.',
    'cap2.title': 'Drones',
    'cap2.desc': 'Tomas aéreas cinematográficas con drones, incluyendo cámara 360°.',
    'cap3.title': 'Video inmersivo 360°',
    'cap3.desc': 'Video esférico navegable: el espectador decide a dónde mirar.',
    'cap4.title': 'IA en producción',
    'cap4.desc': 'Generación de imagen, video y música asistida por IA, con edición y criterio humano.',
    'cap5.title': 'Gaussian Splats & 3D',
    'cap5.desc': 'Capturas volumétricas (Gaussian Splats) y renders 3D explorables directo en el navegador.',
    'hint360': 'Arrastra para mirar alrededor',
    'proj.eyebrow': 'Proyectos',
    'proj.title': 'Selección del canal',
    'proj.subtitle': 'Cada pieza muestra una técnica en acción.',
    'p1.desc': 'Pipeline de IA: Gemini · Veo 3 · Seedance 2.0 · Runway · Freepik · Música SUNO · Edición DaVinci Resolve.',
    'p2.title': 'Multicámara en vivo',
    'p2.desc': 'Cobertura con múltiples ángulos sincronizados.',
    'p3.title': 'Dron 360°',
    'p3.desc': 'Vuelo con dron y cámara 360°: arrastra para mirar alrededor.',
    'p4.title': 'Héctor Lavoe — historia documental',
    'p4.desc': 'Documental biográfico con pipeline asistido por IA.',
    'tag.ai': 'IA',
    'tag.doc': 'Documental',
    'tag.multi': 'Multicámara',
    'tag.drone': 'Drones',
    'evo.eyebrow': 'Mi evolución',
    'evo.title': 'De la 8mm a la IA',
    'evo.desc': 'Once épocas, una sola pasión: de la cámara 8mm de mi hermano al dron con IA. Mi historia, contada con mis propios equipos.',
    'about.eyebrow': 'Sobre mí',
    'about.title': 'Sobre mí',
    'about.bio': 'Soy Rafy Pérez, un one-man shop de multimedia. Grabo desde niño —empecé a escondidas con la cámara 8mm de mi hermano— y edito desde los tiempos del Commodore Amiga. Hoy trabajo con cámaras mirrorless, pocket y 360°, edito en DaVinci Resolve y mezclo décadas de oficio con las herramientas más nuevas, incluyendo IA. Pongo las cámaras, grabo y edito: mayormente por el disfrute de hacerlo.',
    'about.yt': 'Ver el canal de YouTube',
    'contact.eyebrow': 'Contacto',
    'contact.title': 'Contacto',
    'contact.desc': '¿Un proyecto, una idea, una colaboración? Escríbeme.',
    'contact.email': 'Escríbeme',
    'footer.tag': 'Multimedia · 3D · IA',
    'facade.play': 'Reproducir video',
    'splat.title': 'Visor de Gaussian Splats',
    'splat.desc': 'Aún no hay capturas cargadas. Cuando agregues tus archivos .ply, aparecerán aquí listos para rotar, acercar y explorar.',
    'splat.hint': 'splats/ + manifest.json — ver README en la carpeta',
    'splat.loading': 'Cargando captura…',
    'splat.error': 'No se pudo cargar el visor 3D. Revisa tu conexión e inténtalo de nuevo.'
  },
  en: {
    'meta.desc': 'Rafy Pérez — multimedia portfolio: multi-camera, drones, 360° video, AI and 3D. A one-man shop: I set up the cameras, shoot, and edit.',
    'nav.reel': 'Reel',
    'nav.caps': 'Capabilities',
    'nav.projects': 'Projects',
    'nav.evo': 'Evolution',
    'nav.about': 'About me',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Multimedia portfolio',
    'hero.tagline': 'Multi-camera · Drones · 360° · AI · 3D. I set up the cameras, shoot, and edit.',
    'hero.cta': 'Watch the reel',
    'reel.eyebrow': 'Reel',
    'reel.title': 'Latest work',
    'reel.desc': 'Documentary piece built with an AI-assisted pipeline: imagery from Gemini, Veo 3 and Seedance, music from SUNO, edited in DaVinci Resolve.',
    'caps.eyebrow': 'Capabilities',
    'caps.title': 'Five ways to tell stories',
    'caps.subtitle': 'Each card carries a real piece.',
    'cap1.title': 'Multi-camera',
    'cap1.desc': 'Recording and editing with synchronized multiple cameras: events, music and action from every angle.',
    'cap2.title': 'Drones',
    'cap2.desc': 'Cinematic aerial shots with drones, including 360° cameras.',
    'cap3.title': 'Immersive 360° video',
    'cap3.desc': 'Navigable spherical video: the viewer decides where to look.',
    'cap4.title': 'AI in production',
    'cap4.desc': 'AI-assisted image, video and music generation, with human editing and judgment.',
    'cap5.title': 'Gaussian Splats & 3D',
    'cap5.desc': 'Volumetric captures (Gaussian Splats) and 3D renders explorable right in the browser.',
    'hint360': 'Drag to look around',
    'proj.eyebrow': 'Projects',
    'proj.title': 'Channel selection',
    'proj.subtitle': 'Each piece shows a technique in action.',
    'p1.desc': 'AI pipeline: Gemini · Veo 3 · Seedance 2.0 · Runway · Freepik · SUNO music · DaVinci Resolve edit.',
    'p2.title': 'Live multi-camera',
    'p2.desc': 'Coverage with synchronized multiple angles.',
    'p3.title': '360° drone',
    'p3.desc': 'Drone flight with 360° camera: drag to look around.',
    'p4.title': 'Héctor Lavoe — documentary story',
    'p4.desc': 'Biographical documentary with AI-assisted pipeline.',
    'tag.ai': 'AI',
    'tag.doc': 'Documentary',
    'tag.multi': 'Multi-camera',
    'tag.drone': 'Drones',
    'evo.eyebrow': 'My evolution',
    'evo.title': 'From 8mm to AI',
    'evo.desc': 'Eleven eras, one passion: from my brother\u2019s 8mm camera to the AI drone. My story, told with my own gear.',
    'about.eyebrow': 'About me',
    'about.title': 'About me',
    'about.bio': "I'm Rafy Pérez, a one-man multimedia shop. I've been shooting since I was a kid — I started in secret with my brother's 8mm camera — and editing since the Commodore Amiga days. Today I shoot mirrorless, pocket, and 360° cameras, edit in DaVinci Resolve, and blend decades of craft with the newest tools, including AI. I set up the cameras, shoot, and edit — mostly for the joy of it.",
    'about.yt': 'Watch the YouTube channel',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Contact',
    'contact.desc': 'A project, an idea, a collaboration? Write to me.',
    'contact.email': 'Email me',
    'footer.tag': 'Multimedia · 3D · AI',
    'facade.play': 'Play video',
    'splat.title': 'Gaussian Splat viewer',
    'splat.desc': "No captures loaded yet. When you add your .ply files, they'll appear here ready to rotate, zoom and explore.",
    'splat.hint': 'splats/ + manifest.json — see README in the folder',
    'splat.loading': 'Loading capture…',
    'splat.error': 'Could not load the 3D viewer. Check your connection and try again.'
  }
};

let lang = 'es';
try {
  const saved = localStorage.getItem('rp-lang');
  if (saved === 'es' || saved === 'en') lang = saved;
} catch (e) { /* storage unavailable: keep default */ }

const t = (key) => (I18N[lang] && I18N[lang][key]) || I18N.es[key] || key;

function applyLang(next) {
  lang = next;
  try { localStorage.setItem('rp-lang', lang); } catch (e) { /* ignore */ }
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const val = t(el.getAttribute('data-i18n'));
    if (val !== undefined) el.textContent = val;
  });
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', t('meta.desc'));
  document.querySelectorAll('.lang-toggle button').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });
  renderFacades();   // rebuild play-button labels
  initSplats();      // re-render splat panel copy
}

document.querySelectorAll('.lang-toggle button').forEach((b) => {
  b.addEventListener('click', () => applyLang(b.dataset.lang));
});

/* ---------------- YouTube facades (privacy-enhanced, click-to-play) ---------------- */
const PLAY_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';

function renderFacades() {
  document.querySelectorAll('.yt').forEach((box) => {
    if (box.dataset.played === '1') return; // already an iframe
    const id = box.dataset.video;
    const title = box.getAttribute('data-title') || 'Video';
    box.innerHTML = '';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'yt-facade';
    btn.setAttribute('aria-label', t('facade.play') + ': ' + title);
    const img = document.createElement('img');
    img.src = 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg';
    img.alt = title;
    img.loading = 'lazy';
    const play = document.createElement('span');
    play.className = 'yt-play';
    play.innerHTML = PLAY_SVG;
    btn.appendChild(img);
    btn.appendChild(play);
    btn.addEventListener('click', () => {
      const frame = document.createElement('iframe');
      frame.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      frame.title = title;
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      frame.allowFullscreen = true;
      box.dataset.played = '1';
      box.innerHTML = '';
      box.appendChild(frame);
    }, { once: true });
    box.appendChild(btn);
  });
}

/* ---------------- Scroll reveal ---------------- */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el) => io.observe(el));
}

/* ---------------- Hero: lightweight Three.js particles ----------------
   Degrades gracefully: if the CDN or WebGL fails, the CSS gradient
   behind the canvas remains and nothing breaks. */
function initHero() {
  const canvas = document.getElementById('hero-canvas');
  try {
    if (typeof THREE === 'undefined' || !canvas) return;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.z = 6;

    // Particle cloud: two layers for depth
    function makeCloud(count, spread, size, color, opacity) {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * spread;
        pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
        pos[i * 3 + 2] = (Math.random() - 0.5) * spread;
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        size, color, transparent: true, opacity,
        blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
      });
      return new THREE.Points(geo, mat);
    }
    const layer1 = makeCloud(450, 14, 0.045, 0xe0a83c, 0.75);
    const layer2 = makeCloud(350, 18, 0.03, 0x7f9cff, 0.5);
    const group = new THREE.Group();
    group.add(layer1, layer2);
    scene.add(group);

    const mouse = { x: 0, y: 0 };
    window.addEventListener('pointermove', (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    function resize() {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', resize);
    resize();

    const reduceMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    function frame(now) {
      group.rotation.y += 0.0009;
      group.rotation.x += 0.00025;
      // ease camera toward the pointer for a subtle parallax feel
      camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.03;
      camera.position.y += (-mouse.y * 0.4 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      if (!reduceMotion) raf = requestAnimationFrame(frame);
    }
    renderer.render(scene, camera); // always paint at least one frame
    if (!reduceMotion) raf = requestAnimationFrame(frame);
  } catch (e) {
    // WebGL unavailable: CSS gradient stays as the hero background.
  }
}

/* ---------------- Gaussian Splat viewer scaffold ----------------
   Looks for splats/manifest.json, e.g.: { "files": ["plaza.ply"] }
   - Found + non-empty  -> loads @mkkellogg/gaussian-splats-3d (CDN,
     on demand) and renders each capture with orbit controls.
   - Missing/empty      -> tasteful placeholder with setup instructions.
   See splats/README.md for how to add captures. */
const GSPLAT_CDN = 'https://cdn.jsdelivr.net/npm/@mkkellogg/gaussian-splats-3d@0.4.7/build/gaussian-splats-3d.module.js';
let splatViewer = null;
let splatLoading = false;

function splatPlaceholderHTML() {
  return (
    '<div class="splat-empty">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M12 2.5l8.5 5v9L12 21.5 3.5 16.5v-9z"/><path d="M12 11.5L3.5 6.7M12 11.5l8.5-4.8M12 11.5V21"/></svg>' +
    '<h4>' + t('splat.title') + '</h4>' +
    '<p>' + t('splat.desc') + '</p>' +
    '<code>' + t('splat.hint') + '</code>' +
    '</div>'
  );
}

async function initSplats() {
  const panel = document.getElementById('splat-panel');
  if (!panel) return;
  if (splatLoading) return;
  // If a viewer is already running, keep it; just refresh nothing.
  if (splatViewer) return;

  let files = null;
  try {
    const res = await fetch('splats/manifest.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('no manifest');
    const data = await res.json();
    if (data && Array.isArray(data.files) && data.files.length) files = data.files;
    else throw new Error('empty');
  } catch (e) {
    panel.innerHTML = splatPlaceholderHTML();
    return;
  }
  buildSplatViewer(panel, files);
}

function buildSplatViewer(panel, files) {
  panel.innerHTML = '';
  const view = document.createElement('div');
  view.className = 'splat-view';
  const bar = document.createElement('div');
  bar.className = 'splat-files';
  const status = document.createElement('div');
  status.className = 'splat-status';
  panel.appendChild(view);
  panel.appendChild(bar);
  panel.appendChild(status);

  const buttons = files.map((f, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = f;
    b.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
    b.addEventListener('click', () => {
      buttons.forEach((x) => x.setAttribute('aria-pressed', 'false'));
      b.setAttribute('aria-pressed', 'true');
      loadSplatFile(f, view, status);
    });
    bar.appendChild(b);
    return b;
  });

  loadSplatFile(files[0], view, status);
}

async function loadSplatFile(file, view, status) {
  if (splatLoading) return;
  splatLoading = true;
  status.textContent = t('splat.loading');
  try {
    // Dispose previous scene cleanly before creating a new viewer.
    if (splatViewer) {
      try { splatViewer.dispose(); } catch (e) { /* ignore */ }
      splatViewer = null;
    }
    view.innerHTML = '';
    const mod = await import(GSPLAT_CDN);
    splatViewer = new mod.Viewer({
      cameraUp: [0, -1, 0],
      initialCameraPosition: [0, -1.2, 3.2],
      initialCameraLookAt: [0, 0, 0],
      rootElement: view,
      useBuiltInControls: true
    });
    await splatViewer.addSplatScene('splats/' + file, {
      showLoadingUI: true,
      progressiveLoad: true
    });
    splatViewer.start();
    status.textContent = file;
  } catch (err) {
    status.textContent = t('splat.error');
  } finally {
    splatLoading = false;
  }
}

/* ---------------- Boot ---------------- */
applyLang(lang);
initReveal();
initHero();
