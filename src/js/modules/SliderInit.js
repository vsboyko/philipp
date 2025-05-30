import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Navigation, Pagination]);

export default function SliderInit(selector, params = {}, options = {}) {
  const sliders = document.querySelectorAll(selector);
  const instances = [];

  sliders.forEach((slider) => {
    const onlyMobile = options.onlyMobile || slider.classList.contains('js-slider-mobile-only');
    let swiperInstance = null;

    const container = slider.closest('.u-slider') || slider.parentElement;
    const navigation = {
      nextEl: container?.querySelector('.js-slider-btn-next') || undefined,
      prevEl: container?.querySelector('.js-slider-btn-prev') || undefined,
    };
    const pagination = {
      el: container?.querySelector('.js-slider-pagination') || undefined,
      clickable: true,
    };

    function init() {
      if (!swiperInstance) {
        swiperInstance = new Swiper(slider, {
          ...params,
          navigation,
          pagination,
        });
        instances.push(swiperInstance);
      }
    }

    function destroy() {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }
    }

    if (onlyMobile) {
      const mediaQuery = window.matchMedia('(max-width: 767.98px)');
      const checkMobile = () => {
        if (mediaQuery.matches) {
          init();
        } else {
          destroy();
        }
      };
      mediaQuery.addEventListener('change', checkMobile);
      checkMobile();
    } else {
      init();
    }
  });

  return instances;
}
