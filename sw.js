/* MJ선생님 영어 복습 — 오프라인 저장 (service worker)
   새 단원을 올릴 때 VERSION 숫자만 올리면 탭에서 새 그림까지 받아 둡니다. */
const VERSION='mj-v10';
const PRECACHE=["./", "index.html", "mjdata/units.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "mjdata/img/almost-spring/cover.jpg", "mjdata/img/almost-spring/p2.jpg", "mjdata/img/almost-spring/p3.jpg", "mjdata/img/almost-spring/p4.jpg", "mjdata/img/almost-spring/p5.jpg", "mjdata/img/almost-spring/p6.jpg", "mjdata/img/almost-spring/p7.jpg", "mjdata/img/almost-spring/p8.jpg", "mjdata/img/birthday-surprise/cover.jpg", "mjdata/img/birthday-surprise/p2.jpg", "mjdata/img/birthday-surprise/p3.jpg", "mjdata/img/birthday-surprise/p4.jpg", "mjdata/img/birthday-surprise/p5.jpg", "mjdata/img/birthday-surprise/p6.jpg", "mjdata/img/birthday-surprise/p7.jpg", "mjdata/img/birthday-surprise/p8.jpg", "mjdata/img/bubbles/cover.jpg", "mjdata/img/bubbles/p2.jpg", "mjdata/img/bubbles/p3.jpg", "mjdata/img/bubbles/p4.jpg", "mjdata/img/bubbles/p5.jpg", "mjdata/img/bubbles/p6.jpg", "mjdata/img/bubbles/p7.jpg", "mjdata/img/bubbles/p8.jpg"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(PRECACHE.map(u=>new Request(u,{cache:'reload'})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);if(url.origin!==location.origin){return}
  const fresh=req.mode==='navigate'||/\.(html|js|webmanifest)$/.test(url.pathname)||url.pathname.endsWith('/');
  if(fresh){ // 화면·단원 데이터: 인터넷 먼저, 안 되면 저장본
    e.respondWith(fetch(req,{cache:'no-cache'}).then(r=>{const cp=r.clone();caches.open(VERSION).then(c=>c.put(req,cp));return r}).catch(()=>caches.match(req).then(r=>r||caches.match('index.html'))));
  }else{ // 그림: 저장본 먼저
    e.respondWith(caches.match(req).then(r=>r||fetch(req).then(n=>{const cp=n.clone();caches.open(VERSION).then(c=>c.put(req,cp));return n})));
  }
});
