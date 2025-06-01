export default function InitBtnRotuer() {
  const sections = Array.from(document.querySelectorAll('.u-section'));

  if (sections.length === 0) return;

  sections.forEach((section, index) => {
    const btn = section.querySelector('.js-btn-router');

    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();

        const nextSection = sections[index + 1];
        if (nextSection) {
          nextSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    }
  });
}