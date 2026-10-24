// Sliding indicator for every tab group (board: slide / slideAll). A `.seg` box gets a `.ind` span that moves to the
// pressed/`.on` child; the first placement is instant, later ones animate (500ms, var(--ease)).
export function slide(box: Element | null): void {
  if (!box) return;
  const act = box.querySelector<HTMLElement>(':scope>[aria-pressed="true"],:scope>.on');
  let ind = box.querySelector<HTMLElement>(':scope>.ind');
  if (!ind) { ind = document.createElement('span'); ind.className = 'ind'; box.prepend(ind); }
  if (!act || act.offsetWidth === 0) { ind.style.opacity = '0'; return; }
  const first = ind.dataset.ready !== '1';
  if (first) ind.style.transition = 'none';
  ind.style.opacity = '1';
  ind.style.width = act.offsetWidth + 'px';
  ind.style.height = act.offsetHeight + 'px';
  ind.style.transform = `translate(${act.offsetLeft}px,${act.offsetTop}px)`;
  if (first) { void ind.offsetWidth; ind.style.transition = ''; ind.dataset.ready = '1'; box.classList.add('ready'); }
}
export function slideAll(): void { document.querySelectorAll('.seg').forEach(slide); }
export function initSeg(): void {
  slideAll();
  requestAnimationFrame(slideAll);
  addEventListener('resize', slideAll);
  if (document.fonts) document.fonts.ready.then(slideAll);
  document.addEventListener('gl:slide', e => slide((e as CustomEvent).detail as Element));
}
