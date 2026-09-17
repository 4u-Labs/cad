const CACHE_NAME = 'cadclone-v1.6.1';
const ASSETS = [
  './',
  './index.php',
  './privacidade.php',
  './termos.php',
  './suporte.php',
  './tutorial.php',
  './cad_i18n.js',
  './cad_blocks.js',
  './cad_engine.js',
  './command_system.js',
  './cad_underlay.js',
  './osnap.js',
  './dxf_io.js',
  './pdf_export.js',
  './cadicon.png',
  './favicon.ico',
  './favicon.png',
  './favicon-16x16.png',
  './favicon-32x32.png',
  './favicon-48x48.png',
  './apple-touch-icon.png',
  './logo.png',
  './icon-192.png',
  './icon-512.png',
  './favicon.svg',
  './manifest.json',
  './libs/dxf-parser.min.js',
  './libs/jspdf.umd.min.js',
  './libs/pdf.min.js',
  './libs/pdf.worker.min.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : null)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  
  if (e.request.mode === 'navigate' || url.pathname.endsWith('.php') || url.pathname.endsWith('.js')) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() => caches.match(e.request).then((res) => res || caches.match('./index.php')))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then((cached) => cached || fetch(e.request))
    );
  }
});
