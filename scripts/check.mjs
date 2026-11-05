import {readdir,readFile,access} from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve('dist');
async function walk(dir){return(await Promise.all((await readdir(dir,{withFileTypes:true})).map(e=>e.isDirectory()?walk(path.join(dir,e.name)):path.join(dir,e.name)))).flat();}
const files=(await walk(root)).filter(f=>f.endsWith('.html'));
let links=0,schemas=0;
for(const file of files){
 const html=await readFile(file,'utf8');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`One H1: ${file}`);
 assert.ok(html.includes('<html lang="ms-MY">'));
 assert.match(html,/<meta name="description" content="[^"]+">/);
 assert.match(html,/<link rel="canonical" href="https:\/\/www.temanauto.com[^\"]*">/);
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(ids.length,new Set(ids).size,`Duplicate IDs: ${file}`);
 for(const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)){
  const data=JSON.parse(match[1]);assert.ok(Array.isArray(data));schemas+=data.length;
  assert.ok(!data.some(d=>['Review','AggregateRating'].includes(d['@type'])));
 }
 for(const match of html.matchAll(/(?:href|src)="([^\"]+)"/g)){
  const url=match[1];if(url.startsWith('#')){assert.ok(ids.includes(url.slice(1)),`Missing anchor ${url} in ${file}`);continue;}
  if(!url.startsWith('/')||url.startsWith('//'))continue;
  const pathname=url.split(/[?#]/)[0];assert.ok(!pathname.endsWith('.html'),`Unclean link: ${url}`);
  const dest=path.join(root,pathname==='/'?'index.html':pathname.slice(1)+(path.extname(pathname)?'':'.html'));
  await access(dest);links++;
 }
 assert.ok(!html.includes('wa.me/601234'),`Placeholder phone: ${file}`);
 for(const match of html.matchAll(/srcset="([^"]+)"/g)){
  for(const candidate of match[1].split(',')){
   const [url,width]=candidate.trim().split(/\s+/);
   assert.match(width,/^\d+w$/);
   await access(path.join(root,url.slice(1)));
  }
 }
}
const sitemap=await readFile(path.join(root,'sitemap.xml'),'utf8');
assert.ok(!sitemap.includes('/cerita-pelanggan'));assert.ok(!sitemap.includes('/404'));
assert.match(await readFile(path.join(root,'cerita-pelanggan.html'),'utf8'),/noindex,follow/);
console.log(`PASS: ${files.length} pages, ${links} internal asset/page links, ${schemas} structured-data objects; headings, anchors, canonicals and sample-story exclusions verified.`);
