import pg from 'pg';
import { isIP } from 'node:net';
import { randomBytes, randomUUID, scrypt, timingSafeEqual, createHash } from 'node:crypto';
import { promisify } from 'node:util';
import { readFile } from 'node:fs/promises';
const derive = promisify(scrypt);
const hash = value => createHash('sha256').update(value).digest('hex');
const COOKIE = 'lemon_session';
const MAX_AMOUNT = 1e100;
const numericFields = ['clicks','total','taps','purchases','rebirths','zest','arcadeDodges','arcadeBest','cookiesCaught','lemonsPopped','ordersServed','deliveries','luckyLemons','festivalUntil','festivalReady','deliveryReady','savedAt'];
export function validateSave(save) {
  if (!save || save.v !== 1 || !save.items || typeof save.items !== 'object' || Array.isArray(save.items)) throw new ApiError(400, 'Invalid game save.');
  const clean = { v: 1, devPanelUnlocked: save.devPanelUnlocked === true, arcadeUnlocks: { flappy: save.arcadeUnlocks?.flappy === true, cookies: save.arcadeUnlocks?.cookies === true, pop: save.arcadeUnlocks?.pop === true, rush: save.arcadeUnlocks?.rush === true }, achievements: save.achievements === true, items: Object.create(null), awarded: [] };
  for (const field of numericFields) {
    const value = save[field] ?? 0;
    if (typeof value !== 'number' || !Number.isFinite(value) || value < 0 || value > MAX_AMOUNT) throw new ApiError(400, 'Invalid game save.');
    clean[field] = value;
  }
  const entries = Object.entries(save.items);
  if (entries.length > 250) throw new ApiError(400, 'Invalid game save.');
  for (const [name, value] of entries) {
    if (name.length > 120 || ['__proto__','constructor','prototype'].includes(name) || !Number.isSafeInteger(value) || value < 0) throw new ApiError(400, 'Invalid game save.');
    clean.items[name] = value;
  }
  if (!Array.isArray(save.awarded) || save.awarded.length > 250 || save.awarded.some(n => typeof n !== 'string' || n.length > 150)) throw new ApiError(400, 'Invalid game save.');
  clean.awarded = [...new Set(save.awarded)];
  if(save.stageId!==undefined){if(typeof save.stageId!=='string'||!/^((stage-redone|world)-[0-9]{1,2})$/.test(save.stageId))throw new ApiError(400,'Invalid game save.');clean.stageId=save.stageId;}
  if(save.devStageId!==undefined){if(save.devStageId!==null&&(typeof save.devStageId!=='string'||!/^((stage-redone|world)-[0-9]{1,2})$/.test(save.devStageId)))throw new ApiError(400,'Invalid game save.');clean.devStageId=save.devStageId;}
  clean.savedAt = Date.now();
  return clean;
}
class ApiError extends Error { constructor(status, message) { super(message); this.status = status; } }
export async function createAccounts(connectionString, { production = false } = {}) {
  if (!connectionString) {
    if (production) throw new Error('DATABASE_URL is required for cloud accounts in production.');
    return { handle: async (req, res) => { res.writeHead(503, {'Content-Type':'application/json','Cache-Control':'no-store'}); res.end(JSON.stringify({error:'Accounts are not connected yet. You can still play as a guest.'})); }, close: async () => {} };
  }
  const pool = new pg.Pool({ connectionString, max: 10, connectionTimeoutMillis: 10000, idleTimeoutMillis: 30000 });
  pool.on('error', () => console.error('Database connection interrupted.'));
  await pool.query(await readFile(new URL('./migrations/001_accounts.sql', import.meta.url), 'utf8'));
  const attempts = new Map();
  const cleanup = setInterval(() => { const now=Date.now(); for(const [key,item] of attempts) if(item.until<now) attempts.delete(key); pool.query('DELETE FROM player_sessions WHERE expires_at < now()').catch(()=>{}); }, 60000);
  cleanup.unref();
  function limit(key, max = 20) {
    const now=Date.now(), item=attempts.get(key);
    if (item && item.until>now) { if (item.count>=max) throw new ApiError(429, 'Too many attempts. Please try again in a few minutes.'); item.count++; }
    else { if(attempts.size>10000) attempts.clear(); attempts.set(key,{count:1,until:now+600000}); }
  }
  async function passwordHash(password, salt=randomBytes(16).toString('hex')) { return `${salt}:${Buffer.from(await derive(password,salt,64)).toString('hex')}`; }
  const dummy = await passwordHash(randomBytes(32).toString('hex'));
  async function passwordMatches(password, stored) { const [salt, digest] = stored.split(':'); const candidate = Buffer.from(await derive(password,salt,64)); const expected = Buffer.from(digest,'hex'); return expected.length===candidate.length && timingSafeEqual(expected,candidate); }
  function setCookie(res, token, maxAge=2592000) { res.setHeader('Set-Cookie',`${COOKIE}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${production?'; Secure':''}`); }
  async function session(req) {
    const token = (req.headers.cookie||'').split(';').map(s=>s.trim()).find(s=>s.startsWith(`${COOKIE}=`))?.slice(COOKIE.length+1);
    if (!token || !/^[a-f0-9]{64}$/.test(token)) return null;
    const {rows} = await pool.query('SELECT p.id,p.username,s.token_hash FROM player_sessions s JOIN players p ON p.id=s.player_id WHERE s.token_hash=$1 AND s.expires_at>now()',[hash(token)]);
    return rows[0]||null;
  }
  async function readBody(req) {
    let bytes=0, chunks=[];
    if (!/^application\/json(?:;|$)/i.test(req.headers['content-type']||'')) throw new ApiError(415,'Send JSON data.');
    for await(const chunk of req) { bytes+=chunk.length; if(bytes>65536) throw new ApiError(413,'That save is too large.'); chunks.push(chunk); }
    try { return JSON.parse(Buffer.concat(chunks).toString()); } catch { throw new ApiError(400,'Invalid JSON.'); }
  }
  const send=(res,status,body)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(JSON.stringify(body));};
  return {
    async handle(req,res) {
      try {
        const path=new URL(req.url,'http://localhost').pathname;
        if(!['GET','POST','PUT'].includes(req.method)) throw new ApiError(405,'Method not allowed.');
        if(req.method!=='GET') {
          let origin;try{origin=new URL(req.headers.origin);}catch{throw new ApiError(403,'Please use the game website to make this request.');}
          if(origin.host!==req.headers.host) throw new ApiError(403,'Please use the game website to make this request.');
        }
        if(path==='/api/account'&&req.method==='GET'){const user=await session(req);send(res,200,{user:user?{id:user.id,username:user.username}:null});return;}
        if(['/api/signup','/api/login'].includes(path)&&req.method==='POST') {
          const body=await readBody(req);
          const username=typeof body.username==='string'?body.username.trim():'';
          const password=body.password;
          const forwarded=(req.headers['x-forwarded-for']||'').split(',').at(-1)?.trim();const ip=production&&isIP(forwarded||'')?forwarded:req.socket.remoteAddress||'unknown';
          limit(`auth-ip:${ip}`,100);limit(`auth-name:${username.toLowerCase()}`,20);
          if(!/^[a-zA-Z0-9_]{3,24}$/.test(username)||typeof password!=='string'||password.length<8||password.length>128) throw new ApiError(400,'Use a username with 3–24 letters, numbers, or underscores, and a password with 8–128 characters.');
          const key=username.toLowerCase(); let user;
          if(path==='/api/signup') {
            const initial=body.save?validateSave(body.save):null;
            const digest=await passwordHash(password), id=randomUUID();
            const client=await pool.connect();
            try {
              await client.query('BEGIN');
              await client.query('INSERT INTO players(id,username,username_key,password_hash) VALUES($1,$2,$3,$4)',[id,username,key,digest]);
              await client.query('INSERT INTO player_saves(player_id,payload,revision) VALUES($1,$2,$3)',[id,initial,initial?1:0]);
              await client.query('COMMIT'); user={id,username};
            }catch(e){await client.query('ROLLBACK');if(e.code==='23505')throw new ApiError(409,'That username is already taken. Choose another.');throw e;}finally{client.release();}
          } else {
            const {rows}=await pool.query('SELECT id,username,password_hash FROM players WHERE username_key=$1',[key]);
            const match=await passwordMatches(password,rows[0]?.password_hash||dummy);
            if(!rows[0]||!match) throw new ApiError(401,'Username or password is incorrect.');
            user={id:rows[0].id,username:rows[0].username};
          }
          const token=randomBytes(32).toString('hex');
          await pool.query('INSERT INTO player_sessions(token_hash,player_id,expires_at) VALUES($1,$2,now()+interval \'30 days\')',[hash(token),user.id]);
          setCookie(res,token);send(res,200,{user});return;
        }
        const user=await session(req);
        if(!user) throw new ApiError(401,'Please log in to access your cloud save.');
        if(path==='/api/logout'&&req.method==='POST'){await pool.query('DELETE FROM player_sessions WHERE token_hash=$1',[user.token_hash]);setCookie(res,'',0);send(res,200,{ok:true});return;}
        if(['/api/save','/api/play'].includes(path)&&req.headers['x-player-id']!==user.id)throw new ApiError(409,'The signed-in account changed. Reload this tab to continue.');
        if(path==='/api/play'&&req.method==='POST'){
          const body=await readBody(req);if(!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(body.clientId||''))throw new ApiError(400,'Invalid play session.');
          const {rows}=await pool.query('UPDATE player_saves SET active_client=$1 WHERE player_id=$2 RETURNING payload,revision,updated_at',[body.clientId,user.id]);
          const row=rows[0];send(res,200,{save:row.payload?{...row.payload,savedAt:new Date(row.updated_at).getTime()}:null,revision:row.revision});return;
        }
        if(path==='/api/save'&&req.method==='GET') {
          const {rows}=await pool.query('SELECT payload,revision,updated_at FROM player_saves WHERE player_id=$1',[user.id]);
          const row=rows[0];send(res,200,{save:row.payload?{...row.payload,savedAt:new Date(row.updated_at).getTime()}:null,revision:row.revision});return;
        }
        if(path==='/api/save'&&req.method==='PUT') {
          const body=await readBody(req);
          if(!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(body.clientId||'')||!Number.isSafeInteger(body.revision)||body.revision<0)throw new ApiError(400,'Invalid save version.');
          limit(`save:${user.id}`,600);
          const save=validateSave(body.save);
          const {rows}=await pool.query('UPDATE player_saves SET payload=$1,revision=revision+1,updated_at=now() WHERE player_id=$2 AND revision=$3 AND active_client=$4 RETURNING revision',[save,user.id,body.revision,body.clientId]);
          if(!rows.length)throw new ApiError(409,'Your cloud save changed in another tab. Reload your latest progress.');
          send(res,200,{revision:rows[0].revision});return;
        }
        throw new ApiError(404,'Not found.');
      }catch(error){if(!(error instanceof ApiError)) console.error('Account request failed.');if(!res.headersSent)send(res,error.status||503,{error:error.status?error.message:'Cloud saves are temporarily unavailable. Please try again.'});}
    },
    async close(){clearInterval(cleanup);await pool.end();}
  };
}
