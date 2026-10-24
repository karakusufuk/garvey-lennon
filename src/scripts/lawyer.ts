// Lawyer blocks: four tabs with a sliding dark indicator; the incoming pane slides in from the direction of travel.
import { slide } from './seg';

export function initLawyers(): void {
  document.querySelectorAll<HTMLElement>('.lawyer').forEach(block => {
    const box = block.querySelector<HTMLElement>('.ltabs'); if (!box) return;
    const tabs = [...box.querySelectorAll<HTMLElement>('[role="tab"]')];
    const panes = [...block.querySelectorAll<HTMLElement>('.lpanel > .pin')];
    const current = () => tabs.findIndex(t => t.classList.contains('on'));
    function select(i: number, focus = false): void {
      const prev = current(); if (i === prev || i < 0 || i >= tabs.length) { if (focus) tabs[i]?.focus(); return; }
      const dir = i > prev ? 'r' : 'l';
      tabs.forEach((t, j) => { t.classList.toggle('on', j === i); t.setAttribute('aria-selected', String(j === i)); t.tabIndex = j === i ? 0 : -1; });
      panes.forEach((p, j) => {
        p.classList.remove('in-r', 'in-l');
        const on = j === i; p.classList.toggle('on', on); p.setAttribute('aria-hidden', String(!on));
        if (on) { void p.offsetWidth; p.classList.add('in-' + dir); }
      });
      slide(box!);
      if (focus) tabs[i].focus();
    }
    tabs.forEach((t, i) => t.addEventListener('click', () => select(i)));
    box.addEventListener('keydown', e => {
      const k = (e as KeyboardEvent).key; const c = current();
      if (k === 'ArrowRight' || k === 'ArrowDown') { e.preventDefault(); select((c + 1) % tabs.length, true); }
      else if (k === 'ArrowLeft' || k === 'ArrowUp') { e.preventDefault(); select((c - 1 + tabs.length) % tabs.length, true); }
      else if (k === 'Home') { e.preventDefault(); select(0, true); }
      else if (k === 'End') { e.preventDefault(); select(tabs.length - 1, true); }
    });
  });
}
