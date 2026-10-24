// The written summary: headings type themselves and the lines draw as the section scrolls into view (board logic,
// desktop threshold moved from 0.42 to 0.34 so it starts about half a second of scrolling later and still completes
// when the section is centred). Parallax and the lift-on-hover are desktop only; reduced motion shows the final state.
import { HOW } from '../data/insights';

export function initSummary(): void {
  const sec = document.getElementById('howSec'), paper = document.getElementById('paper'), txt = document.getElementById('howText'), annot = document.getElementById('annot');
  if (!sec || !paper || !txt || !annot) return;
  const heads = [...paper.querySelectorAll<HTMLElement>('.tw')], groups = [...paper.querySelectorAll<HTMLElement>('.lines')];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = matchMedia('(min-width: 1024px)');

  function setHow(i: number): void {
    paper!.querySelectorAll<HTMLElement>('[data-h]').forEach(b => b.classList.toggle('on', +b.dataset.h! === i));
    annot!.innerHTML = `<div class="pin"><b>${HOW[i][0]}</b><p>${HOW[i][1]}</p></div>`;
  }
  paper.querySelectorAll<HTMLElement>('[data-h]').forEach(b => { ['mouseenter', 'focus', 'click'].forEach(ev => b.addEventListener(ev, () => setHow(+b.dataset.h!))); });

  let raf = 0;
  function upd(): void {
    raf = 0;
    const r = sec!.getBoundingClientRect(), vh = innerHeight;
    const d = (r.top + r.height / 2 - vh / 2) / vh;             // 0 when the section is centred, >0 below, <0 above
    const thr = desktop.matches ? 0.34 : 0.42;
    let p = reduce.matches ? 1 : Math.max(0, Math.min(1, 1 - d / thr));
    if (d < 0) p = 1;
    const parallax = desktop.matches && !reduce.matches;
    const ty = parallax ? (d > 0 ? d * 220 : d * 320) : 0;
    paper!.style.setProperty('--ty', ty + 'px');
    paper!.style.setProperty('--br', String(parallax && d < 0 ? 1 + Math.min(.07, -d * .12) : 1));
    const tp = reduce.matches ? 1 : Math.max(0, Math.min(1, p * 1.6));
    txt!.style.opacity = String(tp);
    txt!.style.transform = `translateY(${(1 - tp) * 24}px)`;
    const seg = p * heads.length;
    heads.forEach((h, i) => {
      const l = Math.max(0, Math.min(1, seg - i)); const full = h.dataset.full || '';
      const n = Math.round(full.length * Math.min(1, l / 0.45));
      h.textContent = full.slice(0, n);
      (h.parentNode as HTMLElement).style.opacity = n ? '1' : '0';
      const ls = [...groups[i].children] as HTMLElement[];
      ls.forEach((ln, k) => { const a = 0.45 + k * (0.55 / ls.length), b2 = a + 0.55 / ls.length; const q = Math.max(0, Math.min(1, (l - a) / (b2 - a))); ln.style.width = (+(ln.dataset.w || 0) * q) + '%'; });
    });
    paper!.dataset.progress = p.toFixed(2);
  }
  const req = () => { if (!raf) raf = requestAnimationFrame(upd); };
  addEventListener('scroll', req, { passive: true });
  addEventListener('resize', req);
  reduce.addEventListener?.('change', req);
  upd();
  (window as any).__howUpd = upd;
}
