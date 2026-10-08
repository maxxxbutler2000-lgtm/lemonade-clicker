import test from 'node:test';
import assert from 'node:assert/strict';
import {loadContent,simulateEconomy} from '../scripts/simulate-economy.mjs';
const content=await loadContent();
// Rarer optional events bring pacing closer to the existing no-event baseline.
for(const [name,options,maxStageSeconds] of [
 ['casual active play',{tapsPerSecond:1},600],
 ['steady active play',{tapsPerSecond:2},400],
 ['fast active play',{tapsPerSecond:4},180],
 ['no surprise events',{tapsPerSecond:2,events:false},400],
 ['saving for each new upgrade',{tapsPerSecond:2,strategy:'frontier'},450],
 ['buying affordable investments',{tapsPerSecond:2,strategy:'opportunistic'},400],
 ['passive income after the first hire',{tapsPerSecond:0,initialBank:50,events:false},1000]
])test(`Economy supports ${name} without stalls or multi-world jumps`,()=>{
 const s=simulateEconomy(content,options);
 assert(s.finished,`Stopped at world ${s.reached}`);
 assert.deepEqual(s.skips,[],'One update must not leap across several worlds');
 assert.equal(s.stageSeconds.length,44);
 assert(s.stageSeconds.every(Number.isFinite));
 assert(Math.max(...s.stageSeconds)<=maxStageSeconds,`Slowest stage: ${Math.max(...s.stageSeconds)} seconds`);
 assert(Math.min(...s.stageSeconds.slice(3))>=25,'Later worlds should not clear in just a few seconds');
 assert(s.seconds>=1800,'A whole empire should last longer than a quick speedrun');
 assert(s.largestLaterBonusShare<.2,'Achievement windfalls should not dominate the next expansion');
});
