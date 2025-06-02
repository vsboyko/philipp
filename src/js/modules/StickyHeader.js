export default class StickyHeader {
  constructor(selector = '.js-header-sticky', offsetRem = 20, fixedClass = 'is-fixed') {
    this.header = document.querySelector(selector);
    this.offset = offsetRem * parseFloat(getComputedStyle(document.documentElement).fontSize); // rem → px
    this.fixedClass = fixedClass;

    if (this.header) {
      this.onScroll = this.onScroll.bind(this);
      this.init();
    }
  }

  init() {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  }

  onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > this.offset) {
      this.header.classList.add(this.fixedClass);
    } else {
      this.header.classList.remove(this.fixedClass);
    }
  }
}