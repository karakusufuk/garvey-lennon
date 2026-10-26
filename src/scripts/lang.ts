// Site language (EN / PL / PT). Remembered in localStorage ('gl-lang'); applied to [data-t] texts and <html lang>.
import { T, HTML_LANG, type Lang } from '../data/flow';
import { slide } from './seg';

let lang: Lang = 'en';
export function getLang(): Lang { return lang; }

function read(): Lang {
  try { const v = localStorage.getItem('gl-lang'); if (v === 'pl' || v === 'pt') return v; } catch {}
  return 'en';
}

export function setLang(l: Lang, opts: { silent?: boolean } = {}): void {
  lang = l;
  document.documentElement.lang = HTML_LANG[l];
  document.documentElement.dataset.siteLang = l;
  document.querySelectorAll<HTMLElement>('button[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
  document.querySelectorAll('[data-lang-group]').forEach(slide);
  document.querySelectorAll<HTMLElement>('[data-t]').forEach(el => {
    const k = el.dataset.t as keyof typeof T.en; const v = (T[l] as any)[k];
    if (typeof v === 'string') el.innerHTML = v;
  });
  document.querySelectorAll<HTMLElement>('[data-t-aria]').forEach(el => {
    const v = (T[l] as any)[el.dataset.tAria as string];
    if (typeof v === 'string') el.setAttribute('aria-label', v);
  });
  try { localStorage.setItem('gl-lang', l); } catch {}
  if (!opts.silent) document.dispatchEvent(new CustomEvent('gl:lang', { detail: { lang: l } }));
}

export function initLang(): void {
  lang = read();
  setLang(lang, { silent: true });
  document.addEventListener('click', e => {
    const t = e.target as HTMLElement;
    const b = t.closest<HTMLElement>('button[data-lang]'); if (b) { setLang(b.dataset.lang as Lang); return; }
    const g = t.closest<HTMLElement>('button[data-lang-go]'); if (g) { setLang(g.dataset.langGo as Lang); }
  });
}
