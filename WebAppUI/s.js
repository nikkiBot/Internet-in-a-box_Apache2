self.addEventListener("install",e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./","./style.css",
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
		"sw.js"]);
        })
    );
});

self.addEventListener("fetch",e => {
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );
});
