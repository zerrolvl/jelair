(() => {
  'use strict';

  /* ------------------------------------------------------------------
     MAHSULOTLAR — faqat yangi «Jelai R» logotipli asl mahsulotlar.
     img — img/products/ dagi surat. points — « · » bilan ajratilgan.
  ------------------------------------------------------------------ */
  const PRODUCTS = [
    {
      name: 'Soch uchun krem-sprey «30 in 1»', tag: 'Soch', img: 'spray',
      line: 'Parfyumlangan termohimoya, ipak oqsillari bilan.',
      desc: 'Bitta flakonda parvarish, himoya va selektiv atirlardan ilhomlangan ifor. Tarkibida spirt yo‘q.',
      points: 'Fen, dazmol va ploykadan termohimoya · quyosh nurlari va changdan himoya · uchlar bo‘linishini kamaytiradi · shikastlangan sochni parvarishlaydi · yumshoqlik, silliqlik va jilva · tarashni osonlashtiradi · statik elektrni oladi · noxush hidlarni yo‘qotadi · ifor 12 soatgacha',
      use: 'Quruq yoki nam sochga 10–15 sm masofadan, butun uzunligi bo‘ylab seping.',
      scents: 'Lost Cherry, Baccarat Rouge 540, Kirke, Black Opium, Chance Eau Tendre, Good Girl Gone Bad, Imagination, Sultan, Devil’s Intrigue'
    },
    {
      name: 'Tana uchun mist', tag: 'Tana', img: 'mist',
      line: 'Yengil ifor — kun bo‘yi yangilab turish uchun.',
      desc: 'Teriga yoqimli hid beruvchi yengil, xushbo‘y sprey. Atirga qaraganda yumshoqroq va nozikroq, kun davomida bir necha marta ishlatish mumkin. Tana va soch uchun.',
      points: 'Terini yangilaydi va tetiklashtiradi · dushdan keyin yoki istalgan vaqtda · namlangan terida uzoqroq saqlanadi',
      use: '15–20 sm masofadan bo‘yin, bilak, yelka va tanaga seping.',
      scents: 'Lost Cherry, Baccarat Rouge 540, Black Opium, Black Pepper, Hayati, Kirke, Sultan'
    },
    {
      name: 'Uy uchun parfyum «Xlopok»', tag: 'Uy', img: 'home',
      line: 'Tozalik va endigina yuvilgan kir hidi.',
      desc: 'Nafis va musaffo ifor istalgan joyda tozalik va qulaylik hissini yaratadi.',
      points: 'Uy uchun · avtomobil uchun · ofis uchun · parda va matolar uchun',
      use: 'Xona havosiga, parda va matolarga purkang.',
      scents: 'Xlopok'
    }
  ];

  /* ------------------------------------------------------------------
     IFORLAR — «30 in 1» soch spreyi iforlari. Notalar yorliq va
     brend postlaridan olingan. img — img/ifor/ dagi rasm.
  ------------------------------------------------------------------ */
  const SCENTS = [
    ['Lost Cherry', 'Gilos, bodom, vanil', '#8f1d2c', 'lost-cherry', 'Shirin va shirali gilos, achchiq bodom va mayin vanil.'],
    ['Baccarat Rouge 540', 'Za’faron, yasmin, ambra', '#c1443c', 'baccarat-rouge', 'Iliq, sirli va uzoq saqlanadigan hashamatli iz.'],
    ['Kirke', 'Marakuya, shaftoli, sandal', '#e08a52', 'kirke', 'Shirali mevalar, gul notalari va iliq mushk.'],
    ['Black Opium', 'Qahva, vanil, yasmin', '#2e2420', 'black-opium', 'Shirin vanil, boy qahva va oq gullar.'],
    ['Chance Eau Tendre', 'Behi, yasmin, mushk', '#e7a6b9', 'chance', 'Nafis mevali-gulli ifor: greypfrut, behi, yasmin.'],
    ['Good Girl Gone Bad', 'Osmantus, yasmin, tuberoza', '#e3c48a', 'good-girl', 'Shirin va latofatli gulli ifor.'],
    ['Imagination', 'Bergamot, zanjabil, ambroksan', '#6fb8bd', 'imagination', 'Sitrus, zanjabil va qora choy — toza va tetik.'],
    ['Sultan', 'Ambra, vanil, gvayak', '#8a5a2b', 'sultan', 'Iliq, shirin va sharqona hashamat.'],
    ['Devil’s Intrigue', 'Kashmeran, sandal, osmantus', '#b9a089', 'devils-intrigue', 'Shirin, gulli va iliq notalar — sirli va jozibali.']
  ];

  /* ------------------------------------------------------------------
     SHARHLAR — faqat «Jelai R» mahsulotlari ko‘rinadigan videolar.
     post — Telegram kanaldagi video raqami.
  ------------------------------------------------------------------ */
  const REVIEWS = [
    { img: 'bonamur', name: 'Bonamur',           role: 'Bloger',           text: 'Uzun sochlari uchun Jelai R «30 in 1» spreylarini birma-bir tanishtirdi.', post: 1487 },
    { img: 'nigina',  name: 'Nigina',            role: 'Bloger',           text: 'Salonda Jelai R soch spreyi bilan turmak qildirdi va iforini baholadi.', post: 1505 },
    { img: 'sherzod', name: 'Sherzod Abdullaev', role: 'Kolorist-stilist', text: 'Mijoz sochini Jelai R «30 in 1» bilan parvarishlab, turmaklaydi.', post: 1505 },
    { img: 'salon',   name: 'Go‘zallik ustalari', role: 'Salon',           text: 'Stilistlar ish jarayonida Jelai R mahsulotlaridan foydalanadi.', post: 1506 }
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
  PRODUCTS.forEach(p => ['name', 'tag', 'line', 'desc', 'points', 'use', 'scents'].forEach(k => { p[k] = t(p[k]); }));
  SCENTS.forEach(s => { s[1] = t(s[1]); s[4] = t(s[4]); });
  REVIEWS.forEach(rv => ['name', 'role', 'text', 'quote'].forEach(k => { if (rv[k]) rv[k] = t(rv[k]); }));

  const $ = (s, r = document) => r.querySelector(s);
  const root = document.documentElement;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));


  /* ---------- Hero, mahsulotlar, iforlar ---------- */

  const grid = $('#grid');
  grid.innerHTML = PRODUCTS.map((p, i) => `
<button class="card reveal" type="button" data-i="${i}" style="--d:${(i % 3) * 0.08}s" aria-haspopup="dialog">
  <span class="card-art"><img src="${BASE}img/products/${p.img}.jpg" alt="Jelai R — ${esc(p.name)}" width="640" height="800" loading="lazy" decoding="async"></span>
  <span class="card-body">
    <span class="card-fam">${esc(p.tag)}</span>
    <span class="card-name">${esc(p.name)}</span>
    <span class="card-line">${esc(p.line)}</span>
    <span class="card-more">${t('Batafsil')} <span aria-hidden="true">→</span></span>
  </span>
</button>`).join('');

  $('#scentList').innerHTML = SCENTS.map(([n, notes, c, img, about], k) => `
<article class="ifor reveal" style="--d:${(k % 4) * 0.06}s; --t:${c}">
  <div class="ifor-img"><img src="${BASE}img/ifor/${img}.jpg" alt="Jelai R «30 in 1» — ${esc(n)}" width="600" height="800" loading="lazy" decoding="async"></div>
  <h3 class="ifor-name"><i aria-hidden="true"></i>${esc(n)}</h3>
  <p class="ifor-notes">${esc(notes)}</p>
  <p class="ifor-about">${esc(about)}</p>
</article>`).join('');

  /* ---------- Mahsulot oynasi ---------- */
  const sheet = $('#sheet');

  const openSheet = i => {
    const p = PRODUCTS[i];
    $('#sheetBody').innerHTML = `
<div class="sheet-art"><img src="${BASE}img/products/${p.img}.jpg" alt="Jelai R — ${esc(p.name)}" width="640" height="800"></div>
<div class="sheet-info">
  <p class="eyebrow">${esc(p.tag)}</p>
  <h2 id="sheetName">${esc(p.name)}</h2>
  <p class="sheet-desc">${esc(p.desc)}</p>
  <dl class="sheet-notes">
    <div><dt>${t('Xususiyat')}</dt><dd><ul class="pts">${p.points.split(' · ').map(x => `<li>${esc(x)}</li>`).join('')}</ul></dd></div>
    <div><dt>${t('Qo‘llash')}</dt><dd>${esc(p.use)}</dd></div>
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

  /* ---------- Kunduzgi / tungi rejim ---------- */
  const darkMQ = matchMedia('(prefers-color-scheme: dark)');
  const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : darkMQ.matches;
  $('#themeBtn').addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    root.classList.add('theme-anim');
    root.dataset.theme = next;
    try { localStorage.setItem('jelai-theme', next); } catch (e) { /* ixtiyoriy */ }
    setTimeout(() => root.classList.remove('theme-anim'), 500);
  });

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
        const g = isDark() ? 242 : Math.round(245 - 235 * e);   // oq sahifada qoramtir iz, tungi rejimda yorug‘ bo‘lib tarqaladi
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
