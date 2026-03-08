self.addEventListener('install', event => {
  event.waitUntil(caches.open('navigator-v4').then(cache => cache.addAll(['/', '/manifest.webmanifest', '/icon-192.png', '/icon-512.png'])));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(r => r || fetch(event.request)));
});
