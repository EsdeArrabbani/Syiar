const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  "/public/images/atm.jpg",
  "/public/images/mobile/bangunan.jpg",
  "/public/images/mobile/infak.jpg",
  "/public/images/mobile/integral.png",
  "/public/images/mobile/pembangunan.jpg",
  "/public/images/mobile/rencanabangunan.jpg",
  "/public/images/mobile/splash.png",
  "/public/images/mobile/tagihan.jpg",
  "/public/images/mobile/pp.png",
  "/public/images/mobile/header.png",
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    }).catch((error) => {
      console.error('Failed to cache assets:', error);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response; // Return cached response if found
      }
      return fetch(event.request).then((networkResponse) => {
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return networkResponse;
      }).catch((error) => {
        console.error('Failed to fetch resource:', error);
      });
    }).catch((error) => {
      console.error('Error in fetch handler:', error);
    })
  );
});
