(() => {
  const links = [...document.querySelectorAll('[data-gallery]')];
  const dialog = document.querySelector('#media-dialog');
  if (!links.length || !dialog || typeof dialog.showModal !== 'function') return;

  const image = dialog.querySelector('[data-dialog-image]');
  const caption = dialog.querySelector('[data-dialog-caption]');
  const counter = dialog.querySelector('[data-dialog-counter]');
  const close = dialog.querySelector('[data-dialog-close]');
  const previous = dialog.querySelector('[data-dialog-previous]');
  const next = dialog.querySelector('[data-dialog-next]');
  let current = 0;
  let opener = null;

  function show(index) {
    current = (index + links.length) % links.length;
    const link = links[current];
    image.src = link.href;
    image.alt = link.querySelector('img')?.alt || link.dataset.caption || '';
    caption.textContent = link.dataset.caption || image.alt;
    counter.textContent = `${current + 1} of ${links.length}`;
  }

  links.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      opener = link;
      show(index);
      dialog.showModal();
      close.focus();
    });
  });

  previous.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      show(current - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      show(current + 1);
    }
  });
  dialog.addEventListener('close', () => {
    image.removeAttribute('src');
    opener?.focus();
  });
})();
