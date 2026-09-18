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
