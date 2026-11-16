// Foto Estudio Graciela · ayudante mínimo para que la app se pueda instalar en el teléfono.
// No guarda copias: siempre pide la versión nueva (así nunca se queda una versión vieja).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="font-family:system-ui;display:grid;place-items:center;min-height:90vh;text-align:center;color:#241d16;background:#f6efe5"><p>Sin conexión.<br>Revisa tu internet y vuelve a abrir la app.</p></body>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
