// Action-moment modal (Ince Belge §2.4): Book, tel:, mailto:, Google Maps and the careers email open it instead of acting.
// No timer; closes on Esc, Close, the × and the backdrop. `onClose` runs once after the user dismisses it.
export type ModalKind = 'book' | 'tel' | 'mail' | 'map' | 'careers';

const TEXT: Record<ModalKind, (v: Record<string, string>) => string> = {
  book: v => `In a live build, this would confirm your meeting with ${v.name} on ${v.day} at ${v.time}, and email you the confirmation and your note.`,
  tel: v => `In a live build, this would start a call to ${v.value}.`,
  mail: v => `In a live build, this would open a new email to ${v.value}.`,
  map: v => `In a live build, this would open ${v.value || 'the office'} in Google Maps.`,
  careers: v => `In a live build, this would open a new email to ${v.value} with your application.`,
};

let onCloseCb: (() => void) | null = null;
let lastFocus: HTMLElement | null = null;

export function openModal(kind: ModalKind, vars: Record<string, string> = {}, onClose?: () => void): void {
  const am = document.getElementById('am'), body = document.getElementById('am-body');
  if (!am || !body) return;
  body.textContent = TEXT[kind](vars);
  am.dataset.kind = kind;
  onCloseCb = onClose || null;
  lastFocus = document.activeElement as HTMLElement;
  am.hidden = false;
  document.body.classList.add('am-open');
  (document.getElementById('am-close') as HTMLElement | null)?.focus();
}

export function closeModal(): void {
  const am = document.getElementById('am');
  if (!am || am.hidden) return;
  am.hidden = true;
  document.body.classList.remove('am-open');
  const cb = onCloseCb; onCloseCb = null;
  if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
  lastFocus = null;
  if (cb) cb();
}

export function initModal(): void {
  const am = document.getElementById('am');
  if (!am) return;
  am.addEventListener('click', e => { if ((e.target as HTMLElement).closest('[data-am-close]')) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !am.hidden) { e.preventDefault(); closeModal(); } });
  // keyboard focus stays inside the dialog
  am.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const f = am.querySelectorAll<HTMLElement>('a[href],button:not([disabled])');
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  // triggers
  document.addEventListener('click', e => {
    const t = e.target as HTMLElement;
    const a = t.closest<HTMLAnchorElement>('a[href^="tel:"],a[href^="mailto:"]');
    if (a) { e.preventDefault(); const isTel = a.getAttribute('href')!.startsWith('tel:'); openModal(isTel ? 'tel' : 'mail', { value: a.dataset.label || a.textContent?.trim() || a.getAttribute('href')!.slice(isTel ? 4 : 7) }); return; }
    const m = t.closest<HTMLElement>('[data-action]');
    if (m) { e.preventDefault(); const k = m.dataset.action as ModalKind; openModal(k, { value: m.dataset.value || '' }); }
  });
}
