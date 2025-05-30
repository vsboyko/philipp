/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

import BaseHelpers from './helpers/BaseHelpers.js';
import HeaderBtnToggle from './modules/HeaderBtnToggle.js';
import PopupManager from './modules/PopupManager.js';
import SliderInit from './modules/SliderInit.js';
import FaqCard from './modules/FaqCard.js';
import VideoPlayer from './modules/VideoPlayer.js';

// check webp/loaded page/device type
BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', function() {
  // header nav mobile toggle
  new HeaderBtnToggle();

  // modal init
  new PopupManager();

  // faq card
  new FaqCard();

  // video playey play/pause
  VideoPlayer();
});