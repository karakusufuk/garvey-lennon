// "Tell us what happened" — pre-screening flow. Ported from the approved board; multi-page specifics:
// the Book confirmation opens the action modal first, area pages arrive with #start=<door>, and the
// language change event re-renders in place. Nothing typed here is sent anywhere.
import { T, DOORS, ORDER, RES, WARN, TIMES, LOCALE, type Lang } from '../data/flow';
import { PEOPLE, type AreaId, type PersonId } from '../data/people';
import { AR, BK, DOWN } from '../lib/icons';
import { getLang } from './lang';
import { openModal } from './modal';

interface State { open: boolean; door: AreaId | null; step: number; ans: number[]; day: number | null; time: string | null; dir: 'r' | 'l' | 'none' }
const CHEV = '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';

export function initFlow(): void {
  const tell = document.getElementById('tell'), Lbox = document.getElementById('L'), cbody = document.getElementById('cbody'), armin = document.getElementById('armin'), col = document.getElementById('col');
  if (!tell || !Lbox || !cbody || !armin || !col) return;
  const cards: Record<PersonId, string> = JSON.parse(tell.dataset.cards || '{}');
  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobile = () => matchMedia('(max-width: 767px)').matches;
  const stacked = () => matchMedia('(max-width: 1023px)').matches;
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

  let F: State = { open: false, door: null, step: 0, ans: [], day: null, time: null, dir: 'r' };
  const t = (k: keyof typeof T.en) => (T[getLang()] as any)[k] as string;
  const lawyerFor = (d: AreaId): PersonId => (getLang() === 'pt' && (d === 'employment' || d === 'injury')) ? 'rafael' : RES[d].lead;

  function workDays(n: number): Date[] { const o: Date[] = []; const d = new Date(); d.setHours(12, 0, 0, 0); while (o.length < n) { d.setDate(d.getDate() + 1); const w = d.getDay(); if (w > 0 && w < 6) o.push(new Date(d)); } return o; }
  function fmtDay(d: Date, long?: boolean): string { return d.toLocaleDateString(LOCALE[getLang() as Lang], long ? { weekday: 'long', day: 'numeric', month: 'long' } : { weekday: 'short', day: 'numeric', month: 'short' }); }

  function renderStage(): void {
    const lang = getLang();
    Lbox.classList.toggle('armed', !!F.door);
    Lbox.classList.toggle('open', F.open);
    if (!F.open) {
      cbody.innerHTML = `<button class="btn light start" id="openBtn" type="button">${t('startBtn')} ${DOWN}</button>`;
    } else if (!F.door) {
      cbody.innerHTML = `<div class="drows">${ORDER.map(k => `<button class="drow" data-door="${k}" type="button"><span>${DOORS[k].label[lang]}</span>${AR}</button>`).join('')}</div>`;
    } else {
      const D = DOORS[F.door];
      const list = `<ol class="ans">${F.ans.map((a, i) => `<li><span>${D.qs[i].q[lang]}</span>${D.qs[i].o[a][lang]}</li>`).join('')}</ol>`;
      const back = `<button class="qback" id="toDoors" type="button">${BK} ${t('other')}</button>`;
      if (mobile() && F.ans.length) {
        cbody.innerHTML = `${back}<div class="picked">${D.label[lang]}</div><details class="sum"${F.step >= D.qs.length ? '' : ' open'}><summary><b>${t('trail')}</b><span>${F.ans.length} / ${D.qs.length}</span>${CHEV}</summary>${list}</details>`;
      } else {
        cbody.innerHTML = `${back}<div class="picked">${D.label[lang]}</div>${list}`;
      }
    }
    if (!F.door) { armin.innerHTML = ''; return; }
    const D = DOORS[F.door], n = D.qs.length, done = F.step >= n, booked = F.step > n;
    const pct = booked ? 100 : Math.round(Math.min(F.step, n) / n * 100);
    let body = '';
    if (!done) {
      const Q = D.qs[F.step];
      body = `<h3>${Q.q[lang]}</h3><div class="opts">${Q.o.map((o, i) => `<button class="opt${F.ans[F.step] === i ? ' on' : ''}" data-ans="${i}" type="button">${o[lang]}${AR}</button>`).join('')}</div>`;
    } else if (!booked) {
      const R = RES[F.door][lang], L = PEOPLE[lawyerFor(F.door)];
      let w = '';
      F.ans.forEach((a, i) => { const x = WARN[`${F.door}:${i}:${a}`]; if (x) w += `<div class="warn">${x[lang]}</div>`; });
      if (lang === 'pl' && F.door !== 'copyright') w += `<div class="warn">${t('plNote')}</div>`;
      const days = workDays(5);
      body = `<div class="res"><h3>${R.h}</h3><p>${R.p}</p>${w}
        <div class="match"><img src="${cards[L.id]}" alt="" width="52" height="52"><div><span>${t('meet')}</span><b>${L.name}</b></div></div>
        <div class="slots"><div class="row days" role="group" aria-label="${t('day')}">${days.map((d, i) => `<button class="slot" data-day="${i}" aria-pressed="${F.day === i}" type="button">${fmtDay(d)}</button>`).join('')}</div>
        <div class="row times" role="group" aria-label="${t('time')}">${TIMES.map(h => `<button class="slot" data-time="${h}" aria-pressed="${F.time === h}" type="button">${h}</button>`).join('')}</div></div>
        <div class="fields"><input id="f-name" placeholder="${t('name')}" aria-label="${t('name')}" autocomplete="name"><input id="f-phone" placeholder="${t('phone')}" aria-label="${t('phone')}" autocomplete="tel" inputmode="tel"><input id="f-email" placeholder="${t('email')}" aria-label="${t('email')}" autocomplete="email" inputmode="email">
        <button class="btn light" id="bookBtn" type="button">${t('book')} ${AR}</button><p class="fee">${t('first')}${F.door === 'injury' ? ' ' + t('piFee') : ''}</p></div></div>`;
    } else {
      const L = PEOPLE[lawyerFor(F.door)], d = workDays(5)[F.day ?? 0];
      body = `<div class="res"><h3>${t('doneH')}</h3><p>${(T[lang].doneP)(L.name, fmtDay(d, true), F.time || '')}</p><div class="match"><img src="${cards[L.id]}" alt="" width="52" height="52"><div><b>${L.name}</b></div></div><button class="btn light restart" id="restart" type="button">${t('start')}</button></div>`;
    }
    armin.classList.remove('tight', 'tighter');
    armin.innerHTML = `<div class="qhead"><button class="qback" id="qback" type="button">${BK} ${t('back')}</button><span>${done ? D.sub[lang] : `${t('q')} ${F.step + 1} ${t('of')} ${n}`}</span><span class="bar"><i style="width:${pct}%"></i></span></div><div class="qbody in-${F.dir}">${body}</div>`;
    armin.scrollTop = 0;
    if (!stacked()) fit();
    if (F.door && stacked() && F.dir !== 'none') scrollArmIntoView();
  }
  // Desktop: the arm has a fixed height and must show the Book step without scrolling. Tighten if needed.
  function fit(): void {
    const over = () => armin.scrollHeight > armin.clientHeight + 1;
    if (over()) armin.classList.add('tight');
    if (over()) armin.classList.add('tighter');
  }
  addEventListener('resize', () => { if (!stacked()) { armin.classList.remove('tight', 'tighter'); fit(); } });

  function scrollArmIntoView(): void {
    // tablet/mobile: the question panel sits under the card; keep its top on screen after each step
    const hdr = 84 + 8; const r = armin.getBoundingClientRect();
    if (r.top < hdr || r.top > innerHeight * 0.5) glide(r.top + scrollY - hdr - 48, 1000);
  }
  // Scroll to a position over `ms` (eased in and out), so the card's growth and the page move together and slowly.
  let scrollRaf = 0;
  function glide(to: number, ms: number): void {
    cancelAnimationFrame(scrollRaf);
    const from = scrollY, dy = to - from;
    if (reduce() || Math.abs(dy) < 2) { window.scrollTo({ top: to, behavior: 'auto' }); return; }
    const t0 = performance.now(), ease = (k: number) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
    const step = (now: number) => { const k = Math.min(1, (now - t0) / ms); window.scrollTo(0, from + dy * ease(k)); if (k < 1) scrollRaf = requestAnimationFrame(step); };
    scrollRaf = requestAnimationFrame(step);
  }
  addEventListener('wheel', () => cancelAnimationFrame(scrollRaf), { passive: true });
  addEventListener('touchstart', () => cancelAnimationFrame(scrollRaf), { passive: true });
  function toTell(): void {
    const top = col.getBoundingClientRect().top + scrollY;
    // the card's top stays 24px below the header (never tucked under it), so its rounded top corners show
    glide(top - 84 - 24, 1700);
  }
  function keep(): void {
    const v: Record<string, string> = {};
    ['f-name', 'f-phone', 'f-email'].forEach(i => { const el = document.getElementById(i) as HTMLInputElement | null; if (el) v[i] = el.value; });
    const o = F.dir; F.dir = 'none'; renderStage(); F.dir = o;
    Object.keys(v).forEach(i => { const el = document.getElementById(i) as HTMLInputElement | null; if (el) el.value = v[i]; });
  }
  function start(door: AreaId | null, open = true): void {
    F = { open, door, step: 0, ans: [], day: null, time: null, dir: 'r' };
    renderStage();
  }

  tell.addEventListener('click', e => {
    const el = e.target as HTMLElement;
    if (el.closest('#openBtn')) { F.open = true; renderStage(); toTell(); return; }
    if (el.closest('#closeBtn')) { F = { open: false, door: null, step: 0, ans: [], day: null, time: null, dir: 'l' }; renderStage(); window.scrollTo({ top: 0, behavior: reduce() ? 'auto' : 'smooth' }); return; }
    const dr = el.closest<HTMLElement>('[data-door]'); if (dr) { start(dr.dataset.door as AreaId); return; }
    if (el.closest('#toDoors')) { F = { open: true, door: null, step: 0, ans: [], day: null, time: null, dir: 'l' }; renderStage(); return; }
    const a = el.closest<HTMLElement>('[data-ans]'); if (a) { F.ans[F.step] = +a.dataset.ans!; F.ans.length = F.step + 1; F.step++; F.dir = 'r'; renderStage(); return; }
    if (el.closest('#qback')) { if (F.step === 0) { F.door = null; } else { F.step = Math.max(0, Math.min(F.step, DOORS[F.door!].qs.length) - 1); } F.dir = 'l'; renderStage(); return; }
    const dy = el.closest<HTMLElement>('[data-day]'); if (dy) { F.day = +dy.dataset.day!; keep(); return; }
    const tm = el.closest<HTMLElement>('[data-time]'); if (tm) { F.time = tm.dataset.time!; keep(); return; }
    if (el.closest('#bookBtn')) {
      const nm = document.getElementById('f-name') as HTMLInputElement;
      if (F.day == null || !F.time) { armin.querySelector('.slots')?.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' }, { transform: 'translateX(0)' }], { duration: 260 }); return; }
      if (!nm.value.trim()) { nm.focus(); return; }
      const L = PEOPLE[lawyerFor(F.door!)], d = workDays(5)[F.day];
      openModal('book', { name: L.name, day: fmtDay(d, true), time: F.time }, () => { F.step = DOORS[F.door!].qs.length + 1; F.dir = 'r'; renderStage(); });
      return;
    }
    if (el.closest('#restart')) { F = { open: true, door: null, step: 0, ans: [], day: null, time: null, dir: 'l' }; renderStage(); }
  });

  // language change: re-render in place (no slide)
  document.addEventListener('gl:lang', () => { const o = F.dir; F.dir = 'none'; renderStage(); F.dir = o; });
  // layout class changes (desktop ↔ stacked) re-render the summary variant
  let wasMobile = mobile();
  addEventListener('resize', () => { if (mobile() !== wasMobile) { wasMobile = mobile(); const o = F.dir; F.dir = 'none'; renderStage(); F.dir = o; } });

  // mobile: once the card's top has scrolled under the header, the × follows (fixed) while the card is still on screen
  const pin = () => { if (!mobile() || !F.open) { Lbox.classList.remove('inview'); return; } const r = Lbox.getBoundingClientRect(); Lbox.classList.toggle('inview', r.top < 84 && r.bottom > 84 + 120); };
  addEventListener('scroll', pin, { passive: true }); addEventListener('resize', pin);
  tell.addEventListener('click', () => requestAnimationFrame(pin));

  // arriving from an area page or the article: /#start=<door>
  function fromHash(): boolean {
    const m = /^#start=(employment|family|copyright|injury)$/.exec(location.hash);
    if (!m) return false;
    F = { open: true, door: m[1] as AreaId, step: 0, ans: [], day: null, time: null, dir: 'r' };
    renderStage();
    setTimeout(toTell, 30);
    try { history.replaceState(null, '', location.pathname); } catch {}
    return true;
  }
  F.dir = 'none';
  if (!fromHash()) renderStage();
  F.dir = 'r';
  addEventListener('hashchange', fromHash);
  (window as any).__flow = { get: () => F, set: (s: Partial<State>) => { Object.assign(F, s); renderStage(); } };
}
