const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  "/Syiar/public/images/atm.jpg",
  "/Syiar/public/images/mobile/bangunan.jpg",
  "/Syiar/public/images/mobile/infak.jpg",
  "/Syiar/public/images/mobile/integral.png",
  "/Syiar/public/images/mobile/pembangunan.jpg",
  "/Syiar/public/images/mobile/rencanabangunan.jpg",
  "/Syiar/public/images/mobile/splash.png",
  "/Syiar/public/images/mobile/tagihan.jpg",
  "/Syiar/public/images/mobile/pp.png",
  "/Syiar/public/images/mobile/header.png",
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
