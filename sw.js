const VERSION="672383f2deb01db2";
const ASSETS=["app.js","guide.md","icons/icon-180.png","icons/icon-192.png","icons/icon-512.png","images/cube_02.png","images/cube_02.svg","images/cube_03.png","images/cube_03.svg","images/cube_04.png","images/cube_04.svg","images/cube_05.png","images/cube_05.svg","images/cube_06.png","images/cube_06.svg","images/cube_07.png","images/cube_07.svg","images/cube_08.png","images/cube_08.svg","images/cube_09.png","images/cube_09.svg","images/cube_10.png","images/cube_10.svg","images/cube_11.png","images/cube_11.svg","images/cube_12.png","images/cube_12.svg","images/cube_13.png","images/cube_13.svg","images/cube_14.png","images/cube_14.svg","images/cube_15.png","images/cube_15.svg","images/cube_16.png","images/cube_16.svg","images/cube_17.png","images/cube_17.svg","images/initial_02.png","images/initial_02.svg","images/initial_03.png","images/initial_03.svg","images/initial_04.png","images/initial_04.svg","images/initial_05.png","images/initial_05.svg","images/initial_06.png","images/initial_06.svg","images/initial_07.png","images/initial_07.svg","images/initial_08.png","images/initial_08.svg","images/initial_09.png","images/initial_09.svg","images/initial_10.png","images/initial_10.svg","images/initial_11.png","images/initial_11.svg","images/initial_12.png","images/initial_12.svg","images/initial_13.png","images/initial_13.svg","images/initial_14.png","images/initial_14.svg","images/initial_15.png","images/initial_15.svg","images/initial_16.png","images/initial_16.svg","images/initial_17.png","images/initial_17.svg","images/moves/d-prime.svg","images/moves/d.svg","images/moves/f-prime.svg","images/moves/f.svg","images/moves/fw-prime.svg","images/moves/fw.svg","images/moves/m-prime.svg","images/moves/m.svg","images/moves/m2-prime.svg","images/moves/r-prime.svg","images/moves/r.svg","images/moves/r2-prime.svg","images/moves/r2.svg","images/moves/rw-prime.svg","images/moves/rw.svg","images/moves/u-prime.svg","images/moves/u.svg","images/moves/u2-prime.svg","images/moves/u2.svg","index.html","manifest.webmanifest"];
// The build prepends the content version and the exact list of local assets.
const PREFIX='rubik-guide:'+self.registration.scope+':';
const CACHE=PREFIX+VERSION;
const localURL=path=>new URL(path,self.registration.scope).href;
const knownURLs=new Set(ASSETS.map(localURL));

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    await cache.addAll(ASSETS.map(localURL));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url),scope=new URL(self.registration.scope);
  if(url.origin!==scope.origin || !url.pathname.startsWith(scope.pathname)) return;
  const home=url.pathname===scope.pathname || url.pathname===scope.pathname+'index.html';
  if(event.request.mode==='navigate' && home) {
    event.respondWith((async()=>{
      try {
        const response=await fetch(event.request);
        if(response.ok) return response;
      } catch {}
      const cache=await caches.open(CACHE);
      return await cache.match(localURL('index.html')) || Response.error();
    })());
  } else if(knownURLs.has(url.href)) {
    event.respondWith((async()=>{
      const cache=await caches.open(CACHE);
      return await cache.match(event.request) || fetch(event.request);
    })());
  }
});
