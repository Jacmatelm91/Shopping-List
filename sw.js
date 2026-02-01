const CACHE_NAME = 'jacob-list-v13';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://unpkg.com/html5-qrcode'
];

// Install event: Cache files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch event: Serve from cache if offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
