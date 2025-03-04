var swiper = new Swiper(".Swiperbrand", {
  speed: 600,
  spaceBetween: 30,
  loop: true,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    400: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper(".testimonial", {
  speed: 600,
  spaceBetween: 30,
  loop: true,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
