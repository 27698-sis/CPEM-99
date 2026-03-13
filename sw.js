const CACHE_NAME = 'cpem99-v4'; 
const ASSETS = [
  '/CPEM-99/',
  '/CPEM-99/index.html',
  '/CPEM-99/manifest.json',
  '/CPEM-99/CPEM99.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
