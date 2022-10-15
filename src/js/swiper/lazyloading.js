import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

var lazyloading = new Swiper(".lazyloading", {
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  watchSlidesProgress: true,
  checkInView: true,
});

console.log("lazyload.js TEST");
