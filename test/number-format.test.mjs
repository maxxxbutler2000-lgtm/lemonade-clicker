import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
const source=await readFile(new URL('../dist/game.js',import.meta.url),'utf8');
const context=vm.createContext({});
vm.runInContext(source.slice(source.indexOf('const MAX_CLICKS='),source.indexOf('function repairNumbers'))+source.slice(source.indexOf('const numberUnits='),source.indexOf('function cost(')),context);
const fmt=n=>context.fmt(n);
test('Letter suffixes cover late stages and the entire supported bank range',()=>{
 assert.equal(fmt(250),'250');assert.equal(fmt(25000),'25K');assert.equal(fmt(2.23e48),'2.23QiDc');assert.equal(fmt(1e100),'10DTg');
 for(let exponent=4;exponent<=100;exponent++)assert.match(fmt(10**exponent),/^[\d,.]+[A-Za-z]+$/);
 assert.equal(fmt(Infinity),'10DTg');assert.equal(fmt(NaN),'0');
});
test('Rounded values carry into the next suffix without scientific notation',()=>{
 assert.equal(fmt(999999),'1M');assert.equal(fmt(999994),'999.99K');assert.equal(vm.runInContext('statsFmt(2.23e48)',context),'2.23QiDc');
});
