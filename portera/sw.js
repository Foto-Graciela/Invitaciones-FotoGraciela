// PORTERA · funciona sin internet en el salón: guarda la app en el teléfono
// (red primero para tener siempre la versión nueva; si no hay señal, usa la copia guardada)
const CACHE = 'portera-1794704412';
const ARCHIVOS = ['./', 'index.html', 'app.js', 'icono.svg', 'manifest.json', '../plataforma.css', 'c-NRMLNRNR.js','c-OYRBFB6C.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('portera-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;   // Firebase va directo (tiene su propia caché)
  e.respondWith(fetch(e.request).then(r => {
    if (r.ok) { const copia = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); }
    return r;
  }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('index.html'))));
});
