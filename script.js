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
      scents: 'Black Pepper'
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

  /* ------------------------------------------------------------------
     SHARHLAR — rasm img/sharh/ papkasida. quote bo‘lsa iqtibos sifatida
     chiqadi; text — qisqa izoh. post — Telegram kanaldagi video raqami.
  ------------------------------------------------------------------ */
  const REVIEWS = [
    { img: 'shahlo',   name: 'Shahlo Alijonova',  role: 'Bloger',           quote: 'Hidiga gap yo‘q', text: 'Yozgi bog‘da, do‘stlari davrasida Jelai parfyumlangan tana kremi bilan.', post: 1014 },
    { img: 'ziyoda',   name: 'Ziyoda',            role: 'Xonanda',          text: 'Jelai’ning tana va soch parvarishi to‘plamini ochib, krem-batter va moylarni birma-bir sinab ko‘rdi.', post: 446 },
    { img: 'bonamur',  name: 'Bonamur',           role: 'Bloger',           text: 'Uzun sochlari uchun Jelai parfyumlangan «30 in 1» soch spreylarini birma-bir tanishtirdi.', post: 1487 },
    { img: 'sherzod',  name: 'Sherzod Abdullaev', role: 'Kolorist-stilist', text: 'Salonda mijoz turmagini Jelai silliqlovchi soch kremi bilan yakunladi — natija videoda.', post: 767 },
    { img: 'parizoda', name: 'Parizoda Usmanova', role: 'Bloger',           text: 'Soch va tana uchun Jelai to‘plamini ko‘rsatib, har bir mahsulotni qanday ishlatishini aytib berdi.', post: 509 },
    { img: 'durdona',  name: 'Durdona Kurbonova', role: 'Bloger',           text: 'Uyda sochini yuvib, Jelai soch spreyi bilan salondagidek turmak qilishni ko‘rsatdi.', post: 729 },
    { img: 'zarina',   name: 'Zarina Yuldashova', role: 'Bloger',           text: 'Jelai sovg‘a qutisini ochib, qo‘l kremi va uy diffuzorini sinab ko‘rdi.', post: 691 },
    { img: 'diana',    name: 'Diana Omarova',     role: 'Stilist-vizajist', text: 'Kundalik parvarish to‘plami orasida Jelai krem va moylarini ko‘rib chiqdi.', post: 705 }
  ];

  /* ------------------------------------------------------------------
     DILLERLAR — ro‘yxat bo‘sh bo‘lsa, bo‘lim faqat «Diller bo‘ling» va
     ogohlantirishni ko‘rsatadi. Namuna:
     { city: 'Samarqand', name: 'Do‘kon nomi', address: 'Ko‘cha, uy', phone: '+998 90 000 00 00', link: 'https://instagram.com/...' }
  ------------------------------------------------------------------ */
  const DEALERS = [];

  /* ---------- Til: <html lang> bo‘yicha (uz | ru | en). Tarjimalar i18n.js da ---------- */
  const LANG = (document.documentElement.lang || 'uz').slice(0, 2);
  const DICT = ((window.JELAI_I18N || {})[LANG]) || {};
  const BASE = document.documentElement.dataset.base || '';
  const t = (s, x) => { const v = DICT[s] ?? s; return x === undefined ? v : v.replace('{x}', x); };
  PRODUCTS.forEach(p => ['name', 'tag', 'line', 'desc', 'points', 'size', 'scents'].forEach(k => { p[k] = t(p[k]); }));
  SCENTS.forEach(s => { s[1] = t(s[1]); });
  REVIEWS.forEach(rv => ['role', 'text', 'quote'].forEach(k => { if (rv[k]) rv[k] = t(rv[k]); }));

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
    <span class="card-more">${t('Batafsil')} <span aria-hidden="true">→</span></span>
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
    <div><dt>${t('Xususiyat')}</dt><dd>${esc(p.points)}</dd></div>
    <div><dt>${t('Hajm')}</dt><dd>${esc(p.size)}</dd></div>
    <div><dt>${t('Iforlar')}</dt><dd>${esc(p.scents)}</dd></div>
  </dl>
  <div class="sheet-contact">
    <a class="btn" href="https://t.me/Jelai_uz?text=${encodeURIComponent(t('Assalomu alaykum! «{x}» haqida so‘ramoqchi edim.', p.name))}" target="_blank" rel="noopener">${t('Telegram’da buyurtma berish')} <span aria-hidden="true">→</span></a>
    <div class="sheet-contact-row">
      <a class="btn btn-ghost" href="https://ig.me/m/jelair.brand" target="_blank" rel="noopener">Instagram Direct</a>
      <a class="btn btn-ghost" href="tel:+998773029999">+998 77 302 99 99</a>
    </div>
  </div>
  <p class="sheet-small">${t('Narx va mavjudlikni admin buyurtmani tasdiqlashda aytadi.')}</p>
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

  /* ---------- Sharhlar ---------- */
  const track = $('#revTrack');
  track.innerHTML = REVIEWS.map((r, k) => `
<article class="rev reveal" style="--d:${(k % 4) * 0.07}s">
  <a class="rev-img" href="https://t.me/jelaiuzz/${r.post}" target="_blank" rel="noopener" aria-label="${esc(r.name)} — ${t('videoni ko‘rish')}">
    <img src="${BASE}img/sharh/${r.img}.jpg" alt="${esc(r.name)}" width="600" height="800" loading="lazy" decoding="async">
    <span class="rev-play"><i aria-hidden="true"></i>${t('Video')}</span>
  </a>
  ${r.quote ? `<p class="rev-text is-quote">${t('«{x}»', esc(r.quote))}</p>` : ''}
  <p class="rev-text">${esc(r.text)}</p>
  <p class="rev-who"><strong>${esc(r.name)}</strong><span>${esc(r.role)}</span></p>
</article>`).join('');
  const revStep = dir => {
    const c = track.querySelector('.rev');
    track.scrollBy({ left: dir * (c ? c.getBoundingClientRect().width + 20 : 300), behavior: 'smooth' });
  };
  $('#revPrev').addEventListener('click', () => revStep(-1));
  $('#revNext').addEventListener('click', () => revStep(1));
  const revEdges = () => {
    $('#revPrev').disabled = track.scrollLeft < 8;
    $('#revNext').disabled = track.scrollLeft + track.clientWidth > track.scrollWidth - 8;
  };
  track.addEventListener('scroll', revEdges, { passive: true });
  addEventListener('resize', revEdges);
  revEdges();

  /* ---------- Dillerlar ---------- */
  const dl = $('#dealerList');
  if (DEALERS.length) {
    dl.innerHTML = DEALERS.map(d => `
<article class="dealer reveal">
  <p class="eyebrow">${esc(d.city)}</p>
  <h3>${esc(d.name)}</h3>
  ${d.address ? `<p>${esc(d.address)}</p>` : ''}
  ${d.phone ? `<a href="tel:${esc(d.phone.replace(/[^+\d]/g, ''))}">${esc(d.phone)}</a>` : ''}
  ${d.link ? `<a href="${esc(d.link)}" target="_blank" rel="noopener">${t('Sahifasi →')}</a>` : ''}
</article>`).join('');
  } else dl.hidden = true;

  /* ---------- Footer: zarrachalardan yig‘ilgan logotip ----------
     Kompyuterda zarrachalar kursordan qochadi, bosilsa sochiladi; telefonda tegilsa sochilib, qaytib yig‘iladi. */
  (() => {
    const box = $('#ftPlay');
    if (!box) return;
    const cv = box.querySelector('canvas'), ctx = cv.getContext('2d');
    const ring = box.querySelector('.ft-cursor');
    const coarse = matchMedia('(pointer: coarse)').matches;
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    box.querySelector('.ft-play-hint').textContent = coarse
      ? t('Logotipga teging — zarrachalar sochilib ketadi')
      : t('Kursorni yurgizing — zarrachalar qochadi · bosing — sochiladi');
    let W = 0, H = 0, dpr = 1, parts = [], live = false, raf = 0, last = 0, born = 0, shown = false;
    const ptr = { x: -1e4, y: -1e4, rx: -1e4, ry: -1e4, in: false, down: 0 };

    const fit = () => {
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = box.clientWidth; H = box.clientHeight;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const lw = Math.min(W * (W < 600 ? .86 : .74), 980), s = lw / 710, lh = 318 * s;
      const ox = (W - lw) / 2, oy = (H - lh) / 2 - H * .04;
      const oc = document.createElement('canvas');
      oc.width = Math.ceil(lw); oc.height = Math.ceil(lh);
      const o = oc.getContext('2d');
      o.scale(s, s); o.translate(-20, -18);
      document.querySelectorAll('#logo path').forEach(p => o.fill(new Path2D(p.getAttribute('d')), 'evenodd'));
      const d = o.getImageData(0, 0, oc.width, oc.height).data;
      let ink = 0;
      for (let i = 3; i < d.length; i += 4) if (d[i] > 128) ink++;
      const step = Math.max(1.8, Math.sqrt(ink / (coarse || W < 600 ? 1500 : 3000)));
      const T = [];
      for (let y = 0; y < oc.height; y += step)
        for (let x = 0; x < oc.width; x += step) {
          const jx = x + (Math.random() - .5) * step * .8, jy = y + (Math.random() - .5) * step * .8;
          const ix = Math.min(oc.width - 1, Math.max(0, jx | 0)), iy = Math.min(oc.height - 1, Math.max(0, jy | 0));
          if (d[(iy * oc.width + ix) * 4 + 3] > 128) T.push([ox + jx, oy + jy]);
        }
      T.sort(() => Math.random() - .5);
      parts = T.map(([tx, ty], i) => {
        const p = parts[i] || { x: Math.random() * W, y: Math.random() * H, vx: 0, vy: 0, hold: 0,
          a: .55 + Math.random() * .45, r: Math.random() < .14 ? 2.2 : 1.4, ph: Math.random() * 6.28 };
        p.tx = tx; p.ty = ty;
        return p;
      });
    };

    const burst = (x, y, power) => {
      const now = performance.now();
      parts.forEach(p => {
        const dx = p.x - x, dy = p.y - y, d = Math.hypot(dx, dy) || 1;
        const f = power * Math.exp(-d / (W < 600 ? W * .5 : 260)) * (.6 + Math.random() * .8);
        p.vx += dx / d * f + (Math.random() - .5) * 2;
        p.vy += dy / d * f + (Math.random() - .5) * 2 - Math.random() * 2;
        p.hold = now + 380 + Math.random() * 380;          // biroz uchib yuradi, keyin qaytadi
      });
    };

    const frame = now => {
      const f = Math.min(3, (now - last) / 16.67 || 1); last = now;
      const el = now - born;
      ctx.clearRect(0, 0, W, H);
      const R = coarse ? 0 : 120, R2 = R * R;
      ctx.fillStyle = '#f5f5f3';
      for (const p of parts) {
        const back = now > p.hold ? Math.min(1, (now - p.hold) / 900) : 0;
        const k = (shown ? Math.min(1, el / 1400) : 0) * (p.hold ? back : 1);
        if (k > 0) {
          const tx = p.tx + Math.sin(now * .0015 + p.ph) * .8, ty = p.ty + Math.cos(now * .0012 + p.ph) * .8;
          p.vx += (tx - p.x) * .04 * k * f; p.vy += (ty - p.y) * .04 * k * f;
        }
        const drag = Math.pow(now < p.hold ? .955 : .975 - .14 * k, f);
        p.vx *= drag; p.vy *= drag;
        if (R && ptr.in) {
          const dx = p.x - ptr.x, dy = p.y - ptr.y, d2 = dx * dx + dy * dy;
          if (d2 < R2) {
            const d = Math.sqrt(d2) || 1, push = (1 - d / R) * (ptr.down ? 14 : 8) * f;
            p.vx += dx / d * push; p.vy += dy / d * push;
          }
        }
        p.x += p.vx * f; p.y += p.vy * f;
        ctx.globalAlpha = p.a * (.75 + .25 * Math.sin(now * .004 + p.ph * 3));
        ctx.fillRect(p.x - p.r / 2, p.y - p.r / 2, p.r, p.r);
      }
      ctx.globalAlpha = 1;
      if (ring && ptr.in) {                                  // kursor halqasi biroz kechikib ergashadi
        ptr.rx += (ptr.x - ptr.rx) * Math.min(1, .2 * f); ptr.ry += (ptr.y - ptr.ry) * Math.min(1, .2 * f);
        ring.style.transform = `translate(${ptr.rx}px, ${ptr.ry}px) translate(-50%, -50%) scale(${ptr.down ? .55 : 1})`;
      }
      raf = live ? requestAnimationFrame(frame) : 0;
    };
    const start = () => { if (!raf && live) { last = performance.now(); raf = requestAnimationFrame(frame); } };

    const pos = e => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    box.addEventListener('pointermove', e => {
      [ptr.x, ptr.y] = pos(e);
      if (!ptr.in) { ptr.rx = ptr.x; ptr.ry = ptr.y; }
      ptr.in = e.pointerType === 'mouse' || e.pointerType === 'pen';
      box.classList.toggle('hovering', ptr.in);
    });
    box.addEventListener('pointerleave', () => { ptr.in = false; ptr.down = 0; box.classList.remove('hovering'); });
    box.addEventListener('pointerdown', e => {
      const [x, y] = pos(e);
      ptr.down = 1;
      burst(x, y, e.pointerType === 'mouse' ? 22 : W < 600 ? 9 : 16);
      box.classList.add('used');
    });
    addEventListener('pointerup', () => { ptr.down = 0; });

    if (still) { fit(); shown = true; born = -1e5; parts.forEach(p => { p.x = p.tx; p.y = p.ty; }); live = true; frame(performance.now()); live = false; return; }
    new IntersectionObserver(es => es.forEach(en => {
      live = en.isIntersecting;
      if (live && !shown) { shown = true; born = performance.now(); }
      start();
    }), { threshold: .15 }).observe(box);
    let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(fit, 150); });
    fit();
  })();
  document.querySelectorAll('.to-top').forEach(a => a.addEventListener('click', e => { e.preventDefault(); scrollTo({ top: 0, behavior: 'smooth' }); }));

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

  /* ---------- Kirish ekrani: atir tumani logotipga yig‘iladi ---------- */
  const loader = $('#loader');
  const start = () => document.body.classList.add('ready');

  const intro = () => {
    const cv = loader.querySelector('canvas');
    const ctx = cv.getContext('2d');
    const pctEl = loader.querySelector('.loader-pct');
    const coarse = matchMedia('(pointer: coarse)').matches;
    loader.querySelector('.loader-hint').textContent = coarse
      ? t('Barmog‘ingizni suring · kirish uchun teging')
      : t('Kursorni yurgizing · kirish uchun bosing');

    const MIN = 4800, MAX = 8500, EXIT = 1700;
    const t0 = performance.now();
    const ptr = { x: -1e4, y: -1e4 };
    let W = 0, H = 0, dpr = 1, parts = [], cx = 0, cy = 0, logoW = 0;
    let loaded = false, leaving = 0, last = t0, pct = -1;

    const fit = () => {
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = innerWidth; H = innerHeight;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Logotip shaklini yashirin kanvasga chizib, nuqtalarini olamiz
      logoW = Math.min(W * (W < 600 ? .8 : .62), 580);
      const s = logoW / 710, lh = 318 * s;
      const ox = (W - logoW) / 2, oy = (H - lh) / 2 - H * .03;
      cx = W / 2; cy = oy + lh / 2;
      const oc = document.createElement('canvas');
      oc.width = Math.ceil(logoW); oc.height = Math.ceil(lh);
      const o = oc.getContext('2d');
      o.scale(s, s); o.translate(-20, -18);
      document.querySelectorAll('#logo path').forEach(p => o.fill(new Path2D(p.getAttribute('d')), 'evenodd'));
      const d = o.getImageData(0, 0, oc.width, oc.height).data;
      let ink = 0;
      for (let i = 3; i < d.length; i += 4) if (d[i] > 128) ink++;
      const want = coarse || W < 600 ? 1500 : 2600;
      const step = Math.max(1.6, Math.sqrt(ink / want));
      const T = [];
      for (let y = 0; y < oc.height; y += step)
        for (let x = 0; x < oc.width; x += step) {
          const jx = x + (Math.random() - .5) * step * .8, jy = y + (Math.random() - .5) * step * .8;
          const ix = Math.min(oc.width - 1, Math.max(0, jx | 0)), iy = Math.min(oc.height - 1, Math.max(0, jy | 0));
          if (d[(iy * oc.width + ix) * 4 + 3] > 128) T.push([ox + jx, oy + jy, jx / logoW]);
        }
      T.sort(() => Math.random() - .5);

      // Zarrachalar: purkagich chap pastdan, tuman o‘ngga uchadi
      const nx = -30, ny = H * .78;
      const next = T.map((t, i) => {
        const p = parts[i] || (() => {
          const ang = Math.atan2(cy - ny, cx - nx) + (Math.random() - .5) * .55;
          const sp = 6 + Math.random() * 13;
          return { x: nx, y: ny + (Math.random() - .5) * 18, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp,
                   a: .6 + Math.random() * .4, r: Math.random() < .14 ? 2.3 : 1.5, ph: Math.random() * 6.28 };
        })();
        p.tx = t[0]; p.ty = t[1];
        p.delay = 300 + t[2] * 1300 + Math.random() * 500;   // harflar chapdan o‘ngga yig‘iladi
        return p;
      });
      parts = next;
    };

    const leave = () => {
      if (leaving) return;
      leaving = performance.now();
      parts.forEach(p => {
        const dx = p.x - cx, dy = p.y - cy, m = Math.hypot(dx, dy) || 1;
        const f = 2 + Math.random() * 6;
        p.vx += dx / m * f + (Math.random() - .3) * 4;
        p.vy += dy / m * f - 2 - Math.random() * 5;
      });
      loader.classList.add('out');
      root.classList.remove('loading');
      scrollTo(0, 0);
      setTimeout(start, 500);
      try { sessionStorage.setItem('jelai-seen', '1'); } catch (e) { /* ixtiyoriy */ }
    };

    const frame = now => {
      const f = Math.min(3, (now - last) / 16.67); last = now;
      const el = now - t0;
      ctx.clearRect(0, 0, W, H);

      let ex = 0;
      if (leaving) {
        ex = Math.min(1, (now - leaving) / EXIT);
        const e = 1 - Math.pow(1 - ex, 3);
        loader.style.backgroundColor = `rgba(10,10,10,${1 - e})`;
        const g = Math.round(245 - 235 * e);                // tuman oq sahifada qoramtir iz bo‘lib tarqaladi
        ctx.fillStyle = `rgb(${g},${g},${g - 2})`;
        if (ex >= 1) { loader.remove(); return; }
      } else {
        ctx.fillStyle = '#f5f5f3';
        const shown = Math.min(loaded ? 100 : 99, Math.floor(el / MIN * 100));
        if (shown !== pct) { pct = shown; pctEl.textContent = String(pct).padStart(2, '0'); }
        if ((loaded && el >= MIN) || el >= MAX) leave();
      }

      const R = coarse ? 74 : 96, R2 = R * R;
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        if (leaving) {
          p.vx *= Math.pow(.965, f); p.vy = p.vy * Math.pow(.97, f) - .04 * f;
        } else {
          const k = Math.max(0, Math.min(1, (el - p.delay) / 1100));
          if (k > 0) {
            const tx = p.tx + Math.sin(el * .0016 + p.ph) * .7, ty = p.ty + Math.cos(el * .0013 + p.ph) * .7;
            p.vx += (tx - p.x) * .035 * k * f; p.vy += (ty - p.y) * .035 * k * f;
          }
          const drag = Math.pow(.975 - .17 * k, f);
          p.vx *= drag; p.vy *= drag;
          const dx = p.x - ptr.x, dy = p.y - ptr.y, d2 = dx * dx + dy * dy;
          if (d2 < R2) {
            const d = Math.sqrt(d2) || 1, push = (1 - d / R) * 7 * f;
            p.vx += dx / d * push; p.vy += dy / d * push;
          }
        }
        p.x += p.vx * f; p.y += p.vy * f;
        const tw = .78 + .22 * Math.sin(el * .004 + p.ph * 3);
        ctx.globalAlpha = p.a * tw * (1 - ex);
        ctx.fillRect(p.x - p.r / 2, p.y - p.r / 2, p.r, p.r);
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(frame);
    };

    const move = e => { const t = e.touches ? e.touches[0] : e; if (t) { ptr.x = t.clientX; ptr.y = t.clientY; } };
    loader.addEventListener('pointermove', move);
    loader.addEventListener('touchmove', move, { passive: true });
    loader.addEventListener('pointerleave', () => { ptr.x = ptr.y = -1e4; });
    loader.addEventListener('touchend', () => { ptr.x = ptr.y = -1e4; });
    loader.addEventListener('pointerdown', e => { move(e); if (performance.now() - t0 > 1500) leave(); });
    addEventListener('keydown', e => { if (!leaving && ['Enter', ' ', 'Escape'].includes(e.key)) leave(); });
    let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { if (!leaving) fit(); }, 120); });

    fit();
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => { loaded = true; });
    requestAnimationFrame(frame);
  };

  if (root.classList.contains('loading') && loader.querySelector('canvas').getContext) intro();
  else { root.classList.remove('loading'); loader.remove(); requestAnimationFrame(start); }

  $('#year').textContent = new Date().getFullYear();
})();
