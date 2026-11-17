(() => {
  'use strict';

  /* ------------------------------------------------------------------
     MAHSULOTLAR — shu ro‘yxatni tahrirlang. art: diffuser | jar | spray |
     pump | box. tint — idish ichidagi rang.
  ------------------------------------------------------------------ */
  const PRODUCTS = [
    {
      name: 'Diffuzor', tag: 'Uy uchun', art: 'diffuser', tint: '#8f1d2c',
      line: 'Tayoqchali aromadiffuzor — uy va ofis uchun.',
      desc: 'Xonani selektiv parfyumeriyadan ilhomlangan ifor bilan to‘ldiradi. Sodda dizayn, uzoq saqlanadigan ifor.',
      points: 'Uy, ofis va istalgan xona uchun',
      size: '50 ml · 100 ml',
      scents: 'Lost Cherry, Baccarat Rouge 540, Molecule 020, Devil’s Intrigue, La Sultane, Blackberry & Bay, Black Pepper, Bitter Peach, Santal 33, Tobacco Vanille, Black Vanilla, Moss'
    },
    {
      name: 'Tana va qo‘l kremi', tag: 'Tana', art: 'pump', tint: '#efe6da',
      line: 'Parfyumlangan krem — namlaydi va iz qoldiradi.',
      desc: 'Shi yog‘i, shirin bodom yog‘i va kokos suti asosidagi yengil losyon. Terini yumshoq va baxmaldek qiladi.',
      points: 'Tez singadi, tana va kiyimda iz qoldirmaydi',
      size: '250 ml',
      scents: 'Lost Cherry, La Sultane, Blanche, Black Pepper & Amber Neroli, Blackberry & Bay, Devil’s Intrigue, Lime Basil & Mandarin'
    },
    {
      name: 'Krem-batter', tag: 'Tana', art: 'jar', tint: '#f3ead6',
      line: 'Sufledek zich, to‘yimli tekstura.',
      desc: 'Qattiq tabiiy yog‘lar asosidagi zich krem. Terini chuqur namlaydi va oziqlantiradi, quruq teri uchun ayniqsa mos.',
      points: 'Chuqur namlash va oziqlantirish',
      size: 'Tana uchun katta idish · qo‘l uchun 30 ml',
      scents: 'Lost Cherry, La Sultane, Blackberry & Bay'
    },
    {
      name: 'Soch spreyi 30 in 1', tag: 'Soch', art: 'spray', tint: '#e9d9c4',
      line: 'Termohimoya, yaltirash va ifor.',
      desc: 'Tarkibidagi keratin sochni himoya qiladi va har foydalanishdan keyin tabiiy yaltirashni saqlaydi. Sochga parfyumdek ifor beradi.',
      points: 'Fen va dazmoldan termohimoya · ultrabinafsha nurlardan himoya · yaltirash',
      size: 'Sprey flakon',
      scents: 'Black Pepper, Devil’s Intrigue, La Sultane'
    },
    {
      name: 'Soch niqobi', tag: 'Soch', art: 'jar', tint: '#d9c2c2',
      line: 'Shampun va konditsionerdan chuqurroq ta’sir.',
      desc: 'Soch tolasiga chuqur kirib, shikastlangan sochni tiklaydi, namlaydi va oziqlantiradi. Bo‘yalgan soch rangini saqlashga yordam beradi.',
      points: 'Tiklash · namlash · rangni saqlash',
      size: 'Banka',
      scents: 'Lost Cherry, Blanche'
    },
    {
      name: 'Soch kremi', tag: 'Soch', art: 'pump', tint: '#f1ede6',
      line: 'Yuvilmaydigan silliqlovchi krem.',
      desc: 'Sochni bir zumda silliq va yaltiroq qiladi, shikastlangan uchlarni tiklaydi. Quyosh, tuzli va xlorli suvdan himoya qiladi.',
      points: 'Yuvib tashlanmaydi · silliqlik va yaltirash',
      size: 'Flakon',
      scents: 'Parfyumlangan'
    },
    {
      name: 'Suyuq sovun', tag: 'Tana', art: 'pump', tint: '#2b2b2b',
      line: 'Parfyumlangan, terini quritmaydi.',
      desc: 'Tabiiy tarkibli yumshoq sovun. Terini avaylab tozalaydi, keskin hidlarni ketkazadi va qo‘lda nafis ifor qoldiradi.',
      points: 'Har kuni foydalanish uchun · terini quritmaydi',
      size: 'Dozatorli flakon',
      scents: 'Black Pepper va boshqalar'
    },
    {
      name: 'Vanna tuzi', tag: 'Tana', art: 'jar', tint: '#f6f3ee',
      line: 'Uydagi SPA marosimi.',
      desc: 'Vannani ifor bilan to‘ldiradi, terini yumshatadi va charchoqni oladi. Kechki dam olish uchun.',
      points: 'Terini yumshatadi · charchoqni oladi',
      size: 'Banka',
      scents: 'Blanche, Black Pepper'
    },
    {
      name: 'Sovg‘a to‘plami', tag: 'Sovg‘a', art: 'box', tint: '#0a0a0a',
      line: 'Bir nechta mahsulot bitta qutida.',
      desc: 'Tayyor sovg‘a to‘plamlari bir necha xil tarkibda. Ichidagi mahsulotlar va iforni buyurtma paytida tanlash mumkin.',
      points: 'Turli tarkib va hajmdagi to‘plamlar',
      size: 'To‘plamga qarab',
      scents: 'Tanlov bo‘yicha'
    }
  ];

  /* ------------------------------------------------------------------
     IFORLAR — nomi, notalari va rang nuqtasi.
  ------------------------------------------------------------------ */
  const SCENTS = [
    ['Lost Cherry', 'Pishgan gilos, bodom, sandal', '#8f1d2c'],
    ['Baccarat Rouge 540', 'Za’faron va yasmin, iliq shirin akkordlar, yog‘ochli iz', '#d98a6a'],
    ['Devil’s Intrigue', 'Osmantus, oq choy · apelsin guli, sandal · kashmeran, vanil', '#c9b8a3'],
    ['Black Pepper', 'Qora murch · koriandr, kardamon · yog‘och, mushk, anbar', '#3a3532'],
    ['La Sultane', 'Anbar, vanil, pachuli', '#b8863b'],
    ['Blackberry & Bay', 'Maymunjon, kedr, vetiver', '#4b2a4f'],
    ['Lime Basil & Mandarin', 'Laym, mandarin · rayhon · oq timyan, anbar', '#b9c96a'],
    ['Blanche', 'Aldegidlar, atirgul · pion, apelsin guli · mushk, sandal. Tozalik hidi', '#f1efe9'],
    ['Flora', 'Pion, nok, sitrus · osmantus, atirgul · sandal, pachuli', '#eab4c2'],
    ['Molecule 02', 'Faqat terida ochiladi va har kimda har xil eshitiladi', '#dfe3e6'],
    ['Bitter Peach', 'To‘yingan shaftoli notasi', '#f0a36b'],
    ['African Leather', 'Charm, kardamon, geran · pachuli, vetiver', '#7a4a2a']
  ];

  const $ = (s, r = document) => r.querySelector(s);
  const root = document.documentElement;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- Idish chizmalari (viewBox 0 0 200 330) ---------- */
  const label = (x, y, w, dark) => `
  <rect x="${x}" y="${y}" width="${w}" height="${w * 0.6}" rx="2" fill="${dark ? '#0a0a0a' : '#fff'}" fill-opacity=".95"/>
  <svg x="${x + w * 0.16}" y="${y + w * 0.15}" width="${w * 0.68}" height="${w * 0.305}" viewBox="0 0 710 318" fill="${dark ? '#fff' : '#0a0a0a'}"><use href="#logo"/></svg>`;
  const glass = (x, y, w, hh, r, tint, pad = 10) => `
  <rect x="${x}" y="${y}" width="${w}" height="${hh}" rx="${r}" fill="#fff" fill-opacity=".55" stroke="#000" stroke-opacity=".12"/>
  <rect x="${x + pad}" y="${y + pad * 2}" width="${w - pad * 2}" height="${hh - pad * 3}" rx="${Math.max(2, r - 7)}" fill="${tint}"/>
  <rect x="${x + pad}" y="${y + pad * 2}" width="${w - pad * 2}" height="${hh - pad * 3}" rx="${Math.max(2, r - 7)}" fill="url(#g-liquid)"/>
  <rect x="${x}" y="${y}" width="${w}" height="${hh}" rx="${r}" fill="url(#g-glass)"/>
  <rect x="${x + 15}" y="${y + 14}" width="5" height="${hh - 30}" rx="2.5" fill="#fff" fill-opacity=".45"/>`;
  const ART = {
    spray: t => `
  <rect x="68" y="6" width="64" height="66" rx="5" fill="url(#g-cap)"/>
  <rect x="84" y="72" width="32" height="14" fill="url(#g-neck)"/>
  ${glass(26, 86, 148, 236, 16, t)}${label(56, 176, 88)}`,
    diffuser: t => `
  <g stroke="#2a2420" stroke-width="3.2" stroke-linecap="round">
    <path d="M97 150 62 14M100 150 88 6M100 150 112 6M103 150 138 14M99 150 74 30M101 150 126 30"/>
  </g>
  <rect x="80" y="140" width="40" height="22" rx="3" fill="url(#g-cap)"/>
  ${glass(38, 160, 124, 162, 14, t)}${label(60, 214, 80)}`,
    jar: t => `
  <rect x="24" y="150" width="152" height="52" rx="8" fill="url(#g-cap)"/>
  ${glass(30, 200, 140, 122, 16, t)}${label(62, 232, 76)}`,
    pump: t => `
  <rect x="58" y="34" width="62" height="13" rx="5" fill="url(#g-cap)"/>
  <rect x="90" y="40" width="20" height="40" fill="url(#g-cap)"/>
  <rect x="78" y="78" width="44" height="24" rx="4" fill="url(#g-cap)"/>
  ${glass(42, 100, 116, 222, 18, t)}${label(62, 182, 76, t === '#2b2b2b' ? false : false)}`,
    box: () => `
  <rect x="24" y="118" width="152" height="46" rx="4" fill="url(#g-cap)"/>
  <rect x="30" y="162" width="140" height="160" rx="4" fill="#0f0f0f"/>
  <rect x="30" y="162" width="140" height="160" rx="4" fill="url(#g-glass)"/>
  <rect x="92" y="118" width="16" height="204" fill="#8f1d2c"/>
  <path d="M100 118c-14-30-44-26-36-6 5 12 24 8 36 6zm0 0c14-30 44-26 36-6-5 12-24 8-36 6z" fill="#8f1d2c"/>
  ${label(62, 214, 76)}`
  };
  const art = (kind, tint) => `<svg class="bottle" viewBox="0 0 200 330" aria-hidden="true">${ART[kind](tint)}</svg>`;

  /* ---------- Hero, mahsulotlar, iforlar ---------- */
  $('#heroArt').innerHTML = art('diffuser', PRODUCTS[0].tint);

  const grid = $('#grid');
  grid.innerHTML = PRODUCTS.map((p, i) => `
<button class="card reveal" type="button" data-i="${i}" style="--d:${(i % 3) * 0.08}s" aria-haspopup="dialog">
  <span class="card-art">${art(p.art, p.tint)}</span>
  <span class="card-body">
    <span class="card-fam">${esc(p.tag)}</span>
    <span class="card-name">${esc(p.name)}</span>
    <span class="card-line">${esc(p.line)}</span>
    <span class="card-more">Batafsil <span aria-hidden="true">→</span></span>
  </span>
</button>`).join('');

  $('#scentList').innerHTML = SCENTS.map(([n, notes, t]) => `
<li class="reveal"><i style="--t:${t}"></i><span class="scent-name">${esc(n)}</span><span class="scent-notes">${esc(notes)}</span></li>`).join('');

  /* ---------- Mahsulot oynasi ---------- */
  const sheet = $('#sheet');

  const openSheet = i => {
    const p = PRODUCTS[i];
    $('#sheetBody').innerHTML = `
<div class="sheet-art">${art(p.art, p.tint)}</div>
<div class="sheet-info">
  <p class="eyebrow">${esc(p.tag)}</p>
  <h2 id="sheetName">${esc(p.name)}</h2>
  <p class="sheet-desc">${esc(p.desc)}</p>
  <dl class="sheet-notes">
    <div><dt>Xususiyat</dt><dd>${esc(p.points)}</dd></div>
    <div><dt>Hajm</dt><dd>${esc(p.size)}</dd></div>
    <div><dt>Iforlar</dt><dd>${esc(p.scents)}</dd></div>
  </dl>
  <p class="sheet-desc">Narx va mavjudligini <a href="https://www.instagram.com/jelair.brand/" target="_blank" rel="noopener">Instagram Direct</a> yoki <a href="https://t.me/JELAIDI" target="_blank" rel="noopener">Telegram</a> orqali so‘rang.</p>
</div>`;
    sheet.showModal();
    root.classList.add('locked');
    $('#sheetBody').scrollTop = 0;
  };

  grid.addEventListener('click', e => {
    const c = e.target.closest('.card');
    if (c) openSheet(+c.dataset.i);
  });
  $('#sheetClose').addEventListener('click', () => sheet.close());
  sheet.addEventListener('click', e => { if (e.target === sheet) sheet.close(); });
  sheet.addEventListener('close', () => root.classList.remove('locked'));

  /* ---------- Navigatsiya ---------- */
  const nav = $('#nav');
  const toggle = $('#navToggle');
  const setMenu = open => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
    root.classList.toggle('locked', open);
  };
  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  $('#menu').addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  matchMedia('(min-width: 761px)').addEventListener('change', e => { if (e.matches) setMenu(false); });

  /* ---------- Bayon: so‘zlar skroll bilan yonadi ---------- */
  const st = $('#statement');
  st.innerHTML = st.textContent.trim().split(/\s+/).map(w => `<span class="w">${esc(w)}</span>`).join(' ');
  const words = [...st.children];

  let ticking = false;
  const onScroll = () => {
    ticking = false;
    nav.classList.toggle('scrolled', scrollY > 8);
    const r = st.getBoundingClientRect();
    const vh = innerHeight;
    const prog = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.4)));
    const n = Math.round(prog * words.length);
    words.forEach((w, i) => w.classList.toggle('on', i < n));
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();

  /* ---------- Skroll bilan paydo bo‘lish ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- Kirish ekrani ---------- */
  const loader = $('#loader');
  const start = () => document.body.classList.add('ready');

  if (root.classList.contains('loading')) {
    const MIN = 1900;                       // animatsiya to‘liq o‘ynashi uchun
    const t0 = performance.now();
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      setTimeout(() => {
        loader.classList.add('out');
        root.classList.remove('loading');
        scrollTo(0, 0);
        setTimeout(start, 350);
        loader.addEventListener('animationend', e => { if (e.target === loader) loader.remove(); });
        try { sessionStorage.setItem('jelai-seen', '1'); } catch (e) { /* ixtiyoriy */ }
      }, Math.max(0, MIN - (performance.now() - t0)));
    };
    const fonts = document.fonts ? document.fonts.ready : Promise.resolve();
    fonts.then(finish);
    setTimeout(finish, 3500);               // sekin tarmoqda ham ochiladi
  } else {
    loader.remove();
    requestAnimationFrame(start);
  }

  $('#year').textContent = new Date().getFullYear();
})();
