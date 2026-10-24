'use strict';
(() => {
  const toggle = document.querySelector('.guide-toggle button');
  const panel = document.getElementById('guide-panel');
  if (!toggle || !panel) return;
  const close = (returnFocus) => {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    if (returnFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => {
    const opening = panel.hidden;
    panel.hidden = !opening;
    toggle.setAttribute('aria-expanded', String(opening));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) {
      event.preventDefault();
      close(true);
    }
  });
  document.querySelector('.skip')?.addEventListener('click', () => {
    document.getElementById('main')?.focus();
  });
})();
