// ===== Bava Restaurant Service Worker =====

const CACHE_NAME = 'bava-v1';
const STATIC_ASSETS = [
    '/bava-restaurant/',
    '/bava-restaurant/index.html',
    '/bava-restaurant/menu.html',
    '/bava-restaurant/about.html',
    '/bava-restaurant/contact.html',
    '/bava-restaurant/css/style.css',
    '/bava-restaurant/css/responsive.css',
    '/bava-restaurant/js/app.js',
    '/bava-restaurant/js/chatbot.js',
    '/bava-restaurant/js/viewer.js',
    '/bava-restaurant/manifest.json'
];

// Install Event - Cache Static Assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate Event - Clean Old Cache
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cache) => {
                        if (cache !== CACHE_NAME) {
                            console.log('Clearing old cache:', cache);
                            return caches.delete(cache);
                        }
                    })
                );
            })
            .then(() => self.clients.claim())
    );
});

// Fetch Event - Network First, Fallback to Cache
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;

    // Skip external requests (fonts, CDN, etc.)
    if (!event.request.url.startsWith(self.location.origin)) {
        // For external assets, use cache-first for performance
        event.respondWith(
            caches.match(event.request)
                .then((cached) => {
                    if (cached) return cached;
                    return fetch(event.request)
                        .then((response) => {
                            // Cache successful responses
                            if (response.ok) {
                                const clone = response.clone();
                                caches.open(CACHE_NAME).then((cache) => {
                                    cache.put(event.request, clone);
                                });
                            }
                            return response;
                        })
                        .catch(() => {
                            // Return offline fallback for failed requests
                            return caches.match('/bava-restaurant/index.html');
                        });
                })
        );
        return;
    }

    // For local assets, use network-first strategy
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                if (response.ok) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, clone);
                    });
                }
                return response;
            })
            .catch(() => {
                return caches.match(event.request);
            })
    );
});

// Background Sync (for future use)
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-data') {
        console.log('Background sync triggered');
    }
});

// Push Notifications (for future use)
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'New update from Bava Restaurant',
        icon: 'assets/icons/icon-512.svg',
        badge: 'assets/icons/icon-512.svg',
        vibrate: [200, 100, 200],
        tag: 'bava-notification'
    };

    event.waitUntil(
        self.registration.showNotification('Bava Restaurant', options)
    );
});