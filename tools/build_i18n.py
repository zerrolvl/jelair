# -*- coding: utf-8 -*-
"""O‘zbekcha index.html dan ru/index.html va en/index.html ni yaratadi hamda i18n.js ni yozadi.
Ishlatish:  python3 tools/build_i18n.py   (keyin: node tools/prerender.js)"""
import json, os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, 'tools'))
from translations import T

U = 'https://zerrolvl.github.io/jelair/'
LANGS = {'ru': (0, 'ru_RU'), 'en': (1, 'en_US')}

# 1) i18n.js — skript uchun lug‘at
d = {lang: {k: v[i] for k, v in T.items()} for lang, (i, _) in LANGS.items()}
with open(os.path.join(ROOT, 'i18n.js'), 'w', encoding='utf-8') as f:
    f.write('/* tools/build_i18n.py tomonidan yaratilgan — qo‘lda tahrirlamang */\nwindow.JELAI_I18N = ' + json.dumps(d, ensure_ascii=False) + ';\n')

src = open(os.path.join(ROOT, 'index.html'), encoding='utf-8').read()
ASSETS = ['styles.css', 'script.js', 'favicon.svg', 'icon-192.png', 'apple-touch-icon.png', 'site.webmanifest']

def tr_text(m, i, missing):
    lead, core, trail = m.group(1), m.group(2), m.group(3)
    if core in T: return '>' + lead + T[core][i] + trail + '<'
    if re.search(r'[A-Za-z]', core) and not core.startswith(('{', '@', '+', 'window.')): missing.add(core)
    return m.group(0)

for lang, (i, locale) in LANGS.items():
    h, missing = src, set()
    h = h.replace('<html lang="uz" data-base="">', f'<html lang="{lang}" data-base="../">')
    for a in ASSETS:
        h = h.replace(f'"{a}"', f'"../{a}"')
    h = h.replace('<script src="../script.js" defer></script>', '<script src="../i18n.js" defer></script>\n<script src="../script.js" defer></script>')
    if lang == 'ru':  # Bodoni Moda’da kirill yo‘q — kirill harflari uchun Playfair Display yuklanadi
        h = h.replace('family=Jost:wght@300..500&display=swap', 'family=Jost:wght@300..500&family=Playfair+Display:ital,wght@0,400..600;1,400..500&display=swap')
    h = h.replace(f'<link rel="canonical" href="{U}">', f'<link rel="canonical" href="{U}{lang}/">')
    h = h.replace(f'<meta property="og:url" content="{U}">', f'<meta property="og:url" content="{U}{lang}/">')
    h = h.replace('<meta property="og:locale" content="uz_UZ">', f'<meta property="og:locale" content="{locale}">')
    h = h.replace('<meta property="og:locale:alternate" content="ru_RU">', '<meta property="og:locale:alternate" content="uz_UZ">')
    h = h.replace('"inLanguage": "uz"', f'"inLanguage": "{lang}"').replace(f'"@id": "{U}#page", "url": "{U}"', f'"@id": "{U}{lang}/#page", "url": "{U}{lang}/"')
    # til almashtirgich
    sw = {'uz': '../', 'ru': '../ru/', 'en': '../en/'}; sw[lang] = './'
    h = re.sub(r'<span class="lang"[^>]*>.*?</span>', lambda m: '<span class="lang" role="group" aria-label="Til">' + ''.join(
        f'<a href="{sw[l]}" hreflang="{l}" lang="{l}"' + (' aria-current="true"' if l == lang else '') + f'>{l.upper()}</a>' for l in ['uz', 'ru', 'en']) + '</span>', h, count=1, flags=re.S)
    # matn tugunlari (script va style ichidan tashqari)
    parts = re.split(r'(<script\b.*?</script>|<style\b.*?</style>)', h, flags=re.S)
    for k in range(0, len(parts), 2):
        parts[k] = re.sub(r'>(\s*)([^<>]*?[^\s<>])(\s*)<', lambda m: tr_text(m, i, missing), parts[k])
        parts[k] = re.sub(r'\b(aria-label|placeholder|alt|title|content)="([^"]*)"',
                          lambda m: f'{m.group(1)}="{T[m.group(2)][i]}"' if m.group(2) in T else m.group(0), parts[k])
    h = ''.join(parts).replace('</a> .', '</a>.')
    os.makedirs(os.path.join(ROOT, lang), exist_ok=True)
    open(os.path.join(ROOT, lang, 'index.html'), 'w', encoding='utf-8').write(h)
    print(lang, 'tayyor. Tarjimasi yo‘q matnlar:', sorted(missing) or 'yo‘q')
