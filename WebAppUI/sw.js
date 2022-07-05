'use strict'

const CACHE_NAME = 'cache-v1';
// The files we want to cache
const resourceList = [
	 "./",
         "./style.css",
         "./img/boy.png",
         "./img/boy512.png",
         "./img/swecha.png",     
         "/font/socialico_plus-webfont.eot",
         "/font/socialico_plus-webfont.svg",
         "/font/socialico_plus-webfont.ttf",
         "/font/socialico_plus-webfont.woff",
         "/font/socialico_plus-webfont.woff2",
         "/font/socialico-webfont.eot",
         "/font/socialico-webfont.svg",
         "/font/socialico-webfont.ttf",
         "/font/socialico-webfont.woff",
         "/font/socialico-webfont.woff",
         "/font/socialico-webfont.woff2",
         "/font/svg11.dtd",
         "sw.js"
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => {
    return cache.addAll(resourceList);
  }));
});

function addToCache(cacheName, resourceList) {
  caches.open(cacheName).then(cache => {
    return cache.addAll(resourceList);
  });
}

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {
    return response || fetch(event.request);
  }));
});
