const CACHE_NAME = 'cache-3';

self.addEventListener('install', event => {
    //1º Grabamos a cache
    const intalacion = caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll([
                '/',
                '/scaperoom.html',
                '/scaperoom/about.html',
                '/scaperoom/style.css',
                '/scaperoom/modal.css',
                '/scaperoom/app.js',
                '/scaperoom/fonts/Yellowtail-Regular.ttf',
                '/scaperoom/img/carta.png',
                '/scaperoom/img/fondo.jpg',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'                
            ]);
        });

    //2º esperamos a que todo se guarde 
    //en la caché para terminar la instalación           
    event.waitUntil(intalacion);
});


self.addEventListener('fetch', event => {
     const miRespuesta = caches.match(event.request)
        .then(res => {
            //si existe el archivo lo devuelva
            if (res) return res;

            console.log('SW-f', 'No existe el archivo: ', event.request.url);
            //si no existe el archivo lo busco
            return fetch(event.request)
                .then(newResp => {
                    // 1º lo guardo al caché 
                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, newResp);
                        });

                    // 2º lo devuelvo 
                    return newResp.clone();
                });

        });
    event.respondWith(miRespuesta);

});