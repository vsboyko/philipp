/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

import BaseHelpers from './helpers/BaseHelpers.js';
import HeaderBtnToggle from './modules/HeaderBtnToggle.js';
import { SmoothScroll } from './modules/SmoothScroll.js';
import Counter from './modules/Counter.js';
import PopupManager from './modules/PopupManager.js';
import SliderInit from './modules/SliderInit.js';
import InitBtnRotuer from './modules/InitBtnRotuer.js';
import FaqCard from './modules/FaqCard.js';
import VideoPlayer from './modules/VideoPlayer.js';

// check webp/loaded page/device type
BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', function() {
  // header nav mobile toggle
  new HeaderBtnToggle();

  // js-anchor
  const smoothScroll = new SmoothScroll('.js-anchor', '--scroll-offset', 650);

  // about counter
  new Counter('[data-counter-countdown="about-card"]');

  // sliders swiper init
  SliderInit('.js-slider-services-init', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
  }, {
    onlyMobile: true
  });

  SliderInit('.js-slider-portfolio-init', {
    slidesPerView: 3,
    loop: false,
    spaceBetween: 0,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });

  SliderInit('.js-slider-reviews-init', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
  });

  SliderInit('.js-slider-goods-init', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
  }, {
    onlyMobile: false
  });

  // modal init
  new PopupManager();

  // .js-btn-router section
  InitBtnRotuer();

  // faq card
  new FaqCard();

  // video player play/pause
  VideoPlayer();
});