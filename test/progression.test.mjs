import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
const context=vm.createContext({});vm.runInContext(await readFile(new URL('../dist/content.js',import.meta.url),'utf8'),context);const content=vm.runInContext('LEMONADE_CONTENT',context);
test('Stages, sales, businesses, boosts and discoveries follow one themed progression',()=>{
 const {stages,upgrades,generators,boosts,goals}=content;
 assert.equal(stages.length,45);assert.equal(new Set(stages.map(s=>s.name)).size,45);
 const stage=name=>stages.findIndex(s=>s.name===name);
 assert(stage('Dinosaur lemonade park')<stage('Worldwide lemonade empire'));
 assert(stage('Worldwide lemonade empire')<stage('Lemon launch headquarters'));
 assert(stage('Lemon launch headquarters')<stage('Galactic lemonade empire'));
 assert(stage('Galactic lemonade empire')<stage('Multidimensional lemonade empire'));
 assert(stage('Multidimensional lemonade empire')<stage('Multiverse lemonade citadel'));
 assert(stage('Multiverse lemonade citadel')<stage('Sunshine beyond infinity'));
 for(let i=1;i<stages.length;i++)assert(stages[i].at>stages[i-1].at);
 assert.equal(stages.filter(s=>s.file.startsWith('stage-expansion-')).length,30);
 for(const items of [upgrades,generators,boosts]){
  for(let i=0;i<items.length;i++){assert(items[i].stageIndex>=0&&items[i].stageIndex<45);assert(Number.isFinite(items[i].cost));if(i){assert(items[i].stageIndex>=items[i-1].stageIndex);assert(items[i].cost>=items[i-1].cost);}}
 }
 assert(upgrades.find(i=>i.name==='Jurassic lemon squeeze').stageIndex<upgrades.find(i=>i.name==='Dimension-spanning deals').stageIndex);
 assert(generators.find(i=>i.name==='Dinosaur lemonade park franchise').stageIndex<generators.find(i=>i.name==='Interdimensional lemonade bazaar').stageIndex);
 assert(boosts.find(i=>i.name==='Dinosaur lemonade park sponsorship').stageIndex<boosts.find(i=>i.name==='Multiverse monopoly').stageIndex);
 for(const goal of goals.filter(g=>g.metric==='stage')){assert.equal(goal.minStage,goal.target);assert.equal(goal.desc,'Reach '+stages[goal.target].name);}
 assert.equal(goals.find(g=>g.name==='Cosmic business overdrive').target,boosts.length);
 for(let i=1;i<goals.length;i++)assert(goals[i].sectionIndex>=goals[i-1].sectionIndex);
});

test('Bank expansions grow smoothly and resist instant single-purchase skips',()=>{
 const {stages,upgrades,generators,boosts}=content;
 assert.deepEqual(Array.from(stages.slice(0,6),s=>s.at),[0,250,2500,25000,250000,2500000]);
 for(let i=2;i<stages.length;i++){
  assert(Math.abs(stages[i].at/stages[i-1].at-10)<1e-10);
  // Every upgrade is visible; affordable prices determine what can contribute.
  const budget=stages[i].at*.8;
  const available=boosts.filter(b=>b.cost<=budget);
  const cm=available.reduce((n,b)=>n*b.click,1),am=available.reduce((n,b)=>n*b.auto,1);
  const tap=Math.max(1,...upgrades.filter(x=>x.cost<=budget).map(x=>x.gain))*cm;
  const rate=Math.max(0,...generators.filter(x=>x.cost<=budget).map(x=>x.gain))*am;
  assert(stages[i].at>=tap*80*(1-1e-12));assert(stages[i].at>=rate*120*(1-1e-12));
  assert(Number.isFinite(stages[i].at)&&stages[i].at<1e100);
 }
});

test('Matching stage items have strictly increasing base prices and earnings',()=>{
 const {stages,upgrades,generators,boosts}=content;
 assert.equal(stages[6].name,'Neon lemon night market');
 const neon=upgrades.find(i=>i.name==='Neon lemonade upselling');assert.equal(neon.stageIndex,6);
 const multiverse=upgrades.find(i=>i.name==='Multiverse squeeze');assert(neon.cost<multiverse.cost&&neon.gain<multiverse.gain);
 for(const items of [upgrades,generators])for(let i=1;i<items.length;i++){assert(items[i].cost>items[i-1].cost);assert(items[i].gain>items[i-1].gain);}
 for(let i=1;i<boosts.length;i++)assert(boosts[i].cost>boosts[i-1].cost);
 for(const boost of boosts){assert(boost.click<=2&&boost.auto<=2);if(boost.click>1&&boost.auto>1)assert(boost.click===1.5&&boost.auto===1.5);}
});
