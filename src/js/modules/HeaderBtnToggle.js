class HeaderBtnToggle {
  constructor() {
    this.burgerButtons = document.querySelectorAll('.js-header-toggle-open');
    this.closeButtons = document.querySelectorAll('.js-header-toggle-close');
    this.body = document.body;
    this.headerNav = document.querySelector('.header__dropdown');

    this.initEvents();
  }

  initEvents() {
    this.burgerButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleMenu();
      });
    });

    this.closeButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        this.closeMenu();
      });
    });

    document.addEventListener('click', (e) => {
      const isClickInsideMenu = this.headerNav?.contains(e.target);
      const isClickOnToggleBtn = [...this.burgerButtons, ...this.closeButtons].some(btn => btn.contains(e.target));

      if (!isClickInsideMenu && !isClickOnToggleBtn && this.body.classList.contains('is-menu-opened')) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    this.burgerButtons.forEach(button => {
      button.classList.toggle('is-active');
    });

    this.body.classList.toggle('is-menu-opened');
    this.headerNav?.classList.toggle('is-show');
  }

  closeMenu() {
    this.burgerButtons.forEach(button => {
      button.classList.remove('is-active');
    });

    this.body.classList.remove('is-menu-opened');
    this.headerNav?.classList.remove('is-show');
  }
}

export default HeaderBtnToggle;