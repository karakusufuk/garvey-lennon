// Services panel (desktop), Menu panel (< 1024) and the shared scrim.
export function initHeader(): void {
  const svc = document.getElementById('svc'), svcBtn = document.getElementById('svcBtn');
  const mp = document.getElementById('mpanel'), menuBtn = document.getElementById('menuBtn');
  const scrim = document.getElementById('scrim');
  if (!scrim) return;
  const sync = () => scrim.classList.toggle('on', !!(svc?.classList.contains('open') || mp?.classList.contains('open')));
  const setSvc = (o: boolean) => { if (!svc || !svcBtn) return; svc.classList.toggle('open', o); svcBtn.setAttribute('aria-expanded', String(o)); sync(); };
  const setMenu = (o: boolean) => { if (!mp || !menuBtn) return; mp.classList.toggle('open', o); menuBtn.setAttribute('aria-expanded', String(o)); sync(); };
  svcBtn?.addEventListener('click', e => { e.stopPropagation(); setMenu(false); setSvc(!svc!.classList.contains('open')); });
  menuBtn?.addEventListener('click', e => { e.stopPropagation(); setSvc(false); setMenu(!mp!.classList.contains('open')); });
  scrim.addEventListener('click', () => { setSvc(false); setMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { setSvc(false); setMenu(false); } });
  // choosing a link closes the panel (same-page anchors too)
  mp?.addEventListener('click', e => { if ((e.target as HTMLElement).closest('a')) setMenu(false); });
  svc?.addEventListener('click', e => { if ((e.target as HTMLElement).closest('a')) setSvc(false); });
  addEventListener('resize', () => { if (innerWidth >= 1024) setMenu(false); else setSvc(false); });
  (window as any).glCloseHeader = () => { setSvc(false); setMenu(false); };
}
