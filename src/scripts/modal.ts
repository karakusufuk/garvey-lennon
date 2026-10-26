// Action-moment modal (Ince Belge §2.4): Book, tel:, mailto:, Google Maps and the careers email open it instead of acting.
// No timer; closes on Esc, Close, the × and the backdrop. `onClose` runs once after the user dismisses it.
import { getLang } from './lang';
export type ModalKind = 'book' | 'tel' | 'mail' | 'map' | 'careers';

type Vars = Record<string, string>;
const TEXT: Record<'en' | 'pl' | 'pt', Record<ModalKind, (v: Vars) => string>> = {
  en: {
    book: v => `In a live build, this would confirm your meeting with ${v.name} on ${v.day} at ${v.time}, and email you the confirmation and your note.`,
    tel: v => `In a live build, this would start a call to ${v.value}.`,
    mail: v => `In a live build, this would open a new email to ${v.value}.`,
    map: v => `In a live build, this would open ${v.value || 'the office'} in Google Maps.`,
    careers: v => `In a live build, this would open a new email to ${v.value} with your application.`,
  },
  pl: {
    book: v => `W działającej wersji strony potwierdziłoby to spotkanie z ${v.name}: ${v.day}, godz. ${v.time}, i wysłało na e-mail potwierdzenie oraz Twoją notatkę.`,
    tel: v => `W działającej wersji strony rozpoczęłoby to połączenie z numerem ${v.value}.`,
    mail: v => `W działającej wersji strony otworzyłoby to nową wiadomość e-mail do ${v.value}.`,
    map: v => `W działającej wersji strony otworzyłoby to ${v.value || 'biuro'} w Mapach Google.`,
    careers: v => `W działającej wersji strony otworzyłoby to nową wiadomość e-mail do ${v.value} z Twoją aplikacją.`,
  },
  pt: {
    book: v => `Numa versão real do site, isto confirmaria sua reunião com ${v.name} em ${v.day}, às ${v.time}, e enviaria a confirmação e o seu resumo por e-mail.`,
    tel: v => `Numa versão real do site, isto iniciaria uma ligação para ${v.value}.`,
    mail: v => `Numa versão real do site, isto abriria um novo e-mail para ${v.value}.`,
    map: v => `Numa versão real do site, isto abriria ${v.value || 'o escritório'} no Google Maps.`,
    careers: v => `Numa versão real do site, isto abriria um novo e-mail para ${v.value} com a sua candidatura.`,
  },
};

let onCloseCb: (() => void) | null = null;
let lastFocus: HTMLElement | null = null;

export function openModal(kind: ModalKind, vars: Record<string, string> = {}, onClose?: () => void): void {
  const am = document.getElementById('am'), body = document.getElementById('am-body');
  if (!am || !body) return;
  body.textContent = TEXT[getLang()][kind](vars);
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
