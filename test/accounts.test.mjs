import test from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {randomUUID} from 'node:crypto';
import pg from 'pg';
import {createAccounts} from '../accounts.mjs';
const connection=process.env.TEST_DATABASE_URL;
test('PostgreSQL accounts, persistent saves, session isolation, and tab protection',{skip:!connection},async()=>{
 const accounts=await createAccounts(connection),server=createServer(accounts.handle);
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`,username='test_'+randomUUID().slice(0,8);let cookie='',playerId='';const clientId=randomUUID();
 async function request(path,method='GET',body,extra={}){const r=await fetch(base+path,{method,headers:{Origin:base,...(cookie?{Cookie:cookie}:{}),...(body?{'Content-Type':'application/json'}:{}),...(playerId?{'X-Player-Id':playerId}:{}),...extra},body:body?JSON.stringify(body):undefined});return {status:r.status,body:await r.json(),cookie:r.headers.get('set-cookie')};}
 const save={v:1,devPanelUnlocked:true,stageId:'world-4',devStageId:'stage-redone-2',arcadeUnlocks:{flappy:true,cookies:false,pop:true,rush:false},clicks:123456,total:2e6,taps:8,purchases:2,achievements:true,rebirths:1,zest:3,arcadeDodges:10,arcadeBest:5,cookiesCaught:12,lemonsPopped:17,ordersServed:9,deliveries:2,luckyLemons:1,festivalUntil:0,festivalReady:0,deliveryReady:0,items:{Upselling:2},awarded:['First squeeze'],savedAt:Date.now()};
 try{
  assert.equal((await request('/api/save')).status,401);
  assert.equal((await request('/api/signup','POST',{username,password:'long-password',save},{Origin:'https://bad.example'})).status,403);
  const signup=await request('/api/signup','POST',{username,password:'long-password',save});assert.equal(signup.status,200);assert.match(signup.cookie,/HttpOnly/);assert.match(signup.cookie,/SameSite=Lax/);cookie=signup.cookie.split(';')[0];playerId=signup.body.user.id;
  assert.equal((await request('/api/signup','POST',{username:username.toUpperCase(),password:'long-password'})).status,409);
  assert.equal((await request('/api/login','POST',{username,password:'wrong-password'})).status,401);
  let play=await request('/api/play','POST',{clientId});assert.equal(play.body.save.clicks,123456);assert.equal(play.body.save.stageId,'world-4');assert.equal(play.body.save.devStageId,'stage-redone-2');assert.equal(play.body.save.zest,3);assert.equal(play.body.save.devPanelUnlocked,true);assert.deepEqual(play.body.save.arcadeUnlocks,{flappy:true,cookies:false,pop:true,rush:false});assert.equal(play.body.save.lemonsPopped,17);assert.equal(play.body.save.ordersServed,9);assert.equal(play.body.revision,1);
  assert.equal((await request('/api/save','PUT',{clientId,revision:1,save:{...save,clicks:99}})).status,200);
  assert.equal((await request('/api/save','PUT',{clientId,revision:1,save})).status,409,'stale revision is rejected');
  assert.equal((await request('/api/save','PUT',{clientId,revision:2,save:{...save,clicks:-1}})).status,400);
  const tab2=randomUUID();await request('/api/play','POST',{clientId:tab2});assert.equal((await request('/api/save','PUT',{clientId,revision:2,save})).status,409,'inactive tab cannot save');
  assert.equal((await request('/api/save','PUT',{clientId:tab2,revision:2,save},{'X-Player-Id':randomUUID()})).status,409,'wrong account cannot be overwritten');
  const another=await request('/api/signup','POST',{username:username+'_b',password:'long-password'});const firstCookie=cookie,firstId=playerId;cookie=another.cookie.split(';')[0];playerId=another.body.user.id;
  assert.equal((await request('/api/save')).body.save,null,'separate users have separate saves');
  cookie=firstCookie;playerId=firstId;assert.equal((await request('/api/save')).body.save.clicks,99);
  await request('/api/logout','POST',{});assert.equal((await request('/api/save')).status,401,'logout revokes session');
  const login=await request('/api/login','POST',{username:username.toUpperCase(),password:'long-password'});assert.equal(login.status,200);cookie=login.cookie.split(';')[0];assert.equal((await request('/api/save')).body.save.clicks,99,'progress survives session change');
  const pool=new pg.Pool({connectionString:connection});const {rows}=await pool.query('SELECT password_hash FROM players WHERE id=$1',[playerId]);assert.notEqual(rows[0].password_hash,'long-password');assert.match(rows[0].password_hash,/^[a-f0-9]{32}:[a-f0-9]{128}$/);await pool.query('DELETE FROM players WHERE username_key LIKE $1',[username+'%']);await pool.end();
 }finally{await new Promise(resolve=>server.close(resolve));await accounts.close();}
});
