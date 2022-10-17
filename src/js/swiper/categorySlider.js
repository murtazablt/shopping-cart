import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

var categorySlider = new Swiper(".category-slider", {
  enabled: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: false,
  },
  breakpoints: {
    500: {
      enabled: true,
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      enabled: true,
      slidesPerView: 4,
      spaceBetween: 20,
    },
    900: {
      enabled: true,
      slidesPerView: 4,
      spaceBetween: 30,
    },
    901: {
      enabled: false,
      slidesPerView: 4,
      spaceBetween: 30,
    },
    
  },
});

