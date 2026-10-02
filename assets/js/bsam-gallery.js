(() => {
  'use strict';

  document.querySelectorAll('[data-bsam-gallery]').forEach(gallery => {
    if (gallery.hasAttribute('data-enhanced')) return;
    const figures = [...gallery.querySelectorAll('[data-bsam-figure]')];
    if (figures.length < 2) return;
    const stage = gallery.querySelector('.bsam-figures');
    const controls = gallery.querySelector('.bsam-gallery-controls');
    const previews = gallery.querySelector('.bsam-gallery-thumbnails');
    const status = gallery.querySelector('.bsam-gallery-status');
    let current = 0;

    const buttons = figures.map((figure, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-label', `Show figure ${index + 1}: ${figure.dataset.label}`);
      const source = figure.querySelector('img');
      source.loading = 'eager';
      source.draggable = false;
      const preview = source.cloneNode();
      preview.alt = '';
      const label = document.createElement('span');
      label.textContent = figure.dataset.label;
      button.append(preview, label);
      button.addEventListener('click', () => show(index));
      previews.append(button);
      return button;
    });

    function show(index) {
      current = (index + figures.length) % figures.length;
      figures.forEach((figure, i) => { figure.hidden = i !== current; });
      buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === current)));
      status.textContent = `${current + 1} of ${figures.length} · ${figures[current].dataset.label}`;
    }

    // Reserve the longest caption at the current width, so selecting an image
    // never moves the controls or the content below the gallery.
    function reserveCaptionSpace() {
      const probe = document.createElement('div');
      probe.className = 'bsam-caption-measure';
      probe.setAttribute('aria-hidden', 'true');
      probe.style.width = `${stage.getBoundingClientRect().width}px`;
      figures.forEach(figure => probe.append(figure.querySelector('figcaption').cloneNode(true)));
      gallery.append(probe);
      const height = Math.max(...[...probe.children].map(caption => caption.getBoundingClientRect().height));
      probe.remove();
      gallery.style.setProperty('--bsam-caption-height', `${Math.ceil(height)}px`);
    }

    gallery.querySelector('[data-bsam-previous]').addEventListener('click', () => show(current - 1));
    gallery.querySelector('[data-bsam-next]').addEventListener('click', () => show(current + 1));
    gallery.addEventListener('keydown', event => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      const index = { ArrowLeft: current - 1, ArrowRight: current + 1, Home: 0, End: figures.length - 1 }[event.key];
      if (index === undefined) return;
      event.preventDefault();
      const fromPreview = previews.contains(event.target);
      const fromFigure = stage.contains(event.target);
      show(index);
      if (fromPreview) buttons[current].focus({ preventScroll: true });
      if (fromFigure) figures[current].querySelector('a').focus({ preventScroll: true });
    });

    let start = null;
    let ignoreClickUntil = 0;
    const pointers = new Set();
    stage.addEventListener('pointerdown', event => {
      if (event.pointerType !== 'touch' && event.pointerType !== 'pen') return;
      pointers.add(event.pointerId);
      start = pointers.size === 1 ? { id: event.pointerId, x: event.clientX, y: event.clientY } : null;
    });
    window.addEventListener('pointerup', event => {
      pointers.delete(event.pointerId);
      if (!start || event.pointerId !== start.id) return;
      const dx = event.clientX - start.x;
      const dy = event.clientY - start.y;
      start = null;
      if (Math.abs(dx) < 40 || Math.abs(dx) <= Math.abs(dy) * 1.3) return;
      show(current + (dx < 0 ? 1 : -1));
      ignoreClickUntil = performance.now() + 500;
    });
    window.addEventListener('pointercancel', event => {
      pointers.delete(event.pointerId);
      start = null;
    });
    stage.addEventListener('click', event => {
      if (performance.now() >= ignoreClickUntil) return;
      event.preventDefault();
      event.stopPropagation();
      ignoreClickUntil = 0;
    }, true);

    gallery.setAttribute('data-enhanced', '');
    reserveCaptionSpace();
    show(0);
    controls.hidden = false;
    previews.hidden = false;
    let measuredWidth = stage.getBoundingClientRect().width;
    if ('ResizeObserver' in window) {
      new ResizeObserver(() => {
        const width = stage.getBoundingClientRect().width;
        if (width === measuredWidth) return;
        measuredWidth = width;
        reserveCaptionSpace();
      }).observe(stage);
    } else {
      window.addEventListener('resize', reserveCaptionSpace);
    }
    if (document.fonts) document.fonts.ready.then(reserveCaptionSpace);
  });
})();
