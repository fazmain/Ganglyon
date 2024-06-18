const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.ico', // Adjust based on your file
  '/manifest.json',
  '/static/js/bundle.js', // This might vary based on your build process
  '/static/js/main.chunk.js', // Adjust paths according to your actual project structure
  '/static/js/0.chunk.js' // Adjust paths according to your actual project structure
];

// Installing the service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Handling fetch events to serve app from cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // if cache is available, return it
        }
        return fetch(event.request).then(response => {
          // Check if we received a valid response
          if(!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          var responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
  );
});

// Activating the service worker and removing old cache
self.addEventListener('activate', event => {
  var cacheWhitelist = ['v1'];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
