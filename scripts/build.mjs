import {mkdir,readFile,writeFile,cp,readdir} from 'node:fs/promises';
import {home,services,stories,faqs} from '../src/pages.mjs';
import {blog,detail,articles} from '../src/editorial.mjs';
import {calculator} from '../src/calculator.mjs';
import {documentPage,breadcrumb,cta} from '../src/components.mjs';
import {site} from '../src/config.mjs';
const pages=[
['/','TemanAuto — Broker Kereta & Panduan Loan Bermasalah',site.description,home()],
['/cara-kami-bantu','Cara Kami Bantu','Fahami proses TemanAuto: perbincangan awal, pilihan kereta, panduan dokumen dan langkah permohonan.',services()],
['/cerita-pelanggan','Cerita Pelanggan','Contoh cerita pelanggan untuk menunjukkan pendekatan TemanAuto. Semua testimoni rekaan dilabelkan dengan jelas.',stories(),{noindex:true}],
['/soalan-lazim','Soalan Lazim Loan Kereta, CTOS & Dokumen','Jawapan tentang loan pernah ditolak, gaji rendah, CTOS, dokumen, caj dan keselamatan berurusan.',faqs()],
['/blog','Blog Loan Kereta, CTOS, Bajet & Dokumen','Panduan loan kereta, rekod kredit, gaji rendah, bekerja sendiri dan elak scam. Baca artikel dengan rujukan rasmi.',blog()],
['/kalkulator','Kalkulator Ansuran, Bajet & Deposit Kereta','Anggarkan ansuran baki berkurangan, baki bajet bulanan dan tempoh simpanan deposit. Bukan semakan kelayakan.',calculator()],
['/privasi','Privasi & Cara Berhubung','Maklumat tentang penggunaan laman TemanAuto dan perbualan melalui WhatsApp.',`${breadcrumb('Privasi')}<section class="container prose section"><h1>Privasi & cara berhubung</h1><p>Laman ini menyediakan maklumat umum. Carian, penapis dan kalkulator berjalan dalam pelayar anda; input tersebut tidak dihantar kepada TemanAuto.</p><h2>WhatsApp</h2><p>Butang perbualan membawa anda ke WhatsApp. Mesej hanya dihantar apabila anda sendiri menghantarnya. Pengendalian maklumat dalam WhatsApp tertakluk kepada perkhidmatan tersebut.</p><h2>Maklumat sensitif</h2><p>Mulakan dengan situasi umum. Jangan masukkan kata laluan, OTP, nombor akaun atau dokumen pengenalan dalam perbualan awal. Tanyakan tujuan dan saluran yang sesuai sebelum berkongsi dokumen.</p><h2>Storan pelayar</h2><p>Pilihan mengurangkan animasi disimpan dalam pelayar anda. Tiada analitik pengiklanan dipasang. Penyedia hosting mungkin memproses log teknikal untuk menyediakan perkhidmatan.</p><h2>Hubungi kami</h2><p>Untuk pertanyaan tentang maklumat yang anda kongsi, hubungi TemanAuto melalui nombor ${site.displayPhone}.</p>${cta()}</section>`],
...articles.map(a=>['/blog/'+a.slug,a.title,a.description,detail(a),{article:a}]),
['/404','Halaman tidak ditemui','Halaman yang diminta tidak ditemui.',`<section class="container prose section"><span class="eyebrow">404</span><h1>Halaman tidak ditemui.</h1><p>Mungkin pautan telah berubah. Terokai panduan kami atau kembali ke halaman utama.</p><a class="button" href="/">Ke halaman utama</a> <a class="text-link" href="/blog">Terokai blog</a></section>`,{noindex:true}]
];
await mkdir('dist',{recursive:true});await cp('public','dist',{recursive:true});
await cp('src/styles.css','dist/styles.css');await cp('src/app.js','dist/app.js');await cp('src/calculations.js','dist/calculations.js');
for(const [path,title,desc,body,opts]of pages){const file=path==='/'?'dist/index.html':`dist${path}.html`;await mkdir(file.slice(0,file.lastIndexOf('/')),{recursive:true});await writeFile(file,documentPage(path,title,desc,body,opts));}
const indexable=pages.filter(p=>!p[4]?.noindex);
await writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+indexable.map(p=>`<url><loc>${site.url}${p[0]==='/'?'':p[0]}</loc><lastmod>${site.updated}</lastmod></url>`).join('')+'</urlset>');
await writeFile('dist/robots.txt',`User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
await writeFile('dist/_headers',`/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n  X-Frame-Options: SAMEORIGIN\n  Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self' 'inline-speculation-rules'; font-src 'self'; connect-src 'self'; base-uri 'self'; frame-ancestors 'self'; form-action 'self'\n/assets/*\n  Cache-Control: public, max-age=86400\n/fonts/*\n  Cache-Control: public, max-age=31536000, immutable\n`);
console.log(`Built ${pages.length} pages. Canonical domain ${site.url}.`);
