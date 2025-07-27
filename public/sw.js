// Service Worker for John & Emily's Wedding Website
// This service worker provides basic PWA functionality without aggressive caching
// to ensure users always receive the latest updates

// Install event - skip caching to avoid update issues
self.addEventListener("install", (event) => {
  console.log("Service Worker: Install event");
  // Skip waiting to activate immediately
  self.skipWaiting();
});

// Activate event - clean up any existing caches and take control immediately
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activate event");
  
  event.waitUntil(
    // Clear all existing caches to ensure fresh content
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          console.log("Service Worker: Deleting cache", cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      // Take control of all clients immediately
      return self.clients.claim();
    })
  );
});

// Fetch event - always fetch from network to ensure fresh content
self.addEventListener("fetch", (event) => {
  // Always fetch from network, no caching
  event.respondWith(
    fetch(event.request).catch((error) => {
      console.log("Service Worker: Fetch failed", error);
      // If network fails, we don't have a cache fallback
      // This ensures users see network errors rather than stale content
      throw error;
    })
  );
});

// Message event - handle messages from the main thread
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
