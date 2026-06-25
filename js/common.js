// recommended
const swiper = new Swiper("#recommended .swiper", {
  loop: true,
  navigation: {
    nextEl: "#recommended .sectionSlider-next",
    prevEl: "#recommended .sectionSlider-prev",
  },
  slidesPerView: "auto",
  spaceBetween: 10,
  breakpoints: {
    750: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1020: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
});
