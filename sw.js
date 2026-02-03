const CACHE_NAME = 'isya301-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/pages/agile-method.html',
    '/pages/qa-chapter5.html',
    '/pages/current-trends.html',
    '/pages/software-engineering.html',
    '/pages/requirements-engineering.html',
    '/pages/software-process.html',
    '/pages/pdf-viewer.html',
    '/pages/flashcards/agile-method.html',
    '/pages/flashcards/qa-chapter5.html',
    '/pages/flashcards/current-trends.html',
    '/pages/flashcards/software-engineering.html',
    '/pages/flashcards/requirements-engineering.html',
    '/pages/flashcards/software-process.html',
    '/assets/Agile Method Development.pdf',
    '/assets/INFORMATION SYSTEMS 3A _QA Chapter 5.pdf',
    '/assets/INFORMATION SYSTEMS 3A-Current trends.pdf',
    '/assets/Introduction to Software Engineering.pdf',
    '/assets/Requirements Engineering Concept.pdf',
    '/assets/Software Process  _Chapter 3.pdf'
];

// Install event - cache files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            .catch(err => console.log('Cache error:', err))
    );
    self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .then(response => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        return response;
                    });
            })
    );
});
