import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function GsapAnimations() {
  // Анімація карток
  const cards = document.querySelectorAll('.about__services-card');

  if (cards.length) {
    gsap.set(cards, { y: 80, opacity: 0 }); // Початковий стан

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

  const title = document.querySelector('.about__main-title');

  if (title) {
    gsap.fromTo(
      title,
      { y: '140rem' },
      {
        y: '-140rem',
        ease: 'none',
        scrollTrigger: {
          trigger: title,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }
}
