import Swiper from 'swiper';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

Swiper.use([Navigation, Autoplay, Pagination]);

function SliderInit(sliderSelector, params) {
  const sliderElement = document.querySelector(sliderSelector);

  if (!sliderElement) return null;

  return new Swiper(sliderSelector, params);
}

export default SliderInit;