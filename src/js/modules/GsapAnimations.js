import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function GsapAnimations() {
  const cards = document.querySelectorAll('.about__services-card');

  if (cards.length) {
    gsap.set(cards, { y: 80, opacity: 0 });

    cards.forEach((card, index) => {
      gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        delay: index * 0.15,
      });
    });
  }

  const titles = document.querySelectorAll('.about__main-title');

  if (titles.length) {
    titles.forEach((title, index) => {
      const isOdd = index % 2 === 0;
      const fromX = isOdd ? '-100rem' : '100rem';

      gsap.fromTo(
        title,
        { x: fromX },
        {
          x: '0rem',
          ease: 'power2.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      );
    });
  }
}