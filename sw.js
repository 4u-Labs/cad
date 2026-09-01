const CACHE_NAME = 'cadfacil-v1.0';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request)
      .then((response) => response)
      .catch(async () => {
        const cached = await caches.match(e.request);
        if (cached) return cached;
        return new Response('Network error', { status: 408, headers: { 'Content-Type': 'text/plain' } });
      })
  );
});
