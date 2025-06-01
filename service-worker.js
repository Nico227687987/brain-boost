self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('brain-boost-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'manifest.webmanifest',
        'service-worker.js',
        'icon-192.png',
        'icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
