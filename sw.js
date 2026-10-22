/* Increment VERSION whenever any cached application file changes. */
const VERSION='1.1.0';
const PREFIX='outdoor-brief:'+self.registration.scope+':';
const CACHE=PREFIX+VERSION;
const FILES=['./','./index.html','./catalog.js','./brief.js','./app.js','./style.css','./help.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES))));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const k of await caches.keys())if(k.startsWith(PREFIX)&&k!==CACHE)await caches.delete(k);await self.clients.claim();})()));
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||!url.href.startsWith(self.registration.scope))return;
 // Cache only this application's known shell; never cache exported form contents.
 const known=FILES.some(f=>new URL(f,self.registration.scope).href===url.href);if(!known)return;
 event.respondWith(caches.open(CACHE).then(async cache=>(await cache.match(event.request))||fetch(event.request)));
});
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting();
 if(event.data?.type==='CHECK_READY')event.waitUntil((async()=>{const cache=await caches.open(CACHE);const found=await Promise.all(FILES.map(f=>cache.match(new URL(f,self.registration.scope).href)));event.source?.postMessage({type:'OFFLINE_READY',version:VERSION,ready:found.every(Boolean)});})());
});
