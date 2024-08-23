const CACHE_NAME = "my-cache-v1";
const urlsToCache = [
  "public/images/mobile/bangunan.jpg",
  "public/images/mobile/infak.jpg",
  "public/images/mobile/integral.png",
  "public/images/mobile/pembangunan.jpg",
  "public/images/mobile/rencanabangunan.jpg",
  "public/images/mobile/splash.png",
  "public/images/mobile/tagihan.jpg",
  "public/images/mobile/pp.png",
  "public/images/mobile/header.png",
  "public/images/mobile/logo.png",
  "public/images/mobile/atm.jpg",
];

// Event install: Menyimpan file ke cache
self.addEventListener("install", function (event) {
  console.log("Service Worker installing...");
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        console.log("Opened cache");
        return cache.addAll(urlsToCache);
      })
      .catch(function (error) {
        console.error("Cache open failed:", error);
      })
  );
});

// Event activate: Membersihkan cache lama
self.addEventListener("activate", function (event) {
  console.log("Service Worker activating...");
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches
      .keys()
      .then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              // Hapus cache yang tidak ada di whitelist
              console.log("Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .catch(function (error) {
        console.error("Cache cleanup failed:", error);
      })
  );
});

// Event fetch: Menangani permintaan jaringan dan cache
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Jika ada di cache, kembalikan dari cache
      if (response) {
        return response;
      }

      // Jika tidak ada di cache, lakukan fetch dari jaringan
      return fetch(event.request).catch(function () {
        // Jika terjadi kesalahan fetch, bisa mengembalikan fallback response
      });
    })
  );
});
