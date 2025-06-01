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
      if (!el.dataset.counted) {
        this.observer.observe(el);
      }
    });
  }

  handleIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.animateCount(entry.target);
        this.observer.unobserve(entry.target);
      }
    });
  }

  animateCount(el) {
    const target = parseInt(el.textContent.replace(/\D/g, ''), 10);
    const start = 0;
    const startTime = performance.now();
    const suffix = el.textContent.replace(/[0-9]/g, '').trim();

    const update = (time) => {
      const progress = Math.min((time - startTime) / this.duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = `${value}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.dataset.counted = true;
        el.textContent = `${target}${suffix}`;
      }
    };

    requestAnimationFrame(update);
  }
}