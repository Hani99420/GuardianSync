const CACHE_VERSION = 'v2';

self.addEventListener('install', function(e) {
    self.skipWaiting();
});

self.addEventListener('activate', function(e) {
    e.waitUntil(
        caches.keys().then(keys => 
            Promise.all(keys.map(key => caches.delete(key)))
        )
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(fetch(e.request));
});
