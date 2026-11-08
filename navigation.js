/* Keep the compact navigation usable with a keyboard and after rotation. */
(function () {
  const button = document.querySelector('.al-burger');
  const menu = document.getElementById('alMobileNav');
  if (!button || !menu) return;

  const header = button.closest('header');
  let background = [];
  let previousOverflow = '';
  let open = false;
  function close(restoreFocus = true) {
    if (!open) return;
    open = false;
    menu.classList.remove('visible');
    menu.hidden = true;
    button.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    background.forEach(node => { node.inert = false; });
    document.body.style.overflow = previousOverflow;
    if (restoreFocus) button.focus({ preventScroll: true });
  }

  function show() {
    open = true;
    menu.hidden = false;
    menu.classList.add('visible');
    button.classList.add('open');
    button.setAttribute('aria-expanded', 'true');
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    background = [...document.body.children].filter(node =>
      node !== header && node !== menu && !node.contains(header) &&
      !node.contains(menu) && !node.inert && node.getClientRects().length
    );
    const logo = header?.querySelector('.al-logo');
    if (logo && !logo.inert) background.push(logo);
    background.forEach(node => { node.inert = true; });
    menu.querySelector('a[aria-current="page"], a.active, a')?.focus({ preventScroll: true });
  }

  button.addEventListener('click', () => open ? close() : show());
  menu.addEventListener('click', event => {
    if (event.target.closest('a[href]')) close(false);
  });
  document.addEventListener('keydown', event => {
    if (!open) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      return;
    }
    if (event.key !== 'Tab') return;
    const controls = [button, ...menu.querySelectorAll('a[href], button:not(:disabled)')];
    const last = controls.at(-1);
    if (event.shiftKey && document.activeElement === button) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      button.focus();
    }
  });
  window.addEventListener('resize', () => {
    if (open && !button.getClientRects().length) {
      close(false);
      header?.querySelector('.al-nav a[aria-current="page"], .al-nav a.active, .al-nav a')?.focus();
    }
  });
}());
