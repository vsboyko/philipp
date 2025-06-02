export default class Counter {
  constructor(selector, options = {}) {
    this.elements = document.querySelectorAll(selector);
    this.observer = null;
    this.duration = options.duration || 2000;
    this.init();
  }

  init() {
    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
      threshold: 0.6
    });

    this.elements.forEach(el => {
      el.dataset._original = el.textContent;
      this.observer.observe(el);
    });
  }

  handleIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.animateCount(entry.target);
      }
    });
  }

  animateCount(el) {
    if (el.dataset.animating === 'true') return;

    el.dataset.animating = 'true';

    const target = parseInt(el.dataset._original.replace(/\D/g, ''), 10);
    const suffix = el.dataset._original.replace(/[0-9]/g, '').trim();
    const start = 0;
    const startTime = performance.now();

    const update = (time) => {
      const progress = Math.min((time - startTime) / this.duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = `${value}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = `${target}${suffix}`;
        el.dataset.animating = 'false';
      }
    };

    requestAnimationFrame(update);
  }
}