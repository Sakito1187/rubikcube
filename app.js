const LEGACY_ROUTES={"oll-front-line":"oll.html","oll-front-l":"oll.html","oll-front-dot":"oll.html","oll-back-sune":"oll.html","oll-back-antisune":"oll.html","oll-back-h":"oll.html","oll-back-l":"oll.html","oll-back-t":"oll.html","oll-back-pi":"oll.html","oll-back-u":"oll.html","pll-front-t":"pll.html","pll-front-y":"pll.html","pll-back-ua":"pll.html","pll-back-ub":"pll.html","pll-back-h":"pll.html","pll-back-z":"pll.html"};
// Old bookmarks such as index.html#oll-back-h keep opening the same case.
const legacyPage=LEGACY_ROUTES[location.hash.slice(1)];
if(document.body.dataset.page==='home' && legacyPage) location.replace(legacyPage+location.hash);

const statusNode=document.querySelector('#offline-status');
const installButton=document.querySelector('#install-app');
let installPrompt;
window.addEventListener('beforeinstallprompt',event=>{
  event.preventDefault();
  installPrompt=event;
  installButton.hidden=false;
});
installButton.addEventListener('click',async()=>{
  if(!installPrompt) return;
  await installPrompt.prompt();
  installPrompt=null;
  installButton.hidden=true;
});
window.addEventListener('appinstalled',()=>{installButton.hidden=true;});

if('serviceWorker' in navigator && location.protocol!=='file:') {
  const hadController=Boolean(navigator.serviceWorker.controller);
  let reloading=false;
  navigator.serviceWorker.addEventListener('controllerchange',()=>{
    if(hadController&&!reloading) {reloading=true;location.reload();}
  });
  statusNode.textContent='オフライン用に保存中…';
  navigator.serviceWorker.register('./sw.js').then(registration=>{
    const track=worker=>{
      if(!worker) return;
      worker.addEventListener('statechange',()=>{
        if(worker.state==='redundant' && !registration.active) statusNode.textContent='保存できませんでした。通信を確認して再読み込みしてください。';
      });
    };
    track(registration.installing);
    registration.addEventListener('updatefound',()=>track(registration.installing));
    return navigator.serviceWorker.ready;
  }).then(()=>{
    const update=()=>{statusNode.textContent=navigator.onLine?'オフラインでも閲覧できます':'オフラインで閲覧中';};
    update();
    window.addEventListener('online',update);
    window.addEventListener('offline',update);
  }).catch(()=>{statusNode.textContent='オフライン保存はHTTPSで開くと利用できます。';});
}
