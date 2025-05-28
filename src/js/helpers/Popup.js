class Popup {
  constructor() {
    this.html = document.documentElement;
    this.body = document.body;
    this.pageWrapper = document.querySelector('.site');
    this.lockPaddingElements = document.querySelectorAll('[data-lp]');
  }

  /**
   * Toggles the body lock to prevent scrolling when opening modal windows.
   * Call toggleBodyLock(true) to open a modal window.
   * Call toggleBodyLock(false) to close a modal window.
   *
   * @param {boolean} isLock - Indicates whether to lock the body or unlock it.
   */
  toggleBodyLock(isLock) {
    const lockPaddingValue = window.innerWidth - this.pageWrapper.offsetWidth;

    if (this.lockPaddingElements) {
      this.lockPaddingElements.forEach((element) => {
        element.style.paddingRight = isLock ? `${lockPaddingValue}rem` : '0rem';
      });
    }

    this.body.style.paddingRight = isLock ? `${lockPaddingValue}rem` : '0rem';
    this.body.classList.toggle('is-lock', isLock);
  }
}

export default Popup;
