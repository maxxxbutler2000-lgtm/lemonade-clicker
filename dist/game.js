'use strict';
const upgrades=[
{name:'Fresh lemonade recipe',icon:'↟',cost:20,gain:1},
{name:'Upselling',icon:'↟',cost:80,gain:3,flavor:'Offer a bigger cup'},
{name:'Premium lemonade',icon:'✦',cost:150,gain:5},
{name:'Family-size pitchers',icon:'ϟ',cost:1200,gain:25},
{name:'Lemon squeezer',icon:'◈',cost:8000,gain:150},
{name:'Turbo juicer',icon:'✳',cost:65000,gain:1000},
{name:'Citrus cannon',icon:'⊕',cost:500000,gain:7500},
{name:'Quantum squeeze',icon:'⟐',cost:4000000,gain:60000},
{name:'Sunshine supernova',icon:'☀',cost:35000000,gain:500000},
{name:'Planetary press',icon:'⊕',cost:250e6,gain:4e6},
{name:'Rocket juicer',icon:'ϟ',cost:2e9,gain:35e6},
{name:'Moonbeam squeeze',icon:'☽',cost:15e9,gain:300e6},
{name:'Martian sales pitch',icon:'✦',cost:120e9,gain:2.5e9},
{name:'Saturn ring press',icon:'◎',cost:1e12,gain:22e9},
{name:'Stellar lemon crusher',icon:'☀',cost:8e12,gain:180e9},
{name:'Black hole squeezer',icon:'◉',cost:65e12,gain:1.5e12},
{name:'Wormhole upselling',icon:'∞',cost:500e12,gain:12e12},
{name:'Dimension-spanning deals',icon:'⟐',cost:4e15,gain:100e12},
{name:'Reality juicer',icon:'✧',cost:35e15,gain:850e12},
{name:'Multiverse squeeze',icon:'⊛',cost:300e15,gain:7.5e15},
{name:'The final lemon',icon:'✳',cost:2.5e18,gain:65e15}
];
const generators=[
{name:'Lemonade helper',icon:'⌁',cost:50,gain:1},
{name:'Cookie counter',icon:'◉',cost:200,gain:4,flavor:'Sell cookies with your lemonade'},
{name:'Juice-serving robot',icon:'▣',cost:400,gain:8},
{name:'Lemon picker',icon:'♧',cost:1200,gain:25},
{name:'Lemonade bottling crew',icon:'▥',cost:2500,gain:50},
{name:'Juice cart',icon:'▤',cost:8000,gain:160},
{name:'Citrus power plant',icon:'◎',cost:15000,gain:300},
{name:'Bottling line',icon:'≋',cost:90000,gain:1800},
{name:'Lemon orchard',icon:'♧',cost:550000,gain:11000},
{name:'Lemonade delivery fleet',icon:'▰',cost:3500000,gain:70000},
{name:'Mega lemonade plant',icon:'▥',cost:22000000,gain:440000},
{name:'Orbital juice station',icon:'✧',cost:150000000,gain:3000000},
{name:'Lemonade city franchise',icon:'▥',cost:1e9,gain:20e6},
{name:'Global lemonade deliveries',icon:'⊕',cost:7.5e9,gain:150e6},
{name:'Lemon launchpad',icon:'ϟ',cost:50e9,gain:1e9},
{name:'Cosmic cookie bakery',icon:'✦',cost:80e9,gain:1.6e9,flavor:'Fresh cookies for hungry astronauts'},
{name:'Moon lemon orchard',icon:'☽',cost:350e9,gain:7e9},
{name:'Martian juice dome',icon:'⟐',cost:2.5e12,gain:50e9},
{name:'Asteroid lemon mine',icon:'◈',cost:18e12,gain:360e9},
{name:'Saturn lemonade routes',icon:'◎',cost:125e12,gain:2.5e12},
{name:'Solar citrus fleet',icon:'☀',cost:900e12,gain:18e12},
{name:'Galactic lemonade network',icon:'✦',cost:6.5e15,gain:130e12},
{name:'Wormhole lemonade deliveries',icon:'∞',cost:45e15,gain:900e12},
{name:'Interdimensional lemonade bazaar',icon:'⊛',cost:325e15,gain:6.5e15},
{name:'Parallel-universe orchards',icon:'♧',cost:2.5e18,gain:50e15},
{name:'Reality bottling engine',icon:'▣',cost:18e18,gain:360e15},
{name:'Infinite lemon continuum',icon:'∞',cost:125e18,gain:2.5e18}
];
const boosts=[
{name:'Sales training',icon:'↟',cost:500,desc:'Double all clicks per tap',click:2,auto:1},
{name:'Juicer tune-up',icon:'⚙',cost:1500,desc:'Double all automatic earnings',click:1,auto:2},
{name:'Cookies & lemonade combo',icon:'◉',cost:2500,desc:'×1.5 tap and business earnings',click:1.5,auto:1.5},
{name:'Golden lemons',icon:'✦',cost:10000,desc:'×1.5 tap and business earnings',click:1.5,auto:1.5},
{name:'Citrus overdrive',icon:'ϟ',cost:100000,desc:'Triple all clicks per tap',click:3,auto:1},
{name:'Factory automation',icon:'▣',cost:750000,desc:'Triple all automatic earnings',click:1,auto:3},
{name:'Franchise fever',icon:'▥',cost:5e6,desc:'×2 tap and business earnings',click:2,auto:2},
{name:'Worldwide advertising',icon:'⊕',cost:40e6,desc:'×5 all automatic earnings',click:1,auto:5},
{name:'Rocket-powered squeeze',icon:'ϟ',cost:350e6,desc:'×5 all clicks per tap',click:5,auto:1},
{name:'Zero-gravity lemons',icon:'☽',cost:3e9,desc:'×3 tap and business earnings',click:3,auto:3},
{name:'Martian fertilizer',icon:'♧',cost:25e9,desc:'×10 all automatic earnings',click:1,auto:10},
{name:'Solar-powered squeezing',icon:'☀',cost:200e9,desc:'×10 all clicks per tap',click:10,auto:1},
{name:'Asteroid ice cubes',icon:'◈',cost:1.5e12,desc:'×5 tap and business earnings',click:5,auto:5},
{name:'Galactic sponsorship',icon:'✦',cost:12e12,desc:'×25 all automatic earnings',click:1,auto:25},
{name:'Black hole lemon concentrate',icon:'◉',cost:100e12,desc:'×25 all clicks per tap',click:25,auto:1},
{name:'Wormhole express shipping',icon:'∞',cost:800e12,desc:'×10 tap and business earnings',click:10,auto:10},
{name:'Time-loop staff',icon:'◎',cost:6.5e15,desc:'×100 all automatic earnings',click:1,auto:100},
{name:'Fourth-dimensional sales pitch',icon:'⟐',cost:50e15,desc:'×100 all clicks per tap',click:100,auto:1},
{name:'Alternate-reality recipe',icon:'✧',cost:400e15,desc:'×50 tap and business earnings',click:50,auto:50},
{name:'Multiverse monopoly',icon:'⊛',cost:3e18,desc:'×250 tap and business earnings',click:250,auto:250},
{name:'Infinite lemonade glitch',icon:'∞',cost:25e18,desc:'×1,000 tap and business earnings',click:1000,auto:1000}
];
const stages=[
{name:'Lemonade stand',at:0,file:'stage-redone-1.webp'},
{name:'Upgraded lemonade stand',at:250,file:'stage-redone-2.webp'},
{name:'Lemonade shop',at:2500,file:'stage-redone-3.webp'},
{name:'Bottling workshop',at:25000,file:'stage-redone-4.webp'},
{name:'Lemonade factory',at:250000,file:'stage-redone-5.webp'},
{name:'Mega lemonade factory',at:2500000,file:'stage-redone-6.webp'},
{name:'Lemonade metropolis',at:25e6,file:'stage-redone-7.webp'},
{name:'Worldwide lemonade empire',at:250e6,file:'stage-redone-8.webp'},
{name:'Lemon launch headquarters',at:2.5e9,file:'stage-redone-9.webp'},
{name:'Moon lemonade colony',at:25e9,file:'stage-redone-10.webp'},
{name:'Martian lemonade civilization',at:250e9,file:'stage-redone-11.webp'},
{name:'Solar system juice trade',at:2.5e12,file:'stage-redone-12.webp'},
{name:'Galactic lemonade empire',at:25e12,file:'stage-redone-13.webp'},
{name:'Interdimensional lemonade market',at:250e12,file:'stage-redone-14.webp'},
{name:'Multiverse lemonade citadel',at:2.5e15,file:'stage-redone-15.webp'}
];
const goals=[
{name:'First squeeze',desc:'Make 25 taps',metric:'taps',target:25,reward:75},
{name:'Fresh batch',desc:'Earn 250 lifetime clicks',metric:'total',target:250,reward:150},
{name:'First lemonade hire',desc:'Own your first automatic business',metric:'machines',target:1,reward:100},
{name:'Lemonade rush',desc:'Make 100 taps',metric:'taps',target:100,reward:300},
{name:'Shopping spree',desc:'Buy 10 shop items',metric:'purchases',target:10,reward:1000},
{name:'Lemon crew',desc:'Own 10 automatic business upgrades',metric:'machines',target:10,reward:2000},
{name:'Squeeze master',desc:'Reach 100 clicks per tap',metric:'power',target:100,reward:1500},
{name:'Open for business',desc:'Reach the lemonade shop',metric:'stage',target:2,reward:2500},
{name:'Juice on autopilot',desc:'Reach 100 clicks per second',metric:'rate',target:100,reward:3000},
{name:'Ten thousand served',desc:'Earn 10K lifetime clicks',metric:'total',target:10000,reward:5000},
{name:'Lemonade sales legend',desc:'Make 1,000 taps',metric:'taps',target:1000,reward:15000},
{name:'Bottled sunshine',desc:'Reach the bottling workshop',metric:'stage',target:3,reward:12500},
{name:'Big spender',desc:'Buy 50 shop items',metric:'purchases',target:50,reward:40000},
{name:'Lemon army',desc:'Own 50 automatic business upgrades',metric:'machines',target:50,reward:75000},
{name:'Factory boss',desc:'Reach the lemonade factory',metric:'stage',target:4,reward:125000},
{name:'Lemonade millionaire',desc:'Earn 1M lifetime clicks',metric:'total',target:1000000,reward:300000},
{name:'Nonstop sunshine',desc:'Reach 10K clicks per second',metric:'rate',target:10000,reward:150000},
{name:'Lemonade empire',desc:'Reach the mega factory',metric:'stage',target:5,reward:1000000},
{name:'Unstoppable lemonade',desc:'Earn 100M lifetime clicks',metric:'total',target:100000000,reward:25000000},
{name:'Citrus billionaire',desc:'Earn 1B lifetime clicks',metric:'total',target:1000000000,reward:250000000}
];
const stageFlavors=[
'A little stand. A very big dream.', 'More lemons. More customers.', 'Your very own lemonade shop.',
'Bottling sunshine by the crate.', 'The neighborhood is just the beginning.', 'An empire made of freshly squeezed ambition.',
'Every block has a lemonade stand now.', 'One planet. One favorite drink.', 'Next stop: the stars.',
'One small sip for humankind.', 'Red planet. Yellow lemons.', 'Delivering fresh juice across the solar system.',
'Billions of stars. Billions of thirsty customers.', 'New dimensions. Same delicious lemonade.',
'Every reality deserves a cold glass.'
];
const extraGoals=[
...stages.slice(6).map((s,i)=>({name:['City of citrus','Worldwide lemonade sensation','Lemonade ready for liftoff','One giant sip','Red planet refreshments','Ringed-planet regular','Milky Way lemonade','Lemonade through the portal','Multiverse lemonade mogul'][i],desc:'Reach '+s.name,metric:'stage',target:i+6,reward:s.at/2})),
...[1e10,1e12,1e14,1e16,1e18,1e21].map((n,i)=>({name:['Ten billion served','Citrus trillionaire','Cosmic cash','Quadrillion lemonade club','Citrus quintillion club','Lemonade beyond counting'][i],desc:'Earn '+['10B','1T','100T','10Qa','1Qi','1Sx'][i]+' lifetime clicks',metric:'total',target:n,reward:n/4})),
...[100,250,500,1000].map((n,i)=>({name:['Lemonade machine city','Planet of juicers','Galaxy of juice bots','Multiverse bottling crew'][i],desc:'Own '+n+' automatic business upgrades',metric:'machines',target:n,reward:[1e8,1e11,1e14,1e18][i]})),
...[2500,5000,10000].map((n,i)=>({name:['Citrus marathon','Never stop squeezing','Legendary lemon fingers'][i],desc:'Make '+n.toLocaleString('en-US')+' taps',metric:'taps',target:n,reward:[1e7,1e10,1e13][i]})),
...[100,250,500,1000].map((n,i)=>({name:['Shopping planet','Galactic shopping spree','Dimensional franchise collector','Everything must go'][i],desc:'Buy '+n+' shop items',metric:'purchases',target:n,reward:[1e8,1e11,1e14,1e18][i]})),
...[1e6,1e9,1e12,1e15,1e18,1e21].map((n,i)=>({name:['Million-lemon squeeze','Billion-lemon squeeze','Star-powered squeeze','Reality-bending recipe','Multiverse sales master','Infinite squeeze'][i],desc:'Reach '+['1M','1B','1T','1Qa','1Qi','1Sx'][i]+' clicks per tap',metric:'power',target:n,reward:n*2})),
...[1e6,1e9,1e12,1e15,1e18,1e21].map((n,i)=>({name:['Million-sip business','Billion-sip business','Starlight production','Reality on autopilot','Multiverse lemonade production','Eternal lemonade flow'][i],desc:'Reach '+['1M','1B','1T','1Qa','1Qi','1Sx'][i]+' clicks per second',metric:'rate',target:n,reward:n*2})),
{name:'Lemonade growth investor',desc:'Buy 5 different boosts',metric:'boosts',target:5,reward:5000},
{name:'Cosmic business overdrive',desc:'Buy every boost',metric:'boosts',target:boosts.length,reward:1e15}
];
goals.push(...extraGoals,
{name:'Sweet side hustle',desc:'Buy your first cookie counter',metric:'cookies',target:1,reward:200},
{name:'Bigger cup, bigger sale',desc:'Buy your first Upselling upgrade',metric:'upsells',target:1,reward:150}
);
let clicks=0,total=0,basePower=1,baseRate=0,power=1,rate=0,clickMult=1,autoMult=1,taps=0,purchases=0,achievements=false,stage=0,toastTimer;
const $=id=>document.getElementById(id);
// Leave plenty of room below JavaScript's overflow boundary.
const MAX_CLICKS=1e100;
function finiteAmount(n){return typeof n!=='number'||Number.isNaN(n)?0:Math.max(0,Math.min(MAX_CLICKS,n));}
function addAmount(a,b){return finiteAmount(finiteAmount(a)+finiteAmount(b));}
function multiplyAmount(a,b){return finiteAmount(finiteAmount(a)*finiteAmount(b));}
function repairNumbers(){
clicks=finiteAmount(clicks);total=finiteAmount(total);taps=Math.min(Number.MAX_SAFE_INTEGER,Math.floor(finiteAmount(taps)));purchases=Math.min(Number.MAX_SAFE_INTEGER,Math.floor(finiteAmount(purchases)));
for(const item of [...upgrades,...generators,...boosts])item.owned=Math.min(boosts.includes(item)?1:Number.MAX_SAFE_INTEGER,Math.floor(finiteAmount(item.owned)));
basePower=upgrades.reduce((n,item)=>addAmount(n,multiplyAmount(item.gain,item.owned)),1);
baseRate=generators.reduce((n,item)=>addAmount(n,multiplyAmount(item.gain,item.owned)),0);
clickMult=boosts.reduce((n,item)=>item.owned?multiplyAmount(n,item.click):n,1);
autoMult=boosts.reduce((n,item)=>item.owned?multiplyAmount(n,item.auto):n,1);
power=multiplyAmount(basePower,clickMult);rate=multiplyAmount(baseRate,autoMult);
}
const numberUnits=['','K','M','B','T','Qa','Qi','Sx','Sp','Oc','No','Dc'];
function fmt(n){n=finiteAmount(n);if(n<10000)return Math.floor(n).toLocaleString('en-US');const group=Math.floor(Math.log10(n)/3);if(group>=numberUnits.length)return n.toExponential(2);return (n/Math.pow(1000,group)).toLocaleString('en-US',{maximumFractionDigits:2})+numberUnits[group];}
const statsFmt=n=>n<10000?n.toLocaleString('en-US',{maximumFractionDigits:1}):fmt(n);
function cost(item){if(boosts.includes(item))return item.cost;const exponent=Math.floor(finiteAmount(item.owned));const price=item.cost*Math.pow(1.18,exponent);return Number.isFinite(price)&&price<=MAX_CLICKS?Math.ceil(price):null;}
function notify(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),3000);}
function machineCount(){return generators.reduce((n,item)=>n+item.owned,0);}
function buildShop(){for(const [list,id] of [[upgrades,'upgrades'],[generators,'generators'],[boosts,'boosts']]){$(id).replaceChildren();list.forEach(item=>{item.owned=0;const row=document.createElement('div');row.className='item';row.innerHTML=`<span class="item-icon" aria-hidden="true">${item.icon}</span><div class="item-info"><div class="item-title">${item.name}<span class="owned">0 owned</span></div><div class="item-desc"></div></div><button class="buy"></button>`;item.button=row.querySelector('button');item.count=row.querySelector('.owned');item.description=row.querySelector('.item-desc');item.button.addEventListener('click',()=>buy(item,id));$(id).append(row);});}
$('achievement-list').replaceChildren();goals.forEach(goal=>{goal.awarded=false;const row=document.createElement('div');row.className='goal';row.innerHTML=`<span class="goal-icon" aria-hidden="true">☆</span><div class="goal-info"><b>${goal.name}</b><p>${goal.desc}</p><div class="goal-track"><div></div></div></div><div class="goal-reward">+${fmt(goal.reward)}<small>bonus clicks</small></div>`;goal.row=row;goal.track=row.querySelector('.goal-track div');goal.icon=row.querySelector('.goal-icon');goal.title=row.querySelector('.goal-info b');goal.description=row.querySelector('.goal-info p');$('achievement-list').append(row);});}
function buy(item,type){repairNumbers();if(boosts.includes(item)&&item.owned>=1)return;const price=cost(item);if(price===null||clicks<price)return;clicks=finiteAmount(clicks-price);item.owned++;purchases++;if(type==='upgrades')basePower+=item.gain;else if(type==='generators')baseRate+=item.gain;else{clickMult*=item.click;autoMult*=item.auto;}notify(`${item.name} purchased!`);update();}
function buyAchievements(){repairNumbers();if(achievements||clicks<100)return;clicks-=100;achievements=true;purchases++;notify('Achievements unlocked! Complete goals for bonus clicks.');update();}
function values(){return {taps,total,purchases,power,rate,machines:machineCount(),stage,boosts:boosts.reduce((n,b)=>n+b.owned,0),cookies:generators.find(item=>item.name==='Cookie counter').owned,upsells:upgrades.find(item=>item.name==='Upselling').owned};}
function checkAwards(){if(!achievements)return;const v=values();const awarded=[];for(const goal of goals){if(!goal.awarded&&v[goal.metric]>=goal.target){goal.awarded=true;clicks=addAmount(clicks,goal.reward);awarded.push(goal);}}if(awarded.length)notify(awarded.length===1?`${awarded[0].name}! +${fmt(awarded[0].reward)} bonus clicks`:`${awarded.length} achievements! +${fmt(awarded.reduce((n,g)=>n+g.reward,0))} bonus clicks`);}
function update(){repairNumbers();const previous=stage;stage=stages.reduce((n,s,i)=>total>=s.at?i:n,0);if(stage!==previous){$('scene').src='images/'+stages[stage].file;$('scene').alt=stages[stage].name+' with a lemon emblem';notify(`Your business grew: ${stages[stage].name}!`);}checkAwards();render();}
function render(){$('balance').textContent=fmt(clicks);$('shop-balance').textContent=fmt(clicks);$('power').textContent=statsFmt(power);$('rate').textContent=statsFmt(rate);$('stage-name').textContent=stages[stage].name;$('stage-flavor').textContent=stageFlavors[stage];$('stage-count').textContent=`STAGE ${stage+1}`;$('rank').textContent=stages[stage+1]?'NEXT BUSINESS EXPANSION':'YOUR LEMONADE EMPIRE';const next=stages[stage+1];$('milestone-label').textContent=next?`${fmt(total)} / ${fmt(next.at)} earned`:`${fmt(total)} lifetime earnings`;$('progress').style.width=(next?Math.min(100,(total-stages[stage].at)/(next.at-stages[stage].at)*100):100)+'%';
for(const [items,type] of [[upgrades,'upgrades'],[generators,'generators'],[boosts,'boosts']])for(const item of items){const price=cost(item);const oneTime=boosts.includes(item);const bought=oneTime&&item.owned>=1;const maxed=price===null;item.button.textContent=bought?'Bought ✓':maxed?'Maxed':'Buy '+fmt(price);item.button.disabled=bought||maxed||clicks<price;item.button.setAttribute('aria-label',bought?`${item.name} already purchased`:maxed?`${item.name} has reached its purchase limit`:`Buy ${item.name} for ${price} clicks${oneTime?', one-time purchase':''}`);item.count.textContent=oneTime?(bought?'Purchased':'One time'):item.owned+' owned';item.description.textContent=(item.flavor?item.flavor+' · ':'')+(type==='upgrades'?`+${statsFmt(multiplyAmount(item.gain,clickMult))} clicks per tap`:type==='generators'?`+${statsFmt(multiplyAmount(item.gain,autoMult))} clicks per second`:item.desc);}
$('unlock-achievements').disabled=achievements||clicks<100;$('unlock-achievements').textContent=achievements?'Unlocked':'Buy · 100 ◈';$('achievement-help').textContent=achievements?'Completed goals pay bonus clicks automatically. Each reward is paid once.':'Buy Achievements to collect bonus clicks for taps, purchases, lemonade businesses, and cosmic milestones. Goals you already met count too.';
const v=values();let completed=0;for(const goal of goals){if(goal.awarded)completed++;goal.row.classList.toggle('completed',goal.awarded);goal.row.classList.toggle('locked',!achievements);goal.icon.textContent=goal.awarded?'✓':'☆';goal.track.style.width=Math.min(100,v[goal.metric]/goal.target*100)+'%';const secret=goal.metric==='stage'&&stage<goal.target;goal.title.textContent=secret?'Secret discovery':goal.name;goal.description.textContent=secret?'Discover a new business location to reveal this goal.':goal.desc;goal.row.setAttribute('aria-label',`${goal.title.textContent}: ${goal.description.textContent}. ${goal.awarded?'Completed':achievements?'In progress':'Locked'}. Reward ${goal.reward} clicks.`);}$('achievement-count').textContent=`${completed} / ${goals.length}`;}

function tap(){repairNumbers();clicks=addAmount(clicks,power);total=addAmount(total,power);taps=Math.min(Number.MAX_SAFE_INTEGER,taps+1);const p=document.createElement('span');p.className='particle';p.textContent='+'+fmt(power);p.style.marginLeft=(Math.random()*90-45)+'px';$('particles').append(p);setTimeout(()=>p.remove(),800);update();}
function tick(elapsed){repairNumbers();const seconds=Number.isFinite(elapsed)?Math.max(0,elapsed):0;const earned=multiplyAmount(rate,seconds);clicks=addAmount(clicks,earned);total=addAmount(total,earned);update();}
function reset(){clicks=total=baseRate=rate=taps=purchases=stage=0;basePower=power=clickMult=autoMult=1;achievements=false;buildShop();$('scene').src='images/'+stages[0].file;$('scene').alt=stages[0].name+' with a lemon emblem';last=performance.now();update();}
$('click').addEventListener('click',tap);$('unlock-achievements').addEventListener('click',buyAchievements);
for(const tab of document.querySelectorAll('[role="tab"]'))tab.addEventListener('click',()=>{for(const t of document.querySelectorAll('[role="tab"]'))t.setAttribute('aria-selected',String(t===tab));for(const panel of document.querySelectorAll('[role="tabpanel"]'))panel.hidden=panel.id!==tab.getAttribute('aria-controls');});
$('restart').addEventListener('click',()=>$('reset-dialog').showModal());$('cancel-reset').addEventListener('click',()=>$('reset-dialog').close());$('confirm-reset').addEventListener('click',()=>{reset();$('reset-dialog').close();notify('A fresh lemonade stand. Make your first click!');});
let last=performance.now();setInterval(()=>{const now=performance.now();tick((now-last)/1000);last=now;},100);
for(const stage of stages){const image=new Image();image.src='images/'+stage.file;}
buildShop();update();

function setShopOpen(open){$('shop').hidden=!open;$('shop-toggle').setAttribute('aria-expanded',String(open));document.body.classList.toggle('shop-open',open);}
$('shop-toggle').addEventListener('click',()=>setShopOpen($('shop').hidden));
$('shop-minimize').addEventListener('click',()=>{setShopOpen(false);$('shop-toggle').focus();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!$('shop').hidden&&!$('reset-dialog').open){setShopOpen(false);$('shop-toggle').focus();}});
setShopOpen(false);
