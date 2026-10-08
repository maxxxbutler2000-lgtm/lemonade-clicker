'use strict';
// A hidden playground, activated by typing secretpanel outside text fields.
const devDialog=document.createElement('dialog');
devDialog.id='dev-dialog';devDialog.className='dev-dialog';
devDialog.innerHTML=`<div class="fun-heading"><div><small>THE SECRET LEMON LAB</small><h2>Developer playground</h2></div><button id="dev-close" aria-label="Close secret panel">✕</button></div>
<p class="dev-intro">Your own empire, your own rules. Changes save to your current game.</p>
<section><h3>World hopper</h3><label for="dev-stage">Choose a stage</label><select id="dev-stage"></select><p id="dev-stage-info"></p><p class="dev-note">Keep your money and freely explore any world. Stage selection stays manual until you resume normal progression.</p><div class="dev-actions"><button id="dev-jump" class="buy">Jump + equip upgrades</button><button id="dev-auto">Resume normal progression</button></div></section>
<section><h3>Lemon treasury</h3><label for="dev-amount">Clicks (try 10M, 2.5Qa or 100QiDc)</label><input id="dev-amount" type="text" inputmode="text" value="1M" autocomplete="off"><div class="dev-actions"><button id="dev-add">Add clicks</button><button id="dev-set">Set bank</button><button id="dev-max">Maximum bank</button></div></section>
<section><h3>Make something happen</h3><div class="dev-actions"><button id="dev-happy">Start Happy Hour</button><button id="dev-golden">Spawn golden lemon</button><button id="dev-stop">End Happy Hour</button><button id="dev-arcade">Unlock every minigame</button><button id="dev-kit">Give all upgrades</button><button id="dev-badges">Unlock achievements</button><button id="dev-zest">Add 10 permanent Zest</button></div></section><p id="dev-status" role="status"></p>`;
document.body.append(devDialog);
const devShortcut=document.createElement('button');
devShortcut.id='dev-toggle';devShortcut.className='quiet';devShortcut.textContent='🧪 Secret Panel';
devShortcut.setAttribute('aria-label','Open secret panel');devShortcut.hidden=true;
document.querySelector('.header-actions').append(devShortcut);
function syncDevShortcut(){devShortcut.hidden=window.devPanelUnlocked!==true;document.body.classList.toggle('dev-unlocked',window.devPanelUnlocked===true);}
devShortcut.addEventListener('click',openDevPanel);syncDevShortcut();

for(const [index,world] of stages.entries()){
 const option=document.createElement('option');option.value=index;option.textContent=`${index+1}. ${world.name} · ${fmt(world.at)}`;$('dev-stage').append(option);
}
function devStageInfo(){const world=stages[Number($('dev-stage').value)];$('dev-stage-info').textContent=`Minimum bank: ${fmt(world.at)} clicks (your larger bank is kept) · 5 of each matching sale and business, 3 of each earlier one, plus boosts through this world.`;}
$('dev-stage').addEventListener('change',devStageInfo);
function openDevPanel(){
 if(window.cloudPaused)return;
 window.devPanelUnlocked=true;syncDevShortcut();saveGame();
 stopArcade();for(const dialog of document.querySelectorAll('dialog[open]'))dialog.close();
 $('dev-stage').value=stage;devStageInfo();$('dev-status').textContent='';devDialog.showModal();
}
let devPhrase='';
document.addEventListener('keydown',event=>{
 if(event.ctrlKey||event.metaKey||event.altKey||event.repeat||event.target.closest?.('input,textarea,select,[contenteditable="true"]'))return;
 if(event.key.length!==1){devPhrase='';return;}
 devPhrase=(devPhrase+event.key.toLowerCase()).slice(-11);
 if(devPhrase==='secretpanel'){devPhrase='';openDevPanel();}
});
$('dev-close').addEventListener('click',()=>devDialog.close());
function devCommit(message){update();saveGame();$('dev-status').textContent=message;}
function devJumpToStage(index){
 if(window.cloudPaused||!Number.isInteger(index)||index<0||index>=stages.length)return false;
 clearFestival();stopArcade();
 for(const item of [...upgrades,...generators])item.owned=item.stageIndex<=index?(item.stageIndex===index?5:3):0;
 for(const item of boosts)item.owned=item.stageIndex<=index?1:0;
 clicks=Math.max(clicks,stages[index].at);total=Math.max(total,clicks);window.devStageOverride=index;stage=index;
 purchases=Math.max(purchases,[...upgrades,...generators,...boosts].reduce((n,item)=>n+item.owned,0));
 setScene(stage);last=performance.now();devCommit(`Welcome to ${stages[index].name}! Starter kit equipped.`);return true;
}
$('dev-auto').addEventListener('click',()=>{if(window.cloudPaused)return;window.devStageOverride=null;devCommit('Normal stage progression resumed.');});
$('dev-jump').addEventListener('click',()=>{if(devJumpToStage(Number($('dev-stage').value)))devDialog.close();});
function devAmount(text){
 const match=text.trim().replaceAll(',','').match(/^(\d+(?:\.\d*)?|\.\d+)\s*([a-z]*)$/i);
 if(!match)return null;
 const unit=numberUnits.findIndex(value=>value.toLowerCase()===match[2].toLowerCase());
 if(unit<0)return null;
 const amount=Number(match[1])*Math.pow(1000,unit);
 return Number.isFinite(amount)&&amount<=MAX_CLICKS?amount:null;
}
function devBank(add){if(window.cloudPaused)return;const amount=devAmount($('dev-amount').value);if(amount===null){$('dev-status').textContent='Enter a positive number with an optional suffix, like 10M or 2.5Qa.';return;}clicks=add?addAmount(clicks,amount):amount;total=Math.max(total,clicks);devCommit(`${add?'Added':'Set bank to'} ${fmt(amount)} clicks.`);}
$('dev-add').addEventListener('click',()=>devBank(true));$('dev-set').addEventListener('click',()=>devBank(false));
$('dev-max').addEventListener('click',()=>{if(window.cloudPaused)return;clicks=total=MAX_CLICKS;devCommit('Maximum bank: '+fmt(clicks)+' clicks.');});
$('dev-kit').addEventListener('click',()=>{if(window.cloudPaused)return;for(const item of [...upgrades,...generators])item.owned=Math.max(item.owned,10);for(const item of boosts)item.owned=1;devCommit('All sales, businesses and one-time boosts equipped.');});
$('dev-arcade').addEventListener('click',()=>{if(window.cloudPaused)return;for(const key of Object.keys(arcadeUnlocks))arcadeUnlocks[key]=true;devCommit('Every minigame is unlocked.');});
$('dev-badges').addEventListener('click',()=>{if(window.cloudPaused)return;achievements=true;devCommit('Achievements unlocked. Earned goals can now pay out.');});
$('dev-zest').addEventListener('click',()=>{if(window.cloudPaused)return;zest=Math.min(1e9,zest+10);devCommit('+10 permanent Zest!');});
$('dev-stop').addEventListener('click',()=>{if(window.cloudPaused)return;clearFestival();devCommit('Happy Hour ended.');});
function devEvent(happy){
 if(window.cloudPaused)return;
 devDialog.close();setShopOpen(false);
 if(happy)clearFestival();
 // Wait for the sidebar to finish sliding before picking a reachable spot.
 setTimeout(()=>{if(window.cloudPaused)return;if(happy){if(offerFestival())startFestival();}else showLemonOffer('golden-lemon');},300);
}
$('dev-happy').addEventListener('click',()=>devEvent(true));$('dev-golden').addEventListener('click',()=>devEvent(false));
