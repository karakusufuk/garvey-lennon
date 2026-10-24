// Copy buttons (board: data-copy). Text becomes "Copied" for 1.4s. The careers email button also opens the modal.
import { openModal } from './modal';
export function initCopy(): void {
  document.addEventListener('click', e => {
    const c = (e.target as HTMLElement).closest<HTMLElement>('[data-copy]');
    if (!c) return;
    const v = c.dataset.copy || '', orig = c.textContent || '';
    const done = () => { c.textContent = 'Copied'; setTimeout(() => { c.textContent = orig; }, 1400); };
    try { navigator.clipboard.writeText(v).then(done, () => {}); } catch {}
    if (c.dataset.modal) openModal(c.dataset.modal as any, { value: v });
  });
}
