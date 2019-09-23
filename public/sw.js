const staticCacheName = 'site-static-v7';
const dynamicCacheName = 'site-dynamic-v10';
const apiBaseUrl = 'localhost:5000'

const assets = [
  '/',
  '/index.html',
  '/js/ui.js',
  '/js/materialize.min.js',
  '/css/styles.css',
  '/css/materialize.min.css',
  '/img/dish.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
  '/fallback.html',
  '/static/js/main.chunk.js',
  '/static/js/bundle.js',
  '/static/js/1.chunk.js',
  '/static/js/0.chunk.js',
  '/main.233eda56b79898b54a21.hot-update.js',
  '/sockjs-node/info?t=1569007078543',
  '/sockjs-node/info?t=1569007109149'
];

// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size))
      }
    })
  })
}

// install service worker
self.addEventListener('install', evt => {
  // console.log("service worker has been installed");
  evt.waitUntil(
    caches.open(staticCacheName)
      .then(cache => {
        cache.addAll(assets);
      })
  );
});

// activate event
self.addEventListener('activate', evt => {
  // console.log("service worer has been activated");
  evt.waitUntil(
    caches.keys()
      .then(keys => {
        // deleting old caches
        // console.log(keys); 
        return Promise.all(keys
          .filter(key => key !== staticCacheName && key !== dynamicCacheName)
          .map(key => caches.delete(key)))
      })
  )
});

// fetch event
self.addEventListener('fetch', evt => {
  // if making a request to the api then don't intercept
  if(evt.request.url.indexOf(apiBaseUrl) === -1) {
    evt.respondWith(
      caches.match(evt.request)
        .then(cacheResponse => {
          // return the cache matching value to the request OR
          // make the request to the server AND store the response on the cache
          return cacheResponse || fetch(evt.request).then(fetchRes => {
            return caches.open(dynamicCacheName).then(cache => {
              cache.put(evt.request.url, fetchRes.clone());
              limitCacheSize(dynamicCacheName, 15);
              return fetchRes;
            })
          });
        }).catch(() => {
          // for each route the user may try, we must have an if statement like so
          if(evt.request.url.indexOf('/about') > -1) {
            return caches.match('/fallback.html');
          }

          if(evt.request.url.indexOf('/contact') > -1) {
            return caches.match('/fallback.html');
          }

          if(evt.request.url.indexOf('/home') > -1) {
            return caches.match('/fallback.html');
          }

          if(evt.request.url.indexOf('/') > -1) {
            return caches.match('/fallback.html');
          }
          // NOTE: can also check for other file formats e.g. .png, .json, etc
        })
    );
  }
});

/*
 cache.add(resource) goes to the server and gets the resource and then puts it into the cache
 cache.put(key, resource) only puts the resource on the cache, it must already have the resource 
*/
