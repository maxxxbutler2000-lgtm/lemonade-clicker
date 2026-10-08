import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
export async function loadContent(){const context=vm.createContext({});vm.runInContext(await readFile(new URL('../dist/content.js',import.meta.url),'utf8'),context);return JSON.parse(vm.runInContext('JSON.stringify(LEMONADE_CONTENT)',context));}
// A player clicks at a steady pace, collects optional events, and invests when
// a purchase pays back sooner than saving for the next expansion would take.
export function simulateEconomy(content,{tapsPerSecond=2,events=true,strategy='patient',initialBank=0,maxSeconds=43200}={}){
 const {stages,goals}=structuredClone(content);
 const sales=content.upgrades.map(x=>({...x,owned:0})),businesses=content.generators.map(x=>({...x,owned:0})),boosts=content.boosts.map(x=>({...x,owned:0}));
 let bank=initialBank,total=initialBank,taps=0,purchases=0,achievements=false,stage=0,time=0,lastPurchase=-1,lucky=0,largestBonusShare=0,largestLaterBonusShare=0;
 const reached=[0],skips=[],dt=.25;
 function production(){const cm=boosts.reduce((n,b)=>n*(b.owned?b.click:1),1),am=boosts.reduce((n,b)=>n*(b.owned?b.auto:1),1);return {cm,am,power:(1+sales.reduce((n,x)=>n+x.gain*x.owned,0))*cm,rate:businesses.reduce((n,x)=>n+x.gain*x.owned,0)*am};}
 function price(item){return item.cost*(boosts.includes(item)?1:Math.pow(1.18,item.owned));}
 function awards(p){if(!achievements)return;const values={total,taps:Math.floor(taps),purchases,stage,power:p.power,rate:p.rate,machines:businesses.reduce((n,x)=>n+x.owned,0),boosts:boosts.filter(x=>x.owned).length,cookies:businesses.find(x=>x.name==='Cookie counter').owned,upsells:sales.find(x=>x.name==='Upselling').owned,lucky,rebirths:0,dodges:0,caught:0};let bonus=0;for(const g of goals){if(!g.awarded&&stage>=(g.minStage||0)&&values[g.metric]>=g.target){g.awarded=true;bonus+=g.reward;}}bank+=bonus;if(stage>=3)largestLaterBonusShare=Math.max(largestLaterBonusShare,bonus/(stages[stage+1]?.at||stages[stage].at));largestBonusShare=Math.max(largestBonusShare,bonus/(stages[stage+1]?.at||stages[stage].at));}
 while(stage<stages.length-1&&time<maxSeconds){
  time+=dt;const p=production();const festival=events&&time>=420&&(time-420)%450<30?2:1;
  const earned=(p.power*tapsPerSecond+p.rate)*dt*festival;bank+=earned;total+=earned;taps+=tapsPerSecond*dt;
  if(events&&Math.floor(time/dt)%Math.round(270/dt)===0){bank*=1.15;lucky++;}
  const before=stage;while(stages[stage+1]&&bank>=stages[stage+1].at){stage++;reached[stage]=time;}if(stage-before>1)skips.push({time,from:before,to:stage});
  awards({power:p.power*festival,rate:p.rate*festival});if(stage===stages.length-1)break;
  if(time-lastPurchase<.5)continue;
  if(!achievements&&bank>=100){bank-=100;achievements=true;purchases++;lastPurchase=time;continue;}
  const income=p.power*tapsPerSecond+p.rate,remaining=(stages[stage+1].at-bank)/Math.max(.01,income);
  let best=null,bestROI=Infinity;
  for(const [items,kind] of [[sales,'sale'],[businesses,'business'],[boosts,'boost']])for(const item of items){if((kind==='boost'||strategy==='frontier')&&item.owned)continue;const cost=price(item);if(cost>(strategy!=='opportunistic'?stages[stage+1].at*.8:bank))continue;const extra=kind==='sale'?item.gain*p.cm*tapsPerSecond:kind==='business'?item.gain*p.am:p.power*tapsPerSecond*(item.click-1)+p.rate*(item.auto-1);const roi=cost/Math.max(.001,extra);if(roi<bestROI){best=item;bestROI=roi;}}
  if(best&&price(best)<=bank&&bestROI<Math.max(30,remaining)*.8){bank-=price(best);best.owned++;purchases++;lastPurchase=time;}
 }
 return {finished:stage===stages.length-1,tapsPerSecond,events,strategy,seconds:time,purchases,skips,largestBonusShare,largestLaterBonusShare,stageSeconds:reached.slice(1).map((t,i)=>t-reached[i]),reached:stage+1};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){const c=await loadContent();for(const tapsPerSecond of [1,2,4]){const s=simulateEconomy(c,{tapsPerSecond});const times=s.stageSeconds;console.log(JSON.stringify({...s,stageSeconds:times.map(n=>Math.round(n)),medianSeconds:[...times].sort((a,b)=>a-b)[Math.floor(times.length/2)],minSeconds:Math.min(...times),maxSeconds:Math.max(...times)}));}}
