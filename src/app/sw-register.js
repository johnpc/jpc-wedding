// Service Worker Registration - Modified to ensure updates are received
export function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope,
          );

          // Check for updates every time the page loads
          registration.update();

          // Listen for updates
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener("statechange", () => {
                if (
                  newWorker.state === "installed" &&
                  navigator.serviceWorker.controller
                ) {
                  // New service worker is available
                  console.log("New service worker available");

                  // Optionally, you could show a notification to the user here
                  // For now, we'll just reload the page to get the latest version
                  if (
                    confirm(
                      "A new version of the website is available. Reload to get the latest updates?",
                    )
                  ) {
                    window.location.reload();
                  }
                }
              });
            }
          });
        })
        .catch((err) => {
          console.log("ServiceWorker registration failed: ", err);
        });

      // Also clear any existing caches on page load to ensure fresh content
      if ("caches" in window) {
        caches.keys().then((cacheNames) => {
          cacheNames.forEach((cacheName) => {
            if (
              cacheName.includes("je-wedding") ||
              cacheName.includes("wedding")
            ) {
              console.log("Clearing old cache:", cacheName);
              caches.delete(cacheName);
            }
          });
        });
      }
    });
  }
}
