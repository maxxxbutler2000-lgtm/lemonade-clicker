'use strict';
const SURPRISE_DELAYS={golden:{min:180000,max:360000},happy:{min:300000,max:540000}};
function surpriseDelay(kind){const range=SURPRISE_DELAYS[kind];return range.min+Math.random()*(range.max-range.min);}
// Both surprise lemons use the same five-second claim window.
const lemonOffers=new Map();
function hideLemonOffer(id){
 const offer=lemonOffers.get(id);
 if(offer){clearTimeout(offer.warning);clearTimeout(offer.expiry);}
 lemonOffers.delete(id);$(id).hidden=true;$(id).classList.remove('expiring');
}
function lemonObstacles(button){
 return [...document.querySelectorAll('header,.score-panel,.cloud-status,.scene-label,.click-area,.hint,.milestone,.shop-handle,.happy-timer,#toast,#shop,#golden-lemon,#happy-lemon')]
 .filter(el=>el!==button&&!el.hidden&&getComputedStyle(el).display!=='none')
 .map(el=>el.getBoundingClientRect()).filter(r=>r.width&&r.height);
}
function lemonSpotFree(x,y,w,h,obstacles){
 return obstacles.every(r=>x+w+8<=r.left||x-8>=r.right||y+h+8<=r.top||y-8>=r.bottom);
}
function positionLemonOffer(button){
 const w=button.offsetWidth,h=button.offsetHeight,pad=12;
 const top=(document.querySelector('header')?.getBoundingClientRect().bottom||50)+pad;
 const maxX=innerWidth-w-pad,maxY=innerHeight-h-pad;
 if(maxX<pad||maxY<top)return false;
 const obstacles=lemonObstacles(button),spots=[];
 for(let row=0;row<=12;row++)for(let col=0;col<=16;col++){
  const x=pad+(maxX-pad)*col/16,y=top+(maxY-top)*row/12;
  if(lemonSpotFree(x,y,w,h,obstacles))spots.push({x,y});
 }
 if(!spots.length)return false;
 const spot=spots[Math.floor(Math.random()*spots.length)];
 button.style.left=spot.x+'px';button.style.top=spot.y+'px';return true;
}
function showLemonOffer(id){
 if(window.cloudPaused||document.hidden||document.querySelector('dialog[open]'))return false;
 hideLemonOffer(id);const button=$(id);button.hidden=false;
 if(!positionLemonOffer(button)){button.hidden=true;return false;}
 const until=Date.now()+5000;
 const warning=setTimeout(()=>button.classList.add('expiring'),3000);
 const expiry=setTimeout(()=>hideLemonOffer(id),5000);
 lemonOffers.set(id,{until,warning,expiry});return true;
}
function claimLemonOffer(id){
 const offer=lemonOffers.get(id);
 const valid=!!offer&&!$(id).hidden&&!window.cloudPaused&&!document.hidden&&Date.now()<offer.until;
 hideLemonOffer(id);return valid;
}
function checkLemonOffers(){
 for(const [id,offer] of lemonOffers){
  const button=$(id);
  if(window.cloudPaused||document.hidden||document.querySelector('dialog[open]')||Date.now()>=offer.until){hideLemonOffer(id);continue;}
  const r=button.getBoundingClientRect();
  if(r.left<12||r.top<50||r.right>innerWidth-12||r.bottom>innerHeight-12||!lemonSpotFree(r.left,r.top,r.width,r.height,lemonObstacles(button))){
   if(!positionLemonOffer(button))hideLemonOffer(id);
  }
 }
}
setInterval(checkLemonOffers,200);
window.addEventListener('resize',checkLemonOffers);

let festivalVisibleSince=Date.now(),festivalStarted=0,nextFestivalAt=Date.now()+surpriseDelay('happy'),festivalOfferUntil=0;
function festivalMultiplier(){return !window.cloudPaused&&!document.hidden&&festivalUntil>Date.now()?2:1;}
function festivalBonusSeconds(seconds){if(window.cloudPaused||document.hidden||!festivalStarted)return 0;const now=Date.now();return Math.max(0,Math.min(now,festivalUntil)-Math.max(now-seconds*1000,festivalStarted,festivalVisibleSince))/1000;}
function clearFestival(){festivalStarted=festivalUntil=festivalOfferUntil=0;hideLemonOffer('happy-lemon');hideLemonOffer('golden-lemon');$('happy-timer').hidden=true;document.body.classList.remove('happy-hour');$('lemon-rain').hidden=true;$('lemon-rain').replaceChildren();nextFestivalAt=Date.now()+surpriseDelay('happy');if(typeof scheduleGolden==='function')scheduleGolden();}
function offerFestival(){if(window.cloudPaused||document.hidden||festivalUntil>Date.now()||document.querySelector('dialog[open]'))return false;if(!showLemonOffer('happy-lemon'))return false;festivalOfferUntil=Date.now()+5000;return true;}
function startFestival(){if(!claimLemonOffer('happy-lemon'))return false;festivalOfferUntil=0;festivalStarted=Date.now();festivalUntil=festivalStarted+30000;$('happy-timer').hidden=false;document.body.classList.add('happy-hour');$('happy-seconds').textContent='30s';$('lemon-rain').hidden=false;const drops=Array.from({length:26},(_,i)=>{const lemon=document.createElement('span');lemon.className='rain-lemon';lemon.style.setProperty('--left',`${(i*37)%100}%`);lemon.style.setProperty('--duration',`${4+(i%5)*.7}s`);lemon.style.setProperty('--delay',`${-(i%9)*.6}s`);lemon.style.setProperty('--size',`${30+(i%4)*9}px`);return lemon;});$('lemon-rain').replaceChildren(...drops);nextFestivalAt=festivalUntil+surpriseDelay('happy');update();notify('Lemonade Happy Hour! Double earnings for 30 seconds. Keep squeezing!');return true;}
$('happy-lemon').addEventListener('click',startFestival);
setInterval(()=>{const now=Date.now();if(window.cloudPaused){if(festivalUntil||festivalOfferUntil)clearFestival();return;}if(festivalUntil){if(now>=festivalUntil){festivalUntil=festivalStarted=0;$('happy-timer').hidden=true;document.body.classList.remove('happy-hour');$('lemon-rain').hidden=true;$('lemon-rain').replaceChildren();update();notify('Happy Hour finished. Sweet squeezing!');}else $('happy-seconds').textContent=`${Math.ceil((festivalUntil-now)/1000)}s`;}if(festivalOfferUntil&&now>=festivalOfferUntil){hideLemonOffer('happy-lemon');festivalOfferUntil=0;}if(now>=nextFestivalAt&&!festivalUntil){if(offerFestival())nextFestivalAt=now+surpriseDelay('happy');}},200);
document.addEventListener('visibilitychange',()=>{if(document.hidden){hideLemonOffer('happy-lemon');hideLemonOffer('golden-lemon');festivalOfferUntil=0;}else festivalVisibleSince=Date.now();update();});
