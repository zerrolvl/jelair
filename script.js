(() => {
  'use strict';

  /* ------------------------------------------------------------------
     MAHSULOTLAR — shu ro‘yxatni tahrirlang. Yangi atir qo‘shish uchun
     bitta obyekt qo‘shish kifoya. tint — shisha ichidagi suyuqlik rangi.
     long / sillage — 1 dan 5 gacha.
  ------------------------------------------------------------------ */
  const PRODUCTS = [
    {
      name: 'Nur', family: 'Sitrus · Gulli', tint: '#f1dfa4',
      line: 'Tong yorug‘idek tiniq va yengil.',
      desc: 'Bergamotning yorqin ochilishi asta-sekin oq gullarga o‘tadi. Toza ko‘ylak va erta tong havosini eslatadigan kundalik ifor.',
      top: 'Bergamot, limon po‘sti', heart: 'Neroli, yasmin', base: 'Oq mushk, kedr',
      when: 'Kunduzi · bahor, yoz', long: 3, sillage: 2
    },
    {
      name: 'Ipak', family: 'Gulli · Pudrali', tint: '#f0cfc8',
      line: 'Teriga yaqin, yumshoq va nafis.',
      desc: 'Iris va pion atrofida qurilgan mayin kompozitsiya. Baland ovozda gapirmaydi, yaqin kelganlargina sezadi.',
      top: 'Nok, pushti murch', heart: 'Iris, pion', base: 'Kashmir yog‘ochi, mushk',
      when: 'Har kuni · barcha fasllar', long: 3, sillage: 2
    },
    {
      name: 'Sahro', family: 'Sharqona · Yog‘ochli', tint: '#d9a04e',
      line: 'Issiq qum, za’faron va ud.',
      desc: 'Za’faron va kardamonning ziravor issig‘i ud va atirgul bilan uchrashadi. Chuqur, boy va uzoq saqlanadigan iz qoldiradi.',
      top: 'Za’faron, kardamon', heart: 'Ud, atirgul', base: 'Anbar, sandal',
      when: 'Kechqurun · kuz, qish', long: 5, sillage: 4
    },
    {
      name: 'Tun', family: 'Yog‘ochli · Charm', tint: '#5d5450',
      line: 'Qorong‘i, sirli va o‘ziga ishongan.',
      desc: 'Qora murch va olxo‘ri bilan boshlanib, tutatqi va charmga aylanadi. Kechki chiqishlar uchun yaratilgan xarakterli ifor.',
      top: 'Qora murch, olxo‘ri', heart: 'Tutatqi, charm', base: 'Pachuli, vanil',
      when: 'Kechqurun · kuz, qish', long: 5, sillage: 4
    },
    {
      name: 'Bahor', family: 'Yashil · Yangi', tint: '#cfdcae',
      line: 'Yomg‘irdan keyingi bog‘.',
      desc: 'Yashil choy va yalpizning salqini marvaridgul va anjir bargi bilan davom etadi. Yengil nafas olgandek his beradi.',
      top: 'Yashil choy, yalpiz', heart: 'Marvaridgul, anjir bargi', base: 'Vetiver, oq mox',
      when: 'Kunduzi · bahor, yoz', long: 2, sillage: 2
    },
    {
      name: 'Anor', family: 'Mevali · Sharqona', tint: '#b8475a',
      line: 'Shirali, yorqin va esda qoladigan.',
      desc: 'Pishgan anor va qora smorodinaning nordon-shirin ochilishi atirgul orqali iliq tonka va anbarga tushadi.',
      top: 'Anor, qora smorodina', heart: 'Atirgul, osmantus', base: 'Tonka, anbar',
      when: 'Kunduzi va kechqurun · kuz', long: 4, sillage: 3
    }
  ];
  const VOLUME = 'Eau de Parfum · 50 ml';

  const $ = (s, r = document) => r.querySelector(s);
  const root = document.documentElement;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- Shisha chizmasi ---------- */
  const bottle = tint => `
<svg class="bottle" viewBox="0 0 200 330" aria-hidden="true">
  <rect x="68" y="6" width="64" height="66" rx="5" fill="url(#g-cap)"/>
  <rect x="84" y="72" width="32" height="14" fill="url(#g-neck)"/>
  <rect x="26" y="86" width="148" height="236" rx="16" fill="#fff" fill-opacity=".55" stroke="#000" stroke-opacity=".12"/>
  <rect x="36" y="112" width="128" height="196" rx="9" fill="${tint}"/>
  <rect x="36" y="112" width="128" height="196" rx="9" fill="url(#g-liquid)"/>
  <rect x="26" y="86" width="148" height="236" rx="16" fill="url(#g-glass)"/>
  <rect x="42" y="100" width="5" height="206" rx="2.5" fill="#fff" fill-opacity=".5"/>
  <rect x="56" y="176" width="88" height="58" rx="2" fill="#fff" fill-opacity=".94"/>
  <svg x="70" y="188" width="60" height="27" viewBox="0 0 710 318" fill="#0a0a0a"><use href="#logo"/></svg>
</svg>`;

  /* ---------- Hero va kolleksiya ---------- */
  $('#heroArt').innerHTML = bottle(PRODUCTS[2].tint);

  const grid = $('#grid');
  grid.innerHTML = PRODUCTS.map((p, i) => `
<button class="card reveal" type="button" data-i="${i}" style="--d:${(i % 3) * 0.08}s" aria-haspopup="dialog">
  <span class="card-art">${bottle(p.tint)}</span>
  <span class="card-body">
    <span class="card-fam">${esc(p.family)}</span>
    <span class="card-name">${esc(p.name)}</span>
    <span class="card-line">${esc(p.line)}</span>
    <span class="card-more">Batafsil <span aria-hidden="true">→</span></span>
  </span>
</button>`).join('');

  /* ---------- Mahsulot oynasi ---------- */
  const sheet = $('#sheet');
  const dots = n => `<span class="dots" role="img" aria-label="5 dan ${n}">${[1, 2, 3, 4, 5].map(k => `<i${k <= n ? ' class="f"' : ''}></i>`).join('')}</span>`;

  const openSheet = i => {
    const p = PRODUCTS[i];
    $('#sheetBody').innerHTML = `
<div class="sheet-art">${bottle(p.tint)}</div>
<div class="sheet-info">
  <p class="eyebrow">${esc(p.family)}</p>
  <h2 id="sheetName">${esc(p.name)}</h2>
  <p class="sheet-desc">${esc(p.desc)}</p>
  <dl class="sheet-notes">
    <div><dt>Yuqori</dt><dd>${esc(p.top)}</dd></div>
    <div><dt>Yurak</dt><dd>${esc(p.heart)}</dd></div>
    <div><dt>Asos</dt><dd>${esc(p.base)}</dd></div>
  </dl>
  <dl class="sheet-meta">
    <div><dt>Davomiylik</dt><dd>${dots(p.long)}</dd></div>
    <div><dt>Iz</dt><dd>${dots(p.sillage)}</dd></div>
    <div><dt>Qachon</dt><dd>${esc(p.when)}</dd></div>
    <div><dt>Hajm</dt><dd>${esc(VOLUME)}</dd></div>
  </dl>
</div>`;
    sheet.showModal();
    $('#sheetBody').scrollTop = 0;
  };

  grid.addEventListener('click', e => {
    const c = e.target.closest('.card');
    if (c) openSheet(+c.dataset.i);
  });
  $('#sheetClose').addEventListener('click', () => sheet.close());
  sheet.addEventListener('click', e => { if (e.target === sheet) sheet.close(); });

  /* ---------- Navigatsiya ---------- */
  const nav = $('#nav');
  const toggle = $('#navToggle');
  const setMenu = open => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
    root.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  $('#menu').addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

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
  document.querySelectorAll('[data-todo]').forEach(a => a.addEventListener('click', e => e.preventDefault()));
})();
