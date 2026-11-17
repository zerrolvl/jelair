// JS yaratadigan bloklarni (mahsulotlar, iforlar, sharhlar) har bir til sahifasiga statik HTML qilib yozadi — SEO uchun.
// Ishlatish:  node tools/prerender.js      (Playwright kerak)
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const PAGES = ['index.html', 'ru/index.html', 'en/index.html'].filter(p => fs.existsSync(path.join(ROOT, p)));
const IDS = ['heroArt', 'grid', 'scentList', 'revTrack'];
(async () => {
  const b = await chromium.launch();
  for (const page of PAGES) {
    const file = path.join(ROOT, page);
    const c = await b.newContext();
    await c.addInitScript("try{sessionStorage.setItem('jelai-seen','1')}catch(e){}");
    const p = await c.newPage();
    await p.goto('file://' + file);
    await p.waitForTimeout(300);
    const got = await p.evaluate(ids => ids.map(id => document.getElementById(id).innerHTML
      .replace(/ class="([^"]*)\bin\b([^"]*)"/g, ' class="$1$2"').trim()), IDS);
    await c.close();
    let h = fs.readFileSync(file, 'utf8');
    IDS.forEach((id, k) => {
      const m = h.match(new RegExp('<(div|ul)[^>]*\\bid="' + id + '"[^>]*>'));
      const start = h.indexOf(m[0]) + m[0].length, marker = '<!--/' + id + '-->', close = '</' + m[1] + '>';
      let end = h.indexOf(marker, start);
      if (end < 0) { end = h.indexOf(close, start); h = h.slice(0, end) + close + marker + h.slice(end + close.length); }
      else end = h.lastIndexOf(close, end);
      h = h.slice(0, start) + got[k] + h.slice(end);
    });
    fs.writeFileSync(file, h);
    console.log(page, got.map(g => g.length).join(' '));
  }
  await b.close();
})();
