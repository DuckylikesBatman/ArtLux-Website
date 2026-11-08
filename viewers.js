/* Both portfolio viewers share the same keyboard and background behavior. */
window.ArtLuxViewer = function (element, closeButton) {
  let opener;
  let background = [];
  let previousOverflow;

  element.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const controls = [...element.querySelectorAll('button:not(:disabled), a[href]')]
      .filter(control => control.getClientRects().length);
    const first = controls[0];
    const last = controls.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });

  return {
    open(trigger) {
      opener = trigger;
      if (element.hidden) {
        background = [...document.body.children].filter(node =>
          node !== element && !node.contains(element) && !node.inert && node.getClientRects().length
        );
        background.forEach(node => { node.inert = true; });
        previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      }
      element.hidden = false;
      element.classList.add('open');
      closeButton.focus();
      // Fragment navigation can move focus after the initial render.
      requestAnimationFrame(() => {
        if (!element.hidden && !element.contains(document.activeElement)) closeButton.focus();
      });
    },
    close() {
      element.classList.remove('open');
      element.hidden = true;
      background.forEach(node => { node.inert = false; });
      document.body.style.overflow = previousOverflow;
      opener?.focus({ preventScroll: true });
    }
  };
};
